# ARQUITECTURA - Cobalto-Sec Web

**Última actualización:** 2026-01-31

---

## Diagrama General

```
┌─────────────────────────────────────────────────────────────────┐
│                         USUARIO                                  │
│                    (cobalto-sec.tech)                           │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       VERCEL (CDN)                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Next.js 14 (App Router)                     │   │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │   │
│  │  │  /blog  │  │/projects│  │  /tags  │  │ /about  │    │   │
│  │  └────┬────┘  └────┬────┘  └────┬────┘  └─────────┘    │   │
│  │       │            │            │                       │   │
│  │       └────────────┴────────────┘                       │   │
│  │                    │                                    │   │
│  │                    ▼                                    │   │
│  │  ┌─────────────────────────────────────────────────┐   │   │
│  │  │              CONTENTLAYER                        │   │   │
│  │  │     (Build-time MDX Processing)                  │   │   │
│  │  └─────────────────────┬───────────────────────────┘   │   │
│  └────────────────────────┼────────────────────────────────┘   │
│                           │                                     │
└───────────────────────────┼─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB REPOSITORY                             │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  /data                                                    │   │
│  │  ├── /blog/*.mdx          ← Posts (Markdown + JSX)       │   │
│  │  ├── projectsData.ts      ← Datos de proyectos           │   │
│  │  ├── siteMetadata.js      ← Config del sitio             │   │
│  │  └── headerNavLinks.ts    ← Navegación                   │   │
│  │                                                           │   │
│  │  /public/static/images/   ← Assets estáticos             │   │
│  │  /components/             ← React components             │   │
│  │  /layouts/                ← Templates de posts           │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Componentes

### Next.js App Router (`/app`)

- **Qué hace:** Routing y renderizado de páginas
- **Tecnología:** Next.js 14+ con React Server Components
- **Ubicación:** `/app/`
- **Páginas principales:**
  - `/` - Homepage con proyectos destacados
  - `/blog` - Listado de posts
  - `/blog/[slug]` - Post individual
  - `/projects` - Listado de proyectos
  - `/tags` - Nube de tags
  - `/tags/[tag]` - Posts filtrados por tag

### Contentlayer

- **Qué hace:** Procesa archivos MDX en build-time, genera tipos TypeScript
- **Tecnología:** Contentlayer + MDX
- **Configuración:** `/contentlayer.config.ts`
- **Output:** Objetos tipados para posts, autores, etc.

### Componentes React (`/components`)

- **Qué hace:** UI reutilizable
- **Tecnología:** React + TypeScript + Tailwind
- **Componentes clave:**
  - `ProjectCard.tsx` - Card de proyecto
  - `FeaturedProjects.tsx` - Grid de proyectos destacados
  - `MDXComponents.tsx` - Componentes para render MDX

### Layouts (`/layouts`)

- **Qué hace:** Templates para diferentes tipos de posts
- **Opciones:**
  - `PostLayout` - 2 columnas con sidebar (default)
  - `PostSimple` - Minimalista
  - `PostBanner` - Con imagen hero

---

## Flujo de Datos

### Crear Post

```
1. Escribir .mdx en /data/blog/
2. Contentlayer detecta cambio (dev) o procesa (build)
3. Genera objeto tipado con metadata
4. Next.js renderiza usando layout seleccionado
5. Vercel sirve página estática
```

### Deploy

```
1. Push a branch main
2. GitHub notifica a Vercel
3. Vercel ejecuta `npm run build`
4. Contentlayer procesa todos los .mdx
5. Next.js genera páginas estáticas
6. CDN distribuye globalmente
7. Live en ~2 minutos
```

---

## Servicios y Puertos

| Servicio   | Puerto | Descripción                      |
| ---------- | ------ | -------------------------------- |
| Dev Server | 3000   | `npm run dev` - desarrollo local |
| Production | 443    | Vercel CDN - HTTPS               |

---

## Integraciones Externas

- **Vercel:** Hosting y CI/CD
- **GitHub:** Repositorio y version control
- **Kbar:** Command palette search
- **Pliny:** Analytics, newsletter, comments (opcional)

---

## Notas de Arquitectura

### Decisiones Técnicas

1. **Static Site Generation (SSG):** Todo pre-renderizado en build, máxima velocidad
2. **Contentlayer sobre CMS:** Git como fuente de verdad, no DB
3. **App Router:** Arquitectura moderna de Next.js, RSC habilitado
4. **Tailwind CSS:** Utility-first, fácil customización

### Performance

- Lighthouse Score: 95+
- First Load JS: <85kb
- Build Time: ~1-2 minutos

### Limitaciones

- No hay server-side rendering dinámico
- No hay base de datos
- Cambios requieren rebuild (no hot-reload en producción)
