/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html"],
  theme: {

    screens: {
      sm: '800px',
      md: '900px',
      lg: '976px',
      xl: '1440px',
    },


    extend: {
      // Fonts
      fontFamily: {
        playwrite: ['Playwrite ES Deco Guides', 'serif'],
        playwriteVN: ['Playwrite VN Guides', 'serif'],
      },
      // End of Fonts

      colors: {
        'regal-blue': '#243c5a',
      },

      // Spacing
      spacing: {
        '128': '400px',
      }
      // End of Spacing


    },
  },
  plugins: [],
}

