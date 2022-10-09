<template>
  <div class="py-12 my-12">
    <div class="pb-12">
      <div class="container px-4 mx-auto">
        <h1
          class="pt-16 pb-24 text-center text-tertiary"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          Meet the executive team.
        </h1>
        <div class="flex flex-wrap justify-around mb-12">
          <div
            v-for="(member, index) in TEAM"
            :key="member.name"
            class="p-4 w-60"
            data-aos="fade-in"
            :data-aos-duration="0 + 1000 * (index % 1)"
          >
            <div class="text-center overlay-container">
              <nuxt-img
                class="p-1 mx-auto rounded-full team"
                format="webp"
                width="187"
                height="187"
                :src="member.img"
                :alt="member.name"
              />
              <div class="mt-8 rounded overlay">
                <div class="pt-4 font-bold text text-tertiary">
                  <ul class="mt-1 text-center social-networks bounce">
                    <li v-if="member.telegram !== ''">
                      <a :href="member.telegram" class="icon-telegram" target="_blank">Telegram</a>
                    </li>
                    <li v-if="member.linkedin !== ''">
                      <a :href="member.linkedin" class="mb-4 icon-linkedin" target="_blank">LinkedIn</a>
                    </li>
                    <li v-if="member.twitter !== ''">
                      <a :href="member.twitter" class="icon-twitter" target="_blank">Twitter</a>
                    </li>
                    <li v-if="member.github !== ''">
                      <a :href="member.github" class="icon-github" target="_blank">GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h5 class="pt-4 text-xl font-bold text-center team text-tertiary">
                {{ member.name }}
              </h5>
              <p class="text-center">
                {{ member.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      style="background-color: #EFEFEF;"
      class="my-12"
    >
      <div class="container px-8 mx-auto">
        <h1
          class="pt-16 pb-24 text-center text-tertiary"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          Meet the advisors.
        </h1>
        <div
          v-for="(advisor, index) in ADVISORS"
          :key="advisor.name"
          class="flex flex-wrap mb-12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div
            class="w-full lg:w-3/12"
            :class="{ 'order-first lg:order-last': (index % 2) }"
          >
            <div class="overlay-container">
              <nuxt-img
                class="p-1 mx-auto rounded-full team"
                format="webp"
                loading="lazy"
                width="187"
                height="187"
                :src="advisor.img"
                :alt="advisor.name"
              />
              <div class="mt-8 rounded overlay">
                <div class="pt-4 font-bold text text-tertiary">
                  <ul class="mt-1 text-center social-networks bounce">
                    <li v-if="advisor.telegram !== ''">
                      <a :href="advisor.telegram" class="icon-telegram" target="_blank">Telegram</a>
                    </li>
                    <li v-if="advisor.linkedin !== ''">
                      <a :href="advisor.linkedin" class="mb-4 icon-linkedin" target="_blank">LinkedIn</a>
                    </li>
                    <li v-if="advisor.twitter !== ''">
                      <a :href="advisor.twitter" class="icon-twitter" target="_blank">Twitter</a>
                    </li>
                    <li v-if="advisor.github !== ''">
                      <a :href="advisor.github" class="icon-github" target="_blank">GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h5 class="pt-4 text-xl font-bold text-center team text-tertiary">
                {{ advisor.name }}
              </h5>
              <p class="mb-4 text-center">
                {{ advisor.role }}
              </p>
            </div>
          </div>
          <div class="w-full lg:w-9/12">
            <b-card class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p v-html="advisor.desc" />
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createSEOTags } from '@/utils/helpers/seo'
import { PAGES } from '@/utils/constants/links'

export default {
  created () {
    this.TEAM = [
      {
        name: 'Martin Granström',
        img: '/img/team/martin.png',
        role: 'Chief Technical Officer',
        linkedin: 'https://www.linkedin.com/in/martingranstrom/',
        twitter: '',
        github: 'https://github.com/grvlle',
        telegram: 'https://t.me/grvlle'
      },
      {
        name: 'Sean Noga',
        img: '/img/team/sean.png',
        role: 'Chief Executive Officer',
        linkedin: '',
        twitter: 'https://twitter.com/seannogazen',
        github: '',
        telegram: 'https://t.me/NamasteCryptocurrency'
      },
      {
        name: 'Tom Sweeney',
        img: '/img/team/tom_sweeney_2.JPG',
        role: 'Chief Operating Officer',
        linkedin: 'https://www.linkedin.com/in/tomwsweeney/',
        twitter: 'https://twitter.com/jun_capital',
        github: '',
        telegram: 'https://t.me/tomsweeney'
      }
    ]

    this.ADVISORS = [
      {
        name: 'Gilbert Verdian',
        img: '/img/advisors/gilbert.png',
        role: 'CEO of Quant Network',
        linkedin: 'https://www.linkedin.com/in/gverdian/',
        twitter: 'https://twitter.com/gverdian',
        github: '',
        telegram: '',
        desc: ` Gilbert has led a ground-breaking innovation as CEO of Quant Network and the Overledger Network to spearhead interoperability in the global financial and DLT sectors, and is widely recognized as the authority on decentralized compliant protocol development and implementation.
              <br><br>
              With over twenty years of industry experience in working for four governments and prestigious corporate institutions with C-Level accountability, Gilbert has dedicated his entire professional life to collaborating with regulators and corporations in the domains of cybersecurity and disruptive technologies.
              <br><br>
              Prior to joining Quant, Gilbert was CISO at Vocalink, Mastercard and was responsible for securing 6 Trillion pounds of annual transactions on the UK’s national critical payment infrastructure. He established the Blockchain ISO Standard TC307 in 2015, in which he chairs the Interoperability Working Group. He is a founding member of INATBA, and sits on various Government committees.`
      },
      {
        name: 'Dr. Ian Sobieski',
        img: '/img/advisors/ian.png',
        role: 'Chairman & Founder, Band of Angels',
        linkedin: 'https://www.linkedin.com/in/ian-sobieski-a84157/',
        twitter: '',
        github: '',
        telegram: '',
        desc: ` Ian leads the Band of Angels (www.bandangels.com) in Silicon Valley: the first and most prestigious angel investing group in the United States, whose membership is limited to former officers or founders of high technology companies. Since its inception, the Band has invested approximately $250M into 300+ startup companies.
              <br><br>
              Ian has been a founding partner of three Band related seed venture funds and a partner at Labrador Ventures. He is currently the general partner of the Band of Angels Acorn Fund, which backs entrepreneurs who have the strategy of building profitable companies or exiting on the Fund's sole investment. He has personally made more than 120 early-stage investments and has served on more than 20 boards of directors.
              <br><br>
              Ian is a frequent speaker, lecturer, and commentator in entrepreneurship and startup issues in Silicon Valley and nationally. He is the author of a dozen technical publications and is a former lecturer in the Center for Entrepreneurship and Technology at the University of California at Berkeley. D
              <br><br>
              He holds a Ph.D. and MS in Aeronautics and Astronautics from Stanford University, is a founding board member of the Angel Capital Association and is a member of the Venture Capital Network. In 2020, Ian was elected to the City Council of the City of Sausalito for a four-year term.`
      },
      {
        name: 'Greg Horowitt',
        img: '/img/advisors/greg.png',
        role: 'Partner, Jun Capital Management',
        linkedin: 'https://www.linkedin.com/in/horowitt/',
        twitter: 'https://twitter.com/ghorowitt',
        github: '',
        telegram: '',
        desc: ` Greg is a Partner at Jun Capital Management in San Diego, California. He is a serial entrepreneur, technology investor, author, and a globally recognized pioneer in the field of innovation-based economic development.
              <br><br>
              He has spent over 25 years working in start-ups and venture capital, and has started, mentored, advised, invested in, and/or served as a board member of hundreds of companies. He is a lecturer at Stanford University and serves as the Director of Innovation at the University of California, San Diego, where he also lectures.
              <br><br>
              Greg is the co-author of the bestselling book, The Rainforest: The Secret to Building the Next Silicon Valley, and is a trusted advisor to such notable organizations as the US State Department, the Aspen Institute, the University of California, the World Bank, and the Inter-American Development Bank, in addition to being a Senior Fellow with the Global Federation of Competitiveness Councils.
              <br><br>
              He was co-founder of Global CONNECT, which has grown to be a global network of accelerator programs in over 25 countries around the world.
              <br><br>
              Greg began his career working for one of the Berkshire Hathaway operating company where he spent over 17 years in various executive management roles before leaving to join his first Silicon Valley startup.`
      },
      {
        name: 'Nicholas Racz',
        img: '/img/advisors/ghost.png',
        role: 'Co-Founder, CIO of 3GR LLC',
        linkedin: 'https://www.linkedin.com/in/nicholas-racz-439041149/',
        twitter: 'https://twitter.com/OfMiklos',
        github: '',
        telegram: '',
        desc: ` Nicholas Racz is an expert on managing data in decentralized projects, particularly through systems that support compliance, Self-Sovereign Identities and KYC. As a leading decentralization researcher, he will also provide unique, data-driven insights on token ecosystem design and tokenomics. His expertise will help shape strategies to increase the utility of ZCX token and identify new growth areas.
        <br><br>
        His advisory experience at Outlier Ventures and Cheqd helps shape innovations in decentralized incubation and regulation. Having Nicholas Racz on board as a strategic advisor is another step towards combining decentralization and compliance throughout the Unizen ecosystem.`
      },
      {
        name: 'Eric Su',
        img: '/img/advisors/eric.png',
        role: 'CEO of Exnetwork Capital',
        linkedin: 'https://www.linkedin.com/in/ericsu/',
        twitter: 'https://twitter.com/ericzoo',
        github: '',
        telegram: '',
        desc: ` Eric Su is the Founder & CEO of Exnetwork Capital which operates one of Asia’s largest and most successful cryptocurrency OTC trading desks. He is a highly trusted and broadly connected member of the global blockchain community with particularly strong investor, developer and influencer connections across Asia.
              <br><br>
              Eric is a successful serial entrepreneur in the digital technology space and particularly enjoys working with and mentoring blockchain development teams tackling high uncertainty project and bold initiatives.`
      }
    ]
  },

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Team and Advisors',
      description: 'The ZEN Team and Advisors. Greg Horowitt, Dr. Ian Sobieski, Eric Su, Brandon Dallman, Martin Granström, Sean Noga, Tom Sweeney, Alex Man',
      slug: PAGES.team.url
    })
  }
}
</script>

<style lang="scss">
img.team {
  background-image: linear-gradient(to right, #00f5a4, #00afae);
}

h5.team {
  font-family: Montserrat Medium !important;
}

.text {
  font-family: Montserrat Medium !important;
}

.overlay-container {
  position: relative;
}

.overlay-container:hover .overlay {
  opacity: 1;
}

.overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.185);
  backdrop-filter: blur(15px);
  opacity: 0;
  width: 100%;
  top: 0;
  left: 0;
  transition: opacity 1s ease;
}
</style>
