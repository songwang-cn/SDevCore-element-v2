<template>
  <SPanel title="设备列表">
    <template #body>
      <STableBar :search-field-list="searchFieldList" @add="onAdd" />
      <STable :columns="column" :data="tableList" />
    </template>
    <template #footerRight>
      <SPage />
    </template>
  </SPanel>
</template>
<script>
import Edit from "./edit.vue";
export default {
  data() {
    return {
      column: [
        { label: "设备名称", key: "name" },
        { label: "设备编码", key: "code" },
        {
          label: "设备类型",
          key: "type",
          enumRecord: [
            { key: 1, label: "生产设备" },
            { key: 2, label: "采集设备" },
          ],
        },
        { label: "公司", key: "company" },
      ],
      tableList: [
        { name: "设备1", code: "code1", type: 1, company: "腾讯" },
        { name: "设备2", code: "code2", type: 2, company: "阿里" },
        { name: "设备3", code: "code3", type: 1, company: "腾讯" },
      ],
      searchFieldList: [
        { label: "设备名称", key: "name", type: "input" },
        {
          label: "设备类型",
          key: "type",
          type: "select",
          enumRecord: [
            { key: 1, label: "生产设备" },
            { key: 2, label: "采集设备" },
          ],
        },
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
