# CLAUDE.md - Cobalto-Sec Web

## Proyecto

Portfolio profesional y blog técnico de ciberseguridad de **Nicolás Padilla**. Muestra proyectos reales en producción con métricas auténticas (no fabricadas). Desplegado en https://cobalto-sec.tech.

## Stack

| Componente      | Tecnología                  | Notas                        |
| --------------- | --------------------------- | ---------------------------- |
| Framework       | Next.js 14 (App Router)     | SSG, React Server Components |
| Lenguaje        | TypeScript                  | Strict mode                  |
| Estilos         | Tailwind CSS v4             | PostCSS plugin, tema OKLCH   |
| Contenido       | Contentlayer2 + MDX         | Build-time processing        |
| Hosting         | Vercel                      | Auto-deploy desde `main`     |
| Búsqueda        | Kbar                        | Command palette              |
| Analytics       | Umami (self-hosted, activo) | analytics.cobalto-sec.tech   |
| Package Manager | Yarn 3.6.1                  |                              |

## Estructura de Archivos

```
app/                    # Next.js App Router (páginas)
  blog/                 # /blog, /blog/[slug], /blog/page/[page]
  projects/             # /projects, /projects/[slug]
  tags/                 # /tags, /tags/[tag]
  about/                # /about
  dashboard/            # /dashboard (privado, password-protected)
  api/                  # API routes (newsletter, dashboard, honeypot-data)
components/             # ~34 componentes React
  dashboard/            # 8 componentes del dashboard privado
layouts/                # 6 templates de posts (PostLayout, PostSimple, PostBanner, etc.)
data/
  blog/*.mdx            # Posts (7 publicados)
  authors/*.mdx         # Perfiles de autor
  projectsData.ts       # Metadata de proyectos
  siteMetadata.js       # Config global del sitio
  headerNavLinks.ts     # Navegación
css/
  tailwind.css          # Tema custom (colores cyan/sky, Space Grotesk)
  prism.css             # Syntax highlighting
public/
  static/images/        # Assets de posts y proyectos
contentlayer.config.ts  # Schema de contenido MDX
next.config.mjs         # CSP headers, webpack config
```

## Comandos

```bash
npm run dev          # Dev server en localhost:3000
npm run build        # Build producción (contentlayer + next build)
npm run serve        # Servir build local
npm run lint         # ESLint --fix
npm run typecheck    # tsc --noEmit
npm run analyze      # Bundle analyzer
npm run clean        # Limpiar .next, cache
```

## Convenciones

### Posts MDX

- Nombre: `YYYY-MM-DD-titulo-en-kebab-case.mdx`
- Frontmatter obligatorio: title, date, summary, tags, draft, authors, layout
- Campo `project`: `'honey-ai'` | `'wazuh-soar'` | omitir
- Imágenes en: `/public/static/images/[proyecto]/`
- Longitud objetivo: 2000+ palabras
- Callouts cada 300-400 palabras

### Commits

- `Post: Título del post`
- `Feature: Descripción de feature`
- `Fix: Descripción del fix`

### Reglas estrictas

- NUNCA inventar métricas o screenshots
- NUNCA modificar comandos/outputs técnicos en posts existentes
- Siempre preview local antes de push
- Push a `main` = deploy automático

## Proyectos Actuales

| Proyecto             | Slug         | Estado | Métricas                          |
| -------------------- | ------------ | ------ | --------------------------------- |
| HoneyAI              | `honey-ai`   | Active | 79K+ sesiones SSH, 573 IPs únicas |
| SIEM/SOAR Automation | `wazuh-soar` | Active | 80K+ eventos procesados           |

## Arquitectura

```
MDX files (/data/blog/)
  → Contentlayer (build-time)
    → TypeScript types + computed fields
      → Next.js SSG (static HTML)
        → Vercel CDN
```

- Git es la base de datos (no hay DB)
- Todo se pre-renderiza en build
- Cambios requieren rebuild

## Live Dashboard (/live)

Dashboard en tiempo real del honeypot HoneyAI.

