<template>
  <div class="weui-new_friend">
    <div class="new-friend-main">
      <header class="new-friend-header">
        <div class="new-friend_head">
          <router-link tag="i" to="/Contacts" class="iconfont icon-xiangzuo"></router-link><span>新的朋友</span><span class="add-friend">添加朋友</span>
        </div>
      </header>
      <section class="new-friend_section">
        <div class="weui-cells">
          <p class="weui-cells-p"><i class="iconfont icon-sousuo_sousuo"></i><input type="text" class="seach-new_friend" placeholder="微信号/QQ号/手机号"></p>
        </div>
        <div class="weui-cells__title">新的朋友</div>
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access new-friend_item" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/header/lufei.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>路飞</p>
              <p><span>家家乐路飞先生</span></p>
            </div>
            <div class="">已添加</div>
          </a>
          <a class="weui-cell weui-cell_access new-friend_item" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/header/shanzhi.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>山治</p>
              <p><span>手机联系人: 山治先生</span></p>
            </div>
            <div class="">已添加</div>
          </a>
          <a class="weui-cell weui-cell_access new-friend_item" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/header/wsp.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>乌索普</p>
              <p><span>草帽海贼团狙击手</span></p>
            </div>
            <div class="">
              <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">接受</a>
            </div>
          </a>
          <a class="weui-cell weui-cell_access new-friend_item" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/header/zl.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>罗洛亚‧卓洛</p>
              <p><span>我是罗洛亚‧卓洛</span></p>
            </div>
            <div class="">
              <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">接受</a>
            </div>
          </a>
          <a class="weui-cell weui-cell_access new-friend_item" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/header/qb.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>乔巴</p>
              <p><span>我是乔巴</span></p>
            </div>
            <div class="">已添加</div>
          </a>
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
  .new-friend-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .new-friend_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .new-friend_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .new-friend_section{
    margin-top: 46px;
  }
  .new-friend_item p {
    font-size: 16px;
  }
  .new-friend_item p span{
    color: #888888;
    font-size: 14px;
  }
  .weui-cells-p{
    height: 40px;
    color: #888888;
    padding-left: 20px;
  }
  .weui-cells-p i{
  font-size: 22px;
    line-height: 38px;
  }
  .new-friend_section .seach-new_friend{
    border: none;
    font-size: 14px;
    width: 92%;
    background: #ffffff;
  }
  .add-friend{
    float: right;
    font-size: 14px;
    margin-right: 16px;
  }
  .new-friend_section .icon-sousuo_sousuo{
    position: relative;
    top: 2px;
    margin-right: 6px;
    font-size: 18px;
  }
</style>
