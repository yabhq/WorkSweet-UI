import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Components from './views/Components.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
  ],
});
