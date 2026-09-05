---
name: Obsidian Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#8392a6'
  on-tertiary-container: '#1c2b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  surface-elevated: '#1E293B'
  surface-stroke: '#334155'
  success-vibrant: '#10B981'
  on-surface-muted: '#64748B'
typography:
  display-result:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-output:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  gutter: 1.5rem
  container-max: 1100px
---

## Brand & Style
The design system evolves into a high-performance dark aesthetic, maintaining its "Precision Geometry" roots while shifting toward a modern, developer-centric workspace. It is designed for professionals who require high-contrast clarity during long working sessions in low-light environments.

The style is **Minimalist / Modern** with a focus on depth through tonal layering rather than heavy shadows. The UI evokes a sense of "Expert Tooling"—reliable, sophisticated, and technically superior. The vibrant purple accent provides a high-energy focal point against deep, desaturated surfaces, ensuring the most important actions are never missed.

## Colors
The palette is built on a foundation of "Deep Obsidian" neutrals to minimize eye strain and maximize the "glow" of data visualizations.

- **Primary (#A855F7):** A vibrant, electric purple used for calculation triggers, active states, and focus indicators. It provides a sharp chromatic contrast against the dark background.
- **Background (#0F172A):** A near-black navy that serves as the base canvas.
- **Surface (#1E293B):** Used for cards and input containers to create a clear visual hierarchy through tonal separation.
- **Text:** Primary data and results use high-white (#F8FAFC), while secondary labels use a muted slate (#94A3B8) to maintain a clear information hierarchy.
- **Success (#10B981):** A refined emerald reserved exclusively for validated results and successful calculations.

## Typography
**Inter** remains the cornerstone of the system for its surgical legibility. For this dark mode iteration, font-weights are slightly optimized to prevent "ink bleed" (the visual spreading of light text on dark backgrounds).

- **Display Result:** The 48px bold style serves as the ultimate "answer" on the screen.
- **Code Output:** Switched to **JetBrains Mono** for numerical lists and calculation history to emphasize the technical, monospaced nature of mathematical data.
- **Tabular Figures:** Always enable `font-variant-numeric: tabular-nums` for any areas displaying changing dimensions or results to prevent layout jitter.

## Layout & Spacing
The layout employs a **Fixed Grid** model to keep tools centered and within the user's immediate field of view, particularly on large workstation monitors.

- **Desktop:** A 12-column centered grid (1100px max-width). Use `stack-lg` to create a clear "chasm" between input parameters and the final output card.
- **Mobile:** A single-column fluid layout with 20px safe-area margins.
- **Rhythm:** Every component's height and padding must be a multiple of the 8px base unit to ensure geometric alignment across the interface.

## Elevation & Depth
In dark mode, depth is conveyed through **Tonal Layers** and subtle **Primary-Tinted Shadows**. 

- **Level 0:** The base background (#0F172A).
- **Level 1 (Cards):** Surface (#1E293B) with a 1px border of #334155. This "ghost border" replaces heavy shadows for a cleaner look.
- **Level 2 (Active/Modals):** A subtle outer glow using the primary purple at 10% opacity: `0 0 20px 0px rgba(168, 85, 247, 0.1)`.
- **Interaction:** Buttons and interactive cards should "lift" slightly on hover by lightening their background color rather than adding deep shadows.

## Shapes
The shape language remains **Rounded (0.5rem)** for functional elements to maintain a professional, calibrated feel. 

- **Interactive Elements:** Inputs and buttons utilize the standard 0.5rem (8px) radius.
- **Containers:** Large result cards and shape-selection chips use a more pronounced 1.5rem (24px) radius to distinguish them from input fields.
- **Visuals:** Isometric 3D figures should be framed in circles or highly rounded containers to contrast against the sharp geometric lines of the diagrams themselves.

## Components
- **Input Fields:** Dark surface (#1E293B) with a subtle #334155 border. On focus, the border transforms to the primary purple with a soft glow. Measurement units (e.g., cm³) should be rendered in `label-caps` in the muted slate color.
- **Primary Button:** Solid Vibrant Purple (#A855F7) with high-contrast white text. The hover state should increase brightness slightly rather than changing hue.
- **Segmented Controls:** A track in #0F172A with a sliding surface in #334155. The active segment text should be white, while inactive segments are muted slate.
- **Result Display:** A prominent card with a 1px border of the primary purple. The background uses a very subtle purple tint (e.g., #1E1B4B) to signal this is the "Output Zone."
- **Figure Chips:** Cards featuring isometric geometry icons. When unselected, they use the Level 1 surface style. When selected, they gain a 2px purple stroke and a subtle internal glow.
- **Progress Indicators:** Use a thin, indeterminate line in primary purple for "calculating" states to maintain the minimalist precision.