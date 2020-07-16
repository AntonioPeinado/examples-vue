import Vuex, { createLogger } from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  state: {
    email: "",
    password: ""
  },

  mutations: {
    updateEmail(ev, state) {
      state.email = ev.target.value;
    },
    updatePassword(ev, state) {
      state.password = ev.target.value;
    },
  },

  actions: {
    updateEmail(context) {
      context.commit("updateEmail");
    },
    updatePassword(context) {
      context.commit("updatePassword");
    },
  },
});

export { store };
