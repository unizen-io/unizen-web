<template>
  <div class="container px-4 py-12 mx-auto">
    <h1
      class="px-4 mb-6 font-bold text-tertiary"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
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
    />
  </div>
</template>

<script>
import Articles from '@/components/Articles'
import LoadingMessage from '@/components/LoadingMessage'
import ErrorMessage from '@/components/ErrorMessage'
import {
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
      const data = await this.$axios.$get(
        `/feed/${MEDIUM_FEED_URL}`,
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
