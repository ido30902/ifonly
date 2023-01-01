/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
        'blue': "#0062FF",
        'cyan': "#22C4FA",
        'green': "#14B100",
        'red': "#B10700",
        'purple': "#5E69DB",
        'white': "#ECFAFF",
        'black': "#000000",
        'grey': "#7F7F7F",
    },
    fontFamily: {
      'poppins': ['Poppins','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
