<template>
    <div class="user-management">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
        <el-table
          :data="tableData"
          :stripe="true"
         >
          <el-table-column
            prop="createdTime"
            label="日期"
            width="250">
          </el-table-column>
          <el-table-column
          prop="nickname"
          label="姓名"
          width="180">
        </el-table-column>
          <el-table-column
            prop="desc"
            label="个性签名"
            width="250">
          </el-table-column>
          <el-table-column
            prop=""
            label="用户头像"
            width="200">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar">
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini" @click="amendUser">查看详情</el-button>
              <el-button
                size="mini"
                type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        data(){
         return{
           tableData:[]
         }
        },
      methods:{
          getData(){
            this.$axios.get('/user').then(res=>{
              if(res.data.code===200){
                this.tableData = res.data.data
              }
              console.log(res.data.data)
            })
          }
      },
     created(){
          this.getData()
     },
      amendUser(){

      }
    }
</script>

<style scoped lang="scss">
.user-management{

      .avatar{
        width: 80px;
        height: 80px;
      }

}
</style>
