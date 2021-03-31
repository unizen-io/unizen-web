<template>
  <div>
    <div style="background: #EFEFEF;">
      <div
        v-if="!competitionResults"
        class="container mx-auto px-8"
      >
        <div class="py-12 md:flex">
          <div class="px-4 md:w-1/3">
            <h1 class="text-center text-8xl" :style="'font-family: Montserrat; color: ' + firstCompetitor.color + ' !important;'">
              {{ firstCompetitor.asset }}
            </h1>
            <h4 class="text-center">
              ({{ firstCompetitor.company }})
            </h4>
          </div>
          <div class="px-4 md:w-1/3">
            <h1 class="text-center text-8xl text-tertiary">
              vs.
            </h1>
          </div>
          <div class="px-4 md:w-1/3">
            <h1 class="text-center text-8xl" :style="'font-family: Montserrat; color: ' + secondCompetitor.color + ' !important;'">
              {{ secondCompetitor.asset }}
            </h1>
            <h4 class="text-center">
              ({{ secondCompetitor.company }})
            </h4>
          </div>
        </div>
      </div>
      <div v-if="competitionResults && firstCompetitor.ZSS.score > secondCompetitor.ZSS.score">
        <br><br>
        <b><h1 class="text-center text-8xl" :style="'font-family: Montserrat; color: ' + firstCompetitor.color + ' !important;'">
          {{ firstCompetitor.asset }}
        </h1></b>
        <h4 class="text-center">
          ({{ firstCompetitor.company }})
        </h4>
        <br><br>
      </div>
      <div v-if="competitionResults && firstCompetitor.ZSS.score < secondCompetitor.ZSS.score">
        <br><br>
        <h1 class="text-center text-8xl" :style="'font-family: Montserrat; color: ' + secondCompetitor.color + ' !important;'">
          {{ secondCompetitor.asset }}
        </h1>
        <h4 class="text-center">
          ({{ secondCompetitor.company }})
        </h4>
        <br><br>
      </div>
    </div>
    <div v-if="!competitionEnded && competitionStarted">
      <div
        :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'"
        class="flex flex-wrap"
      >
        <div class="px-4 w-1/2 md:w-1/4">
          <h1
            style="font-family: D DIN;"
            class="text-center text-6xl p-7 text-unizenGray-light"
          >
            {{ timer.days }}
          </h1>
          <p class="text-center text-xl p-7 text-unizenGray-light">
            DAYS
          </p>
        </div>
        <div class="px-4 w-1/2 md:w-1/4">
          <h1
            style="font-family: D DIN;"
            class="text-center text-6xl p-7 text-unizenGray-light"
          >
            {{ timer.hours }}
          </h1>
          <p class="text-center text-xl p-7 text-unizenGray-light">
            HOURS
          </p>
        </div>
        <div class="px-4 w-1/2 md:w-1/4">
          <h1
            style="font-family: D DIN;"
            class="text-center text-6xl p-7 text-unizenGray-light"
          >
            {{ timer.minutes }}
          </h1>
          <p class="text-center text-xl p-7 text-unizenGray-light">
            MINUTES
          </p>
        </div>
        <div class="px-4 w-1/2 md:w-1/4">
          <h1
            style="font-family: D DIN;"
            class="text-center text-6xl p-7 text-unizenGray-light"
          >
            {{ timer.seconds }}
          </h1>
          <p class="text-center text-xl p-7 text-unizenGray-light">
            SECONDS
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="competitionEnded && !competitionResults"
      :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'"
      class="py-7 mb-6"
    >
      <h1
        style="font-family: D DIN;"
        class="text-center text-6xl text-unizenGray-light"
      >
        <strong>AND THE WINNER IS...</strong>
      </h1>
    </div>
    <div
      v-if="competitionResults"
      :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'"
      class="py-7 mb-6"
    >
      <h1
        style="font-family: D DIN;"
        class="text-center text-6xl text-unizenGray-light"
      >
        <strong>WINNER</strong>
      </h1>
    </div>
    <div
      v-if="!competitionStarted"
      :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'"
      class="py-7 mb-6"
    >
      <h1
        style="font-family: D DIN;"
        class="text-center text-6xl text-unizenGray-light"
      >
        {{ normalizeTimestamp(competitionStartTime) }}
      </h1>
      <div class="flex flex-col items-center mt-12">
        <small class="text-unizenGray-dark">POWERED BY</small><br>
        <nuxt-img
          class="mb-12 pb-12"
          format="webp"
          width="240"
          height="70"
          src="/img/partners/lunarcrush.png"
          alt="Lunarcrush"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstCompetitor: { type: Object, default: null },
    secondCompetitor: { type: Object, default: null },
    timer: { type: Object, default: null },
    competitionStartTime: { type: Number, default: 0 },
    competitionStarted: { type: Boolean, default: false },
    competitionEnded: { type: Boolean, default: true },
    competitionResults: { type: Boolean, default: false }
  },
  methods: {
    normalizeTimestamp (ts) {
      const t = new Date(ts * 1000)
      const formatted = t.toUTCString()

      return formatted
    }
  }
}
</script>
