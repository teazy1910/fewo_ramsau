/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
    fontFamily: {
      handwritten: ['Architects Daughter'],
      Lato: ['Lato'],
      Amiri: ['Amiri']
    },
  screens: {
    sm: "450px",
    // => @media (min-width: 450px) { ... }

    md: "768px",
    // => @media (min-width: 640px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
};
