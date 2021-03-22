<template>
  <div class="mb-12">
    <div class="container mx-auto px-8">
      <b-card text-variant="white" :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'">
        <center>
          <h3 class="text-3xl">
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
    </div>
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
