<template>
  <div class="layout">
    <div class="title">
      <h2>cloud后台管理系统</h2>
    </div>
    <div class="side-bar">

      <el-menu
        :router="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/layout/index">首页</el-menu-item>
            <el-menu-item index="/login">登录页</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="管理员">
            <el-menu-item index="/layout/user">管理员列表</el-menu-item>
            <el-menu-item index="/layout/addUser">添加管理员</el-menu-item>
            <el-menu-item index="/layout/changeUser">修改管理员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>

        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>分类管理</span>
          </template>
          <el-menu-item index="/layout/categoryList">分类列表</el-menu-item>
          <el-menu-item index="/layout/addCategory">添加分类</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">图书管理</span>
          </template>
          <el-submenu>
            <template slot="title">轮播图</template>
            <el-menu-item index="/layout/getViewpager">轮播图列表</el-menu-item>
            <el-menu-item index="/layout/addViewpager">添加轮播图</el-menu-item>
          </el-submenu>

        </el-submenu>
      </el-menu>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
    <!--右上角管理员-->
    <div class="img-wrap">
      <el-dropdown @command="handleCommand">
        <img :src="userinfo.avatar" alt="">
        <el-dropdown-menu slot="dropdown" :split-button="true">
          <el-dropdown-item command="amend">修改密码</el-dropdown-item>
          <el-dropdown-item command="exit">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!--修改密码的弹出层-->
    <div class="edit" v-show="isShow">
      <div class="mask">
        <div class="pop-up">
          <div class="addCategory">
            <el-form :model="formData" ref="formData" label-width="100px">
              <el-form-item label="原密码">
                <el-input v-model="formData.password"></el-input>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input v-model="formData.new_password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input v-model="formData.confirm_password"></el-input>
              </el-form-item>
            </el-form>
            <div class="butt">
              <el-button @click="cancelCategory" type="primary">取消</el-button>
              <el-button @click="saveCategory" type="primary">保存</el-button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import router from '../../router/index'

  export default {
    name: "layout",
    data() {
      return {
        userinfo: {},
        isShow:false,
        formData:{
          password:'',
          new_password:'',
          confirm_password:''
        },
      }
    },
    methods: {
      handleCommand(command) {
        if (command == 'amend') {
          this.isShow=true
        } else {
          router.push('/login')
        }
      },
      cancelCategory(){
        this.isShow=false
      },
      saveCategory(){
        if(this.formData.new_password === this.formData.confirm_password){
          if(this.formData.new_password !== this.formData.password){
            this.$axios.put('/user/password',this.formData).then(res=>{
              if(res.code ===200){
                this.$message.success('修改密码成功')
                this.isShow=false
              }
            })
          }else{
            this.$message.success('密码重复')
          }
        }else{
          this.$message.success('密码不一致')
        }

      },
    },
    created() {
      this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
      console.log('userinfo',this.userinfo);
    }
  }
</script>

<style scoped lang="scss">
  .layout {
    position: relative;
    .title {
      margin-left: 200px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      background: #545c64;
      h2 {
        font-weight: 400;
        color: #fff;
      }
    }

    .side-bar {
      padding-top: 80px;
      background: #545c64;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 200px;
      overflow: hidden;
      border-right: none
    }
    .contain {
      margin-left: 200px;
      padding: 15px;
    }
    .img-wrap {
      position: absolute;
      right: 20px;
      top: 5px;
      width: 50px;
      height: 50px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }

  /deep/ {
    .el-menu {
      border-right: none;
    }
  }
  .layout{
    position: relative;
    .mask{
      position: fixed;
      background: rgba(100,100,100,.5);
      z-index: 200;
      left: 200px;
      top: 0px;
      bottom: 0;
      right: 0;
    }
    .pop-up{
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      z-index: 998;
      background: #fff;
      width: 500px;
      height: 300px;
      border-radius: 20px;
      box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
      .addCategory{
        padding: 30px;
        width: 300px;
        .butt{
          margin-left: 40px;
          margin-top: 10px;
          display: flex;
          justify-content: space-around;
        }

      }
    }
  }
</style>
