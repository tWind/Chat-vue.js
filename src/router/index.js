import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

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
        store.dispatch('users/loadUsers');
        next();
      },
    },
  ],
});

export default router;