<template>
  <div :class="['s_panel', isFullscreen ? 'fullscreen' : '']">
    <div class="panel_header" v-if="!hideTitle">
      <div class="title">
        {{ title }}
      </div>
      <div class="actions">
        <i
          :class="`sdevcore s-${isFullscreen ? 'quanping' : 'pingmuquanping'}`"
          @click="onFullChange"
        />
      </div>
    </div>
    <div class="panel_body">
      <slot name="body" />
    </div>
    <div class="panel_footer">
      <div class="footer_left">
        <slot name="footerLeft" />
      </div>
      <div class="footer_right">
        <slot name="footerRight" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SPanel",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    onFullChange() {
      this.isFullscreen = !this.isFullscreen;
      this.$emit("fullChange", this.isFullscreen);
    },
  },
};
</script>

<style lang="less" scoped>
.s_panel {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px #ddd;

  &.fullscreen {
    position: fixed;
    inset: 0;
  }

  .panel_header {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 14px;
      font-weight: bold;
    }

    .actions {
      * {
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
  }

  .panel_body {
    padding: 10px;
    height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .panel_footer {
    display: flex;
    padding: 10px;

    .footer_left,
    .footer_right {
      flex: 1;
    }

    .footer_left {
      display: flex;
      justify-content: flex-start;
    }

    .footer_right {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
