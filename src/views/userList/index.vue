<template>
  <div class="library">
    <SGroup title="表格">
      <STableBar :search-field-list="searchFieldList" @add="onAdd" />
      <STable :columns="column" :data="tableList" />
      <SPage />
    </SGroup>
    <SGroup title="表格"></SGroup>
  </div>
</template>
<script>
import Edit from "./edit.vue";
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
        { label: "性别", key: "sex", type: "select" },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$DialogHelper.show(Edit);
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
