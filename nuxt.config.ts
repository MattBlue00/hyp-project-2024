// https://nuxt.com/docs/api/configuratiofn/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  modules: ['@nuxtjs/supabase', "@nuxt/image", '@nuxtjs/google-fonts'],
  supabase: {
    redirect: false
  },
  googleFonts: {
    families: {
      Comme: true,
      Montserrat: true,
      Lato: true,
      Nunito: true,
    }
  },
  css: [
    '~/assets/scss/custom.scss',
    '~/assets/global.css'
  ],
})