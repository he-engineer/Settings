# DESIGN_SPEC - Group Meal App

## Design Principles

### Core Philosophy
**Speed & Simplicity**: Every interaction should get users to their goal in under 2 minutes. Office workers need quick, intuitive solutions during busy workdays.

**Trust & Transparency**: Clear pricing, payment status, and group information builds confidence in group ordering. No hidden fees or confusing splits.

**Social Connection**: Design encourages collaboration while respecting privacy. Visual cues show group activity without overwhelming individual users.

### Design Values
- **Efficiency First**: Minimize taps and cognitive load
- **Visual Clarity**: Information hierarchy supports quick decision-making  
- **Inclusive Design**: Accessible to users with diverse abilities and tech comfort levels
- **Cross-Platform Consistency**: Identical experience on iOS and Android

### Accessibility Standards
- WCAG 2.1 AA compliance across all features
- Minimum 4.5:1 contrast ratio for text
- Touch targets minimum 44px × 44px
- Screen reader optimized with semantic markup
- Keyboard navigation support for all interactive elements

## Color System

### Primary Colors
```css
/* Brand Blue - Trust & Reliability */
--primary-50: #EBF8FF
--primary-100: #D1EDFF  
--primary-500: #0066CC  /* Main brand color */
--primary-600: #0052A3
--primary-900: #002E5B

/* Success Green - Group Formation & Payment Success */
--success-50: #F0FDF4
--success-100: #DCFCE7
--success-500: #22C55E  /* Success states */
--success-600: #16A34A
--success-900: #14532D
```

### Secondary Colors
```css
/* Warning Orange - Time Limits & Alerts */
--warning-50: #FFF7ED
--warning-100: #FFEDD5
--warning-500: #F97316  /* Time warnings */
--warning-600: #EA580C
--warning-900: #9A3412

/* Error Red - Payment Issues & Failures */
--error-50: #FEF2F2
--error-100: #FEE2E2
--error-500: #EF4444  /* Error states */
--error-600: #DC2626
--error-900: #7F1D1D
```

### Neutral Colors
```css
/* Grays - Text & Backgrounds */
--neutral-0: #FFFFFF   /* Pure white backgrounds */
--neutral-50: #F9FAFB  /* Light backgrounds */
--neutral-100: #F3F4F6 /* Card backgrounds */
--neutral-300: #D1D5DB /* Borders */
--neutral-500: #6B7280 /* Secondary text */
--neutral-700: #374151 /* Primary text */
--neutral-900: #111827 /* Headings */
```

### Semantic Color Usage
- **Primary Blue**: Main CTAs, active states, brand elements
- **Success Green**: Group formed, payment complete, order confirmed
- **Warning Orange**: Timer alerts, group almost full, payment pending
- **Error Red**: Failed payments, order errors, validation issues
- **Neutral**: Text hierarchy, backgrounds, borders

## Typography

### Font Family
```css
/* System fonts for optimal performance */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
```

### Type Scale
```css
/* Headings */
--text-h1: 28px/34px, weight: 700  /* Page titles */
--text-h2: 24px/30px, weight: 600  /* Section headers */
--text-h3: 20px/26px, weight: 600  /* Card titles */

/* Body Text */
--text-lg: 18px/24px, weight: 400  /* Prominent body text */
--text-base: 16px/22px, weight: 400  /* Default body text */
--text-sm: 14px/20px, weight: 400  /* Secondary information */

/* Utility */
--text-xs: 12px/16px, weight: 400  /* Captions, timestamps */
--text-button: 16px/20px, weight: 600  /* Button labels */
--text-label: 14px/18px, weight: 500  /* Form labels */
```

### Semantic Typography
- **H1**: Page titles ("Available Groups", "Create Group")
- **H2**: Section headers ("Nearby Restaurants", "Payment Details")  
- **H3**: Card titles (Restaurant names, group names)
- **Body**: Descriptions, instructions, menu items
- **Small**: Timestamps, member counts, distance indicators
- **Label**: Form fields, button text, navigation

## Spacing & Layout

### Spacing Scale
```css
/* 8pt grid system */
--space-1: 4px   /* Tight spacing */
--space-2: 8px   /* Small spacing */
--space-3: 12px  /* Default spacing */
--space-4: 16px  /* Medium spacing */
--space-6: 24px  /* Large spacing */
--space-8: 32px  /* Extra large spacing */
--space-12: 48px /* Section spacing */
```

### Container Widths
```css
/* Mobile-first responsive containers */
--container-mobile: 100% (16px padding)
--container-tablet: 768px max-width
--container-desktop: 1024px max-width
```

### Breakpoints
```css
/* React Native & Web responsive */
--mobile: 0px - 767px    /* Primary target */
--tablet: 768px - 1023px /* Secondary support */
--desktop: 1024px+       /* Future web version */
```

### Layout Grid
- **Mobile**: Single column, 16px margins
- **Cards**: 16px padding, 8px border radius
- **Lists**: 12px vertical spacing between items
- **Buttons**: 12px horizontal padding, 8px vertical padding

## Component Library

