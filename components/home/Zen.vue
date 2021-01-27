<template>
  <div class="zen">
    <div class="my-5 pb-5 d-block d-sm-none">
      <b-img style="margin-left: -215px;" lazy fluid src="../../assets/img/iMac.png" />
      <b-card class="text-box">
        <b-card-body>
          <b-row>
            <b-col cols="1">
              <p style="font-size: 5rem;">
                🦄
              </p>
            </b-col>
            <b-col sm>
              <p class="zen-text">
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
    </div>
    <b-row class="zen pt-5 macbook mx-auto d-none d-sm-block" aligh-h="center">
      <b-col sm>
        <b-card class="text-box mt-5">
          <b-card-body>
            <b-row>
              <b-col cols="4">
                <p style="font-size: 5rem;">
                  🦄
                </p>
              </b-col>
              <b-col sm>
                <p class="zen-text">
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

  <!-- <div class="float-right macbook" /> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.zen {
    // background: rgb(250, 250, 250);
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

h3.zen-text {
    color: $dark !important;
    text-align: left;
    font-family: 'D DIN';
    font-size: 1.4em !important;
    padding: 30px;
}

p.zen-text {
    font-size: 1.2em !important;
    color: $dark;
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

.macbook {
    background-image: url('../../assets/img/iMac.png');
    background-size: cover;
    max-width: 1920px;
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

</style>
