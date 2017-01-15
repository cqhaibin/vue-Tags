<template> 
    <ul class="msg-cont">
        <li v-for="item in list" >
            <span class="msg-receive" >{{item.cont}}</span>
        </li>  
    </ul>   
</template>
<script>
  import { mapGetters } from 'vuex'

  export default{
    name: 'MsgList',
    computed: {
      ...mapGetters({
        list: 'collections'
      })
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
    .msg-receive{
        background: #8492A6;
        padding: 5px 10px; 
        border-radius: 2px;
    }
</style>