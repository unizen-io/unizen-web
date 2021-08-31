<template>
  <div class="container mx-auto px-8">
    <div class="md:hidden">
      <nuxt-picture
        loading="lazy"
        width="1130"
        height="1080"
        src="/img/iMac-potrait2.png"
        alt="iMac"
      />
      <!-- TODO: should combine mobile and desktop versions into one -->
      <b-card
        class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p class="text-lg text-tertiary">
          The first CeDeFi exchange that combines the functionality of first- and third-party CEX's and DEX's to satisfy both retail and institutional traders. <br><br>Unizen Exchange finds the most cost efficient trades across a multitude of exchange modules, including Binance, to provide the best offers, reliable performance, and a secure environment for high-volume trading. All in one seamless user experience.
        </p>
        <b-list-group flush>
          <b-list-group-item class="bg-white bg-opacity-20">
            ✔️ High regulatory compliance.
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20">
            ✔️ Find the best trades across multiple liquidity providers.
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg> Interact with your favorite exchange with added benefits.
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div class="hidden md:block">
      <!-- TODO: could calculate automatically/correctly using CSS-in-JS -->
      <div
        style="height: 990px;"
        class="relative pt-24"
      >
        <nuxt-picture
          class="macbook"
          loading="lazy"
          width="1253"
          height="1034"
          src="/img/iMac-landscape2.png"
          alt="iMac"
        />
        <b-card
          style="min-width: 420px !important;"
          class="max-w-lg shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <b-card-body class="flex">
            <p class="text-lg px-4 flex-grow text-tertiary">
              The first CeDeFi exchange that combines the functionality of first- and third-party CEX's and DEX's to satisfy both retail and institutional traders. <br><br>Unizen Exchange finds the most cost efficient trades across a multitude of exchange modules, including Binance, to provide the best offers, reliable performance, and a secure environment for high-volume trading. All in one seamless user experience.
            </p>
          </b-card-body>
          <b-list-group flush>
            <b-list-group-item class="bg-white bg-opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="float: left;"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#01d5a3"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg> High regulatory compliance.
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="float: left;"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#01d5a3"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg> Find the best trades across multiple liquidity providers.
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="float: left;"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#01d5a3"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
              <p class="pl-1">
                Interact with your favorite exchange with added benefits.
              </p>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.macbook > img {
  position: absolute;
  top: 0;
  left: 240px;
  width: 1200px;
  object-fit: cover;
}
</style>
