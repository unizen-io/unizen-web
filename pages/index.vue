<template>
  <main id="main">
    <NavBar />
    <Header />
    <b-container>
      <Intro />

      <Articles
        :articles="articles"
      />
      <b-row>
        <PartnerCarousel />
      </b-row>
    </b-container>
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
  left: 0;
  top: 0;
}

</style>
