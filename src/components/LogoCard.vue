<template>
  <div class="card">
    <el-card class="inner" shadow="never" @click="jumpDetail">
      <el-image :src="require(`../assets/logo/${name}_logo.svg`)"/>
    </el-card>
  </div>

</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    name: String
  },
  name: "LogoCard",
  setup(props) {
    const router = useRouter()
    const jumpDetail = () => {
      router.push({path: '/teamInfo', query: {name: props.name}})
    }
    return{
      jumpDetail
    }
  }
}
</script>

<style scoped lang="less">
.card{
  width: 20%;
  max-width: 20%;
  cursor: pointer;
  .inner{
    margin: 10px;
    &:hover{
      transition: 500ms;
      transform: scale(1.1);
    }
  }
}
</style>
