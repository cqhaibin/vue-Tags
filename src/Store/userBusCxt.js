import { Keys } from '../uitls'

class UserBusCxt {
  constructor (cxt) {
    this.cxt = cxt
  }
  init () {
    let self = this
    this.cxt.socket.on(this.cxt.keys.emit.newUser, function (user) {
      self.cxt.vm.$store.dispatch(Keys.ADDUSER, user)
    })
  }
}
export default UserBusCxt
