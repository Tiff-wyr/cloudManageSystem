<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>修改管理员</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addUser">
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>

        <el-form-item label="邮件" prop="email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"

            :on-success="handleAvatarSuccess"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input type="textarea" v-model="formData.desc"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="changeUser" type="success" plain>修改信息</el-button>
    </div>

  </div>
</template>

<script>
  import router from '../../router/index'
  export default {
    name: "changeUser",
    data(){
      return {
        formData:{
          username:'',

          nickname:'',
          desc:'',
          avatar:'',
          email:''
        },
        rules: {

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
      changeUser(){
        this.$axios.put('/user/userInfo',this.formData).then(res=>{

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

      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      created(){
        this.changeUser
      }
    }
  }
</script>

<style scoped lang="scss">
  .addUser{
    margin-top: 30px;
    width: 600px;
  }
  .avatar-uploader .el-upload {
    border: 3px dashed #ccc;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

