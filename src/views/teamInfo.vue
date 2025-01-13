<template>
  <div class="info_content">
<!--    <el-image :src="require(`../assets/logo/${$route.query.name}_logo.svg`)"/>-->
    <div>{{JSON.stringify(list)}}</div>
    <el-collapse>
      <el-collapse-item v-for="(item, index) of list" :key="index" :title="item.name">
          <el-tag v-for="(tag, i) of item.planList" :key="i">{{tag}}</el-tag>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import useGetGlobalProperties from "../../globalProperties";
const globalProperties = useGetGlobalProperties()
const list = ref([])
onMounted(() => {
  getUserList()
})
const getUserList = async () => {
  const {fail, data} = await globalProperties.$apis.user.list()
  if(!fail) {
    list.value = data
  }
}
</script>

<style scoped lang="less">
  .info_content{
    background: #f1f1f1;
  }
</style>
