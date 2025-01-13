<!--
 * @Author: jian.ma@houhoutech.com
 * @CreateAt: 2021-07-19 17:45:59
 * @MotifyAt: 2021-07-20 13:43:26
 * @MotifyBy: jian.ma@houhoutech.com
 * @FilePath: \web\src\components\ChildMenu.vue
 * @Description: 左侧导航菜单组件
-->

<template>
  <div class="menu-tree">
    <label v-for="list in menuTree" :key="list.id">
      <el-submenu :index="list.id" v-if="list.children.length > 0">
        <template slot="title">
          <i :class="list.icon"></i>
          <span>{{ list.name }}</span>
        </template>
        <label>
          <child-menu :menuTree="list.children"></child-menu>
        </label>
      </el-submenu>
      <el-menu-item v-else :index="'/' + list.component">
        <i :class="list.icon"></i>
        <span slot="title">{{ list.name }}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: "ChildMenu",
  props: ["menuTree"],
};
</script>