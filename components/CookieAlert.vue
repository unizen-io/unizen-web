<template>
  <b-navbar
    v-if="isOpen"
    toggleable="lg"
    fixed="bottom"
    class="cookie-alert"
  >
    <b-col class="pt-3" cols="8">
      <p>
        🍪 Can I use cookies for analytics? Read
        <NuxtLink class="text-link" to="/privacy-policy">
          the privacy policy
        </NuxtLink>
        for more information.
      </p>
    </b-col>
    <b-col>
      <b-button style="float: right;" variant="outline-primary" size="md" @click="accept">
        Yes, sure
      </b-button>
    </b-col>
    <b-col cols="1">
      <div style="float: right;" class="button md:ml-2" @click="deny">
        &times;
      </div>
    </b-col>
  </b-navbar>
</template>

<script>
// TODO: error prone (`The client-side rendered virtual DOM tree is not matching server-rendered content.`)
import { bootstrap } from 'vue-gtag'

export default {
  data () {
    return {
      isOpen: false
    }
  },
  created () {
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
  background: rgba(219, 219, 219, 0.185) !important;
  padding: 10px;
  backdrop-filter: blur(15px);

  // background: rgba(219, 219, 219, 0.185) !important;
  // backdrop-filter: blur(15px) !important;
  // box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  box-shadow: 0 0 30px 0 rgba(196, 202, 214, 0.5) !important;
  min-height: 3rem;
  z-index: 99999 !important;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}
</style>
