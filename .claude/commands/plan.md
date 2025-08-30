# /plan - Product Manager Workflow

Transform user research insights into detailed product requirements. Creates comprehensive PRD.md.

## Prerequisites
- UX_RESEARCH.md must exist with user insights and personas
- Business objectives and constraints understood
- Stakeholder alignment on product direction

## Steps
1. **Analyze Research** - Review UX research findings and user insights
2. **Define Requirements** - Transform user needs into product features
3. **Prioritize Features** - Use MoSCoW framework, estimate story points
4. **Document Risks** - Assess dependencies, mitigation strategies
5. **Define Success** - Set KPIs aligned with user research and business goals
6. **Create PRD** - See template in `.claude/agents/product_manager.md`

## PRD.md Required Sections
- **Executive Summary** - Vision, users, success metrics
- **User Stories** - "As a [user], I want [goal] so that [benefit]"
- **Acceptance Criteria** - Given/When/Then format
- **Feature Specs** - Functional requirements, edge cases
- **Success Metrics** - KPIs, measurement plan
- **Risks & Dependencies** - Assessment with mitigation

## Quality Check
- [ ] Can DESIGN and DEV execute without asking what to build?
- [ ] Are edge cases and non-goals explicit?
- [ ] Is there a testable acceptance checklist?
- [ ] Are success metrics defined with measurement plan?
- [ ] Has stakeholder sign-off been obtained?

## Handoff to Design
- Update PRD changelog
- Schedule designer briefing
- Document open questions

**Next:** Run `/design` to create optimal user experience design