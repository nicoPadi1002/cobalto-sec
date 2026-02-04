# INSTRUCCIONES - Cobalto-Sec Web

**Última actualización:** 2026-01-31

---

## Objetivo del Proyecto

Sitio web profesional de portfolio y blog técnico enfocado en ciberseguridad, threat intelligence y automatización SOC. El objetivo es demostrar capacidades mediante sistemas reales en producción, no métricas fabricadas.

---

## Stack Tecnológico

| Componente    | Tecnología                    |
| ------------- | ----------------------------- |
| Framework     | Next.js 14+ (App Router)      |
| Lenguaje      | TypeScript                    |
| Estilos       | Tailwind CSS                  |
| Contenido     | Contentlayer + MDX            |
| Hosting       | Vercel (auto-deploy)          |
| Repositorio   | GitHub                        |
| Template Base | Tailwind Next.js Starter Blog |

---

## Alcance

### Incluye

- ✅ Blog técnico con posts en MDX
- ✅ Página de proyectos con showcase
- ✅ Sistema de tags para categorización
- ✅ SEO optimizado (sitemap, RSS, meta tags)
- ✅ Dark mode
- ✅ Responsive design
- ✅ Search con Kbar

### No Incluye (por ahora)

- ❌ Newsletter / email capture
- ❌ Comentarios en posts
- ❌ Autenticación de usuarios
- ❌ E-commerce / pagos
- ❌ CMS externo (todo es Git-based)

---

## Estructura de Archivos

```
cobalto-sec/
├── app/                    # Next.js App Router
│   ├── blog/              # Sistema de blog
│   ├── projects/          # Página de proyectos
│   ├── tags/              # Sistema de tags
│   └── about/             # Página sobre mí
├── components/            # Componentes React
├── data/
│   ├── blog/             # 📝 Posts en .mdx
│   ├── projectsData.ts   # Datos de proyectos
│   └── siteMetadata.js   # Config del sitio
├── layouts/              # Templates de blog
└── public/static/        # Imágenes y assets
```

---

## Restricciones y Reglas

### Contenido Técnico

- **NUNCA modificar** comandos, outputs, IPs, configs en posts
- **NUNCA inventar** screenshots o métricas
- Preservar formato exacto de código y logs

### Formato de Posts

- Frontmatter completo (ver post-formatting-guide.md)
- Secciones numeradas (1., 1.1, 1.2)
- Callouts cada 300-400 palabras
- Longitud objetivo: 2000+ palabras

### Naming de Archivos

- Posts: `YYYY-MM-DD-titulo-en-kebab-case.mdx`
- Imágenes: `/public/static/images/[proyecto]/[nombre].jpg`

### Deployment

- **Siempre** hacer preview local antes de push
- Commits descriptivos: `Post: Título` o `Feature: Descripción`
- Auto-deploy activado: push a main = deploy

---

## Workflow de Trabajo

### Nuevo Post

1. Recibir contenido (de otro proyecto Claude)
2. Formatear según estándares
3. Escribir en `/data/blog/YYYY-MM-DD-slug.mdx`
4. `npm run dev` → verificar en localhost:3000
5. `git add . && git commit -m "Post: ..." && git push`

### Cambio de Código

1. Identificar archivos a modificar
2. Hacer cambios
3. `npm run dev` → verificar
4. `git add . && git commit -m "Feature: ..." && git push`

---

## Proyectos Actuales

| Proyecto             | Slug         | Estado |
| -------------------- | ------------ | ------ |
| HoneyAI              | `honey-ai`   | Active |
| SIEM/SOAR Automation | `wazuh-soar` | Active |

---

## Tags Existentes

**Tecnologías:** wazuh, proxmox, docker, lxc, python, bash, typescript, n8n, ollama, ai, grafana, elasticsearch, cowrie

**Ciberseguridad:** siem, soc, soar, penetration-testing, honeypot, threat-intelligence, incident-response, automation, security-operations, fim, brute-force, misp

**Conceptos:** homelab, self-hosted, monitoring, logging, tutorial, proyecto, lab, troubleshooting, analisis, research

---

## Documentación Relacionada

- `arquitectura-web.md` - Estructura técnica del sitio
- `post-formatting-guide.md` - Guía de formato de posts
- `deployment-workflow.md` - Proceso de deployment
- `mcp-usage-guide.md` - Uso de MCP para automatización
- `features-roadmap.md` - Features actuales y pendientes
