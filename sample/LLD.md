# Low-Level Design Document

## Technical Overview
- **Architecture Reference**: PWA-based React application with offline-first IndexedDB storage
- **Implementation Scope**: Complete game engine, UI components, data management, and PWA infrastructure
- **Technology Stack**: React 18 + TypeScript, Tailwind CSS, Vite, IndexedDB, Service Worker

## API Specifications
### Game Engine API
```typescript
// Core Game Engine Interface
interface GameEngine {
  initializeGame(difficulty?: number): GameSession
  makeGuess(letter: string): GuessResult
  getHint(): HintResult
  skipPuzzle(): void
  calculateScore(attempts: number, timeElapsed: number): number
}

interface GameSession {
  id: string
  word: string
  hiddenWord: string[]  // ['H', '_', 'L', 'L', 'O'] 
  guessedLetters: Set<string>
  attemptsRemaining: number
  isComplete: boolean
  score: number
  startTime: Date
}

interface GuessResult {
  isCorrect: boolean
  updatedHiddenWord: string[]
  isGameComplete: boolean
  scoreIncrease: number
  message: string
}
```

### Data Storage API
```typescript
// IndexedDB Data Layer
interface WordDatabase {
  getRandomWord(difficulty: number): Promise<WordEntry>
  getWordsByCategory(category: string): Promise<WordEntry[]>
  addCustomWords(words: WordEntry[]): Promise<void>
}

interface UserProgressManager {
  saveProgress(session: GameSession): Promise<void>
  getProgress(): Promise<UserProgress>
  updateDifficulty(newLevel: number): Promise<void>
  syncWithServer(): Promise<void>
}

interface WordEntry {
  id: string
  word: string
  difficulty: number  // 1-5
  category: string
  frequency: number
  hints?: string[]
}
```

### Settings & Accessibility API
```typescript
interface AccessibilityManager {
  setTextSize(scale: number): void  // 1.0, 1.5, 2.0
  toggleHighContrast(enabled: boolean): void
  enableHapticFeedback(enabled: boolean): void
  announceToScreenReader(message: string): void
}

interface UserSettings {
  textSize: number
  highContrast: boolean
  hapticFeedback: boolean
  soundEffects: boolean
  difficultyPreference: 'auto' | 'manual'
  hintFrequency: number  // hints per game
}
```

## Component Architecture
### React Component Hierarchy
```
App
├── GameProvider (Context)
├── AccessibilityProvider (Context)
├── Router
│   ├── HomePage
│   │   ├── GameBoard
│   │   │   ├── WordDisplay
│   │   │   ├── LetterGrid
│   │   │   └── GameControls
│   │   ├── ScoreDisplay
│   │   └── ProgressIndicator
│   ├── SettingsPage
│   │   ├── AccessibilitySettings
│   │   ├── GameplaySettings
│   │   └── AccountSettings
│   └── StatsPage
└── ServiceWorkerProvider
```

### Component Interfaces
```typescript
// Game Components
interface GameBoardProps {
  session: GameSession
  onGuess: (letter: string) => void
  onHint: () => void
  onSkip: () => void
}

interface WordDisplayProps {
  hiddenWord: string[]
  isComplete: boolean
  animateReveal?: boolean
}

interface LetterGridProps {
  availableLetters: string[]
  disabledLetters: Set<string>
  onLetterSelect: (letter: string) => void
  accessibility: {
    announceSelection: boolean
    hapticFeedback: boolean
  }
}

// Settings Components
interface AccessibilitySettingsProps {
  currentSettings: UserSettings
  onSettingChange: (key: keyof UserSettings, value: any) => void
  previewMode?: boolean
}
```

