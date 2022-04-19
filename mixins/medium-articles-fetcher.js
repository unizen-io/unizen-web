
import STATUSES from '@/utils/constants/statuses'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'
import { FEED_URL } from '@/config/medium'

const mediumArticlesFetcherMixin = {
  async fetch () {
    try {
      this.status = STATUSES.PENDING
      const data = await this.$axios.$get(
        window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + FEED_URL,
        { progress: false }
      )
      this.articles = transformMediumArticles(data)
      this.status = STATUSES.RESOLVED
    } catch (error) {
      this.status = STATUSES.REJECTED
      this.error = error
    }
  },
  fetchOnServer: false
}

export default mediumArticlesFetcherMixin
