# /design - UX Designer Workflow

Create optimal user experience and design system. Creates comprehensive DESIGN_SPEC.md.

## Prerequisites
- PRD.md must exist with product requirements
- User research insights available for design decisions
- Business and technical constraints understood

## Steps
1. **Analyze Requirements** - Understand user personas and constraints from PRD
2. **Design Strategy** - Define principles, accessibility approach, responsive strategy
3. **Design System** - Colors, typography, spacing, component states
4. **Layout Design** - Wireframes, responsive behavior, interaction patterns
5. **Create DESIGN_SPEC** - See template in `.claude/agents/ux_designer.md`

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
- [ ] Can SOFTWARE ARCHITECT make informed technology decisions from this design?
- [ ] Does design meet WCAG 2.1 AA accessibility standards?
- [ ] Are responsive breakpoints and performance considerations defined?
- [ ] Have design tokens been validated across themes?

## Handoff to Architecture
- Export design tokens and component specifications
- Update DESIGN_SPEC changelog
- Document performance and technical considerations

**Next:** Run `/architect` to design system architecture