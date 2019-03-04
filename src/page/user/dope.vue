<!--我的消息-->
<template>
  <div>
    <van-nav-bar
      :title=title
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
      <li class="user" v-for="itms in dope" :key="itms.id">
        <div class="user-cont">
          <img src="../../assets/img/default.png" alt="">
          <div>
            <h2>{{itms.title}}</h2>
            <p class="p2">{{itms.create}}</p>
            <p class="p3">{{itms.desc}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'dope',
    data(){
      return{
        title: '我的消息',
        dope:[
          {id:1,
            title:'系统消息',
            desc:'这是一条测试数据，该功能已完善',
            create:'2019-02-28 14:12:00'
          },
          {id:2,
            title:'系统消息',
            desc:'这是一条测试数据，该功能已完善1111',
            create:'2019-02-28 14:13:00'
          }
        ]
      }
    },
    created(){

    },
    methods:{
      onClickLeft() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style scoped>
  @import "../../assets/css/dope.css";
</style>
