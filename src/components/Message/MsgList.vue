<template> 
    <div>
        <ul class="msg-cont">
            <li v-for="item in list"  v-bind:class="{ 'msg-cont-send' : item.type == 'send' }" >
                <span class="msg-cont-item" >{{item.cont}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
  export default{
    name: 'MsgList',
    data () {
      return {
        list: null
      }
    }
  }
</script>
<style lang="scss" scoped >
    .msg-cont{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }
    .msg-cont > li{
        margin: 0px;
        padding: 5px;
    }
    .msg-cont-item{
        background: #8492A6;
        padding: 5px 10px; 
        border-radius: 2px;
    }
    .msg-cont-receive{
        text-align: left;
    }
    .msg-cont-send{
        text-align: right;
    }
</style>