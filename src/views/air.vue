<template>
  <div class="air_box">
    <div class="air_condition">
      <div class="content" ref="shadow">
        <div class="mi_jia">
          <img src="https://ac.hamm.cn/mijia.png" alt="">
        </div>
        <div class="info">
          <img src="https://ac.hamm.cn/flag.jpg" alt="">
        </div>
        <div class="temp">
          {{ isOpen ? temp.toFixed(1) : '' }}
        </div>
      </div>
      <div class="open" ref="open"/>
    </div>
    <div class="control">
      <div class="control_node" @click="openHandler">{{isOpen ? 'close': 'open'}}</div>
      <div class="control_node" @click="up">+</div>
      <div class="control_node" @click="down">-</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch} from 'vue'
const isOpen = ref(false)
const open = ref(null)
const shadow = ref(null)
const temp = ref(Math.floor(Math.random() * 14) + 16 + 0.5)
const up = () => {
  temp.value = temp.value + 0.5 > 31 ? 31 : temp.value + 0.5
}
const down = () => {
  temp.value = temp.value - 0.5 < 16 ? 16 :temp.value - 0.5
}
const openHandler = () => {
  isOpen.value = !isOpen.value
}
watch(isOpen,(val) => {
  open.value.style.transform = val ? 'translateY(-40px)' : 'translateY(-50px)'
  shadow.value.style.boxShadow = val ? '0px 4px 4px #eaeaea' : 'none'
  console.log(open.value.style)
})
</script>

<style scoped lang="less">
  .air_box{
    width: 100%;
    height: 100vh;
    padding: 20px;
    background: #2c3e50;
    .air_condition{
      width: 400px;
      .content{
        position: relative;
        width: 400px;
        z-index: 1;
        height: 120px;
        background: #fff;
        box-shadow: none;
        transition: 2s;
        border-radius: 10px;
        .info{
          position: absolute;
          width: 30px;
          height: 30px;
          color: black;
          left: 20px;
          top: 10px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .mi_jia{
          position: absolute;
          width: 50px;
          height: 50px;
          color: black;
          left: 10px;
          bottom: 10px;
          img{
            width: 100%;
            height: 100%;
            opacity: 0.5;
            filter: grayscale(1);
          }
        }
        .temp{
          width: 35px;
          height: 35px;
          font-family: lcd;
          border-radius: 100%;
          background: #000;
          color: #fff;
          line-height: 35px;
          text-align: center;
          font-size: 16px;
          position: absolute;
          right: 20px;
          bottom: 20px;
        }
      }
      .open{
        width: 395px;
        margin: 0 auto;
        height: 50px;
        transform: translateY(-50px);
        z-index: 0;
        transition: 2s;
        border-radius:0 0 20px 20px;
        background: #f1f1f1;
      }
    }
    .control{
      overflow: hidden;
      background: #fff;
      width: 50px;
      padding: 20px;
      height: 300px;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      box-shadow: 2px 2px 2px #f1f1f1;
      position: relative;
      .control_node{
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        border: 1px solid #f1f1f1;
        box-shadow: 2px 2px 6px #f1f1f1;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 15px;
        font-family: thin;
        &:hover{
          box-shadow: none;
        }
      }
    }
  }
</style>
