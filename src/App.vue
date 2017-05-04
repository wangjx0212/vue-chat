<template>
  <div id="app">
    <header class="app-header"  v-if="$route.path == '/Self' || $route.path == '/Explore' || $route.path == '/Contacts' || $route.path == '/Wechat' || $route.path == '/'">
      <WxHead></WxHead>
    </header>
    <section class="app-section">

        <router-view></router-view>

    </section>
    <footer class="app-footer"  v-if="$route.path == '/Self' || $route.path == '/Explore' || $route.path == '/Contacts' || $route.path == '/Wechat' || $route.path == '/'">
      <WxNav></WxNav>
    </footer>

  </div>
</template>

<script>

import WxNav from './components/common/wx-nav'
import WxHead from './components/common/wx-head'
import WeChat from './components/wechat/wechat'
export default {
  name: 'app',
  components: {
    WxNav,
    WxHead,
    WeChat
  }

}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/lib/iconfont.css";
  /*过渡效果需要的动画库*/
  @import "assets/css/lib/animate.css";
  /*weui 样式库 非常适合高仿微信*/
  @import "assets/css/lib/weui.min.css";
  html{
    min-height: 100%;
  }
  body{
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    background-color: #ebebeb;
  }
  .app-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .app-section{
    height: 100%;
  }
  .app-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    z-index: 9999;
  }
  .app-section{
    margin-top: 46px;
  }
  .clearfix:after{
    content: "";
    display: block;
    clear: both;
  }
  .weui-cells{
    position: static;
  }
  .icon-tianjia{
    font-size: 20px;
}

</style>
