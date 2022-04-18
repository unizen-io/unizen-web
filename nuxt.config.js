import { createSEOTags } from './utils/helpers/seo'
import { PRODUCTION_DOMAIN } from './config'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: createSEOTags({
    title: 'Unizen: Smart Exchange Ecosystem - Simple and Secure Cryptocurrency exchange with Enormous Liquidity',
    description: 'A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience. Buy Bitcoin, Ethereum, Polkadot or any other Altcoin with a Zen State of Mind.',
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8'
  }),

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/global.scss',
    '~/assets/css/transition.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/google-analytics.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-confetti.js',
      mode: 'client'
    },
    '~/plugins/aos.client.js'
  ],

  buildModules: [
    ['@nuxtjs/dotenv', { filename: '.env' }],
    '@nuxtjs/eslint-module',
    // Next Image module https://image.nuxtjs.org/components/nuxt-img
    ['@nuxt/image', {
      provider: 'static',
      dir: 'static'
    }],
    ['@nuxtjs/fontawesome', {
      component: 'fa', // customize component name
      icons: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faLightbulb']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTelegram']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faLightbulb']
      }
      ]
    }],
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],

  modules: [
    '@nuxtjs/sitemap',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/proxy'
  ],

  proxy: [
    'https://medium.com/feed'
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // googleAnalytics: {
  //   id: process.env.NUXT_ENV_ANALYTICS_ID,
  //   dev: false
  // },

  sitemap: {
    hostname: `https://${PRODUCTION_DOMAIN}`,
    gzip: true,
    exclude: [
      '/secret'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  manifest: {
    display: 'browser'
  },

  fontawesome: {
    icons: {
      solid: ['faHome']
    }
  },

  image: {
    provider: 'ipx',
    ipx: {},
    screens: {
      xm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },

  serverMiddleware: [
    { path: '/', handler: '~/api/swr.js' },
    { path: '/_ipx', handler: '~/server/middleware/ipx.js' }
  ]
}
