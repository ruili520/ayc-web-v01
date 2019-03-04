<!--通过申请作者进入判断，认证页、认证中、认证后-->
<template>
  <div v-if="result==true">
    <authoregis></authoregis>
  </div>
  <div v-else-if="result!=true">
    <certifiedauthor></certifiedauthor>
  </div>
</template>
<script>
  import certifiedauthor from '@/page/user/certifiedauthor'
  import authoregis from '@/page/user/authoregis'
  export default {
    name:'author',
    components:{
      certifiedauthor,authoregis
    },
    data(){
      return{
        result:''
      }
    },
    mounted() {
      var _this = this;
      _this.AycAxios('/api/user/isAuthor',
        {
          method:'post',
          url:'/api/user/isAuthor',
          headers:{
            token:'APP155142102496235'
          },
        },function (data) {
          _this.result = data;
        }
      )
    },
  }
</script>
