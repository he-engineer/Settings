// Core game types based on LLD specifications
export interface WordEntry {
  id: string
  word: string
  difficulty: number  // 1-5
  category: string
  frequency: number
  hints?: string[]
}

export interface GameSession {
  id: string
  word: string
  hiddenWord: string[]  // ['H', '_', 'L', 'L', 'O'] 
  guessedLetters: Set<string>
  attemptsRemaining: number
  isComplete: boolean
  score: number
  startTime: Date
  endTime?: Date
}

export interface GuessResult {
  isCorrect: boolean
  updatedHiddenWord: string[]
  isGameComplete: boolean
  scoreIncrease: number
  message: string
}

export interface UserProgress {
  userId: string
  wordsCompleted: Set<string>
  currentStreak: number
  bestStreak: number
  totalScore: number
  difficultyLevel: number
  gamesPlayed: number
  lastPlayed: Date
}

export interface UserSettings {
  textSize: number        // 1.0, 1.5, 2.0
  highContrast: boolean
  hapticFeedback: boolean
  soundEffects: boolean
  difficultyPreference: 'auto' | 'manual'
  hintFrequency: number   // hints per game
}

export interface HintResult {
  hint: string
  hintsRemaining: number
  success: boolean
}

export type GameAction = 
  | { type: 'START_GAME'; difficulty?: number }
  | { type: 'MAKE_GUESS'; letter: string }
  | { type: 'USE_HINT' }
  | { type: 'SKIP_PUZZLE' }
  | { type: 'GAME_COMPLETE'; session: GameSession }
  | { type: 'SET_ERROR'; error: string }
  | { type: 'CLEAR_ERROR' }

export interface GameState {
  currentSession: GameSession | null
  userProgress: UserProgress
  isLoading: boolean
  error: string | null
}