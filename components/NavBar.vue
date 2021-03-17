<template>
  <div>
    <b-navbar
      toggleable="lg"
      fixed="top"
      type="light"
      class="navbar-modified"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <b-navbar-brand
        class="flex"
        to="/"
      >
        <MiniLogo
          width="30"
          height="30"
        />
        <b-img v-bind="mainProps" fluid class="d-sm-inline-block d-md-none align-top mt-2" src="~assets/img/navbar_logo_text_large.png" />
        <b-img fluid class="d-md-inline-block d-sm-none d-none align-top mt-2" src="~assets/img/navbar_logo_text.png" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="ml-auto" to="/">
            HOME
          </b-nav-item>
          <b-nav-item class="ml-auto" to="/blog">
            BLOG
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#" disabled>
            <span class="text-gray-400">TRADE</span>
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#" disabled>
            <span class="text-gray-400">ZENX LABS</span>
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#" disabled>
            <span class="text-gray-400">FLEXIBLE STAKING</span>
          </b-nav-item>
          <b-nav-item class="ml-auto" to="/team">
            TEAM
          </b-nav-item>
          <b-nav-item class="ml-auto" to="/contact">
            CONTACT
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MiniLogo from '@/assets/img/icons/mini-logo.svg?inline'

export default {
  components: {
    MiniLogo
  },

  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      mainProps: { width: 110 }
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
.logo-text {
  color: $dark !important;
  font-size: 1.8rem;
  font-family: Arista;
  // text-shadow: 0px 2px 27px rgba(0, 245, 163, 0.397);
}

.navbar-modified {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);

  // background: rgba(219, 219, 219, 0.185) !important;
  // backdrop-filter: blur(15px) !important;
  // box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
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
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  /* ...and now for the proper property */
  transition:.5s;
}

a:hover {
  color: $primary !important;
  text-shadow: 0px 2px 27px rgba(0, 245, 163, 0.397);
}
</style>
