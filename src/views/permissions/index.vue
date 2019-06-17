<template>
  <div class="m-10">
    <el-button-group class="b-r">
      <el-button @click="add" icon="el-icon-plus" type="primary">添加</el-button>
      <el-button @click="init" icon="el-icon-refresh" type="primary">刷新</el-button>
    </el-button-group>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column label="序号" type="index" width="120px"></el-table-column>
      <el-table-column label="登录账号" prop="adminAccount"></el-table-column>
      <el-table-column label="用户名称" prop="adminName"></el-table-column>
      <el-table-column label="登录状态" prop="adminUserStatus">
        <template slot-scope="scope">{{scope.row.adminUserStatus===0?'有效':'无效'}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small" type="text">密码修改</el-button>
          <el-button @click="del(scope.row)" size="small" type="text">删除</el-button>
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
    <el-dialog :visible.sync="dialogVisible" title="修改密码" width="40%">
      <el-form :model="form" :rules="rules" label-width="100px" ref="form">
        <el-form-item label="新密码" prop="confirmAdminPwd">
          <el-input v-model="form.confirmAdminPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="newAdminPwd">
          <el-input v-model="form.newAdminPwd"></el-input>
        </el-form-item>
      </el-form>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="sure" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible1" title="新增用户" width="40%">
      <el-form :model="form1" :rules="rules1" label-width="100px" ref="form1">
        <el-form-item label="账号" prop="adminAccount">
          <el-input v-model="form1.adminAccount"></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="adminName">
          <el-input v-model="form1.adminName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="adminPwd">
          <el-input v-model="form1.adminPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmAdminPwd">
          <el-input v-model="form1.confirmAdminPwd"></el-input>
        </el-form-item>
      </el-form>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="addsure" type="primary">确 定</el-button>
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
</style>

