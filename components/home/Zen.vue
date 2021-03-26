<template>
  <div class="container mx-auto px-8">
    <div class="sm:hidden">
      <nuxt-picture
        loading="lazy"
        width="1130"
        height="1080"
        src="/img/iMac-potrait.png"
        alt="iMac"
      />
      <b-card class="text-box-mobile">
        <p
          style="color: #2F4858;"
          class="text-lg"
        >
          A new class of digital asset exchange that provides global traders and retail investors
          with access to exciting blockchain projects through the combined functionality of a secure
          CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one
          seamless user experience.
        </p>
        <b-list-group flush>
          <b-list-group-item class="zen-item">
            ✔️ High regulatory compliance
          </b-list-group-item>
          <b-list-group-item class="zen-item">
            ✔️ Fast listing times
          </b-list-group-item>
          <b-list-group-item class="zen-item" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
            ✔️ Highly competitive listing and trading fees
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div class="hidden sm:block">
      <!-- ray test touch < -->
      <div
        style="height: 1034px;"
        class="relative pt-24"
      >
        <!-- ray test touch < -->
        <!-- ray test touch < -->
        <nuxt-picture
          class="macbook"
          loading="lazy"
          width="1253"
          height="1034"
          src="/img/iMac-landscape.png"
          alt="iMac"
        />
        <!-- ray test touch > -->
        <b-card class="text-box max-w-lg">
          <b-card-body class="flex">
            <p class="text-7xl px-4 w-1/3">
              🦄
            </p>
            <p
              style="color: #2F4858;"
              class="text-lg px-4 flex-grow"
            >
              A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience.
            </p>
          </b-card-body>
          <b-list-group flush>
            <b-list-group-item class="zen-item">
              ✔️ High regulatory compliance
            </b-list-group-item>
            <b-list-group-item class="zen-item">
              ✔️ Fast listing times
            </b-list-group-item>
            <b-list-group-item class="zen-item" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
              ✔️ Highly competitive listing and trading fees
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.zen-item {
  background-color: #ffffff1c !important;
}

.macbook > img {
  position: absolute;
  top: 0;
  left: 0;
  // ray test touch <
  // right:0;
  width: 100%;
  // ray test touch >
  object-fit: cover;
}

.text-box {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
  min-width: 420px !important;
}

.text-box-mobile {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
}
</style>
