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
import createSEOTags from '../components/Utility/SEO'

export default {
  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - ZCX Token',
      description: 'The ZCX token, utility, tokenomics, release schedule, contract address',
      slug: 'token'
    })
  }
}
</script>

<style lang="scss">

</style>
