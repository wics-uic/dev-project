/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        pixel: ['var(--font-pixelify)', 'cursive'],
        host: ['var(--font-host)', 'sans-serif'],
        hira: ['var(--font-hiragino)', 'sans-serif'],
      },
      screens: {
        'md': '900px'
      }
    },
  },
};