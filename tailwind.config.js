/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'fresh-color':''
      },
      keyframes: {
        sideDown: {
          '0%': { transform: 'transLateY(-100%)' },
          '100%': { transform: 'transLateY(0)' },
        }
      },
      animation: {
        sideDown: 'sideDown .7s ease-in-out',
      }
    },
  },
  plugins: [],
}

