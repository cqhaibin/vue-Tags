/* @flow */

let Info = require('./model')

class RoomCollection {
  constructor () {
    this.collections = []
    for (let index = 0; index < 10; index++) {
      let room = new Info(index, 'name' + index)
      this.collections.push(room)
    }
  }
  create (item) {
    this.collections.push(item)
  }
  find (roomId) {
    return this.collections.find(x => x.id === roomId)
  }
  static initRoom (cxt) {
    let rmCollection = new RoomCollection()
    cxt.room = rmCollection
  }
}

module.exports = RoomCollection
