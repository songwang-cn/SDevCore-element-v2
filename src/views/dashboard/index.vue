<template>
    <div class="screen_list">
        <div class="card" v-for="item of 3">
            screen{{ item }}
        </div>
    </div>
</template>

<style lang="less" scoped>
.screen_list{
    display: flex;
    gap: 20px;
    flex: 1;
    background: #fff;
    padding: 20px;

    .card{
        width: 240px;
        height: 120px;
        background: #f9f9f9;
        border-radius: 6px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover{
            transform: scale(1.02);
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
    }
}
</style>