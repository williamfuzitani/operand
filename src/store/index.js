import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import usuario from "./modules/usuario";

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    usuario,
  },
});
