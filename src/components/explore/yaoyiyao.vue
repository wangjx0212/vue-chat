<template>
  <div class="weui-Contacts-yaoyiyao">
    <div class="Contacts-yaoyiyao-main">
      <header class="Contacts-yaoyiyao-header">
        <div class="Contacts-yaoyiyao_head">
          <router-link tag="i" to="/Explore" class="iconfont icon-xiangzuo"></router-link><span>摇一摇</span>
        </div>
      </header>
      <section class="yaoyiyao_section">
        <div class="yaoyiyao">
          <img src="../../assets/images/yaoyiyao.png">
        </div>
        <div class="yaoyiyao-tab">
          <ul>
            <li class="active">人</li>
            <li>歌曲</li>
            <li>电视</li>
          </ul>
        </div>

      </section>
    </div>
    <div class="fullScreen"></div>
    <router-view></router-view>
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

    },

  }
</script>

<style>
  .Contacts-yaoyiyao-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .Contacts-yaoyiyao_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .Contacts-yaoyiyao_head i{
    margin-left: 10px;
    margin-right: 14px;
  }

  .yaoyiyao_section .yaoyiyao{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -84px;
    margin-left: -64px;
    width: 128px;
    height: 128px;
  }
  .yaoyiyao-tab{
    position: absolute;
    bottom: 0;
    background-color: #040404;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .yaoyiyao-tab li{
    float: left;
    width: 30%;
    text-align: center;
    color: #dddddd;
  }
  .active{
    color: #09bb07 !important;
  }

</style>
