
<template>
  <div class="form">
    <h1>登录</h1>
  <div class="account">
    <el-input v-model="input" placeholder="请输入用户名" width="50px">dd</el-input>
    <el-input v-model="input" placeholder="请输入密码">dd</el-input>
    <div>
      <el-button type="primary" >确定</el-button>
      <el-button type="primary" plain>取消</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'fff',
  data () {
    return {
      msg: 'dsadsa to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  color: red;
}

.form{
  background-color: yellow;
  align-content: center;
  align-items: center;
}

.account{
  align-items: center;
  background-color: red;
  align-content: center;
  width: 30%;
  padding-top: 5%;
}
</style>
