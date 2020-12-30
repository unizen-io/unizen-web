<template>
  <div class="mt-5 pt-5">
    <b-container style="margin-bottom: 3rem;" class="py-5 mt-5">
      <h1 class="slug">
        {{ article.title }}
      </h1>
      <h2 class="slug">
        {{ article.description }}
      </h2>
      <b-card>
        <b-img :src="article.image" class="header-img" />
        <b-container>
          <p class="slug">
            <nuxt-content :document="article" />
          </p>
        </b-container>
        <br><br>
        Article last updated: {{ formatDate(article.date) }}
        </p>
      </b-card>
    </b-container>
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
<style lang="scss" scoped>
.header-img {
  max-width: 100%;
  margin-bottom: 3rem;
}
p.slug {
    font-family: Montserrat Medium;
    font-size: 16px;
    text-align: left;
}

h1.slug {
    font-family: Montserrat Medium !important;
    color: $dark !important;
    font-weight: bold;
    text-align: center;

}

h2.slug {
    font-family: Montserrat Medium !important;
    color: $dark !important;
    font-size: 20px;
    text-align: center;
    margin-bottom: 6rem;
}

</style>
