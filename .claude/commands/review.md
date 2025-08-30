# /review - Code Review Workflow

Conduct comprehensive peer review of implementation. Creates CODE_REVIEW.md with quality assessment and approval decisions.

## Prerequisites
- Implementation complete with /src code and README.md
- LLD.md, HLD.md, and DESIGN_SPEC.md available for validation
- All development quality gates passed (linting, type checking, unit tests)

## Code Review Process

### Phase 1: Traceability Validation
1. **Requirements Alignment** - Verify implementation matches PRD user stories
2. **Design Compliance** - Validate UI matches DESIGN_SPEC.md exactly
3. **Architecture Adherence** - Ensure code follows HLD.md decisions
4. **Technical Specifications** - Confirm alignment with LLD.md contracts

### Phase 2: Code Quality Assessment
5. **Architecture Review** - Design patterns, SOLID principles, component structure
6. **Security Analysis** - Input validation, authentication, authorization, data protection
7. **Performance Evaluation** - Algorithm efficiency, database optimization, caching
8. **Code Standards** - Linting compliance, formatting, naming conventions

### Phase 3: Documentation & Compliance
9. **Documentation Review** - README.md accuracy, API docs, inline documentation
10. **Accessibility Validation** - WCAG 2.1 AA compliance, keyboard navigation
11. **Browser Compatibility** - Cross-browser testing, responsive design
12. **Testing Coverage** - Unit test quality, integration test completeness

## Deliverables
Creates comprehensive CODE_REVIEW.md including:
- Complete traceability validation against all specifications
- Security assessment with vulnerability analysis
- Performance evaluation with optimization recommendations
- Code quality scoring across multiple dimensions
- Required actions categorized by priority (Must/Should/Could Fix)
- Final approval decision with reviewer signature

## Review Decision Matrix
- **APPROVED** - Ready for testing phase, no blocking issues
- **APPROVED WITH CONDITIONS** - Minor issues, re-review not required
- **CHANGES REQUESTED** - Major issues, address and re-submit for review
- **REJECTED** - Significant rework required before re-review

## Quality Check
- [ ] All artifacts validated for traceability and consistency
- [ ] Security review completed with no critical vulnerabilities
- [ ] Performance meets requirements and optimization standards
- [ ] Code quality scores meet team standards (architecture, maintainability)
- [ ] Documentation complete and accessible
- [ ] Review decision documented with clear rationale

**Next:** Run `/test` to begin comprehensive quality assurance testing