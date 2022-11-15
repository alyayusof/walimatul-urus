/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      dark: '#242424',
      gold: '#EEBB55',
    },
    fontSize: {
      xs: ["0.75rem", "0.75rem"],
      sm: ["0.875rem", "0.875rem"],
      base: ["1rem", "1rem"],
      lg: ["1.25rem", "1.25rem"],
      xl: ["1.5rem", "1.5rem"],
      "h1": ["3.75rem", "3.75rem"],
      "h2": ["2rem", "2rem"],
      "h3": ["1.75rem", "1.75rem"],
    },
    width: {
      0: 0,
      "container": "450px",
      auto: "auto",
      full: "100%",
      screen: "100vw",
    },
    height: {
      0: 0,
      auto: "auto",
      full: "100%",
      screen: "100vh",
    },
    spacing: {
      0: "0",
      0.25: "0.25rem",
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      1.75: "1.75rem",
      2: "2rem",
      3: "3rem",
    },
    extend: {
      fontFamily: {
        'cinzel': ['"Cinzel"', 'serif'],
        'alex': ['"Alex Brush"', 'cursive'],
        'garamond': ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
