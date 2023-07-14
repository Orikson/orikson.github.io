/* eslint @typescript-eslint/no-explicit-any: 0 */

import { Engine } from "@babylonjs/core";
import { createStore } from "vuex";

export default createStore({
  state: {
    engine: null as Engine | null,
  },
  getters: {
    getEngine(state: any) {
      return state.engine;
    },
  },
  mutations: {
    setEngine(state: any, engine: Engine) {
      state.engine = engine;
    },
  },
  actions: {},
  modules: {},
});
