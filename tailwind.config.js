/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14213D',
        teks: '#303948',
        teks2: '#59616D'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.png')",
        'hero-bottom': "url('/images/hero-bottom.png')",
        'footer-pattern': "url('/images/footer-bg.png')"
      },
      fontFamily: {
        sans: ['Gordita', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
