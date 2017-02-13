import * as uitls from '../../uitls'

let state = {
  collections: [],
  currentRoom: null
}
let getters = {

}
let mutations = {

}
let actions = {

}

class ViewCxt {
  use (store) {
    store.state = uitls.merge(store.state, state)
    store.getters = uitls.merge(store.getters, getters)
    store.mutations = uitls.merge(store.mutations, mutations)
    store.actions = uitls.merge(store.actions, actions)
  }
}
export default ViewCxt
