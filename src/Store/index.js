import Vuex from 'vuex'
import Vue from 'vue'

import RoomViewCxt from './room/roomViewCxt'
let _rvCxt = new RoomViewCxt()

let opt = {
  state: null,
  getters: null,
  mutations: null,
  actions: null
}
_rvCxt.use(opt)

Vue.use(Vuex)

let store = new Vuex.Store(opt)
export default store
