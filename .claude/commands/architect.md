# /architect - Software Architecture Workflow

Design high-level system architecture to deliver optimal user experience. Creates HLD.md with technology decisions and system design.

## Prerequisites
- PRD.md and DESIGN_SPEC.md must exist and be complete
- User experience requirements clearly defined
- Performance and scalability targets established

## Architecture Process

### Phase 1: Requirements Analysis
1. **Experience Analysis** - Review user experience requirements from design
2. **Technical Requirements** - Extract performance, security, scalability needs
3. **Constraint Analysis** - Identify technical, business, and resource constraints
4. **Success Criteria** - Define measurable architecture success metrics

### Phase 2: Technology Strategy
5. **Stack Selection** - Choose technologies that best deliver user experience
6. **Architecture Pattern** - Select architectural approach (MVC, microservices, etc.)
7. **Integration Strategy** - Plan third-party services and API integrations
8. **Performance Strategy** - Design for speed, scalability, and reliability

### Phase 3: System Design
9. **Component Architecture** - Define major system components and relationships
10. **Data Architecture** - Design data flow, storage, and access patterns
11. **Security Architecture** - Plan authentication, authorization, and data protection
12. **Deployment Architecture** - Design infrastructure and deployment strategy

## Deliverables
Creates comprehensive HLD.md including:
- System architecture diagram with major components
- Technology stack with justified decisions
- Data flow and API design
- Performance and scalability plan
- Security architecture and considerations
- Deployment and infrastructure strategy

## Quality Check
- [ ] Architecture efficiently delivers designed user experience
- [ ] Technology choices justified with clear trade-offs
- [ ] Performance targets aligned with user research findings
- [ ] Security architecture comprehensive and reviewed
- [ ] Scalability plan addresses expected user growth
- [ ] Integration points and dependencies documented

**Next:** Run `/engineer` to create detailed technical specifications