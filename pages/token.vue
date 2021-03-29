<template>
  <div class="mt-12 pt-12">
    <h1 class="mx-auto mt-6 text-center pt-16 pb-24 text-tertiary">
      $ZCX Token.
    </h1>
    <TokenMetrics />
    <TokenUtility />
    <TokenAllocation />
    <TokenRelease />
  </div>
</template>

<script>
import TokenAllocation from '@/components/token/TokenAllocation'
import TokenMetrics from '@/components/token/TokenMetrics'
import TokenRelease from '@/components/token/TokenRelease'
import TokenUtility from '@/components/token/TokenUtility'
import { createSEOTags } from '@/utils/helpers/seo'

export default {
  components: {
    TokenAllocation,
    TokenMetrics,
    TokenRelease,
    TokenUtility
  },

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - ZCX Token',
      description: 'The ZCX token, utility, tokenomics, release schedule, contract address',
      slug: 'token'
    })
  }
}
</script>
