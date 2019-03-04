<!--用户设置中心-->
<template>
  <div>
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <van-cell-group>
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
    name:'setting',
    data(){
      return{
        title:'设置中心'
      }
    }
  }
</script>
<style lang="less">
  .van-cell {
    height: 50px;
  }
</style>

