<template>
  <div>
    <div class="main">
      <b-container class="py-12 my-12">
        <h1 class="py-12 mt-12">
          Blog.
        </h1>
        <Articles :articles="articles" />
      </b-container>
    </div>
  </div>
</template>

<script>
import Articles from '@/components/Articles'
import { createSEOTags } from '@/utils/helpers/seo'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'
import {
  RSS_TO_JSON_ENDPOINT,
  MEDIUM_FEED_URL
} from '@/config/medium'

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
  },

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Blog',
      description: 'Latest news and updates from Unizen Exchange.',
      slug: 'blog'
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
  min-height: 1000px;
}

h1 {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-weight: bold;
  text-align: center;
}
</style>