## Database Design
### IndexedDB Schema
```typescript
// Database Stores
const DB_SCHEMA = {
  words: {
    keyPath: 'id',
    indexes: [
      { name: 'difficulty', keyPath: 'difficulty' },
      { name: 'category', keyPath: 'category' },
      { name: 'frequency', keyPath: 'frequency' }
    ]
  },
  userProgress: {
    keyPath: 'userId',
    indexes: [
      { name: 'lastPlayed', keyPath: 'lastPlayed' },
      { name: 'currentStreak', keyPath: 'currentStreak' }
    ]
  },
  gameSessions: {
    keyPath: 'id',
    indexes: [
      { name: 'date', keyPath: 'startTime' },
      { name: 'completed', keyPath: 'isComplete' }
    ]
  },
  settings: {
    keyPath: 'userId'
  }
}

// Database Operations
class GameDatabase {
  private db: IDBDatabase

  async getWordByDifficulty(level: number): Promise<WordEntry> {
    const transaction = this.db.transaction(['words'], 'readonly')
    const store = transaction.objectStore('words')
    const index = store.index('difficulty')
    
    // Get all words at difficulty level, select random one
    const words = await index.getAll(level)
    return words[Math.floor(Math.random() * words.length)]
  }

  async saveGameSession(session: GameSession): Promise<void> {
    const transaction = this.db.transaction(['gameSessions', 'userProgress'], 'readwrite')
    
    // Save session
    await transaction.objectStore('gameSessions').put(session)
    
    // Update user progress
    const progressStore = transaction.objectStore('userProgress')
    const progress = await progressStore.get('local-user')
    const updated = this.updateProgress(progress, session)
    await progressStore.put(updated)
  }
}
```

## State Management Architecture
### Game State Management
```typescript
// Game State Reducer
interface GameState {
  currentSession: GameSession | null
  gameHistory: GameSession[]
  userProgress: UserProgress
  settings: UserSettings
  isLoading: boolean
  error: string | null
}

type GameAction = 
  | { type: 'START_GAME'; difficulty?: number }
  | { type: 'MAKE_GUESS'; letter: string }
  | { type: 'USE_HINT' }
  | { type: 'SKIP_PUZZLE' }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<UserSettings> }
  | { type: 'SET_ERROR'; error: string }

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        currentSession: createNewSession(action.difficulty),
        isLoading: false
      }
    
    case 'MAKE_GUESS':
      if (!state.currentSession) return state
      
      const guessResult = processGuess(state.currentSession, action.letter)
      return {
        ...state,
        currentSession: {
          ...state.currentSession,
          ...guessResult.updatedSession
        }
      }
    
    // ... other actions
  }
}
```

### Custom Hooks
```typescript
// Game Logic Hook
export function useGameEngine() {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  
  const startGame = useCallback((difficulty?: number) => {
    dispatch({ type: 'START_GAME', difficulty })
  }, [])
  
  const makeGuess = useCallback((letter: string) => {
    dispatch({ type: 'MAKE_GUESS', letter })
  }, [])
  
  const useHint = useCallback(() => {
    dispatch({ type: 'USE_HINT' })
  }, [])
  
  return {
    session: state.currentSession,
    progress: state.userProgress,
    isLoading: state.isLoading,
    error: state.error,
    startGame,
    makeGuess,
    useHint
  }
}

// Accessibility Hook
export function useAccessibility() {
  const [settings, setSettings] = useLocalStorage<UserSettings>('accessibility', defaultSettings)
  
  const announceToScreenReader = useCallback((message: string) => {
    // Create live region announcement
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    setTimeout(() => document.body.removeChild(announcement), 1000)
  }, [])
  
  return {
    settings,
    setTextSize: (scale: number) => setSettings(s => ({ ...s, textSize: scale })),
    toggleHighContrast: (enabled: boolean) => setSettings(s => ({ ...s, highContrast: enabled })),
    announceToScreenReader
  }
}
```

## Error Handling Strategy
### Error Types
```typescript
export class GameError extends Error {
  constructor(public code: string, message: string) {
    super(message)
    this.name = 'GameError'
  }
}

export class DatabaseError extends Error {
  constructor(public operation: string, message: string, public cause?: Error) {
    super(`Database ${operation} failed: ${message}`)
    this.name = 'DatabaseError'
  }
}

export class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(`Validation failed for ${field}: ${message}`)
    this.name = 'ValidationError'
  }
}
```

### Error Boundaries
```typescript
// Game Error Boundary
interface GameErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class GameErrorBoundary extends Component<PropsWithChildren, GameErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error: Error): GameErrorBoundaryState {
    return { hasError: true, error }
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to analytics service
    console.error('Game Error:', error, errorInfo)
    
    // Report to error tracking service
    if (window.Sentry) {
      window.Sentry.captureException(error, { extra: errorInfo })
    }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback 
          error={this.state.error}
          onRetry={() => this.setState({ hasError: false })}
        />
      )
    }
    
    return this.props.children
  }
}
```

