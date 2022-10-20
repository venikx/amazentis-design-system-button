export const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '22px',
  '2xl': '32px',
  '3xl': '52px',
};

const systemFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const typography = {
  letterSpacings: {
    normal: '0',
    wide: '0.015em',
    wider: '0.05em',
  },

  lineHeights: {
    normal: 'normal',
    none: 1,
    tight: 1.1,
    short: 1.3,
    compact: 1.44,
    base: 1.55,
    tall: 1.6,
  },

  fontWeights: {
    regular: 400,
    medium: 500,
  },

  fonts: {
    heading: systemFont,
    body: systemFont,
  },

  fontSizes,
};
