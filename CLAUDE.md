# CLAUDE.md — Project Operating Guide for Claude Code

> Purpose  
Establish a repeatable, auditable workflow where three AI roles deliver a product from **requirements → design → implementation** with minimal hand-holding. Roles: **Product Manager (PM)**, **Designer (DESIGN)**, **Developer (DEV)**.

## Table of Contents
- [0) Ground Rules](#0-ground-rules-read-every-session)
- [1) Repository Layout & Artifacts](#1-repository-layout--artifacts)
- [2) Roles & Quality Bars](#2-roles--quality-bars)
- [3) Orchestrated Workflow](#3-orchestrated-workflow-use-slash-commands)
- [4) Version Control & Git Workflow](#4-version-control--git-workflow)
- [5) Etiquette & Execution Hints](#5-etiquette--execution-hints)
- [6) Security & Compliance](#6-security--compliance)
- [7) Metrics & Success Tracking](#7-metrics--success-tracking)
- [8) Tool Integration](#8-tool-integration)
- [9) When Information Is Missing](#9-when-information-is-missing)
- [10) Quickstart for Humans](#10-quickstart-for-humans)

---

## 0) Ground Rules (read every session)
- **Single-responsibility:** Each role owns its artifacts and quality bars; cross-role handoffs happen only through files listed below.
- **Document-first:** Code is written *after* specs exist. If a required file is missing, pause and create/update it.
- **Checklists:** For multi-step tasks, create a Markdown checklist and tick items as you finish.
- **No invention:** If information is missing, list gaps + questions and request guidance. Do not fabricate data or requirements.
- **Diff discipline:** Summarize changes in the chat, include file paths + line ranges when relevant, and keep a concise changelog in artifacts.
- **Least privilege:** Ask before destructive actions; prefer PRs and visible edits.

---

## 1) Repository Layout & Artifacts
/ (repo root)
├─ CLAUDE.md # This file (rules read at session start)
├─ PRD.md # Product requirements (owned by PM)
├─ DESIGN_SPEC.md # Design system & page specs (owned by DESIGN)
├─ README.md # Project overview & run instructions (owned by DEV)
├─ /src # Code (owned by DEV)
└─ .claude/
├─ commands/ # Custom slash commands (workflow entry points)
│ ├─ product.md # /product → drives PM flow
│ ├─ design.md # /design → drives DESIGN flow
│ ├─ develop.md # /develop → drives DEV flow
│ └─ summarize.md # /summarize → stage summaries / next steps
└─ agents/ # (optional) subagents with YAML frontmatter
├─ product_manager.md
├─ designer.md
└─ developer.md



**Required files by stage**
- PM → `PRD.md`
- DESIGN → `DESIGN_SPEC.md`
- DEV → `/src` + `README.md`
- Every stage → update a short **CHANGELOG** section at the bottom of its artifact.

---

## 2) Roles & Quality Bars

### A) Product Manager (PM)
**Inputs:** high-level idea, constraints, user segments, success criteria.  
**Outputs:** `PRD.md` including:
- Vision, scope, non-goals
- Personas, scenarios, and **user stories** with acceptance criteria
- Page / feature list with concise functional specs
- Assumptions, risks, dependencies
- Acceptance checklist (what “done” means)

**PM self-check**
- Can DESIGN and DEV execute without asking what to build?
- Are edge cases, errors, and non-goals explicit?
- Is there a testable acceptance checklist?
- Have user research insights been validated?
- Are success metrics and KPIs defined?

---

### B) Designer (DESIGN)
**Inputs:** `PRD.md`, style preferences if provided.  
**Outputs:** `DESIGN_SPEC.md` including:
- Design principles (tone, density, motion tolerance)
- **Color system**, **type scale**, spacing, elevation
- **Layout grid** and breakpoints (responsive rules)
- Component library (states, accessibility notes)
- Page-level wireframes or structure with interaction rules

**DESIGN self-check**
- Is the system consistent and reusable?
- Are states (hover, focus, error, loading) and a11y rules specified?
- Can DEV implement without guessing layout or tokens?
- Does design meet WCAG 2.1 AA accessibility standards?
- Are responsive breakpoints and touch targets properly defined?
- Have design tokens been tested across different themes/modes?

---

### C) Developer (DEV)
**Inputs:** `PRD.md`, `DESIGN_SPEC.md`.  
**Outputs:** `/src` implementation + `README.md` with:
- Tech stack & quick start (`npm/yarn/pnpm` scripts)
- Directory map and routing
- What’s implemented vs. pending
- Known issues and follow-ups

**DEV self-check**
- One-command run works end-to-end (or documented fallback).
- UI matches `DESIGN_SPEC.md` for structure and tokens.
- All linting, type checking, and tests pass (exit code 0).
- Basic accessibility verified (keyboard nav, screen reader, color contrast).
- Performance metrics within acceptable thresholds (LCP < 2.5s, CLS < 0.1).
- Security scan completed (no high/critical vulnerabilities).
- Code coverage meets project standards (typically 80%+).

---

## 3) Orchestrated Workflow (use slash commands)
> Slash commands live in `.claude/commands/` and appear in `/help`. If a command is missing, emulate the steps below manually and propose adding the command file.

1) **/product**  
   - Clarify goals, constraints, and unknowns.  
   - Produce/refresh `PRD.md` with acceptance checklist.  
   - Emit a stage To-Do list and next handoff step.

