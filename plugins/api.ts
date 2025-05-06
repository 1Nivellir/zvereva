export default defineNuxtPlugin((nuxtApp) => {

  const api = $fetch.create({
    baseURL: 'https://zvereva-law.ru/',
    onRequest({ request, options, error }) {
      
    },
    async onResponseError({ response }) {
     
    }
  })

  return {
    provide: {
      api
    }
  }
})