# /product - Product Manager Workflow

Transform business ideas into detailed requirements and create comprehensive PRD.md.

## Steps
1. **Gather Requirements** - Interview stakeholders, understand constraints and goals
2. **Research Users** - Define personas, map journeys, analyze pain points
3. **Prioritize Features** - Use MoSCoW framework, estimate story points
4. **Document Risks** - Assess dependencies, mitigation strategies
5. **Define Success** - Set KPIs, measurement methodology
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

**Next:** Run `/design` to begin design workflow