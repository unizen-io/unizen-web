import { createSEOTags } from './utils/helpers/seo'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: createSEOTags({
    title: 'Unizen: Smart Exchange Ecosystem - Simple and Secure Cryptocurrency exchange with Enormous Liquidity',
    description: 'A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience. Buy Bitcoin, Ethereum, Polkadot or any other Altcoin with a Zen State of Mind',
    viewport: 'width=device-width, initial-scale=1',
    charset: 'utf-8'
  }),

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/colors.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-confetti.js',
      mode: 'client'
    }
  ],

  // TODO: could be better with explicit component registration
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/dotenv', { filename: '.env' }],
    '@nuxtjs/eslint-module',
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
    '@nuxt/image'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // googleAnalytics: {
  //   id: process.env.NUXT_ENV_ANALYTICS_ID,
  //   dev: false
  // },

  pwa: {
    icon: {
      sizes: [
        64,192,512
      ]
    },
    meta: {
      theme_color: '#ffffff'
    },
    manifest: false
  },

  sitemap: {
    hostname: 'https://unizen.io',
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
    screens: {
      xm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },

  serverMiddleware: {
    '/': '~/api/swr.js',
    '/_ipx': '~/api/ipx.js'
  }
}
