// https://nuxt.com/docs/api/configuration/nuxt-config

export default ({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/image", 
    "@nuxtjs/google-fonts"
  ],


  app : {
    head: {
      title: "Ferienwohnung Zörner",
      meta: [
        { name: "description", content: "Urlaub in Ramsau bei Berchtesgaden"},
        { meta: "viewport", content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"}

      ],
      link: [ 
        {
          rel: 'stylesheet',
          href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
      ],
    }
  }
})
