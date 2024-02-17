/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': "480px",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "fresh-color": "",
      },
      keyframes: {
        sideDown: {"0%": { transform: "transLateY(-100%)" },"100%": { transform: "transLateY(0)" },},
        fadeIn: {from: { opacity:0 },to: { opacity:1 }},
        slideUp: {
          '0%':{transform:'translate3d(0px,8px,0px)',opacity:0},
          '100%':{transform:'translate3d(0px,0px,0px)',opacity:1},
        }
      },
      animation: {
        sideDown: "sideDown .5s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
        slideUp: 'slideUp .4s ease-in',
      },
    },
  },
  plugins: [],
};
