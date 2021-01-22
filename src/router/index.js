import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

//import api from '@/common/api';
import ChatView from '@/views/ChatView';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'chat',
      component: ChatView,
      beforeEnter: (to, from, next) => {
        store.dispatch('user/loadUsers');
        next();
      },
    },
  ],
});

export default router;