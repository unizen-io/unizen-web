<template>
  <main id="main">
    <div>
      <Header />
      <Intro />
      <Zen />
      <PoweredByBinance />
      <Cta />
      <TopArticles
        :articles="articles"
      />
      <PartnerCarousel />

      <!-- <b-overlay :show="show" opacity="1" z-index="100000" no-wrap /> -->
    </div>
  </main>
</template>

<script>

export default {

  async fetch () {
    this.articles = await this.$content('articles').fetch()
  },
  data () {
    return {
      show: true,
      articles: []
    }
  },

  head () {
    return {
      title: 'unizen: Smart Exchange Ecosystem',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Unizen is the easy, fast and secure way to buy any available digital asset' }
      ],
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
