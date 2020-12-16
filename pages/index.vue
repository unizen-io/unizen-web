<template>
  <main>
    <NavBar />
    <Header />
    <b-container>
      <b-row>
        <b-card-group class="mt-4" deck>
          <b-col>
            <Articles
              v-for="a in articles"
              :key="a.slug"
              :title="a.title"
              :desc="a.description"
              :date="a.date"
              :slug="a.slug"
            />
          </b-col>
        </b-card-group>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  async fetch () {
    this.articles = await this.$content('articles').fetch()
  },
  data () {
    return {
      articles: []
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style style="scss">
main {
  left: 0;
  top: 0;
}

</style>
