<template>
  <div id="app">  
    <div class="head">

    </div>
    <div class="cont">
      <Message></Message>
    </div>
  </div>
</template>

<script>
import Message from './components/Message/index'

export default {
  name: 'app',
  components: {
    Message
  }
}
</script>

<style lang="scss" >
  $head-height: 60px;

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
