<template>
  <div>
    <van-nav-bar :title=title left-arrow @click-left="onClickLeft"/>
    <ul class="list">
      <li>
        <p class="user-top">头像</p>
        <div>
          <img class="userimg" src="../../assets/img/userimg.png" alt="">
          <img class="user-r" src="../../assets/img/youjiantou.png" alt="">
        </div>
      </li>
      <li @click="upname()">
        <p class="user-list">笔名</p>
        <div>
             <p>Angeta Brown</p>
             <img class="user-r" src="../../assets/img/youjiantou.png" alt="">
        </div>
      </li>
      <li @click="showDate()">
        <p class="user-list">年龄</p>
        <div>
              <p><span>{{age}}</span>岁</p>
             <img class="user-r" src="../../assets/img/youjiantou.png" alt="">
        </div>
      </li>
      <li @click="showSex()">
        <p class="user-list">性别</p>
        <div>
             <p>男</p>
             <img class="user-r" src="../../assets/img/youjiantou.png" alt="">
        </div>
      </li>
      <li @click="showArea()">
        <p class="user-list">地区</p>
        <div>
             <p>上海</p>
             <img class="user-r" src="../../assets/img/youjiantou.png" alt="">
        </div>
      </li>
      <li>
        <p class="user-list">个性签名</p>
        <div>
             <p>这里是签名哦~</p>
             <img class="user-r" src="../../assets/img/youjiantou.png" alt="">
        </div>
      </li>
    </ul>


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
      <van-area :area-list="areaList" @confirm="areaonConfirm"/>
    </van-popup>
  </div>
</template>

<script>
  import areaList from '@/assets/js/area'

  export default {
    name:'userdetails',
    components:{

    },
    data(){
      return{
        title:'编辑资料',
        mobile: '',
        changeage: false,
        changesex: false,
        changearea: false,
        minDate: new Date(1900, 1, 1),
        maxDate: new Date(2030, 1, 1),
        sexList: ['男', '女'],
        currentDate: new Date(),
        areaList: areaList,
        city: '',
        age: '',
        sex: ''
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
      upname(){
        this.$router.push('uppenname')
      },
      /*修改年龄*/
      ageonConfirm(value) {//获取年龄
        var age = parseInt(Math.floor(new Date() - new Date(parseTime(value))) / 30758400000);
        var _this =this;
        _this.age = age;
        _this.AycAxios('/api/userDetail/updateUser',{
          method: 'post',
          headers:{
            token:localStorage.getItem('token')
          },
          data: {
            age: _this.age
          }
        },function (data) {
          _this.$toast('年龄修改成功');
          _this.changeage = false;
        })
      },
      /*修改性别*/
      sexonConfirm(value) {//获取性别
        var sex = value;
        var _this =this;
        _this.sex = sex;
        _this.AycAxios('/api/userDetail/updateUser', {
          method: 'post',
          headers:{
            token:localStorage.getItem('token')
          },
          data: {
            sex: _this.sex=='女'?2:1,
          }
        },function (data) {
          _this.$toast('性别修改成功')
        })
      },
      /*修改地区*/
      areaonConfirm(value) {//获取地区
        var _this =this;
        var jsonData = JSON.stringify(value);// 转成JSON格式
        var item = JSON.parse(jsonData);//转换成对象
        var sum = "";
        item.forEach((item) => {
          sum += item.name;
        });
        _this.city = sum;
        _this.AycAxios('/api/userDetail/updateUser',{
          method: 'post',
          headers:{
            token:'APP155135365642127'
          },
          data: {
            city: _this.city,
            id:'56141'
          }
        },function() {
          _this.$toast('地区修改成功')
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
      },

    },
  }

  /*格式化时间类型*/
  function parseTime(d) {
    const newDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' '
      + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return newDate;
  }
</script>
<style lang="less">
  @import "../../assets/css/details.css";
</style>
