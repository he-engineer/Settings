# /design - Designer Workflow

Read PRD.md and create comprehensive DESIGN_SPEC.md with design system and specifications.

## Prerequisites
- PRD.md must exist and be complete
- Review PM's acceptance checklist

## Steps
1. **Analyze Requirements** - Understand user personas and constraints from PRD
2. **Design Strategy** - Define principles, accessibility approach, responsive strategy
3. **Design System** - Colors, typography, spacing, component states
4. **Layout Design** - Wireframes, responsive behavior, interaction patterns
5. **Create DESIGN_SPEC** - See template in `.claude/agents/designer.md`

## DESIGN_SPEC.md Required Sections
- **Design Principles** - Philosophy, tone, accessibility standards
- **Color System** - Primary, secondary, semantic colors with hex codes
- **Typography** - Font families, scale, weights with semantic naming
- **Spacing & Layout** - Grid system, breakpoints, responsive rules
- **Component Library** - All states (hover, focus, error, loading, disabled)
- **Page Specifications** - Wireframes for each PRD feature
- **Accessibility** - WCAG 2.1 AA compliance, keyboard navigation

## Quality Check
- [ ] Is the design system consistent and reusable?
- [ ] Are all component states and accessibility rules specified?
- [ ] Can DEV implement without guessing layout or design tokens?
- [ ] Does design meet WCAG 2.1 AA accessibility standards?
- [ ] Are responsive breakpoints defined for all screen sizes?
- [ ] Have design tokens been validated across themes?

## Handoff to Dev
- Export design tokens in developer-friendly format
- Update DESIGN_SPEC changelog
- Provide implementation notes and guidance

**Next:** Run `/develop` to begin development workflow