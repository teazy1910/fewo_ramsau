module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      Cormorant: ["Cormorant"],
      Lato: ["Lato"],
    },
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
