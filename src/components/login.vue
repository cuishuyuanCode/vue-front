<template>
  <div class="login-wrap">
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div class="login-title">课程预约管理系统</div>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-button type="primary" plain @click="submitForm('ruleForm')">登录</el-button>
        <el-button type="success" plain @click="registryUser()">注册</el-button>
        <div style="padding-top: 20px">
          <el-switch v-model="isAdmin" inactive-text="管理员身份"></el-switch>
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
    },
    registryUser(){
      this.$router.push('/register')
    }
  }
  }
</script>

<style scoped>
.login-wrap {
  background: url('../assets/login.jpg');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.ms-login {
  height: 45%;
  width: 500px;
  background: white;
  border-radius: 30px;
  /* box-shadow: 0 0 25px #cac6c6; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-title{
  text-align: center;
  font-size: 30px;
  padding-bottom: 30px;
  /* background-color: red; */
}


.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
