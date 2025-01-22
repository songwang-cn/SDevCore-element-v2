<template>
    <SDialog title="弹窗" @cancel="onCancel()" @confirm="onConfirm()">
        {{ param }}
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