<template>
  <div class="app">
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <div class="geren" style="width:29vw;">
      <p>
        <span>{{articleSize}}</span>
        原创文章
      </p>
    </div>
    <ul >
      <li class="user" v-for="item in atricles" :key="item.id" >
        <div class="user1">
          <div class="userimg">
            <img :src="item.avatar" alt>
          </div>
          <div class="userinfo">
            <p class="username">{{item.penName}}</p>
            <p class="time">{{item.createdAt}}</p>
          </div>
          <div class="tob"></div>
        </div>
        <div class="user2">
          <p class="headline">{{item.title}}</p>
          <p class="content" v-html="item.desc"></p>
        </div>
        <div class="userbot">
          <ul>
            <li>
              <img src="../../assets/img/sousuopinlunye.png" alt>
              <span>{{item.commentNum}}</span>
            </li>
            <li>
              <img src="../../assets/img/wenzhangxiangqingdianzan.png" alt>
              <span>{{item.likeNum}}</span>
            </li>
            <li>
              <img src="../../assets/img/shoucanghui.png" alt>
              <span>{{item.collectNum}}</span>
            </li>
            <li>
              <img src="../../assets/img/fenxiang.png" alt>
              <span>{{item.shareName}}</span>
            </li>
          </ul>
          <div class="more">
            <img src="../../assets/img/gengduo.png" alt>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "myarticle",
    data(){
      return{
        title:'我的文章',
        atricles:[],
        articleSize:0
      }
    },
    method:{
      on(){

      }
    },
    mounted() {
      /*个人主页信息展示*/
      var _this = this;
      var data = {
        pageNum: "1",
        pageSize: "10"
      }
      _this.AycPost('/api/article/myArticles',data
        , function (data) {
          _this.atricles = data.list;
          _this.articleSize =data.list.length
        },function (res) {
          _this.AycToast(res,'middle',1000)
        })
    },
    methods:{
      onClickLeft(){
        this.$router.go(-1);
      }
    }
  };
</script>

<style scoped>
  @import "../../assets/css/myarticle.css";
</style>
