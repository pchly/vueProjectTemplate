import Vue from 'vue'
import VueRouter from 'vue-router'
import Msg from '@/components/Msg.vue'
import ElementUiTest from '@/components/ElementUiTest'

Vue.use(VueRouter)

const routes = [
      // {
      // path: '/',
      // component: Home
      // },
      // {
      //   path:'/',
      //   //路由转接redirect
      //   redirect: '/msg'
      // },
      //消息通知,测试WebSocket
      {
        path:'/msg',
        name:'msg',
        component:Msg,
        props:true
      },
      //ElementUi测试
      {
        path:'/elementui/:total',
        name:'elementui',
        component:ElementUiTest,
        props:true
      }
];

const router = new VueRouter({
  routes
});
export default router;