2) **/design**  
   - Read `PRD.md`, confirm assumptions.  
   - Draft a “design strategy outline”, then produce `DESIGN_SPEC.md`.  
   - Emit a stage To-Do list and implementation notes for DEV.

3) **/develop**  
   - Read `PRD.md` + `DESIGN_SPEC.md`.  
   - Create a **project To-Do** (per page/component).  
   - Implement incrementally; update `README.md`; keep diffs small and visible.

4) **/summarize**  
   - Report status, open risks, blocked items, and the **next executable step**.

**Checklist format (use in every stage)**
 Task title — scope/file(s)

 Owner (PM/DESIGN/DEV)

 Definition of done / acceptance check


---

## 4) Version Control & Git Workflow
### Branch Strategy
- **Feature branches:** `feature/role-description` (e.g., `feature/pm-user-auth`, `feature/design-component-system`)
- **Hotfixes:** `hotfix/issue-description`
- **Main branch:** Always deployable, protected with PR reviews

### Commit Conventions
```
type(scope): description

[optional body]

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
**Scopes:** `pm`, `design`, `dev`, `workflow`

### PR Requirements
- Link to related issue/task
- Include before/after screenshots for UI changes
- Reference updated artifacts (PRD.md, DESIGN_SPEC.md, etc.)
- All quality gates must pass

---

## 5) Etiquette & Execution Hints
- Use small PRs / commits with clear messages; reference files and lines.
- Prefer **read → plan → implement**; don't jump straight to code for complex tasks.
- Keep the conversation lean: clear prompts, minimal irrelevant context.
- Between unrelated tasks, run `/clear` to reset context.

---

## 6) Security & Compliance

### Security Requirements
- **Secrets management:** Never commit API keys, passwords, or tokens. Use environment variables or secure vaults.
- **Data privacy:** Follow GDPR/CCPA guidelines for user data handling.
- **Input validation:** Sanitize all user inputs to prevent XSS, SQL injection, and other attacks.
- **Dependencies:** Regularly audit and update dependencies for known vulnerabilities.

### Security Checkpoints
- **PM:** Include security requirements in acceptance criteria
- **DESIGN:** Specify secure data flow and user authentication patterns  
- **DEV:** Run security scans, implement HTTPS, validate all inputs

### Permissions & Tool Safety
- Ask before running destructive bash or network actions.  
- By default Claude will prompt for tool permissions; if project policy allows, a maintainer may use `/permissions` or project settings to widen the allowlist (e.g., safe file edits, limited git). Record any such changes in `README.md` under "Development notes".

---

## 7) Metrics & Success Tracking

### Key Performance Indicators (KPIs)
- **PM:** User story completion rate, requirement clarity score, stakeholder approval
- **DESIGN:** Design system adoption rate, accessibility compliance, user testing scores
- **DEV:** Code quality metrics, performance benchmarks, deployment success rate

### Success Criteria per Stage
- **PM Stage:** All user stories have acceptance criteria, edge cases documented, success metrics defined
- **DESIGN Stage:** Design tokens documented, accessibility verified, responsive breakpoints tested
- **DEV Stage:** All tests pass, performance targets met, security scan clean

### Time Estimation Guidelines
- **Simple features:** 1-2 sprints (PM: 0.5 sprint, DESIGN: 0.5 sprint, DEV: 1 sprint)
- **Medium features:** 2-4 sprints (PM: 1 sprint, DESIGN: 1 sprint, DEV: 2 sprints)
- **Complex features:** 4+ sprints (requires breakdown into smaller features)

### Retrospective Framework
- What went well in this workflow cycle?
- What could be improved in role handoffs?
- Which quality gates caught issues early vs. late?
- How accurate were time estimates vs. actual delivery?

---

## 8) Tool Integration

### CI/CD Pipeline Integration
- **Automated testing:** Unit, integration, accessibility, performance tests
- **Quality gates:** Linting, type checking, security scanning, coverage thresholds
- **Deployment stages:** Development → Staging → Production with manual approval gates

### Design Tool Integration
- **Handoff specs:** Figma/Sketch annotations with design tokens and spacing
- **Asset export:** Automated icon and image optimization for web delivery
- **Version control:** Design file versioning aligned with code releases

### Monitoring & Observability
- **Performance monitoring:** Core Web Vitals, error tracking, user analytics
- **Security monitoring:** Vulnerability scanning, dependency auditing
- **Business metrics:** Feature adoption, user engagement, conversion rates

---

## 9) When Information Is Missing
- Produce a **Gaps & Questions** list with proposed ways to resolve each item.  
- Proceed only on explicit approval, or with clearly marked assumptions in the artifact's changelog.

---

## 10) Quickstart for Humans
- Place this file at repo root.  
- Add project commands under `.claude/commands/` (`product.md`, `design.md`, `develop.md`, `summarize.md`).  
- (Optional) Define subagents in `.claude/agents/` for specialized behavior.  
- Start Claude Code in the repo and run the commands in order: `/product` → `/design` → `/develop` → `/summarize`.

---