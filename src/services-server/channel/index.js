let eventKeys = require('../../services-uitls')

class Channel {
  constructor (id, socket) {
    this.socket = socket
    this.id = id
    this.user = null
  }
  static createChannel (id, socket) {
    return new Channel(id, socket)
  }
  setUser (user) {
    this.user = user
  }
  initEmit () {
    this.socket.emit('key')
  }
}
module.exports = Channel
