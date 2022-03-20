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
      // black: '#130B05',
      black: '#090706',
    },
    fontFamily: {
      serif: ['EB Garamond', 'serif'],
      mono: ['Inconsolata', 'monospace'],
    },
    extend: {
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
