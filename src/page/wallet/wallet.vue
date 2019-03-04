<template>
    <div class="user-actuve">
        <div class="complete">
      <div class="head">
        <div class="head-top">
          <router-link to="help" style="color:#fff;font-size: 3.2vw">
            <img src="../../assets/img/？.png" alt="" />
            OIT说明
          </router-link>
          <h1>OIT总资产</h1>
          <router-link class="head-r" style="color:#fff;font-size: 3.2vw" to="oitdesc">OIT明细</router-link>
        </div>
        <ul>
          <li>
            <div class="aggregate">
              <img class="hexagon" src="../../assets/img/liubianxing.png" alt="" />
              <span class="da c">{{oitvo.oitTotal}}</span>
            </div>
            <div class="aggregate-bottom">
              <p>
                约
                <span>{{oitvo.oitChy}}</span>
                元
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="blocking">
            <h2>冻结数</h2>
            <div class="freeze">
              <div class="aggregate dong">
                <img class="hexagon" src="../../assets/img/liubianxing.png" alt="" />
                <span class="da">{{oitvo.oitNum}}</span>
              </div>
              <div class="query">
                等待释放
                <img src="../../assets/img/？.png" alt="" />
              </div>
            </div>
          </li>
          <li class="blocking gai">
            <h2>已释放</h2>
            <div class="freeze">
              <div class="aggregate dong">
                <img class="hexagon" src="../../assets/img/liubianxing.png" alt="" />
                <span class="da">{{oitvo.useOitNum}}</span>
                <span class="xiao"
                  >约
                  <span>{{oitvo.useOitChy}}</span>
                  元
                </span>
                <span class="exchange circle">兑换现金</span>
              </div>
            </div>
            <div class="release">
              <div class="parities circle">
                <img src="../../assets/img/huilv.png" alt="" />
                查看汇率趋势
              </div>
              <span class="present">当前汇率：<span>{{present}}</span></span>
            </div>
          </li>
          <li class="blocking gai">
            <h2>现金</h2>
            <div class="freeze">
              <div class="aggregate dong">
                <span class="da">￥{{oitvo.balance}}</span>
                <span class="xiao yuan">元</span>
                <span class="circle exchange ex">提现</span>
              </div>
              <div class="query querys">
                提现明细
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sign">
        <ul>
          <h2>OIT获得攻略</h2>
          <li>
            <div class="sign-in">
              <img src="../../assets/img/meiriqiandao.png" alt="" />
              <div>
                <p class="everyday">每日签到</p>
                <p class="xiao">每日签到可领取5OLT</p>
              </div>
            </div>
            <span class="circle zhong">
              已签到
            </span>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in">
              <img src="../../assets/img/yaoqing.png" alt="" />
              <div>
                <p class="everyday">邀请用户</p>
                <p class="xiao">邀请用户可领取200OIT</p>
              </div>
            </div>
            <span class="circle little">
              邀请
            </span>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in everyday-s">
              <img src="../../assets/img/fabuyuanchuang.png" alt="" />
              <div>
                <p class="everyday">发布原创文章</p>
                <p class="xiao txiao">发布一篇原创文章可领取200OIT</p>
                <p class="xiao txiao">pc端网址：www.loveayc.com</p>
              </div>
            </div>
            <p class="xiao txiao">去pc端发布文章</p>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in everyday-s">
              <img src="../../assets/img/fabuzhuanzai.png" alt="" />
              <div>
                <p class="everyday">发布转载文章</p>
                <p class="xiao txiao">发布一篇转载文章可领取10OIT</p>
                <p class="xiao txiao">pc端网址：www.loveayc.com</p>
              </div>
            </div>
            <p class="xiao txiao">去pc端转载文章</p>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in">
              <img src="../../assets/img/zhuanfa.png" alt="" />
              <div>
                <p class="everyday">转发文章</p>
                <p class="xiao">转发每篇文章可领取10OIT</p>
              </div>
            </div>
            <span class="circle little">
              转发
            </span>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in">
              <img src="../../assets/img/shiming.png" alt="" />
              <div>
                <p class="everyday">实名认证</p>
                <p class="xiao">实名认证可领取50OIT</p>
              </div>
            </div>
            <span class="circle little">
              认证
            </span>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in">
              <img src="../../assets/img/tangguo.png" alt="" />
              <div>
                <p class="everyday">糖果发放</p>
                <p class="xiao">官方不定期派送OIT</p>
              </div>
            </div>
            <div class="wire"></div>
          </li>
          <li>
            <div class="sign-in">
              <img src="../../assets/img/xinyonghu.png" alt="" />
              <div>
                <p class="everyday">新用户赠送</p>
                <p class="xiao">每个新用户可获得200OIT</p>
              </div>
            </div>
            <div class="wire"></div>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
  import help from '../user/help'
  import oitdesc from '../wallet/oitdetail'


  export default {
    name: 'wallet',
    components:{
        help,oitdesc
    },
    data(){
      return{
        oitvo:[],
        present:''
      }
    },
    mounted() {
      debugger
      this.axios({
        method:'post',
        url:'/api/userDetail/oitTotal',
        headers:{
          'token':'APP15511588245216'      }
      }).then(res=>{
        this.oitvo = res.data.data;
        console.log(this.oitvo)
        console.log(res)
      }),
        this.axios({
          method:'post',
          url:'/api/oitRate/near',
          headers:{
            'token':'APP15511588245216'      }
        }).then(res=>{
          this.present = res.data.data.huiLv;
          console.log(res.data.data.huiLv)
        })
    }
  }
</script>

<style scoped>
@import "../../assets/css/wallets.css";
</style>
