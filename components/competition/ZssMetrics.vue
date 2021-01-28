<template>
  <div class="mb-5">
    <b-container>
      <b-card text-variant="white" :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'">
        <center>
          <h3>
            <b-row>
              <b-col>
                <b>{{ firstCompetitor.ZSS.score }}</b>
              </b-col>
              <b-col>
                ZSS
              </b-col>
              <b-col>
                <b>{{ roundNumber(secondCompetitor.ZSS.score / secondCompetitor.mcapDiff) }}</b>
              </b-col>
            </b-row>
          </h3>
        </center>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    firstCompetitor: { type: Object, default: null },
    secondCompetitor: { type: Object, default: null }
  },
  methods: {
    roundNumber (val) {
      return Number((val).toFixed(0))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
