<template> 
    <div>
    <ul class="msg-cont">
        <li v-for="item in list"  v-bind:class="{ 'msg-cont-send' : item.type == 'send' }" >
            <span class="msg-cont-item" >{{item.cont}}</span>
        </li>  
    </ul> 
    <span v-if="getRoomInfo != null" >{{getRoomInfo.cont}}</span>          
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { Keys } from '../../uitls'
  import * as io from 'socket.io-client'
  var socket = io.connect('http://localhost:9001/')
  socket.on('test', function (data) {
    console.log(data)
  })

  let currRoom = Keys.GETROOMINFO

  export default{
    name: 'MsgList',
    data () {
      return {
        list: null
      }
    },
    computed: {
      ...mapGetters([currRoom])
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