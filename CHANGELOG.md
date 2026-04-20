# CHANGELOG - Cobalto-Sec Web

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

## [B6 - Rebrand Amber CRT + Bug Mascot] - 2026-04-20

### Agregado

- **Paleta "Amber CRT"** (OKLCH en Tailwind v4 `@theme`):
  - Anchor rojo sangre `#dc2626` (reemplaza warning `#ef4444`)
  - Acento amber phosphor `#ffb000` (reemplaza cyan `#06b6d4`, sale del pool visual del sector infosec)
  - Neutrals warm (hue ~70) en vez de blue-tinted
  - Bases `#0a0908` warm-black (dark) / `#f5f0e8` paper (light)
  - Override de rampa `--color-red-*` completa para re-tintear 271 usos hardcoded sin find/replace
- **`components/BugMascot.tsx`** — Mascot beetle SVG inline (head + duotone elytra + central split + 6 patas + 2 antenas). Modes: `idle` (walking CSS animation), `squashed` (404), `static` (footer).
- **`components/CrtToggle.tsx`** — Modo CRT ortogonal vía `data-crt=on` + `localStorage`. Hotkey `~` global (ignora inputs). Scanlines overlay (`body::after` repeating-linear-gradient) + phosphor text-shadow.
- **Press Start 2P** pixel font vía `next/font/google`. Uso restringido: mascot label, números de StatsStrip, PGP fingerprint.
- **Fondo CRT global** (`app/layout.tsx`): 4 layers — graph paper grid 48×48, amber phosphor dots en intersecciones, radial glow amber desde top, vignette en bordes.
- **Nav brackets**: items envueltos en `[ items ]` + `font-mono` + rojo en brackets. Header + MobileNav + NavDropdown.
- **Hero rediseñado**: kicker `[ seguridad · ofensiva · profesional ]` monoespacio, role con cursor `_` blinking, padding reducido (`pt-6/10/14 pb-16/20/28`).
- **404 rediseñada**: bug aplastado (squashed) + copy `$ cat /requested/path → No such file or directory`.
- **Footer**: bug static + CRT toggle button visible + bloque PGP opcional (gated por `NEXT_PUBLIC_PGP_FINGERPRINT` env var).
- **Logo**: gradient sky → sangre `#dc2626` + logotipo warm-gray `#a6a09b`.

### Refactorizado

- **`components/FadeIn.tsx`**: reescrito como CSS puro (sin IntersectionObserver, sin JS client-side). Contenido siempre renderizado, animación como progressive enhancement via keyframe `cs-fade-in`. Respeta `prefers-reduced-motion`. **Fix crítico**: antes dependía de `opacity-0` inicial + IO → cuando JS no hidrataba (cache bundler roto), el body del home quedaba completamente invisible.
- **StatsStrip**: IntersectionObserver ahora es opcional enhancement. Grid siempre renderizado (sin `opacity-0` inicial).
- **Hero**: glow accents viven sobre el fondo CRT global (no crean gradient local que compita).

### Corregido

- Build cache stale causaba HTML SSR sin contenido después del Hero. Solución: `rm -rf .next .contentlayer && yarn dev`. FadeIn rewrite evita que se repita.
- `@iconify/react` runtime fetch fallaba silenciosamente en primera carga → reemplazado por SVG inline en BugMascot (100% reliable, sin network).

### Eliminado

- `components/LayoutWrapper.tsx` — archivo muerto (usaba Inter, nadie lo importaba).
- `app/services/page.tsx` — redirect `/services → /servicios` ya vigente en `next.config.mjs`, el archivo nunca se renderizaba.
- `app/mascot-preview/` — ruta interna temporal usada para elegir el mascot.

### Infra

- Dependencia nueva: `@iconify/react@6.0.2` (se dejó instalada por si se usa en futuro, pero BugMascot es inline).
- Repo movido de `C:\Users\nicol\Desktop\WEB\cobalto-sec-clean\` → `C:\Proyectos\CobaltoSec-Web\` (alineado al patrón del resto de webs). Vercel remote intacto.

### Referencias de diseño

- **Synacktiv** — mascot animado protagónico, counters Synacktiv-style en StatsStrip.
- **Latacora** — easter egg CRT mode como layer ortogonal (no tema separado).
- **Terminal Shop** — brackets en nav, bloque PGP como credibility signal.

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
