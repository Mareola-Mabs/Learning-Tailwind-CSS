/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../**/*.html"
  ],
  theme: {
    extend: {
      // Extend colors
      colors: {
        herowine: "#920038",
        heropink: "#ff7be5",

        productgreen: "#788570",

        productgreen_1: "#697861"
      },

      // Extend fonts
      fontFamily: {
        'crimson-text': ['Crimson Text', 'serif'],
        'DM-Sans': ['DM Sans', 'serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'open-sans': ['Open Sans', 'serif']
      }

    },
  },
  plugins: [],
}

