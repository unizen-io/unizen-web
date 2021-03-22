<template>
  <div class="container mx-auto px-8">
    <div class="pt-12">
      <b-row>
        <div>
          <div>
            <b-card-group deck>
              <b-card text-variant="dark" class="text-center card4">
                <b-row>
                  <b-col cols="2">
                    <span style="font-size:50px;">🤝</span>
                  </b-col>
                  <b-col>
                    <b-card-text>
                      <p style="text-align:left; padding-left: 20px;">
                        <b>Deep Hybrid Liquidity</b><br>
                        Tap into centralized <span style="color: #F0B90B; font-weight:bold;">Binance</span> shared- liquidity with top tier market maker support, or decentralized, network-agnostic, cross-chain liquidity. Both available right at your fingertips.
                      </p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card>

              <b-card text-variant="dark" class="text-center card1">
                <b-row>
                  <b-col cols="2">
                    <span style="font-size:50px;">🦾</span>
                  </b-col>
                  <b-col>
                    <b-card-text>
                      <p style="text-align:left; padding-left: 20px;">
                        <b>Intuitive Platform</b><br>
                        UI/UX focused on a seamless, familiar and effective user experience across all trading applications with top industry, battle-tested security and performance powered by <span style="color: #F0B90B; font-weight:bold;">Binance Cloud</span>.
                      </p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card>

              <b-card text-variant="dark" class="text-center card3 cards">
                <b-row>
                  <b-col cols="2">
                    <span style="font-size:50px;">💗</span>
                  </b-col>
                  <b-col>
                    <b-card-text>
                      <p style="text-align:left; padding-left: 20px;">
                        <b>ZenX Incubation</b><br>
                        360 incubator fully equipped to support projects
                        from genesis of innovation to the finality of market realization.
                        Get further faster with
                        clarity of mission, positioning, product momentum and ecosystem empowerment.
                      </p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card>
            </b-card-group>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<style lang="scss">
.card1 {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
}

// .card2 {
//     border: none !important;
//     background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1) !important;
// }
.card3 {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
   -webkit-animation:fadeInUp 4s; /* Safari & Chrome */
  animation:fadeInUp 4s;
}

.card4 {
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
   -webkit-animation:fadeInUp 2s; /* Safari & Chrome */
  animation:fadeInUp 2s;
}

@-webkit-keyframes fadeInUp{
  0%{
    opacity: 0;
    -webkit-transform: translateY(80px);
  }
  100%{
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
</style>
