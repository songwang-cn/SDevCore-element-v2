<template>
  <div
    :class="['a-dialog-mask', isClosing && 'mask-closing']"
    @mouseup="dialogMouseUpEvent()"
    @mousemove="dialogMouseMoveEvent($event)"
  >
    <div
      :id="randId"
      :class="[
        'a-dialog',
        isFullScreen && 'fullscreen',
        isClosing && 'closing',
      ]"
      :style="{
        width,
        height,
        minWidth,
        minHeight,
        transform: 'translate(' + x + 'px, ' + y + 'px)',
      }"
    >
      <div
        class="a-dialog-header"
        @mousedown="dialogMouseDownEvent($event)"
        :style="{
          cursor: cursorRef,
        }"
      >
        <div class="title">{{ title }}</div>
        <div class="ctrl">
          <i class="el-icon-full-screen" @click="onFullScreen" />
          <i class="close el-icon-close" @click="onCancel" />
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
      <span slot="footer" class="a-dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onConfirm">确 定</el-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    width: {
      type: String,
      default: "50%",
    },
    height: {
      type: String,
      default: "50%",
    },
    minWidth: {
      type: String,
      default: "500px",
    },
    minHeight: {
      type: String,
      default: "500px",
    },
    fullable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      isMoving: false,
      isFullScreen: false,
      isClosing: false,
      randId: "id" + Number.parseInt((Math.random() * 999999999).toString()),
      cursorRef: "grab",
      x: 0,
      y: 0,
      startX: 0,
      startY: 0,
      trueWidth: 0,
      trueHeight: 0,
    };
  },
  methods: {
    onCancel() {
      this.$emit("onCancel");
      this.$emit("cancel");
    },
    async onConfirm() {
      this.$emit("onConfirm");
      this.$emit("confirm");
    },
    dialogMouseDownEvent(event) {
      if (this.isFullScreen) {
        return;
      }
      this.cursorRef = "grabbing";
      this.startX = event.clientX - this.x;
      this.startY = event.clientY - this.y;
      this.isMoving = true;
      this.trueWidth =
        window.innerWidth -
        document.querySelector(`#${this.randId}`).offsetWidth;
      this.trueHeight =
        window.innerHeight -
        document.querySelector(`#${this.randId}`).offsetHeight;
    },
    dialogMouseUpEvent() {
      if (this.isMoving) {
        this.cursorRef = "grab";
        this.isMoving = false;
      }
    },
    onFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    dialogMouseMoveEvent(event) {
      if (this.isMoving) {
        this.$nextTick(() => {
          this.x = event.clientX - this.startX;
          this.y = event.clientY - this.startY;
          if (this.x < (0 - this.trueWidth) / 2 + 10) {
            this.x = (0 - this.trueWidth) / 2;
          }
          if (this.x > this.trueWidth / 2 - 10) {
            this.x = this.trueWidth / 2;
          }
          if (this.y < (0 - this.trueHeight) / 2 + 10) {
            this.y = (0 - this.trueHeight) / 2;
          }
          if (this.y > this.trueHeight / 2 - 10) {
            this.y = this.trueHeight / 2;
          }
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.a-dialog-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes mask-fade-off {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &.mask-closing {
    animation: mask-fade-off 0.3s ease-in-out forwards;
  }

  @keyframes dialog-in {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes dialog-out {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.5);
    }
  }

  .a-dialog {
    animation: dialog-in 0.3s;
    background: #fff;
    max-width: 90%;
    max-height: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: min-width 0.2s, min-height 0.2s;
    border-radius: 6px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

    &.fullscreen {
      transform: translate(0, 0) !important;
      min-width: 100% !important;
      min-height: 100% !important;
      border-radius: 0;
    }

    &.closing {
      animation: dialog-out 0.3s;
    }

    .a-dialog-header {
      display: flex;
      padding: 12px 20px;
      justify-content: space-between;
      border-bottom: 1px solid #eee;

      .title {
        font-size: 16px;
        font-weight: bold;
      }

      .ctrl {
        cursor: pointer;
        i {
          font-size: 20px;
          margin-left: 10px;
        }
      }
    }

    .content {
      flex: 1;
      height: 0;
      padding: 10px 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .a-dialog-footer {
      padding: 20px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
