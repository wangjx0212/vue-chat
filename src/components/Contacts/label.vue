<template>
  <div class="weui-Contacts-label">
    <div class="Contacts-label-main">
      <header class="Contacts-label-header">
        <div class="Contacts-label_head">
          <router-link tag="i" to="/Contacts" class="iconfont icon-xiangzuo"></router-link><span>群聊</span><span class="newAdd">新建</span>
        </div>
      </header>
      <section class="label_section">
        <div class="titleInfo">
          <p>暂无标签</p>
          <span>你可以通过给朋友添加标签来进行分类</span>
        </div>
        <div class="btn-box">
          <a href="javascript:;" class="weui-btn weui-btn_primary btn-add_label">新建标签</a>
        </div>

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
  .Contacts-label-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .Contacts-label_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .Contacts-label_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .Contacts-label_head .newAdd{
    float: right;
    margin-right: 16px;
  }
  .label_section .titleInfo{
    margin-top: 230px;
    text-align: center;
  }
  .label_section .titleInfo p{
    font-size: 18px;
    color: #888888;
    margin-bottom: 18px;
  }
  .label_section .titleInfo span{
    color: #888888;
  }
  .btn-box{
    margin-top: 130px;
    padding: 0 20px;
  }

</style>
