<template>
  <SBody>
    <template #logo>
      左侧头部
    </template>
    <template #menu>
      左侧菜单
    </template>
    <template #copyright>
      左侧底部
    </template>
    <template #header>
      右侧头部
    </template>
    <template #main>
      <router-view />
    </template>
  </SBody>
</template>

<script>
export default {
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
  data() {
    return {
      show: true,
    };
  },
};
</script>
