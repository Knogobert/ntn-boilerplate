import VueContentPlaceholders from 'vue-content-placeholders'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueContentPlaceholders)
})
