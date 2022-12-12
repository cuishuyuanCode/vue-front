<template>

  <div class="register-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="请确认密码" prop="password_confirm">
        <el-input type="password" v-model="ruleForm.password_confirm" placeholder="请再输入一次密码"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="man"></el-option>
          <el-option label="女" value="woman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
 import {registryUser1} from '../api/api.js'
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    password_confirm: '',
                    sex: ''
                },
                rules: {
                    username: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur'}
                    ],
                    password_confirm:[
                        {required: true, message: '请重复确认密码', trigger: 'blur'},
                        {min: 6, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                console.log(this)
                const userContent = this.ruleForm
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const a = registryUser1(userContent)
                        if (!a){
                            alert('注册失败，请稍后重试')
                        }
                    } else {
                        alert('请先完善注册信息')
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>

  .register-container {
    display: flex;
    background: linear-gradient(to right, #00ddff, #008cff);
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  .register-container h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

</style>
