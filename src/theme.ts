// FocusKit theme — sensory-calm by design.
// Muted, low-stimulation palette, generous spacing, large touch targets.
// High-contrast variant available for accessibility.

export type Theme = {
  colors: {
    bg: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    text: string;
    textMuted: string;
    primary: string;
    primarySoft: string;
    success: string;
    warn: string;
  };
  space: (n: number) => number;
  radius: number;
  touch: number; // minimum touch target height
  font: { xs: number; sm: number; md: number; lg: number; xl: number; xxl: number; huge: number };
};

const base = {
  space: (n: number) => n * 8,
  radius: 18,
  touch: 56,
  font: { xs: 12, sm: 14, md: 16, lg: 20, xl: 26, xxl: 36, huge: 64 },
};

export const calmTheme: Theme = {
  ...base,
  colors: {
    bg: '#0f1226',
    surface: '#1a1f3a',
    surfaceAlt: '#232a4d',
    border: '#2e3766',
    text: '#e8ebff',
    textMuted: '#9aa3c7',
    primary: '#7c9cf0',
    primarySoft: '#39406e',
    success: '#6fcf97',
    warn: '#e0b15c',
  },
};

export const highContrastTheme: Theme = {
  ...base,
  colors: {
    bg: '#000000',
    surface: '#0d0d0d',
    surfaceAlt: '#1a1a1a',
    border: '#5b6bd6',
    text: '#ffffff',
    textMuted: '#c9cce6',
    primary: '#9db4ff',
    primarySoft: '#26306b',
    success: '#7fe6a6',
    warn: '#f0c674',
  },
};

export function getTheme(highContrast: boolean): Theme {
  return highContrast ? highContrastTheme : calmTheme;
}
