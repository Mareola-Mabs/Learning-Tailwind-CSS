/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html"],
  theme: {


    extend: {
      // Fonts
      fontFamily: {
        playwrite: ['Playwrite ES Deco Guides', 'serif'],
        playwriteVN: ['Playwrite VN Guides', 'serif'],
      },
      // End of Fonts

      

      // Spacing
      spacing: {
        '128': '400px',
      }
      // End of Spacing


    },
  },
  plugins: [],
}

