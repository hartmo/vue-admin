<template>
  <div>
    <el-table v-loading="loading" :data="userarr" style="width: 100%">
      <el-table-column label="序号" type="index" />
      <slot name="expand" />
      <slot />
    </el-table>
    <el-pagination
      :current-page="page.page"
      :page-size="page.size"
      v-if="paginationShow"
      :page-sizes="pagesizes"
      :total="total"
      background
      class="m-t-20"
      layout="prev, pager, next,sizes,total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script type="text/babel">
import vm from './vm'
export default vm
</script>

<style rel="stylesheet/scss" lang="scss">
table {
  width: 100% !important;
}
.table-btn {
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(220, 223, 230, 0.4);
  border-radius: 2px;
  padding: 2px 10px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #666666;
}
</style>

