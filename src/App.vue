<template>
  <div id="app">  
    <tag width="300px"></tag>
  </div>
</template>

<script>
import Tag from './components/Tag'

export default {
  name: 'app',
  components: {
    Tag
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
