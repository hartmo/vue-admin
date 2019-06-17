<template>
  <div class="m-10">
    <el-form :inline="true" :model="listQuery" class="demo-form-inline">
      <el-form-item label="收货人手机号码">
        <el-input placeholder="手机号码" v-model="listQuery.orderMobile"></el-input>
      </el-form-item>
      <el-form-item label="收货人">
        <el-input placeholder="用户姓名" v-model="listQuery.orderConsignee"></el-input>
      </el-form-item>
      <el-form-item label="物流单号">
        <el-input placeholder="物流单号" type="number" v-model="listQuery.logisticsNumber"></el-input>
      </el-form-item>
      <el-form-item label="序列号">
        <el-input placeholder="序列号" v-model="listQuery.orderContent"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="init" type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="userlist" border style="width: 100%" v-loading="loading">
      <el-table-column label="序号" type="index" width="120px"></el-table-column>
      <el-table-column label="物流单号" prop="logisticsNumber"></el-table-column>
      <el-table-column label="物流公司" prop="logistics"></el-table-column>
      <el-table-column label="收货人" prop="orderConsignee"></el-table-column>
      <el-table-column label="收货人手机号码" prop="orderMobile"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small" type="text">查看</el-button>
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
    <el-dialog :visible.sync="dialogVisible" title="消息查看" width="40%">
      <el-form :model="form" label-width="100px" ref="form">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="物流单号" prop="logisticsNumber">
              <span>{{form.logisticsNumber}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="物流公司" prop="logistics">
              <span>{{form.logistics}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="收货人姓名" prop="orderConsignee">
              <span>{{form.orderConsignee}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="收货人电话" prop="orderMobile">
              <span>{{form.orderMobile}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="收货人地址" prop="address">
              <span>{{form.address}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="订货内容" prop="orderRemark">
              <span>{{form.orderRemark}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="序列号">
              <template v-for="(item,index) in form.orderContent">
                <div :key="index">{{item.title}}</div>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="经手人" prop="personHandling">
              <span>{{form.personHandling}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="经手人电话" prop="personHandlingMobile">
              <span>{{form.personHandlingMobile}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false" type="primary">确 定</el-button>
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

