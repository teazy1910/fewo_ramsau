// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],

  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
  },
});
