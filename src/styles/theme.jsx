export const theme = Object.freeze({
  colors: {
    accent: '#ffc0cb',
    green: '#008000',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #f1b5d0,  #e2e2e2)'],
    red: '#ff0000',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
});
