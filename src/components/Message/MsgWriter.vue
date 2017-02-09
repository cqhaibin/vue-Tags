<template>
    <div>
        <el-input type="textarea" :row="2" v-model="cont" ></el-input>
        <button type="button" class="btn btn-primary" v-on:click="add" >添加</button>
    </div>
</template>
<script>
export default {
  name: 'MsgWriter',
  data () {
    return {
      cont: ''
    }
  },
  methods: {
    add: function () {
      let oVal = {cont: this.cont, type: 'send'}
      this.$store.dispatch('addItem', oVal)
    }
  }
}

</script>
<style lang="scss" scoped >

</style>