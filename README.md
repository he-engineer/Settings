# Claude Code Agent Team

Structured three-role AI workflow for product development: **PM → DESIGN → DEV**

## Quick Start

1. **Initialize Workflow**
   ```bash
   # Run slash commands in sequence
   /product    # Create PRD.md (Product Manager)
   /design     # Create DESIGN_SPEC.md (Designer) 
   /develop    # Build /src + README.md (Developer)
   /summarize  # Review status and next steps
   ```

2. **File Structure**
   ```
   ├─ CLAUDE.md           # Workflow guide (start here)
   ├─ PRD.md              # Product requirements (PM output)
   ├─ DESIGN_SPEC.md      # Design system & specs (DESIGN output)
   ├─ README.md           # Project docs (DEV output)
   ├─ /src                # Implementation (DEV output)
   └─ .claude/
      ├─ commands/        # Slash commands (/product, /design, /develop, /summarize)
      └─ agents/          # Detailed role specifications & templates
   ```

## Workflow Overview

### 1. Product Manager (`/product`)
- Gather requirements and define user personas
- Create user stories with acceptance criteria
- Prioritize features and assess risks
- **Output**: Comprehensive PRD.md

### 2. Designer (`/design`)
- Analyze PRD requirements
- Create design system (colors, typography, spacing)
- Design component library with all states
- **Output**: Complete DESIGN_SPEC.md

### 3. Developer (`/develop`)
- Implement design specifications
- Build components and features
- Ensure quality, accessibility, and performance
- **Output**: Production-ready /src + README.md

### 4. Summarize (`/summarize`)
- Review all artifacts and quality gates
- Identify blockers and risks
- Provide prioritized next steps

## Key Features

- **Document-first**: Code written after specs exist
- **Quality gates**: Validation checkpoints at each handoff
- **Templates**: Ready-to-use professional formats
- **Accessibility**: WCAG 2.1 AA compliance built-in
- **Performance**: Core Web Vitals targets included
- **Git workflow**: Structured commits and PR requirements

## Usage Notes

- Read `CLAUDE.md` for complete workflow guide
- Commands reference detailed agent files for templates
- Each role has specific quality standards and deliverables
- Slash commands provide step-by-step guidance
- Agent files contain comprehensive templates and examples

## Getting Started

1. Read `CLAUDE.md` for the complete workflow guide
2. Run `/product` to begin with product requirements
3. Follow the sequential workflow through each role
4. Use `/summarize` at any point to review status

---

*This workflow transforms AI assistance from basic task completion to professional product development with built-in quality standards and expert-level deliverables.*