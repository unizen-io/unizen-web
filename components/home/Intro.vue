<template>
  <div
    id="intro"
    class="container mx-auto px-4"
  >
    <b-card-group
      deck
      class="sm:flex sm:flex-wrap mx-0"
    >
      <div class="p-4 md:w-1/2 xl:w-1/3">
        <b-card class="card1 mx-0 mb-0 h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          <div
            style="color: rgb(47, 72, 88);"
            class="flex"
          >
            <div>
              <span class="text-5xl">🤝</span>
            </div>
            <div class="px-6">
              <b-card-text>
                <p>
                  <b>Deep Hybrid Liquidity</b><br>
                  Tap into centralized <span style="color: #F0B90B; font-weight:bold;">Binance</span> shared- liquidity with top tier market maker support, or decentralized, network-agnostic, cross-chain liquidity. Both available right at your fingertips.
                </p>
              </b-card-text>
            </div>
          </div>
        </b-card>
      </div>
      <div class="p-4 md:w-1/2 xl:w-1/3">
        <b-card class="card2 mx-0 mb-0 h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          <div
            style="color: rgb(47, 72, 88);"
            class="flex"
          >
            <div>
              <span class="text-5xl">🦾</span>
            </div>
            <div class="px-6">
              <b-card-text>
                <p>
                  <b>Intuitive Platform</b><br>
                  UI/UX focused on a seamless, familiar and effective user experience across all trading applications with top industry, battle-tested security and performance powered by <span style="color: #F0B90B; font-weight:bold;">Binance Cloud</span>.
                </p>
              </b-card-text>
            </div>
          </div>
        </b-card>
      </div>
      <div class="p-4 md:w-1/2 xl:w-1/3">
        <b-card class="card3 mx-0 mb-0 h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          <div
            style="color: rgb(47, 72, 88);"
            class="flex"
          >
            <div>
              <span class="text-5xl">💗</span>
            </div>
            <div class="px-6">
              <b-card-text>
                <p>
                  <b>ZenX Incubation</b><br>
                  360 incubator fully equipped to support projects
                  from genesis of innovation to the finality of market realization.
                  Get further faster with
                  clarity of mission, positioning, product momentum and ecosystem empowerment.
                </p>
              </b-card-text>
            </div>
          </div>
        </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<style lang="scss">
// TODO: hack for now
@media (min-width: 640px) {
  #intro {
    margin-top: -108px !important;
  }
}

.card1 {
  -webkit-animation: fadeInUp 2s; /* Safari & Chrome */
  animation: fadeInUp 2s;
}

.card2 {
  -webkit-animation: fadeInUp 3s; /* Safari & Chrome */
  animation: fadeInUp 3s;
}

.card3 {
  -webkit-animation: fadeInUp 4s; /* Safari & Chrome */
  animation: fadeInUp 4s;
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(80px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
</style>
