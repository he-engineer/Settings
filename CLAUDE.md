# CLAUDE.md — AI Workflow Guide

Three-role workflow: **PM** → **DESIGN** → **DEV** → Product delivery

## Quick Start
1. `/product` → Create PRD.md
2. `/design` → Create DESIGN_SPEC.md  
3. `/develop` → Build /src + README.md
4. `/summarize` → Review status

## Core Rules
- **Document-first**: Code written after specs exist
- **Single responsibility**: Each role owns specific artifacts
- **Quality gates**: Must pass validation before handoff
- **No invention**: Ask for missing information

## File Structure
```
├─ PRD.md              # PM requirements
├─ DESIGN_SPEC.md      # Design system & specs
├─ README.md           # Dev documentation  
├─ /src                # Implementation
└─ .claude/
   ├─ commands/        # Slash commands (/product, /design, /develop, /summarize)
   └─ agents/          # Role definitions & templates
```

## Role Responsibilities

### PM → PRD.md
- User stories with acceptance criteria
- Success metrics and KPIs
- Risk assessment and assumptions
- **Quality check**: Can DESIGN/DEV execute without questions?

### DESIGN → DESIGN_SPEC.md  
- Design system (colors, typography, spacing)
- Component library with all states
- Responsive & accessibility specs
- **Quality check**: Can DEV implement without guessing?

### DEV → /src + README.md
- Implementation matching design specs
- Testing, linting, accessibility compliance
- Performance optimization
- **Quality check**: Production-ready with docs?

## Git Workflow
- **Branches**: `feature/role-description`
- **Commits**: `type(scope): description` + Claude attribution
- **PRs**: Include artifacts, screenshots, quality gate status

## Quality Gates
- **PM**: Stories have acceptance criteria, metrics defined, stakeholder sign-off
- **DESIGN**: Accessibility compliant, all states specified, developer handoff notes
- **DEV**: Tests pass, performance targets met, security scan clean

## When Blocked
1. Document gaps and questions
2. Request guidance with proposed solutions
3. Mark assumptions clearly in artifacts
4. Continue with explicit approval only

---

*For detailed role specifications and templates, see `.claude/agents/` files*