<template>
  <div class="py-5">
    <h1>Latest blog articles.</h1><br>
    <b-row class="mt-3">
      <b-card-group class="mt-4" deck>
        <!-- <NuxtLink :to="`articles/${slug}`">
      {{ title }}
    </NuxtLink> -->
        <b-card
          v-for="a in articles"
          :key="a.slug"
          :title="a.title"
          :sub-title="a.description"
          img-src="https://placekitten.com/300/300"
          img-alt="Image"
          img-top
          tag="article"
          style=""
          class="mb-3 blog-card"
        >
          <b-card-text>
            {{ a.description }}
          </b-card-text>

          <b-button :to="`articles/${a.slug}`" variant="primary" nuxt>
            Read Article
          </b-button>

          <template #footer>
            <img src="~/assets/img/mini_logo.png" style="margin-bottom: -6px; margin-top: -6px;"><small style="float: right;" class="text-muted">Last updated {{ formatDate(a.date) }}</small>
          </template>
        </b-card>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
export default {
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

<style>

#footer-content {
  float: right;
}
</style>
