<template>
  <div>
    <b-navbar
      toggleable="lg"
      fixed="top"
      type="light"
      class="unizen-navbar shadow h-20 z-50"
      :class="{ 'navbar--hidden': !showNavbar }"
    >
      <nuxt-link
        class="flex items-center py-1 mr-4 text-xl"
        :to="PAGES.HOME"
      >
        <MiniLogoIcon
          width="30"
          height="30"
        />
        <nuxt-img
          format="webp"
          width="120"
          height="19"
          src="/img/text-logo-large.png"
        />
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            class="ml-auto my-2"
            :to="PAGES.HOME"
          >
            HOME
          </b-nav-item>
          <b-nav-item
            class="ml-auto my-2"
            :to="PAGES.BLOG"
          >
            BLOG
          </b-nav-item>
          <b-nav-item
            class="ml-auto my-2"
            href="#"
            disabled
          >
            <span class="text-gray-400">TRADE</span>
          </b-nav-item>
          <b-nav-item
            class="ml-auto my-2"
            href="#"
            disabled
          >
            <span class="text-gray-400">ZENX LABS</span>
          </b-nav-item>
          <b-nav-item
            class="ml-auto my-2"
            href="#"
            disabled
          >
            <span class="text-gray-400">FLEXIBLE STAKING</span>
          </b-nav-item>
          <b-nav-item
            class="ml-auto my-2"
            :to="PAGES.TEAM"
          >
            TEAM
          </b-nav-item>
          <b-nav-item
            class="ml-auto my-2"
            :to="PAGES.CONTACT"
          >
            CONTACT
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import MiniLogoIcon from '@/assets/img/icons/mini-logo.svg?inline'
import { PAGES } from '@/utils/constants/links'

export default {
  components: {
    MiniLogoIcon
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

  created () {
    this.PAGES = PAGES
  },

  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      /**
       * Stop executing this function if the difference between
       *  - current scroll position and last scroll position is less than some offset
       */
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
// ray test touch <
.unizen-navbar {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}
// ray test touch >

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
