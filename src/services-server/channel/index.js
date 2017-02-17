class Channel {
  constructor (id, socket, cxt) {
    this.socket = socket
    this.id = id
    this.user = null
    this.cxt = cxt
  }
  static createChannel (id, socket, cxt) {
    return new Channel(id, socket, cxt)
  }
  setUser (user) {
    this.user = user
  }
  init () {
    let self = this
    this.socket.emit(this.cxt.eventKeys.emit.sendRooms, this.cxt.room.collections[0]) /* send出去一个默认的房间 */
    this.socket.on(this.cxt.eventKeys.client.registerUser, function (id, name) {
      console.log(id + '-' + name)
      self.cxt.createUserById(id, name, self.id)
    }) /** 新用户注册 */
  }
}
module.exports = Channel
