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
                  <b>{{ firstCompetitor.ZTI.score }}</b>
                </h2>
                <div class="w100" />
                ZTI SCORE
              </center>
            </b-card>
            <br>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalTweetsFirstCompetitor }}</b> tweets
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalTweetQuotesFirstCompetitor }}</b> quoted retweets
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalRetweetsFirstCompetitor }}</b> retweets
            </b-list-group-item>
            <!-- <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalFavoritesFirstCompetitor }}</b> starred tweets
            </b-list-group-item> -->
            <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
              <b>{{ totalRepliesFirstCompetitor }}</b> tweet replies
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
                  <b>{{ roundNumber(secondCompetitor.ZTI.score / secondCompetitor.mcapDiff) }}</b>
                </h2>
                <div class="w100" />
                ZTI SCORE
              </center>
            </b-card>
            <br>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalTweetsSecondCompetitor }}</b> tweets
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalTweetQuotesSecondCompetitor }}</b> quoted retweets
            </b-list-group-item>
            <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalRetweetsSecondCompetitor }}</b> retweets
            </b-list-group-item>
            <!-- <b-list-group-item class="bg-white bg-opacity-20">
              <b>{{ totalFavoritesSecondCompetitor }}</b> starred tweets
            </b-list-group-item> -->
            <b-list-group-item class="bg-white bg-opacity-20 rounded-b">
              <b>{{ totalTweetRepliesSecondCompetitor }}</b> tweet replies
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
    totalTweetsFirstCompetitor () {
      let totalTweets = 0
      for (let i = 0; i < this.firstCompetitor.ZTI.ts.length; i++) {
        totalTweets += this.firstCompetitor.ZTI.tweets[i]
      }
      return totalTweets
    },
    totalTweetsSecondCompetitor () {
      let totalTweets = 0
      for (let i = 0; i < this.secondCompetitor.ZTI.ts.length; i++) {
        totalTweets += this.secondCompetitor.ZTI.tweets[i]
      }
      return this.roundNumber(totalTweets / this.secondCompetitor.mcapDiff)
    },
    totalTweetQuotesFirstCompetitor () {
      let totalTweetQuotes = 0
      for (let i = 0; i < this.firstCompetitor.ZTI.ts.length; i++) {
        totalTweetQuotes += this.firstCompetitor.ZTI.tweetQuotes[i]
      }
      return totalTweetQuotes
    },
    totalTweetQuotesSecondCompetitor () {
      let totalTweetQuotes = 0
      for (let i = 0; i < this.secondCompetitor.ZTI.ts.length; i++) {
        totalTweetQuotes += this.secondCompetitor.ZTI.tweetQuotes[i]
      }
      return this.roundNumber(totalTweetQuotes / this.secondCompetitor.mcapDiff)
    },
    totalTweetRepliesFirstCompetitor () {
      let totalTweetReplies = 0
      for (let i = 0; i < this.firstCompetitor.ZTI.ts.length; i++) {
        totalTweetReplies += this.firstCompetitor.ZTI.replies[i]
      }
      return totalTweetReplies
    },
    totalTweetRepliesSecondCompetitor () {
      let totalTweetReplies = 0
      for (let i = 0; i < this.secondCompetitor.ZTI.ts.length; i++) {
        totalTweetReplies += this.secondCompetitor.ZTI.replies[i]
      }
      return this.roundNumber(totalTweetReplies / this.secondCompetitor.mcapDiff)
    },
    totalRetweetsFirstCompetitor () {
      let totalRetweets = 0
      for (let i = 0; i < this.firstCompetitor.ZTI.ts.length; i++) {
        totalRetweets += this.firstCompetitor.ZTI.retweets[i]
      }
      return totalRetweets
    },
    totalRetweetsSecondCompetitor () {
      let totalRetweets = 0
      for (let i = 0; i < this.secondCompetitor.ZTI.ts.length; i++) {
        totalRetweets += this.secondCompetitor.ZTI.retweets[i]
      }
      return this.roundNumber(totalRetweets / this.secondCompetitor.mcapDiff)
    },
    totalRepliesFirstCompetitor () {
      let totalReplies = 0
      for (let i = 0; i < this.firstCompetitor.ZTI.ts.length; i++) {
        totalReplies += this.firstCompetitor.ZTI.replies[i]
      }
      return totalReplies
    },
    totalRepliesSecondCompetitor () {
      let totalReplies = 0
      for (let i = 0; i < this.secondCompetitor.ZTI.ts.length; i++) {
        totalReplies += this.secondCompetitor.ZTI.replies[i]
      }
      return this.roundNumber(totalReplies / this.secondCompetitor.mcapDiff)
    },
    totalFavoritesFirstCompetitor () {
      let totalFavorites = 0
      for (let i = 0; i < this.firstCompetitor.ZTI.ts.length; i++) {
        totalFavorites += this.firstCompetitor.ZTI.favorites[i]
      }
      return totalFavorites
    },
    totalFavoritesSecondCompetitor () {
      let totalFavorites = 0
      for (let i = 0; i < this.secondCompetitor.ZTI.ts.length; i++) {
        totalFavorites += this.secondCompetitor.ZTI.favorites[i]
      }
      return this.roundNumber(totalFavorites / this.secondCompetitor.mcapDiff)
    }
  },
  methods: {
    roundNumber (val) {
      return Number((val).toFixed(0))
    }
  }
}
</script>
