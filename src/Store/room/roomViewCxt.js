import * as uitls from '../../uitls'
let state = {
  currentRoom: null
}

let getters = {
  [uitls.Keys.GETROOMINFO]: function (argState) {
    return argState.currentRoom
  }
}
let mutations = {
  [uitls.Keys.SETROOMINFO]: function (argState, room) {
    argState.currentRoom = room
  }
}
let actions = {
  [uitls.Keys.SETROOMINFO]: function (argState, room) {
    argState.commit(uitls.Keys.SETROOMINFO, room)
  }
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
