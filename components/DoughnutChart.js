import { Doughnut } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  props: ['data', 'options', 'styles'],
  mounted () {
    this.renderChart(this.data, this.options, this.styles)
  }
}
