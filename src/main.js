import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import ElemUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import store from './Store'
import { Keys } from './uitls'

import { services } from './services'

services.createIo(function (roomInfo) {
  let initRoomInfo = Keys.SETROOMINFO
  Vue.use(ElemUi)
  /* eslint-disable no-new */
  new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components: { App },
    created: function () {
      this.$store.dispatch(initRoomInfo, roomInfo)
    }
  })
})
