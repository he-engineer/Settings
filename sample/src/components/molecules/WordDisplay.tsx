import { LetterTile } from '../atoms/LetterTile'

interface WordDisplayProps {
  hiddenWord: string[]
  isComplete: boolean
  className?: string
}

export const WordDisplay = ({
  hiddenWord,
  isComplete,
  className = ''
}: WordDisplayProps) => {
  return (
    <div className={`${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Guess the Word!</h2>
        <p className="text-gray-600">Fill in the missing letters</p>
      </div>
      <div 
        className="flex flex-wrap justify-center gap-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100 shadow-inner"
        role="region"
        aria-label="Word puzzle display"
      >
        {hiddenWord.map((letter, index) => (
          <LetterTile
            key={index}
            letter={letter}
            state={letter === '_' ? 'empty' : isComplete ? 'correct' : 'default'}
            size="large"
            aria-label={`Position ${index + 1}: ${letter === '_' ? 'blank' : letter}`}
          />
        ))}
      </div>
    </div>
  )
}