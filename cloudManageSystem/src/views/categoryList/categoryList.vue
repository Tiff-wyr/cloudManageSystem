<template>
<div class="contain1">
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>分类列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!--分类列表-->
  <el-table
    :data="tableData"
    :stripe="true"
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
          size="mini" @click="edit(scope.row)">编辑
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
  <!--编辑的弹出层-->
  <div class="edit" v-show="isShow">
    <div class="mask">
      <div class="pop-up">
        <div class="addCategory">
          <el-form :model="formData"  ref="formData" label-width="100px">
            <el-form-item label="分类名称">
              <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="分类图标">
              <imgUpload v-model="formData.icon"></imgUpload>
            </el-form-item>
            <el-form-item label="分类排序" prop="index">
              <el-input-number :min="1" :max="1000" v-model="formData.index" label="描述文字" >1</el-input-number>
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
  import imgUpload from '../../package/imgUpload'
  import router from '../../router/index'
    export default {
      name: "categoryList",
      components:{
        imgUpload
      },
      data(){
          return {
            tableData:[],
            isShow:false,
            this_id:'',
            formData:{
              title:'',
              icon:'',
              index:''
            }
          }
      },
      methods:{
        cancelCategory(){
          this.isShow=false
        },
        saveCategory(){
          console.log(this.formData)
          this.$axios.put(`/category/${this.this_id}`,this.formData).then(res=>{
            console.log('修改',res);
            if(res ===200){
              this.$message.success('成功修改')
            }
            this.isShow=false;
            this.getData();
            this.this_id=''
          })


        },
        getData() {
          this.$axios.get(`/category?pn=1&size=100`).then(res => {
            if (res.data.code === 200) {
              this.tableData = res.data.data
            }
          })
        },
        edit(obj){
          this.isShow=true
          this.formData = {...obj}
          this.this_id=obj._id
          console.log(this.formData)
        },
        detail(id){
          setTimeout(()=>{
            router.push(`/layout/detailCategory/${id}`)
          },500)
        },
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
        }
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
.contain1{
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
    height: 350px;
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
