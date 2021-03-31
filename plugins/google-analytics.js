import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted')
  if (process.env.NODE_ENV === 'production') {
    Vue.use(VueGtag, {
      config: { id: process.env.NUXT_ENV_ANALYTICS_ID },
      bootstrap: getGDPR === 'true',
      appName: 'ZEN',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true
    }, app.router)
  }
}
