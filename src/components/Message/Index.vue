<template>
    <div class="wrap">
        <div class="wrap-main">
            margin
        </div>
        <div class="wrap-left">
            left
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Message'
  }
</script>
<style lang="scss" scoped >
    $left-width: 200px;
    .wrap{
        height:100%;
        background:#58B7FF;
    }
    .wrap-left{
        background:#ff0000;
        width: $left-width; 
        float:left;
        height:100%;  
        margin-left: -100%;
    }
    .wrap-main{ 
        float:left;
        padding-left: $left-width;
        height:100%;
        width:100%; /*因为float了，必须要有width，否则宽度为0px*/
        text-align:left;
    }
</style>