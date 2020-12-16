<template>
  <div>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
    <p>Article last updated: {{ formatDate(article.date) }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    let article
    try {
      article = await $content(`articles/${params.slug}`).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: 'Article not found' })
    }

    return {
      article
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}

</script>
