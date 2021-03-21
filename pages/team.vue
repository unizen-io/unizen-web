<template>
  <div class="py-12 my-12">
    <div class="pb-12">
      <div class="container mx-auto px-8">
        <h1 class="common-headline">
          Meet the team.
        </h1>
        <div class="flex flex-wrap justify-center mb-12">
          <div
            v-for="member in team"
            :key="member.name"
            class="p-4 w-80"
          >
            <div class="overlay-container text-center">
              <nuxt-img
                class="team mx-auto p-1 rounded-full"
                format="webp"
                width="187"
                height="187"
                :src="member.img"
                :alt="member.name"
              />
              <div class="overlay mt-8 rounded">
                <div class="pt-4 text">
                  <ul class="text-center social-networks bounce mt-1">
                    <li v-if="member.telegram !== ''">
                      <a :href="member.telegram" class="icon-telegram">Telegram</a>
                    </li>
                    <li v-if="member.linkedin !== ''">
                      <a :href="member.linkedin" class="mb-4 icon-linkedin">LinkedIn</a>
                    </li>
                    <li v-if="member.twitter !== ''">
                      <a :href="member.twitter" class="icon-twitter">Twitter</a>
                    </li>
                    <li v-if="member.github !== ''">
                      <a :href="member.github" class="icon-github">GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h5 class="text-xl text-center pt-4 team">
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
      <div class="container mx-auto px-8">
        <h1 class="common-headline">
          Meet the advisors.
        </h1>
        <div
          v-for="(advisor, index) in advisors"
          :key="advisor.name"
          class="mb-12 flex flex-wrap"
        >
          <div
            class="w-full lg:w-3/12"
            :class="{ 'order-first lg:order-last': (index % 2) }"
          >
            <div class="overlay-container">
              <nuxt-img
                class="team mx-auto p-1 rounded-full"
                format="webp"
                loading="lazy"
                width="187"
                height="187"
                :src="advisor.img"
                :alt="advisor.name"
              />
              <div class="overlay mt-8 rounded">
                <div class="pt-4 text">
                  <ul class="text-center social-networks bounce mt-1">
                    <li v-if="advisor.telegram !== ''">
                      <a :href="advisor.telegram" class="icon-telegram">Telegram</a>
                    </li>
                    <li v-if="advisor.linkedin !== ''">
                      <a :href="advisor.linkedin" class="mb-4 icon-linkedin">LinkedIn</a>
                    </li>
                    <li v-if="advisor.twitter !== ''">
                      <a :href="advisor.twitter" class="icon-twitter">Twitter</a>
                    </li>
                    <li v-if="advisor.github !== ''">
                      <a :href="advisor.github" class="icon-github">GitHub</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h5 class="text-xl text-center pt-4 team">
                {{ advisor.name }}
              </h5>
              <p class="text-center mb-4">
                {{ advisor.role }}
              </p>
            </div>
          </div>
          <div class="w-full lg:w-9/12">
            <b-card>
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

export default {
  data () {
    return {
      // TODO: could avoid managing `team` and `advisors` in the data as it does not have to be reactive
      team: [
        {
          name: 'Brandon Dallman',
          img: '/img/team/brandon.png',
          role: 'Chief Marketing Officer',
          linkedin: 'https://www.linkedin.com/in/brandon-dallmann-54b78212',
          twitter: 'https://twitter.com/cryptfaux',
          github: '',
          telegram: 'https://t.me/cryptfaux'
        },
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
          linkedin: 'https://www.linkedin.com/in/sean-noga-142b923',
          twitter: 'https://twitter.com/jun_capital',
          github: '',
          telegram: 'https://t.me/NamasteCryptocurrency'
        },
        {
          name: 'Tom Sweeney',
          img: '/img/team/tom.png',
          role: 'Chief Operating Officer',
          linkedin: 'https://www.linkedin.com/in/tomwsweeney/',
          twitter: 'https://twitter.com/jun_capital',
          github: '',
          telegram: 'https://t.me/tomsweeney'
        }
      ],
      advisors: [
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
    }
  },
  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Team and Advisors',
      description: 'The ZEN Team and Advisors. Greg Horowitt, Dr. Ian Sobieski, Eric Su, Brandon Dallman, Martin Granström, Sean Noga, Tom Sweeney, Alex Man'
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
  color: $dark !important;
  font-weight: bold;
}

.text {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-weight: bold;
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
