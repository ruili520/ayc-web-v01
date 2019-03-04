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
        <div>
          <van-field v-model="mobile" placeholder="请输入手机号"/>
        </div>
      </li>
      <li class="mobile">
        <h2>验证码</h2>
        <div>
            <span>
                <!--<img class="img-l" src="../../../static/img/mima.png" alt>-->
            </span>
          <van-field
            @blur="checdMsg"
            v-model="sms"
            center
            clearable
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary" @click="sendMsg">发送验证码</van-button>
          </van-field>
        </div>
      </li>
      <li class="mobile">
        <h2>密码</h2>
        <div>
            <span>
                <!--<img class="img-l" src="../../../static/img/mima.png" alt>-->
            </span>
          <van-field v-model="password" type="password" placeholder="请输入密码"/>
        </div>
      </li>
    </ul>
    <ul class="select">
      <li class="enter">
        <button @click="register">注册</button>
      </li>
    </ul>
    <ul class="agreement">
      <li>
        <span>已阅读并同意<router-link to="agreement">《爱原创用户协议》</router-link></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data() {
      return {
        title: '注册爱原创',
        mobile: '',
        sms: '',
        password: ''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.back(-1)
      },
      /*注册用户发送验证码,状态码2*/
      sendMsg() {
        var _this = this;
        _this.AycAxios('/api/sms/sendcode', {
          method: 'post',
          data: {
            mobile: _this.mobile,
            type: '2'
          }
        }, function (data) {
          _this.$toast('短信已发送成功')
        })
      },
      /*验证码输入框失去焦点，开始检测验证码是否正确*/
      checdMsg() {
        var _this = this;
        _this.AycAxios('/api/sms/checkSmscode',
          {
            method: 'post',
            data: {
              type: '2',
              mobile: _this.mobile,
              smsCode: _this.sms
            }
          }, function (data) {
            _this.$toast(data)
          }
        )
      },
      /*点击注册按钮进行注册操作*/
      register() {
        var _this = this;
        _this.AycAxios('/api/user/register',{
          method: 'post',
          data: {
            mobile: _this.mobile,
            password: _this.password,
            smsCode:_this.sms
          }
        },function (data) {
          _this.$toast("注册成功，欢迎你加入爱原创")
          _this.$router.push('/login')
        })
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/css/login.css";
</style>
