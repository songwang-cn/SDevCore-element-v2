<template>
  <SPanel title="用户列表">
    <template #body>
      <STableBar
        :search-field-list="searchFieldList"
        @add="onAdd"
        search-immediate
        @search="onSearch"
      />
      <STable
        :columns="column"
        :data="tableList"
        show-detail
        @edit="onEdit"
        @detail="onDetail"
        @delete="onDelete"
      />
      <router-view />
    </template>
    <template #footerRight>
      <SPage />
    </template>
  </SPanel>
</template>
<script>
import Edit from "./edit.vue";
import Detail from "./detail.vue";

export default {
  data() {
    return {
      column: [
        { label: "姓名", key: "name" },
        { label: "年龄", key: "age" },
        {
          label: "性别",
          key: "sex",
          enumRecord: [
            { key: 1, label: "男" },
            { key: 0, label: "女" },
          ],
        },
        { label: "公司", key: "company" },
      ],
      tableList: [
        { name: "张三", age: 18, sex: 1, company: "腾讯" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
        { name: "李四", age: 19, sex: 0, company: "阿里" },
      ],
      searchFieldList: [
        { label: "姓名", key: "name", type: "input" },
        {
          label: "性别",
          key: "sex",
          type: "select",
          enumRecord: [
            { key: 1, label: "男" },
            { key: 0, label: "女" },
          ],
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$DialogHelper.show(Edit);
    },
    onEdit(row) {
      debugger;
      this.$DialogHelper.show(Edit, row);
    },
    onSearch(searchForm) {
      this.$message.warning(`搜索事件 参数---${JSON.stringify(searchForm)}`);
    },
    onDetail(row) {
      this.$DialogHelper.show(Detail, row);
    },
    onDelete(row) {
      this.$message.warning("删除");
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
.library {
  background: #f1f1f1;
}
</style>
