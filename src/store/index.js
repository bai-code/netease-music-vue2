import Vue from 'vue'
import Vuex from 'vuex'
import loginModule from './userLoginModule.js'   //登录模块数据

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    loginModule,
  }
})
