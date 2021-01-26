<template>
  <div>
    <b-row
      style="background: #EFEFEF; "
    >
      <b-container>
        <b-row
          class="py-5"
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
      </b-container>
    </b-row>

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
</template>

<script>
export default {
  props: {
    firstCompetitor: { type: Object, default: null },
    secondCompetitor: { type: Object, default: null },
    timer: { type: Object, default: null }
  }
}
</script>

<style lang="scss" scoped>

</style>
