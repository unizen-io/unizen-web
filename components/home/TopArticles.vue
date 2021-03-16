<template>
  <b-container>
    <div class="py-12 mt-12">
      <h1 class='mb-6'>
        Latest blog articles.
      </h1>
      <Articles :articles="articles.slice(0, 3)" />
    </div>
  </b-container>
</template>

<script>
import Articles from '@/components/Articles'
import {
  RSS_TO_JSON_ENDPOINT,
  MEDIUM_FEED_URL
} from '@/config/medium'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'

export default {
  components: {
    Articles
  },

  async fetch () {
    /**
     * TODO: should consider loading UX and error handling
     */
    // TODO: could use `ohmyfetch` package
    await this.$axios.$get(
      `${RSS_TO_JSON_ENDPOINT}?rss_url=${MEDIUM_FEED_URL}`,
      // TODO: should double-check
      { progress: false }
    ).then((data) => {
      this.articles = transformMediumArticles(data)
    })
  },

  data () {
    return {
      articles: []
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-weight: bold;
}
</style>
