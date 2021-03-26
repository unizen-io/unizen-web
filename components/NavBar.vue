<template>
  <div>
    <b-navbar
      toggleable="lg"
      fixed="top"
      type="light"
      class="navbar-modified"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <nuxt-link
        class="flex items-center py-1 mr-4 text-xl"
        to="/"
      >
        <MiniLogoIcon
          width="30"
          height="30"
        />
        <!-- TODO: should use an SVG format -->
        <nuxt-img
          format="webp"
          width="120"
          height="19"
          src="/img/text-logo-large.png"
        />
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="ml-auto my-2" to="/">
            HOME
          </b-nav-item>
          <b-nav-item class="ml-auto my-2" to="/blog">
            BLOG
          </b-nav-item>
          <b-nav-item class="ml-auto my-2" href="#" disabled>
            <span class="text-gray-400">TRADE</span>
          </b-nav-item>
          <b-nav-item class="ml-auto my-2" href="#" disabled>
            <span class="text-gray-400">ZENX LABS</span>
          </b-nav-item>
          <b-nav-item class="ml-auto my-2" href="#" disabled>
            <span class="text-gray-400">FLEXIBLE STAKING</span>
          </b-nav-item>
          <b-nav-item class="ml-auto my-2" to="/team">
            TEAM
          </b-nav-item>
          <b-nav-item class="ml-auto my-2" to="/contact">
            CONTACT
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MiniLogoIcon from '@/assets/img/icons/mini-logo.svg?inline'
// import TextLogoIcon from '@/assets/img/icons/green-text-logo.svg?inline'

export default {
  components: {
    MiniLogoIcon
    // TextLogoIcon
  },

  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 360) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-modified {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 30px 0 rgba(196, 202, 214, 0.5) !important;
  min-height: 5rem;
  z-index: 99999 !important;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}

.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav-item.nav-item.nav-item a {
  font-family: Lato Regular !important;
  font-size: 0.9em;
  font-weight: bold;
  color: $dark;
  -o-transition: .5s;
  -ms-transition: .5s;
  -moz-transition: .5s;
  -webkit-transition: .5s;
  /* ...and now for the proper property */
  transition: .5s;
}

a:hover {
  color: $primary !important;
  text-shadow: 0px 2px 27px rgba(0, 245, 163, 0.397);
}
</style>
