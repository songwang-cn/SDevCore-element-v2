<template>
  <div class="s_body">
    <div class="side">
      <div class="logo">
        <slot name="logo">
          logo
        </slot>
      </div>
      <div class="menu">
        <slot name="menu" />
      </div>
      <div class="copyright">
        <slot name="copyright">
          copyright
        </slot>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="content">
        <slot name="main"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SBody'
};
</script>

<style lang="less" scoped>
.s_body {
  position: fixed;
  inset: 0;
  display: flex;
  margin: 0;

  .side {
    width: 220px;
    background: #fff;
    display: flex;
    flex-direction: column;

    .logo, .copyright{
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .menu{
      height: 0;
      flex: 1;
      background: #f1f1f1;
    }
  }

  .right {
    width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ddd;

    .header {
      height: 50px;
      background: #fff;
      display: flex;
      align-items: center;
      padding: 0 10px;
    }

    .content{
        height: 0;
        flex: 1;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
  }
}
</style>
