module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        unizenGray: {
          light: '#f5f5f5',
          DEFAULT: '#dbdbdb',
          dark: '#6c757d'
        },
        primary: {
          DEFAULT: '#00d3b0',
          dark: '#00f5a3'
        },
        secondary: {
          // TODO: should use this instead of hardcoded value
          DEFAULT: '#00f5a4'
        },
        tertiary: {
          DEFAULT: '#2f4858',
          dark: '#212529'
        },
        unizenYellow: {
          DEFAULT: '#f0b90b'
        },
        sifchainYellow: {
          DEFAULT: '#CDAE46',
          light: '#dddcd9'
        },
        uniswapPink: {
          DEFAULT: '#F5086F',
          light: '#f1e9ed'
        },
        binanceYellow: {
          DEFAULT: '#EBB42D',
          light: '#ece8de'
        }
      },
      textShadow: theme => ({
        unizen: `0px 2px 27px ${theme('colors.primary.dark')}65`
      }),
      boxShadow: {
        unizen: '0 0 30px 0 rgba(196, 202, 214, .5)'
      }
    },
    filter: { // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)'
    },
    backdropFilter: { // defaults to {}
      none: 'none',
      blur: 'blur(20px)'
    }
  },
  variants: {
    extend: {},
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'] // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-textshadow')
  ],
  // TODO: should remove after completely dropping bootstrap
  important: true
}
