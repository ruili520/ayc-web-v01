<!--实名认证通过页面-->
<template>
  <div>
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <div class="succeed">
      <img src="../../assets/img/yishizuozhe.png" alt="">
    </div>
    <div class="succeed-bottom">
      <h2>您已是爱原创作者</h2>
      <p class="p-b">您已经可以去爱原创PC端创作图文内容</p>
      <p class="p-b">爱原创创作平台网址</p>
      <p class="p-b">www.loveayc.com</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:'authoregis',
    data(){
      return{
        title:'认证作者'
      }
    },
    methods:{
      onClickLeft(){
        this.$router.back(-1)
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/css/author.css";
</style>

