import Vuex from 'vuex'
import Vue from 'vue'

import * as roomViewCxt from './room/roomViewCxt'

let opt = {
  state: null,
  getters: null,
  mutations: null,
  actions: null
}
roomViewCxt.use(opt)


Vue.use(Vuex)

let vuex = new Vuex.Store(opt)
export default vuex
