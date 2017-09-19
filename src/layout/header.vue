<template>
  <div class="app-header clearfix">
    <el-col :col="10"
            class="logo-field">
      <img src="../assets/logo.png"
           class="logo">
      <span>管理系统</span>
    </el-col>
    <el-col class="logout-field">
      <el-tooltip class="tip-logout"
                  content="登出"
                  placement="bottom"
                  trigger="hover">
        <i class="iconfont icon-logout"
           @click="submit"></i>
      </el-tooltip>
    </el-col>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  methods: {
    ...mapActions(['logout']),
    submit() {
      this.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="less">
.app-header {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 3;
  box-shadow: 0px 0px 5px #000;
  .fixed {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  .logo-field {
    flex: 1;
    font-size: 26x;
  }
  .logo {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .logout-field {
    width: 40px; // padding-left: 20px;
    // padding-top: 5px;
    i {
      cursor: pointer;
    }
  }
  .username {
    font-size: 18px;
  }
}
</style>

