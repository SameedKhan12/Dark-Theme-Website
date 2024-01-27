/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      backgroundImage: {
        'Bgimg': "url('./src/assets/2903964_25862.jpg')",
        
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
