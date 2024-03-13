/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "style.css", 'main.js'],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'gray': {
        200: '#F6F7F8'
      },
      'black': '#000',
      'red': '#FF3131',
      'green': '#54CC0A' 
    },
    extend: {},
  },
  plugins: [],
}