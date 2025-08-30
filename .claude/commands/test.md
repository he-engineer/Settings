# /test - Quality Assurance Workflow

Design comprehensive testing strategy and verify implementation quality. Creates TEST_PLAN.md with validation procedures.

## Prerequisites
- Implementation complete with /src code and README.md
- All development quality gates passed (linting, type checking)
- Testing environments configured and accessible

## Testing Process

### Phase 1: Test Strategy Design
1. **Test Planning** - Define scope, objectives, and success criteria
2. **Test Pyramid** - Plan unit (70%), integration (20%), e2e (10%) tests
3. **Quality Dimensions** - Functional, performance, security, accessibility testing
4. **Tool Selection** - Choose testing frameworks and automation tools

### Phase 2: Test Implementation
5. **Unit Tests** - Component and function-level testing
6. **Integration Tests** - API and system integration testing
7. **End-to-End Tests** - Complete user workflow testing
8. **Performance Tests** - Load, stress, and response time testing

### Phase 3: Quality Verification
9. **Accessibility Testing** - WCAG 2.1 AA compliance verification
10. **Security Testing** - Vulnerability assessment and penetration testing
11. **Cross-Platform Testing** - Browser and device compatibility testing
12. **User Acceptance Testing** - Validation against original requirements

## Deliverables
Creates comprehensive TEST_PLAN.md including:
- Complete testing strategy across all quality dimensions
- Functional test cases with given/when/then scenarios
- Performance benchmarks and load testing results
- Security scan reports and vulnerability assessments
- Accessibility compliance verification
- Cross-browser and device compatibility results

## Quality Check
- [ ] Test coverage meets minimum threshold (80%+)
- [ ] Performance benchmarks achieved (response time, load capacity)
- [ ] Security scan passes with no high/critical issues
- [ ] Accessibility compliance verified (WCAG 2.1 AA)
- [ ] Cross-browser compatibility confirmed
- [ ] All critical and high priority bugs resolved

**Next:** Run `/deploy` to set up production deployment and monitoring