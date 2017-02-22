import * as uitls from '../../uitls'
class MsgViewCxt {
  use (store) {
    this.initStore(store)
  }
  initStore (store) {
    let state = {
      msgs: []
    }
    let getters = {
      [uitls.Keys.GETNEWMSG]: function (argState) {
        return argState.msgs
      }
    }
    let mutations = {
      [uitls.Keys.ADDMSG]: function (argState, msg) {
        argState.msgs.push(msg)
      }
    }
    let actions = {
      [uitls.Keys.ADDMSG]: function (dis, msg) {
        dis.commit(uitls.Keys.ADDMSG, msg)
      }
    }
    store.state = uitls.merge(store.state, state)
    store.getters = uitls.merge(store.getters, getters)
    store.mutations = uitls.merge(store.mutations, mutations)
    store.actions = uitls.merge(store.actions, actions)
  }
}

export default MsgViewCxt
