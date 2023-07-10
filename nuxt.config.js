// https://nuxt.com/docs/api/configuration/nuxt-config

export default({
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxt/image", 
    "@nuxtjs/google-fonts"
  ],

  googleFonts: {
    families: {
      'Amiri': true,
      'Great+Vibes': true, 
      'Architects+Daughter': true, 
      'Lato': true,
    }
  },
  app : {
    head: {
      title: "Ferienwohnung Zörner",
      meta: [
        { name: "description", content: "Urlaub in Ramsau bei Berchtesgaden"}
      ],
      link: [ 
        {
          rel: 'stylesheet',
          href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" 
        },
      ],
    }
  }
})
