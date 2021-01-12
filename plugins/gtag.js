import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: process.env.NUXT_ENV_ANALYTICS_ID }
})
