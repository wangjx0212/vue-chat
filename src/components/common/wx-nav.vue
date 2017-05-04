<template>
  <div class="weui-tab">
    <div class="weui-tab__panel">
    </div>
    <div class="weui-tabbar tabbar_bottom">
      <router-link tag="a" to="/Wechat" activeClass="weui-bar__item_on" class="weui-tabbar__item " v-bind:class="{'weui-bar__item_on':$route.path == '/'}">
        <i class="iconfont icon-weixin"></i>
        <p class="weui-tabbar__label">微信</p>
      </router-link>
      <router-link tag="a" to="/Contacts" activeClass="weui-bar__item_on" class="weui-tabbar__item">
        <i class="iconfont icon-tongxunlu"></i>
        <p class="weui-tabbar__label">通讯录</p>
      </router-link>
      <router-link tag="a" to="/Explore"  activeClass="weui-bar__item_on"  class="weui-tabbar__item ">
        <i class="iconfont icon-explore icon-faxian"><i class="new-msg-dot" v-if="$store.state.newExploreSign"></i></i>
        <p class="weui-tabbar__label">发现</p>
      </router-link>
      <router-link tag="a" to="/Self" activeClass="weui-bar__item_on" class="weui-tabbar__item">
        <i class="iconfont icon-wode"></i>
        <p class="weui-tabbar__label">我</p>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {

      }
    },
    components: {

    },
    computed:{
      getPath(){
        return $route.path;
      }

    }

  }
</script>

<style>
  .weui-bar__item_on i{
    color: #09bb07;
  }
  .icon-explore{
    position: relative;
  }
  .new-msg-dot{
    position: absolute;
    display: inline-block;
    right: -6px;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: red;
    background-color: #f43531;
    font-size: 0;
  }
</style>
