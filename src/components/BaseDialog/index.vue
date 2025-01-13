<template>
  <div>
    <transition mode="out-in" name="fade" appear>
      <div class="masking" v-show="dialogVisable" @click="handleClose">
        <div class="base_dialog" @click.stop="stopPop">
          <div class="head">
            <span>{{title}}</span>
            <span @click.prevent="handleClose">x</span>
          </div>
          <div class="content">
            <div class="body">
              <slot>{{content}}</slot>
            </div>
            <slot name='foot' v-if="hasFoot">
              <div class="foot">
                <button @click.prevent="$emit('confirm')" :style="confirmStyle">{{confirmText}}</button>
                <button @click.prevent="$emit('cancle')" :style="cancleStyle">{{cancleText}}</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
/**
 * 弹窗组件-默认插槽为中间内容区
 * 接收数据
 * @dialogVisable   弹窗可见性
 * @title           弹窗标题
 * @content         内容区文字
 * @hasFoot         是否展示foot，可通过具名插槽name=foot替换foot内容
 * @confirmText     确认按钮文字
 * @cancleText      取消按钮文字
 * @confirmColor    确认按钮颜色
 * @cancleColor     取消按钮颜色
 * 可监听事件
 * @confirm         点击确定按钮
 * @cancle          点击取消按钮
 * @close           点击关闭图标
 */
export default {
  props: {
    dialogVisable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: String,
      default: "是否确定进行此操作?",
    },
    confirmText: {
      type: String,
      default: "确定",
    },
    cancleText: {
      type: String,
      default: "取消",
    },
    confirmColor: {
      type: String,
      default: "#f39800",
    },
    cancleColor: {
      type: String,
      default: "#fff",
    },
    hasFoot: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    confirmStyle() {
      return `background-color: ${this.confirmColor};`;
    },
    cancleStyle() {
      return `background-color: ${this.cancleColor};`;
    },
  },
  methods: {
    handleClose(e) {
      this.$emit("update:dialogVisable", false);
    },
    stopPop() {
      return;
    },
  },
};
</script>
<style lang="less" scoped>
.base_dialog {
  display: inline-block;
  min-width: 600px;
  border-radius: 10px;
  background-color: #fff;
  .head {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .content {
    padding: 50px;
    .body {
      margin-bottom: 30px;
    }
    .foot {
      display: flex;
      justify-content: flex-end;
      button {
        width: 88px;
        height: 35px;
        margin-right: 20px;
        border: 1px solid #ccc;
        &:nth-child(1) {
          border: unset;
          color: #fff;
        }
      }
    }
  }
}
.masking {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>