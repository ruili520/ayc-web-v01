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
          <van-field v-model="mobile" placeholder="请输入手机号" />
        </div>
      </li>
      <li class="mobile">
        <h2>验证码</h2>
        <div >
            <span>
                <!--<img class="img-l" src="../../../static/img/mima.png" alt>-->
            </span>
          <van-field
            v-model="sms"
            center
            clearable
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary" @click="sendMsg">发送验证码</van-button>
          </van-field>
        </div>
      </li>
    </ul>
    <ul class="select">
      <li class="cipher">
        <router-link to="login"><p>使用密码登录</p></router-link>
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
  export default {
    name:'smslogin',
    data(){
      return{
        title:'验证码登录',
        mobile:'',
        password:'',
        sms:''
      }
    },
    created() {
    },
    mounted(){

    },
    methods:{
      onClickLeft(){
          this.$router.go(-1)
      },
      /*发送验证码*/
      sendMsg() {
        var _this = this;
        _this.AycAxios('/api/sms/sendcode', {
          method: 'post',
          data: {
            mobile: _this.mobile,
            type: '1'
          }
        }, function (data) {
          _this.$toast('短信已发送成功')
        })
      },
      /*验证码登录*/
      login(){
        var _this = this;
        _this.AycAxios('/api/user/login', {
          method: 'post',
          data: {
            smscode:_this.sms,
            mobile:_this.mobile
          }
        }, function (data) {
          localStorage.setItem('token',data)
          // // 解析token
          // const decode = jwt_decode(token);
          // // 存储数据
          // _this.changeLogin({ token: decode });
          _this.$router.push('/user');
        })
      },
    }
  }
</script>
<style lang="less">
  @import "../assets/css/login.css";
</style>
