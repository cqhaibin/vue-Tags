import { Keys } from '../uitls'

class UserBusCxt {
  constructor (cxt) {
    this.cxt = cxt
  }
  init () {
    let self = this
    this.cxt.newUser(function (user) {
      self.cxt.vm.$store.dispatch(Keys.ADDUSER, user)
    })
  }
}
export default UserBusCxt
