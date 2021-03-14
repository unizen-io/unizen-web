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
              {{ article.content | truncate(200, '...') }}
            </p>
            <p class="blog" />
          </b-card-text>
          <template
            #footer
            class="footer-articles"
          >
            <img
              src="~/assets/img/mini_logo.png"
              style="float: left; margin-bottom: -6px; margin-top: -6px;"
            >
            <small
              style="float: right;"
              class="text-muted"
            >
              Last updated {{ formatDate(article.publishedDate) }}
            </small>
          </template>
        </b-card>
      </b-col>
      <!-- </b-card-group> -->
    </b-row>
  </b-container>
</template>

<script>
export default {
  // ray test touch <
  // TODO: unused for now
  filters: {
    truncate (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
  },
  // ray test touch >

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
    },
    // ray test touch <
    // TODO: unused for now
    threePerRow () {
      return this.articles.reduce((c, n, i) => {
        if (i % 3 === 0) {
          c.push([])
        }
        c[c.length - 1].push(n)
        return c
      }, [])
    }
    // ray test touch >
  },

  methods: {
    // ray test touch <
    formatDate (date) {
      // TODO: should use date-fns
      const ts = this.$moment(date)
      return ts.fromNow()
    }
    // ray test touch >
  }
}
</script>

<style lang="scss">
.article-card {
  min-height: 30rem !important;
  // max-width: 25rem;
  // min-width: 25rem !important;
}

// ray test touch <
.article-card > img {
  object-fit: cover;
}
// ray test touch >

.footer-articles {
  background-color: none !important;
  border-top: 1px #DFDFDF solid;
  width: 100%;
  padding: 15px;
  bottom: 0;
  left: 0;
  position: fixed;
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

#footer-content {
  float: right;
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px) !important;
}
</style>
