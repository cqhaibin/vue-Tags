import * as uitls from '../uitls'

class UserViewCxt {
  constructor (busCxt) {
    this.busCxt = busCxt
  }
  use (store) {
    this.initStroe(store)
  }
  initStroe (store) {
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
      },
      [uitls.Keys.REFUSERS]: function (argState, users) {
        argState.users = users
      }
    }
    let actions = {
      [uitls.Keys.ADDUSER]: function (dis, user) {
        dis.commit(uitls.Keys.ADDUSER, user)
      },
      [uitls.Keys.REFUSERS]: function (dis, users) {
        dis.commit(uitls.Keys.REFUSERS, users)
      }
    }
    store.state = uitls.merge(store.state, state)
    store.getters = uitls.merge(store.getters, getters)
    store.mutations = uitls.merge(store.mutations, mutations)
    store.actions = uitls.merge(store.actions, actions)
  }
}

export default UserViewCxt
