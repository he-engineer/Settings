import { GameSession, GuessResult, HintResult } from '../types/game'
import { WordDatabase } from './WordDatabase'

export class GameEngine {
  private wordDb: WordDatabase

  constructor() {
    this.wordDb = new WordDatabase()
  }

  async initializeGame(difficulty?: number): Promise<GameSession> {
    const targetDifficulty = difficulty || this.calculateAdaptiveDifficulty()
    const wordEntry = await this.wordDb.getRandomWord(targetDifficulty)
    
    const hiddenWord = this.createHiddenWord(wordEntry.word, targetDifficulty)
    
    return {
      id: crypto.randomUUID(),
      word: wordEntry.word.toUpperCase(),
      hiddenWord,
      guessedLetters: new Set(),
      attemptsRemaining: 3,
      isComplete: false,
      score: 0,
      startTime: new Date()
    }
  }

  makeGuess(session: GameSession, letter: string): GuessResult {
    if (session.isComplete) {
      return {
        isCorrect: false,
        updatedHiddenWord: session.hiddenWord,
        isGameComplete: true,
        scoreIncrease: 0,
        message: 'Game already complete'
      }
    }

    const upperLetter = letter.toUpperCase()
    
    // Check if letter already guessed
    if (session.guessedLetters.has(upperLetter)) {
      return {
        isCorrect: false,
        updatedHiddenWord: session.hiddenWord,
        isGameComplete: session.isComplete,
        scoreIncrease: 0,
        message: 'Letter already guessed'
      }
    }

    session.guessedLetters.add(upperLetter)

    // Check if letter is in word
    const isCorrect = session.word.includes(upperLetter)
    let updatedHiddenWord = [...session.hiddenWord]
    
    if (isCorrect) {
      // Reveal all instances of the letter
      for (let i = 0; i < session.word.length; i++) {
        if (session.word[i] === upperLetter) {
          updatedHiddenWord[i] = upperLetter
        }
      }
    } else {
      session.attemptsRemaining--
    }

    // Check if game is complete
    const isGameComplete = !updatedHiddenWord.includes('_') || session.attemptsRemaining === 0
    
    // Calculate score increase
    let scoreIncrease = 0
    if (isCorrect && isGameComplete) {
      scoreIncrease = this.calculateScore(session.attemptsRemaining, Date.now() - session.startTime.getTime())
      session.endTime = new Date()
    }

    session.score += scoreIncrease
    session.isComplete = isGameComplete

    return {
      isCorrect,
      updatedHiddenWord,
      isGameComplete,
      scoreIncrease,
      message: this.getGuessMessage(isCorrect, isGameComplete, session.attemptsRemaining)
    }
  }

  getHint(session: GameSession): HintResult {
    if (session.isComplete) {
      return {
        hint: '',
        hintsRemaining: 0,
        success: false
      }
    }

    // Find a random hidden letter
    const hiddenIndices = session.hiddenWord
      .map((char, index) => char === '_' ? index : -1)
      .filter(index => index !== -1)
    
    if (hiddenIndices.length === 0) {
      return {
        hint: 'No more letters to reveal',
        hintsRemaining: 0,
        success: false
      }
    }

    const randomIndex = hiddenIndices[Math.floor(Math.random() * hiddenIndices.length)]
    const hintLetter = session.word[randomIndex]
    
    return {
      hint: `The word contains the letter '${hintLetter}' at position ${randomIndex + 1}`,
      hintsRemaining: 1, // Simplified - could track hints per game
      success: true
    }
  }

  private createHiddenWord(word: string, difficulty: number): string[] {
    const wordArray = word.toUpperCase().split('')
    const hideCount = Math.min(difficulty, Math.floor(word.length * 0.6))
    
    // Always show first letter to help users get started
    const indicesToHide = new Set<number>()
    
    // Randomly select letters to hide (excluding first letter)
    while (indicesToHide.size < hideCount) {
      const randomIndex = Math.floor(Math.random() * (word.length - 1)) + 1
      indicesToHide.add(randomIndex)
    }
    
    return wordArray.map((letter, index) => 
      indicesToHide.has(index) ? '_' : letter
    )
  }

  private calculateScore(attemptsRemaining: number, timeElapsed: number): number {
    const baseScore = 100
    const attemptBonus = attemptsRemaining * 25  // Bonus for fewer attempts
    const timeBonus = Math.max(0, 50 - Math.floor(timeElapsed / 1000)) // Time bonus (50 points max)
    
    return baseScore + attemptBonus + timeBonus
  }

  private calculateAdaptiveDifficulty(): number {
    // Simplified adaptive difficulty - could use user progress data
    return 2 // Default to medium difficulty
  }

  private getGuessMessage(isCorrect: boolean, isGameComplete: boolean, attemptsRemaining: number): string {
    if (isGameComplete) {
      return isCorrect ? 'Congratulations! You solved it!' : 'Game over. Better luck next time!'
    }
    
    if (isCorrect) {
      return 'Good guess!'
    } else {
      return `Wrong letter. ${attemptsRemaining} attempt${attemptsRemaining === 1 ? '' : 's'} remaining.`
    }
  }
}