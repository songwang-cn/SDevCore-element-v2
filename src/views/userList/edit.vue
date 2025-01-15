<template>
    <SDialog title="弹窗" @cancel="onCancel()" @confirm="onConfirm()">
        123
    </SDialog>
</template>

<script>

export default{
    props:{
        onCancel: Function,
        onConfirm: Function,
        param: Object | String | Number
    }
}
</script>