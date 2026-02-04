# SIGUIENTE BLOQUE - Cobalto-Sec

**Escrito por:** B2 - Análisis Web
**Fecha:** 2026-02-03

---

## Contexto

Se realizó análisis completo del código de la web:

- **Build exitoso**: `npm run build` sin errores, 87.2 kB First Load JS
- **7 posts MDX** publicados, 2 proyectos activos
- **46 tags** generados, 2 páginas de blog paginadas
- **LXC 104** corriendo con n8n + PostgreSQL (de B1)

Se identificaron bugs, mejoras de SEO, problemas de seguridad en headers, y oportunidades de integración con MarcaPersonal.

---

## Propuesta para el Próximo Bloque (B3)

### Objetivo Principal

Corregir bugs críticos y hacer mejoras de calidad al código web antes de agregar features nuevas.

### Prioridad 1 - BUGS CRÍTICOS (arreglar primero)

#### 1.1 Fix locale inconsistente (SEO)

- **Problema**: `seo.tsx` y `blog/[...slug]/page.tsx` usan `locale: 'en_US'` pero el sitio es `es_AR`
- **Archivos**: `app/seo.tsx`, `app/blog/[...slug]/page.tsx`
- **Fix**: Cambiar a `locale: 'es_AR'` o usar `siteMetadata.locale`
- **Impacto**: Google indexa el contenido como inglés en vez de español

#### 1.2 Fix bug de paginación del blog

- **Problema**: `blog/page.tsx` acepta `searchParams` pero siempre muestra página 1 (hardcoded `pageNumber = 1`)
- **Archivo**: `app/blog/page.tsx`
- **Fix**: Eliminar `searchParams` no usado, o redirigir a `/blog/page/1`
- **Impacto**: La paginación del blog no funciona desde la URL principal

#### 1.3 Fix bug de título de tags

- **Problema**: `tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)` convierte "security" en "S-ecurity"
- **Archivos**: `app/tags/[tag]/page.tsx`, `app/tags/[tag]/page/[page]/page.tsx`
- **Fix**: Extraer a utilidad con capitalización correcta por palabra
- **Impacto**: Títulos de tags se muestran mal

#### 1.4 Fix newsletter API route

- **Problema**: `api/newsletter/route.ts` tiene `export const dynamic = 'force-static'` en un endpoint POST
- **Archivo**: `app/api/newsletter/route.ts`
- **Fix**: Cambiar a `'force-dynamic'` o eliminar si no se usa
- **Impacto**: Subscripciones a newsletter no funcionarían

### Prioridad 2 - SEGURIDAD (headers y config)

#### 2.1 Fix headers duplicados en next.config.mjs

- **Problema**: Hay dos definiciones de `headers()` (una en config y otra como export). Solo la exportada se usa, la otra con CSP más completo se ignora.
- **Fix**: Unificar en una sola definición, mantener la versión más completa
- **Impacto**: Headers de seguridad parcialmente aplicados

#### 2.2 Consolidar CSP

- Mover al CSP unificado con soporte condicional para Umami y Giscus
- Agregar `report-uri` para monitoreo de violaciones CSP
- Evaluar reemplazo de `'unsafe-inline'` por nonce-based CSP (más complejo, puede ser fase posterior)

### Prioridad 3 - CALIDAD DE CÓDIGO

#### 3.1 Eliminar archivos legacy

- `app/head.tsx` - Duplica lo que ya hace `layout.tsx` via metadata API
- `app/Main.tsx` - Componente legacy no importado en ningún lado

#### 3.2 Consolidar datos de proyectos

- **Problema**: `projects/[slug]/page.tsx` tiene `PROJECT_MAPPING`, `PROJECT_TITLES`, `PROJECT_DESCRIPTIONS` hardcodeados, duplicando datos de `projectsData.ts`
- **Fix**: Mover todo a `projectsData.ts` y agregar campos `slug`, `longDescription`
- **Impacto**: Mantenibilidad, single source of truth

#### 3.3 Fix métricas hardcodeadas en componentes

- `ProjectCard.tsx` y `FeaturedProjects.tsx` usan `if (title === 'HoneyAI')` para decidir métricas
- **Fix**: Agregar campo `metrics` al interface `Project` en `projectsData.ts`
- **Impacto**: Se rompe silenciosamente si cambia el título de un proyecto

