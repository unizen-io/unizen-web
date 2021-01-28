import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['options'],
  data () {
    return {
      gradient: null
    }
  },
  mounted () {
    const chartColors = {
      color1: '#00afae',
      color2: '#00bdb1',
      color3: '#00cab1',
      color4: '#00d6b0',
      color5: '#00e2ad',
      color6: '#00efa8',
      color7: '#00f5a4'
    }

    // const ctx = document.getElementById('line').getContext('2d')
    // const width = window.innerWidth || document.body.clientWidth
    // const gradientStroke = ctx.createLinearGradient(0, 0, width, 0)

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(500, 0, 100, 0)

    this.gradient.addColorStop(0, chartColors.color1)
    this.gradient.addColorStop(0.1, chartColors.color2)
    this.gradient.addColorStop(0.2, chartColors.color3)
    this.gradient.addColorStop(0.4, chartColors.color4)
    this.gradient.addColorStop(0.5, chartColors.color5)
    this.gradient.addColorStop(0.8, chartColors.color6)
    this.gradient.addColorStop(0.9, chartColors.color7)
    this.renderChart({
      labels: ['Jan',
        'Feb',
        'Mar',
        'April',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'],
      datasets: [
        {
          // label: yLabel,
          borderColor: this.gradient,
          pointBorderColor: this.gradient,
          pointBackgroundColor: this.gradient,
          pointHoverBackgroundColor: this.gradient,
          pointHoverBorderColor: this.gradient,
          pointBorderWidth: 8,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 4,
          data: [33750000,
            36600000,
            39450000,
            79800000,
            108150000,
            136500000,
            202350000,
            230700000,
            259050000,
            324900000,
            353250000,
            381600000,
            423700000,
            452050000,
            454900000,
            457750000,
            460600000,
            463450000,
            466300000,
            469150000,
            472000000,
            474850000,
            477700000,
            480550000]
        }
      ]
    }, this.options)
  }
}
