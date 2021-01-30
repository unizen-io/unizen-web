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
export default {
  head () {
    return {
      title: 'ZEN: Smart Exchange Ecosystem - ZCX Token',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The ZCX token, utility, tokenomics, release schedule, contract address' }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
