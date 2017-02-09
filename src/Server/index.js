let RoomCollection = require('./room/index')
let cxt = require('./context')
let rmCollection = new RoomCollection()
cxt.room = rmCollection
module.exports = cxt
