/** 业务层与store的交互 */
import { getCxt } from '../services-client'
import UserBusCxt from './userBusCxt'

class BusCxt {
  constructor () {
    this.servicesCxt = getCxt()
    this.userCxt = new UserBusCxt(this.servicesCxt)
  }
  init () {
    this.userCxt.init()
  }
}
export default BusCxt
