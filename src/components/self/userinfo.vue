<template>
  <div class="weui-userinfo">
    <div class="userinfo-main">
      <header class="userinfo-header">
        <div class="userinfo_head">
          <router-link tag="i" to="/Self" class="iconfont goBack">&#xe65f;</router-link><span>个人信息</span>
        </div>
      </header>
      <section class="userinfo_section">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd"></div>
            <div class="weui-cell__bd">
              <p>头像</p>
            </div>
            <div class="self-img"><img :src="getUserInfo[0].headerUrl" alt="" style="width:20px;margin-right:5px;display:block"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd "></div>
            <div class="weui-cell__bd">
              <p>昵称</p>
            </div>
            <div class="">{{getUserInfo[0].name}}</div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd "></div>
            <div class="weui-cell__bd">
              <p>二维码名片</p>
            </div>
            <div class=""><img src="../../assets/images/chat-info-qr.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd "></div>
            <div class="weui-cell__bd">
              <p>我的地址</p>
            </div>
            <div class=""></div>
          </a>
        </div>
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
              <p>性别</p>
            </div>
            <div class="">男</div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
              <p>地区</p>
            </div>
            <div class="">{{getUserInfo[0].area}}</div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
              <p>个性签名</p>
            </div>
            <div class="" v-if="getUserInfo[0].signature">{{getUserInfo[0].signature}}</div>
            <div class="" v-if="!getUserInfo[0].signature">未填写</div>
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
			getUserInfo(){
				return this.$store.state.userInfo;
			}
    },

  }
</script>

<style>
  .userinfo-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .userinfo_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .userinfo_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .userinfo_section{
    margin-top: 66px;
  }

</style>
