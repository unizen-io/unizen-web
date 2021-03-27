<template>
  <div>
    <div class="container mx-auto px-8">
      <h1 class="common-headline mx-auto">
        Token Release Schedule.
      </h1>
      <div id="line">
        <line-chart
          :styles="myStyles"
          :options="barChartOptions"
        />
      </div>
      <br><br><br>
    </div>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      gradient: null,
      myStyles: {
        height: '400px',
        marginTop: '250px',
        marginBottom: '-150px',
        width: '100%',
        position: 'relative'
      },
      barChartOptions: {
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
              return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] / 1000000 + 'm'
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
          position: 'none',
          display: false,
          labels: {
            boxWidth: 12,
            padding: 30,
            fontFamily: 'Montserrat Medium',
            fontSize: 14,
            fontStyle: 'normal'
          },
          align: 'center'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                callback (label, index, labels) {
                  return label / 1000000 + 'm'
                },
                fontFamily: 'Montserrat',
                fontColor: '#556F7B',
                fontStyle: 'bold',
                beginAtZero: true,
                maxTicksLimit: 20,
                fixedStepSize: 0,
                suggestedMax: 1000000000,
                padding: 20
              },
              gridLines: {
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                zeroLineColor: 'transparent'
              },
              ticks: {
                padding: 20,
                fontColor: '#556F7B',
                fontStyle: 'bold',
                fontFamily: 'Montserrat'
              }
            }
          ]
        }
      }
    }
  }
}
</script>
<style lang="scss">
.one-year-box {
  // ray test touch <
  border-bottom: 3px $primary solid;
  border-right: 3px $primary solid;
  border-left: 3px $primary solid;
  // ray test touch >
  margin-left: 10px;
  margin-right: 10px;
  height: 20px;
  margin-top: -40px;
  margin-bottom: 20px;
}

.header-collapse {
  /* Create the gradient. */
  // background-image: linear-gradient(to right bottom, #00afae, #00b6b0, #00bdb1, #00c3b1, #00cab1, #00d0b1, #00d6b0, #00dcaf, #00e2ad, #00e9ab, #00efa8, #00f5a4);
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;
}

.allo-btn {
  background: none !important;
  border: none !important;
  font-weight: bold !important;
  color: $dark !important;
}
.allo-btn:after {
  background: none !important;
  border: none !important;
}
.allo-btn:hover {
  background: none !important;
  border: none !important;
  opacity: 0.8;
}
</style>
