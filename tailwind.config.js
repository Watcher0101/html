/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'base': 'colorCode', 
      },
      padding: {big:'50px'},
    },
  },
  plugins: [require('tailwindcss'),require('autoprefixer'),],
}

