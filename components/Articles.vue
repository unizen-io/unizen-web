<template>
  <div class="md:flex md:flex-wrap">
    <article
      v-for="(article, index) in articles"
      :key="article.title"
      class="md:w-1/2 lg:w-1/3 p-4"
      data-aos="fade-up"
      :data-aos-duration="1000 + (index % 3) * 1000"
    >
      <b-card
        :img-src="article.thumbnail"
        img-alt="Image not found"
        img-top
        tag="article"
        class="article-card h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
      >
        <!-- TODO: should create an independent component -->
        <a
          :href="article.link"
          target="_blank"
          rel="noopener"
          :aria-label="`Link to ${article.title}`"
        >
          <h2
            style="font-family: Montserrat Medium !important;"
            class="text-xl mb-2 text-tertiary"
          >
            {{ article.title }}
          </h2>
        </a>
        <p
          style="font-family: Montserrat Medium;"
          class="text-sm mb-4"
        >
          {{ article.content | extractTextFromHTMLString | truncate(200, '...') }}
        </p>
        <template #footer>
          <div class="flex justify-between items-center">
            <MiniLogoIcon
              width="30"
              height="30"
            />
            <small class="text-unizenGray-dark">
              Last updated {{ formatDate(article.publishedDate) }} ago
            </small>
          </div>
        </template>
      </b-card>
    </article>
  </div>
</template>

<script>
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import MiniLogoIcon from '@/assets/img/icons/mini-logo.svg?inline'
import truncate from '@/utils/helpers/truncate'
import extractTextFromHTMLString from '@/utils/helpers/extract-text-from-html-string'

export default {
  components: {
    MiniLogoIcon
  },

  filters: {
    truncate,
    extractTextFromHTMLString
  },

  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    formatDate (date) {
      return formatDistanceToNow(new Date(date))
    }
  }
}
</script>

<style lang="scss">
.article-card {
  min-height: 30rem !important;
}

.article-card > img {
  object-fit: cover;
}
</style>
