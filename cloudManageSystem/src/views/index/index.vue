<template>
  <div>
    <!--<form action="https://upload-z1.qiniup.com" enctype="multipart/form-data" method="post">-->
      <!--<input type="file" name="file">-->
      <!--<br>-->
      <!--<input type="text" name="token" v-model="token">-->
      <!--<br>-->
      <!--<button >提交</button>-->
    <!--</form>-->
    <!--<input type="file" @change="handleChange">-->
    <!--<img :src="imgUrl" alt="">-->
    <imgUpload></imgUpload>
  </div>
</template>

<script>
  import imgUpload from '../../package/imgUpload'
  import axios from 'axios'

  export default {
    name: "index",
    components:{
      imgUpload
    },
    data() {
      return {
        // token:'',
        // imgUrl:''

      }
    },
    methods: {
      // getToken() {
      //   axios.get('http://upload.yaojunrong.com/getToken').then(res => {
      //   console.log(res.data.data)
      //     this.token=res.data.data
      //   })
    //  },
      // handleChange(event){
      //  const file=event.target.files[0]
      //   let formData=new FormData()
      //   formData.append('file',file,file.name)
      //   formData.append('token',this.token)
      //   axios.post('https://upload-z1.qiniup.com',formData).then(res=>{
      //     this.imgUrl=res.data.url
      //   })
      //
      // }

    },
      // created(){
      //   this.getToken()
      // }

  }
</script>

<style scoped>

</style>