- **Data URL**: `https://pub-60494eebccb34036a63a5d8dbbb9f43d.r2.dev/honeypot-live.json`
- **Env var**: `NEXT_PUBLIC_HONEYPOT_DATA_URL` (set in Vercel + .env.local)
- **Pipeline**: LXC 104 script → Loki (LXC 102) → sanitize → Cloudflare R2
- **Script**: `/opt/marcapersonal/scripts/honeypot-to-r2.py` en LXC 104
- **Cron**: `*/5 * * * *` — cada 5 minutos
- **Log**: `/var/log/honeypot-to-r2.log` en LXC 104
- **GeoIP cache**: `/opt/marcapersonal/scripts/.geoip_cache.json`
- **R2 bucket**: `honeyai-live` (Cloudflare)
- **Fallback**: Si `NEXT_PUBLIC_HONEYPOT_DATA_URL` no está definida, usa mock data

## Private Dashboard (/dashboard)

Dashboard de métricas privado, protegido por password.

- **Auth**: Cookie `dashboard_auth` (SHA256 hash de `DASHBOARD_PASSWORD` env var)
- **Secciones**: Web Traffic (Umami), Infrastructure (Cloudflare), Email Outreach (R2), SEO (GSC), LinkedIn (placeholder)
- **API routes**: `/api/dashboard/{auth,umami,cloudflare,email,gsc}` — cada una verifica cookie
- **Fallback**: Mock data en `data/mock/dashboard-metrics.json` cuando env vars no configuradas
- **Layout**: `max-w-7xl`, grid 2-col en desktop
- **No aparece en nav** — acceso solo por URL directa

### Env vars (server-side, en Vercel)

```
DASHBOARD_PASSWORD=<elegido por el usuario>
UMAMI_API_URL=https://analytics.cobalto-sec.tech
UMAMI_USERNAME=admin
UMAMI_PASSWORD=cobalto_umami_2026
UMAMI_WEBSITE_ID=10dd27da-b625-49ce-900a-8033a98167ed
CF_API_TOKEN=<token Cloudflare>
CF_ZONE_ID=85411ee5b08aae9f73c6a84a47ea3c11
EMAIL_METRICS_URL=<R2 URL, configurar después>
GSC_CREDENTIALS=<JSON string del service account>
GSC_SITE_URL=sc-domain:cobalto-sec.tech
```

## Features Pendientes (prioridad)

1. **Alta**: Filtro de posts por proyecto (`/projects/[slug]/posts`)
2. **Media**: Related posts automáticos
3. **Baja**: Comentarios (Giscus)
4. **Deuda técnica**: Post `de-nmap-a-python-mejorado.mdx` sin fecha en nombre

## Perfiles del autor

- GitHub: https://github.com/nicoPadi1002
- LinkedIn: https://www.linkedin.com/in/nicopadilla-sec/
- Email: nicolas@cobalto-sec.tech

---

## Módulo MarcaPersonal

### Objetivo

Expandir Cobalto-Sec con un sistema de métricas, automaciones y contenido que fortalezca la marca personal profesional. Separado en dos capas: frontend (en esta web) y backend (en LXC 104 del homelab).

### Infraestructura (LXC 104) - DESPLEGADO

| Campo        | Valor                           |
| ------------ | ------------------------------- |
| VMID         | 104                             |
| Hostname     | `marcapersonal`                 |
| OS           | Ubuntu 24.04 LTS                |
| IP LAN       | `192.168.0.14`                  |
| RAM          | 2 GB                            |
| Disco        | 20 GB                           |
| Cores        | 2                               |
| Proxmox Host | Notebook-HP (`192.168.0.118`)   |
| Features     | `nesting=1` (Docker compatible) |
| Onboot       | Sí                              |

### Servicios corriendo

| Servicio          | Container     | Puerto              | Estado  | Acceso                                     |
| ----------------- | ------------- | ------------------- | ------- | ------------------------------------------ |
| **n8n**           | `mp-n8n`      | `192.168.0.14:5678` | Running | `admin` / `cobalto_n8n_2026`               |
| **PostgreSQL 16** | `mp-postgres` | `192.168.0.14:5432` | Healthy | DB: `marcapersonal`, user: `marcapersonal` |
| **Umami**         | `mp-umami`    | `192.168.0.14:3000` | Running | `admin` / `cobalto_umami_2026`             |

### Archivos en LXC 104

```
/opt/marcapersonal/
  docker-compose.yml    # n8n + PostgreSQL
  .env                  # Credenciales (no commitear)
  data/
    n8n/                # Volumen persistente n8n
    postgres/           # Volumen persistente PostgreSQL
  config/               # Configs adicionales (futuro)
```

### Qué va en la web (este repo)

