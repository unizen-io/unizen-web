<template>
  <div style="background: #EFEFEF;">
    <div class="py-12 container mx-auto px-4">
      <div class="mt-12">
        <h3
          style="font-family: 'D DIN';"
          class="font-base px-4 text-tertiary"
        >
          Unizen Innovation Powered by:
        </h3>
        <nuxt-img
          class="px-4"
          loading="lazy"
          format="webp"
          width="490"
          height="60"
          src="/img/binance/binance-cloud.png"
          alt="Binance Cloud"
        />
      </div>
      <div class="mt-12">
        <p class="text-center text-xl w-8/12 mx-auto text-tertiary">
          Unizen Exchange's centralized liquidity and platform is powered by Binance infrastructure, security and liquidity to enable a <a href="#" class="binance no-underline text-tertiary">ZEN state of mind</a> for traders.
        </p>
      </div>
      <div class="mb-12 mt-6 sm:flex sm:flex-wrap">
        <div class="flex-grow p-4 sm:w-1/2 md:w-1/3">
          <b-card class="h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
            <nuxt-img
              class="m-auto w-40 h-40"
              loading="lazy"
              width="276"
              height="276"
              src="/img/binance/performance.png"
              alt="Binance performance"
            />
            <p class="pt-7 text-xl text-center mb-4 text-tertiary">
              <b>Performance</b>
            </p>
            <p class="-mt-5 text-base text-center mb-4 text-tertiary">
              Runs smooth when it matters the most
            </p>
            <p class="text-center text-base text-tertiary">
              Highly responsive UI even at tremendous load. Binance’s matching engines stand up to stress even at peak trading times.
            </p>
          </b-card>
        </div>
        <div class="flex-grow p-4 sm:w-1/2 md:w-1/3">
          <b-card class="h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
            <nuxt-img
              class="m-auto w-40 h-40"
              loading="lazy"
              width="276"
              height="276"
              src="/img/binance/liquidity.png"
              alt="Binance liquidity"
            />
            <p class="pt-7 text-xl text-center mb-4 text-tertiary">
              <b>High Liquidity</b>
            </p>
            <p class="-mt-5 text-base text-center mb-4 text-tertiary">
              Absorb orders with large transaction volume
            </p>
            <p class="text-center text-base text-tertiary">
              Shared trading liquidity and depth with Binance directly at launch.
            </p>
          </b-card>
        </div>
        <div class="flex-grow p-4 sm:w-1/2 md:w-1/3">
          <b-card class="h-full shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
            <nuxt-img
              class="m-auto w-40 h-40"
              loading="lazy"
              width="276"
              height="276"
              src="/img/binance/security.png"
              alt="Binance security"
            />
            <p class="pt-7 text-xl text-center mb-4 text-tertiary">
              <b>Binance Security</b>
            </p>
            <p class="-mt-5 text-base text-center mb-4 text-tertiary">
              Reliable custody & trading
            </p>
            <p class="text-center text-base text-tertiary">
              Top-tier security measures that have been withstanding millions of malicious attempts over several years, will be enforced throughout the exchange.
            </p>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
