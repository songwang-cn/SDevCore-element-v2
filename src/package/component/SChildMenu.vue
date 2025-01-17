
<template>
  <div>
    <template v-for="item in menuTree">
      <el-submenu :index="item.path" v-if="item.children">
        <template #title>
          <i :class="item.icon" />
          <span slot="title">
            {{ item.name }}
          </span>
        </template>
        <label>
          <SChildMenu :menuTree="item.children" />
        </label>
      </el-submenu>
      <el-menu-item v-else :index="item.path">
        <i :class="item.icon" />
        <template #title>
          {{ item.name }}
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "SChildMenu",
  props: ["menuTree"],
};
</script>
