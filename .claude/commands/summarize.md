# /summarize - Project Status Analysis

Review all artifacts and provide comprehensive status report with next steps.

## Review Process
1. **Artifact Analysis** - Check all phase deliverables and quality
2. **Stage Assessment** - Validate completion against all 8-stage quality gates
3. **Quality Review** - Comprehensive testing, performance, security compliance
4. **Risk Analysis** - Identify blockers, dependencies, timeline impacts
5. **Next Steps** - Prioritize immediate, short-term, and long-term actions

## Quality Gate Validation

### RESEARCH Quality Gates
- [ ] User needs validated with evidence, not assumptions
- [ ] Personas reflect real research data, not stereotypes
- [ ] Pain points quantified with frequency and impact
- [ ] Opportunity areas identified with clear user benefit

### PRODUCT Quality Gates
- [ ] User stories follow "As a/I want/So that" format with Given/When/Then criteria
- [ ] Priority and story points assigned, risk assessment with mitigation
- [ ] Success metrics defined with measurement methodology
- [ ] Stakeholder sign-off documented

### DESIGN Quality Gates  
- [ ] Design system tokens documented (colors, typography, spacing)
- [ ] All component states specified (hover, focus, error, loading, disabled)
- [ ] WCAG 2.1 AA accessibility compliance verified
- [ ] Responsive breakpoints defined, architecture handoff notes provided

### ARCHITECTURE Quality Gates
- [ ] Technology choices justified with clear rationale
- [ ] Architecture supports all user experience requirements
- [ ] Performance and scalability targets defined
- [ ] Security architecture reviewed and approved

### ENGINEERING Quality Gates
- [ ] All technical interfaces precisely defined with types
- [ ] API contracts include error scenarios and edge cases
- [ ] Database design optimized and normalized
- [ ] Performance specifications quantified and measurable

### IMPLEMENTATION Quality Gates
- [ ] All linting, testing, and build processes pass
- [ ] UI matches DESIGN_SPEC for structure and tokens
- [ ] Performance metrics within thresholds (LCP <2.5s, CLS <0.1)
- [ ] Code coverage meets standards (80%+)

### TESTING Quality Gates
- [ ] Comprehensive test coverage across all quality dimensions
- [ ] Security scan passes with no high/critical issues
- [ ] Accessibility compliance verified (WCAG 2.1 AA)
- [ ] Cross-browser compatibility confirmed

### DEPLOYMENT Quality Gates
- [ ] Zero-downtime deployment pipeline operational
- [ ] Monitoring and alerting fully configured
- [ ] Incident response procedures documented
- [ ] Backup and recovery procedures tested

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