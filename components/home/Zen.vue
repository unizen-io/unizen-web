<template>
  <div>
    <div class="mt-12 pb-12 d-block d-sm-none">
      <nuxt-picture
        loading="lazy"
        width="1130"
        height="1080"
        src="/img/iMac-potrait.png"
        alt="iMac"
      />
      <b-card class="text-box-mobile">
        <b-row cols="1">
          <b-col>
            <p
              style="color: #2F4858;"
              class="text-lg"
            >
              A new class of digital asset exchange that provides global traders and retail investors
              with access to exciting blockchain projects through the combined functionality of a secure
              CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one
              seamless user experience.
            </p>
          </b-col>
        </b-row>
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
    <div class="zen d-none d-sm-block">
      <b-row
        style="max-width: 1920px;"
        class="zen pt-12 mx-auto relative"
        aligh-h="center"
      >
        <nuxt-picture
          class="macbook"
          loading="lazy"
          width="1920"
          height="1080"
          src="/img/iMac-landscape.png"
          alt="iMac"
        />
        <b-col sm>
          <b-card class="text-box mt-12">
            <b-card-body>
              <b-row>
                <b-col cols="4">
                  <p style="font-size: 5rem;">
                    🦄
                  </p>
                </b-col>
                <b-col sm>
                  <p
                    style="color: #2F4858;"
                    class="text-lg"
                  >
                    A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience.
                  </p>
                </b-col>
              </b-row>
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
        </b-col>
        <b-col class="d-none d-lg-block" />
        <b-col class="d-none d-lg-block" />
      </b-row>
    </div>
  </div>
</template>

<style lang="scss">
.zen {
  height: 1080px;
  margin-right: -430px;
}

.zen-item {
  background-color: #ffffff1c !important;
}

a.zen {
  text-decoration: none;
  display: inline-table;
  color: $dark;
}

a.zen:after {
  content: "";
  border-bottom: 0.15em solid $secondary;
  display: table-caption;
  caption-side: bottom;
  position: relative;
  margin-top:-0.15em;
}

p.zen-subtitle {
  font-size: 1.2em !important;
  color: $dark;
  text-align: center;
}

p.zen-text-small {
  font-size: 1em !important;
  padding: 0px 30px 30px 30px;
  color: $dark;
  text-align: center;
}

.macbook > img {
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  height: 100%;
  object-fit: cover;
}

.text-box {
  border-radius: 5px !important;
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
  max-width: 520px;
  min-width: 420px !important;
}

.text-box-mobile {
  border-radius: 5px !important;
  padding: 0 !important;
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
}
</style>