### Buttons

#### Primary Button
```javascript
// Default State
{
  backgroundColor: '--primary-500',
  color: '--neutral-0',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '--text-button',
  minHeight: '44px'
}

// Hover/Press State
{
  backgroundColor: '--primary-600',
  transform: 'scale(0.98)'
}

// Disabled State  
{
  backgroundColor: '--neutral-300',
  color: '--neutral-500'
}

// Loading State
{
  backgroundColor: '--primary-500',
  content: 'Spinner + "Processing..."'
}
```

#### Secondary Button
```javascript
// Default State
{
  backgroundColor: 'transparent',
  color: '--primary-500',
  border: '2px solid --primary-500',
  padding: '10px 22px'
}
```

### Input Fields

#### Text Input
```javascript
// Default State
{
  backgroundColor: '--neutral-0',
  border: '2px solid --neutral-300',
  padding: '12px 16px',
  borderRadius: '8px',
  fontSize: '--text-base'
}

// Focus State
{
  borderColor: '--primary-500',
  boxShadow: '0 0 0 3px --primary-50'
}

// Error State
{
  borderColor: '--error-500',
  backgroundColor: '--error-50'
}
```

### Cards

#### Group Card
```javascript
// Layout
{
  backgroundColor: '--neutral-0',
  border: '1px solid --neutral-300',
  borderRadius: '12px',
  padding: '16px',
  margin: '8px 0',
  minHeight: '120px'
}

// Content Hierarchy
Header: Restaurant name (--text-h3)
Meta: Time, distance, members (--text-sm, --neutral-500)
CTA: Join button (Primary button, right-aligned)
Status: Group status badge (--text-xs)
```

#### Menu Item Card  
```javascript
// Layout
{
  backgroundColor: '--neutral-0',
  border: '1px solid --neutral-300',
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  justifyContent: 'space-between'
}

// States
Selected: borderColor: '--primary-500', backgroundColor: '--primary-50'
Unavailable: opacity: 0.6, backgroundColor: '--neutral-50'
```

### Status Indicators

#### Group Status Badges
```javascript
// Forming (Orange)
{
  backgroundColor: '--warning-100',
  color: '--warning-900',
  padding: '4px 8px',
  borderRadius: '12px',
  fontSize: '--text-xs'
}

// Ready (Green)
{
  backgroundColor: '--success-100',
  color: '--success-900'
}

// Full (Blue)
{
  backgroundColor: '--primary-100', 
  color: '--primary-900'
}
```

#### Progress Indicators
```javascript
// Timer Bar
{
  backgroundColor: '--neutral-200',
  height: '4px',
  borderRadius: '2px',
  fill: '--warning-500' /* Animated width based on time remaining */
}

// Member Count
{
  display: 'flex',
  gap: '4px',
  avatars: 'Circle, 24px diameter',
  overflow: '+2 more' /* When > 4 members */
}
```

### Navigation

#### Bottom Tab Bar
```javascript
// Container
{
  backgroundColor: '--neutral-0',
  borderTop: '1px solid --neutral-300',
  height: '80px',
  padding: '8px 0'
}

// Tab Items
{
  activeColor: '--primary-500',
  inactiveColor: '--neutral-500',
  iconSize: '24px',
  fontSize: '--text-xs'
}

// Tabs: Groups, Create, Orders, Profile
```

### Loading States

#### Skeleton Loading
```javascript
// Card Skeleton
{
  backgroundColor: '--neutral-100',
  borderRadius: '4px',
  animation: 'shimmer 1.5s infinite',
  height: 'varies by content type'
}

// List Loading
{
  items: 3,
  spacing: '--space-3',
  shimmerGradient: '--neutral-100 to --neutral-200'
}
```

#### Spinner
```javascript
{
  size: '24px',
  color: '--primary-500',
  strokeWidth: '3px',
  animation: 'spin 1s linear infinite'
}
```

## Page Specifications

### 1. Group Discovery (Home)

#### Layout Structure
```
Header (Fixed)
├─ Location indicator ("Near Downtown Office")
├─ Filter button (Restaurant type, distance)
└─ Create Group CTA (Primary button)

Content (Scrollable)
├─ "Available Groups" section
│  ├─ Group card (Restaurant name, time, members, join button)
│  ├─ Group card (Status: forming, ready, full)
│  └─ Empty state ("No groups nearby")
├─ "Recent Orders" section
│  └─ Order history cards
└─ Footer spacing
```

#### Interaction Patterns
- **Pull to refresh**: Updates group list
- **Tap group card**: Shows group details modal
- **Tap join**: Immediate join if space, waitlist if full
- **Long press**: Quick preview with restaurant menu

#### Responsive Behavior
- Mobile: Single column, full-width cards
- Tablet: Grid layout, 2 columns for groups
- Cards maintain 16px margin on all screen sizes

### 2. Group Creation Flow

#### Step 1: Restaurant Selection
```
Header
├─ Back button
├─ Title: "Choose Restaurant"
└─ Search input

Content
├─ "Nearby Restaurants" list
│  ├─ Restaurant card (name, cuisine, distance, group discount)
│  └─ "Group discount: 15% off orders $50+"
└─ Map view toggle
```

