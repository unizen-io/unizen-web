<template>
  <b-container>
    <div class="py-5">
      <b-row>
        <div>
          <div>
            <b-card-group deck>
              <b-card text-variant="white" class="text-center card4">
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

              <b-card text-variant="white" class="text-center card1">
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

              <b-card text-variant="white" class="text-center card3 cards">
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
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.card1 {
    border: none !important;
    background-image: linear-gradient(to right top, #00afae, #00b6b0, #00bdb1, #00c3b1, #00cab1, #00d0b1, #00d6b0, #00dcaf, #00e2ad, #00e9ab, #00efa8, #00f5a4) !important;
   -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
}

// .card2 {
//     border: none !important;
//     background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1) !important;
// }
.card3 {
    border: none !important;
    background-image: linear-gradient(to left bottom, #feac5e, #ff986d, #ff8782, #ff7b9b, #f176b4, #d97fce, #b989e2, #9094ed, #60a4f2, #32b1eb, #29badb, #4bc0c8) !important;
   -webkit-animation:fadeInUp 4s; /* Safari & Chrome */
  animation:fadeInUp 4s;
}

.card4 {
    border: none !important;
    background-image: linear-gradient(to left bottom, #ec008c, #f22183, #f7357a, #fa4673, #fc556d, #f85766, #f45a5f, #ef5c59, #e6534f, #dc4b45, #d3423c, #c93932) !important;
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
