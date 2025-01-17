<template>
  <el-menu
    class="s_menu"
    router
    unique-opened
    :collapse="collapse"
    collapse-transition
  >
    <SChildMenu :menuTree="menuTree" />
  </el-menu>
</template>

<script>
export default {
  name: "SMenu",
  props: {
    menuTree: {
      type: Array,
      default: () => [],
    },
    collapse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.s_menu {
  flex: 1;
  background: #fff;
  border: 0;
}

.s_menu:not(.el-menu--collapse) {
  width: 200px;
}

</style>
