import * as io from 'socket.io-client'
let url = 'http://localhost:9001/'

export const services = {
  createIo: function (callback) {
    let socket = io.connect(url)
    socket.on('init.room', function (roomInfo) {
      callback(roomInfo)
    })
  }
}
