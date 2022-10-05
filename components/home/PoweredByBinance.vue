<template>
  <div style="background: #F3F4F3;">
    <div class="container px-4 py-12 mx-auto">
      <div class="text-center">
        <!-- <h3
          style="font-family: 'D DIN';"
          class="px-4 font-base text-tertiary"
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
          class="w-8/12 mx-auto text-xl text-center text-tertiary"
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
          <a href="https://trade.unizen.io/trade" target="_blank">
            <b-card
              class="h-full transition duration-500 transform shadow-sm cursor-pointer bg-unizenGray hover:border-binanceYellow hover:bg-binanceYellow-light bg-opacity-20 backdrop-blur"
              @mouseover="binanceHoverCursor = true"
              @mouseleave="binanceHoverCursor = false"
            >
              <nuxt-img
                class="w-40 h-40 m-auto"
                format="webp"
                loading="lazy"
                width="276"
                height="276"
                :src="binanceHover"
                alt="Binance performance"
              />
              <p class="mb-4 text-xl text-center pt-7 text-tertiary">
                <b>Binance Cloud</b>
              </p>
              <p class="mb-4 -mt-5 text-base text-center text-tertiary">
                Centralized Exchange Module
              </p>
              <p class="text-base text-center text-tertiary">
                Tap into Binance Liquidity on the Unizen Ecosystem and earn trading discounts by holding ZCX.
              </p>
            </b-card>
          </a>
        </div>
        <div
          class="flex-grow p-4 sm:w-1/2 md:w-1/3"
        >
          <a
            target="_blank"
            href="https://www.uniswap.com/">
            <b-card
              class="h-full transition duration-500 transform shadow-sm cursor-pointer bg-unizenGray hover:border-uniswapPink hover:bg-uniswapPink-light bg-opacity-20 backdrop-blur"
              @mouseover="uniswapHoverCursor = true"
              @mouseleave="uniswapHoverCursor = false"
            >
              <nuxt-img
                class="w-40 h-40 m-auto"
                format="webp"
                loading="lazy"
                width="276"
                height="276"
                :src="uniswapHover"
                alt="Uniswap"
              />
              <p class="mb-4 text-xl text-center pt-7 text-tertiary">
                <b>Uniswap</b>
              </p>
              <p class="mb-4 -mt-5 text-base text-center text-tertiary">
                Decentralized Exchange Module
              </p>
              <p class="text-base text-center text-tertiary">
                Interact and find cost efficient trades on the popular and battle-tested Uniswap Exchange.
              </p>
            </b-card>
          </a>
        </div>
        <div
          class="flex-grow p-4 sm:w-1/2 md:w-1/3"
        >
          <a
            target="_blank"
            href="https://pancakeswap.finance/">
            <b-card
              class="h-full transition duration-500 transform shadow-sm cursor-pointer bg-unizenGray hover:border-sifchainYellow hover:bg-sifchainYellow-light bg-opacity-20 backdrop-blur"
              @mouseover="pancakeHoverCursor = true"
              @mouseleave="pancakeHoverCursor = false"
            >
              <nuxt-img
                class="w-40 h-40 m-auto"
                format="webp"
                loading="lazy"
                width="276"
                height="276"
                :src="pancakeHover"
                alt="PancakeSwap"
              />
              <p class="mb-4 text-xl text-center pt-7 text-tertiary">
                <b>PancakeSwap</b>
              </p>
              <p class="mb-4 -mt-5 text-base text-center text-tertiary">
                Decentralized Exchange Module
              </p>
              <p class="text-base text-center text-tertiary">
                The moon is made of pancakes.
              </p>
            </b-card>
          </a>
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
      uniswapFirst: '/img/unizen_modules/uniswap.png',
      uniswapSecond: '/img/unizen_modules/uniswap2.png',
      uniswapHoverCursor: false,
      pancakeFirst: '/img/unizen_modules/pancake.svg',
      pancakeSecond: '/img/unizen_modules/pancake2.svg',
      pancakeHoverCursor: false,
      binanceFirst: '/img/unizen_modules/binance.png',
      binanceSecond: '/img/unizen_modules/binance2.png',
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
    pancakeHover () {
      if (this.pancakeHoverCursor === true) {
        return this.pancakeFirst
      } else {
        return this.pancakeSecond
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