### Prioridad 4 - SEO AVANZADO

#### 4.1 Agregar structured data faltante

- Home: schema.org/Person con perfiles sociales
- About: schema.org/Person con bio, foto, contacto
- Projects: schema.org/CreativeWork por proyecto
- Blog posts ya tienen BlogPosting (OK)

#### 4.2 Agregar metadata de paginación

- `rel="prev"` y `rel="next"` en páginas paginadas
- Canonicals correctos (primera página apunta a `/blog`)

### Prioridad 5 - PREPARACIÓN PARA MARCAPERSONAL

#### 5.1 Agregar campos a projectsData.ts

```typescript
interface Project {
  title: string
  slug: string // NUEVO
  description: string
  longDescription?: string // NUEVO
  imgSrc: string
  href: string
  github?: string
  demoUrl?: string // NUEVO
  status: 'active' | 'completed' | 'in-progress'
  tags: string[]
  metrics?: ProjectMetric[] // NUEVO
  startDate?: string // NUEVO
}

interface ProjectMetric {
  label: string
  value: string
  icon?: string
}
```

#### 5.2 Preparar API route para métricas

- Crear `app/api/metrics/route.ts` como stub que devuelve JSON mock
- Definir interface de respuesta
- En B4+: conectar a LXC 104 via Tailscale o tunnel

---

## Posts - Análisis de Patrones

### Frontmatter consistente (6/7 posts)

| Campo   | Presente en todos | Notas                                                     |
| ------- | ----------------- | --------------------------------------------------------- |
| title   | 7/7               | OK                                                        |
| date    | 7/7               | OK                                                        |
| lastmod | 7/7               | OK                                                        |
| summary | 7/7               | OK                                                        |
| tags    | 7/7               | OK                                                        |
| draft   | 7/7               | OK                                                        |
| authors | 7/7               | Inconsistente: 5 usan `'default'`, 1 usa `'nico-padilla'` |
| images  | 5/7               | 2 posts sin images                                        |
| project | 6/7               | 1 post sin project (pentest-metasploitable)               |
| layout  | 1/7               | Solo `de-nmap-a-python-mejorado.mdx` especifica layout    |

### Problemas detectados

1. **Naming inconsistente**: `de-nmap-a-python-mejorado.mdx` no tiene fecha en nombre
2. **Author inconsistente**: Mezcla de `'default'` y `'nico-padilla'`
3. **Images vacías**: Algunos posts con `images: []` o placeholder `og-default.png`
4. **Date anomalía**: `2025-01-09-anatomia-ransomware.mdx` tiene `date: '2026-01-09'` (fecha 2026 pero nombre 2025)

---

## Build Metrics

| Métrica                | Valor                           |
| ---------------------- | ------------------------------- |
| First Load JS (shared) | 87.2 kB                         |
| Largest page JS        | 106 kB (`/blog/[...slug]`)      |
| Static pages           | ~100 (blog + tags + pagination) |
| Build errors           | 0                               |
| Build warnings         | 0                               |

---

## Contexto Importante para el Próximo

**Build:**

```bash
npm run dev          # Dev server localhost:3000
npm run build        # Build completo (verifica errores)
```

**Archivos clave a modificar en B3:**

```
app/seo.tsx                           # Fix locale
app/blog/page.tsx                     # Fix paginación
app/blog/[...slug]/page.tsx           # Fix locale
app/tags/[tag]/page.tsx               # Fix título tags
app/tags/[tag]/page/[page]/page.tsx   # Fix título tags
app/api/newsletter/route.ts           # Fix force-static
app/head.tsx                          # ELIMINAR
app/Main.tsx                          # ELIMINAR
next.config.mjs                       # Unificar headers
data/projectsData.ts                  # Expandir interface
app/projects/[slug]/page.tsx          # Usar projectsData
components/ProjectCard.tsx            # Usar metrics de data
components/FeaturedProjects.tsx       # Usar metrics de data
```

**NO tocar:**

- LXC 100-103 (no relacionados)
- LXC 104 (separar en otro bloque)
- Posts MDX existentes (no modificar contenido técnico)
- Estilos globales (CSS) sin preview

**Credenciales LXC 104 (referencia):**

- n8n: admin / cobalto_n8n_2026 (http://192.168.0.14:5678)
- PostgreSQL: marcapersonal / mp_cobalto_2026 (puerto 5432)
