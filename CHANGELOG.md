# CHANGELOG - Cobalto-Sec Web

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

## [B4 - Dashboard + Umami + CSP] - 2026-02-06

### Agregado

- `/dashboard` — Dashboard privado de métricas con password auth (cookie SHA256)
  - 5 API routes: `/api/dashboard/{auth,umami,cloudflare,email,gsc}`
  - 8 componentes: DashboardShell, MetricCard, Sparkline, WebTrafficSection, InfraSection, EmailSection, SeoSection, LinkedInSection
  - Mock data fallback cuando env vars no están configuradas
  - Grid 2-col desktop, secciones independientes con loading/error states
- Umami self-hosted (LXC 104, container mp-umami, puerto 3000)
  - Website ID: `10dd27da-b625-49ce-900a-8033a98167ed`
  - Tracking script inyectado via `next/script` (hardcoded, no env vars en SSG)

### Corregido

- CSP: hardcodear `analytics.cobalto-sec.tech` en `script-src` (env vars no disponibles en SSG build)
- CSP: permitir `static.cloudflareinsights.com` en `script-src`
- Umami script: env vars no se resuelven en build time → inyección directa con URL hardcoded

### Env vars nuevas (Vercel, server-side)

- `DASHBOARD_PASSWORD` — Password para acceso al dashboard
- `UMAMI_API_URL`, `UMAMI_USERNAME`, `UMAMI_PASSWORD`, `UMAMI_WEBSITE_ID` — Umami API
- `CF_API_TOKEN`, `CF_ZONE_ID` — Cloudflare GraphQL
- `EMAIL_METRICS_URL` — R2 URL para métricas de email
- `GSC_CREDENTIALS`, `GSC_SITE_URL` — Google Search Console service account

---

## [B2 - Análisis Web] - 2026-02-03

### Analizado

- Código completo: 21 páginas/routes, 27 componentes, 6 layouts, 8 configs
- Build verificado: 0 errores, 87.2 kB First Load JS
- 7 posts MDX analizados (frontmatter, patrones, consistencia)

### Identificado

- 4 bugs críticos: locale en_US, paginación blog, títulos de tags, newsletter API
- Headers de seguridad duplicados en next.config.mjs (solo 1 se aplica)
- Datos de proyectos duplicados en 3 archivos distintos
- Métricas de proyectos hardcodeadas con string matching (`if title === 'HoneyAI'`)
- 2 archivos legacy sin usar (head.tsx, Main.tsx)
- Structured data faltante en home, about, projects

### Modificado

- `SIGUIENTE.md` - Plan B3 completo con 5 niveles de prioridad y lista de archivos

---

## [B1 - MarcaPersonal Infra] - 2026-02-03

### Agregado

- `CLAUDE.md` - Contexto completo del proyecto para Claude Code
- LXC 104 (`marcapersonal`) en Proxmox Notebook-HP
  - Ubuntu 24.04, 2GB RAM, 20GB disco, IP `192.168.0.14`
  - Docker 29.2.1 + Compose v5.0.2
  - n8n (puerto 5678) con persistencia en PostgreSQL
  - PostgreSQL 16 Alpine (puerto 5432), DB `marcapersonal`
  - Estructura en `/opt/marcapersonal/` con docker-compose.yml

### Modificado

- `PROJECT.yaml` - Agregada sección marca_personal con infra desplegada
- `SIGUIENTE.md` - Actualizado con próximos pasos de MarcaPersonal

### Notas

- AppArmor removido del LXC para compatibilidad con Docker
- n8n requiere UID 1000 en volumen data/n8n
- Fase 1 parcial: infra base lista, falta API de métricas y workflows

---

## [Fase 2 - Reestructuración] - 2026-01-31

### Agregado

- `PROJECT.yaml` - Datos del proyecto para HQ Central
- `SIGUIENTE.md` - Propuesta para próximo bloque
- `INSTRUCCIONES.md` - Documentación de uso del proyecto
- `ARQUITECTURA.md` - Diagrama y descripción técnica
- `CHANGELOG.md` - Este archivo

### Modificado

- Ninguno (archivos nuevos)

### Notas

- Nueva estructura de trabajo: HQ Central único
- Ya no hay HQ dentro del proyecto, solo documentación de estado
- Proyecto no tenía archivos 00-\*.md previos (estaba limpio)

---

## [Rediseño Completo] - 2026-01-XX

### Agregado

- Métricas reales de proyectos en producción
- Sistema de proyectos con categorización
- Campo `project` en frontmatter de posts
- Smooth scroll animations
- SEO optimizations

### Modificado

- Layout de homepage con proyectos destacados
- Cards de proyecto con badges de estado
- Sistema de blog con filtrado mejorado

---

## [Inicial] - 2025-XX-XX

### Agregado

- Setup inicial basado en Tailwind Next.js Starter Blog
- Primeros posts de blog
- Página de proyectos
- Configuración de Vercel
- Dark mode
- Sistema de tags

---

## Convención de Commits

- `Post:` → Nuevo post o modificación de post
- `Feature:` → Nueva funcionalidad
- `Fix:` → Corrección de bug
- `Update:` → Actualización de contenido existente
- `Style:` → Cambios visuales/CSS
- `Refactor:` → Refactorización de código
- `Config:` → Cambios en configuración
- `Docs:` → Documentación
