<template>
  <div class="layout">
    <div class="title">
      <h2>cloud后台管理系统</h2>
    </div>
    <div class="side-bar">

      <el-menu
        :router="true"
        @open="handleOpen"
        @close="handleClose"
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
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">图书管理</span>
          </template>
        </el-submenu>
      </el-menu>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layout",
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },

    }
  }
</script>

<style scoped lang="scss">
  .layout {
    .title {
      margin-left: 200px;
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #ccc;
      h2 {
        font-weight: 400;
        color: #000;
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
      border-right:none
    }
    .contain {
      margin-left: 200px;
      padding: 15px;
    }
  }
  /deep/{
    .el-menu{
      border-right: none;
    }
  }

</style>
