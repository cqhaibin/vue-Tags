import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import ElemUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import store from './Store/Message'

Vue.use(ElemUi)
debugger
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
