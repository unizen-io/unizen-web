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
import STATUSES from '@/utils/constants/statuses'
import mediumArticlesFetcherMixin from '@/mixins/medium-articles-fetcher'

export default {
  components: {
    Articles,
    LoadingMessage,
    ErrorMessage
  },
  mixins: [mediumArticlesFetcherMixin],
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
