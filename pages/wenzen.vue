<template>
  <div class="py-5 my-5">
    <b-row>
      <b-col>
        <h1 class="common-headline mx-auto mt-4">
          The Tournament of Altcoins.
        </h1>
        <div class="w-100" />
        <br><center>
          <small class="text-muted">POWERED BY</small><br>
          <b-img lazy class=" mb-5 pb-5" src="../assets/img/partners/lunarcrush-text.png" />
        </center>
      </b-col>
    </b-row>

    <b-container>
      <b-row class="mb-5">
        <b-col>
          <p class="zen-text pt-3">
            <code>#TournamentofAlts</code> is a <b>ZEN Exchange</b> hosted competition where the winner gets a free listing on our CEX module with Binance-shared liquidity and top tier market making support. <br><br>The final round will last for <u>3 days</u> and the Altcoin with the highest <b>ZEN Smart Score™</b> when the timer runs out, will win the free listing.<br><br>
            The respective communities of each finalist can directly influence the outcome of the competition by supporting their favorite project with <i id="popover-target-1">positive sentiment</i> and <i id="popover-target-2">factually driven marketing</i> on <b>Twitter</b>. <br><br>We're leveraging the smart data feeds of our partner <b>LunarCrush</b> to monitor community sentiment over any digital asset on <b>Twitter</b>. There's more information available on each index below their respective charts.
          </p>
          <b-popover target="popover-target-1" triggers="hover" placement="top">
            <b>OOoOooOOoooooOOOooOoOooOOOOoOF!!!!</b><br><br> <a href="#">$CASHTAG</a>
          </b-popover>
          <b-popover target="popover-target-2" triggers="hover" placement="top">
            <template #title>
              shill
            </template>
            A person engaged in advertising. The shill attempts to spread buzz by personally endorsing the product in public forums.
          </b-popover>
          <br><br>
          <NuxtLink to="/competition" class="introduction">
            Competition
          </NuxtLink>
          <br>
          <div class="w-100" />
        </b-col>
        <b-col style="padding-left:50px;">
          <b-row>
            <b-col>
              <b-card class="data-descriptor" title="ZSS Score">
                <p>
                  The <b>ZEN Smart Score™</b> (ZSS), is a custom dataset of aggregated LunarCrush powered social sentiment data. It is the combined metric of <b>ZTI</b> and <b>ZSI</b>. It is also the <u>soul determinator</u> of the competition.
                </p>
              </b-card>
              <b-card class="data-descriptor" title="ZTI Score">
                <p>
                  The <b>ZEN Twitter Indicator™</b> (ZTI) is an aggregate of twitter activity over a selected digital asset. More specifically, it's an aggregate of <code>number of tweets</code>, <code>quoted retweets</code>, <code>retweets</code>, <code>replies</code> and <code>favorites</code>.
                </p>
              </b-card>
              <b-card class="data-descriptor" title="ZSI Score">
                <p>
                  The <b>ZEN Sentiment Indicator™</b> (ZSI) score, is an aggregate of <i>"bullish"</i> sentiment around a digital asset, on twitter. It leverages <b>LunarCrush</b> powered deep learning algorithms and language processing to determine the social sentiment.
                </p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h1.common-headline {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}

.data-descriptor {
    margin-bottom: 1rem;
}
</style>
