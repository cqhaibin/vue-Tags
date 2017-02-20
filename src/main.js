import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import ElemUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import * as stores from './Store'
import { Keys } from './uitls'
import { getCxt } from './services-client'

let initRoomInfo = Keys.SETROOMINFO
Vue.use(ElemUi)
/* eslint-disable no-new */
new Vue({
  store: stores.default,
  el: '#app',
  template: '<App/>',
  components: { App },
  created: function () {
    let self = this
    getCxt().createIo(this, function (roomInfo) {
      stores.busCxt.init()
      self.$store.dispatch(initRoomInfo, roomInfo)
      getCxt().registerUser()
    })
  }
})
