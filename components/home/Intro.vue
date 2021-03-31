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
            <span class="text-5xl">🤝</span>
            <p class="px-6">
              <b>Deep Hybrid Liquidity</b>
              <br>
              Tap into centralized <span class="text-unizenYellow font-bold">Binance</span> shared- liquidity with top tier market maker support, or decentralized, network-agnostic, cross-chain liquidity. Both available right at your fingertips.
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
            <span class="text-5xl">🦾</span>
            <p class="px-6">
              <b>Intuitive Platform</b>
              <br>
              UI/UX focused on a seamless, familiar and effective user experience across all trading applications with top industry, battle-tested security and performance powered by <span class="text-unizenYellow font-bold">Binance Cloud</span>.
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
            <span class="text-5xl">💗</span>
            <p class="px-6">
              <b>ZenX Incubation</b>
              <br>
              360 incubator fully equipped to support projects
              from genesis of innovation to the finality of market realization.
              Get further faster with
              clarity of mission, positioning, product momentum and ecosystem empowerment.
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
