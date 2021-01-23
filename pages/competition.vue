<template>
  <div style="height: 1000px;" class="pt-5 mt-5">
    <b-container>
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
    </b-container>
  </div>
</template>

<script>
import ENV from '../components/env'

export default {
  data () {
    return {
      competitionStartDate: 1611324904, // Fri, 22 Jan 2021 14:15:04 GMT
      competitionEndDate: 1611584104, // Fri, 25 Jan 2021 14:15:04 GMT
      updateInterval: 10000, // 1 sec
      errored: false,
      loading: false,
      FirstCompetitor: {
        asset: 'LTC',
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
        asset: 'BTC',
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
  created () {
    this.LcApiKey = ENV.LcApiKey
    this.initCompetition(this.FirstCompetitor, this.SecondCompetitor)
  },

  methods: {
    initCompetition (competitor, challanger) {
      this.getHistoricalZtiData(competitor)
      this.getHistoricalZsiData(competitor)
      this.aggregateScore(competitor)
      setInterval(() => this.getZtiData(competitor), this.updateInterval)
      setInterval(() => this.getZsiData(competitor), this.updateInterval)
      setInterval(() => this.aggregateScore(competitor), 1000)

      this.getHistoricalZtiData(challanger)
      this.getHistoricalZsiData(challanger)
      this.aggregateScore(challanger)
      setInterval(() => this.getZtiData(challanger), this.updateInterval)
      setInterval(() => this.getZsiData(challanger), this.updateInterval)
      setInterval(() => this.aggregateScore(challanger), 1000)
    },
    async getHistoricalZtiData (competitor) {
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweets,tweet_quotes,tweet_retweets,tweet_replies,tweet_favorites'
      await this.$axios.$get(url).then((response) => {
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
      }).finally(() => { this.loading = false })
    },
    async getZtiData (competitor) {
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweets,tweet_quotes,tweet_retweets,tweet_replies,tweet_favorites'
      await this.$axios.$get(url).then((response) => {
        const timeSeries = response.data[0].timeSeries
        const timeSeriesLastObject = timeSeries[timeSeries.length - 1]
        // if not last item in ts array matches last ts in response: don't append data
        if (timeSeriesLastObject.time !== competitor.ZTI.ts[competitor.ZTI.ts.length - 1]) {
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
      }).finally(() => { this.loading = false })
    },
    async getHistoricalZsiData (competitor) {
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweet_sentiment4,tweet_sentiment5,social_contributors'
      await this.$axios.$get(url).then((response) => {
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
      }).finally(() => { this.loading = false })
    },
    async getZsiData (competitor) {
      const url = 'https://api.lunarcrush.com/v2?data=assets&key=' + this.LcApiKey + '&symbol=' + competitor.asset + '&start=' + this.competitionStartDate + '&end=' + this.competitionEndDate + 'time_series_indicators=tweet_sentiment4,tweet_sentiment5,social_contributors'
      await this.$axios.$get(url).then((response) => {
        const timeSeries = response.data[0].timeSeries
        const timeSeriesLastObject = timeSeries[timeSeries.length - 1]
        // if not last item in ts array matches last ts in response: don't append data
        if (timeSeriesLastObject.time !== competitor.ZTI.ts[competitor.ZTI.ts.length - 1]) {
          competitor.ZSI.sentiment4.push(timeSeriesLastObject.tweet_sentiment4)
          competitor.ZSI.sentiment5.push(timeSeriesLastObject.tweet_sentiment5)
          competitor.ZSI.socialContributors.push(timeSeriesLastObject.social_contributors)
          competitor.ZSI.ts.push(timeSeriesLastObject.time)
        }
        return competitor
      }).catch((error) => {
        console.log(error)
        this.errored = true
      }).finally(() => { this.loading = false })
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

</style>
