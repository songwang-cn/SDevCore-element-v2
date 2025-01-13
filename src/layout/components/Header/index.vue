<template>
  <el-header>
    <div class="top">
      <div class="menu-controller" @click="$emit('update:isCollapse',!isCollapse)"
        :class="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'">
      </div>
      <div class="admin-user">
        <el-dropdown @command="adminUserMenuClicked">
          <span class="el-dropdown-link">
            消息<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">我的消息</el-dropdown-item>
            <el-dropdown-item divided command="logout">任务通知</el-dropdown-item>
            <el-dropdown-item divided command="logout">系统通知</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="adminUserMenuClicked">
          <span class="el-dropdown-link">
            超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">修改资料</el-dropdown-item>
            <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="btm">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </el-header>
</template>
<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 用户菜单点击处理
    adminUserMenuClicked() {},
  },
};
</script>
<style lang="less" scoped>
.el-header {
  height: unset;
  min-height: 80px;
  .top {
    min-height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 2px solid #e9e9e9;
  }
  .btm {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 40px;
    padding: 0 20px;
  }
}
</style>