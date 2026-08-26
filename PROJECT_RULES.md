# IMMUTABLE DESIGN SYSTEM & PROJECT ARCHITECTURE SPECIFICATION

> **CRITICAL MANDATE: PERMANENT & UNCHANGEABLE CORE ARCHITECTURE**
> Under NO circumstances should any agent, automated script, refactor, or future tool call alter, replace, overwrite, or mutate the core design system, spacing, animations, typography, fonts, colors, box shapes, or DOM structure of this website.

---

## 🔒 1. IMMUTABLE DESIGN SYSTEM PROPERTIES

### 📐 Geometry & Spacing
- **Dynamic Viewport Unit**: `--vw` (`window.innerWidth / 100`) and `--vh` (`window.innerHeight / 100`) MUST remain the sole fluid sizing basis.
- **Box Shapes & Corner Crosshairs**: Pixel-corner SVG decorations (`M9 5H11V7H13V9...`), pixelated badges, and exact aspect ratios are permanent.
- **Card Geometry**: 3D perspective flip and tilt geometry (`perspective: 1200px`, `transform-style: preserve-3d`) are locked.

### 🎨 Colors & Aesthetics
- **Primary Canvas Background**: Pure Pitch Black (`#000000` / `#09090b`).
- **Surface / Card Backgrounds**: Subtle Dark Matte (`#111113`, `#18181b`).
- **Accent Highlight**: Neon Green Pulse (`#00ff66`) on preloader and focus indicators.
- **Typography Colors**: `#ffffff` (Headlines), `#a1a1aa` (Subheadings/Body), `#71717a` (Muted/Footnotes).
- **Glassmorphism**: `backdrop-filter: blur(24px)` on navigation drawers and overlays.

### 🔤 Typography & Fonts
- **Primary Typefaces**:
  - `font-mono-medium` (Code & Micro-labels)
  - `font-normal-medium` (Body Copy)
  - `font-narrow-semibold` (Headline Typography)
  - `webflow-icons` & embedded pixel SVG icon glyphs.

### 🎬 Motion & Interaction Engine
- **3D Card Flip & Tilt**: Click-to-flip 180° physics and real-time mousemove cursor tilt.
- **Lenis Smooth Inertial Scrolling**: 60/120fps physics.
- **Swup Seamless Page Transitions**: Instant AJAX routing between `/`, `/prozess`, `/preis`, `/kontakt`, `/impressum`, `/datenschutz`, `/agb`.
- **Preloader Box Flip**: 4-box pixel animation with smooth fadeout.

---

## 📁 2. PROTECTED FILE HIERARCHY
The following files and directories are locked against destructive overwrites:
1. `public/showcase/index.html` (Service / Home)
2. `public/showcase/prozess.html` (Process)
3. `public/showcase/preis.html` (Pricing)
4. `public/showcase/kontakt.html` (Contact)
5. `public/showcase/impressum.html`, `datenschutz.html`, `agb.html` (Legal)
6. `public/showcase/styles.css` (Master Style Engine)
7. `public/showcase/scripts/app.js` (Master Interaction Engine)
8. `next.config.ts` (Route Rewrites)
9. `src/app/` (Next.js Application Shell)

---

## 🛡️ 3. AGENT OPERATING INSTRUCTION
When asked to build features or add extensions:
- Extend via non-destructive modules.
- DO NOT strip CSS rules from `styles.css`.
- DO NOT remove animations from `scripts/app.js`.
- DO NOT alter the core typography or color palette.
