/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      colors: {
        "app-black": "#121212",
      }
    },
  },
  plugins: [],
}

