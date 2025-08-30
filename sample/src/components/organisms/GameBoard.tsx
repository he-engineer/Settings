import React from 'react'
import { GameSession } from '../../types/game'
import { WordDisplay } from '../molecules/WordDisplay'
import { LetterGrid } from '../molecules/LetterGrid'

interface GameBoardProps {
  session: GameSession
  onGuess: (letter: string) => void
  onHint: () => void
  onSkip: () => void
  onNewGame: () => void
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const GameBoard: React.FC<GameBoardProps> = ({
  session,
  onGuess,
  onHint,
  onSkip,
  onNewGame
}) => {
  const handleLetterSelect = (letter: string) => {
    if (!session.isComplete && session.attemptsRemaining > 0) {
      onGuess(letter)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Game Status Bar */}
      <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="text-2xl font-bold text-blue-600">{session.score}</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-2xl">❤️</span>
          <div>
            <div className="text-2xl font-bold text-red-500">{session.attemptsRemaining}</div>
            <div className="text-sm text-gray-600">Lives</div>
          </div>
        </div>
      </div>

      {/* Word Display */}
      <WordDisplay
        hiddenWord={session.hiddenWord}
        isComplete={session.isComplete}
        className="mb-6"
      />

      {/* Game Status */}
      {session.isComplete && (
        <div className="text-center mb-6 p-6 rounded-2xl border-2 animate-pulse">
          {!session.hiddenWord.includes('_') ? (
            <div className="bg-green-50 border-green-200">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-2xl font-bold text-green-700 mb-2">
                Congratulations!
              </p>
              <p className="text-lg text-green-600 mb-2">
                You solved "{session.word}"!
              </p>
              <p className="text-green-600">
                Completed in {3 - session.attemptsRemaining} attempt{3 - session.attemptsRemaining === 1 ? '' : 's'}
              </p>
            </div>
          ) : (
            <div className="bg-red-50 border-red-200">
              <div className="text-6xl mb-4">💔</div>
              <p className="text-2xl font-bold text-red-700 mb-2">
                Game Over
              </p>
              <p className="text-lg text-red-600 mb-2">
                The word was "{session.word}"
              </p>
              <p className="text-red-600">Better luck next time!</p>
            </div>
          )}
        </div>
      )}

      {/* Letter Selection Grid */}
      {!session.isComplete && (
        <LetterGrid
          availableLetters={ALPHABET}
          disabledLetters={session.guessedLetters}
          onLetterSelect={handleLetterSelect}
          className="mb-6"
        />
      )}

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        {!session.isComplete ? (
          <>
            <button
              onClick={onHint}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-medium"
              aria-label="Get a hint"
            >
              <span className="mr-2 text-xl">💡</span>
              Hint
            </button>
            <button
              onClick={onSkip}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl hover:from-gray-500 hover:to-gray-600 transform hover:scale-105 transition-all duration-200 shadow-lg font-medium"
              aria-label="Skip this puzzle"
            >
              <span className="mr-2 text-xl">⏭️</span>
              Skip
            </button>
          </>
        ) : (
          <button
            onClick={onNewGame}
            className="flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-bold text-lg"
            aria-label="Start a new game"
          >
            <span className="mr-3 text-2xl">🎮</span>
            New Game
          </button>
        )}
      </div>
    </div>
  )
}