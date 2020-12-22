<template>
  <b-container>
    <div class="py-5 mt-5">
      <h1 class="articles">
        Latest blog articles.
      </h1><br>
      <b-row class="mt-1">
        <b-card-group class="mb-5 mt-4" deck>
          <!-- <NuxtLink :to="`articles/${slug}`">
      {{ title }}
    </NuxtLink> -->
          <b-card
            v-for="a in articles"
            :key="a.slug"
            img-src="https://placekitten.com/300/300"
            img-alt="Image"
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
              <p>
                <!-- <nuxt-content :document="a" /> -->
              </p>
              <!-- </p><p> {{ a | truncate(10, 30) }}</p> -->
              <p class="articles" />
            </b-card-text>

            <template #footer>
              <img src="~/assets/img/mini_logo.png" style="margin-bottom: -6px; margin-top: -6px;"><small style="float: right;" class="text-muted">Last updated {{ formatDate(a.date) }}</small>
            </template>
          </b-card>
        </b-card-group>
      </b-row>
    </div>
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
  methods: {
    formatDate (date) {
      const ts = this.$moment(date)
      return ts.fromNow()
    }
  }
}
</script>

<style lang="scss">

#footer {
    background: rgba(219, 219, 219, 0.185) !important;
    backdrop-filter: blur(15px) !important;
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

#footer-content {
  float: right;
}
</style>
