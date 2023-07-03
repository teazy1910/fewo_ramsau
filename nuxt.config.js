// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/image", 
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      Amiri: [400,700],
      Lato: [100, 300],
      'Architects+Daughter': true,
      'Great+Vibes': true,
    }
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Architects+Daughter&family=Great+Vibes&family=Lato:wght@100;400&display=swap'
    }
  ],
  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
  },
});
