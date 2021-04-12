<template>
  <div class="layout-default relative min-h-screen">
    <CookieAlert />
    <main :style="{ paddingBottom: footerHeight + 'px' }">
      <NavBar />
      <nuxt />
    </main>
    <Footer
      ref="footerRef"
      class="absolute bottom-0 w-full"
    />
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
  },

  data () {
    return {
      footerHeight: 0
    }
  },

  mounted () {
    this.footerHeight = this.$refs.footerRef.$refs.footerInnerRef.clientHeight
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
