
class Context {
  constructor (url, keys, io) {
    this.url = url
    this.io = io
    this.keys = keys
    this.vm = null
    this.socket = null
    this.userId = 1
    this.name = '客高端注册'
  }
  createIo (vm, callback) {
    this.vm = vm
    let socket = this.io.connect(this.url)
    this.socket = socket
    socket.on(this.keys.emit.sendRooms, function (roomInfo) {
      callback(roomInfo)
    })
  }
  registerUser () {
    this.socket.emit(this.keys.client.registerUser, this.userId, this.name)
  }
}
export default Context
