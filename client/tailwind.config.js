module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#3bc8e7',
        'gray' : '#777777',
        'secondary' : '#14182a',
      },
      backgroundImage : {
        'fade' : 'radial-gradient(50% 50%, ellipse closest-side, #fff, rgba(255, 42, 112, 0) 60%)'
      },
      boxShadow : {
        'glow' : '0 0px 25px -1px var(--tw-shadow-color), 0 0px 4px -2px var(--tw-shadow-color)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
