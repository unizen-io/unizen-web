<template>
  <div>
    <horizontal-bar :chart-data="fillData" :styles="myStyles" :options="barChartOptions" />
  </div>
</template>

<script>
import HorizontalBar from '~/components/HorizontalBarChart'

export default {
  components: {
    HorizontalBar
  },
  props: {
    challengerMcapDiff: { type: Number, default: 0 },
    competitorZsiData: { type: Object, default: null },
    challengerZsiData: { type: Object, default: null },
    competitorZtiData: { type: Object, default: null },
    challengerZtiData: { type: Object, default: null },
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
          bodyFontStyle: 'bold',
          bodyFontFamily: 'Montserrat',
          bodyFontSize: 14,
          xPadding: 15,
          yPadding: 15,
          displayColors: false
        },
        legend: {
          display: false,
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
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  computed: {

    fillData () {
      const chartData = {
        labels: ['ZSI Score', 'ZTI Score'],
        datasets: [
          {
            borderWidth: 0,
            hoverBackgroundColor: '#00F5A4',
            // backgroundColor: ["red", "orange", "yellow"],
            label: this.competitorAsset,
            backgroundColor: this.competitorColor,
            data: [this.competitorZsiData.score, this.competitorZtiData.score]
          },
          {
            borderWidth: 0,
            hoverBackgroundColor: '#00F5A4',
            // backgroundColor: ["red", "orange", "yellow"],
            label: this.challengerAsset,
            backgroundColor: this.challengerColor,
            data: [Number((this.challengerZsiData.score / this.challengerMcapDiff).toFixed(0)), Number((this.challengerZtiData.score / this.challengerMcapDiff).toFixed(0))]
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
