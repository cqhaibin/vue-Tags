import { Keys } from '../../uitls'
class MsgBusCxt {
  constructor (cxt) {
    this.cxt = cxt
  }
  init () {
    console.log('init')
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
