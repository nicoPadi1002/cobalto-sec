# SIGUIENTE - CobaltoSec Web

**Última actualización:** 2026-04-20
**Estado:** B6 Completado — Rebrand Amber CRT + Bug Mascot

---

## 📊 Estado Actual

### B6 Completado (2026-04-20)

**Rebrand estético "Amber CRT"** combinando referencias de Synacktiv + Latacora + Terminal Shop:

- ✅ Paleta sangre `#dc2626` + amber phosphor `#ffb000` + warm neutrals (reemplaza cyan genérico del sector)
- ✅ Bug mascot SVG inline en Hero (walking), 404 (squashed), Footer (static)
- ✅ CRT mode ortogonal — hotkey `~` + toggle visible en footer, scanlines + phosphor glow
- ✅ Nav con brackets `[ items ]` font-mono
- ✅ Pixel font Press Start 2P en StatsStrip numbers
- ✅ Fondo CRT global: grid + amber dots + radial glow + vignette
- ✅ FadeIn refactorizado a CSS puro (evita body invisible por JS roto)
- ✅ Logo sangre, cleanup de archivos muertos (LayoutWrapper, app/services, mascot-preview)
- ✅ 3 commits en `main`, Vercel auto-deploy activo

**Web:** https://cobalto-sec.tech

---

## 🎯 Próximos Pasos

### Prioridad 1 — Identity signals

- [ ] **PGP key real**: generar key + setear `NEXT_PUBLIC_PGP_FINGERPRINT` en Vercel + subir `/pgp.asc` a `public/`. Desbloquea el bloque PGP en footer.
- [ ] **Copy del Hero**: revisar "Identifico y exploto vulnerabilidades..." — ahora con estética nueva, puede ser más punchy / técnico (ej. comando copy-paste estilo Terminal Shop).
- [ ] **Sección "cómo trabajo"** o **"metodología"** que aproveche el tono terminal — prompts, outputs fake, stages PTES renderizados como CLI.

### Prioridad 2 — Contenido técnico

- [ ] Posts nuevos aprovechando datos reales: HoneyAI 81K sesiones, CyberLab lead-gen, pentest walkthroughs.
- [ ] Case study visible en `/casos` con métricas concretas (hoy es placeholder).
- [ ] Landing específica para "pentest LAN" / "red team" con el arsenal pentest-lan del proyecto principal.

### Prioridad 3 — Feature polish

- [ ] **Bug mascot 404 interactive**: click en el bug squashed lo anima (wiggle + "respawn") — Easter egg sutil.
- [ ] **CRT mode beep** opcional (WebAudio) al activar — quedó deferido.
- [ ] **Filtro posts por proyecto** en `/blog` (seguía pendiente de B5).
- [ ] **Newsletter/Contact form** funcional (Formspree ya está permitido en CSP).

### Prioridad 4 — Observability del rebrand

- [ ] Medir en Umami si la paleta nueva cambia bounce rate / tiempo en página / CTR a Ver Servicios.
- [ ] Lighthouse: verificar que Press Start 2P no degrade performance (ya tiene `display: 'swap'`).

---

## 📋 Pendientes Técnicos

| Item                      | Prioridad | Estado                             |
| ------------------------- | --------- | ---------------------------------- |
| PGP fingerprint real      | Alta      | Bloqueado hasta generar key        |
| Copy hero punchy          | Alta      | Pendiente — revisar con tono nuevo |
| Posts técnicos HoneyAI    | Alta      | Pendiente (heredado de B5)         |
| Case study visible        | Media     | Placeholder en `/casos`            |
| Filtro posts por proyecto | Media     | Pendiente (heredado de B5)         |
| Newsletter form           | Baja      | Pendiente (heredado de B5)         |
| Bug mascot easter egg 404 | Baja      | Idea                               |
| CRT beep sonoro           | Baja      | Deferido de B6                     |

---

## 🔗 Infraestructura Relacionada

**Repo local:** `C:\Proyectos\CobaltoSec-Web\` (movido en B6 desde Desktop)
**GitHub:** `nicoPadi1002/cobalto-sec` branch `main`
**Vercel project:** `cobalto-sec` → cobalto-sec.tech (auto-deploy desde main)

**LXC 104 (Marca Personal Backend):** 192.168.0.14

- n8n http://192.168.0.14:5678
- PostgreSQL 5432
- Umami self-hosted
- Estado: Operativo

---

**NOTA:** Rebrand visual cerrado. Prioridad ahora: contenido técnico que aproveche el tono nuevo + PGP real para desbloquear el signal de credibilidad en el footer.
