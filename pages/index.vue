<template>
  <main id="main">
    <div>
      <Header />
      <Intro />
      <Zen />
      <PoweredByBinance />
      <Cta />
      <TopArticles :articles="articles" />
      <PartnerCarousel />
      <!-- <b-overlay :show="show" opacity="1" z-index="100000" no-wrap /> -->
    </div>
  </main>
</template>

<script>
import Header from '@/components/home/Header'
import Intro from '@/components/home/Intro'
import Zen from '@/components/home/Zen'
import PoweredByBinance from '@/components/home/PoweredByBinance'
import Cta from '@/components/home/Cta'
import TopArticles from '@/components/home/TopArticles'
import PartnerCarousel from '@/components/home/PartnerCarousel'
import createSEOTags from '@/components/Utility/SEO'

export default {
  components: {
    Header,
    Intro,
    Zen,
    PoweredByBinance,
    Cta,
    TopArticles,
    PartnerCarousel
  },

  async fetch () {
    this.articles = await this.$content('articles').fetch()
  },
  data () {
    return {
      show: true,
      articles: []
    }
  },

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem 123',
      description: 'Unizen is the easy, fast and secure way to buy any available digital asset'
    },
    // ray test touch <
    {
      /**
       * TODO: should add async and defer properly.
       * - Could define URLs as config constants
       */
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity.js' },
        { src: '/scripts/netlify-identity.js' }
      ]
    })
    // ray test touch >
  }
}
</script>

<style style="scss">
body {
  background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
}

main {
  overflow: hidden;
  left: 0;
  top: 0;
}
</style>
