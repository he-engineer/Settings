export const Colors = {
  primary: {
    50: '#EBF8FF',
    100: '#D1EDFF',
    500: '#0066CC',
    600: '#0052A3',
    900: '#002E5B',
  },
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    500: '#22C55E',
    600: '#16A34A',
    900: '#14532D',
  },
  warning: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    500: '#F97316',
    600: '#EA580C',
    900: '#9A3412',
  },
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    500: '#EF4444',
    600: '#DC2626',
    900: '#7F1D1D',
  },
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    300: '#D1D5DB',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },
} as const;

export const Typography = {
  fontFamily: {
    default: 'System',
  },
  fontSize: {
    h1: 28,
    h2: 24,
    h3: 20,
    lg: 18,
    base: 16,
    sm: 14,
    xs: 12,
  },
  lineHeight: {
    h1: 34,
    h2: 30,
    h3: 26,
    lg: 24,
    base: 22,
    sm: 20,
    xs: 16,
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const Spacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  6: 24,
  8: 32,
  12: 48,
} as const;

export const BorderRadius = {
  sm: 4,
  base: 8,
  lg: 12,
  full: 999,
} as const;

export const Layout = {
  minTouchTarget: 44,
  containerPadding: 16,
  cardPadding: 16,
} as const;