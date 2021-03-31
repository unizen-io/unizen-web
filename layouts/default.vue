<template>
  <div class="layout-default">
    <NavBar />
    <nuxt />
    <CookieAlert />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import CookieAlert from '@/components/CookieAlert'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    CookieAlert,
    Footer
  }
}
</script>

<style scoped>
/* TODO: hack for now */
.layout-default {
  overflow-x: hidden;
  width: 100%;
}
</style>
