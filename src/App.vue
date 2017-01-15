<template>
  <div id="app">  
    <div class="head">

    </div>
    <div class="cont">
      <HChat></HChat>
    </div>
  </div>
</template>

<script>
import HChat from './components/HChat'

export default {
  name: 'app',
  components: {
    HChat
  }
}
</script>

<style lang="scss" >
  $head-height: 0px;

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
}
.cont{
  margin-top: -$head-height;
  padding-top: $head-height;
}
</style>
