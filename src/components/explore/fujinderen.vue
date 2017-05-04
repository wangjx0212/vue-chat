<template>
  <div class="weui-Contacts-fujinderen">
    <div class="Contacts-yfunjinderen-main">
      <header class="Contacts-funjinderen-header">
        <div class="Contacts-funjinderen_head">
          <router-link tag="i" to="/Explore" class="iconfont icon-xiangzuo"></router-link><span>摇一摇</span>
        </div>
      </header>
      <section class="fujinderen_section">
        <div class="funjinderen">
          <img src="../../assets/images/fujinderen.png">
        </div>
        <p>你可以在此看到附近的人，同事你也会被他们看到。</p>
        <p>你在此留下的位置信息可以随时手动清除</p>
        <div class="btn-box">
          <a href="javascript:;" class="weui-btn weui-btn_primary btn-Begin_see">开始查看</a>
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
  .Contacts-funjinderen-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .Contacts-funjinderen_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .Contacts-funjinderen_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .fujinderen_section{
    text-align: center;
    color: #888888;
  }

  .fujinderen_section .funjinderen{
    margin: 60px auto;
    width: 128px;
    height: 128px;
  }
  .fujinderen_section .btn-box{
    margin-top: 130px;
    padding: 0 20px;
  }


</style>
