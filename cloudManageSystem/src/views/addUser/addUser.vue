<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="addUser">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="邮件" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <imgUpload v-model="formData.avatar" @upload="getImg"></imgUpload>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="formData.nickname"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="getAddUser" type="primary">提交保存</el-button>
  </div>

</div>
</template>

<script>
  import imgUpload from '../../package/imgUpload'
  import router from '../../router/index'
    export default {
      name: "addUser",
      components:{
        imgUpload
      },
      data(){
          return {
            formData:{
              username:'',
              password:'',
              nickname:'',
              desc:'',
              avatar:'',
              email:''
            },
            rules: {
              username: [
                { required: true, message: '名字', trigger: 'blur' },

              ],
              password: [
                { required: true, message: '密码', trigger: 'blur' },

              ],
              nickname: [
                { required: true, message: '昵称', trigger: 'blur' },

              ],
              desc: [
                {  required: true, message: '描述', trigger: 'blur' }
              ],
              avatar: [
                { required: true, message: '头像', trigger: 'change' }
              ],

              email: [
                { required: true, message: '邮件', trigger: 'blur' }
              ]
            },
            imageUrl:'',
          }
        },
      methods:{
        getImg (res) {
          this.formData.avatar = res
        },
        getAddUser(){
            console.log(this.formData);
            this.$axios.post('/user',this.formData).then(res=>{
                console.log(res);
                if(res.code === 200){
                this.$message({
                  message:res.msg,
                  type:'success'
                })
                setTimeout(()=>{
                  router.push('/layout/user')
                },1000)
              }
              })
          } ,
        created(){
            this.getAddUser
        }
      }
    }
</script>

<style scoped lang="scss">
.addUser{
  margin-top: 30px;
  width: 600px;
}
</style>



