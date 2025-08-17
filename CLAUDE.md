# CLAUDE.md — Project Operating Guide for Claude Code

> Purpose  
Establish a repeatable, auditable workflow where three AI roles deliver a product from **requirements → design → implementation** with minimal hand-holding. Roles: **Product Manager (PM)**, **Designer (DESIGN)**, **Developer (DEV)**.

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
- Lint/type/tests pass (if present); basic a11y verified.

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

## 4) Etiquette & Execution Hints
- Use small PRs / commits with clear messages; reference files and lines.
- Prefer **read → plan → implement**; don’t jump straight to code for complex tasks.
- Keep the conversation lean: clear prompts, minimal irrelevant context.
- Between unrelated tasks, run `/clear` to reset context.

---

## 5) Safety & Permissions
- Ask before running destructive bash or network actions.  
- By default Claude will prompt for tool permissions; if project policy allows, a maintainer may use `/permissions` or project settings to widen the allowlist (e.g., safe file edits, limited git). Record any such changes in `README.md` under “Development notes”.

---

## 6) When Information Is Missing
- Produce a **Gaps & Questions** list with proposed ways to resolve each item.  
- Proceed only on explicit approval, or with clearly marked assumptions in the artifact’s changelog.

---

## 7) Quickstart for Humans
- Place this file at repo root.  
- Add project commands under `.claude/commands/` (`product.md`, `design.md`, `develop.md`, `summarize.md`).  
- (Optional) Define subagents in `.claude/agents/` for specialized behavior.  
- Start Claude Code in the repo and run the commands in order: `/product` → `/design` → `/develop` → `/summarize`.

---