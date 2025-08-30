# /deploy - Deployment & Operations Workflow

Set up production deployment, monitoring, and operational procedures. Creates OPERATIONS.md with deployment and monitoring strategy.

## Prerequisites
- All quality gates passed from /test phase
- Production infrastructure planned and provisioned
- Security and compliance requirements defined

## Deployment Process

### Phase 1: Infrastructure Setup
1. **Environment Configuration** - Production, staging, development environments
2. **CI/CD Pipeline** - Automated build, test, and deployment pipeline
3. **Security Configuration** - SSL, firewalls, access controls, secrets management
4. **Database Setup** - Production database, backups, replication

### Phase 2: Monitoring & Observability
5. **Application Monitoring** - APM, metrics, logging, and distributed tracing
6. **Infrastructure Monitoring** - Server, database, and network monitoring
7. **Alerting Setup** - Critical, warning, and informational alert configuration
8. **Dashboard Creation** - Operational dashboards for key metrics

### Phase 3: Operational Procedures
9. **Deployment Procedures** - Blue-green, rolling, or canary deployment strategy
10. **Incident Response** - Response procedures for different severity levels
11. **Backup & Recovery** - Automated backups and disaster recovery testing
12. **Performance Optimization** - Caching, CDN, and scaling strategies

## Deliverables
Creates comprehensive OPERATIONS.md including:
- Complete deployment pipeline and infrastructure architecture
- Monitoring and alerting configuration with SLA targets
- Incident response procedures and escalation protocols
- Backup and disaster recovery plans with tested procedures
- Performance optimization and scaling strategies
- Security monitoring and compliance verification

## Quality Check
- [ ] Zero-downtime deployment pipeline operational
- [ ] Comprehensive monitoring covers application and infrastructure
- [ ] Alerting configured for all critical system metrics
- [ ] Incident response procedures documented and accessible
- [ ] Backup and recovery procedures tested successfully
- [ ] Security monitoring active with threat detection

**Next:** Run `/summarize` to review complete project status and quality gates