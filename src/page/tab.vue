<template>
  <div class="page">
    <div class="tabbar">
      <ul class="tabbaer-img">
        <li v-for="itme in tablist" :key="itme.index" @click="change(itme)">
          <span :class="active == itme.index?'span':''">{{itme.name}}</span>
        </li>
        <router-link 
        to="/aaaaa"
        >
        <li class="swsou">
          <img src="/static/ayfooter/img/导航栏搜索按钮-灰@2x.png" alt="">
        </li>
        </router-link>
      </ul>
      <keep-alive>
          <component :is='tabpageitme'></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import tabpage from '../page/find/usere'
import tabpage2 from '../page/find/tabpage2'
import tabpage3 from '../page/find/tabpage3'
import tabpage4 from '../page/find/tabpage4'
import tabpage5 from '../page/find/tabpage5'

export default {
  name: "page",
  data() {
    return {
      active: 0,
      tabpageitme: 'tabpage',
      tablist: [
        {
          index: 0,
          name: "关注",
          path: "tabpage"
        },
        {
          index: 1,
          name: "推荐",
          path: "tabpage2"
        },
        {
          index: 2,
          name: "娱乐",
          path: "tabpage3"
        },
        {
          index: 3,
          name: "财经",
          path: "tabpage4"
        },
        {
          index: 4,
          name: "美食",
          path: "tabpage5"
        }
      ]
    };
  },
  methods: {
    change(itme) {
      this.active = itme.index;
      this.tabpageitme = itme.path
    }
  },
  components: {
    tabpage,
    tabpage2,
    tabpage3,
    tabpage4,
    tabpage5
  }
};
</script>

<style lang="less" scoped>
ul {
  width: 100%;
  z-index: 3;
  background: red;
  height: 0;
  padding-bottom: 35%; 
  display: flex;
  background: url("../assets/img/首页-导航栏bg@3x.png") no-repeat;
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 35%;
  li {
    flex: 1;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    line-height: 7.8rem;
    .span {
      font-size: 25px;
      font-weight: 10px;
      border-bottom: 2px solid #ffffff;
    }
  }
}
.swsou{
  margin-top: 5px;;
}

</style>
