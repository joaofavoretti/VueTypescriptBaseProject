import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TodoList from '@/views/TodoList.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

/* Define routes used in the program. Imported objects can be imported here. */
export const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue')},
  { path: '/todo-list', name: 'TodoList', component: TodoList },
];

const router = new VueRouter({
  routes,
});

export default router;
