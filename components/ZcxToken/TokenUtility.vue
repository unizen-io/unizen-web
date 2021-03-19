<template>
  <div>
    <b-row>
      <b-container>
        <b-row
          class="mx-auto"
          cols="1"
          cols-sm="1"
          cols-md="1"
          cols-lg="2"
        >
          <b-col v-for="card in utility" :key="card.title" sm>
            <b-card class="mb-6 utility-card">
              <div class="flex">
                <div class="w-1/4 px-4 text-center">
                  <nuxt-img
                    loading="lazy"
                    format="webp"
                    width="386"
                    height="387"
                    :src="card.img"
                    :alt="card.title"
                  />
                </div>
                <div class="w-3/4 px-4">
                  <h3 class="text-3xl">
                    <b>{{ card.title }}</b>
                  </h3>
                  <p v-html="card.content" />
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      utility: [
        {
          title: 'Exchange Governance',
          content: 'Empower a decentralized community to make key decisions in the Unizen Exchange, including but not limited to:<br><br><ul> <li>Listing votes for pre-identified candidates</li> <li>Augmenting the roadmap itself</li> <li>Customizing Unizen\'s UI</li></ul>',
          img: 'features/icon3.png'
        },
        {
          title: 'Reduced Trading Fees',
          content: 'Trading fee\'s will automatically be deducted from your ZCX holdings if you hold ZCX in the UNIZEN:CEX module\'s wallet. <br><br>This will lend itself to great trading discounts on the platform.',
          img: 'features/icon2.png'
        },
        {
          title: 'Dynamic Multi-Asset Staking',
          content: 'ZCX holders have the ability to stake their tokens to earn more ZCX. <br><br>The Unizen team also hosts and maintains an ever-growing pool of nodes from various projects in the space. A percentage of node rewards from that pool will also be distributed to ZCX stakers.',
          img: 'features/icon4.png'
        },
        {
          title: 'Direct Access to ZenX Labs Portfolio',
          content: 'Staking ZCX will also earn stakers tickets, which allows entrance to invest in early rounds of ZenX projects, along with Unizen hosted IEO\'s in the future.',
          img: 'features/icon1.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.utility-card {
  min-height: 17.5rem !important;
}
</style>
