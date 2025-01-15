<template>
  <div ref="chart" :style="chartStyle" @mouseenter="hoverHandle" @mouseleave="leaveHandle"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'SChart',
  props: {
    /**
     * 图表配置项
     */
    option: {
      require: true,
    },
    /**
     * 是否开启tooltip自动轮播
     */
    animation: {
      type: Boolean,
      default: false,
    },
    /**
     * 宽度默认100%
     */
    width: {
      type: String,
      default: '100%',
    },
    /**
     * 高度默认100%
     */
    height: {
      type: String,
      default: '100%',
    },
    /**
     * 是否开启鼠标移入监听，开启时，鼠标在图表上时不触发图表更新
     */
    isEnableHoverState: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    option: {
      handler(option) {
        this.showOption = option
        this.refreshCharts()
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    chartStyle() {
      return {
        width: this.width,
        height: this.height,
      }
    },
  },
  data() {
    return {
      myChart: null,
      tipIndex: 0,
      interval: null,
      hoverState: false,
      showOption: {},
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeCharts)
    this.initCharts()
  },
  methods: {
    hoverHandle() {
      this.hoverState = true
      this.clearAni()
    },
    leaveHandle() {
      this.hoverState = false
      this.aniToolTip()
    },
    resizeCharts() {
      this.myChart.resize()
      console.log('resize  window')
    },
    initCharts() {
      this.myChart = echarts.init(this.$refs.chart, null, { devicePixelRatio: 2 })
      this.myChart.setOption(this.showOption, true)
      this.aniToolTip()
    },
    refreshCharts() {
      //hover状态下不刷新
      if (!this.isEnableHoverState || !this.hoverState) {
        this.resizeCharts()
        // this.myChart.clear();
        this.myChart.setOption(this.showOption, true)
        this.tipIndex = this.tipIndex > 0 ? this.tipIndex - 1 : 0
        this.aniToolTip()
      }
    },
    aniToolTip() {
      if (this.animation) {
        this.clearAni()
        this.loopAniFun()
        this.interval = setInterval(() => {
          this.loopAniFun()
        }, 5000 - Math.random() * 1000)
      }
    },
    loopAniFun() {
      this.myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0, // 针对series下第几个数据
        dataIndex: this.tipIndex, // 第几个数据
      })
      this.tipIndex++
      try {
        if (this.tipIndex >= this.showOption.series[0].data.length) {
          this.tipIndex = 0
        }
      } catch (e) {
        // debugger
      }
    },
    clearAni() {
      // debugger
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeCharts)
    this.clearAni()
  },
}
</script>

<style scoped></style>
