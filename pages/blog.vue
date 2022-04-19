<template>
  <div class="main">
    <div class="container px-8 py-12 mx-auto my-12">
      <h1
        class="py-12 mt-12 font-bold text-center text-tertiary"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
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
  FEED_URL
} from '@/config/medium'
import STATUSES from '@/utils/constants/statuses'
import { PAGES } from '@/utils/constants/links'

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
        `${FEED_URL}`,
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
      slug: PAGES.blog.url
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
