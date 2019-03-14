import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Elements from './views/Elements/index.vue';
import ElementsGrid from './views/Elements/grid.vue';
import ElementsForm from './views/Elements/form.vue';
import ElementsType from './views/Elements/type.vue';

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
      path: '/elements',
      component: Elements,
      children: [
        {
          path: '',
          component: ElementsGrid,
          name: 'elements',
        },
        {
          path: 'form',
          component: ElementsForm,
          name: 'elements-form',
        },
        {
          path: 'type',
          component: ElementsType,
          name: 'elements-type',
        },
      ],
    },
  ],
});
