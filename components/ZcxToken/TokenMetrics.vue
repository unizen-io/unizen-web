<template>
  <b-container>
    <b-row
      class="pb-5"
      cols="1"
      cols-sm="1"
      cols-md="1"
      cols-lg="2"
    >
      <b-col>
        <p class="zen-text">
          ZCX is an exchange-based utility token, created on the Ethereum blockchain as an ERC-20 token.<br><br>
          ZEN Exchange operates on top of the Binance Cloud infrastructure and the functionality of ZCX is analogous to that of BNB on Binance.<br><br>
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
      <b-col class="order-lg-last order-first pb-5">
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
            <h5 class="address">
              {{ contract }} <a class="copy-icon" @click.stop.prevent="copyContract">❐ </a>
              <a href="https://etherscan.io/token/0xc52c326331e9ce41f04484d3b5e5648158028804" class="copy-icon">⤤</a>
            </h5>
            <input id="contract" type="hidden" :value="contract">
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

  data () {
    return {
      contract: '0xc52c326331e9ce41f04484d3b5e5648158028804'
    }
  },
  methods: {
    copyContract () {
      const testingCodeToCopy = document.querySelector('#contract')
      testingCodeToCopy.setAttribute('type', 'text') // hidden
      testingCodeToCopy.select()
      document.execCommand('copy')
      // try {
      //   const successful = document.execCommand('copy')
      //   const msg = successful ? 'successful' : 'unsuccessful'
      //   alert('Testing code was copied ' + msg)
      // } catch (err) {
      //   console.log('Unable to copy contract')
      // }

      /* unselect the range */
      testingCodeToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }
  }

}
</script>

<style lang="scss">

h5.address {
  font-size: 1.3rem;
}

a.copy-icon {
    background: none !important;
    text-decoration: none;
    color: #8B9298;
    font-size: 18px;
}

a.copy-icon:hover {
    cursor: pointer;
    color: $primary !important;
    text-decoration: none;
}

h2.metrics {
    font-weight: bold;
}
</style>
