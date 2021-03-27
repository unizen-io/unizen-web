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
        unizenGray: '#dbdbdb',
        primary: {
          DEFAULT: '#00d3b0',
          dark: '#00f5a3'
        },
        tertiary: {
          DEFAULT: '#2f4858'
        }
      },
      textShadow: theme => ({
        unizen: `0px 2px 27px ${theme('colors.primary.dark')}65`
      })
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
