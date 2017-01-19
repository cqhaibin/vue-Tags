<template>
    <div class="wrap">
        <div class="wrap-main">
            <div class="msg-list">
                <MsgList/>
            </div>
            <div class="msg-input">
                <MsgWr/>
            </div>
        </div>
        <div class="wrap-left">
            left
        </div>
    </div>
</template>
<script>
  import MsgList from './Message/MsgList'
  import MsgWr from './Message/MsgWriter'
  export default {
    name: 'HChat',
    components: {
      MsgList,
      MsgWr
    }
  }
</script>
<style lang="scss" scoped >
    $left-width: 200px;
    $msg-list-height:80%;
    $msg-input-height:20%;
    $msg-border: 10px solid #58B7FF;
    $msg-radius:5px;

    .wrap{
        height:100%;
    }
    .wrap-left{ 
        width: $left-width; 
        float:left;
        height:100%;  
        margin-left: -100%;
        background: linear-gradient(#20A0FF,#58B7FF);
    }
    .wrap-main{ 
        float:left;
        padding-left: $left-width;
        height:100%;
        width:100%; /*因为float了，必须要有width，否则宽度为0px*/
        text-align:left;
    }
    .msg-list{
        height: $msg-list-height;
        border: $msg-border; 
    }
    .msg-input{
        height: $msg-input-height;
        border: $msg-border; 
    }
</style>