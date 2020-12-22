<template>
  <main id="main">
    <NavBar />
    <Header />
    <Intro />
    <Zen />
    <PoweredByBinance />
    <Cta />
    <Articles
      :articles="articles"
    />
    <PartnerCarousel />
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
body {
    background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
}
main {
  overflow: hidden;
  left: 0;
  top: 0;
}

</style>
