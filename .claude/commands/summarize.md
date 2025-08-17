# /summarize - Project Status & Next Steps

## Purpose
Report comprehensive project status, identify open risks, blocked items, and provide clear next executable steps for continued progress.

## Role Context
You are operating in a **meta-analysis role** that reviews the work of all three workflow roles (PM, DESIGN, DEV) to provide project oversight and guidance.

## Workflow Steps

### 1. Artifact Review
Analyze all project artifacts:
- **PRD.md:** Completeness, clarity, and acceptance criteria status
- **DESIGN_SPEC.md:** Design system completeness and implementation readiness
- **README.md:** Technical documentation and setup instructions
- **/src:** Implementation status and code quality
- **Git history:** Commit patterns and development progress

### 2. Stage Assessment
For each workflow stage, evaluate:

#### PM Stage Status
- [ ] All user stories have acceptance criteria
- [ ] Edge cases and non-goals documented
- [ ] Success metrics and KPIs defined
- [ ] Stakeholder requirements validated
- [ ] Assumptions and risks identified

#### DESIGN Stage Status  
- [ ] Design system tokens documented
- [ ] Component library with all states specified
- [ ] Accessibility compliance verified (WCAG 2.1 AA)
- [ ] Responsive breakpoints defined
- [ ] Implementation guidance provided

#### DEV Stage Status
- [ ] All quality gates passing (lint, test, build)
- [ ] UI matches design specifications
- [ ] Accessibility verified (keyboard, screen reader, contrast)
- [ ] Performance metrics within thresholds
- [ ] Security scan completed
- [ ] Code coverage meets standards

### 3. Quality Gate Analysis
Review overall project health:
- **Completeness:** What percentage of requirements are implemented?
- **Quality:** Are all defined quality standards being met?
- **Technical Debt:** What shortcuts or compromises were made?
- **Performance:** Are load times and user experience acceptable?
- **Security:** Are there any unresolved security concerns?
- **Accessibility:** Does the solution work for all intended users?

### 4. Risk & Blocker Identification
Document current challenges:
- **High Priority Blockers:** Issues preventing progress
- **Medium Priority Risks:** Potential future problems
- **Dependencies:** External factors affecting timeline
- **Resource Constraints:** Skills, time, or tool limitations

### 5. Success Metrics Review
Evaluate against defined KPIs:
- **PM Metrics:** Requirement clarity, stakeholder satisfaction
- **DESIGN Metrics:** Design system adoption, accessibility compliance
- **DEV Metrics:** Code quality, performance benchmarks, test coverage
- **Business Metrics:** User experience goals and success criteria

### 6. Next Steps Prioritization
Provide clear action items:
- **Immediate (Today):** Critical tasks that unblock progress
- **Short-term (This Week):** Important improvements and fixes
- **Medium-term (This Sprint):** Feature completion and optimization
- **Long-term (Next Sprint):** Future enhancements and technical debt

### 7. Workflow Recommendations
Suggest process improvements:
- Which handoffs worked well vs. poorly?
- Were quality gates effective at catching issues early?
- How accurate were time estimates vs. actual delivery?
- What would improve the next iteration of this workflow?

## Summary Report Format

### Project Overview
- **Current Status:** [In Progress | Blocked | Complete]
- **Overall Progress:** [X% complete]
- **Next Milestone:** [Clear target and timeline]

### Stage Completion Status
- **PM:** ✅/❌ [Brief status note]
- **DESIGN:** ✅/❌ [Brief status note]  
- **DEV:** ✅/❌ [Brief status note]

### Quality Gates
- **Tests:** ✅/❌ [Pass rate and key failures]
- **Performance:** ✅/❌ [Key metrics vs. targets]
- **Accessibility:** ✅/❌ [Compliance level and gaps]
- **Security:** ✅/❌ [Scan results and critical issues]

### Critical Issues
1. **[High/Medium/Low] Issue title** - Brief description and impact
2. **[Priority] Next issue** - Description and suggested resolution

### Immediate Next Steps
1. **[Action item]** - Owner and timeline
2. **[Next action]** - Owner and timeline
3. **[Third action]** - Owner and timeline

### Recommendations
- Process improvements for next iteration
- Quality gate adjustments
- Tool or workflow optimizations

## Usage Notes
- Run `/summarize` at any point to get current project status
- Particularly useful at stage transitions and milestone reviews
- Use before planning next work cycles or sprint planning
- Essential for stakeholder updates and project governance