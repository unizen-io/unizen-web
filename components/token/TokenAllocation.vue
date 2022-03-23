<template>
  <div style="background-color: #efefef;" class="mt-12">
    <div class="container px-8 pb-12 mx-auto mb-12">
      <h1
        class="pt-16 pb-24 mx-auto text-center text-tertiary"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        Token Sale & Allocation.
      </h1>
      <div class="flex flex-wrap">
        <div
          class="w-full px-4 lg:w-1/2"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <doughnut-chart :data="barChartData" :styles="myStyles" :options="barChartOptions" />
          <div
            style="margin-top: -230px; margin-bottom: 80px;"
            class="mb-12 text-center"
          >
            <small>Click a section of the chart more details.</small>
          </div>
        </div>
        <div
          class="w-full px-4 accordion lg:w-1/2"
          role="tablist"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          <b-card
            v-for="(row, index) in tableData"
            :key="row.title"
            no-body
            class="mb-1 shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur"
          >
            <b-card-header
              header-tag="header"
              :style="'background-color: ' + barChartData.datasets[0].backgroundColor[index] + ' !important;'"
              class="p-1"
              role="tab"
            >
              <b-button
                block
                style="background: none !important; border: none !important;"
                class="font-bold hover:opacity-80 text-tertiary"
                @click="expanded=index"
              >
                {{ row.title }}
              </b-button>
            </b-card-header>
            <b-collapse
              :id="'accordionG' + index"
              role="tabpanel"
              :visible="index == expanded"
            >
              <b-card-body>
                <b-card-text style="white-space: pre-line;">
                  {{ row.content }}
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
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
      tableData: [{ title: 'Team', content: 'Used for the founding team and future senior hires. Tokens have remained locked since TGE and will only be managed sold when vested.' },
        { title: 'Ecosystem Reserve / Security Insurance', content: 'Tokens allocated to protect the interest of the ZCX token holders in the event of an exchange hack. Reserve tokens will provide liquidity to the DAO upon its future creation. ' },
        { title: 'Foundation', content: 'Tokens will be utilized for liquidity provisioning, marketing initiatives, operations, and overall expansion of the Zen ecosystem.' },
        { title: 'Partners & Advisors', content: 'Used for advisors to Unizen and ZenX Labs and strategic partners. Tokens have remained locked since TGE and will be managed sold when vested and released.' },
        { title: 'Seed', content: '12.5% of purchased tokens will be unlocked upon the TGE (Token Generation Event).' + '\n\n' + '20% shall be unlocked every three months (90 days) thereafter, in arrears, over the remaining three quarters (270 days).' + '\n\n' + ' 27.5% will become unlocked on the last tranche of release cycle (360 days after TGE).' },
        { title: 'Strategic', content: '25% tokens released up to 14 days after TGE and additional 25% per quarter for three quarters (270 days duration).' },
        { title: 'Private Sale', content: '25% tokens released up to 14 days after TGE and additional 25% per quarter for three quarters (270 days duration).' }
      ],
      barChartData: {
        labels: ['Team', 'Ecosystem Reserve / Security Insurance', 'Foundation', 'Partners & Advisors', 'Seed', 'Strategic Sale', 'Private Sale'],
        datasets: [
          {
            borderWidth: 0,
            hoverBackgroundColor: '#00f5a4',
            // label: 'Income',
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [chartColors.color1, chartColors.color2, chartColors.color3, chartColors.color4, chartColors.color5, chartColors.color6, chartColors.color7],
            data: [20, 30, 28.5, 5.5, 5, 5, 6]
          }
        ]
      },
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
