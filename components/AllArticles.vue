<template>
  <b-container class="py-5 my-5">
    <h1 class="blog py-5 mt-5">
      Blog.
    </h1>
    <b-row
      class="mx-auto"
      cols="1"
      cols-sm="1"
      cols-md="2"
      cols-lg="3"
    >
      <b-col
        v-for="article in sortedArticles"
        :key="article.title"
        sm
      >
        <b-card
          :img-src="article.thumbnail"
          img-alt="Image not found"
          img-style=""
          img-top
          tag="article"
          style=""
          class="mb-5 article-card"
        >
          <b-card-text>
            <!-- TODO: should create an independent component -->
            <a
              :href="article.link"
              target="_blank"
              rel="noopener"
              :aria-label="`Link to ${article.title}`"
            >
              <h2 class="blog">
                {{ article.title }}
              </h2>
            </a>
            <p class="blog">
              {{ article.content | extractTextFromHTMLString | truncate(200, '...') }}
            </p>
            <p class="blog" />
          </b-card-text>
          <template #footer>
            <div class="footer-articles">
              <MiniLogo
                width="30"
                height="30"
              />
              <small class="text-muted">
                Last updated {{ formatDate(article.publishedDate) }}
              </small>
            </div>
          </template>
        </b-card>
      </b-col>
      <!-- </b-card-group> -->
    </b-row>
  </b-container>
</template>

<script>
import MiniLogo from '@/assets/img/icons/mini-logo.svg?inline'
import truncate from '@/utils/helpers/truncate'
import extractTextFromHTMLString from '@/utils/helpers/extractTextFromHTMLString'

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

  computed: {
    sortedArticles () {
      return this.articles.slice().sort(function (a, b) {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      })
    }
  },

  methods: {
    // TODO: should use date-fns
    formatDate (date) {
      const ts = this.$moment(date)
      return ts.fromNow()
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

h2.blog {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-size: 20px;
  text-align: left;
}

h1.blog {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-weight: bold;
  text-align: center;
}

p.blog {
  font-family: Montserrat Medium;
  font-size: 14px;
  text-align: left;
}

.footer-articles {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
