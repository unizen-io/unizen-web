
import STATUSES from '@/utils/constants/statuses'
import transformMediumArticles from '@/utils/helpers/transform-medium-articles'

const mediumArticlesFetcherMixin = {
  async fetch () {
    try {
      this.status = STATUSES.PENDING
      const data = await this.$axios.$get(
        '/medium'
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
