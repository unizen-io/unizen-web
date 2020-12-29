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
  }
}
</script>

<style lang="scss" scoped>
.main {
    background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
}
</style>
