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
          <b-img lazy class=" mb-5 pb-5" src="@/assets/img/partners/lunarcrush-text.png" />
        </center>
      </b-col>
    </b-row>

    <b-container>
      <b-row
        class="mb-5"
        cols="1"
        cols-md="2"
        cols-sm="1"
      >
        <b-col class="pt-3">
          <p class="zen-text">
            At <b>Unizen</b>, we want to make <u>all</u> digital assets available for our users in an easy-to-use, secure and highly compliant manner. In order to get the latest and greatest at the top of the queue, we've spear headed an initiative called <code>#TournamentofAlts</code>. <br><br>This is a <b>Unizen</b> hosted competition where the winner gets a free listing on our CEX module with Binance-shared liquidity and top tier market making support. <br><br>The semi-finals will last for <u>24 hours</u> and the final round will run for <u>48 hours</u>. The Altcoin, in the finals, with the highest <b>UNIZEN Smart Score™</b> when the timer runs out - will win the free listing.<br><br>
            The respective communities of each finalist can directly influence the outcome of the competition by supporting their favorite project with <i id="popover-target-1">positive sentiment</i> and <i id="popover-target-2">factually driven marketing</i> on <b>Twitter</b>. <br><br>We're leveraging the smart data feeds of our partner <b>LunarCrush</b> to monitor community sentiment over any digital asset on <b>Twitter</b>.
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
          <NuxtLink to="/competition" class="introduction d-none d-sm-block">
            Competition
          </NuxtLink>
          <br>
          <div class="w-100" />
        </b-col>
        <b-col style="padding-left:10px;">
          <b-row>
            <b-col>
              <b-card class="data-descriptor" title="ZSS Score">
                <p>
                  The <b>UNIZEN Smart Score™</b> (ZSS), is a custom dataset of aggregated LunarCrush powered social sentiment data. It is the combined metric of <b>ZTI</b> and <b>ZSI</b>. It is also the <u>sole determinator</u> of the competition.
                </p>
              </b-card>
              <b-card class="data-descriptor" title="ZTI Score">
                <p>
                  The <b>UNIZEN Twitter Indicator™</b> (ZTI) is an aggregate of twitter activity over a selected digital asset. More specifically, it's an aggregate of <code>number of tweets</code>, <code>quoted retweets</code>, <code>retweets</code>, <code>replies</code> and <code>favorites</code>.
                </p>
              </b-card>
              <b-card class="data-descriptor" title="ZSI Score">
                <p>
                  The <b>UNIZEN Sentiment Indicator™</b> (ZSI) score, is an aggregate of <i>"bullish"</i> sentiment around a digital asset, on twitter. It leverages <b>LunarCrush</b> powered deep learning algorithms and language processing to determine the social sentiment.
                </p>
              </b-card>
              <br><br><br>
              <NuxtLink to="/competition" class="introduction d-block d-sm-none" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { createSEOTags } from '@/utils/helpers/seo'

export default {
  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Wen Zen',
      decsription: 'Listing competition rules and unique social sentiment indexes',
      slug: 'wenzen'
    })
  }
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
