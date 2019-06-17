<template>
  <div class="m-10">
    <el-form :inline="true" :model="listQuery" class="demo-form-inline">
      <el-form-item label="手机号码">
        <el-input placeholder="手机号码" v-model="listQuery.userMobile"></el-input>
      </el-form-item>
      <el-form-item label="用户姓名">
        <el-input placeholder="用户姓名" v-model="listQuery.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="init" type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="userlist" border style="width: 100%" v-loading="loading">
      <el-table-column label="序号" type="index" width="120px"></el-table-column>
      <el-table-column label="姓名" prop="userName"></el-table-column>
      <el-table-column label="手机号码" prop="userMobile"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small" type="text">发送消息</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="page.pageIndex"
      :page-size="page.pageSize"
      :page-sizes="[10, 25, 50, 100]"
      :total="page.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <el-dialog :close-on-click-modal="false" :visible.sync="dialogVisible" title="发送信息" width="40%">
      <el-form :model="form" label-width="100px" ref="form">
        <el-form-item label="物流单号" prop="logisticsNumber">
          <el-input placeholder="选填" type="number" v-model="form.logisticsNumber"></el-input>
        </el-form-item>
        <el-form-item label="物流公司" prop="logistics">
          <el-input placeholder="选填" v-model="form.logistics"></el-input>
        </el-form-item>
        <el-form-item label="收货人姓名" prop="orderConsignee">
          <el-input placeholder="选填" v-model="form.orderConsignee"></el-input>
        </el-form-item>
        <el-form-item label="收货人电话" prop="orderMobile">
          <el-input placeholder="选填" v-model="form.orderMobile"></el-input>
        </el-form-item>
        <el-form-item label="收货人地址" prop="address">
          <el-input placeholder="选填" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="订货内容" prop="orderRemark">
          <el-input :rows="4" placeholder="选填" type="textarea" v-model="form.orderRemark"></el-input>
        </el-form-item>
        <template v-for="(item,index) in form.orderContent">
          <el-form-item :key="index" label="序列号">
            <el-input placeholder="选填" v-model="item.title">
              <template slot="append" v-if="index === form.orderContent.length -1">
                <i @click="form.orderContent.push({title:''})" class="el-icon-plus hover"></i>
              </template>
            </el-input>
          </el-form-item>
        </template>
        <el-form-item label="经手人" prop="personHandling">
          <el-input placeholder="选填" v-model="form.personHandling"></el-input>
        </el-form-item>
        <el-form-item label="经手人电话" prop="personHandlingMobile">
          <el-input placeholder="选填" v-model="form.personHandlingMobile"></el-input>
        </el-form-item>
      </el-form>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="sure" type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/babel">
import vm from './vm'
export default vm
</script>
<style lang="scss" scoped>
.name {
  color: #409eff;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #409eff;
  }
}
.m-10 {
  margin: 0 10px;
}
.pagination {
  margin: 20px 0;
  float: right;
}
.b-r {
  float: right;
  margin: 10px;
}
.hover {
  cursor: pointer;
}
.demo-form-inline {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

