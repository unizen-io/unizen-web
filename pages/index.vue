<template>
  <main id="main">
    <div class="space-y-12">
      <Header />
      <Zen />
      <Intro />
      <PoweredByBinance />
      <Cta />
      <TopArticles />
      <PartnerCarousel />
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
import { createSEOTags } from '@/utils/helpers/seo'

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

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem',
      description: 'Unizen is the easy, fast and secure way to buy any available digital asset'
    })
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
