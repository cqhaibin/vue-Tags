import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  collections: [{cont: '001'}, {cont: '002'}]
}
const mutations = {
  ADD_ITEM (state, item) {
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
  mutations
})
export default obj
