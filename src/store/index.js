import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: false,
    user: {
      nombre: 'Eduardo',
      apellidos: 'García Soledo',
      email: 'edu.garcia@capmail.com',
      username: 'edugarcia'
    }
  },
  getters: {
    getUser: (state) => {
      return state.user
    },
    getDarkmode: (state) => {
      return state.darkMode
    }
  },
  mutations: {
    SET_MODE(state) {
      state.darkMode = !state.darkMode;
    }
  },
  actions: {
    setMode: ({ commit }) => {
      commit('SET_MODE');
    },
  },
  modules: {
  }
})
