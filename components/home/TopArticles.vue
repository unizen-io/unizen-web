<template>
  <div class="container mx-auto px-4">
    <h1 class="mb-6 px-4 text-tertiary font-bold">
      Latest blog articles.
    </h1>
    <LoadingMessage v-if="status === STATUSES.IDLE || status === STATUSES.PENDING" />
    <ErrorMessage
      v-if="status === STATUSES.REJECTED"
      :error-message="error.message"
    />
    <Articles
      v-if="status === STATUSES.RESOLVED"
      :articles="articles.slice(0, 3)"
      data-aos="fade-up"
      data-aos-duration="2000"
    />
  </div>
</template>

<script>
import Articles from '@/components/Articles'
import LoadingMessage from '@/components/LoadingMessage'
import ErrorMessage from '@/components/ErrorMessage'
import {
  RSS_TO_JSON_ENDPOINT,
  MEDIUM_FEED_URL
} from '@/config/medium'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'
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
      // TODO: should improve performance by adopting SWR as it's called on the blog page
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

  created () {
    this.STATUSES = STATUSES
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Montserrat Medium !important;
}
</style>
