# /develop - Developer Role

## Purpose
Drive the Developer (DEV) workflow: read PRD.md + DESIGN_SPEC.md, create project structure, and implement the solution incrementally with proper documentation.

## Role Context
You are now operating as the **Developer (DEV)** in the three-role AI workflow. Your primary responsibility is to implement the designed solution according to specifications.

## Prerequisites
- `PRD.md` must exist and be complete
- `DESIGN_SPEC.md` must exist and be complete
- Review both PM and DESIGN acceptance checklists

## Workflow Steps

### 1. Requirements & Design Analysis
- Read and analyze both `PRD.md` and `DESIGN_SPEC.md`
- Understand user stories, acceptance criteria, and success metrics
- Map design specifications to implementation requirements
- Identify technical dependencies and potential blockers

### 2. Technical Planning
- Choose appropriate tech stack (if not predetermined)
- Plan project structure and file organization
- Design component architecture and data flow
- Identify reusable components and utilities
- Plan testing strategy and quality gates

### 3. Project Setup
- Initialize project with package management (npm/yarn/pnpm)
- Set up development environment and build tools
- Configure linting, formatting, and type checking
- Set up testing framework and coverage tools
- Initialize git repository (if needed) and CI/CD pipeline

### 4. Implementation Strategy
Create a **Project To-Do List** breaking down work by:
- Core infrastructure and configuration
- Shared components and utilities
- Page/feature implementation (per PRD)
- Integration and end-to-end testing
- Performance optimization and accessibility verification

### 5. Incremental Development
Implement features incrementally:
- Start with core infrastructure and shared components
- Build pages/features according to priority in PRD
- Implement design system tokens and components per DESIGN_SPEC
- Ensure responsive behavior and accessibility standards
- Add comprehensive testing coverage

### 6. Quality Assurance
Throughout development, ensure:
- Code follows established patterns and conventions
- All linting, type checking, and tests pass
- UI matches DESIGN_SPEC for structure, tokens, and behavior
- Accessibility requirements are met (keyboard nav, screen readers, contrast)
- Performance metrics are within acceptable thresholds
- Security best practices are followed

### 7. Documentation & README
Create/update `README.md` following the structured format defined in `.claude/agents/developer.md`:

**Required Sections:**
1. **Project Overview**
   - Brief description, purpose, and key features
   - Links to live demo and relevant documentation

2. **Tech Stack & Dependencies**
   - Framework (React/Vue/Angular/etc.) with version
   - Build tools, styling approach, testing framework
   - State management and key dependencies

3. **Quick Start Guide**
   - Prerequisites (Node.js version, etc.)
   - Installation commands (`npm install`)
   - Development server startup (`npm run dev`)
   - Basic usage and navigation

4. **Development Workflow**
   - Available npm scripts with descriptions
   - Code formatting and linting commands
   - Testing commands (unit, integration, e2e)
   - Build and preview commands

5. **Project Structure**
   - Directory organization and file naming conventions
   - Component hierarchy and module boundaries
   - Configuration files and their purposes

6. **Implementation Status**
   - Completed features with checkboxes
   - In-progress features with current status
   - Pending features with dependencies
   - Design system implementation progress

7. **Quality Metrics**
   - Test coverage statistics and targets
   - Performance metrics (bundle size, Core Web Vitals)
   - Accessibility compliance status
   - Security scan results

8. **Known Issues & Technical Debt**
   - Current limitations with workarounds
   - Planned improvements and refactoring
   - Dependencies needing updates
   - Performance optimization opportunities

9. **Contributing Guidelines**
   - Code style standards and conventions
   - Commit message format and PR process
   - Testing requirements for contributions

10. **Deployment & Operations**
    - Build process and environment variables
    - Deployment instructions for different environments
    - Monitoring and error tracking setup

### 8. Quality Self-Check
Before project completion, verify:
- [ ] One-command run works end-to-end (or documented fallback)
- [ ] UI matches `DESIGN_SPEC.md` for structure and tokens
- [ ] All linting, type checking, and tests pass (exit code 0)
- [ ] Basic accessibility verified (keyboard nav, screen reader, color contrast)
- [ ] Performance metrics within acceptable thresholds (LCP < 2.5s, CLS < 0.1)
- [ ] Security scan completed (no high/critical vulnerabilities)
- [ ] Code coverage meets project standards (typically 80%+)

### 9. Stage Completion
- Update **DEV To-Do Checklist** marking all items complete
- Document any technical debt or future improvements
- Ensure all code is committed with proper commit messages
- Update changelog in README.md with implementation summary

## Output Artifacts
- **Primary:** `/src` implementation + `README.md`
- **Supporting:** Project to-do checklist, technical documentation

## Quality Gates
Before marking DEV stage complete:
- Run `npm run lint` (or equivalent) - must pass
- Run `npm run test` (or equivalent) - must pass  
- Run `npm run build` (or equivalent) - must succeed
- Verify accessibility with basic screen reader test
- Confirm responsive behavior on mobile/desktop

## Next Stage
After DEV completion, proceed to `/summarize` to review overall project status and next steps.