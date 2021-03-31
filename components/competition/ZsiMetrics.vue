<template>
  <div class="container mx-auto px-8">
    <div class="flex space-x-8">
      <div class="flex-1">
        <b-list-group flush>
          <center>
            <b-card
              class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
              text-variant="white"
              :style="'background: ' + firstCompetitor.color + ' !important;'"
            >
              <center>
                <h2 class="text-3xl">
                  <b>{{ firstCompetitor.ZSI.score }}</b>
                </h2>
                <div class="w100" />
                ZSI SCORE
              </center>
            </b-card>
            <br>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ socialContributorsFirstCompetitor }}</b> unique accounts tweeting
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ sentiment4FirstCompetitor }}</b> "bullish" tweets
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ sentiment5FirstCompetitor }}</b> very "bullish" tweets
            </b-list-group-item>
          </center>
        </b-list-group>
      </div>
      <div class="flex-1">
        <b-list-group flush>
          <center>
            <b-card
              class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
              text-variant="white"
              :style="'background: ' + secondCompetitor.color + ' !important;'"
            >
              <center>
                <h2 class="text-3xl">
                  <b>{{ roundNumber(secondCompetitor.ZSI.score / secondCompetitor.mcapDiff) }}</b>
                </h2>
                <div class="w100" />
                ZSI SCORE
              </center>
            </b-card>
            <br>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ socialContributorsSecondCompetitor }}</b> unique accounts tweeting
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ sentiment4SecondCompetitor }}</b> "bullish" tweets
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ sentiment5SecondCompetitor }}</b> very "bullish" tweets
            </b-list-group-item>
          </center>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstCompetitor: { type: Object, default: null },
    secondCompetitor: { type: Object, default: null }
  },
  computed: {
    sentiment4FirstCompetitor () {
      let sentiment4 = 0
      for (let i = 0; i < this.firstCompetitor.ZSI.ts.length; i++) {
        sentiment4 += this.firstCompetitor.ZSI.sentiment4[i]
      }
      return sentiment4
    },
    sentiment4SecondCompetitor () {
      let sentiment4 = 0
      for (let i = 0; i < this.secondCompetitor.ZSI.ts.length; i++) {
        sentiment4 += this.secondCompetitor.ZSI.sentiment4[i]
      }
      return this.roundNumber(sentiment4 / this.secondCompetitor.mcapDiff)
    },
    sentiment5FirstCompetitor () {
      let sentiment5 = 0
      for (let i = 0; i < this.firstCompetitor.ZSI.ts.length; i++) {
        sentiment5 += this.firstCompetitor.ZSI.sentiment5[i]
      }
      return sentiment5
    },
    sentiment5SecondCompetitor () {
      let sentiment5 = 0
      for (let i = 0; i < this.secondCompetitor.ZSI.ts.length; i++) {
        sentiment5 += this.secondCompetitor.ZSI.sentiment5[i]
      }
      return this.roundNumber(sentiment5 / this.secondCompetitor.mcapDiff)
    },
    socialContributorsFirstCompetitor () {
      let socialContributors = 0
      for (let i = 0; i < this.firstCompetitor.ZSI.ts.length; i++) {
        socialContributors += this.firstCompetitor.ZSI.socialContributors[i]
      }
      return socialContributors
    },
    socialContributorsSecondCompetitor () {
      let socialContributors = 0
      for (let i = 0; i < this.secondCompetitor.ZSI.ts.length; i++) {
        socialContributors += this.secondCompetitor.ZSI.socialContributors[i]
      }
      return this.roundNumber(socialContributors / this.secondCompetitor.mcapDiff)
    }
  },
  methods: {
    roundNumber (val) {
      return Number((val).toFixed(0))
    }
  }
}
</script>
