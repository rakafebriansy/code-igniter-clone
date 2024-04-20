/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'igniter': '#CC532A'
      }
    },
    fontFamily: {
      ralewayExtraLight: ['"Raleway ExtraLight"'],
      ralewayLight: ['"Raleway Light"'],
      ralewayRegular: ['"Raleway Regular"'],
      ralewayMedium: ['"Raleway Medium"'],
      ralewaySemiBold: ['"Raleway SemiBold"'],
      ralewayBold: ['"Raleway Bold"'],
    },
  },
  plugins: [],
}