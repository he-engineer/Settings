# /summarize - Project Status Analysis

Review all artifacts and provide comprehensive status report with next steps.

## Review Process
1. **Artifact Analysis** - Check PRD.md, DESIGN_SPEC.md, README.md, /src quality
2. **Stage Assessment** - Validate PM, DESIGN, DEV completion against quality gates
3. **Quality Review** - Test coverage, performance, accessibility, security compliance
4. **Risk Analysis** - Identify blockers, dependencies, timeline impacts
5. **Next Steps** - Prioritize immediate, short-term, and long-term actions

## Quality Gate Validation

### PM Quality Gates
- [ ] User stories follow "As a/I want/So that" format with Given/When/Then criteria
- [ ] Priority and story points assigned, risk assessment with mitigation
- [ ] Success metrics defined with measurement methodology
- [ ] Stakeholder sign-off documented

### DESIGN Quality Gates  
- [ ] Design system tokens documented (colors, typography, spacing)
- [ ] All component states specified (hover, focus, error, loading, disabled)
- [ ] WCAG 2.1 AA accessibility compliance verified
- [ ] Responsive breakpoints defined, developer handoff notes provided

### DEV Quality Gates
- [ ] All linting, testing, and build processes pass
- [ ] Performance metrics within thresholds (LCP <2.5s, CLS <0.1)
- [ ] Accessibility testing completed (keyboard nav, screen reader)
- [ ] Security scan clean, code coverage meets standards (80%+)

## Status Report Format

### Project Overview
- **Status**: [In Progress | Blocked | Complete]
- **Progress**: [X% complete] 
- **Next Milestone**: [Target and timeline]

### Critical Issues
- **High Priority**: [Blockers preventing progress]
- **Medium Priority**: [Risks requiring attention] 
- **Dependencies**: [External factors affecting timeline]

### Immediate Next Steps
1. **[Action]** - Owner and timeline
2. **[Action]** - Owner and timeline  
3. **[Action]** - Owner and timeline

### Recommendations
- Process improvements for next iteration
- Quality gate adjustments needed
- Tool or workflow optimizations

## Usage
Run `/summarize` at stage transitions, milestone reviews, or when planning next work cycles.