<template>
    <div>
        <el-input type="textarea" :row="2" v-model="cont" ></el-input>
        <button type="button" class="btn btn-primary" v-on:click="add" >添加</button>
    </div>
</template>
<script>
import { Keys } from '../../uitls'
export default {
  name: 'MsgWriter',
  data () {
    return {
      cont: ''
    }
  },
  methods: {
    add: function () {
      let key = Keys.SETROOMINFO
      /* 组件 */
      this.$store.dispatch(key, { type: 'send', cont: '00990' })
    }
  }
}

</script>
<style lang="scss" scoped >

</style>