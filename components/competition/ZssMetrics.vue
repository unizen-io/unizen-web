<template>
  <div class="container mx-auto px-8">
    <b-card text-variant="white" :style="'background-image: linear-gradient(to right,' + firstCompetitor.color + ',' + secondCompetitor.color + ') !important;'">
      <div class="text-3xl flex space-x-4 text-center">
        <div class="flex-1">
          <strong>{{ firstCompetitor.ZSS.score }}</strong>
        </div>
        <div class="flex-1">
          ZSS
        </div>
        <div class="flex-1">
          <strong>{{ roundNumber(secondCompetitor.ZSS.score / secondCompetitor.mcapDiff) }}</strong>
        </div>
      </div>
    </b-card>
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
