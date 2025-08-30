import { GameBoard } from './components/organisms/GameBoard'
import { useGameEngine } from './hooks/useGameEngine'

function App() {
  const {
    session,
    progress,
    isLoading,
    error,
    startNewGame,
    makeGuess,
    getHint,
    skipPuzzle,
    clearError
  } = useGameEngine()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading game...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Game Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={clearError}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Initializing game...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Game Header */}
        <div className="text-center mb-8 slide-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎯 Hollow Word</h1>
          <p className="text-gray-600">Guess the missing letters to complete the word!</p>
        </div>

        {/* Game Stats */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 pop-in">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-100 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">{progress.totalScore}</div>
              <div className="text-blue-700 font-medium">Total Score</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-100 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-green-600 mb-1">{progress.currentStreak}</div>
              <div className="text-green-700 font-medium">Current Streak</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-100 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">{progress.gamesPlayed}</div>
              <div className="text-purple-700 font-medium">Games Played</div>
            </div>
          </div>
        </div>

        {/* Main Game */}
        <GameBoard
          session={session}
          onGuess={makeGuess}
          onHint={getHint}
          onSkip={skipPuzzle}
          onNewGame={() => startNewGame()}
        />

        {/* Accessibility Info */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">⌨️</span>
              <span className="text-lg font-medium text-gray-700">How to Play</span>
            </div>
            <p className="text-gray-600">Click letters or use your keyboard to guess!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App