<template>
  <div
    class="common-table"
    v-loading="loading"
    :style="{ height: autoHeight ? 'auto' : 0 }"
  >
    <div class="table-header" v-if="$slots.tableHeader">
      <slot name="tableHeader" />
    </div>
    <el-table
      ref="tableRef"
      size="medium"
      row-key="id"
      :data="data"
      height="100%"
      :tree-props="{ children: 'children' }"
      @select="selectChanged"
      @select-all="selectChanged"
    >
      <el-table-column
        v-if="!hideSelect"
        type="selection"
        width="50"
        fixed="left"
        align="center"
        :reserve-selection="true"
      />
      <el-table-column
        v-if="!hideIndex"
        :sortable="false"
        label="序号"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        v-for="(column, index) of columns"
        :prop="column.key"
        :label="column.label"
        :key="column.key + index"
        :width="column.width || 'auto'"
        :min-width="column.width || 120"
        :sortable="false"
      >
        <template slot-scope="scope">
          <slot :name="column.key" :data="scope.row">
            <!-- formatter 时间类型格式化标识 -->
            <span v-if="column.formatter">
              {{ formatTime(scope.row[column.key], column.formatter) }}
            </span>
            <!-- enumRecord 枚举类标识 -->
            <span
              v-else-if="column.enumRecord"
              :class="[column.showLight ? 'show-light' : '']"
            >
              <i
                class="light"
                :style="{
                  background: $EnumHelper.getColor(
                    column.enumRecord,
                    scope.row[column.key]
                  ),
                }"
              />
              {{
                $EnumHelper.getLabel(column.enumRecord, scope.row[column.key])
              }}
            </span>
            <!--默认列 -->
            <span v-else>{{ scope.row[column.key] || "--" }}</span>
          </slot>
        </template>
      </el-table-column>
      <el-table-column
        :sortable="false"
        label="操作"
        :width="ctrlWidth"
        fixed="right"
        v-if="!hideCtrl"
      >
        <template slot-scope="scope">
          <span class="actions">
            <slot name="actionBefore" :data="scope.row" :index="scope.$index" />
            <el-button v-if="!hideEdit" type="text" @click="onEdit(scope.row)">
              {{ editStr }}
            </el-button>
            <el-button
              v-if="showDetail"
              type="text"
              @click="onDetail(scope.row)"
            >
              {{ detailStr }}
            </el-button>
            <el-button
              type="text"
              v-if="!hideDelete"
              @click="onDelete(scope.row)"
            >
              {{ deleteStr }}
            </el-button>
            <slot name="actionEnd" :data="scope.row" :index="scope.$index" />
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="tableFooter" v-if="$slots.tableFooter">
      <slot name="tableFooter" />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "STable",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * # 是否隐藏序号列
     */
    hideIndex: {
      type: Boolean,
      default: false,
    },
    /**
     * # 是否隐藏多选框
     */
    hideSelect: {
      type: Boolean,
      default: false,
    },
    hideDelete: {
      type: Boolean,
      default: false,
    },
    showDetail: {
      type: Boolean,
      default: false,
    },
    hideEdit: {
      type: Boolean,
      default: false,
    },
    hideCtrl: {
      type: Boolean,
      default: false,
    },
    ctrlWidth: {
      type: Number,
      default: 140,
    },
    editStr: {
      type: String,
      default: "编辑",
    },
    detailStr: {
      type: String,
      default: "详情",
    },
    deleteStr: {
      type: String,
      default: "删除",
    },
    autoHeight: {
      type: Boolean,
      default: false,
    },
    selectList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    formatTime(time, formatter) {
      return dayjs(time).format(formatter);
    },
    selectChanged(list) {
      // 保持其他页码数据的选中状态，因为list只会返回当前页选中数据
      const otherPage = (this.selectList || []).filter(
        (item) => this.data?.findIndex((v) => v.id === item.id) === -1
      );
      const selectAll = list.concat(otherPage);
      this.$emit("onSelect", selectAll);
      this.$emit("select", selectAll);
    },
    onEdit(row) {
      this.$emit("edit", row);
    },
    onDetail(row) {
      this.$emit("detail", row);
    },
    onDelete(row) {
      this.$emit("delete", row);
    },
  },
};
</script>

<style lang="less" scoped>
.common-table {
  flex: 1;
  height: 0;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  .table-header {
    padding-bottom: 10px;

    .el-button {
      margin-left: 0;
      margin-right: 6px;
    }
  }

  .tableFooter {
    display: flex;
    padding: 5px 0;
    justify-content: flex-end;
  }

  .el-table {
    height: 0;
    flex: 1;
    overflow-y: auto;
  }
}

.show-light {
  position: relative;
  .light {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    left: 0;
    top: 0;
    bottom: 0;
  }
}

.actions {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
