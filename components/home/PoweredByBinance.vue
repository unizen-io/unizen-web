<template>
  <div style="background: #F3F4F3;">
    <div class="py-12 container mx-auto px-4">
      <div class="text-center">
        <!-- <h3
          style="font-family: 'D DIN';"
          class="font-base px-4 text-tertiary"
        >
          Unizen Innovation Powered by:
        </h3>
        <nuxt-img
          class="px-4 mx-auto"
          loading="lazy"
          format="webp"
          width="490"
          height="60"
          src="/img/binance/binance-cloud.png"
          alt="Binance Cloud"
        /> -->
      </div>
      <div class="">
        <p
          class="text-center text-xl w-8/12 mx-auto text-tertiary"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          The Unizen Ecosystem is housing and aggregating trades across trusted first- and third-party exchange modules to enable a ZEN state of mind for traders. Unizen is currently powered by the below liquidity providers but is continously adding on more sources of liquidity.
        </p>
      </div>
      <div class="mt-6 sm:flex sm:flex-wrap">
        <div
          class="flex-grow p-4 sm:w-1/2 md:w-1/3"
        >
          <b-card
            class="transform cursor-pointer h-full shadow-sm bg-unizenGray hover:border-binanceYellow hover:bg-binanceYellow-light transition duration-500 bg-opacity-20 backdrop-blur"
            @mouseover="binanceHoverCursor = true"
            @mouseleave="binanceHoverCursor = false"
          >
            <nuxt-img
              class="m-auto w-40 h-40"
              format="webp"
              loading="lazy"
              width="276"
              height="276"
              :src="binanceHover"
              alt="Binance performance"
            />
            <p class="pt-7 text-xl text-center mb-4 text-tertiary">
              <b>Binance Cloud</b>
            </p>
            <p class="-mt-5 text-base text-center mb-4 text-tertiary">
              Centralized Exchange Module
            </p>
            <p class="text-center text-base text-tertiary">
              Tap into Binance Liquidity on the Unizen Ecosystem and earn trading discounts by holding ZCX.
            </p>
          </b-card>
        </div>
        <div
          class="flex-grow p-4 sm:w-1/2 md:w-1/3"
        >
          <b-card
            href="https://www.uniswap.com"
            class="transform cursor-pointer h-full shadow-sm bg-unizenGray hover:border-uniswapPink hover:bg-uniswapPink-light transition duration-500 bg-opacity-20 backdrop-blur"
            @mouseover="uniswapHoverCursor = true"
            @mouseleave="uniswapHoverCursor = false"
          >
            <nuxt-img
              class="m-auto w-40 h-40"
              format="webp"
              loading="lazy"
              width="276"
              height="276"
              :src="uniswapHover"
              alt="Uniswap"
            />
            <p class="pt-7 text-xl text-center mb-4 text-tertiary">
              <b>Uniswap</b>
            </p>
            <p class="-mt-5 text-base text-center mb-4 text-tertiary">
              Decentralized Exchange Module
            </p>
            <p class="text-center text-base text-tertiary">
              Interact and find cost efficient trades on the popular and battle-tested Uniswap Exchange.
            </p>
          </b-card>
        </div>
        <div
          class="flex-grow p-4 sm:w-1/2 md:w-1/3"
        >
          <b-card
            class="transform cursor-pointer h-full shadow-sm bg-unizenGray hover:border-sifchainYellow hover:bg-sifchainYellow-light transition duration-500 bg-opacity-20 backdrop-blur"
            @mouseover="sifchainHoverCursor = true"
            @mouseleave="sifchainHoverCursor = false"
          >
            <nuxt-img
              class="m-auto w-40 h-40"
              format="webp"
              loading="lazy"
              width="276"
              height="276"
              :src="sifchainHover"
              alt="Sifchain"
            />
            <p class="pt-7 text-xl text-center mb-4 text-tertiary">
              <b>SifChain</b>
            </p>
            <p class="-mt-5 text-base text-center mb-4 text-tertiary">
              Decentralized Exchange Module
            </p>
            <p class="text-center text-base text-tertiary">
              Aggregate trades against omni-chain decentralized liquidty enabled by our SifChain module.
            </p>
          </b-card>
        </div>
      </div>
      <br>
      <div class="bg-gradient-to-r from-green-400 to-green-200 section-break" />
    </div>
  </div>
</template>

<script>
// Refactor all of this
export default {
  data () {
    return {
      uniswapFirst: '/static/img/unizen_modules/uniswap.png',
      uniswapSecond: '/static/img/unizen_modules/uniswap2.png',
      uniswapHoverCursor: false,
      sifchainFirst: '/static/img/unizen_modules/sifchain.png',
      sifchainSecond: '/static/img/unizen_modules/sifchain2.png',
      sifchainHoverCursor: false,
      binanceFirst: '/static/img/unizen_modules/binance.png',
      binanceSecond: '/static/img/unizen_modules/binance2.png',
      binanceHoverCursor: false
    }
  },
  computed: {
    uniswapHover () {
      if (this.uniswapHoverCursor === true) {
        return this.uniswapFirst
      } else {
        return this.uniswapSecond
      }
    },
    sifchainHover () {
      if (this.sifchainHoverCursor === true) {
        return this.sifchainFirst
      } else {
        return this.sifchainSecond
      }
    },
    binanceHover () {
      if (this.binanceHoverCursor === true) {
        return this.binanceFirst
      } else {
        return this.binanceSecond
      }
    }
  }
}
</script>

<style lang="scss">
div.section-break {
  height: 4px;
  width: 100%;
}
a.binance {
  display: inline-table;
}
a.binance:after {
  content: "";
  border-bottom: 0.15em solid $secondary;
  display: table-caption;
  caption-side: bottom;
  position: relative;
  margin-top: -0.15em;
}
</style>
