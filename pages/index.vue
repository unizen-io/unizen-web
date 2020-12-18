<template>
  <main id="main">
    <NavBar />
    <Header />
    <b-container>
      <Intro />
    </b-container>
    <Introduction />
    <b-container>
      <Articles
        :articles="articles"
      />
    </b-container>
    <b-row>
      <PartnerCarousel />
    </b-row>
    <Footer />
  </main>
</template>

<script>
import Introduction from '~/components/Introduction.vue'

export default {
  components: { Introduction },

  async fetch () {
    this.articles = await this.$content('articles').fetch()
  },
  data () {
    return {
      articles: []
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style style="scss">

main {
  overflow: hidden;
  left: 0;
  top: 0;
}

</style>
