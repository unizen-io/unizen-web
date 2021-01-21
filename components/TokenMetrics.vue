<template>
  <b-container>
    <b-row class="pb-5" cols="2">
      <b-col style="padding-left:50px;">
        <p class="zen-text">
          ZCX is an exchange-based utility token, created on the Ethereum blockchain as an ERC-20 token.<br><br>
          ZEN operates on top of the Binance Cloud infrastructure and the functionality of ZCX is analogous to that of BNB on Binance.<br><br>
          Listing fees will partly be paid in ZCX and 50% of listing fees collected will be distributed into the following allocations:<br>
          <br>
          <b-list-group flush>
            <b-list-group-item class="zen-item">
              <b>Insurance fund</b>
            </b-list-group-item>
            <b-list-group-item class="zen-item">
              <b>Burn</b> - ZCX will be burned with every paid listing
            </b-list-group-item>
            <b-list-group-item class="zen-item" style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
              <b>Staking rewards</b> - allocated to a staking pool
            </b-list-group-item>
          </b-list-group>
          <!-- <ul>
              <li><b>Insurance fund</b></li>
              <li><b>Burn</b> - ZCX will be burned with every paid listing</li>
              <li><b>Staking rewards</b> - allocated to a staking pool</li>
            </ul> -->
        </p>
      </b-col>
      <b-col style="padding-left:50px;">
        <b-row>
          <b-col>
            <small class="text-muted">TICKER</small><br><h2 class="metrics gradient-text">
              ZCX
            </h2>
          </b-col>
          <b-col>
            <small class="text-muted">TOKEN TYPE</small><br><h2 class="metrics gradient-text">
              ERC-20
            </h2>
          </b-col>
          <div class="w-100" />
          <b-col>
            <small class="text-muted">CIRCULATING SUPPLY</small><br><h2 class="metrics gradient-text">
              33.75m
            </h2>
          </b-col>
          <b-col>
            <small class="text-muted">TOTAL SUPPLY</small><br><h2 class="metrics gradient-text">
              1b
            </h2>
          </b-col>
          <div class="w-100" />
          <b-col>
            <br><small class="text-muted">CONTRACT ADDRESS</small><br>
            <h5>
              0xc52c326331e9ce41f04484d3b5e5648158028804 <a href="#" class="copy-icon">❐ </a>
              <a href="https://etherscan.io/token/0xc52c326331e9ce41f04484d3b5e5648158028804" class="copy-icon">⤤</a>
            </h5>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">

a.copy-icon {
    background: none !important;
    text-decoration: none;
    color: #8B9298;
    font-size: 18px;
}

a.copy-icon:hover {
    color: $primary !important;
    text-decoration: none;
}

h2.metrics {
    font-weight: bold;
}
</style>
