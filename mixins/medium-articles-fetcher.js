
import STATUSES from '@/utils/constants/statuses'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'
import FEED_URL_PROXIED from '@/config/medium.js'

const mediumArticlesFetcherMixin = {
  async fetch () {
    try {
      this.status = STATUSES.PENDING
      const data = await this.$axios.$get(
        FEED_URL_PROXIED
      )
      this.articles = transformMediumArticles(data)
      this.status = STATUSES.RESOLVED
    } catch (error) {
      this.status = STATUSES.REJECTED
      this.error = error
    }
  }
}

export default mediumArticlesFetcherMixin
