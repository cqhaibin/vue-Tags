<template>
    <div class="modal-dialog" v-bind:class="{'show': show}" >
        <div class="modal-content">
            <div class="modal-header">
                登录
            </div>
            <div class="modal-body">
                <el-input v-model="userId" ></el-input>
                <el-input v-model="userName" ></el-input>
            </div>
            <div class="modal-footer" >
                <button class="btn btn-primary" v-on:click="loginPro" >登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getBusCxt } from '../store'
export default {
  name: 'Login',
  data () {
    return {
      userId: null,
      userName: null,
      show: true
    }
  },
  methods: {
    loginPro () {
      this.show = false
      getBusCxt().userCxt.registerUser(this.userId, this.userName)
    }
  }
}
</script>>

<style>
  .modal-dialog.show {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -120px;
    margin-left: -300px;
    opacity: 1;
  }
  .modal-dialog {
    opacity: 0;
    display: none;
  }
</style>
