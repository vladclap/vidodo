import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import event from "./event";
import products from "./products";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editPhoto: null
  },
  mutations: {
    changeEditPhoto(state, payload) {
      state.editPhoto = payload
    }
  },
  actions: {
  },
  modules: {
    auth, event, products
  }
})
