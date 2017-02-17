let RoomCollection = require('./room/index')
let Context = require('./context')

let cxt = new Context()

RoomCollection.initRoom(cxt)

module.exports = cxt
