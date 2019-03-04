<template>
  <div>
    <div class="app">
      <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
      <div class="geren" style="width:29vw;">
        <p>
          <span>{{collectsSize}}</span>
          篇文章
        </p>
      </div>
      <ul>
        <li class="user" v-for="item in collects">
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
                <span>{{item.shareNum}}</span>
              </li>
            </ul>
            <div class="more">
              <img src="../../assets/img/gengduo.png" alt>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mycollect",
    data(){
      return{
        title:'我的收藏',
        collects:[],
        collectsSize:''
      }
    },
    mounted() {
      /*我的收藏查询*/
      var _this = this;
      _this.AycAxios('/api/article/myCollects',
        {
          method: 'post',
          headers: {
            token: localStorage.getItem('token')
          },
          data: {
            pageNum:"1",
            pageSize:"10"
          }
        },function (data) {
          _this.collects = data.list;
          _this.collectsSize = data.list.length
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
  @import "../../assets/css/mycollect.css";
</style>
