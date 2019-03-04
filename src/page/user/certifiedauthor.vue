<!--认证作者页面-->
<template>
  <div>
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <div>
      <h2 class="apply">申请成为爱原创作者需要实名认证</h2>
      <ul class="select">
        <li class="enter colore">实名认证</li>
      </ul>
      <div class="welfare">
        <h3>实名认证后您可以:</h3>
        <ul>
          <li>
            <img src="../../assets/img/duihao.png" alt="" />
            成为作者
          </li>
          <li>
            <img src="../../assets/img/duihao.png" alt="" />
            提现
          </li>
          <li>
            <img src="../../assets/img/duihao.png" alt="" />
            获得50OIT
          </li>
          <li>
            <img src="../../assets/img/duihao.png" alt="" />
            其他更多官方福利
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'certifiedauthor',
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