## Performance Specifications
### Optimization Requirements
- **Component Optimization**: React.memo for expensive components, useMemo for calculations
- **Bundle Splitting**: Dynamic imports for settings page and stats page
- **Image Optimization**: SVG icons, no raster images, lazy loading for non-critical assets
- **Memory Management**: Cleanup event listeners, cancel async operations on unmount

### Caching Strategy
```typescript
// Service Worker Caching
const CACHE_STRATEGY = {
  // App Shell - Cache First
  appShell: [
    '/',
    '/static/js/main.js',
    '/static/css/main.css'
  ],
  
  // Game Data - Stale While Revalidate
  gameData: [
    '/api/words.json',
    '/api/categories.json'
  ],
  
  // Assets - Cache First with Fallback
  assets: [
    '/static/icons/*',
    '/static/sounds/*'
  ]
}

// IndexedDB Caching
const CACHE_DURATION = {
  words: 7 * 24 * 60 * 60 * 1000,      // 7 days
  userProgress: 0,                       // Never expire
  gameSessions: 30 * 24 * 60 * 60 * 1000 // 30 days
}
```

## Security Implementation
### Input Validation
```typescript
// Validation Schemas
const gameInputValidation = {
  letter: (input: string): boolean => {
    return /^[A-Za-z]$/.test(input) // Single letter only
  },
  
  difficulty: (level: number): boolean => {
    return Number.isInteger(level) && level >= 1 && level <= 5
  },
  
  settings: (settings: Partial<UserSettings>): ValidationResult => {
    const errors: string[] = []
    
    if (settings.textSize && (settings.textSize < 1 || settings.textSize > 2)) {
      errors.push('Text size must be between 1.0 and 2.0')
    }
    
    return { isValid: errors.length === 0, errors }
  }
}

// XSS Prevention
function sanitizeUserInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .substring(0, 50)     // Limit length
    .trim()
}
```

## Testing Strategy
### Unit Test Requirements
```typescript
// Game Engine Tests
describe('GameEngine', () => {
  it('should initialize game with correct word length', () => {
    const engine = new GameEngine()
    const session = engine.initializeGame(2) // difficulty 2
    
    expect(session.word).toHaveLength(5) // 5-letter words at level 2
    expect(session.hiddenWord.filter(c => c === '_')).toHaveLength(2) // 2 hidden letters
  })
  
  it('should handle correct letter guess', () => {
    const session = createMockSession('HELLO', ['H', '_', 'L', 'L', 'O'])
    const result = engine.makeGuess('E')
    
    expect(result.isCorrect).toBe(true)
    expect(result.updatedHiddenWord).toEqual(['H', 'E', 'L', 'L', 'O'])
  })
})

// Component Tests  
describe('LetterGrid', () => {
  it('should call onLetterSelect when letter is clicked', () => {
    const mockOnSelect = jest.fn()
    render(<LetterGrid onLetterSelect={mockOnSelect} availableLetters={['A', 'B']} />)
    
    fireEvent.click(screen.getByText('A'))
    expect(mockOnSelect).toHaveBeenCalledWith('A')
  })
  
  it('should be keyboard accessible', () => {
    const mockOnSelect = jest.fn()
    render(<LetterGrid onLetterSelect={mockOnSelect} availableLetters={['A']} />)
    
    const letterButton = screen.getByText('A')
    fireEvent.keyDown(letterButton, { key: 'Enter' })
    expect(mockOnSelect).toHaveBeenCalledWith('A')
  })
})
```

## Implementation Contracts
### Developer Handoff Requirements
- [x] All game logic APIs precisely defined with TypeScript interfaces
- [x] Component props and callbacks specified with full type safety
- [x] Database schema with migration strategy for IndexedDB
- [x] Error handling patterns established with specific error types
- [x] Performance optimization strategies detailed
- [x] Security validation patterns implemented for all user input

## Quality Gates
- Can IMPLEMENTATION proceed without technical ambiguity?
- Are all data models and APIs precisely specified with types?
- Do performance specifications align with user experience goals (< 3s load)?
- Is accessibility implementation detailed for WCAG compliance?
- Are offline capabilities fully specified for PWA requirements?

## Changelog
2024-08-30 - Complete technical specifications for offline-first PWA word game