<template>
  <div class="mt-12 pt-12">
    <h1
      class="mx-auto mt-6 text-center pt-16 pb-24 text-tertiary"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      $ZCX Token.
    </h1>
    <TokenMetrics />
    <TokenUtility />
    <TokenAllocation />
  </div>
</template>

<script>
import TokenAllocation from '@/components/token/TokenAllocation'
import TokenMetrics from '@/components/token/TokenMetrics'
import TokenUtility from '@/components/token/TokenUtility'
import { createSEOTags } from '@/utils/helpers/seo'
import { PAGES } from '@/utils/constants/links'

export default {
  components: {
    TokenAllocation,
    TokenMetrics,
    TokenUtility
  },

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - ZCX Token',
      description: 'The ZCX token, utility, tokenomics, release schedule, contract address',
      slug: PAGES.token.url
    })
  }
}
</script>
