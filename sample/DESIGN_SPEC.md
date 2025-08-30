# Design System & Specifications

## Design Principles
- **Accessibility First**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support
- **Simplicity Focus**: Clean, uncluttered interface with clear visual hierarchy
- **Mobile-First**: Touch-friendly design optimized for single-handed operation
- **Inclusive Design**: Support for users aged 18-65 with varying tech comfort levels

## Color System
### Primary Colors
- **Primary Blue**: #2563eb - Action buttons, selected states, progress indicators
- **Primary Dark**: #1e40af - Button hover states, active elements

### Semantic Colors
- **Success Green**: #10b981 - Correct answers, achievements, positive feedback
- **Warning Orange**: #f59e0b - Hints, caution states, limited attempts
- **Error Red**: #ef4444 - Wrong answers, error states, failed attempts
- **Info Blue**: #3b82f6 - Instructions, tips, informational messages

### Neutral Colors  
- **Gray-900**: #111827 - Primary text, high importance content (21:1 contrast)
- **Gray-700**: #374151 - Secondary text, labels (12:1 contrast)
- **Gray-500**: #6b7280 - Placeholder text, disabled text (7:1 contrast)
- **Gray-300**: #d1d5db - Borders, dividers, inactive elements (3:1 contrast)
- **Gray-100**: #f3f4f6 - Background surfaces, disabled states
- **Gray-50**: #f9fafb - App background, card backgrounds
- **White**: #ffffff - Content backgrounds, letter tiles

### Accessibility Color Variants
- **High Contrast Mode**: Increased contrast ratios (7:1 minimum for AAA compliance)
- **Success Green HC**: #047857 - High contrast success color
- **Error Red HC**: #dc2626 - High contrast error color

## Typography Scale
- **Display**: 36px/1.2, bold - App title, main headers (mobile: 28px)
- **Heading 1**: 24px/1.25, semibold - Screen titles, major sections
- **Heading 2**: 20px/1.3, medium - Card headers, game status
- **Body Large**: 18px/1.5, medium - Game letters, important content
- **Body**: 16px/1.5, regular - Default text, instructions
- **Body Small**: 14px/1.43, regular - Hints, secondary information
- **Caption**: 12px/1.33, medium - Timestamps, metadata

### Accessibility Typography
- **Large Text Option**: All sizes scale to 150% or 200% via settings
- **Font Weight**: Minimum 400 weight for readability, 500+ for emphasis
- **Line Height**: Minimum 1.5 for body text to improve readability

## Spacing & Layout
### Spacing Scale (8px base unit)
- **xs**: 4px | **sm**: 8px | **md**: 16px | **lg**: 24px | **xl**: 32px | **2xl**: 48px

### Layout Grid
- **Mobile**: 16px margins, 8px gutters, fluid column layout
- **Tablet**: 24px margins, 16px gutters, 2-column layout where appropriate
- **Touch Targets**: Minimum 44px × 44px for all interactive elements

### Component Spacing
- **Card Padding**: 16px internal spacing
- **Button Padding**: 12px vertical, 24px horizontal (large: 16px/32px)
- **Input Padding**: 12px vertical, 16px horizontal

## Component Library

### Letter Tile
**Default State**
- Size: 56px × 56px (large: 64px × 64px)
- Background: White | Border: 2px gray-300 | Corner radius: 8px
- Typography: Body Large, gray-900, centered
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

**States**
- **Empty**: Background gray-100, dashed border gray-300
- **Selected**: Border primary-blue, background blue-50
- **Correct**: Background success-green, border success-green, text white
- **Incorrect**: Background error-red, border error-red, text white, shake animation
- **Disabled**: Background gray-100, text gray-500, no interaction

### Action Button
**Primary Button**
- Background: primary-blue | Text: white | Border radius: 8px
- Padding: 12px vertical, 24px horizontal
- Typography: Body, medium weight
- States: hover (+10% darker), active (scale 0.98), focus (2px outline), disabled (50% opacity)

**Secondary Button**  
- Background: transparent | Border: 2px primary-blue | Text: primary-blue
- Same padding and typography as primary
- States: hover (light blue background), focus (outline), disabled (gray styling)

### Game Progress Bar
- Height: 8px | Background: gray-200 | Fill: primary-blue | Corners: 4px radius
- Animation: Smooth fill transition over 0.3s
- Accessibility: ARIA labels with percentage complete

### Input Field
- Border: 2px gray-300 | Focus: primary-blue border | Radius: 6px
- Padding: 12px vertical, 16px horizontal
- Typography: Body size, gray-900
- States: default, focus (blue border), error (red border + message), disabled (gray background)
- Labels: Always visible above input, Body Small size

## Screen Specifications

### Home Screen
- **Header**: App logo + settings icon (top-right)
- **Main Game Area**: 
  - Current puzzle display with letter tiles in grid
  - Word blanks showing puzzle progress
  - Letter selection buttons in alphabetical grid (3×9 layout)
- **Status Bar**: Lives remaining, current score, puzzle difficulty indicator
- **Footer**: Hint button (left), skip button (right)

### Game Screen Layout
- **Puzzle Display**: Centered word with blanks, 24px spacing between letters
- **Letter Grid**: 6 rows of 4-5 letters each, 8px spacing between buttons
- **Feedback Area**: Messages for correct/incorrect guesses, slide-in animations
- **Progress**: Linear progress bar showing puzzle completion

### Settings Screen
- **Accessibility Section**: Text size slider, high contrast toggle, haptic feedback
- **Gameplay Section**: Difficulty preference, hint frequency, sound toggles
- **Account Section**: Progress sync, leaderboard privacy
- **About Section**: Version info, privacy policy, contact support

## Accessibility Requirements
### Visual Accessibility
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- **High Contrast Mode**: 7:1 contrast ratios available (WCAG AAA)
- **Text Size**: Scalable up to 200% without horizontal scrolling
- **Focus Indicators**: 2px solid outline, high contrast, clearly visible

### Interaction Accessibility
- **Touch Targets**: 44px minimum, 48px preferred for primary actions
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader**: Semantic HTML, ARIA labels, live regions for dynamic content
- **Haptic Feedback**: Optional vibration for correct/incorrect answers

### Cognitive Accessibility
- **Simple Language**: Clear, concise instructions and labels
- **Consistent Navigation**: Same interaction patterns throughout app
- **Error Prevention**: Confirmation for destructive actions, clear error recovery
- **Timeout Extensions**: No automatic timeouts, user-controlled pacing

## Animation & Micro-interactions
### Letter Animations
- **Letter Reveal**: 0.3s ease-out scale-in animation when letter is placed
- **Shake Animation**: 0.4s shake for incorrect letters (3 oscillations)
- **Success Pulse**: 0.5s gentle pulse animation for completed words

### Transition Guidelines
- **Screen Transitions**: 0.3s ease-in-out slide animations
- **Loading States**: Subtle pulse animation, no spinners
- **Respect Motion Preferences**: Disable animations if user prefers reduced motion

## Performance Considerations
### Image Assets
- **Letter Tiles**: Vector-based for crisp scaling across devices
- **Icons**: SVG format, properly labeled for screen readers
- **Illustrations**: Optimized SVGs under 10KB each

### Technical Implementation Notes
- **Color Variables**: CSS custom properties for easy theme switching
- **Responsive Units**: rem/em units for typography, viewport units for layouts
- **Touch Optimization**: 300ms tap delay removal, proper touch event handling

## Changelog
2024-08-30 - Initial design system based on accessibility-first principles and user research insights