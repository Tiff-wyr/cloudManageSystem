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
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
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
            <el-menu-item index="/layout/user">轮播图列表</el-menu-item>
            <el-menu-item index="/layout/addUser">添加轮播图</el-menu-item>
          </el-submenu>

        </el-submenu>
      </el-menu>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
    <div class="img-wrap">
      <el-dropdown>
        <img :src="userinfo.avatar" alt="">
        <el-dropdown-menu slot="dropdown" :split-button="true">
          <el-dropdown-item @click="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layout",
    data () {
      return {
        userinfo: {}
      }
    },
    methods: {
      changePassword(){
        this.$message.info('这是一条消息提示')
      },
    },
    created () {
      this.userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
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

</style>
