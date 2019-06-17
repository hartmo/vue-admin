<template>
  <div class="m-warp">
    <img alt src="@/assets/logo.png">
    <h2 class="title">{{isView?'已成功绑定您的微信号':'填写资料方便推送信息'}}</h2>
    <el-form :model="form" :rules="rules" class="demo-ruleForm" label-width="80px" ref="ruleForm">
      <el-form-item label="姓名" prop="userName">
        <el-input v-if="!isView" v-model="form.userName"></el-input>
        <span v-else>{{form.userName}}</span>
      </el-form-item>
      <el-form-item label="手机号码" prop="userMobile">
        <el-input type="number" v-if="!isView" v-model="form.userMobile"></el-input>
        <span v-else>{{form.userMobile}}</span>
      </el-form-item>
    </el-form>
    <el-button @click="sure" style="width:100%;" type="primary" v-if="!isView">提交</el-button>
  </div>
</template>

<script type="text/babel">
import vm from './vm'
export default vm
</script>
<style lang="scss" scoped>
.m-warp {
  width: 7.2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  margin-top: 1rem;
  img {
    width: 100%;
  }
  .title {
    text-align: center;
  }
}
</style>

