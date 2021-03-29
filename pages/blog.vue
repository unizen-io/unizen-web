<template>
  <div class="main">
    <div class="container mx-auto px-8 py-12 my-12">
      <h1 class="py-12 mt-12 text-tertiary text-center font-bold">
        Blog.
      </h1>
      <LoadingMessage v-if="status === STATUSES.IDLE || status === STATUSES.PENDING" />
      <ErrorMessage
        v-if="status === STATUSES.REJECTED"
        :error-message="error.message"
      />
      <Articles
        v-if="status === STATUSES.RESOLVED"
        :articles="articles"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
    </div>
  </div>
</template>

<script>
import Articles from '@/components/Articles'
import LoadingMessage from '@/components/LoadingMessage'
import ErrorMessage from '@/components/ErrorMessage'
import { createSEOTags } from '@/utils/helpers/seo'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'
import {
  RSS_TO_JSON_ENDPOINT,
  MEDIUM_FEED_URL
} from '@/config/medium'
import STATUSES from '@/utils/constants/statuses'

export default {
  components: {
    Articles,
    LoadingMessage,
    ErrorMessage
  },

  async fetch () {
    try {
      this.status = STATUSES.PENDING
      // TODO: could use `ohmyfetch` package
      const data = await this.$axios.$get(
        `${RSS_TO_JSON_ENDPOINT}?rss_url=${MEDIUM_FEED_URL}`,
        // TODO: should double-check
        { progress: false }
      )
      this.articles = transformMediumArticles(data)
      this.status = STATUSES.RESOLVED
    } catch (error) {
      this.status = STATUSES.REJECTED
      this.error = error
    }
  },

  data () {
    return {
      articles: [],
      status: STATUSES.IDLE,
      error: null
    }
  },

  // TODO: could be better using Vue built-in utilities
  created () {
    this.STATUSES = STATUSES
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
}
</style>
