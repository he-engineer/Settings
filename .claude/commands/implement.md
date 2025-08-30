# /implement - Implementation Workflow

Implement solution based on detailed technical specifications. Creates /src code and README.md documentation.

## Prerequisites
- LLD.md must exist with detailed technical specifications
- HLD.md and DESIGN_SPEC.md available for reference
- Development environment and tooling configured

## Implementation Phases

### Phase 1: Foundation (Tasks 1-5)
1. **Project Setup** - Initialize package.json, build tools, git structure
2. **Design Tokens** - Extract colors, typography, spacing from DESIGN_SPEC
3. **Architecture** - Directory structure, routing, state management
4. **Dev Tools** - Linting, formatting, testing, pre-commit hooks
5. **Quality Gates** - CI/CD, accessibility tools, performance monitoring

### Phase 2: Components (Tasks 6-10) 
6. **Atoms** - Button, Input, Text, Icon with all states
7. **Molecules** - SearchBox, FormField, Card compounds
8. **Organisms** - Header, Navigation, complex components
9. **Layout** - Grid system, page templates, responsive behavior
10. **Design System** - Theme switching, component documentation

### Phase 3: Features (Tasks 11-15)
11. **Pages** - Build features per PRD specifications
12. **Interactions** - Advanced UI patterns, real-time features
13. **Performance** - Code splitting, optimization, caching
14. **Error Handling** - Boundaries, retry mechanisms, fallbacks
15. **Testing** - E2E tests, cross-browser, accessibility validation

## Quality Check
- [ ] One-command run works end-to-end
- [ ] UI matches DESIGN_SPEC for structure and tokens
- [ ] All linting, type checking, and tests pass
- [ ] Accessibility verified (keyboard nav, screen reader, contrast)
- [ ] Performance within thresholds (LCP <2.5s, CLS <0.1)
- [ ] Security scan clean (no high/critical vulnerabilities)
- [ ] Code coverage meets standards (80%+)

## Documentation
Create comprehensive README.md with:
- Tech stack and quick start commands
- Project structure and development workflow  
- Implementation status and known issues
- Quality metrics and deployment instructions

**Next:** Run `/test` to verify implementation quality and compliance