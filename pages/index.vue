<template>
  <main id="main">
    <NavBar />
    <Header />
    <Intro />
    <Cta />
    <Zen />
    <PoweredByBinance />
    <PartnerCarousel />
    <Articles
      :articles="articles"
    />
    <Footer />
  </main>
</template>

<script>

export default {

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
