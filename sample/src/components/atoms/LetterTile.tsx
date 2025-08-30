import React from 'react'

interface LetterTileProps {
  letter: string | '_'
  state?: 'default' | 'empty' | 'correct' | 'incorrect' | 'selected'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  'aria-label'?: string
}

export const LetterTile: React.FC<LetterTileProps> = ({
  letter,
  state = 'default',
  size = 'medium',
  onClick,
  disabled = false,
  'aria-label': ariaLabel
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 shadow-lg transform'
  
  const sizeClasses = {
    small: 'w-12 h-12 text-sm',
    medium: 'w-16 h-16 text-xl', 
    large: 'w-20 h-20 text-3xl'
  }
  
  const stateClasses = {
    default: 'bg-gradient-to-br from-white to-gray-50 border-gray-300 text-gray-800 shadow-md hover:shadow-xl',
    empty: 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-400 border-dashed text-gray-400',
    selected: 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-400 text-blue-800 shadow-xl ring-2 ring-blue-300',
    correct: 'bg-gradient-to-br from-green-400 to-green-600 border-green-500 text-white shadow-2xl animate-bounce',
    incorrect: 'bg-gradient-to-br from-red-400 to-red-600 border-red-500 text-white shadow-2xl animate-pulse'
  }

  const interactionClasses = onClick && !disabled
    ? 'cursor-pointer hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:border-blue-400 active:scale-95 active:rotate-0'
    : disabled 
      ? 'cursor-not-allowed opacity-40 grayscale'
      : ''

  const displayLetter = letter === '_' ? '' : letter

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick()
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && onClick && !disabled) {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${stateClasses[state]} ${interactionClasses}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel || `Letter ${letter}`}
      role={onClick ? 'button' : 'presentation'}
      tabIndex={onClick && !disabled ? 0 : -1}
    >
      {displayLetter}
    </button>
  )
}