<template>
  <div class="container mx-auto px-8 pb-12 flex flex-wrap">
    <div class="p-7 px-4 w-full lg:w-1/2">
      <p class="text-lg text-tertiary">
        ZCX is an exchange-based utility token, created on the Ethereum blockchain as an ERC-20 token.<br><br>
        Unizen Exchange operates on top of Binance Cloud’s trading and security infrastructure. The functionality of ZCX is analogous to that of BNB on Binance.<br><br>
        A portion of the listing fees collected will  be distributed into the following allocations:<br>
        <br>
        <b-list-group flush>
          <b-list-group-item class="bg-white bg-opacity-20">
            <b>Insurance fund</b>
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20">
            <b>Burn</b> - ZCX will be burned with every paid listing
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
            <b>Staking rewards</b> - allocated to a staking pool
          </b-list-group-item>
        </b-list-group>
        <!-- <ul>
          <li><b>Insurance fund</b></li>
          <li><b>Burn</b> - ZCX will be burned with every paid listing</li>
          <li><b>Staking rewards</b> - allocated to a staking pool</li>
        </ul> -->
      </p>
    </div>
    <div class="order-first lg:order-last p-7 w-full lg:w-1/2">
      <div class="flex flex-wrap">
        <div class="px-4 w-1/2">
          <small style="color: #6c757d;">TICKER</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            ZCX
          </h2>
        </div>
        <div class="px-4 w-1/2">
          <small style="color: #6c757d;">TOKEN TYPE</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            ERC-20
          </h2>
        </div>
        <div class="px-4 w-1/2">
          <small style="color: #6c757d;">CIRCULATING SUPPLY</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            33.75m
          </h2>
        </div>
        <div class="px-4 w-1/2">
          <small style="color: #6c757d;">TOTAL SUPPLY</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            1b
          </h2>
        </div>
        <div class="px-4 w-full">
          <br><small style="color: #6c757d;">CONTRACT ADDRESS</small><br>
          <h5 class="text-xl">
            {{ contract }}
            &nbsp;
            <a
              class="copy-icon hover:text-primary no-underline text-lg cursor-pointer"
              @click.stop.prevent="copyContract"
            >
              ❐
            </a>
            &nbsp;
            <!-- TODO: should not hardcode -->
            <a
              href="https://etherscan.io/token/0xc52c326331e9ce41f04484d3b5e5648158028804"
              class="copy-icon hover:text-primary no-underline text-lg cursor-pointer"
            >
              ⤤
            </a>
          </h5>
          <input id="contract" type="hidden" :value="contract">
        </div>
      </div>
    </div>
  </div>
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
  color: #8B9298;
}

.gradient-text {
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
