<template>
  <SBody>
    <template #logo>
      {{ collapse ? "简称" : "项目全称" }}
    </template>
    <template #menu>
      <SMenu :menu-tree="menuTree" :collapse="collapse" />
    </template>
    <template #copyright>
      {{ collapse ? "©" : "© 2025" }}
    </template>
    <template #header>
      <div class="custom_header">
        <div class="h_left">
          <div
            :class="`${collapse ? 'collapse' : 'un_collapse'} collapse_icon`"
            @click="collapse = !collapse"
          >
            <i class="sdevcore s-caidanshouqi" />
          </div>
        </div>
        {{ $route.path }}
        <!-- <span>5202年了,还有公司用vue2</span> -->
        <div class="h_right">
          <el-color-picker
            v-model="themeColor"
            @change="$ThemeHelper.setThemeColor(themeColor)"
          />
        </div>
      </div>
    </template>
    <template #main>
      <router-view />
    </template>
  </SBody>
</template>

<script>
export default {
  data() {
    return {
      menuTree: JSON.parse(localStorage.getItem("menuTree") || []),
      collapse: false,
      themeColor: this.$ThemeHelper.getThemeColor(),
    };
  },
  created() {
    this.getMenuData();
  },
  methods: {
    onConfig() {
      this.$DialogHelper.show(Config);
    },
  },
};
</script>

<style lang="less" scoped>
.custom_header {
  width: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.collapse_icon {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #fff;

  &:hover {
    transform: scale(1.05);
  }

  &.collapse {
    transform: rotate(180deg);
  }

  &.un_collapse {
    transform: rotate(0deg);
  }
}
</style>
