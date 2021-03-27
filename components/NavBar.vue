<template>
  <b-navbar
    toggleable="lg"
    fixed="top"
    type="light"
    class="unizen-navbar shadow z-50 bg-unizenGray bg-opacity-20 backdrop-blur"
    :class="{ 'navbar--hidden': !showNavbar }"
  >
    <nuxt-link
      class="flex items-center py-1 mr-4 text-xl"
      :to="PAGES.home.url"
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
          v-for="navigationItem in NAVIGATION_LINKS"
          :key="navigationItem.title"
          class="ml-auto py-2"
          link-classes=" uppercase hover:text-primary hover:text-shadow-unizen"
          :class="{ 'pointer-events-none': !!navigationItem.disabled }"
          :to="navigationItem.url"
          :disabled="!!navigationItem.disabled"
        >
          <span class="{ 'text-gray-400': navigationItem.disabled }">
            {{ navigationItem.title }}
          </span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import MiniLogoIcon from '@/assets/img/icons/mini-logo.svg?inline'
import {
  PAGES,
  NAVIGATION_LINKS
} from '@/utils/constants/links'

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
    this.NAVIGATION_LINKS = NAVIGATION_LINKS
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
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
  min-height: 5rem;
}
// ray test touch >

.unizen-navbar.navbar--hidden {
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
</style>
