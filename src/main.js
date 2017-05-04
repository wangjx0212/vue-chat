// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store';
import Contacts from './components/Contacts/Contacts'
import Wechat from './components/wechat/wechat'
import Explore from './components/explore/explore'
import Self from './components/self/self'
import Search from './components/common/search'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false

const routes = [{
    path : '/',
    component : Wechat
  },{
    path : '/search',
    component : Search
  },{
      path : '/Contacts',
      component : Contacts,
      children:[{
            path: 'details',
            component : resolve => require(['./components/Contacts/details'],resolve),
      },{
            path: 'new-friend',
            component : resolve => require(['./components/Contacts/new-friend'],resolve),
        },{
            path: 'groupChat',
            component : resolve => require(['./components/Contacts/groupChat'],resolve),
          },{
            path: 'label',
            component : resolve => require(['./components/Contacts/label'],resolve),
          }]
    },{
        path:'/Wechat',
        component:Wechat,
          children:[{
            path:'dialogue',
            component : resolve => require(['./components/Wechat/dialogue'],resolve),
        }],
    },{
        path:'/Explore',
        component:Explore,
        children:[{
            path:'moments',
            component : resolve => require(['./components/Explore/moments'],resolve),
          },{
            path:'saoyisao',
            component : resolve => require(['./components/Explore/saoyisao'],resolve),
            },{
                path:'yaoyiyao',
                component : resolve => require(['./components/Explore/yaoyiyao'],resolve),
              },{
                path:'fujinderen',
                component : resolve => require(['./components/Explore/fujinderen'],resolve),
            },{
              path:'setMoments',
              component : resolve => require(['./components/Explore/setMoments'],resolve),
            }],
    },{
        path:'/Self',
        component:Self,
       children:[{
                path:'settings',
                component : resolve => require(['./components/self/settings'],resolve),
           children:[{
                path:'notice',
                component : resolve => require(['./components/self/settings/notice'],resolve),
            }],
        },{
                path:'userinfo',
                component : resolve => require(['./components/self/userinfo'],resolve),
         }],
      },
];



const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')
