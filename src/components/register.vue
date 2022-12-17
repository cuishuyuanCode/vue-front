<template>

  <div class="register-container">
    <div class="register-user">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item>
          <div class="register-title">用户注册</div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="password_confirm">
          <el-input type="password" v-model="ruleForm.password_confirm" placeholder="请再输入一次密码"></el-input>
        </el-form-item>
        <el-form-item prop="sex">
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
  </div>

</template>
<script>
import { registryUser1 } from '../api/api.js'
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
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        password_confirm: [
          { required: true, message: '请重复确认密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
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
          if (!a) {
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
  background: url('../assets/login.jpg');
  background-size: 100% 100%;
  display: flex;
  /* background: #00ddff; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.register-title {
  text-align: center;
  font-size: 30px;
  color: #505458;
}

.register-user {
  height: 45%;
  width: 500px;
  background: white;
  border-radius: 30px;
  /* box-shadow: 0 0 25px #cac6c6; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-container h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
