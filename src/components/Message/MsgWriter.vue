<template>
    <div style="height: 100%; position: relative;" >
        <el-input type="textarea" :row="8" v-model="cont" ></el-input>
        <div class="btn-group btn-group-custom" >
          <button type="button" class="btn btn-primary" v-on:click="add" >添加</button>          
        </div>
    </div>
</template>
<script>
import { getBusCxt } from '../../store'
export default {
  name: 'MsgWriter',
  data () {
    return {
      cont: ''
    }
  },
  methods: {
    add: function () {
      /* 组件 */
      let msg = {cont: this.cont}
      getBusCxt().msgCxt.sendMsg(msg)
    }
  }
}

</script>
<style lang="scss" scoped >
  .btn-group-custom{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 10px;
  }
  .btn-group-custom .btn {
    float: right;
  }
</style>