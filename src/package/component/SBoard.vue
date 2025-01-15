<template>
  <div class="wrapper">
    <div
      class="screen"
      ref="screen"
      :style="{
        width: `${pixelRatio * 1920}px`,
        backgroundImage: `url(${backgroundImg})`,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "SBoard",
  props: {
    /**
     * 享受宽高比例
     * 1 代表 1920 : 1080
     * 1.5 则代表 (1920 * 3) : (1080 : 2)
     * 2 则代表 (1920 * 2) : 1080
     * ...以此类推
     */
    pixelRatio: {
      type: Number,
      default: 1,
    },
    backgroundImg: {
      type: Object,
      default: "",
    },
  },
  mounted() {
    this.calcSize();
  },
  methods: {
    calcSize() {
      this.analysisScreenSize();
      window.onresize = () => {
        this.analysisScreenSize();
      };
    },
    analysisScreenSize() {
      const standardHeight = 1080;
      const screenHeight = window.innerHeight;
      const scale = screenHeight / standardHeight;
      this.$refs.screen.style.transform = `scale(${scale}) translate(-50%, -50%)`;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 1000;

  .screen {
    height: 1080px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(1);
    background: #f1f1f1;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: all 100ms;
    transform-origin: left top;
  }
}
</style>
