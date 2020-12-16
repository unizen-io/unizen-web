<template>
  <div>
    <!-- <NuxtLink :to="`articles/${slug}`">
      {{ title }}
    </NuxtLink> -->
    <b-card
      :title="`${title}`"
      :sub-title="`${desc}`"
      img-src="https://placekitten.com/300/300"
      img-alt="Image"
      img-left
      tag="article"
      style=""
      class="mb-3"
    >
      <b-card-text>
        {{ desc }}
      </b-card-text>

      <b-button :to="`articles/${slug}`" variant="primary" nuxt>
        Read Article
      </b-button>

      <b-card-text id="footer-content" class="small text-muted mr-2 mb-1">
        Last updated {{ formatDate(date) }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    desc: {
      type: String,
      default: 'Description'
    },
    date: {
      type: String,
      default: 'NaN'
    },
    slug: {
      type: String,
      default: '/'
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
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
