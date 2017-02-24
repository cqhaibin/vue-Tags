module.exports = {
  'emit': {
    'sendRooms': 'send.roomCollection', /* 发送房间列表 */
    'newUser': 'send.newUser', /** 新加入的用户 */
    'notifyMsg': 'notify.msg', /** 通知消息 */
    'refUsers': 'refresh.users' /** 刷新用户列表 */
  },
  'client': {
    'registerUser': 'send.register.user', /** 注册一个用户 */
    'newMsg': 'send.msg', /** 客户端发送的消息 */
    'closeConn': 'send.closeConn' /** 关闭连接 */
  }
}
