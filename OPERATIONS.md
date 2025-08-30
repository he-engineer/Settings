# Operations Guide - Hollow Word Game

## Deployment Overview
- **Application Type**: Progressive Web App (PWA)
- **Runtime**: Client-side only (no backend required)
- **Hosting**: Static site deployment (Vercel/Netlify recommended)
- **Build Target**: Modern browsers with offline capability

## Production Deployment

### Build Configuration
```json
// package.json
{
  "scripts": {
    "build": "vite build",
    "build:analyze": "vite build --mode analyze",
    "preview": "vite preview",
    "deploy": "npm run build && npm run deploy:vercel"
  }
}
```

### Environment Configuration
```bash
# .env.production
VITE_APP_NAME="Hollow Word"
VITE_APP_VERSION="1.0.0"
VITE_BUILD_MODE="production"
VITE_ENABLE_ANALYTICS="true"
```

### Build Optimization
```typescript
// vite.config.ts production settings
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['dexie']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

## Hosting Platforms

### Vercel Deployment (Recommended)
```yaml
# vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache"
        }
      ]
    }
  ]
}
```

**Deployment Steps:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify Deployment
```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/sw.js"
  [headers.values]
    Cache-Control = "no-cache"
```

### GitHub Pages Deployment
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Progressive Web App Setup

### Service Worker Implementation
```typescript
// public/sw.js
const CACHE_NAME = 'hollow-word-v1.0.0'
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
      })
  )
})
```

### Web App Manifest
```json
// public/manifest.json
{
  "name": "Hollow Word Game",
  "short_name": "Hollow Word",
  "description": "Accessible word puzzle game",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3b82f6",
  "background_color": "#f9fafb",
  "orientation": "portrait",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "icon-512.png", 
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
npm run build:analyze
npx webpack-bundle-analyzer dist/stats.json
```

### Performance Budgets
```json
// performance.json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "200kb",
      "maximumError": "250kb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "6kb"
    }
  ]
}
```

### Lighthouse CI Integration
```yaml
# .github/workflows/lighthouse.yml
- name: Lighthouse CI
  run: |
    npm install -g @lhci/cli@0.8.x
    lhci autorun
```

## Monitoring & Analytics

### Performance Monitoring
```typescript
// Performance tracking
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'measure') {
      // Send to analytics
      gtag('event', 'timing_complete', {
        name: entry.name,
        value: Math.round(entry.duration)
      })
    }
  }
})
observer.observe({entryTypes: ['measure']})
```

### Error Tracking
```typescript
// Error boundary with reporting
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Report to error tracking service
    console.error('Game Error:', error, errorInfo)
    
    // Optional: Send to external service
    // Sentry.captureException(error)
  }
}
```

### Usage Analytics (Privacy-First)
```typescript
// Local analytics without tracking
const trackGameEvent = (event: string, properties?: Record<string, any>) => {
  const analytics = {
    event,
    timestamp: new Date().toISOString(),
    ...properties
  }
  
  // Store locally for insights
  localStorage.setItem('game-analytics', JSON.stringify(analytics))
}
```

## Security Configuration

### Content Security Policy
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';
               img-src 'self' data:;
               connect-src 'self';">
```

### Security Headers
```javascript
// vercel edge config
export default function handler(request) {
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}
```

## Database Operations (IndexedDB)

### Data Migration Strategy
```typescript
// Database versioning
const db = new Dexie('HollowWordDB')
db.version(1).stores({
  words: '++id, word, difficulty, category',
  progress: '++id, userId, score, streak'
})

db.version(2).stores({
  words: '++id, word, difficulty, category, hints',
  progress: '++id, userId, score, streak, achievements'
}).upgrade(tx => {
  // Migration logic for existing data
  return tx.progress.toCollection().modify(progress => {
    progress.achievements = []
  })
})
```

### Backup & Restore
```typescript
// Export user data
export const exportUserData = async () => {
  const data = await db.progress.toArray()
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement('a')
  link.href = url
  link.download = 'hollow-word-backup.json'
  link.click()
}

// Import user data
export const importUserData = async (file: File) => {
  const text = await file.text()
  const data = JSON.parse(text)
  await db.progress.bulkPut(data)
}
```

## Maintenance Procedures

### Regular Health Checks
```typescript
// Service health monitoring
const performHealthCheck = async () => {
  const checks = [
    { name: 'Database', test: () => db.open() },
    { name: 'LocalStorage', test: () => localStorage.setItem('test', 'test') },
    { name: 'ServiceWorker', test: () => 'serviceWorker' in navigator }
  ]
  
  const results = await Promise.allSettled(checks.map(check => check.test()))
  return checks.map((check, i) => ({
    name: check.name,
    status: results[i].status === 'fulfilled' ? 'healthy' : 'failed'
  }))
}
```

### Cache Management
```typescript
// Clear outdated caches
const cleanupCaches = async () => {
  const cacheNames = await caches.keys()
  const outdatedCaches = cacheNames.filter(name => 
    name.startsWith('hollow-word-') && name !== CACHE_NAME
  )
  
  await Promise.all(outdatedCaches.map(name => caches.delete(name)))
}
```

### Update Strategy
```typescript
// Check for updates
const checkForUpdates = async () => {
  const registration = await navigator.serviceWorker.getRegistration()
  if (registration) {
    registration.update()
  }
}

// Notify user of updates
registration?.addEventListener('updatefound', () => {
  const newWorker = registration.installing
  newWorker?.addEventListener('statechange', () => {
    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
      // Show update notification to user
      showUpdateNotification()
    }
  })
})
```

## Rollback Strategy

### Version Management
```bash
# Tag releases
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Emergency rollback
vercel --prod --confirm -A vercel-rollback.json
```

### Feature Flags
```typescript
// Feature toggle system
const features = {
  newGameMode: process.env.NODE_ENV === 'development',
  socialFeatures: false,
  advancedHints: true
}

export const isFeatureEnabled = (feature: keyof typeof features) => {
  return features[feature] ?? false
}
```

## Disaster Recovery

### Data Recovery
```typescript
// Restore from backup
const restoreFromBackup = async (backupData: string) => {
  try {
    const data = JSON.parse(backupData)
    await db.transaction('rw', db.progress, async () => {
      await db.progress.clear()
      await db.progress.bulkAdd(data)
    })
  } catch (error) {
    console.error('Restore failed:', error)
  }
}
```

### Emergency Procedures
1. **Service Outage**: Redirect to status page
2. **Critical Bug**: Immediate rollback to last stable version
3. **Security Issue**: Temporary shutdown, patch deployment
4. **Data Corruption**: Restore from backups, user notification

## Compliance & Accessibility

### WCAG 2.1 AA Compliance
- Automated accessibility testing in CI/CD
- Manual testing with screen readers
- Regular accessibility audits
- User feedback integration

### Privacy Compliance
- No external tracking without consent
- Data minimization practices
- Clear privacy policy
- User data export/deletion capabilities

## Documentation Maintenance

### Runbooks
- Deployment procedures
- Incident response procedures
- Performance optimization guides
- Security update procedures

### Change Management
- Version control for all configurations
- Deployment approval process
- Change documentation requirements
- Rollback procedures documentation

---

**Operations Readiness**: Production deployment configuration complete with monitoring, security, and maintenance procedures established.