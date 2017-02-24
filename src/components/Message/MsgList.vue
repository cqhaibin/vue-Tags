<template> 
    <div>
        <ul class="msg-cont">
            <li v-for="item in getNewMsg"  v-bind:class="{ 'msg-cont-send' : item.type == 'send' }" >
                <span class="msg-cont-item" >{{item.userName}}: {{item.cont}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { Keys } from '../../uitls'
  let recKey = Keys.GETNEWMSG
  export default{
    name: 'MsgList',
    computed: {
      ...mapGetters([recKey])
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