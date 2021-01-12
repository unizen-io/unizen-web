export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ZEN: Smart Exchange Ecosystem - Simple and Secure Cryptocurrency exchange with Enormous Liquidity.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience. Buy Bitcoin, Ethereum, Polkadot or any other Altcoin with a Zen State of Mind.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/colors.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  // plugins: [
  //   { src: '~/plugins/waves2.js', mode: 'client' }
  // ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
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
    }]
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
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/moment',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  googleAnalytics: {
    id: process.env.NUXT_ENV_ANALYTICS_ID,
    dev: false
  },

  sitemap: {
    hostname: 'https://zencex.com',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ]
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  fontawesome: {
    icons: {
      solid: ['faHome']
    }
  }
}
