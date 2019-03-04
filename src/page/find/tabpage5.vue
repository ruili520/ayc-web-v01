<template>
  <div class="con">
    <div class="con-ul">
      <ul>
        <li v-for="itme in 3" :key="itme">
          <div class="title-img">
            <img class="icon-img" src="../../assets/img/img1.jpg" alt="">
            <h3>某微--JOKER</h3>
            <span>刚刚</span>
          </div>
          <div class="title-itle">
            <h4>AI教程！夏日清凉配色扁平插画制作思路</h4>
            <p>不知不觉又到夏天了，记忆中的夏天除了背心+大裤衩子外，一定要有浓郁的绿色，今天的教程会教会你如何通...</p>
          </div>
          <div class="title-icon">
            <a>
              <img src="../../assets/img/sousuopinlunye.png" alt="">
              752
            </a>
            <a>
              <img src="../../assets/img/wenzhangxiangqingdianzan.png" alt="">
              752
            </a>
            <a>
              <img src="../../assets/img/shoucanghui.png" alt="">
              1.2万
            </a>
            <a>
              <img src="../../assets/img/fenxiang.png" alt="">
              0
            </a>
            <div class="icont">
              <img  src="../../assets/img/gengduo.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabpage5",
  data (){
    return {
    }
  }
};
</script>
<style scoped>
.con{
  width: 100%;
  height: 100%;
  background: #F9F9F9;
}
.con-ul{
  position: relative;
  top: -30px;
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
li{
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px; 
  overflow: hidden;
  background: #ffffff;
}
.title-img{
  height: 60px;
  display: flex;
  flex-direction: row;
}
.icon-img{
  margin-left: 5px;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
h3{
  height: 25px;
  font-size: 16px;
  text-align: center;

}
span{
  position: relative;
  top: 30px;
  left: -95px;
  height: 30px; 
 line-height: 30px;
}
.title-itle{
  text-indent: 5px;
  flex: 1;
  width: 100%;
}
h4{
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size:16px;
  font-weight: bold;
}
p{
  width: 100%;
  height: 50px;
  color: #DFE0E5;
}
.title-icon{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row; 
}
.title-icon a {
 width: 50px;
 line-height: 50px;
 margin: 0 7px;
}
.title-icon a img{
  width:10px;
  height: 10px;
}
.title-icon-display{
  width: 50px;
  height: 50px;
}
.icont{
  width: 28px;
  height: 8px;
  margin-top: 15px;
  margin-left: 20px; 
}
a{
  font-size: 12px; 
}
</style>