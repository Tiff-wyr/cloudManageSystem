<template>
<div>
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>添加分类</el-breadcrumb-item>
  </el-breadcrumb>
  <!--添加分类-->
  <div class="addCategory">
    <el-form :model="formData"  ref="formData" label-width="100px">
      <el-form-item label="分类名称" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="分类图标" prop="icon">
        <imgUpload v-model="formData.icon" @upload="getImg"></imgUpload>
      </el-form-item>
      <el-form-item label="分类排序" prop="index">
        <el-input-number :min="1" :max="1000" v-model="formData.index" label="描述文字" >1</el-input-number>
      </el-form-item>
    </el-form>
    <el-button @click="saveCategory" type="primary">保存分类</el-button>
  </div>
</div>
</template>

<script>
  import imgUpload from '../../package/imgUpload'
  import router from '../../router/index'
    export default {
      name: "addCategory",
      components:{
        imgUpload
      },
      data(){
        return{
          num1:1,
          formData:{
            title:'',
            icon:'',
            index:''
          }
        }
      },
      methods:{
        getImg (res) {
          this.formData.icon = res
        },
        saveCategory(){
          this.$axios.post('/category',this.formData).then(res=>{
            console.log('add',res);
            if(res.code === 200){
              this.$message({
                message:res.msg,
                type:'success'
              })
              setTimeout(()=>{
                router.push('/layout/categoryList')
              },1000)
            }
          })
        },

      }

    }
</script>

<style scoped lang="scss">
  .addCategory{
    margin-top: 30px;
    width: 600px;
  }
</style>
