// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/image", 
    "@nuxtjs/google-fonts"
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato"],
        Amiri: ["Amiri", "serif"],
        Daughter: ['Architects Daughter'],
        Vibes: ['Great Vibes'],

      },
    },
  },
  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
  },
});
