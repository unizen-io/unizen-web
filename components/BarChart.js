import { Doughnut, mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
