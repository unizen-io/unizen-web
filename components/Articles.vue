<template>
  <b-row
    class="mx-auto"
    cols="1"
    cols-sm="1"
    cols-md="2"
    cols-lg="3"
  >
    <b-col
      v-for="article in articles"
      :key="article.title"
      sm
    >
      <b-card
        :img-src="article.thumbnail"
        img-alt="Image not found"
        img-top
        tag="article"
        class="mb-12 article-card"
      >
        <b-card-text>
          <!-- TODO: should create an independent component -->
          <a
            :href="article.link"
            target="_blank"
            rel="noopener"
            :aria-label="`Link to ${article.title}`"
          >
            <h2 class="article mb-2">
              {{ article.title }}
            </h2>
          </a>
          <p class="article mb-4">
            {{ article.content | extractTextFromHTMLString | truncate(200, '...') }}
          </p>
        </b-card-text>
        <template #footer>
          <div class="article-card-footer-inner">
            <MiniLogo
              width="30"
              height="30"
            />
            <small class="text-muted">
              Last updated {{ formatDate(article.publishedDate) }} ago
            </small>
          </div>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import MiniLogo from '@/assets/img/icons/mini-logo.svg?inline'
import truncate from '@/utils/helpers/truncate'
import extractTextFromHTMLString from '@/utils/helpers/extract-text-from-html-string'

export default {
  components: {
    MiniLogo
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

h2.article {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-size: 20px;
  text-align: left;
}

p.article {
  font-family: Montserrat Medium;
  font-size: 14px;
  text-align: left;
}

.article-card-footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
