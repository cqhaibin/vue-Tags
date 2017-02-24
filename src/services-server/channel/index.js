class Channel {
  constructor (id, socket, cxt) {
    this.socket = socket
    this.id = id
    this.user = null
    this.cxt = cxt
    this.room = null
  }
  static createChannel (id, socket, cxt) {
    return new Channel(id, socket, cxt)
  }
  setUser (user) {
    console.log(user)
    this.user = user
    this.socket.emit(this.cxt.eventKeys.emit.newUser, user)
    this.socket.to('roomId' + this.roomInfo.id).emit(this.cxt.eventKeys.emit.newUser, user)
  }
  init () {
    let self = this
    let roomInfo = this.cxt.room.collections[0]
    this.roomInfo = roomInfo
    this.socket.join('roomId' + roomInfo.id)
    this.socket.emit(this.cxt.eventKeys.emit.sendRooms, roomInfo) /* send出去一个默认的房间 */
    this.socket.on(this.cxt.eventKeys.client.registerUser, function (id, name) {
      console.log(id + '-' + name + '--' + self.id)
      self.cxt.createUserById(id, name, self.id)
    }) /** 新用户注册 */
    this.socket.on(this.cxt.eventKeys.client.newMsg, function (msg) { /** 发送消息 */
      self.notifyMsg(msg)
      console.log(msg)
      self.cxt.addMsg(msg)
    })
    this.socket.on(this.cxt.eventKeys.client.closeConn, function () {
      console.log(self.id + '--关闭连接')
      self.cxt.remove(self)
    })
    this.sendUsers()
  }
  notifyMsg (msg) {
    msg.type = 'notify'
    this.socket.to('roomId' + this.roomInfo.id).emit(this.cxt.eventKeys.emit.notifyMsg, msg)
  }
  sendUsers () {
    this.socket.emit(this.cxt.eventKeys.emit.refUsers, this.cxt.users)
    this.socket.to('roomId' + this.roomInfo.id).emit(this.cxt.eventKeys.emit.refUsers, this.cxt.users)
  }
}
module.exports = Channel
