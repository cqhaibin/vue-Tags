const _default = {
  maxNum: 100
}
class RoomInfo {
  constructor (id, name) {
    this.id = id
    this.name = name
    this.maxNum = _default.maxNum
  }
}
module.exports = RoomInfo
