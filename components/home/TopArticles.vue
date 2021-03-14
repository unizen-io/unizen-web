<template>
  <b-container>
    <div class="py-5 mt-5">
      <h1 class="articles">
        Latest blog articles.
      </h1><br>
      <b-row
        class="mt-1"
        cols="1"
        cols-sm="1"
        cols-md="2"
        cols-lg="3"
      >
        <b-col
          v-for="a in sortedArticles.slice(0, 3)"
          :key="a.slug"
          class="mb-5"
        >
          <!-- <NuxtLink :to="`articles/${slug}`">
            {{ title }}
          </NuxtLink> -->
          <b-card
            :img-src="a.image"
            img-alt="Image not found"
            img-top
            tag="article"
            style=""
            class="mb-3 blog-card"
          >
            <b-card-text>
              <router-link
                :to="`articles/${a.slug}`"
              >
                <h2 class="articles">
                  {{ a.title }}
                </h2>
              </router-link>
              <p class="articles">
                {{ a.description }}
              </p>
              <p class="articles" />
            </b-card-text>
            <template #footer class="footer-articles">
              <img src="~/assets/img/mini_logo.png" style="margin-bottom: -6px; margin-top: -6px;"><small style="float: right;" class="text-muted">Last updated {{ formatDate(a.date) }}</small>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    sortedArticles () {
      return this.articles.slice().sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    }
  },

  methods: {
    // TODO: duplicated
    formatDate (date) {
      const ts = this.$moment(date)
      return ts.fromNow()
    }
  }
}
</script>

<style lang="scss">

.blog-card {
  min-height: 35rem;
}

.footer-articles {
  width: 100%;
  padding: 15px;
  bottom: 0;
  left: 0;
}

h2.articles {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-size: 20px;
}

h1.articles {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-weight: bold;
}

p.articles {
  font-family: Montserrat Medium;
  font-size: 14px;
}
</style>
