// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', "@nuxt/image"],
  supabase: {
    redirect: false
  },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
})