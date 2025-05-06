// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: true,
  css: ['@/assets/scss/main.scss', 'swiper/swiper-bundle.css'],
  modules: ['nuxt-swiper', '@nuxt/icon', '@pinia/nuxt', '@primevue/nuxt-module'],
  primevue: {
    
    components: {
      prefix: 'Prime',
      include: ['InputMask', 'InputText', 'Textarea']
    },
},
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_URL,
    }
  }
})