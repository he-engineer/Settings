# /engineer - Technical Design Workflow

Create detailed technical specifications from high-level architecture. Creates LLD.md with precise implementation contracts.

## Prerequisites
- HLD.md must exist with architecture decisions
- DESIGN_SPEC.md available for UI component specifications
- Technology stack and patterns established

## Technical Design Process

### Phase 1: API Design
1. **Endpoint Specification** - Define all REST/GraphQL endpoints with contracts
2. **Data Models** - Create TypeScript interfaces and database schemas
3. **Authentication** - Design auth flows and security implementations
4. **Error Handling** - Define error types and response patterns

### Phase 2: Component Architecture
5. **Component Hierarchy** - Plan React/Vue component structure
6. **State Management** - Design application state and data flow
7. **Interface Design** - Create component props and callback interfaces
8. **Hook Design** - Plan custom hooks for reusable logic

### Phase 3: Implementation Contracts
9. **Database Design** - Create schemas, indexes, and migration scripts
10. **Performance Contracts** - Define caching, optimization, and loading strategies
11. **Testing Contracts** - Specify unit, integration, and e2e test requirements
12. **Security Implementation** - Detail input validation, sanitization, and protection

## Deliverables
Creates comprehensive LLD.md including:
- Complete API specifications with request/response examples
- Database schema with relationships and constraints
- Component interfaces and TypeScript definitions
- State management architecture and data flow
- Error handling patterns and security implementations
- Performance optimization and caching strategies

## Quality Check
- [ ] All technical interfaces precisely defined with types
- [ ] API contracts include error scenarios and edge cases
- [ ] Database design normalized and optimized
- [ ] Component architecture supports design system requirements
- [ ] Performance specifications quantified and measurable
- [ ] Security implementation detailed and reviewable

**Next:** Run `/implement` to build the solution from technical specifications