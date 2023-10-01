export const theme = Object.freeze({
  colors: {
    accent: '#8B0000',
    white: '#f2f2f2',
    light: 'rgba(139, 41, 16, 0.783)',
    dark: '#000000',
    mainBackground: [
      'linear-gradient(180deg, rgba(232,145,121,1) 24%, rgba(231,175,123,1) 54%)',
    ],
  },

  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },

  breakpoints: {
    xs: '320px',
    s: '768px',
    m: '1024px',
    l: '1280px',
    xl: '1440px',
  },

  animations: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  spacing: value => `${4 * value}px`,
});
