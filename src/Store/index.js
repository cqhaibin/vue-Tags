import Vuex from 'vuex'
import Vue from 'vue'

import RoomViewCxt from './room/roomViewCxt'
import UserViexCxt from './userViewCxt'
import BusCxt from './indexForBus'

let _busCxt = new BusCxt()

let _rvCxt = new RoomViewCxt()
let _uvCxt = new UserViexCxt(_busCxt.userCxt)

let opt = {
  state: null,
  getters: null,
  mutations: null,
  actions: null
}
_rvCxt.use(opt)
_uvCxt.use(opt)

Vue.use(Vuex)

let store = new Vuex.Store(opt)
export default store
export const busCxt = _busCxt /** 业务处理上下文 */
