# CHANGELOG - Cobalto-Sec Web

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

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
