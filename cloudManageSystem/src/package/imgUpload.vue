<template>
  <div>
    <label class="con">
      <input type="file" style="display: none" @change="handle">
      <i class=" el-icon-plus" v-show="isShow"></i>
      <img :src="imgUrl"  v-show="!isShow">
    </label>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "imgUpload",
    props: {
      value: ''
    },
    data() {
      return {
        token: '',
        imgUrl: this.value,
        isShow: true
      }
    },
    methods: {
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token=res.data.data
        })
      },
      handle(event){
       const file=event.target.files[0]
        let formData=new FormData()
        formData.append('file',file,file.name)
        formData.append('token',this.token)

        axios.post('https://upload-z1.qiniup.com',formData).then(res=>{
          this.isShow=false
          this.imgUrl=res.data.url
          this.$emit('input',this.imgUrl)
        })
      }
    },
    watch: {
      value (newvalue,oldvalue) {
        this.imgUrl = newvalue
        if (this.imgUrl !== '') {
          this.isShow = false
        }
      }
    },
    created(){
      this.getToken()
    }
  }
</script>

<style scoped lang="scss">
  .con {
    display: block;
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    /deep/ {
      .el-icon-plus {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
 .con img{
   width: 100px;
   height: 100px;
 }
</style>
