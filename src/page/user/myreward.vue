<!--我的打赏页面-->
<template>
  <div>
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <van-tabs v-model="active">
      <van-tab title="被打赏">
        <div class="contents">
          <ul>
            <li class="comment-2" v-for="itms in reward" :key="itms.id">
              <ul class="comment-cont">
                <li>
                  <img class="comment-img" src="../../assets/img/userimg.png" alt>
                </li>
                <li>
                  <p class="readercont">提现</p>
                  <p class="readeritme">
                    <span>{{itms.createdAt}}</span>
                  </p>
                  <p class="readeritme">
                    <span>流水号：</span>
                    <span>{{itms.payCode}}</span>
                  </p>
                </li>
                <li class="praise quantity">
                  <span>+{{itms.cash}}</span>
                  <span>元</span>
                  <div class="reply">已到账</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="打赏">
        <div class="contents">
          <ul>
            <li class="comment-2" v-for="itms in finanical" :key="itms.id">
              <ul class="comment-cont">
                <li>
                  <img class="comment-img" src="../../assets/img/userimg.png" alt>
                </li>
                <li>
                  <p class="readercont">打赏</p>
                  <p class="readeritme">
                    <span>{{itms.createdAt}}</span>
                  </p>
                  <p class="readeritme">
                    <span>流水号：</span>
                    <span>{{itms.payCode}}</span>
                  </p>
                </li>
                <li class="praise quantity">
                  <span>+{{itms.cash}}</span>
                  <span>元</span>
                  <div class="reply">已到账</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name:'withdraw',
    data(){
      return{
        title:'提现记录',
        reward:[
          {
            id:1,
            createdAt:'2018-12-29 10:48:00',
            payCode:'201812293358525855555',
            cash:203
          },{id:2,
            createdAt:'2019-12-29 10:48:00',
            payCode:'201912293358525855555',
            cash:100}
        ],
        myrewards:[]
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
  @import "../../assets/css/myreward.css";
</style>
