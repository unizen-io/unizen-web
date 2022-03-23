<template>
  <div class="container flex flex-wrap px-8 pb-12 mx-auto">
    <div
      class="w-full px-4 p-7 lg:w-1/2"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      <!-- ray test touch > -->
      <div class="text-lg text-tertiary">
        ZCX is an exchange-based utility token, created on the Ethereum blockchain as an ERC-20 token.<br><br>
        Unizen Exchange operates on top of Binance Cloud’s trading and security infrastructure. The functionality of ZCX is analogous to that of BNB on Binance.<br><br>
        A portion of the listing fees collected will  be distributed into the following allocations:<br>
        <br>
        <b-list-group flush>
          <b-list-group-item class="bg-white bg-opacity-20">
            <span class="font-bold">Insurance fund</span>
          </b-list-group-item>
          <b-list-group-item class="bg-white bg-opacity-20">
            <span class="font-bold">Burn</span> - ZCX will be burned with every paid listing
          </b-list-group-item>
          <b-list-group-item class="bg-white rounded-b bg-opacity-20">
            <span class="font-bold">Staking rewards</span> - allocated to a staking pool
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div
      class="order-first w-full lg:order-last p-7 lg:w-1/2"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <!-- ray test touch > -->
      <div class="flex flex-wrap">
        <div class="w-1/2 px-4">
          <small class="text-unizenGray-dark">TICKER</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            ZCX
          </h2>
        </div>
        <div class="w-1/2 px-4">
          <small class="text-unizenGray-dark">TOKEN TYPE</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            ERC-20
          </h2>
        </div>
        <div class="w-1/2 px-4">
          <small class="text-unizenGray-dark">CIRCULATING SUPPLY</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            {{ circulatingSupply ? `${circulatingSupply}` : 'loading' }}
          </h2>
        </div>
        <div class="w-1/2 px-4">
          <small class="text-unizenGray-dark">TOTAL SUPPLY</small>
          <br>
          <h2 class="text-3xl font-bold gradient-text bg-primary">
            1b
          </h2>
        </div>
        <div class="w-full px-4">
          <small class="block text-unizenGray-dark">
            CONTRACT ADDRESS
          </small>
          <div class="flex space-x-1">
            <h5 class="text-base sm:text-xl">
              {{ contract }}
            </h5>
            <a
              class="text-lg no-underline cursor-pointer copy-icon hover:text-primary"
              @click.stop.prevent="copyContract"
            >
              ❐
            </a>
            <!-- TODO: should not hardcode -->
            <a
              href="https://etherscan.io/token/0xc52c326331e9ce41f04484d3b5e5648158028804"
              class="text-lg no-underline cursor-pointer copy-icon hover:text-primary"
            >
              ⤤
            </a>
          </div>
          <input id="contract" type="hidden" :value="contract">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API_UNIZEN_IO } from '@/config/index'

export default {
  async fetch () {
    try {
      const data = await this.$axios.$get(
        `${API_UNIZEN_IO}/data/circulation_supply`,
        { progress: false }
      )
      this.circulatingSupply = `${(parseFloat(data) / 1000000).toFixed(2).toLocaleString()}m`
    } catch (error) {
      this.circulatingSupply = 'Unavailable'
    }
  },
  data () {
    return {
      circulatingSupply: undefined,
      contract: '0xc52c326331e9ce41f04484d3b5e5648158028804'
    }
  },
  methods: {
    copyContract () {
      // TODO: should refactor properly
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
  color: #8b9298;
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
