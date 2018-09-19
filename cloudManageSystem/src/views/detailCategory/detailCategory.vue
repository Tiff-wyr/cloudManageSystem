<template>
<div>
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/layout/categoryList'}">分类列表</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/layout/detailCategory'}">列表详情</el-breadcrumb-item>
  </el-breadcrumb>
  <!--列表详情-->
  <el-table
    :data="tableData"
    stripe="true"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="分类名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="icon"
      label="分类图标"
      width="200">
      <template slot-scope="scope">
        <img :src="scope.row.icon" class="icon">
      </template>
    </el-table-column>
    <el-table-column
      prop="index"
      label="分类排序"
      width="180"
    >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini" @click="edit">编辑
        </el-button>
        <el-button
          size="mini" @click="detail">详情
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
      name: "detailCategory",
      data(){
        return {

        }
      },
      methods:{
        getData(id){
          this.$axios.get(`/category/${id}/books`,)
        }
      },
      created(){
        this.getData()
      }


    }
</script>

<style scoped>

</style>
