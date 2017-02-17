let Channel = require('./channel')
let User = require('./user')
let eventKeys = require('../services-uitls/event.keys')

// 上下文
class Context {
  constructor () {
    this.msg = []
    this.room = []
    this.users = []
    this.channels = []
    this.eventKeys = eventKeys
  }
  createChannel (id, socket) {
    let channel = new Channel(id, socket, this)
    channel.init()
    this.channels.push(channel)
  }
  createUser (user, channelId) {
    this.users.push(user)
    this.channels.find(x => x.id === channelId).setUser(user)
  }
  createUserById (id, name, channelId) {
    let user = new User(id)
    user.name = name
    this.createUser(user, channelId)
  }
}

module.exports = Context
