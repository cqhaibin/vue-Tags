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
    add: () => {
      debugger
      console.log(this)
    }
  }
}

</script>
<style lang="scss" scoped >

</style>