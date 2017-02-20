import * as uitls from '../uitls'

let state = {
  users: []
}
let getters = {
  [uitls.Keys.GETUSERS]: function (argState) {
    return argState.users
  }
}
let mutations = {
  [uitls.Keys.ADDUSER]: function (argState, user) {
    argState.users.push(user)
  }
}
let actions = {
  [uitls.Keys.ADDUSER]: function (dis, user) {
    dis.commit(uitls.Keys.ADDUSER, user)
  }
}

class UserViewCxt {
  use (store) {
    store.state = uitls.merge(store.state, state)
    store.getters = uitls.merge(store.getters, getters)
    store.mutations = uitls.merge(store.mutations, mutations)
    store.actions = uitls.merge(store.actions, actions)
  }
}

export default UserViewCxt
