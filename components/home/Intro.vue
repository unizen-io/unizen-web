<template>
  <div
    id="intro"
    class="container mx-auto px-4"
  >
    <b-card-group
      deck
      class="sm:flex sm:flex-wrap mx-0"
    >
      <div
        class="p-4 md:w-1/2 xl:w-1/3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <b-card class="mx-0 mb-0 h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          <div class="flex text-tertiary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="#01d5a3">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="px-6">
              <b>Trade Aggregation</b>
              <br>
              Find the most cost efficient trades across new and constantly improving third-party CeDeFi innovations, not limited to a single blockchain.
            </p>
          </div>
        </b-card>
      </div>
      <div
        class="p-4 md:w-1/2 xl:w-1/3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <b-card class="mx-0 mb-0 h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          <div class="flex text-tertiary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="#01d5a3">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
            <p class="px-6">
              <b>Dynamic Multi-Asset Staking</b>
              <br>
              Earn token rewards and private-sale allocations in hot blockchain projects by staking your deflationary ZCX in DMAS on the Unizen Ecosystem.
            </p>
          </div>
        </b-card>
      </div>
      <div
        class="p-4 md:w-1/2 xl:w-1/3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <b-card class="mx-0 mb-0 h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          <div class="flex text-tertiary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="#01d5a3">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="px-6">
              <b>Dynamic Yield Staking Account</b>
              <br>
              Earn continuous yield on USDC and other stablecoins at a highly competitive yield, even compared to industry titans.
            </p>
          </div>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<style lang="scss">
// TODO: hack for now (hardcoded)
@media (min-width: 768px) {
  #intro {
    margin-top: -108px !important;
  }
}
</style>
