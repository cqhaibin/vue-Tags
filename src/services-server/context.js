let Channel = require('./channel')

// 上下文
class Context {
  constructor () {
    this.msg = []
    this.room = []
    this.users = []
    this.channels = []
  }
  createChannels (id, socket) {
    this.channels.push(new Channel(id, socket))
  }
  createUser (user, channelId) {
    this.user.push(user)
    this.channels.where(x => x.id === channelId).setUser(user)
  }
}

module.exports = Context
