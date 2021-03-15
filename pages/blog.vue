<template>
  <div>
    <div class="main">
      <AllArticles :articles="articles" />
    </div>
  </div>
</template>

<script>
import AllArticles from '@/components/AllArticles'
import { createSEOTags } from '@/utils/helpers/seo'
import {
  RSS_TO_JSON_ENDPOINT,
  MEDIUM_FEED_URL
} from '@/config/medium'

export default {
  components: {
    AllArticles
  },

  async fetch () {
    // ray test touch <
    /**
     * TODO: should consider loading UX and error handling
     */
    // this.articles = await this.$content('articles').fetch()
    // TODO: could use `ohmyfetch` package
    await this.$axios.$get(
      `${RSS_TO_JSON_ENDPOINT}?rss_url=${MEDIUM_FEED_URL}`,
      // TODO: should double check
      { progress: false }
    ).then((data) => {
      const res = data.items // This is an array with the content. No feed, no info about author etc..
      const theArticles = res.filter(item => item.categories.length > 0) // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0

      this.articles = theArticles.map(article => ({
        thumbnail: article.thumbnail,
        title: article.title,
        content: article.content,
        publishedDate: article.pubDate,
        link: article.link
      }))
    })
    // ray test touch >
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
</style>
