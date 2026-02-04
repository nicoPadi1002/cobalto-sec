# SIGUIENTE BLOQUE - Cobalto-Sec

**Escrito por:** B1 - MarcaPersonal Infra
**Fecha:** 2026-02-03

---

## Contexto

Se completó el setup de infraestructura para el módulo MarcaPersonal:

- LXC 104 (`marcapersonal`) creado en Proxmox Notebook-HP (192.168.0.14)
- Docker con n8n + PostgreSQL 16 corriendo
- n8n accesible en http://192.168.0.14:5678
- PostgreSQL healthy en puerto 5432, DB `marcapersonal`

La web (Next.js en Vercel) sigue sin cambios de código. Solo se actualizó documentación.

---

## Propuesta para el Próximo Bloque (B2)

### Objetivo Principal

Crear el primer workflow de n8n que recolecte métricas de GitHub y las guarde en PostgreSQL. Opcionalmente, instalar Tailscale en LXC 104.

### Tareas Sugeridas

1. **Configurar n8n inicial**
   - Acceder a http://192.168.0.14:5678
   - Crear cuenta owner
   - Configurar credenciales de GitHub API (Personal Access Token)

2. **Crear tabla de métricas en PostgreSQL**
   - Tabla `metrics` con campos: source, metric_name, metric_value, collected_at
   - Tabla `github_stats` con campos: repo, stars, forks, commits_30d, languages

3. **Workflow n8n: GitHub Metrics Collector**
   - Trigger: cron cada 12h
   - Nodo HTTP: consultar GitHub API repos de nicoPadi1002
   - Nodo PostgreSQL: guardar/actualizar métricas
   - Repos objetivo: cobalto-sec, honey-ai, y otros públicos

4. **Workflow n8n: RSS Blog Counter**
   - Leer feed.xml de cobalto-sec.tech
   - Contar posts publicados, último post
   - Guardar en tabla metrics

5. **(Opcional) Instalar Tailscale en LXC 104**
   - Para acceso remoto seguro a n8n y PostgreSQL

### Criterios de Éxito Sugeridos

- [ ] n8n tiene workflow GitHub activo y ejecutándose cada 12h
- [ ] PostgreSQL tiene tabla con métricas reales de GitHub
- [ ] Al menos una ejecución exitosa del workflow

---

## Pendientes de la Web (sin cambios de código aún)

- Filtro de posts por proyecto (alta prioridad, de bloque anterior)
- Dashboard de métricas (depende de B2 - API backend)
- Newsletter/Contact form

---

## Pendientes de Infraestructura

- [ ] Tailscale en LXC 104
- [ ] API REST de métricas (puerto 3001) - decidir Node.js vs FastAPI
- [ ] Backup automatizado de PostgreSQL

---

## Contexto Importante para el Próximo

**Acceso a LXC 104:**

```bash
ssh root@192.168.0.118    # → Proxmox host
pct exec 104 -- bash      # → Dentro del LXC
# O directamente:
ssh root@192.168.0.14     # Si SSH está configurado en el LXC
```

**Servicios Docker:**

```bash
cd /opt/marcapersonal
docker compose ps          # Ver estado
docker compose logs -f     # Ver logs
docker compose restart     # Reiniciar
```

**Credenciales:**

- n8n: admin / cobalto_n8n_2026 (http://192.168.0.14:5678)
- PostgreSQL: marcapersonal / mp_cobalto_2026 (puerto 5432)

**NO tocar:**

- LXC 100-102 (HoneyAI)
- LXC 103 (CyberLab)
- Código de la web (este repo) sin plan aprobado
