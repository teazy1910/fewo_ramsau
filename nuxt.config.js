// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: {name: "page", mode: "out-in"},
  },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    display: "swap",
    families: {
      Roboto: true,
      "Architects Daughter": true,
      Lato: true,
      "Great Vibes": true,
      "Playfair Display": true,
    },
  },
  postcss: {
    postcssOptions: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  app: {
    head: {
      title: "Ferienwohnung Zörner",
      meta: [
        {name: "description", content: "Urlaub in Ramsau bei Berchtesgaden"},
        {
          meta: "viewport",
          content: "width=device-width,initial-scale=1.0,minimum-scale=1.0",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Architects+Daughter&family=Great+Vibes&family=Lato:wght@100;400&family=Roboto:wght@100;400;500;900&display=swap",
        },
      ],
    },
  },
});
