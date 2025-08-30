# AI SDLC Settings (CLAUDE Playbook)

This repository contains a lightweight, document‑first software development workflow you can use with AI assistants. It centers on a nine‑stage SDLC playbook and a set of role/command prompts stored under `.claude/`.

The playbook encourages clear handoffs, quality gates, and evidence‑based decisions while producing well‑structured artifacts (PRD, design specs, HLD/LLD, test plan, operations guide) before and during implementation.

## Quick Start

- Read `.claude/CLAUDE.md` for the end‑to‑end workflow and quality gates.
- Use the command prompts in `.claude/commands/` to drive each stage:
  - `/research` → UX_RESEARCH.md
  - `/plan` → PRD.md
  - `/design` → DESIGN_SPEC.md
  - `/architect` → HLD.md
  - `/engineer` → LLD.md
  - `/implement` → build `/src` + README updates
  - `/review` → CODE_REVIEW.md
  - `/test` → TEST_PLAN.md
  - `/deploy` → OPERATIONS.md

You can copy the `.claude/` folder into any project root to adopt this workflow. Artifacts are created in the repository root as you progress through the stages.

## What’s Inside

```
.claude/
  CLAUDE.md               # Master AI SDLC playbook (9 stages, quality gates)
  settings.json           # Default behavior (e.g., permission mode)
  settings.local.json     # Local overrides (e.g., allowed tools)
  commands/               # Slash-command workflows for each stage
    architect.md
    deploy.md
    design.md
    engineer.md
    implement.md
    plan.md
    research.md
    review.md
    summarize.md
    test.md
  agents/                 # Role definitions and templates
    code_reviewer.md
    developer.md
    devops_engineer.md
    product_manager.md
    qa_engineer.md
    software_architect.md
    software_engineer.md
    ux_designer.md
    ux_researcher.md

README.md                 # You are here
LICENSE                   # Apache-2.0
```

## Core Principles

- User‑experience driven: UX informs technical decisions.
- Document‑first: Specs precede implementation.
- Single responsibility: Each role owns specific artifacts.
- Quality gates: Each stage must pass validation before handoff.
- Evidence‑based: Decisions backed by research and data.

## Recommended Flow

1) Research → UX_RESEARCH.md

2) Product → PRD.md

3) Design → DESIGN_SPEC.md

4) Architecture → HLD.md

5) Engineering → LLD.md

6) Implementation → `/src` + README updates (see `.claude/commands/implement.md` and `.claude/agents/developer.md`)

7) Review → CODE_REVIEW.md

8) Testing → TEST_PLAN.md

9) Deployment → OPERATIONS.md

Each command file in `.claude/commands/` provides prerequisites, steps, required sections, and quality checks for that stage.

## Using With an AI Assistant

- Open the relevant `.claude/commands/*.md` and use it as a structured prompt to guide the assistant’s work for that stage.
- Reference role files under `.claude/agents/` when you want the assistant to act as a specific role (e.g., Product Manager, Developer, QA Engineer).
- Maintain artifacts in the repository root; commit updates at each stage to preserve a clear artifact trail.

## Git Conventions (Suggested)

- Branches: `feature/stage-description` (e.g., `feature/research-user-onboarding`)
- Commits: `type(scope): description` and link to artifacts/decisions
- PRs: Include artifact diffs, quality gate status, and test results

## Notes

- `.gitignore` currently includes entries for AL (Dynamics 365 BC) projects; keep or adjust for your stack.
- This repo is a workflow scaffold; it does not include application code until you reach the Implementation stage.

## License

Licensed under the Apache License, Version 2.0 (see `LICENSE`).
