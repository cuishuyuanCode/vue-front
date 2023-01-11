<template>
  <div class="register-container">
    <el-form class="register-form" autoComplete="on" :model="registerForm" :rules="registerRules" ref="registerForm"
             label-position="left">
      <h3 class="title">注册用户</h3>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="registerForm.username" autoComplete="on" placeholder="用户名"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" @keyup.enter.native="register" v-model="registerForm.password"
                  autoComplete="on"
                  placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="confirmPwd">
        <el-input name="confirmPwd" type="password" @keyup.enter.native="register" v-model="registerForm.confirmPwd"
                  autoComplete="on"
                  placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input name="phone" type="text" @keyup.enter.native="register" v-model="registerForm.phone"
                  autoComplete="on"
                  placeholder="手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="login">
          确定
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="info" style="width:100%;" :loading="loading" @click.native.prevent="back">
          返回登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { login } from '@/api/permission'
import {registryUser1} from "../../api/api";

export default {
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        confirmPwd: '',
        phone: ''
      },
      registerRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
        ]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    async login() {

    },
    register() {
      registryUser1()
    }
  }
}
</script>


<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 90%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.register-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;

  .register-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 30px auto;
  }

  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}
</style>
