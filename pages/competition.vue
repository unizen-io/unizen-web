<template>
  <div class="pt-4 mt-12">
    <center>
      <div class="mt-12 pt-12">
        <h5
          v-if="competitionResults"
          class="text-xl"
        >
          Competition Complete
        </h5>
        <h5
          v-if="competitionRunning"
          class="text-xl"
        >
          Competition Running
        </h5>
        <h5
          v-if="competitionEnded && !competitionResults"
          class="text-xl"
        >
          ☕ Calculating Final Results (Shouldn't take more than 10 minutes)...
        </h5>
        <h5
          v-if="!competitionStarted"
          class="text-xl"
        >
          Competition hasn't started yet
        </h5>
      </div>
    </center>
    <CompetitionHeader
      :timer="timeLeft"
      :first-competitor="FirstCompetitor"
      :second-competitor="SecondCompetitor"
      :competition-start-time="competitionStartDate"
      :competition-started="competitionStarted"
      :competition-ended="competitionEnded"
      :competition-results="competitionResults"
    />
    <div v-if="competitionStarted" class="space-y-12">
      <div
        style="background: #efefef;"
        class="container mx-auto px-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div class="mt-12 flex flex-wrap">
          <div class="px-4 w-full md:w-1/2">
            <ZssChart
              :competitor-asset="FirstCompetitor.asset"
              :challenger-asset="SecondCompetitor.asset"
              :competitor-color="FirstCompetitor.color"
              :challenger-color="SecondCompetitor.color"
              :competitor-zss-data="FirstCompetitor.ZSS.score"
              :challenger-zss-data="SecondCompetitor.ZSS.score"
              :challenger-mcap-diff="SecondCompetitor.mcapDiff"
            />
            <div
              style="margin-top: -230px; margin-bottom: 80px;"
              class="text-center"
            >
              <small>*Chart data updates every full hour</small>
            </div>
          </div>
          <div class="px-4 w-full md:w-1/2">
            <MetricsChart
              :competitor-asset="FirstCompetitor.asset"
              :challenger-asset="SecondCompetitor.asset"
              :competitor-color="FirstCompetitor.color"
              :challenger-color="SecondCompetitor.color"
              :competitor-zti-data="FirstCompetitor.ZTI"
              :challenger-zti-data="SecondCompetitor.ZTI"
              :competitor-zsi-data="FirstCompetitor.ZSI"
              :challenger-zsi-data="SecondCompetitor.ZSI"
              :challenger-mcap-diff="SecondCompetitor.mcapDiff"
            />
            <div
              style="margin-top: -230px; margin-bottom: 80px;"
              class="text-center"
            >
              <small>*Chart data updates every full hour</small>
            </div>
          </div>
        </div>
      </div>
      <ZtiMetrics
        :first-competitor="FirstCompetitor"
        :second-competitor="SecondCompetitor"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
      <ZsiMetrics
        :first-competitor="FirstCompetitor"
        :second-competitor="SecondCompetitor"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
      <ZssMetrics
        :first-competitor="FirstCompetitor"
        :second-competitor="SecondCompetitor"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
    </div>
    <div v-else style="padding-bottom: 200px;" />
    <br><br><br>
  </div>
</template>

<script>
import CompetitionHeader from '@/components/competition/CompetitionHeader'
import MetricsChart from '@/components/competition/MetricsChart'
import ZsiMetrics from '@/components/competition/ZsiMetrics'
import ZssChart from '@/components/competition/ZssChart'
import ZssMetrics from '@/components/competition/ZssMetrics'
import ZtiMetrics from '@/components/competition/ZtiMetrics'
import { createSEOTags } from '@/utils/helpers/seo'
import { LC_API_KEY } from '@/config'

export default {
  components: {
    CompetitionHeader,
    MetricsChart,
    ZsiMetrics,
    ZssChart,
    ZssMetrics,
    ZtiMetrics
  },

  data () {
    return {
      competitionStartDate: 1612378800, // Monday 25 January 2021 09:37:26
      competitionEndDate: 1612551600, // Monday 25 January 2021 12:37:26
      currentTime: Math.round((new Date()).getTime() / 1000),
      updateInterval: 60000, // 1 min
      winner: null,
      loser: null,
      competitionStatus: 'Competition hasn\'t started yet',
      errored: false,
      loading: false,
      FirstCompetitor: {
        asset: 'NOIA',
        company: 'Syntropy Network',
        color: '#171616',
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
        asset: 'DAG',
        company: 'Constellation Network',
        color: '#1B43B2',
        mcapDiff: 1.2, // Times difference in mcap
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
      timeLeft: {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
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
    competitionResults () {
      return this.currentTime > this.competitionEndDate + 480
    },
    competitionStarted () {
      return this.currentTime > this.competitionStartDate
    },
    competitionRunning () {
      return this.currentTime > this.competitionStartDate && this.currentTime < this.competitionEndDate
    }
  },
  watch: {
    competitionRunning (val) {
      if (val) {
        this.stopConfettiRain()
      }
    }
  },
  created () {
    this.LcApiKey = LC_API_KEY
    // if (this.competitionStarted && !this.competitionEnded) {
    this.initCompetition(this.FirstCompetitor, this.SecondCompetitor)
    // }
    const self = this
    setInterval(function () {
      self.currentTime = Math.round((new Date()).getTime() / 1000)
    }, 1000)
  },
  mounted () {
    setInterval(() => this.getTimer(), 1000)
    if (this.competitionResults) {
      this.startConfettiRain()
    }
    // if (this.currentTime > this.competitionEndDate) {
    //   this.startConfettiRain()
    // }
  },
  beforeDestroy () {
    this.$confetti.remove()
  },
  methods: {
    getTimer () {
    //   const date = new Date(this.competitionEndDate - this.currentTime * 1000)
      const days = Math.trunc((this.competitionEndDate - this.currentTime) / 60 / 60 / 24)
      // Hours part from the timestamp
      const hours = Math.trunc((this.competitionEndDate - this.currentTime) / 60 / 60) % 24
      // Minutes part from the timestamp
      const minutes = '0' + Math.trunc((this.competitionEndDate - this.currentTime) / 60) % 60
      // Seconds part from the timestamp
      const seconds = '0' + (this.competitionEndDate - this.currentTime) % 60

      // Will display time in 10:30:23 format
      this.timeLeft.days = days
      this.timeLeft.hours = hours
      this.timeLeft.minutes = minutes.substr(-2)
      this.timeLeft.seconds = seconds.substr(-2)
    },
    initCompetition (competitor, challanger) {
      this.getHistoricalZtiData(competitor)
      this.getHistoricalZsiData(competitor)

      this.getHistoricalZtiData(challanger)
      this.getHistoricalZsiData(challanger)

      setInterval(() => this.getZtiData(competitor), this.updateInterval)
      setInterval(() => this.getZsiData(competitor), this.updateInterval)
      setInterval(() => this.aggregateScore(competitor), this.updateInterval + 5000)

      setInterval(() => this.getZtiData(challanger), this.updateInterval)
      setInterval(() => this.getZsiData(challanger), this.updateInterval)
      setInterval(() => this.aggregateScore(challanger), this.updateInterval + 5000)
    },
    async getHistoricalZtiData (competitor) {
      this.loading = true
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + '&data_points=48time_series_indicators=tweets,tweet_quotes,tweet_retweets,tweet_replies,tweet_favorites'
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
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + '&data_points=48time_series_indicators=tweets,tweet_quotes,tweet_retweets,tweet_replies,tweet_favorites'
      await this.$axios.$get(url, { progress: false }).then((response) => {
        const timeSeries = response.data[0].timeSeries
        const timeSeriesLastObject = timeSeries[timeSeries.length - 1]
        // if last item in ts array matches last ts in response: append data
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
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + '&data_points=48time_series_indicators=tweet_sentiment4,tweet_sentiment5,social_contributors'
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
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + '&data_points=48time_series_indicators=tweet_sentiment4,tweet_sentiment5,social_contributors'
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
    },
    startConfettiRain () {
      this.$confetti.start()
    },
    stopConfettiRain () {
      this.$confetti.stop()
    }
  },
  head () {
    return createSEOTags({
      title: `Unizen: Smart Exchange Ecosystem - Competition ${this.FirstCompetitor.asset} vs ${this.SecondCompetitor.asset}`,
      description: `Listing competition between ${this.FirstCompetitor.asset} and ${this.SecondCompetitor.asset}`,
      slug: 'competition'
    })
  }
}
</script>
