<template>
  <div class="m-warp">
    <el-card class="box-card">
      <el-form :model="form" ref="form">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="物流单号" prop="logisticsNumber">
              <span>{{form.logisticsNumber}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="物流公司" prop="logistics">
              <span>{{form.logistics}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="收货人姓名" prop="orderConsignee">
              <span>{{form.orderConsignee}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
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
            <el-form-item label="经手人" prop="personHandling">
              <span>{{form.personHandling}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="经手人电话" prop="personHandlingMobile">
              <span>{{form.personHandlingMobile}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-table :data="form.orderContent">
                <el-table-column label="序列号" prop="title"></el-table-column>
              </el-table>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script type="text/babel">
import vm from './vm'
export default vm
</script>
<style lang="scss">
.m-warp {
  width: 90%;
  margin: auto;
  margin-top: 0.2rem;
  .warp-form {
    width: 90%;
    margin: auto;
  }
  img {
    width: 100%;
  }
  .title {
    text-align: center;
  }
  .el-table th > .cell {
    color: #000;
  }
}
</style>

