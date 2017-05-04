<template>
  <div class="weui-groupChat">
    <div class="groupChat-main">
      <header class="groupChat-header">
        <div class="groupChat_head">
          <router-link tag="i" to="/Contacts" class="iconfont icon-xiangzuo"></router-link><span>群聊</span><i class="iconfont icon-tianjia"  ></i>
        </div>
      </header>
      <section class="groupChat_section">

        <div class="titileInfo">你可以通过群聊中年的“保存通讯录”选项，将其保存到这里来</div>

      </section>
    </div>
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
  .groupChat-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .groupChat_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .groupChat_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .groupChat_head .icon-tianjia{
    float: right;
  }
  .groupChat_section{
    margin-top: 46px;
  }
  .groupChat_section .titileInfo{
    text-align: center;
    font-size: 16px;
    padding: 0 16px;
    margin-top: 230px;

  }

</style>
