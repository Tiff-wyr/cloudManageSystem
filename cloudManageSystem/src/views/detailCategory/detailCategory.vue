<template>
<div>
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/layout/categoryList'}">分类列表</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/layout/detailCategory'}">列表详情</el-breadcrumb-item>
  </el-breadcrumb>
  <!--列表详情-->
  <div class="detailCategory">
    <el-table
      :data="tableData"
      stripe="true"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="图书名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="img"
        label="图书封面"
        width="150">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="icon">
        </template>
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="100"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建日期"
        width="220">
      </el-table-column>
      <el-table-column
        prop="index"
        label="书籍排序"
        width="100"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini" @click="edit">生成轮播图
          </el-button>
          <el-button
            size="mini" @click="detail">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger" @click="deleteRow(scope.row._id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
    export default {
      name: "detailCategory",
      data(){
        return {
          tableData:[]
        }
      },
      methods:{
        getData(id){
          this.$axios.get(`/category/${id}/books?pn=1&size=100`).then(res=>{
            this.tableData=res.data.data.books
          })
        }
      },
      created(){
        let id = this.$route.params.id
        this.getData(id)
      }


    }
</script>

<style scoped lang="scss">
  .detailCategory{
    margin-top: 30px;
  }
  .icon{
    line-height: 50px;
    width: 50px;
    height: 50px;
  }
</style>
