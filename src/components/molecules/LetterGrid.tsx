import React from 'react'
import { LetterTile } from '../atoms/LetterTile'

interface LetterGridProps {
  availableLetters: string[]
  disabledLetters: Set<string>
  onLetterSelect: (letter: string) => void
  className?: string
}

export const LetterGrid: React.FC<LetterGridProps> = ({
  availableLetters,
  disabledLetters,
  onLetterSelect,
  className = ''
}) => {
  const handleLetterClick = (letter: string) => {
    if (!disabledLetters.has(letter)) {
      onLetterSelect(letter)
    }
  }

  return (
    <div className={`${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Choose a Letter</h3>
        <p className="text-sm text-gray-500">Click or use keyboard to select</p>
      </div>
      <div 
        className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-9 gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-200"
        role="group"
        aria-label="Letter selection grid"
      >
        {availableLetters.map(letter => (
          <LetterTile
            key={letter}
            letter={letter}
            onClick={() => handleLetterClick(letter)}
            disabled={disabledLetters.has(letter)}
            aria-label={`Select letter ${letter}${disabledLetters.has(letter) ? ' (already used)' : ''}`}
            state={disabledLetters.has(letter) ? 'empty' : 'default'}
            size="medium"
          />
        ))}
      </div>
    </div>
  )
}