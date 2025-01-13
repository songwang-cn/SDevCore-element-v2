<template>
    <el-form class="top">
        <el-form-item label="线条宽度">
            <el-input v-model="lineWidth" type="number" min="1" max="10" />
        </el-form-item>
        <el-form-item label="线条颜色">
            <el-color-picker v-model="color" />
        </el-form-item>
        <el-form-item label="画布颜色">
            <el-color-picker v-model="bgColor" @change="initCanvasPanel" />
        </el-form-item>
        <el-form-item label="">
            <el-button type="danger" @click="onClear">清空画布</el-button>
            <el-button type="primary" @click="onGetBase64">生成base64地址</el-button>
            <el-button type="primary" @click="onGetImg">下载为图片</el-button>
        </el-form-item>
    </el-form>
    <canvas 
        ref="canvas"
        class="sign-box" 
        width="1200" 
        height="600" 
        @mousedown="onMouseDown"
        @mousemove="onMouseMove" 
        @mouseup="onDrawEnd" 
        @mouseleave="onDrawEnd" 
    />
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { ElMessage  } from 'element-plus'

const lineWidth = ref(5)

const color = ref("#000")

const bgColor = ref("#f1f1f1")

const canvas = ref()

const ctx = ref()

const isDrawing = ref(false)

const hasDrawed = ref(false)

const imgUrl = ref('')

onMounted(() => {
    initCanvasPanel()
})

function initCanvasPanel() {
    ctx.value = canvas.value.getContext("2d")
    ctx.value.fillStyle = bgColor.value
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
}

function onMouseDown(e: MouseEvent) {
    isDrawing.value = true
    ctx.value.beginPath()
    ctx.value.strokeStyle = color.value
    ctx.value.moveTo(e.offsetX, e.offsetY)
}

function onMouseMove(e: MouseEvent) {
    if (isDrawing.value) {
        hasDrawed.value = true
        console.log(e.offsetX, e.offsetY)
        ctx.value.lineWidth = lineWidth.value
        ctx.value.lineTo(e.offsetX, e.offsetY)
        ctx.value.stroke()
    }
}

function onDrawEnd() {
    ctx.value.closePath()
    canvas.value.onmousemove = null
    isDrawing.value = false
}

function onClear() {
    initCanvasPanel()
    hasDrawed.value = false
    ElMessage .warning("画布已清空")
}

function onGetBase64() {
    if (hasDrawed.value) {
        imgUrl.value = canvas.value.toDataURL("image/png")
        navigator.clipboard.writeText(imgUrl.value).then(() => {
            ElMessage .success("base64地址已生成至剪切板，去粘贴试试")
        })
    } else {
        ElMessage .warning("请先绘制")
    }
}

function onGetImg() {
    if (hasDrawed.value) {
        imgUrl.value = canvas.value.toDataURL("image/png")
        const a = document.createElement('a')
        a.href = imgUrl.value
        a.download = '图片.png'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    } else {
        ElMessage .warning("请先绘制")
    }
}


</script>

<style lang="scss" scoped>
.top {
    padding: 10px;
    display: flex;
    align-items: center;

    .el-form-item {
        margin-bottom: 0;
        margin-right: 20px;
    }

    .color-p {
        margin-right: 10px;
        font-size: 14px;
        color: #6d6d6d;
        display: flex;
        align-items: center;
    }

    button {
        margin-right: 10px;
    }
}

.sign-box {
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px #bbbbbb;
}
</style>
