<template>
  <div class="s-page">
    <el-pagination
      :current-page.sync="currentProps.pageNum"
      :page-size="currentProps.pageSize"
      background
      :pager-count="5"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="currentProps.total"
      @size-change="sizeChanged($event)"
      @current-change="pageChanged($event)"
    />
  </div>
 
</template>

<script>
export default {
  name: 'SPage',
  props: {
    pageData: {
      type: Object,
      required: true,
    },
    pageSizes: {
      type: Array,
      default: () => [20, 50, 100],
    },
  },
  watch: {
    pageData(newVal, oldVal) {
      if(!oldVal.pageNum || !oldVal.pageSize){
        this.currentProps = newVal
        console.log('this.currentProps', this.currentProps)
      }
    },
  },
  data() {
    return {
      currentProps: {},
    }
  },
  methods: {
    pageChanged(num) {
      this.currentProps.pageNum = num
      const page = {}
      if (this.currentProps.pageNum) {
        page.pageNum = this.currentProps.pageNum
      }
      if (this.currentProps.pageSize) {
        page.pageSize = this.currentProps.pageSize
      }
      this.$emit('change', page)
    },
    sizeChanged(size) {
      this.currentProps.pageNum = 1
      this.currentProps.pageSize = size
      const page = {}
      if (this.currentProps.pageNum) {
        page.pageNum = this.currentProps.pageNum
      }
      if (this.currentProps.pageSize) {
        page.pageSize = this.currentProps.pageSize
      }
      this.$emit('change', page)
    },
  },
}
</script>

<style scoped>
.s-page{
  display: flex;
  justify-content: flex-end;
}
</style>
