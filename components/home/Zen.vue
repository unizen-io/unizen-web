<template>
  <div class="container mx-auto px-8">
    <div class="md:hidden">
      <nuxt-picture
        loading="lazy"
        width="1130"
        height="1080"
        src="/img/iMac-potrait.png"
        alt="iMac"
      />
      <!-- TODO: should combine mobile and desktop versions into one -->
      <b-card
        class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p class="text-lg text-tertiary">
          A new class of digital asset exchange that provides global traders and retail investors
          with access to exciting blockchain projects through the combined functionality of a secure
          CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one
          seamless user experience.
        </p>
        <b-list-group flush>
          <b-list-group-item class="bg-white bg-opacity-20">
            ✔️ High regulatory compliance
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20">
            ✔️ Fast listing times
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
            ✔️ Highly competitive listing and trading fees
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
          src="/img/iMac-landscape.png"
          alt="iMac"
        />
        <b-card
          style="min-width: 420px !important;"
          class="max-w-lg shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <b-card-body class="flex">
            <p class="text-7xl px-4 w-1/3">
              🦄
            </p>
            <p class="text-lg px-4 flex-grow text-tertiary">
              A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience.
            </p>
          </b-card-body>
          <b-list-group flush>
            <b-list-group-item class="bg-white bg-opacity-20">
              ✔️ High regulatory compliance
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              ✔️ Fast listing times
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
              ✔️ Highly competitive listing and trading fees
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
