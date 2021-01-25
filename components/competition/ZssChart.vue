<template>
  <div>
    <bar-chart :chart-data="fillData" :styles="myStyles" :options="barChartOptions" />
  </div>
</template>

<script>
import BarChart from '~/components/BarChart'

export default {
  components: {
    BarChart
  },
  props: {
    challengerMcapDiff: { type: Number, default: 0 },
    competitorZssData: { type: Number, default: 50 },
    challengerZssData: { type: Number, default: 50 },
    competitorAsset: { type: String, default: 'No Competitor' },
    challengerAsset: { type: String, default: 'No Challenger' },
    competitorColor: { type: String, default: '#00afae' },
    challengerColor: { type: String, default: '#00e2ad' }
  },

  data () {
    return {
      chartData: null,
      myStyles: {
        height: '400px',
        marginTop: '250px',
        marginBottom: '-150px',
        width: '100%',
        position: 'relative'
      },
      barChartOptions: {
        animation: {
          duration: 3000
        },
        cutoutPercentage: 60,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] + ' ZSS'
            }
          },
          bodyFontStyle: 'bold',
          bodyFontFamily: 'Montserrat',
          bodyFontSize: 14,
          xPadding: 15,
          yPadding: 15,
          displayColors: false
        },
        legend: {
          display: true,
          labels: {
            boxWidth: 12,
            padding: 30,
            fontFamily: 'Montserrat Medium',
            fontSize: 14,
            fontStyle: 'normal'
          },

          position: 'bottom',
          align: 'center'
        },
        scales: {
          ticks: {
            precision: 0
          }

        }
      }
    }
  },
  computed: {
    fillData () {
      const chartData = {
        labels: [this.challengerAsset, this.competitorAsset],
        datasets: [
          {
            borderWidth: 0,
            hoverBackgroundColor: '#00F5A4',
            // label: 'Income',
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [this.challengerColor, this.competitorColor],
            data: [Number((this.challengerZssData / this.challengerMcapDiff).toFixed(0)), this.competitorZssData]
          }
        ]
      }
      return chartData
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
