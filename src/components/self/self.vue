<template>
    <div class="weui-self">
        <div class="weui-seli_main"  v-if="$route.path == '/Self'">
            <div class="weui-cells">
              <router-link tag="a" to="/Self/userinfo" class="weui-cell weui-cell_access" >
                <div class="weui-cell__hd self-img"><img :src="getUserInfo[0].headerUrl" alt="" style="width:20px;margin-right:5px;display:block"></div>
                <div class="weui-cell__bd">
                  <h4 class="self-nickname">{{getUserInfo[0].name}}</h4>
                  <p class="self-wxid">微信号: {{getUserInfo[0].wxid}}</p>
                </div>
                <div class=""><img src="../../assets/images/chat-info-qr.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
              </router-link>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="../../assets/images/me_more-my-album.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>相册</p>
                    </div>

                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd "><img src="../../assets/images/me_more-my-favorites.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>收藏</p>
                    </div>

                </a>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="../../assets/images/me_more-my-bank-card.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>钱包</p>
                    </div>

                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd "><img src="../../assets/images/me_my-card-package-icon.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>卡包</p>
                    </div>

                </a>
            </div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="../../assets/images/me_more-expression.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>表情</p>
                    </div>

                </a>
            </div>
            <div class="weui-cells">
                <router-link tag="a" to="/Self/settings" class="weui-cell weui-cell_access" >
                    <div class="weui-cell__hd"><img src="../../assets/images/me_more-setting.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                        <p>设置</p>
                    </div>
                </router-link>
            </div>
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
.self-img img{
    height: 60px ;
    width: 60px !important;
}
    .self-wxid{
        font-size: 14px;
        color: #888888;
    }
.weui-cell__bd{
    padding-left: 10px;
}
</style>
