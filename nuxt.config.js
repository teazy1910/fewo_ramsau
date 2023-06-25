// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],

  router: {
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
  },
});

// image: {
//   // The screen sizes predefined by `@nuxt/image`:
//   screens: {
//     sm: 480,
//     md: 768,
//     lg: 1024,
//     xl: 1280,
//     xxl: 1536,
//   },
// },