#### Step 2: Group Settings
```
Header
├─ Back button  
├─ Title: "Group Details"
└─ Progress indicator (2/3)

Form
├─ Pickup time selector (15min intervals)
├─ Group size limit (2-8 people)
├─ Optional message field
└─ Create Group button (Primary)
```

#### Step 3: Group Management
```
Header
├─ Group timer (countdown)
├─ Member count (3/6 people)
└─ Share group button

Content  
├─ Member list (avatars, names, order status)
├─ Restaurant details card
├─ Browse Menu button (Primary)
└─ Cancel Group button (Secondary, bottom)
```

### 3. Menu & Ordering

#### Menu Browse
```
Header (Sticky)
├─ Restaurant name
├─ Group info (timer, members)
└─ Cart preview (items count, total)

Content
├─ Category tabs (Appetizers, Mains, Drinks)
├─ Menu items grid
│  ├─ Item card (image, name, description, price)
│  ├─ Group price indicator ("$12 → $10 in group")
│  └─ Add to cart button
└─ Checkout button (Fixed bottom)
```

#### Cart & Checkout
```
Header
├─ "Review Order"
├─ Timer remaining
└─ Group status

Content
├─ Order summary
│  ├─ Item list (name, quantity, individual price)
│  ├─ Group discount applied
│  └─ Total calculation
├─ Payment method selector
├─ Tip percentage selector
└─ Confirm Order button (Primary)
```

### 4. Order Tracking

#### Active Order View
```
Header
├─ Order number
├─ Restaurant name
└─ Estimated pickup time

Status Timeline
├─ Order placed ✓
├─ Restaurant confirmed ✓  
├─ Preparing food (active)
└─ Ready for pickup

Group Info
├─ Member list with order status
├─ Total group order value
└─ Pickup location details

Actions
├─ Contact restaurant button
├─ View receipt button
└─ Report issue button
```

## Accessibility Specifications

### Screen Reader Support
- All interactive elements have descriptive labels
- Group status announced with context: "3 of 6 members joined, 8 minutes remaining"
- Dynamic content updates announced: "New member joined group"
- Form errors announced immediately with correction guidance

### Keyboard Navigation
- Tab order follows visual hierarchy top to bottom
- All actions accessible via keyboard shortcuts
- Focus indicators visible with 3px outline in primary color
- Skip links for main content sections

### Motor Accessibility  
- Touch targets minimum 44px × 44px
- Swipe gestures have button alternatives
- Long press actions have tap alternatives
- Drag interactions avoided in favor of tap/select

### Cognitive Accessibility
- Clear visual hierarchy with consistent patterns
- Progress indicators for multi-step flows  
- Error messages with specific correction guidance
- Timeout warnings with extension options

### Visual Accessibility
- 4.5:1 minimum contrast ratio for all text
- Color never sole indicator of state (icons + text)
- Text scalable up to 200% without horizontal scrolling
- High contrast mode support with alternative color schemes

## Responsive Design

### Mobile First (320px - 767px)
- Single column layout
- Full-width components with 16px margins
- Touch-optimized interactions
- Bottom tab navigation
- Collapsible sections for complex forms

### Tablet (768px - 1023px)  
- Two-column grid for group cards
- Side navigation for categories
- Expanded card layouts with more information
- Larger touch targets (48px minimum)

### Desktop (1024px+)
- Multi-column layouts with sidebar navigation
- Hover states for interactive elements
- Keyboard shortcuts displayed in tooltips
- Larger typography scale for readability

## Implementation Notes

### Design Tokens Export
```json
{
  "colors": {
    "primary": {"500": "#0066CC"},
    "success": {"500": "#22C55E"},
    "warning": {"500": "#F97316"},
    "error": {"500": "#EF4444"}
  },
  "spacing": {
    "1": "4px", "2": "8px", "3": "12px", "4": "16px"
  },
  "typography": {
    "h1": {"fontSize": "28px", "lineHeight": "34px", "fontWeight": "700"}
  }
}
```

### Component Naming Convention
- `GroupCard`, `MenuItemCard`, `OrderSummaryCard`
- `PrimaryButton`, `SecondaryButton`, `IconButton`
- `TextInput`, `SelectInput`, `TimeSelector`
- `GroupStatus`, `OrderTimer`, `MemberAvatar`

### Animation Guidelines
- Micro-interactions: 150ms ease-out
- Page transitions: 300ms ease-in-out  
- Loading states: 1.5s infinite shimmer
- Success feedback: 200ms spring animation

### Development Handoff
- All measurements in px for React Native compatibility
- Color tokens as JavaScript constants
- Component states documented with props
- Accessibility props specified for each component
- Cross-platform differences noted (iOS/Android)

---

**Document Version**: 1.0  
**Last Updated**: 2025-08-17  
**Design System Status**: Complete  
**Accessibility Review**: WCAG 2.1 AA Compliant  

**Ready for Development**: ✅ Complete design system, component specifications, and implementation guidelines provided