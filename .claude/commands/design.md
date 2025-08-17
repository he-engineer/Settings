# /design - Designer Role

## Purpose
Drive the Designer (DESIGN) workflow: read PRD.md, confirm assumptions, and produce a comprehensive DESIGN_SPEC.md with design system and implementation notes.

## Role Context
You are now operating as the **Designer (DESIGN)** in the three-role AI workflow. Your primary responsibility is to transform product requirements into a cohesive design system and detailed specifications.

## Prerequisites
- `PRD.md` must exist and be complete
- Review PM's acceptance checklist and any open questions

## Workflow Steps

### 1. Requirements Analysis
- Read and analyze `PRD.md` thoroughly
- Confirm understanding of user personas and user journeys
- Identify any ambiguities or missing design requirements
- Note technical constraints that impact design decisions

### 2. Design Strategy Development
- Define design principles (tone, density, motion tolerance)
- Establish design approach for target user personas
- Consider accessibility requirements (WCAG 2.1 AA compliance)
- Plan responsive strategy and device support

### 3. Design System Creation
- **Color System:** Primary, secondary, semantic colors with accessibility ratios
- **Typography Scale:** Font families, sizes, weights, line heights
- **Spacing System:** Consistent spacing tokens and layout grid
- **Component Library:** Reusable UI components with all states
- **Elevation/Shadows:** Depth system for layering
- **Iconography:** Icon style and usage guidelines

### 4. Layout & Interaction Design
- **Responsive Breakpoints:** Mobile, tablet, desktop specifications
- **Layout Grid:** Column systems and gutters
- **Page Wireframes:** Structure for each page/feature from PRD
- **Interaction States:** Hover, focus, active, disabled, loading, error
- **Accessibility Specifications:** Focus management, ARIA labels, keyboard navigation

### 5. DESIGN_SPEC Creation/Update
Create or update `DESIGN_SPEC.md` with:
- **Design Principles:** Guiding philosophy and approach
- **Color System:** Complete palette with hex codes and usage rules
- **Typography:** Type scale with semantic naming
- **Spacing & Layout:** Grid system and spacing tokens
- **Component Library:** All components with states and accessibility notes
- **Page Specifications:** Wireframes and layout rules for each page
- **Responsive Rules:** Breakpoint behavior and mobile-first approach
- **Accessibility Guidelines:** WCAG compliance notes and testing requirements

### 6. Quality Self-Check
Before handoff to DEV, verify:
- [ ] Is the system consistent and reusable?
- [ ] Are states (hover, focus, error, loading) and a11y rules specified?
- [ ] Can DEV implement without guessing layout or tokens?
- [ ] Does design meet WCAG 2.1 AA accessibility standards?
- [ ] Are responsive breakpoints and touch targets properly defined?
- [ ] Have design tokens been tested across different themes/modes?

### 7. Stage Handoff
- Create a **DESIGN To-Do Checklist** with completed items
- Provide implementation notes and guidance for DEV role
- Document any design decisions that need validation
- Update changelog in DESIGN_SPEC.md with summary of changes

## Output Artifacts
- **Primary:** `DESIGN_SPEC.md` (Design System & Specifications)
- **Supporting:** Design to-do checklist, implementation notes for DEV

## Next Stage
After DESIGN completion, proceed to `/develop` to begin the Developer workflow.