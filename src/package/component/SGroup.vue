<template>
  <div class="air-group" :class="autoHeight ? 'auto-height' : ''">
    <div v-if="title" class="group-title">
      <div class="left">
        <div class="title">
          {{ title }}
          <slot name="tips" />
        </div>
        <div class="custom">
          <slot name="custom" />
        </div>
      </div>
      <div v-if="!disableCollapse" class="expand">
        <i @click="isCollapse = !isCollapse" :class="`el-icon-arrow-${isCollapse ? 'right' : 'down'}`" />
      </div>
    </div>
    <div v-show="!isCollapse" class="group-body" :class="getBodyClass()">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SGroup',
  props: {
    /**
     * # 分组标题
     */
    title: {
      type: String,
      default: '',
    },

    /**
     * # 列数 1-3
     */
    column: {
      type: Number,
      default: 1,
    },


    /**
     * # 自适应高度
     */
    autoHeight: {
      type: Boolean,
      default: false,
    },

    /**
     * # 是否禁用展开收起
     */
    disableCollapse: {
      type: Boolean,
      default: false,
    },

    /**
     * # 是否默认收起
     */
    collapse: {
      type: Boolean,
      dafault: false,
    },
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    getColumn() {
      if (!this.column || this.column < 1) {
        return 1
      }
      if (this.column > 4) {
        return 4
      }
      return this.column
    },
    init() {
      this.isCollapse = this.collapse
    },
    getBodyClass() {
      let cls = ''
      if (this.flexColumn) {
        return `column-1 flex-column`
      } else {
        cls += `column-${this.getColumn()} `
        return cls
      }
    },
  },
}
</script>

<style lang="less">
.air-group {
  display: flex;
  flex-direction: column;
  background: #fff;

  .group-body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px;

    .el-cascader,
    .el-select {
      width: 100%;
    }
  }

  .column-1 > * {
      width: 100%;
    }
  

  .column-2 {
    display: flex;
    flex-direction: row;

    > * {
      width: 46%;
      margin: 10px 2%;
    }
  }

  .column-3 {
    display: flex;
    flex-direction: row;

    > * {
      width: 29.3333333%;
      margin: 10px 2%;
    }
  }

  .column-4 {
    display: flex;
    flex-direction: row;

    > * {
      width: 25%;
      margin: 10px 0;
    }
  }

  .group-title {
    font-size: 16px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    background: #fff;

    .left {
      flex: 1;
      font-weight: 400;
      display: flex;
      flex-direction: row;

      .title {
        flex: 1;
        width: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    .expand {
      .el-icon {
        cursor: pointer;
        padding-left: 10px;
        padding-right: 5px;
        transition: color 0.3s;

        &:hover {
          color: var(--primaryColor);
        }
      }
    }
  }
}

.air-group.auto-height {
  flex: 1;
  height: 0;
  margin-bottom: 0px;

  .group-body {
    flex: 1;
    height: 0;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
