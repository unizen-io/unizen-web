<template>
  <div class="mt-5 pt-5">
    <h1 class="common-headline mx-auto mt-4">
      $ZCX Token.
    </h1>
    <TokenMetrics />
    <TokenUtility />
    <TokenAllocation />
    <TokenRelease />
  </div>
</template>

<script>
import TokenAllocation from '@/components/ZcxToken/TokenAllocation'
import TokenMetrics from '@/components/ZcxToken/TokenMetrics'
import TokenRelease from '@/components/ZcxToken/TokenRelease'
import TokenUtility from '@/components/ZcxToken/TokenUtility'
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
