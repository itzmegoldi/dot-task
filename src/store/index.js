import Vue from "vue";
import Vuex from "vuex";
import card from "./Modules/Card";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    card,
  },
});
