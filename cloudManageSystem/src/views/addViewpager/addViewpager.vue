<template>
<div class="addView">
  <!--面包屑-->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
  </el-breadcrumb>
  <!--添加轮播图-->
  <div class="addSwiper">
    <el-form :model="formData"  ref="formData" label-width="100px">

      <el-form-item label="轮播图标题" prop="title">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="书籍分类" prop="book">
        <el-select v-model="value" placeholder="请选择" @change="detDetail">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.title"
            :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>

      <div v-show="isShowing" class="pic">
        <div class="left">
          <img :src="form.img" alt="">
        </div>
        <div class="right">
          <div class="title" v-model="form.title">{{form.title}}</div>
          <div class="author" v-model="form.author">{{form.author}}</div>
        </div>
      </div>

      <el-form-item label="头图选择" prop="img">
        <imgUpload v-model="formData.img"></imgUpload>
      </el-form-item>

      <el-form-item label="排序选择" prop="index">
        <el-input-number :min="1" :max="1000" v-model="formData.index" label="描述文字" >1</el-input-number>
      </el-form-item>
    </el-form>
    <el-button @click="saveCategory" type="primary">确认添加</el-button>
  </div>
  <!--分类的弹出层-->
  <div class="edit" v-show="isShow">
    <div class="mask">
      <div class="pop-up">

          <el-table
            :data="tableData"
            :stripe="true"
            style="width: 100%">
            <el-table-column
              prop="title"
              label="书名"
              width="250">
            </el-table-column>
            <el-table-column
              prop="author"
              label="作者"
              width="150">
            </el-table-column>
            <el-table-column
              prop="img"
              label="封面"
              width="200">
              <template slot-scope="scope">
                <img :src="scope.row.img" class="icon">
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini" @click="edit(scope.row._id)">选择
                </el-button>
              </template>
            </el-table-column>
          </el-table>

      </div>
    </div>

  </div>
</div>
</template>

<script>
  import imgUpload from '../../package/imgUpload'
    export default {
      name: "addViewpager",
      components:{
        imgUpload
      },
      data(){
        return{
          formData:{
            title:'',
            img:'',
            book:'',
            index:''
          },
          options:[],
          value:'',
          isShow:false,
          tableData:[],
          isShowing:false,
          form:{
            img:'',
            title:'',
            author:'',
          }

        }
      },
      methods:{
        detDetail(id){
          this.isShow=true;
          this.$axios.get(`/category/${id}/books?pn=1&size=100`).then(res=>{
              this.tableData=res.data.data.books
          })
        },
        // 选择 将这本书的信息放到一个div里
        edit(id) {
          this.isShowing = true;
          this.$axios.get(`/book/${id}`).then(res => {
            console.log('book', res);
            this.form={...res.data.data}
            this.isShow = false;
          })
        },
        saveCategory(){
          this.$axios.post('/swiper',this.formData).then(res=>{
            if (res.code===200){
              this.$message.success('添加成功')
            }
          })
        },
        getOptions(){
          this.$axios.get(`/category?pn=1&size=100`).then(res => {
            if (res.data.code === 200) {
              this.options = res.data.data
            }
          })
        },
      },
      created(){
        this.getOptions()
      }
    }
</script>

<style scoped lang="scss">
  .pic{
    margin-left: 50px;
    margin-bottom: 20px;
    width: 260px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 3px;
    display: flex;
    padding: 10px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
    .left{
      img{
        width: 70px;
        height: 80px;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .author{
        margin-top: 20px;
      }
    }
  }
  .addSwiper{
    margin-top: 30px;
    width: 600px;
  }
  .icon{
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .addView{
    position: relative;
    .mask{
      position: fixed;
      background: rgba(100,100,100,.5);
      z-index: 200;
      left: 0px;
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
      width: 700px;
      height: 500px;
      border-radius: 20px;
      box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
      padding: 30px 30px 0;
      overflow: scroll;
    }
  }
</style>
