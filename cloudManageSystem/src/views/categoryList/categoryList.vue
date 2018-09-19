<template>
<div>
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>分类列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!--分类列表-->
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
          size="mini" @click="detail(scope.row._id)">详情
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
        name: "categoryList",
      data(){
          return {
            tableData:'',

          }
      },
      methods:{
        getData() {
          this.$axios.get(`/category?pn=1&size=100`).then(res => {
            if (res.data.code === 200) {
              this.tableData = res.data.data
              console.log('tableData',res.data.data);
            }
          })
        },
        edit(){},
        detail(){},
        deleteRow(id) {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.delete(`/category/${id}`).then(res => {
              console.log('delete',res)
              if(res.code === 200){
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
                this.getData()
              }
            })
            ;
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        } ,
      },
      created(){
          this.getData()
      }
    }
</script>

<style scoped lang="scss">
.icon{
  line-height: 50px;
  width: 50px;
  height: 50px;
}
</style>
