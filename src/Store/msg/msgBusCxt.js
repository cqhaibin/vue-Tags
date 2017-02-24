import { Keys } from '../../uitls'
class MsgBusCxt {
  constructor (cxt) {
    this.cxt = cxt
  }
  init () {
    let self = this
    this.cxt.reciveMsg(function (msg) {
      if (msg.userId !== self.cxt.userId) {
        self.cxt.vm.$store.dispatch(Keys.ADDMSG, msg)
      }
    })
  }
  sendMsg (msg) {
    msg.userId = this.cxt.userId
    msg.userName = this.cxt.name
    msg.type = 'send'
    this.cxt.vm.$store.dispatch(Keys.ADDMSG, msg)
    this.cxt.sendMsg(msg)
  }
}
export default MsgBusCxt
