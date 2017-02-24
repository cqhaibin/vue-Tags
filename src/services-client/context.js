
class Context {
  constructor (url, keys, io) {
    this.url = url
    this.io = io
    this.keys = keys
    this.vm = null
    this.socket = null
    this.userId = 1
    this.name = '客高端注册'
    this.roomInfo = null
  }
  createIo (vm, callback) {
    this.vm = vm
    let socket = this.io.connect(this.url)
    let self = this
    this.socket = socket
    socket.on(this.keys.emit.sendRooms, function (roomInfo) {
      self.roomInfo = roomInfo
      callback(roomInfo)
    })
  }
  registerUser (id, name) {
    this.userId = id
    this.name = name
    this.socket.emit(this.keys.client.registerUser, this.userId, this.name)
  }
  newUser (callback) {
    this.socket.on(this.keys.emit.newUser, callback)
  }
  sendMsg (msg) {
    this.socket.emit(this.keys.client.newMsg, msg)
  }
  reciveMsg (callback) {
    this.socket.on(this.keys.emit.notifyMsg, function (msg) {
      callback(msg)
    })
  }
  closeConn () {
    this.socket.emit(this.keys.client.closeConn)
  }
  refUsers (callback) {
    this.socket.on(this.keys.emit.refUsers, function (users) {
      callback(users)
    })
  }
}
export default Context
