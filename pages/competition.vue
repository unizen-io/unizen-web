<template>
  <div style="height: 1000px;" class="pt-5 mt-5">
    <b-container>
      <p v-for="sentiment in sentimentData" :key="sentiment.close">
        {{ sentiment.data }}
      </p>
    </b-container>
  </div>
</template>

<script>
import ENV from '../components/env'

export default {
  data () {
    return {
      LcApiKey: '',
      ws: null,
      sentimentData: []
    }
  },
  created () {
    this.LcApiKey = 'auth:' + ENV.LcApiKey
    this.connect()
  },

  methods: {
    connect () {
      this.ws = new WebSocket('wss://stream.lunarcrush.com/v2')

      this.ws.onopen = () => {
        this.ws.send(this.LcApiKey)

        this.ws.onerror = function (errorEvent) {
          console.log('WebSocket ERROR: ' + JSON.stringify(errorEvent, null, 4))
        }

        this.ws.onclose = function (e) {
          setTimeout(() => {
            this.connect()
          }, 100)
        }

        this.ws.onmessage = (e) => {
          this.sentimentData.push(e)
          const socketAPI = JSON.parse(e.data)

          if (socketAPI.authorized) {
            this.subscribe()
          }
        }
      }
    },
    subscribe () {
      this.ws.send('subscribe:btc,ltc:close/social_volume')
    }
  }
}
</script>

<style lang="scss">

</style>
