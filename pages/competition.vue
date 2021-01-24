<template>
  <div class="pt-5 my-5">
    <center>
      <div class="mt-5 pt-5">
        <h5 v-if="competitionEnded">
          Competition Ended
        </h5>
        <h5 v-if="competitionRunning">
          Competition Running
        </h5>
        <h5 v-else>
          Competition hasn't started yet
        </h5>
      </div>
    </center>
    <div v-if="!competitionEnded && competitionStarted">
      <b-row style="background: #EFEFEF;" class="py-5">
        <b-container>
          <b-row>
            <b-col>
              <b><h1 class="competition-headline" :style="'font-family: Montserrat; color: '+FirstCompetitor.color+' !important;'">
                {{ FirstCompetitor.asset }}
              </h1></b>
              <h4 class="competition-sub">
                ({{ FirstCompetitor.company }})
              </h4>
            </b-col>
            <b-col>
              <h1 class="competition-headline">
                vs.
              </h1>
            </b-col>
            <b-col>
              <h1 class="competition-headline" :style="'font-family: Montserrat; color: '+SecondCompetitor.color+' !important;'">
                {{ SecondCompetitor.asset }}
              </h1>
              <h4 class="competition-sub">
                ({{ SecondCompetitor.company }})
              </h4>
            </b-col>
          </b-row>
        </b-container>
      </b-row>
      <b-container>
        <b-row class="mt-5">
          <b-col>
            <ZssChart
              :competitor-asset="FirstCompetitor.asset"
              :challenger-asset="SecondCompetitor.asset"
              :competitor-color="FirstCompetitor.color"
              :challenger-color="SecondCompetitor.color"
              :competitor-zss-data="FirstCompetitor.ZSS.score"
              :challenger-zss-data="SecondCompetitor.ZSS.score"
            />
          </b-col>
          <b-col>
            <MetricsChart
              :competitor-asset="FirstCompetitor.asset"
              :challenger-asset="SecondCompetitor.asset"
              :competitor-color="FirstCompetitor.color"
              :challenger-color="SecondCompetitor.color"
              :competitor-zti-data="FirstCompetitor.ZTI"
              :challenger-zti-data="SecondCompetitor.ZTI"
              :competitor-zsi-data="FirstCompetitor.ZSI"
              :challenger-zsi-data="SecondCompetitor.ZSI"
            />
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-card class="data-descriptor" title="ZSS Score">
              <p><b>The ZEN Smart Score™</b> (ZSS), is a custom dataset of aggregated LunarCrush powered social sentiment data. It is the combined metric of <b>ZTI</b> and <b>ZSI</b>. It is also the <u>soul determinator</u> of the competition. </p>
            </b-card>
            <br><br><br>
            <p>
              {{ FirstCompetitor.ZTI.tweets }}
              {{ FirstCompetitor.ZTI.tweetQuotes }}
              {{ FirstCompetitor.ZTI.retweets }}
              {{ FirstCompetitor.ZTI.replies }}
              {{ FirstCompetitor.ZTI.favorites }}
              {{ FirstCompetitor.ZTI.ts }}
              <br><br>
              ZTI score: {{ FirstCompetitor.ZTI.score }}
              <br><br><br>
              {{ FirstCompetitor.ZSI.sentiment4 }}
              {{ FirstCompetitor.ZSI.sentiment5 }}
              {{ FirstCompetitor.ZSI.socialContributors }}
              {{ FirstCompetitor.ZSI.ts }}   <br><br>
              ZSI score: {{ FirstCompetitor.ZSI.score }}
              <br><br><br>
              ZSS score: {{ FirstCompetitor.ZSS.score }}
            </p>
          </b-col>
          <b-col>
            <b-card class="data-descriptor" title="ZTI and ZSI Score">
              <p>The <b>ZEN Twitter Indicator™</b> (ZTI) is an aggregate of twitter activity over a selected digital asset. More specifically, it's an aggregate of <code>number of tweets</code>, <code>quoted retweets</code>, <code>retweets</code>, <code>replies</code> and <code>favorites</code>.<br><br> The <b>ZEN Sentiment Indicator™</b> (ZSI) score, is an aggregate of <i>"bullish"</i> sentiment around a digital asset, on twitter. It leverages <b>LunarCrush</b> powered deep learning algorithms and language processing to determine the social sentiment.</p>
            </b-card>
            <br><br><br>
            <p>
              {{ SecondCompetitor.ZTI.tweets }}
              {{ SecondCompetitor.ZTI.tweetQuotes }}
              {{ SecondCompetitor.ZTI.retweets }}
              {{ SecondCompetitor.ZTI.replies }}
              {{ SecondCompetitor.ZTI.favorites }}
              {{ SecondCompetitor.ZTI.ts }}
              <br><br>
              ZTI score: {{ SecondCompetitor.ZTI.score }}
              <br><br><br>
              {{ SecondCompetitor.ZSI.sentiment4 }}
              {{ SecondCompetitor.ZSI.sentiment5 }}
              {{ SecondCompetitor.ZSI.socialContributors }}
              {{ SecondCompetitor.ZSI.ts }}   <br><br>
              ZSI score: {{ SecondCompetitor.ZSI.score }}
              <br><br><br>
              ZSS score: {{ SecondCompetitor.ZSS.score }}
            </p>
            <br><br><br>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import ENV from '../components/env'

