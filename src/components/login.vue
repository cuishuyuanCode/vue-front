<template>
    <div class="login-container">
      <h1>登录</h1>
      <input type="text" placeholder="用户名" v-model="username">
      <input type="password" placeholder="密码" v-model="password">
      <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // 登录逻辑
    }
  }
}
</script>
<style scoped>

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-bottom: 10%; */
  /* padding-top: 0%; */
  width: 100%;
  /* background-image:url(../assets/school.png); */
  background: linear-gradient(to right, #7f00ff, #e100ff);
  color: #fff;
}

.login-container h1 {
  /* color: rgb(79, 54, 54); */
  font-size: 2rem;
  margin-bottom: 1rem;
}

.login-container input {
  width: 300px;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-container button {
  width: 300px;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background: #fff;
  color: #000;
  font-size: 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-container button:hover {
  cursor: pointer;
}
</style>
<!-- <template>
  <div>
    <h1>登录</h1>
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="username" />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="gender" />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="name" />
      </el-form-item>
      <el-form-item label="身份证">
        <el-input v-model="id" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Form, Input, Button } from 'element-ui'

export default {
  components: {
    'el-form': Form,
    'el-form-item': Form.Item,
    'el-input': Input,
    'el-button': Button
  },
  data () {
    return {
      username: '',
      gender: '',
      name: '',
      id: ''
    }
  },
  methods: {
    submit () {
      // 处理表单提交事件
    }
  }
}
</script> -->
