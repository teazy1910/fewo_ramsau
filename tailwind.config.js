import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  css: [
    "~/assets/scss/input.css"
  ],
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
        Vibes: ['Great Vibes'],
        Amiri: ['Amiri'],
        Daughter: ['Architects Daughter']
      },
    },
  },
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
};
