<!--登录页面-->
<template>
  <div>
    <van-nav-bar
      :title=title
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
      <li class="mobile">
        <h2>手机号</h2>
        <div >
          <van-field v-model="mobile" placeholder="请输入手机号"/>
        </div>
      </li>
      <li class="mobile">
        <h2>密码</h2>
        <div >
            <span>
                <!--<img class="img-l" src="../../../static/img/mima.png" alt>-->
            </span>
          <van-field v-model="password" type="password" placeholder="请输入密码" />
        </div>
      </li>
    </ul>
    <ul class="select">
      <li class="cipher">
        <router-link to="smslogin"><p>使用验证码登录</p></router-link>
      </li>
      <li class="enter"><button @click="login">登录</button> </li>
      <li class="register">
        <router-link to="register"><p>新用户注册</p></router-link>
      </li>
    </ul>
    <ul class="social">
      <li class="direct">
        <div></div>
        <p>社交账户直接登录</p>
        <div></div>
      </li>
      <li>
        <!--<img src="../../../static/img/weibo.png" alt>-->
        <!--<img src="../../../static/img/QQ@2x.png" alt>-->
        <!--<img src="../../../static/img/weixin.png" alt>-->
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex';
  export default {
    name:'login',
    data(){
      return{
        title:'密码登录',
        mobile:'',
        password:'',
      }
    },
    created() {
    },
    mounted(){

    },
    methods:{
      ...mapMutations(['changeLogin']),
      onClickLeft(){

      },
      login(){
        var _this = this;
        _this.AycAxios('/api/user/login',
          {method:'post', data:{
              mobile:_this.mobile,
              password:_this.password
            }},function (data) {
            console.log(data)
            localStorage.setItem('token',data)
            // // 解析token
            // const decode = jwt_decode(token);
            // // 存储数据
            // _this.changeLogin({ token: decode });
            _this.$router.push('/user');
          },function (res) {
            _this.$toast('账号密码错误')
          })
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/css/login.css";
</style>
