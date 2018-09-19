<template>
<div class="container">
  <h2 class="title">欢迎来到后台管理系统</h2>
  <div class="cloud-form">
    <h3 class="login">请登录</h3>
    <el-form>
      <el-form-item label="用户名">
       <el-input v-model="formData.username" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
       <el-input  v-model="formData.password" type="password" placeholder="输入密码"></el-input>
      </el-form-item>
  </el-form>
    <el-button type="primary" class="loging" @click="handleLogin">登录</el-button>
  </div>
</div>
</template>

<script>
  import router from '@/router'
    export default {
        name: "login",
        data(){
          return {
            formData:{
              username:'',
              password:''
            }
          }

        },
        methods:{
          handleLogin(){
            this.$axios.post('/login',this.formData).then(res=>{
              console.log(res.data);
              if(res.code===200){
                this.$message({
                  message:'登录成功',
                  type:'success'
                })
                sessionStorage.setItem('userinfo', JSON.stringify(res.data))
                setTimeout(()=>{
                  router.push('/layout')
                },1000)

              }else{
                this.$message.error('登录失败')
              }
            })
          }
        }

    }
</script>

<style scoped lang="scss">
.container{
  height: 100vh;
  background: #545c64;
  .title{
    padding-top: 80px;
    color: #fff;
    text-align: center;
    font-weight: 400;
  }
  .cloud-form{
    width: 400px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 20px auto;
    padding: 40px;
    background: #fff;
    .login{
      text-align: center;
    }
    .loging{
      width: 100%;
      box-sizing: border-box;
    }
  }
}

</style>
