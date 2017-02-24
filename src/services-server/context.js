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
    channel.index = this.channels.length
    this.channels.push(channel)
  }
  createUser (user, channelId) {
    user.index = this.users.length
    this.users.push(user)
    this.channels.find(x => x.id === channelId).setUser(user)
  }
  createUserById (id, name, channelId) {
    let user = new User(id)
    user.name = name
    this.createUser(user, channelId)
  }
  addMsg (msg) {
    this.msg.push(msg)
  }
  remove (channel) {
    this.users.splice(channel.user.index, 1)
    channel.sendUsers()
    channel.socket.close()
    this.channels.splice(channel.index, 1)
    console.log('user length: ' + this.users.length)
  }
}

module.exports = Context
