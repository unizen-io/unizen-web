<template>
  <b-row class="binance py-5">
    <b-container>
      <b-row class="pt-4">
        <b-col>
          <h3 class="binance-text">
            ZEN Innovation Powered by:
          </h3>
          <img src="~assets/img/binance/bc-logo.png">
        </b-col>
        <b-col />
      </b-row>
      <b-row class="pt-5">
        <b-col />
        <b-col cols="8">
          <p class="binance-text">
            ZEN Exchange's centralized liquidity and platform is powered by Binance infrastructure, security and liquidity to enable a <a href="#" class="binance">ZEN state of mind</a> for traders.
          </p>
        </b-col>
        <b-col />
      </b-row>
      <b-row class="py-5">
        <b-col>
          <div class="performance text-center" />
          <p class="binance-subtitle">
            <b>Performance</b>
          </p>
          <p class="binance-subtitle-small">
            Runs smooth when it matters the most
          </p>
          <p class="binance-text-small">
            Highly responsive UI even at tremendous load. Binance’s matching engines stand up to stress even at peak trading times.
          </p>
        </b-col>
        <b-col class="center">
          <div class="liquidity" />
          <p class="binance-subtitle">
            <b>High Liquidity</b>
          </p>
          <p class="binance-subtitle-small">
            Absorb orders with large transaction volume
          </p>
          <p class="binance-text-small">
            Shared trading liquidity and depth with Binance directly at launch.
          </p>
        </b-col>

        <b-col>
          <div class="security" />
          <p class="binance-subtitle">
            <b>Binance Security</b>
          </p>
          <p class="binance-subtitle-small">
            Reliable custody & trading
          </p>
          <p class="binance-text-small">
            Top-tier security measures that have been withstanding millions of malicious attempts over several years, will be enforced throughout the exchange.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.binance {
    background: $dark;
}

a.binance {
  text-decoration: none !important;
  display: inline-table;
  color: $light;
}

a.binance:hover {
  text-decoration: none !important;
  color: $light !important;
}

a.binance:after {
  content: "";
  border-bottom: 0.15em solid $secondary;
  display: table-caption;
  caption-side: bottom;
  position: relative;
  margin-top:-0.15em;
}

h3.binance-text {
    color: $light !important;
    text-align: left;
    font-family: 'D DIN';
    font-size: 1em !important;
    padding: 0px;
}

p.binance-text {
    font-size: 1.2em !important;
    padding: 0px;
    color: $light;
    text-align: center;
}

p.binance-subtitle {
    font-size: 1.3em !important;
    padding-top: 30px;
    color: $light;
    text-align: center;
}

p.binance-text-small {
    font-size: 1em !important;
    color: $light;
    text-align: center;
}

p.binance-subtitle-small {
    font-size: 0.9em !important;
    margin-top: -20px;
    color: $light;
    text-align: center;
}

.liquidity {
    background-image: url('../assets/img/binance/liquidity.png');
    background-size: cover;
    height: 150px;
    width: 150px;
    text-align: center;
    top: 0;
    left: 0;
    margin: auto;
}

.performance {
    background-image: url('../assets/img/binance/performance.png');
    background-size: cover;
    height: 150px;
    width: 150px;
    text-align: center;
    top: 0;
    left: 0;
    margin: auto;
}

.security {
    background-image: url('../assets/img/binance/security.png');
    background-size: cover;
    height: 150px;
    width: 150px;
    text-align: center;
    top: 0;
    left: 0;
    margin: auto;
}
</style>
