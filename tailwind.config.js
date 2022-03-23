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
    },
    fontFamily: {
      serif: ['EB Garamond', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {
      boxShadow: {
        inner: 'inset 0 3px 6px 1px rgb(0 0 0 / 0.05);',
        xl: '0 15px 20px -6px rgb(0 0 0 / 1), 0 6px 9px -6px rgb(0 0 0 / 1);',
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
