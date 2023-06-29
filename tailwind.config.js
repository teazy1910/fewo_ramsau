import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato"],
        Vibes: ['Great Vibes', cursive],
        Amiri: ['Amiri', serif],
        Daughter: ['Architects Daughter']
      },
      
      theme: {
        screens: {
          xs: "320px",
          x: "375px",
          s: "425px",
          sm: "480px",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
        }
      },
    },
  },
};
