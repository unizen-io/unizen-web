<template>
  <div class="container mx-auto px-8">
    <div class="mx-auto flex flex-wrap">
      <div
        v-for="card in utility"
        :key="card.title"
        class="w-full lg:w-1/2 px-4"
      >
        <b-card
          style="min-height: 17.5rem"
          class="mb-6"
        >
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
      </div>
    </div>
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
          img: '/img/features/icon3.png'
        },
        {
          title: 'Reduced Trading Fees',
          content: 'Trading fee\'s will automatically be deducted from your ZCX holdings if you hold ZCX in the UNIZEN:CEX module\'s wallet. <br><br>This will lend itself to great trading discounts on the platform.',
          img: '/img/features/icon2.png'
        },
        {
          title: 'Dynamic Multi-Asset Staking',
          content: 'ZCX holders have the ability to stake their tokens to earn a variety of other token assets. <br><br>The Unizen team also hosts and maintains an ever-growing pool of nodes from various projects in the space. A percentage of node rewards from that pool will also be distributed to ZCX stakers.',
          img: '/img/features/icon4.png'
        },
        {
          title: 'Direct Access to ZenX Labs Portfolio',
          content: 'Staking ZCX will also earn stakers tickets, which allows entrance to invest in early rounds of ZenX projects, along with Unizen hosted IEO\'s in the future.',
          img: '/img/features/icon1.png'
        }
      ]
    }
  }
}
</script>
