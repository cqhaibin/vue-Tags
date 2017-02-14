<template>
  <div id="app">  
    <div class="head">
      <span v-if="getRoomInfo != null" >当前房间名称：{{getRoomInfo.name}}</span>
    </div>
    <div class="cont">
      <HChat></HChat>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Keys } from './uitls'
import HChat from './components/HChat'

let currRoom = Keys.GETROOMINFO

export default {
  name: 'app',
  components: {
    HChat
  },
  computed: {
    ...mapGetters([currRoom])
  }
}
</script>

<style lang="scss" >
  $head-height: 40px;

html, body, #app, .cont{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head{
  height: $head-height;  
  padding: 10px;
  text-align: left;
  background: -webkit-linear-gradient( left top,#20A0FF,#58B7FF);
}
.cont{
  margin-top: -$head-height;
  padding-top: $head-height;
}
</style>
