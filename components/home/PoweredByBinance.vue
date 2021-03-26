<template>
  <div style="background: #EFEFEF;">
    <div class="py-12 container mx-auto px-4">
      <div class="mt-12">
        <h3
          style="color: #2F4858; font-family: 'D DIN';"
          class="font-base px-4"
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
        <p
          style="color: #2F4858;"
          class="text-center text-xl w-8/12 mx-auto"
        >
          Unizen Exchange's centralized liquidity and platform is powered by Binance infrastructure, security and liquidity to enable a <a href="#" style="color: #2F4858;" class="binance no-underline">ZEN state of mind</a> for traders.
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
            <p
              style="color: #2F4858;"
              class="pt-7 text-xl text-center mb-4"
            >
              <b>Performance</b>
            </p>
            <p
              style="color: #2F4858;"
              class="-mt-5 text-base text-center mb-4"
            >
              Runs smooth when it matters the most
            </p>
            <p
              style="color: #2F4858;"
              class="text-center text-base"
            >
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
            <p
              style="color: #2F4858;"
              class="pt-7 text-xl text-center mb-4"
            >
              <b>High Liquidity</b>
            </p>
            <p
              style="color: #2F4858;"
              class="-mt-5 text-base text-center mb-4"
            >
              Absorb orders with large transaction volume
            </p>
            <p
              style="color: #2F4858;"
              class="text-center text-base"
            >
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
            <p
              style="color: #2F4858;"
              class="pt-7 text-xl text-center mb-4"
            >
              <b>Binance Security</b>
            </p>
            <p
              style="color: #2F4858;"
              class="-mt-5 text-base text-center mb-4"
            >
              Reliable custody & trading
            </p>
            <p
              style="color: #2F4858;"
              class="text-center text-base"
            >
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
