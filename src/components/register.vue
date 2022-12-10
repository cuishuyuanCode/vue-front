<template>
    <div>
      <h1>注册</h1>
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
  import { Form, Input, Button } from "element-ui";
  
  export default {
    components: {
      "el-form": Form,
      "el-form-item": Form.Item,
      "el-input": Input,
      "el-button": Button
    },
    data() {
      return {
        username: "",
        gender: "",
        name: "",
        id: ""
      };
    },
    methods: {
      submit() {
        // 处理表单提交事件
      }
    }
  };
  </script>