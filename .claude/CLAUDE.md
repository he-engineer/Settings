# CLAUDE.md — AI SDLC Playbook

Nine-stage workflow: **RESEARCH** → **PRODUCT** → **DESIGN** → **ARCHITECTURE** → **ENGINEERING** → **IMPLEMENTATION** → **REVIEW** → **TESTING** → **DEPLOYMENT**

## Quick Start
1. `/research` → Create UX_RESEARCH.md
2. `/plan` → Create PRD.md
3. `/design` → Create DESIGN_SPEC.md
4. `/architect` → Create HLD.md
5. `/engineer` → Create LLD.md
6. `/implement` → Build /src + README.md
7. `/review` → Create CODE_REVIEW.md
8. `/test` → Create TEST_PLAN.md
9. `/deploy` → Create OPERATIONS.md
10. `/summarize` → Review status

## Core Rules
- **User-experience driven**: Design informs technical decisions
- **Document-first**: Implementation follows detailed specifications
- **Single responsibility**: Each role owns specific artifacts
- **Quality gates**: Must pass validation before handoff
- **Evidence-based**: Decisions backed by research and data

## File Structure
```
├─ UX_RESEARCH.md      # User research findings
├─ PRD.md              # Product requirements
├─ DESIGN_SPEC.md      # Design system & UX specs
├─ HLD.md              # High-level architecture
├─ LLD.md              # Low-level technical design
├─ CODE_REVIEW.md      # Peer review & quality assessment
├─ TEST_PLAN.md        # Quality assurance strategy
├─ OPERATIONS.md       # Deployment & monitoring
├─ README.md           # Implementation documentation
├─ /src                # Code implementation
└─ .claude/
   ├─ commands/        # Slash commands (/research, /plan, /design, /architect, /engineer, /implement, /review, /test, /deploy, /summarize)
   └─ agents/          # Role definitions & templates
```

## Role Responsibilities

### RESEARCH → UX_RESEARCH.md
- User interviews, surveys, and behavioral analysis
- Evidence-based personas and journey maps
- Pain point identification and opportunity assessment
- **Quality check**: Can PRODUCT build meaningful requirements from insights?

### PRODUCT → PRD.md
- Transform research insights into product requirements
- User stories with acceptance criteria and success metrics
- Risk assessment and dependency analysis
- **Quality check**: Can DESIGN create optimal user experience?

### DESIGN → DESIGN_SPEC.md  
- User experience design and comprehensive design system
- Component library with all interaction states
- Accessibility and responsive specifications
- **Quality check**: Can ARCHITECTURE make informed technology decisions?

### ARCHITECTURE → HLD.md
- High-level system design to deliver user experience
- Technology stack selection with justified decisions
- Performance, security, and scalability architecture
- **Quality check**: Can ENGINEERING create detailed technical specs?

### ENGINEERING → LLD.md
- Detailed technical specifications and implementation contracts
- API design, database schemas, and component interfaces
- Security implementation and performance optimization plans
- **Quality check**: Can IMPLEMENTATION proceed without technical ambiguity?

### IMPLEMENTATION → /src + README.md
- Build solution following technical specifications
- Code quality, testing, and documentation
- Performance optimization and accessibility compliance
- **Quality check**: Ready for peer review and validation?

### REVIEW → CODE_REVIEW.md
- Comprehensive peer review of implementation quality
- Validate architecture alignment and security compliance
- Assess performance impact and maintainability
- **Quality check**: Code meets standards and ready for testing?

### TESTING → TEST_PLAN.md
- Comprehensive quality assurance across all dimensions
- Functional, performance, security, and accessibility testing
- Cross-platform compatibility and user acceptance validation
- **Quality check**: Production-ready with verified quality?

### DEPLOYMENT → OPERATIONS.md
- Production deployment with monitoring and alerting
- Incident response procedures and disaster recovery
- Performance optimization and continuous improvement
- **Quality check**: Operational excellence and reliability achieved?

## Git Workflow
- **Branches**: `feature/stage-description` (e.g., `feature/research-user-onboarding`)
- **Commits**: `type(scope): description` + Claude attribution
- **PRs**: Include all relevant artifacts, quality gate status, and test results

## Quality Gates Summary
- **RESEARCH**: User needs validated, personas evidence-based, pain points quantified
- **PRODUCT**: Stories have acceptance criteria, metrics defined, stakeholder sign-off
- **DESIGN**: Accessibility compliant, all states specified, architecture handoff ready
- **ARCHITECTURE**: Technology choices justified, performance targets defined, security reviewed
- **ENGINEERING**: Technical interfaces precise, APIs documented, contracts complete
- **IMPLEMENTATION**: Code complete, unit tests passing, documentation updated
- **REVIEW**: Peer approved, architecture aligned, security cleared, performance acceptable
- **TESTING**: Security scanned, cross-platform tested, quality gates achieved
- **DEPLOYMENT**: Monitoring active, procedures documented, operational excellence

## When Blocked
1. Document gaps and questions
2. Request guidance with proposed solutions
3. Mark assumptions clearly in artifacts
4. Continue with explicit approval only

---

## Agent Ecosystem
- **ux_researcher.md** - User research and behavioral analysis specialist
- **product_manager.md** - Requirements analysis and product strategy expert
- **ux_designer.md** - User experience and design systems specialist  
- **software_architect.md** - System architecture and technology strategy expert
- **software_engineer.md** - Technical design and API specifications specialist
- **developer.md** - Implementation and code quality specialist
- **code_reviewer.md** - Peer review and code quality assurance specialist
- **qa_engineer.md** - Quality assurance and testing strategy expert
- **devops_engineer.md** - Deployment and operations management specialist

*For detailed role specifications and templates, see `.claude/agents/` files*