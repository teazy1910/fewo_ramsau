/** @type {import('tailwindcss').Config} */
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
        Daughter: ["Architects Daughter"],
        Lato: ["Lato"],
        Amiri: ["Amiri"],
        Vibes: ["Great Vibes"],
        Roboto: ["Roboto"],
        Playfair: ["Playfair Display"],
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    content: {
      link: 'url("/Elipse.png")',
    },
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
