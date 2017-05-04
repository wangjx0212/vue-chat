<template>
  <div class="weui-Contacts-saoyisao">
    <div class="Contacts-saoyisao-main">
      <header class="Contacts-saoyisao-header">
        <div class="Contacts-saoyisao_head">
          <router-link tag="i" to="/Explore" class="iconfont icon-xiangzuo"></router-link><span>二维码/条码</span>
        </div>
      </header>
      <section class="saoyisao_section">
        <div class="saoyisao">
          <img src="../../assets/images/saoyisao.png">
        </div>
        <div class="saoyisao-tab">
          <ul>
            <li class="active">扫码</li>
            <li>封面</li>
            <li>街景</li>
            <li>翻译</li>
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
  .Contacts-saoyisao-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .Contacts-saoyisao_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .Contacts-saoyisao_head i{
    margin-left: 10px;
    margin-right: 14px;
  }

  .saoyisao_section .saoyisao{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -84px;
    margin-left: -64px;
    width: 128px;
    height: 128px;
  }
  .saoyisao-tab{
    position: absolute;
    bottom: 0;
    background-color: #040404;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .saoyisao-tab li{
    float: left;
    width: 25%;
    text-align: center;
    color: #dddddd;
  }
  .active{
    color: #09bb07;
  }

</style>
