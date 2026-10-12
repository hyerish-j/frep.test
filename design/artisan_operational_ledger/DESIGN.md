---
name: Artisan Operational Ledger
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#50453d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#82746c'
  outline-variant: '#d4c3ba'
  surface-tint: '#79573e'
  primary: '#311906'
  on-primary: '#ffffff'
  primary-container: '#4a2e18'
  on-primary-container: '#bd9578'
  inverse-primary: '#eabe9f'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#002517'
  on-tertiary: '#ffffff'
  tertiary-container: '#003d28'
  on-tertiary-container: '#00b37c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc4'
  primary-fixed-dim: '#eabe9f'
  on-primary-fixed: '#2d1603'
  on-primary-fixed-variant: '#5f4029'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
  numeric-metric:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system establishes a high-precision, tactilely grounded operational interface for modern café enterprise management and profitability analytics. It merges the disciplined rigor of institutional fintech tools with the warmth, craft, and sensory depth of specialty coffee culture. 

The aesthetic style is **Warm Editorial FinTech**: clean, highly structured, and data-dense, yet humanized through rich roast-derived tones and natural mineral accents. 

### Core Attributes
- **Architectural & Systematic**: Strict tabular data alignment, crisp cell boundaries, and structured information grouping avoid decorative distraction.
- **Warm Authority**: Rather than generic cold corporate blues, the palette leans into deep espresso tones paired with slate charcoal to signal both culinary heritage and serious financial accountability.
- **Diagnostic Clarity**: High-contrast state signifiers allow store managers and multi-unit operators to discern store closing status, raw margin shifts, waste percentages, and target deltas at a single glance.

## Colors

The palette is engineered around high functional legibility in fluctuating store environments (e.g., POS terminals, back-office laptops, mobile floor checks).

### Functional Palette Logic
- **Primary (`#4A2E18`) & Primary Light (`#6B4423`)**: Deep Warm Espresso. Anchors primary brand touchpoints, active sidebar navigation selections, and main financial summary headers. Conveys craft and grounding.
- **Secondary (`#1E293B`)**: Deep Slate Charcoal. Utilized for deep structural elements, table headers, high-emphasis text, and enterprise metadata cards.
- **Tertiary Positive (`#10B981`)**: Sage Emerald. Represents positive variance, target achievement, finished shifts, reconciled registers, and profitability upside.
- **Accent Alert (`#EA580C`)**: Terracotta Orange. High-visibility warning tone for shrinkage, stockout risks, overtime warnings, unreconciled till variances, and pending tasks.
- **Neutral Canvas (`#F8FAFC`)**: Crisp Alabaster. Serves as the clean base layer, paired with `#FFFFFF` for elevated data cards and `#F1F5F9` for secondary table rows and input fills.
- **Subtle Borders (`#E2E8F0`)**: Low-interference division lines ensuring dense data tables remain readable without heavy ink weight.

## Typography

Typography prioritizes tabular numerical legibility, tight vertical rhythms, and zero-ambiguity hierarchy. **Inter** is chosen for its neutral geometry, optical micro-adjustments, and exceptional tabular numeral (`tnum`) support.

### Typographic Directives
- **Tabular Figures**: All currencies, inventory counts, percentages, and timestamps must render with font feature settings enabled: `font-feature-settings: "tnum" 1, "cv05" 1`.
- **Hierarchical Density**: Metric values (`numeric-metric`) utilize heavy weights with negative tracking to act as immediate visual focal points within analytical dashboard cards.
- **Labeling Standard**: Form labels, table column headers, and badge states use `label-md` or `label-sm` with slight positive tracking to ensure fast scanning during rapid store audits.

## Layout & Spacing

The layout model is structured on a strict **12-column responsive fluid grid** with defined maximum content boundaries for wide enterprise monitors (max content width: 1440px).

### Breakpoints & Adaptation
- **Desktop (>= 1200px)**: 12 columns, 32px margins (`2rem`), 20px gutters (`1.25rem`). Persistent collapsible navigation rail (240px wide). Analytical dashboards render in 3-card or 4-card metric rows followed by split-pane view (6-column transaction ledger, 6-column margin analysis).
- **Tablet (768px - 1199px)**: 8 columns, 24px margins, 16px gutters. Navigation shifts to an off-canvas drawer or compact iconography rail. Metric cards stack in a 2x2 grid.
- **Mobile (< 768px)**: 4 columns, 16px margins (`margin-mobile`), 12px gutters (`gutter-mobile`). Metric cards scroll horizontally or stack single-column. Complex data tables degrade to stacked operational summary cards.

