<template>

  <div class="login-container">
    <h2>试验课程预约登录</h2>
    <input type="text" placeholder="用户名" v-model="username">
    <input type="password" placeholder="密码" v-model="password">
    <div>
      <button @click="login">登录</button>
      <button @click="registry">注册</button>
    </div>
  </div>

</template>
<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                // 登录逻辑 调用后端api
                // print(this.data.username)
            },
            registry() {
                // 注册逻辑
                this.$router.push({path: '/register'})
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
    width: 100%;
    height: 100vh;
    /* background-image:url(../assets/school.png); */
    background: linear-gradient(to right, #00ddff, #008cff);
    color: #fff;
  }

  .login-container h2 {
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
    width: 100px;
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
