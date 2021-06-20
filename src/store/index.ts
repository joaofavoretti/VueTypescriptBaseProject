import Vue from 'vue';
import Vuex from 'vuex';
import { AppStore } from './index-types';

Vue.use(Vuex);

/**
 * Vuex instance. Dont need to import modules here if used
 * { namespaced: true, name: 'todo', dynamic: true, store }
 * Example: todo-module
 */
export default new Vuex.Store<AppStore>({
  state: {},
  mutations: {},
  actions: {},
});
