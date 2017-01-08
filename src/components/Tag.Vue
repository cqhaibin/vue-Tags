<template>
    <div class="tag-wrap">
        <span>标签：</span>
        <input type="text" id="tag" name="tag" v-model="val" />
        <button id="apply" v-on:click="add" >添加</button>
        <ul class="tag-cont clear" v-bind:style="{width: width}">
            <li v-for="item in cont">{{item}}</li>
        </ul>
    </div>
</template>

<script>
  export default{
    name: 'tag',
    data () {
      return {
        cont: [],
        val: ''
      }
    },
    methods: {
      add: function () {
        let _val = this.val
        if (_val.length === 0 || this.cont.indexOf(_val) > -1) {
          return
        }
        this.cont.push(this.val)
      }
    },
    props: {
      width: {
        type: String,
        default: 'auto'
      }
    }
  }
</script>

<style lang='scss' scoped >
    @keyframes item-show{
        from{ opacity: 0; }
    }
    .clear{ 
        zoom: 1;
    }
    .clear:after{
        content: '';
        display: block;
        width: 0px;
        height: 0px;
        overflow: hidden;
        clear: both;
    }

    $back-color:#fed; 
    span{
        background: $back-color;
    }
    .tag-cont{
        list-style: none;
        margin: 10px auto;
        padding: 5px;
        border: 1px solid lightblue;
    }
    .tag-cont > li{
        float: left;
        padding: 5px;
        border:1px solid gray;
        border-radius: 10px;
        animation: item-show 1s;
        margin: 10px;
    } 
</style>