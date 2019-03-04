import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name:"home",
      component: resolve => require(['../components/Home.vue'], resolve),
    },
    // 用户相关路径
    {
      path: '/user',
      component: resolve => require(['../page/user/usercenter.vue'], resolve),
      meta: {title: '用户中心'},
    },
    {
      path: '/userdetails',
      component: resolve => require(['../page/user/details.vue'], resolve),
      meta: {title: '编辑资料'},
    },
    {
      path: '/uppenname',
      component: resolve => require(['../page/user/uppenname.vue'], resolve),
      meta: {title: '编辑笔名'},
    },
    {
      path: '/upsign',
      component: resolve => require(['../page/user/upsign.vue'], resolve),
      meta: {title: '编辑个性签名'},
    },

    {
      path: '/dope',
      component: resolve => require(['../page/user/dope.vue'], resolve),
      meta: {title: '消息中心'}
    },
    {
      path: '/myarticle',
      component: resolve => require(['../page/user/myarticle.vue'], resolve),
      meta: {title: '我的文章'}
    },
    {
      path: '/myreward',
      component: resolve => require(['../page/user/myreward.vue'], resolve),
      meta: {title: '我的文章'}
    },
    {
      path: '/mycollect',
      component: resolve => require(['../page/user/mycollect.vue'], resolve),
      meta: {title: '我的收藏'}
    },
    {
      path: '/author',
      component: resolve => require(['../page/user/author.vue'], resolve),
      meta: {title: '申请作者'}
    },
    {
      path: '/invite',
      component: resolve => require(['../page/user/invite.vue'], resolve),
      meta: {title: '邀请页面'}
    },
    {
      path: '/setting',
      component: resolve => require(['../page/user/setting.vue'], resolve),
      meta: {title: '邀请页面'}
    },



    // 系统相关路径
    {
      path: '/help',
      component: resolve => require(['../page/common/helpcenter.vue'], resolve),
      meta: {title: '帮助中心'}
    },
    {
      path: '/agreement',
      component: resolve => require(['../page/common/agreement.vue'], resolve),
      meta: {title: '用户协议'}
    },


    {
      path: '/',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      meta: {title: '自述文件'},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../page/login.vue'], resolve),
          meta: {title: '系统首页'}
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../page/login.vue'], resolve),
      meta: {title: '登录'}
    },
    {
      path: '/smslogin',
      component: resolve => require(['../page/smslogin.vue'], resolve),
      meta: {title: '短信登录'}
    },
    {
      path: '/register',
      component: resolve => require(['../page/register.vue'], resolve),
      meta: {title: '新用户注册'}
    },

  ]
})
