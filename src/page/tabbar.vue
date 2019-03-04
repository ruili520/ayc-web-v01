<template>
  <div class="page">
    <div class="tabbar">
      <ul class="tabbaer-img">
        <li v-for="itme in tablist" :key="itme.index" @click="change(itme)">
          <img :src="active==itme.index?itme.imgurl:itme.imglist" :class="active == itme.index? 'active':''">
          <span>{{itme.name}}</span>
        </li>
      </ul>
    </div>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import tabpage from '../components/page/page'
import tabpage2 from '../components/page/page1'
import tabpage3 from '../components/page/page3'

export default {
  name: "page",
  data() {
    return {
      active: 0,
      tabpath: "itme.imgurl",
      componentId: "tabpage",
      tablist: [
        {
          index: 0,
          name: "推荐",
          path: "tabpage",
          imgurl: "/static/ayfooter/img/发现-选中@3x.png",
          imglist: "/static/ayfooter/img/faxian.png"
        },
        {
          index: 1,
          name: "钱包",
          path: "tabpage2",
          imgurl: "/static/ayfooter/img/钱包-选中.png",
          imglist: "/static/ayfooter/img/钱包-未选中.png"
        },
        {
          index: 2,
          name: "我的",
          path: "tabpage3",
          imgurl: "/static/ayfooter/img/我的-选中.png",
          imglist: "/static/ayfooter/img/我的-未选中.png"
        }
      ]
    };
  },
  methods: {
    change(itme) {
      this.active = itme.index
      this.componentId = itme.path
    }
  },
  components: {
    tabpage,
    tabpage2,
    tabpage3
  }
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  ul {
    z-index: 999;
    width: 100%;
    background: #F8FDFF;
    height: 3.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      color: #B4B8C1;
      span {
        display: block;
        font-size: 13px;
      }
    }
  }
}
.active {
  width: 40px;
  height: 40px;
  border-top-left-radius: 35%;
  border-top-left-radius: 35%;
  margin-top: -20px;
}
</style>
