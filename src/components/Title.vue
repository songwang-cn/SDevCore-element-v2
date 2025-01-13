<template>
  <div class="title">{{title}}</div>
</template>

<script>
export default {
  props: {
    title: String
  },
  name: "Title"
}
</script>

<style lang="less" scoped>
.title{
  font-size: 50px;
  font-weight: bold;
  padding: 20px 0;
  background: #000;
  color: #fff;
}
</style>