### Spacing Application
- Use `space-xs` (4px) and `space-sm` (8px) for internal pill chips, badge padding, and tight input grouping.
- Use `space-md` (16px) for interior card padding, cell padding in compact mode, and form field stacks.
- Use `space-lg` (24px) for master card containers, KPI metric blocks, and sectional separations.

## Elevation & Depth

To maintain high data focus and minimize visual noise, depth is achieved via **low-contrast architectural outlines** complemented by **warm, tinted ambient micro-shadows**.

### Layering Rules
- **Base Canvas (Level 0)**: `#F8FAFC` flat surface. Holds background workspace.
- **Card Containers (Level 1)**: Solid `#FFFFFF` fill with a 1px border (`#E2E8F0`) and an ambient tinted drop shadow: `0 1px 3px 0 rgba(30, 41, 59, 0.04), 0 1px 2px -1px rgba(74, 46, 24, 0.03)`.
- **Hover & Active Panels (Level 2)**: Slightly lifted surface using: `0 4px 6px -1px rgba(30, 41, 59, 0.06), 0 2px 4px -2px rgba(74, 46, 24, 0.04)`.
- **Modals, Drawers & Popovers (Level 3)**: Overlay surface with high boundary contrast (1px border in `#CBD5E1`) and deep ambient shadow: `0 20px 25px -5px rgba(30, 41, 59, 0.1), 0 8px 10px -6px rgba(30, 41, 59, 0.04)`.
- **No pure black shadows**: Every shadow is tinted with Slate Charcoal (`#1E293B`) or Espresso (`#4A2E18`) at under 10% opacity to preserve organic depth.

## Shapes

The interface embraces a **Soft (Level 1)** shape system, conveying precision, discipline, and modern architectural utility. Rounding is intentionally restrained to keep dense tables and ledger grids stable and crisp.

### Shape Hierarchy
- **Base Elements (Buttons, Inputs, Table Cells, Checkboxes)**: `0.25rem` (4px). Provides subtle softening without sacrificing strict geometric alignment.
- **Card Containers & Modal Frames (`rounded-lg`)**: `0.5rem` (8px). Encapsulates large analytical modules cleanly.
- **Status Pills & Operational Badges (`rounded-xl`)**: `9999px` (Full pill). Reserved strictly for status signifiers (e.g., Reconciled, Pending, Target Met) to clearly differentiate metadata tags from clickable rectilinear interactive buttons.

## Components

### Buttons
- **Primary Button**: Solid Espresso fill (`#4A2E18`), white text (`#FFFFFF`), `0.25rem` radius. Subtle hover transition to `#6B4423`.
- **Secondary Button**: Solid Slate Charcoal (`#1E293B`) or 1px border (`#CBD5E1`) over white with Slate text (`#1E293B`).
- **Destructive/Alert Button**: Terracotta tint base (`#FFF7ED`) with `#EA580C` text and border for non-destructive warnings, or solid `#EA580C` for critical daily close resets.
- **Sizing**: Default height 36px (compact operational control), 44px for primary touch actions on POS/tablet screens.

### Badges & Operational Indicators
- **Completed / Closed / Reconciled**: Sage Green surface (`#ECFDF5`), deep sage text (`#065F46`), 1px border (`#A7F3D0`).
- **Pending / Unclosed / In-Progress**: Terracotta surface (`#FFF7ED`), warm orange text (`#9A3412`), 1px border (`#FED7AA`).
- **Forecast vs. Actual Tags**: Actual data styled in bold `#1E293B`; Forecast/Estimated metrics tagged with a subdued badge (`#F1F5F9` background, `#475569` text) accompanied by a dashed underline.

### Data Tables
- **Header Row**: `#F8FAFC` background, `label-md` uppercase typography, Slate text (`#64748B`), 1px solid bottom border (`#E2E8F0`).
- **Data Rows**: 48px standard row height, 36px in condensed audit view. Alternating row hover state (`#F8FAFC`).
- **Numerical Alignment**: Right-aligned, monospace-ready tabular numerals with contextual color highlights (Sage for positive variance, Terracotta for cost overruns).

### Input Fields & Controls
- **Text & Numeric Inputs**: Background `#FFFFFF`, 1px border (`#CBD5E1`), 4px border-radius, font size 14px (`body-md`).
- **Focus State**: 2px outline in Espresso Brown (`#4A2E18`) with 0px offset.
- **Checkboxes & Radios**: 16x16px boxes, 4px radius for checkboxes. Checked state fills with `#4A2E18` featuring a sharp white checkmark.

### Analytical Cards
- White surface, 1px border `#E2E8F0`, padding `1.25rem` (`20px`).
- Top row displays parameter title (`label-md`) and temporal pill badge; middle row displays primary metric (`numeric-metric`); bottom row provides dynamic variance trend (`+8.4% vs last week`) anchored with Sage or Terracotta micro-chips.