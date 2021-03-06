const colors = require("tailwindcss/colors")
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    
    extend: {
      inset:{
        '17':'68px',
        '26':'104px'
      },
      colors:{
        "cyans":colors.cyan,
        "teal":colors.teal,
        brightRed:'hsl(12, 88%, 59%)',
        brightRedLight:'hsl(12,88%,69%)',
        brightRedSupLight:'hsl(12,88%,95%)',
        darkBlue:'hsl(228, 39%,23%)',
        darkGrayishBlue:'hsl(227,12%,61%)',
        veryDarkBlue:'hsl(233, 12%, 13%)',
        veryPaleRed:'hsl(13,100%,96%)',
        verlightGray:'hsl(0,0%,98%)'
      }
    },
  },
  plugins: [
    "postcss-import",
      "tailwindcss",
      "autoprefixer"
  ],
}
