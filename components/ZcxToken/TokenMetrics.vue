<template>
  <b-container>
    <b-row
      class="pb-12"
      cols="1"
      cols-sm="1"
      cols-md="1"
      cols-lg="2"
    >
      <b-col class="p-7">
        <p
          style="color: #2F4858;"
          class="text-lg"
        >
          ZCX is an exchange-based utility token, created on the Ethereum blockchain as an ERC-20 token.<br><br>
          Unizen Exchange operates on top of Binance Cloud’s trading and security infrastructure. The functionality of ZCX is analogous to that of BNB on Binance.<br><br>
          A portion of the listing fees collected will  be distributed into the following allocations:<br>
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
      <b-col class="order-first lg:order-last p-7">
        <b-row>
          <b-col>
            <small style="color: #6c757d;">TICKER</small>
            <br>
            <h2 class="text-3xl font-bold gradient-text">
              ZCX
            </h2>
          </b-col>
          <b-col>
            <small style="color: #6c757d;">TOKEN TYPE</small>
            <br>
            <h2 class="text-3xl font-bold gradient-text">
              ERC-20
            </h2>
          </b-col>
          <div class="w-100" />
          <b-col>
            <small style="color: #6c757d;">CIRCULATING SUPPLY</small>
            <br>
            <h2 class="text-3xl font-bold gradient-text">
              33.75m
            </h2>
          </b-col>
          <b-col>
            <small style="color: #6c757d;">TOTAL SUPPLY</small>
            <br>
            <h2 class="text-3xl font-bold gradient-text">
              1b
            </h2>
          </b-col>
          <div class="w-100" />
          <b-col>
            <br><small style="color: #6c757d;">CONTRACT ADDRESS</small><br>
            <h5 class="text-xl">
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

.gradient-text {
  /* Fallback: Set a background color. */
  background-color: $primary;

  /* Create the gradient. */
  background-image: linear-gradient(to right bottom, #00afae, #00b6b0, #00bdb1, #00c3b1, #00cab1, #00d0b1, #00d6b0, #00dcaf, #00e2ad, #00e9ab, #00efa8, #00f5a4);
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  // TODO: autoprefixer automatically set-up by Nuxt
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
