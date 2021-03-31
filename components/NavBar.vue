<template>
  <b-navbar
    toggleable="lg"
    fixed="top"
    type="light"
    class="unizen-navbar shadow-unizen z-50 bg-unizenGray bg-opacity-20 backdrop-blur"
    :class="{ 'navbar--hidden': !showNavbar }"
  >
    <nuxt-link
      class="flex items-center py-1 mr-4 text-xl space-x-2"
      :to="PAGES.home.url"
    >
      <MiniLogoIcon
        width="30"
        height="30"
      />
      <nuxt-img
        class="w-24"
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
        <li
          v-for="navigationItem in NAVIGATION_LINKS"
          :key="navigationItem.title"
          style="font-family: Lato Regular !important;"
          class="ml-auto p-2"
          :class="[
            { 'text-tertiary': !navigationItem.disabled },
            { 'text-black text-opacity-30': navigationItem.disabled },
            { 'pointer-events-none': !!navigationItem.disabled },
            NAV_ITEM_CLASSES
          ]"
        >
          <nuxt-link :to="navigationItem.url">
            {{ navigationItem.title }}
          </nuxt-link>
        </li>
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
    this.NAV_ITEM_CLASSES = 'uppercase hover:text-primary hover:text-shadow-unizen text-sm font-bold duration-500'
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
.unizen-navbar {
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
  min-height: 5rem;
}

.unizen-navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