| Componente                   | Ubicación                       | Estado       |
| ---------------------------- | ------------------------------- | ------------ |
| Dashboard de métricas        | `/app/dashboard/`               | IMPLEMENTADO |
| MetricCard + Sparkline       | `/components/dashboard/`        | IMPLEMENTADO |
| API routes dashboard         | `/app/api/dashboard/{5 routes}` | IMPLEMENTADO |
| Sección "Actividad reciente" | En homepage o `/about`          | Pendiente    |
| Página de logros/certs       | `/app/achievements/` (opcional) | Pendiente    |

### Qué falta en LXC 104 - POR IMPLEMENTAR

| Servicio            | Puerto | Descripción                                    |
| ------------------- | ------ | ---------------------------------------------- |
| **API de métricas** | 3001   | API REST que agrega datos de múltiples fuentes |
| **Tailscale**       | -      | Acceso remoto seguro al LXC                    |

### Flujo de datos

```
Fuentes externas                  LXC 104 (192.168.0.14)      Web (Vercel)
┌──────────────┐            ┌─────────────────┐           ┌──────────────────┐
│ GitHub API   │──┐         │                 │           │                  │
│ LinkedIn API │──┤   n8n   │  Cron cada 12h  │  API REST │  /api/metrics    │
│ Google GA4   │──├────────→│  → Recolecta    │──────────→│  → Proxy/Cache   │
│ Umami Stats  │──┤         │  → Normaliza    │           │  → Renderiza en  │
│ Blog RSS     │──┘         │  → Guarda en DB │           │    Dashboard     │
└──────────────┘            └─────────────────┘           └──────────────────┘
```

### Integraciones posibles

| Integración                | Datos obtenibles                                    | Dificultad                                   | Prioridad |
| -------------------------- | --------------------------------------------------- | -------------------------------------------- | --------- |
| **GitHub API**             | Repos, stars, commits, contributions, languages     | Baja (API pública + token)                   | Alta      |
| **Google Analytics (GA4)** | Pageviews, sesiones, fuentes de tráfico, top posts  | Media (OAuth2 service account)               | Alta      |
| **Umami**                  | Visitas, referrers, países (si ya está configurado) | Baja (API propia)                            | Alta      |
| **LinkedIn API**           | Conexiones, vistas de perfil, engagement de posts   | Alta (OAuth2 restringido, scraping limitado) | Media     |
| **n8n**                    | Orquestar todas las recolecciones, webhooks         | Baja (ya en uso en HoneyAI)                  | Alta      |
| **RSS propio**             | Conteo de posts, últimas publicaciones              | Muy baja (feed.xml ya existe)                | Alta      |
| **Credly/Acclaim**         | Certificaciones, badges                             | Baja (API pública)                           | Baja      |
| **Wakatime**               | Horas de código, lenguajes más usados               | Baja (API con token)                         | Baja      |

### Notas sobre LinkedIn API

LinkedIn restringe su API a apps aprobadas por LinkedIn Marketing Developer Platform. Las opciones realistas son:

1. **Perfil público scraping** (limitado, puede cambiar)
2. **Manual/semi-automático**: Actualizar métricas manualmente o con screenshot parsing
3. **Phantom Buster / similar** (servicio externo, costo)
4. **OpenAPI Community Management**: Si se aprueba la app

Recomendación: empezar sin LinkedIn, agregar cuando haya una solución estable.

### Fases sugeridas

**Fase 1 - Base**: Setup LXC 104, instalar n8n, crear API de métricas con GitHub + RSS
**Fase 2 - Analytics**: Integrar GA4/Umami, dashboard en la web (**COMPLETADA** — dashboard desplegado 2026-02-06)
**Fase 3 - Automaciones**: Auto-publicar en redes, digest semanal, alertas
**Fase 4 - LinkedIn**: Explorar integración cuando haya API access estable

### Decisiones tomadas

- [x] Base de datos: **PostgreSQL 16** (desplegado en LXC 104)
- [x] Orquestación: **n8n** con persistencia en PostgreSQL (desplegado)
- [x] Autenticación del dashboard: **Privado** (password + cookie SHA256)
- [x] Dashboard: **Next.js API routes** (sin backend separado, cada sección llama su fuente directo)
- [x] Umami: **Self-hosted** en LXC 104, expuesto vía Cloudflare Tunnel

### Decisiones pendientes

- [ ] Dominio/subdominio para API REST de métricas (`api.cobalto-sec.tech` vs ruta interna)
- [ ] Tailscale en LXC 104 para acceso remoto
- [ ] Cron en LXC 104 para subir `email.json` a R2 (Email Outreach sección)
