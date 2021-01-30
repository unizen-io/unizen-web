<template>
  <div>
    <div class="main">
      <AllArticles :articles="articles" />
    </div>
  </div>
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
      title: 'ZEN: Smart Exchange Ecosystem - Blog',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Latest news and updates from ZEN Exchange.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
    background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
    min-height: 1000px;
}
</style>
