<!--帮助中心页面-->
<template>
  <div>
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item,index) in help" :key="index+1">
        <div slot="title">{{index+1}}.{{item.question}}</div>
        {{item.answer}}
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
  export default {
    name:'help',
    data(){
      return{
        title:'帮助中心',
        activeNames:[],
        help:[]
      }
    },
    mounted() {
      var _this = this;
      _this.AycAxios('/api/help/list',{
        method: 'get',
        data: {}
      },function (data) {
        _this.help = data
      }),function (res) {

      }
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1);
      },
    }
  }
</script>
