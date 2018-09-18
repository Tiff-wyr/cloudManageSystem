<template>
  <div>
    <h2>图片提交</h2>
    <p>传统表单上传图片</p>
    <!--<form action="https://upload-z1.qiniup.com" enctype="multipart/form-data" method="post">-->
      <!--<input type="file" name="file">-->
      <!--<br>-->
      <!--<input type="text" name="token" v-model="token">-->
      <!--<br>-->
      <!--<button >提交</button>-->
    <!--</form>-->
    <input type="file" @change="handleChange">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "index",
    data() {
      return {
        token: '',

      }
    },
    methods: {
      // getToken() {
      //   axios.get('http://upload.yaojunrong.com/getToken').then(res => {
      //   console.log(res.data.data)
      //     this.token=res.data.data
      //   })
      // },
      handleChange(event){
        console.log(event)
      }

    },
      // created(){
      //   this.getToken()
      // }

  }
</script>

<style scoped>

</style>
