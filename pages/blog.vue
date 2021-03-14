<template>
  <div>
    <div class="main">
      <AllArticles :articles="articles" />
    </div>
  </div>
</template>

<script>
import AllArticles from '@/components/AllArticles'
import createSEOTags from '@/components/Utility/SEO'

export default {
  components: {
    AllArticles
  },

  async fetch () {
    // ray test touch <
    // this.articles = await this.$content('articles').fetch()
    await this.$axios.$get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo',
      // 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@unizen-io',
      { progress: false }
    ).then((data) => {
      console.log('ray : ***** data => ', data)
      const res = data.items // This is an array with the content. No feed, no info about author etc..
      const theArticles = res.filter(item => item.categories.length > 0) // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      console.log('ray : ***** theArticles => ', theArticles)

      function toText (node) {
        // TODO: `document` is not available on SSR
        if (process.client) {
          const tag = document.createElement('div')
          tag.innerHTML = node
          node = tag.textContent
        }

        return node
      }

      // Function to create a short text out of a whole blog's content
      // function shortenText(text, startingPoint, maxLength) {
      //   return text.length > maxLength
      //     ? text.slice(startingPoint, maxLength)
      //     : text
      // }

      this.articles = theArticles.map(article => ({
        thumbnail: article.thumbnail,
        title: article.title,
        content: toText(article.content),
        publishedDate: article.pubDate,
        link: article.link
      }))
    })
    // ray test touch >
  },
  data () {
    return {
      articles: []
    }
  },
  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Blog',
      description: 'Latest news and updates from Unizen Exchange.',
      slug: 'blog'
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
  min-height: 1000px;
}
</style>
