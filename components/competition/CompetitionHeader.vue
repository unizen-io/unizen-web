<template>
  <div>
    <b-row
      style="background: #EFEFEF; "
    >
      <b-container>
        <div v-if="!competitionResults">
          <b-row
            class="py-12"
            cols="1"
            cols-md="3"
            cols-sm="1"
          >
            <b-col>
              <b><h1 class="competition-headline" :style="'font-family: Montserrat; color: '+firstCompetitor.color+' !important;'">
                {{ firstCompetitor.asset }}
              </h1></b>
              <h4 class="competition-sub">
                ({{ firstCompetitor.company }})
              </h4>
            </b-col>
            <b-col>
              <h1 class="competition-headline">
                vs.
              </h1>
            </b-col>
            <b-col>
              <h1 class="competition-headline" :style="'font-family: Montserrat; color: '+secondCompetitor.color+' !important;'">
                {{ secondCompetitor.asset }}
              </h1>
              <h4 class="competition-sub">
                ({{ secondCompetitor.company }})
              </h4>
            </b-col>
          </b-row>
        </div>
        <div v-if="competitionResults && firstCompetitor.ZSS.score > secondCompetitor.ZSS.score">
          <br><br>
          <b><h1 class="competition-headline" :style="'font-family: Montserrat; color: '+firstCompetitor.color+' !important;'">
            {{ firstCompetitor.asset }}
          </h1></b>
          <h4 class="competition-sub">
            ({{ firstCompetitor.company }})
          </h4>
          <br><br>
        </div>
        <div v-if="competitionResults && firstCompetitor.ZSS.score < secondCompetitor.ZSS.score">
          <br><br>
          <h1 class="competition-headline" :style="'font-family: Montserrat; color: '+secondCompetitor.color+' !important;'">
            {{ secondCompetitor.asset }}
          </h1>
          <h4 class="competition-sub">
            ({{ secondCompetitor.company }})
          </h4>
          <br><br>
        </div>
      </b-container>
    </b-row>
    <div v-if="!competitionEnded && competitionStarted">
      <b-row
        :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'
        "
        cols="2"
        cols-md="4"
        cols-sm="2"
      >
        <b-col>
          <h1 class="competition-headline-light">
            {{ timer.days }}
          </h1>
          <p class="competition-text">
            DAYS
          </p>
        </b-col>
        <b-col>
          <h1 class="competition-headline-light">
            {{ timer.hours }}
          </h1>
          <p class="competition-text">
            HOURS
          </p>
        </b-col>
        <b-col>
          <h1 class="competition-headline-light">
            {{ timer.minutes }}
          </h1>
          <p class="competition-text">
            MINUTES
          </p>
        </b-col>
        <b-col>
          <h1 class="competition-headline-light">
            {{ timer.seconds }}
          </h1>
          <p class="competition-text">
            SECONDS
          </p>
        </b-col>
      </b-row>
    </div>
    <div v-if="competitionEnded && !competitionResults">
      <b-row
        :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'
        "
        cols="1"
      >
        <center>
          <h1 class="competition-headline-light-winner">
            <b>AND THE WINNER IS...</b>
          </h1>
        </center>
      </b-row>
    </div>
    <div v-if="competitionResults">
      <b-row
        :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'
        "
        cols="1"
      >
        <center>
          <h1 class="competition-headline-light-winner">
            <b>WINNER</b>
          </h1>
        </center>
      </b-row>
    </div>
    <div v-if="!competitionStarted">
      <b-row
        :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'
        "
        cols="1"
      >
        <center>
          <h1 class="competition-headline-light-winner">
            {{ normalizeTimestamp(competitionStartTime) }}
          </h1>
        </center>
      </b-row>
      <br><br>
      <b-col>
        <center>
          <small class="text-muted">POWERED BY</small><br>
          <nuxt-img
            class="mb-12 pb-12"
            format="webp"
            width="240"
            height="70"
            src="/img/partners/lunarcrush.png"
            alt="Lunarcrush"
          />
        </center>
        <b-col />
      </b-col>
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

<style lang="scss">
h1.competition-headline-light-winner {
  font-family: D DIN;
  text-align: center;
  margin-bottom: 25px;
  margin-top: 25px;
  color: $light !important;
  font-size: 4rem !important;
}
</style>
