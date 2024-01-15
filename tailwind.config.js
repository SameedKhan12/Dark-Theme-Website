/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-gradient': {
          borderImage: 'linear-gradient(to bottom, #c8ff3236, rgba(38, 38, 38, 1), rgba(28, 28, 28, 1)) 1',
        },
      }
      addUtilities(newUtilities)
    }
  ],
});

