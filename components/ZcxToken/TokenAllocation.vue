<template>
  <div style="background-color: #EFEFEF;" class="mt-5">
    <b-container>
      <h1 class="common-headline mx-auto">
        Token Sale & Allocation.
      </h1>
      <b-row
        cols="1"
        cols-sm="1"
        cols-md="1"
        cols-lg="2"
      >
        <b-col>
          <div class="chart-container">
            <doughnut-chart :data="barChartData" :styles="myStyles" :options="barChartOptions" />
          </div>
        </b-col>
        <b-col>
          <div class="accordion" style="width: 100%;" role="tablist">
            <b-card v-for="(row, index) in tableData" :key="row.title" no-body class="mb-1">
              <b-card-header header-tag="header" :style="'background-color: '+barChartData.datasets[0].backgroundColor[index]+' !important;'" class="header-collapse p-1" role="tab">
                <b-button block class="allo-btn" @click="expanded=index">
                  {{ row.title }}
                </b-button>
              </b-card-header>
              <b-collapse :id="'accordionG'+index" role="tabpanel" :visible="index == expanded">
                <b-card-body>
                  <b-card-text>{{ row.content }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DoughnutChart from '~/components/DoughnutChart'

const chartColors = {
  color1: '#00afae',
  color2: '#00bdb1',
  color3: '#00cab1',
  color4: '#00d6b0',
  color5: '#00e2ad',
  color6: '#00efa8',
  color7: '#00f5a4'
}

export default {
  components: {
    DoughnutChart
  },
  data () {
    return {
      expanded: 0,
      tableData: [{ title: 'Team', content: 'Used for new hires and company expenses. Tokens are locked until May 2021 and vested Monthly for 10 Months.' },
        { title: 'Ecosystem Reserve / Security Insurance', content: 'Locked to circumvent cyber hack attempts or until DAO creation. Never sold on the open market.' },
        { title: 'Foundation', content: 'Consisting of Network Growth, Incubator Grants, Market Making & Marketing. 1st phase: 25,000 $USD equivalent at private sale pricing per month to facilitate high quality listings. This rolls over (month to month if not used). Listing decisions will be done in collaboration with a tier-one exchange. Activation begins 30 days after TGE.' },
        { title: 'Partners & Advisors', content: 'Tokens are locked until May 2021 and vested Monthly for 10 Months.' },
        { title: 'Seed', content: '12.5% of purchased tokens will be unlocked upon the TGE (Token Generation Event). 20% shall be unlocked every three months (90 days) thereafter, in arrears, over the remaining three quarters (270 days). 27.5% will become unlocked on the last tranche of release cycle (360 days after TGE).' },
        { title: 'Private Sale', content: 'Token allocations will be 25% per quarter for four quarters (270 days duration).' },
        { title: 'Strategic', content: 'Token allocations will be 25% per quarter for four quarters (270 days duration).' }],
      barChartData: {
        labels: ['Team', 'Ecosystem Reserve / Security Insurance', 'Foundation', 'Partners & Advisors', 'Seed', 'Private Sale', 'Strategic Sale'],
        datasets: [
          {
            borderWidth: 0,
            hoverBackgroundColor: '#00F5A4',
            // label: 'Income',
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [chartColors.color1, chartColors.color2, chartColors.color3, chartColors.color4, chartColors.color5, chartColors.color6, chartColors.color7],
            data: [20, 30, 28.5, 5.5, 5, 5, 6]
          }
        ]
      },
      myStyles: {
        height: '450px',
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
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              return data.labels[tooltipItem.index] + ': ' + data.datasets[0].data[tooltipItem.index] + '%'
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
        }
      }
    }
  }
}
</script>
<style lang="scss">
.chart-container {
  flex-grow: 1;
  min-height: 0;

  > div {
    position: relative;
    height: 100%;
  }
}
.header-collapse {
      /* Create the gradient. */
//   background-image: linear-gradient(to right bottom, #00afae, #00b6b0, #00bdb1, #00c3b1, #00cab1, #00d0b1, #00d6b0, #00dcaf, #00e2ad, #00e9ab, #00efa8, #00f5a4);
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
