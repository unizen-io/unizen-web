<template>
  <b-navbar
    v-if="isOpen"
    toggleable="lg"
    fixed="bottom"
    class="cookie-alert p-2.5 h-20 flex items-center flex-nowrap shadow-md z-50 bg-unizenGray bg-opacity-20 backdrop-blur"
  >
    <p>
      🍪 Can I use cookies for analytics? Read
      <nuxt-link class="text-link" to="/privacy-policy">
        the privacy policy
      </nuxt-link>
      for more information.
    </p>
    <div class="flex-grow" />
    <b-button
      variant="outline-primary"
      size="md"
      @click="accept"
    >
      Yes, sure
    </b-button>
    <button
      class="button ml-16 mr-6"
      @click="deny"
    >
      &times;
    </button>
  </b-navbar>
</template>

<script>
import { bootstrap } from 'vue-gtag'

export default {
  data () {
    return {
      isOpen: false
    }
  },

  mounted () {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },

  methods: {
    deny () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept () {
      if (process.browser) {
        bootstrap().then((gtag) => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-alert {
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}
</style>
