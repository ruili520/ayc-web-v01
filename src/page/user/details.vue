<!--个人详情页面-->
<template>
  <div>
    <van-nav-bar
      :title=title
      left-arrow
      @click-left="onClickLeft"
    />
    <van-cell-group>
      <!--<van-cell title="头像" img="" is-link/>-->
      <van-cell>
        123
      </van-cell>
      <van-cell title="笔名" :value="userInfo.penName" is-link to="upname"/>
      <van-cell title="年龄" value="18岁" is-link @click="showDate()"/>
      <van-cell title="性别" :value="userInfo.sex==1?'男':'女'" is-link @click="showSex()"/>
      <van-cell title="地区" :value="userInfo.province+userInfo.city" is-link @click="showArea()"/>
      <van-cell title="个性签名" value="这是个性签名哦~" is-link to="upsign"/>
    </van-cell-group>

    <!--修改信息弹出层-->
    <van-popup v-model="changeage" position="bottom">
      <van-datetime-picker title="选择年龄" v-model="currentDate" type="date" :min-date="minDate" :max-date="maxDate"
                           :formatter="formatter" show-toolbar="false" @confirm="ageonConfirm"
      />
    </van-popup>

    <van-popup v-model="changesex" position="bottom">
      <van-picker show-toolbar title="选择性别" :columns="sexList" @confirm="sexonConfirm"
      />
    </van-popup>
    <van-popup v-model="changearea" position="bottom">
      <van-area :area-list="areaList" :columns-num="2" value="110101" @confirm="areaonConfirm"/>
      <!--<van-area show-toolbar title="选择地区"  :="sexList" @confirm="sexonConfirm"-->
      <!--/>-->
    </van-popup>
  </div>
</template>

<script>
  import areaList from '@/assets/js/area'

  export default {
    name: 'userdetails',
    components: {
      areaList
    },
    data() {
      return {
        title: '编辑资料',
        mobile: '',
        changeage: false,
        changesex: false,
        changearea: false,
        minDate: new Date(1900, 1, 1),
        maxDate: new Date(2030, 1, 1),
        sexList: ['男', '女'],
        currentDate: new Date(),
        areaList: areaList,
        province:'',
        city: '',
        age: '',
        sex: '',
        userInfo:[]
      }
    },
    mounted(){
      this.axios({
        method:'post',
        url:'/api/userDetail/getUserInfo',
        headers:{
          token:'APP155166945394154'
        },
        data:{},
      }).then(result=>{
        console.log(result.data.data);
        this.userInfo = result.data.data;
      })
    },
    created() {
    },
    methods: {
      onClickLeft() {
        this.$router.back(-1);
      },
      /*修改年龄,1.0版本没有年龄字段*/
      ageonConfirm(value) {//获取年龄
        /*var age = parseInt(Math.floor(new Date() - new Date(parseTime(value))) / 30758400000);
        this.age = age;
        this.axios({
          method: 'post',
          url: '/api/userDetail/updateUser',
          headers:{
            token:'APP155135365642127'
          },
          data: {
            age: this.age
          }
        }).then(result => {
          if (result.data.code=="100000"){
            this.changeage = false;
            this.$router.push('/userdetails');
          }
        })*/
      },
      /*修改性别*/
      sexonConfirm(value) {//获取性别
        var sex = value;
        this.sex = sex;
        this.axios({
          method: 'post',
          url: '/api/userDetail/updateUser',
          headers:{
            token:'APP155166945394154'
          },
          data: {
            sex: this.sex=='女'?2:1
          }
        }).then(result => {
          console.log(result.data.code);
          if (result.data.code=="100000"){
            this.$router.go(0);
          }
        })
      },
      /*修改地区*/
      areaonConfirm(value) {//获取地区
        console.log(value);
        var jsonData = JSON.stringify(value);// 转成JSON格式
        var item = JSON.parse(jsonData);//转换成对象
        this.province = item[0].name;
        this.city = item[1].name;
        this.axios({
          method: 'post',
          url: '/api/userDetail/updateUser',
          headers:{
            token:'APP155166945394154'
          },
          data: {
            province:this.province,
            city: this.city
          }
        }).then(result => {
          console.log(result.data.code);
          if (result.data.code=='100000'){
            this.$router.go(0);
          }
        })
      },
      showDate() {
        if (!this.changeage) {
          this.changeage = true;
        } else {
          this.changeage = false;
        }
      },
      showSex() {
        if (!this.changesex) {
          this.changesex = true;
        } else {
          this.changesex = false;
        }
      },
      showArea() {
        if (!this.changearea) {
          this.changearea = true;
        } else {
          this.changearea = false;
        }
      },
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        } else if (type === 'month') {
          return `${value}月`
        } else if (type === 'day') {
          return `${value}日`
        }
        return value;
      }
    }
  }

  /*格式化时间类型*/
  function parseTime(d) {
    const newDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' '
      + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return newDate;
  }

</script>
<style lang="less">
  @import "../../assets/css/login.css";
</style>
