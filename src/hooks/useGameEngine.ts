import { useReducer, useCallback, useEffect } from 'react'
import { GameState, GameAction, GameSession, UserProgress } from '../types/game'
import { GameEngine } from '../services/GameEngine'

const initialUserProgress: UserProgress = {
  userId: 'local-user',
  wordsCompleted: new Set(),
  currentStreak: 0,
  bestStreak: 0,
  totalScore: 0,
  difficultyLevel: 2,
  gamesPlayed: 0,
  lastPlayed: new Date()
}

const initialState: GameState = {
  currentSession: null,
  userProgress: initialUserProgress,
  isLoading: false,
  error: null
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isLoading: true,
        error: null
      }
    
    case 'GAME_COMPLETE':
      const updatedProgress = {
        ...state.userProgress,
        gamesPlayed: state.userProgress.gamesPlayed + 1,
        totalScore: state.userProgress.totalScore + action.session.score,
        lastPlayed: new Date()
      }

      if (!action.session.hiddenWord.includes('_')) {
        updatedProgress.wordsCompleted.add(action.session.word)
        updatedProgress.currentStreak += 1
        updatedProgress.bestStreak = Math.max(updatedProgress.bestStreak, updatedProgress.currentStreak)
      } else {
        updatedProgress.currentStreak = 0
      }

      return {
        ...state,
        currentSession: action.session,
        userProgress: updatedProgress,
        isLoading: false
      }
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      }
    
    default:
      return state
  }
}

export function useGameEngine() {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const gameEngine = new GameEngine()

  const startNewGame = useCallback(async (difficulty?: number) => {
    try {
      dispatch({ type: 'START_GAME', difficulty })
      const newSession = await gameEngine.initializeGame(difficulty)
      
      // Simulate game session for demo
      dispatch({ 
        type: 'GAME_COMPLETE', 
        session: {
          ...newSession,
          isLoading: false
        } as GameSession
      })
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        error: error instanceof Error ? error.message : 'Failed to start game' 
      })
    }
  }, [])

  const makeGuess = useCallback(async (letter: string) => {
    if (!state.currentSession) return

    try {
      const result = gameEngine.makeGuess(state.currentSession, letter)
      
      const updatedSession = {
        ...state.currentSession,
        hiddenWord: result.updatedHiddenWord,
        guessedLetters: new Set([...state.currentSession.guessedLetters, letter.toUpperCase()]),
        attemptsRemaining: state.currentSession.attemptsRemaining - (result.isCorrect ? 0 : 1),
        isComplete: result.isGameComplete,
        score: state.currentSession.score + result.scoreIncrease
      }

      if (updatedSession.isComplete) {
        updatedSession.endTime = new Date()
      }

      dispatch({ type: 'GAME_COMPLETE', session: updatedSession })
      
      // Announce result to screen readers
      const message = result.isCorrect 
        ? `Correct! Letter ${letter} is in the word.`
        : `Incorrect. Letter ${letter} is not in the word. ${updatedSession.attemptsRemaining} attempts remaining.`
      
      announceToScreenReader(message)
      
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        error: error instanceof Error ? error.message : 'Failed to make guess' 
      })
    }
  }, [state.currentSession])

  const getHint = useCallback(() => {
    if (!state.currentSession) return

    try {
      const hintResult = gameEngine.getHint(state.currentSession)
      if (hintResult.success) {
        announceToScreenReader(hintResult.hint)
        // Could show hint in UI here
      }
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        error: error instanceof Error ? error.message : 'Failed to get hint' 
      })
    }
  }, [state.currentSession])

  const skipPuzzle = useCallback(async () => {
    if (!state.currentSession) return

    const skippedSession = {
      ...state.currentSession,
      isComplete: true,
      attemptsRemaining: 0,
      endTime: new Date()
    }

    dispatch({ type: 'GAME_COMPLETE', session: skippedSession })
    announceToScreenReader('Puzzle skipped. Starting new game.')
  }, [state.currentSession])

  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' })
  }, [])

  // Initialize first game on mount
  useEffect(() => {
    if (!state.currentSession && !state.isLoading) {
      startNewGame()
    }
  }, [startNewGame, state.currentSession, state.isLoading])

  return {
    session: state.currentSession,
    progress: state.userProgress,
    isLoading: state.isLoading,
    error: state.error,
    startNewGame,
    makeGuess,
    getHint,
    skipPuzzle,
    clearError
  }
}

// Utility function for screen reader announcements
function announceToScreenReader(message: string) {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only absolute -left-10000px'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  setTimeout(() => {
    if (document.body.contains(announcement)) {
      document.body.removeChild(announcement)
    }
  }, 1000)
}