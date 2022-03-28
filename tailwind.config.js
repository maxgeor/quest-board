const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      gray: colors.stone,
      black: '#090706',
      'board-logo-border': '#312D2C'
    },
    fontFamily: {
      serif: ['EB Garamond', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {
      boxShadow: {
        inner: 'inset 0 4px 8px 1px rgb(0 0 0 / 0.1);',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
        '2xl': '0 30px 60px -16px rgb(0 0 0 / 1);',
      },
      backgroundColor: {
        board: '#1A1612'
      },
      maxWidth: {
        '3xl': '48rem',
        '5xl': '60rem',
      },
      opacity: {
        '15': '.15',
      },
      fontSize: {
        '3xl': ['1.75rem', '2.25rem'],
      },
      borderWidth: {
        '8': '8px',
        '12': '12px',
        '16': '16px',
      },
      rotate: {
        '0.25': '0.25deg',
        '0.5': '0.5deg',
        '0.75': '0.75deg',
      },
      scale: {
        101: '101%',
      },
    },
  },
  plugins: [],
}
