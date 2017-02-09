import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './Actions'

Vue.use(Vuex)

const state = {
  collections: [{cont: '001', type: 'send'}, {cont: '002', type: 'receive'}]
}
const mutations = {
  // 名称不能有下划线
  ADDITEM1 (state, item) {
    state.collections.push(item)
  }
}
const getters = {
  collections: state => {
    return state.collections
  }
}
let obj = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default obj
