<template>
  <div class="login-wrap">

    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div class="ms-title">后台管理系统</div>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <!-- <div class="login-btn">
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              </div> -->
        <el-button type="primary" plain>登录</el-button>
        <el-button type="success" plain>注册</el-button>
        <div>
          <el-switch v-model="isAdmin" active-text="是否是管理员" inactive-text="按年付费"></el-switch>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../api/api.js'
export default {
  data: function () {
    return {
      isAdmin: true,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      const self = this;
      self.$refs[formName].validate((valid) => {
        if (valid) {
          var qs = require('qs');
          var params = qs.stringify({
            username: self.ruleForm.username,
            password: self.ruleForm.password
          });
          login(params).then(result => {
            if (result.status) {
              sessionStorage.setItem('login_username', self.ruleForm.username);
              sessionStorage.setItem('token', result.data.token);
              sessionStorage.setItem('meuns', qs.stringify(result.data.meuns));
              sessionStorage.setItem('routers', result.data.routers);
              self.$router.push('/home');
            } else {
              self.$message.error(response.data.message);
            }
          }).catch(function (error) {
            console.log(error);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: 40%;
}

.ms-title {
  margin: -30px auto 40px auto;
  text-align: center;
  font-size: 30px;
  color: #505458;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 240px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 25px #cac6c6;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