export default {
  data () {
    return {
      competitionStartDate: 1611324904, // Fri, 22 Jan 2021 14:15:04 GMT
      competitionEndDate: 1611584104, // Fri, 25 Jan 2021 14:15:04 GMT
      currentTime: Math.round((new Date()).getTime() / 1000),
      updateInterval: 60000, // 1 min
      winner: null,
      loser: null,
      competitionStatus: 'Competition hasn\'t started yet',
      errored: false,
      loading: false,
      FirstCompetitor: {
        asset: 'HTR',
        company: 'Hathor Network',
        color: '#8C46FF',
        ZTI: {
          tweets: [],
          tweetQuotes: [],
          retweets: [],
          replies: [],
          favorites: [],
          ts: [],
          score: 0
        },
        ZSI: {
          sentiment4: [],
          sentiment5: [],
          socialContributors: [],
          ts: [],
          score: 0

        },
        ZSS: {
          score: 0
        }
      },
      SecondCompetitor: {
        asset: 'QNT',
        company: 'Quant Network',
        color: '#46DEC9',
        ZTI: {
          tweets: [],
          tweetQuotes: [],
          retweets: [],
          replies: [],
          favorites: [],
          ts: [],
          score: 0
        },
        ZSI: {
          sentiment4: [],
          sentiment5: [],
          socialContributors: [],
          ts: [],
          score: 0

        },
        ZSS: {
          score: 0
        }
      },
      LcApiKey: '',
      ws: null,
      sentimentData: []
    }
  },
  computed: {
    competitionEnded () {
      return this.currentTime > this.competitionEndDate
    },
    competitionStarted () {
      return this.currentTime > this.competitionStartDate
    },
    competitionRunning () {
      return this.currentTime > this.competitionStartDate && this.currentTime < this.competitionEndDate
    }
  },
  created () {
    this.LcApiKey = ENV.LcApiKey
    if (this.competitionStarted && !this.competitionEnded) {
      this.initCompetition(this.FirstCompetitor, this.SecondCompetitor)
    }
    const self = this
    setInterval(function () {
      self.currentTime = Math.round((new Date()).getTime() / 1000)
    }, 1000)
  },

  methods: {
    initCompetition (competitor, challanger) {
      this.getHistoricalZtiData(competitor)
      this.getHistoricalZsiData(competitor)

      setInterval(() => this.getZtiData(competitor), this.updateInterval)
      setInterval(() => this.getZsiData(competitor), this.updateInterval)
      setInterval(() => this.aggregateScore(competitor), 5000)

      this.getHistoricalZtiData(challanger)
      this.getHistoricalZsiData(challanger)

      setInterval(() => this.getZtiData(challanger), this.updateInterval)
      setInterval(() => this.getZsiData(challanger), this.updateInterval)
      setInterval(() => this.aggregateScore(challanger), 5000)
    },
    async getHistoricalZtiData (competitor) {
      this.loading = true
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweets,tweet_quotes,tweet_retweets,tweet_replies,tweet_favorites'
      await this.$axios.$get(url, { progress: false }).then((response) => {
        response.data[0].timeSeries.forEach((value) => {
          competitor.ZTI.tweets.push(value.tweets)
          competitor.ZTI.tweetQuotes.push(value.tweet_quotes)
          competitor.ZTI.retweets.push(value.tweet_retweets)
          competitor.ZTI.replies.push(value.tweet_replies)
          competitor.ZTI.favorites.push(value.tweet_favorites)
          competitor.ZTI.ts.push(value.time)
        })
        return competitor
      }).catch((error) => {
        console.log(error)
        this.errored = true
      }).finally(() => {
        this.aggregateScore(competitor)
        this.loading = false
      })
    },
    async getZtiData (competitor) {
      this.loading = true
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweets,tweet_quotes,tweet_retweets,tweet_replies,tweet_favorites'
      await this.$axios.$get(url, { progress: false }).then((response) => {
        const timeSeries = response.data[0].timeSeries
        const timeSeriesLastObject = timeSeries[timeSeries.length - 1]
        // if not last item in ts array matches last ts in response: don't append data
        if (response.data[0].timeSeries.length <= 0) {
          return competitor
        } else if (timeSeriesLastObject.time !== competitor.ZTI.ts[competitor.ZTI.ts.length - 1]) {
          competitor.ZTI.tweets.push(timeSeriesLastObject.tweets)
          competitor.ZTI.tweetQuotes.push(timeSeriesLastObject.tweet_quotes)
          competitor.ZTI.retweets.push(timeSeriesLastObject.tweet_retweets)
          competitor.ZTI.replies.push(timeSeriesLastObject.tweet_replies)
          competitor.ZTI.favorites.push(timeSeriesLastObject.tweet_favorites)
          competitor.ZTI.ts.push(timeSeriesLastObject.time)
        }
        return competitor
      }).catch((error) => {
        console.log(error)
        this.errored = true
      }).finally(() => {
        this.aggregateScore(competitor)
        this.loading = false
      })
    },
    async getHistoricalZsiData (competitor) {
      this.loading = true
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweet_sentiment4,tweet_sentiment5,social_contributors'
      await this.$axios.$get(url, { progress: false }).then((response) => {
        response.data[0].timeSeries.forEach((value) => {
          competitor.ZSI.sentiment4.push(value.tweet_sentiment4)
          competitor.ZSI.sentiment5.push(value.tweet_sentiment5)
          competitor.ZSI.socialContributors.push(value.social_contributors)
          competitor.ZSI.ts.push(value.time)
        })
        return competitor
      }).catch((error) => {
        console.log(error)
        this.errored = true
      }).finally(() => {
        this.aggregateScore(competitor)
        this.loading = false
      })
    },
    async getZsiData (competitor) {
      this.loading = true
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweet_sentiment4,tweet_sentiment5,social_contributors'
      await this.$axios.$get(url, { progress: false }).then((response) => {
        const timeSeries = response.data[0].timeSeries
        const timeSeriesLastObject = timeSeries[timeSeries.length - 1]
        // if not last item in ts array matches last ts in response: don't append data
        if (response.data[0].timeSeries.length <= 0) {
          return competitor
        } else if (timeSeriesLastObject.time !== competitor.ZTI.ts[competitor.ZTI.ts.length - 1]) {
          competitor.ZSI.sentiment4.push(timeSeriesLastObject.tweet_sentiment4)
          competitor.ZSI.sentiment5.push(timeSeriesLastObject.tweet_sentiment5)
          competitor.ZSI.socialContributors.push(timeSeriesLastObject.social_contributors)
          competitor.ZSI.ts.push(timeSeriesLastObject.time)
        }
        return competitor
      }).catch((error) => {
        console.log(error)
        this.errored = true
      }).finally(() => {
        this.aggregateScore(competitor)
        this.loading = false
      })
    },
    aggregateScore (competitor) {
      let ZTIScore = 0
      let ZSIScore = 0
      // ts arrays are the same length for both ZTI and ZSI
      for (let i = 0; i < competitor.ZTI.ts.length; i++) {
        ZTIScore += competitor.ZTI.tweets[i] + competitor.ZTI.tweetQuotes[i] + competitor.ZTI.retweets[i] + competitor.ZTI.replies[i] + competitor.ZTI.favorites[i]
        ZSIScore += competitor.ZSI.sentiment4[i] + competitor.ZSI.sentiment5[i] + competitor.ZSI.socialContributors[i]
      }

      //   this.ZTI.score = this.ZTI.tweets + this.ZTI.tweetQuotes + this.ZTI.retweets + this.ZTI.replies + this.ZTI.favorites
      //   this.ZSI.score = this.ZSI.sentiment4 + this.ZSI.sentiment5 + this.ZSI.socialContributors
      competitor.ZTI.score = ZTIScore
      competitor.ZSI.score = ZSIScore
      competitor.ZSS.score = competitor.ZTI.score + competitor.ZSI.score
      return competitor
    }
  }
}
</script>

<style lang="scss">
h1.competition-headline {
    text-align: center;
    color: $dark !important;
    font-size: 7rem !important;
}

h4.competition-sub {
    text-align: center;
}

.data-descriptor {
    min-height: 19.5rem;
}

</style>
