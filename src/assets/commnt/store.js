// 判断用户token是否生效相关操作
// author:wwb
// data:2019-03-01

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.token = user.token;
      localStorage.setItem('token', user.token);
    },

    delToken (state) {
      state.token = '';
      localStorage.removeItem("token");
    }
  }
});
export default store;
