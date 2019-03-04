<!--用户个人中心-->
<template>
  <div>
    <div class="head">
      <img src="../../assets/img/user-bg.png" alt="">
    </div>
    <div class="user">
      <div class="user-top">
        <img class="userimg" src="../../assets/img/autologo.jpg" alt="">
        <h1>{{result.penName}}</h1>
        <!--<img class="gender" src="../../assets/img/nan.png" alt="">-->
        <img class="gender" src="../../assets/img/nv.png" alt="">
      </div>
      <router-link class="user-bottom" to="userdetails">
        <div class="user-img">
          <img class="author" src="../../assets/img/youzhizuozhe.png" alt="">
          <p>{{result.type==1?"普通用户":"作者"}}</p>
        </div>
        <div class="user-r">
          <p>{{result.penName}}</p>
          <span>关注</span><span>{{result.focusNum}}</span>　<span>|</span>　<span>粉丝</span><span>{{my.followNum}}</span>
        </div>
        <img class="r" src="../../assets/img/right-link.png" alt="">
      </router-link>
    </div>

    <van-cell-group style="margin-top:-28.6667vw">
      <van-cell icon="chat" title="我的消息" value="消息列表" is-link to="dope"/>
      <van-cell icon="comment" title="我的文章" value="我的文章都在这里" is-link to="myarticle"/>
      <van-cell icon="gem" title="我的打赏" value="查看打赏明细" is-link to="myreward"/>
      <van-cell icon="star" title="我的收藏" value="收藏文章列表" is-link to="mycollect"/>
      <van-cell icon="coupon" title="申请作者" value="马上开始实现写作梦想" is-link to="author"/>
      <!--<van-cell icon="fire" title="爱原创榜单" value="各种人气榜单" is-link/>-->
      <van-cell icon="add-square" title="邀请" value="邀请亲朋好友得OIT" is-link to="invite"/>
      <van-cell icon="info" title="帮助中心" value="各种不懂看这里" is-link to="help"/>
      <van-cell icon="setting" title="设置" value="相关设置" is-link/>
    </van-cell-group>
  </div>
</template>

<script>

  export default {
    name: 'usercenter',
    components:{
    },
    data() {
      return {
        result:[],
        my:[]
      }
    },
    mounted() {
      var _this = this;
      _this.AycAxios('/api/userDetail/detail',{
        method: 'post',
        headers:{
          token:localStorage.getItem('token')
        },
        data:{}
      },function (data) {
        _this.result = data
      }),function () {

      },
        _this.AycAxios('/api/userDetail/my',{
          method: 'post',
          headers:{
            token:localStorage.getItem('token')
          },
          data:{},
        },function (data) {
          _this.my = data
        }),function () {

      }
    }
  };
</script>

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      display: block;
    }

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }

  .van-cell {
    height: 50px;
  }

  @import "../../assets/css/usercenter.css";
</style>
