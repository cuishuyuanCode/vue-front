
<template>
  <div>
  <div class="login">
    <h1>登录</h1>
  </div>
  <div class="sss">
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
h1, h2 {
  font-weight: normal;
}
li {
  display: inline-block;
  margin: 0 10px;
}
sss {
  color: black;
}
a {
  color: black;
}
</style>
