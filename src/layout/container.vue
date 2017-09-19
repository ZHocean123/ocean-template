<template>
  <div class="app-container">
    <section :style="{minHeight: screenHeight}"
             class="nav-left">
      <AppNavBar></AppNavBar>
    </section>
    <section class="router-view-box"
             :style="{height:screenHeight}">
      <LevelBar></LevelBar>
      <keep-alive>
        <transition name="fade"
                    mode="out-in">
          <router-view class="router-view"></router-view>
        </transition>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import AppNavBar from './navbar';
import LevelBar from './levelbar';

export default {
  components: {
    AppNavBar,
    LevelBar,
  },
  computed: {
    screenHeight() {
      return `${window.innerHeight - 78}px`;
    },
  },
};
</script>

<style lang="less">
.app-container {
  padding: 8px 0px;
  width: 100%;
  display: flex;
  padding-left: 190px;
  padding-top: 70px;
  padding-right: 10px;
  .nav-left {
    overflow: auto;
    margin-right: 4px;
    width: 180px;
    box-sizing: content-box;
    border-right: 1px solid #efefef;
    box-shadow: 1px 0 4px 0px hsla(0, 0%, 7%, .1);
    padding-top: 60px;
    position: fixed;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #2d3035;
  }
  .router-view-box {
    // overflow: auto;
    flex: 1;
  }
  .router-view {
    padding: 12px 8px;
    width: 100%;
    background: #fff;
    animation-duration: .5s;
    animation-fill-mode: both;
    backface-visibility: 0 1px 4px 0px hsla(0, 0%, 7%, .1);
  }
}
</style>
