<template>
    <div class="weui-Explore">
      <div v-if="$route.path == '/Explore'">
        <div class="weui-cells">

          <router-link tag="a" to="/Explore/moments"  class="weui-cell weui-cell_access">
              <div class="weui-cell__hd"><img src="../../assets/images/find_icon-circle.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
              <div class="weui-cell__bd">
                <p>朋友圈</p>
              </div>
            <div class="weui-cell__ft explore-cell__ft" v-if="$store.state.newExploreSign">
              <img src="../../assets/images/header/lufei.jpg">
              <i class="new-msg-dot" ></i>
            </div>
          </router-link>

        </div>
        <div class="weui-cells">

          <router-link tag="a" to="/Explore/saoyisao"  class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><img src="../../assets/images/find_icon-qrcode.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>扫一扫</p>
            </div>
          </router-link>
          <router-link tag="a" to="/Explore/yaoyiyao"  class="weui-cell weui-cell_access">
            <div class="weui-cell__hd"><img src="../../assets/images/find_icon-shake.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>摇一摇</p>
            </div>
          </router-link>
    </div>
    <div class="weui-cells">
      <router-link tag="a" to="/Explore/fujinderen"  class="weui-cell weui-cell_access">
        <div class="weui-cell__hd"><img src="../../assets/images/find_icon-locationservice.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
          <p>附近的人</p>
        </div>
      </router-link>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/find_icon-bottle.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
                 <p>漂流瓶</p>
            </div>
        </a>
    </div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd"><img src="../../assets/images/find_icon-shopping.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui-cell__bd">
                    <p>购物</p>
                </div>

            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd"><img src="../../assets/images/find_icon-moregame.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui-cell__bd">
                    <p>游戏</p>
                </div>
            </a>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'explore',
        components: {

        }
    }
</script>

<style>
    .weui-Contacts img{width:32px !important;height:32px ;display:block;margin-right:10px}
    .weui-Explore{
        padding-top: 0.2em;
    }
  .explore-cell__ft img{
    width: 28px;
    height: 28px;
  }
  .explore-cell__ft .new-msg-dot{
    right: 8px;
    top: -4px;;
  }
</style>
