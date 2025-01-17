<template>
  <div class="table_bar">
    <div class="left_action">
      <el-button v-if="!hideAdd" type="primary" icon="el-icon-circle-plus-outline" @click="$emit('add')">
        {{ addStr }}
      </el-button>
      <slot name="customButton"> </slot>
    </div>
    <div class="right_search" v-if="!hideSearch">
      <!-- 最多展示4个，有特殊情况再做打算 -->
      <template v-for="field of searchFieldList.slice(0, 4)">
        <el-input
          v-if="field.type === 'input'"
          :key="field.key"
          v-model="searchForm[field.key]"
          :placeholder="field.placeholder || `请输入${field.label}`"
          @keyup.enter.native="onSearch"
          clearable
          @clear="
            () => {
              delete searchForm[field.key]
              onSearch()
            }
          "
        />
        <el-select
          v-if="field.type === 'select'"
          :key="field.key"
          v-model="searchForm[field.key]"
          :placeholder="field.placeholder || `请选择${field.label}`"
          @change="onValueChange"
        >
          <el-option
            v-for="item of field.enumRecord"
            :key="item[field.valueKey || 'key']"
            :value="item[field.valueKey || 'key']"
            :label="item[field.labelKey || 'label']"
          />
        </el-select>
        <el-cascader
          v-if="field.type === 'cascader'"
          :key="field.key"
          :placeholder="field.placeholder || `请选择${field.label}`"
          v-model="searchForm[field.key]"
          :options="field.enumRecord"
          :show-all-levels="false"
          @change="onValueChange"
          :props="{
            label: field.labelKey || 'name',
            value: field.valueKey || 'id',
            children: field.childrenKey || 'children',
            emitPath: false,
            checkStrictly: true,
            ...field.props,
          }"
        />
        <el-date-picker
          v-if="field.type === 'date'"
          :key="field.key"
          v-model="searchForm[field.key]"
          type="date"
          :placeholder="field.placeholder"
          :format="field.format || 'yyyy-MM-DD'"
          :value-format="field.valueFormat || 'yyyy-MM-DD'"
          clearable
          @clear="onSearch"
          @change="onValueChange"
        />
        <el-date-picker
          v-if="field.type === 'dateeange'"
          :key="field.key"
          v-model="searchForm[field.key]"
          type="daterange"
          :start-placeholder="field.startPlaceholder || '请选择开始时间'"
          :end-placeholder="field.endPlaceholder || '请选择结束时间'"
          :format="field.format || 'yyyy-MM-DD'"
          :value-format="field.valueFormat || 'yyyy-MM-DD'"
          clearable
          @clear="onSearch"
          @change="onValueChange"
        />
      </template>
      <span class="search_action">
        <el-button @click="onSearch" type="primary" icon="el-icon-search">查询</el-button>
        <el-button @click="onReset" icon="el-icon-refresh-right">重置</el-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'STableBar',
  props: {
    hideAdd: {
      type: Boolean,
      default: false,
    },
    addStr: {
      type: String,
      default: '添加',
    },
    searchFieldList: {
      type: Array,
      default: () => [],
    },
    hideSearch: {
      type: Boolean,
      default: false,
    },
    //条件变化后立即搜索
    searchImmediate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchForm: {},
    }
  },
  methods: {
    onValueChange() {
      if(this.searchImmediate){
        this.onSearch()
      }
    },
    onSearch() {
      this.$emit('search', this.searchForm)
    },
    onReset() {
      this.searchForm = {}
      this.$emit('search', this.searchForm)
      this.$emit('reset')
    },
  },
}
</script>

<style lang="less" scoped>
.table_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 0;
  .left_action {
    width: 0;
    flex: 2;
    display: flex;
    align-items: center;
  }

  .right_search {
    width: 0;
    flex: 3;
    display: flex;
    justify-content: flex-end;

    .el-input,
    .el-select,
    .el-cascader {
      width: 200px;
      max-width: 200px;
      margin-right: 10px;
    }

    .search_action {
      display: flex;
    }
  }
}
</style>
