/** 提供client端访问socketIo的方法 */

import * as io from 'socket.io-client'
import Context from './context'

let eventKeys = require('../services-uitls/event.keys')
let url = 'http://localhost:9001/'
let cxt = null

export function getCxt () {
  if (cxt == null) {
    cxt = new Context(url, eventKeys, io)
  }
  return cxt
}
