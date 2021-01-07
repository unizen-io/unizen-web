<template>
  <b-container class="py-5 my-5">
    <h1 class="blog py-5 mt-5">
      ZEN Blog.
    </h1>
    <b-row
      class="mx-auto"
      cols="1"
      cols-sm="1"
      cols-md="2"
      cols-lg="3"
    >
      <br>

      <!-- <b-card-group class="mx-auto mb-5 mt-4" deck> -->
      <!-- <NuxtLink :to="`articles/${slug}`">
      {{ title }}
    </NuxtLink> -->
      <b-col v-for="a in sortedArticles.slice(0, 8)" :key="a.slug" sm>
        <b-card
          :img-src="a.image"
          img-alt="Image not found"
          img-top
          tag="article"
          style=""
          class="mb-5 article-card"
        >
          <b-card-text>
            <router-link
              :to="`articles/${a.slug}`"
            >
              <h2 class="blog">
                {{ a.title }}
              </h2>
            </router-link>
            <p class="blog">
              {{ a.description }}
            </p>
            <p class="blog" />
          </b-card-text>
          <div id="footer" class="footer-articles">
            <img src="~/assets/img/mini_logo.png" style="float: left; margin-bottom: -6px; margin-top: -6px;"><small style="float: right;" class="text-muted">Last updated {{ formatDate(a.date) }}</small>
          </div>
        </b-card>
      </b-col>
      <!-- </b-card-group> -->
    </b-row>
  </b-container>
</template>

<script>
export default {
  filters: {
    truncate (text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix
      } else {
        return text
      }
    }
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
        return new Date(b.date) - new Date(a.date)
      })
    },
    threePerRow () {
      return this.articles.reduce((c, n, i) => {
        if (i % 3 === 0) { c.push([]) }
        c[c.length - 1].push(n)
        return c
      }, [])
    }
  },
  methods: {
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
    // max-width: 25rem;
    // min-width: 25rem !important;
}

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
