<template>
  <div>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
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
  }
}
</script>
