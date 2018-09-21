<template>
<div class="getView">
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>轮播图列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!--轮播图列表-->
  <el-table
    :data="tableData"
    :stripe="true"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="标题"
      width="200">
    </el-table-column>
    <el-table-column
      prop="img"
      label="头图"
      width="200">
      <template slot-scope="scope">
        <img :src="scope.row.img" class="icon">
      </template>
    </el-table-column>
    <el-table-column
      prop="index"
      label="排序"
      width="180"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini" @click="edit(scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger" @click="deleteRow(scope.row._id)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    export default {
      name: "getViewpager",
      data(){
          return{
            tableData:[],
          }
      },
      methods:{
        getView(){
          this.$axios.get(`/swiper?pn=1&size=100`).then(res=>{
            console.log('swiper',res);
            this.tableData = res.data.data
          })
        }
      },
     created(){
        this.getView()
     }
    }
</script>

<style scoped lang="scss">
.icon{
  line-height: 50px;
  height: 50px;
  width: 50px;
}
</style>
