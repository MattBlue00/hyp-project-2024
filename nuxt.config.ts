// https://nuxt.com/docs/api/configuratiofn/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts'],
  supabase: {
    redirect: false
  },
  googleFonts: {
    families: {
        Inter: true,
        Roboto: true,
        Montserrat: true,
        Lato: true,
    }
  }
})