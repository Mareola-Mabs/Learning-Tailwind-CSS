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

      // Colors
      colors: {
        'regal-blue': '#243c5a',
      },
      // End of Colors

      // Screen (max width)
      screens: {
        'max-md': { 'max': '768px' }, // For max-width 768px
        'max-lg': { 'max': '1024px' }, // For max-width 1024px
      },
      // End of Scrreeen

      // Spacing
      spacing: {
        '128': '400px',
      }
      // End of Spacing


    },
  },
  plugins: [],
}

