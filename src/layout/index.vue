<template>
  <div id="admin">
    <el-container v-if="adminShow">
      <!-- <transition name="menu"> -->
      <el-aside width="auto">
        <div class="admin-logo" v-show="!isCollapse">

        </div>
        <el-menu class="el-menu-vertical" :router='true' unique-opened :collapse='isCollapse' collapse-transition>
          <ChildMenu :menuTree="menuTree"></ChildMenu>
        </el-menu>
      </el-aside>
      <!-- </transition> -->
      <el-container class="el-body">
        <Header :isCollapse.sync='isCollapse' />
        <el-main>
          <router-view></router-view>
          <!-- <transition name="slide"> -->
          <!-- </transition> -->
        </el-main>
      </el-container>
    </el-container>
    <div class="admin-loading" v-if="!adminShow" v-loading="!adminShow"></div>
  </div>
</template>

<script>
import ChildMenu from "@/components/ChildMenu";
import Header from "./components/Header";
export default {
  components: {
    ChildMenu,
    Header,
  },
  data() {
    return {
      isCollapse: false,
      adminShow: true,
      // defaultMenu: "/urgency",
      menuTree: [
        {
          id: "1",
          icon: "el-icon-s-tools",
          name: "设备保修",
          children: [
            {
              icon: "el-icon-s-tools",
              name: "首页",
              component: "",
              children: [],
            },
            {
              icon: "el-icon-s-tools",
              name: "设备保修",
              component: "repair/urgency",
              children: [],
            },
            {
              icon: "el-icon-s-tools",
              name: "测试1",
              component: "1-1",
              children: [],
            },
            {
              icon: "el-icon-s-tools",
              name: "测试2",
              component: "1-2",
              children: [],
            },
          ],
        },
      ],
    };
  },
  created() {
    // this.defaultMenu = location.pathname;
  },
  beforeRouteUpdate(to, from, next) {
    // this.checkAccess(to, next);
  },
  methods: {
    adminUserMenuClicked() {},
  },
};
</script>
<style>
.menu-controller {
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle; */
  color: #666;
  font-size: 32px;
  cursor: pointer;
}

.menu-controller:hover {
  color: orangered;
}
</style>