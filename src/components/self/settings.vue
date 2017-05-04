<template>
    <div class="weui-settings">
        <div class="settings-main"  v-if="$route.path == '/Self/settings'">
            <header class="weui-settings-header">
                <div class="weui-settings_head">
                    <router-link tag="i" to="/Self" class="iconfont goBack">&#xe65f;</router-link><span>设置</span>
                </div>
            </header>
            <section class="weui-settings_section">
                <div class="weui-cells">
                    <router-link tag="a" to="/Self/settings/notice"  class="weui-cell weui-cell_access" >
                        <div class="weui-cell__bd">
                            <p>新消息提醒</p>
                        </div>
                    </router-link>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>勿扰模式</p>
                        </div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>聊天</p>
                        </div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>隐私</p>
                        </div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>设备</p>
                        </div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>通用</p>
                        </div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>账号与安全</p>
                        </div>
                    </a>
                </div>
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>关注与反馈</p>
                        </div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>关于微信</p>
                        </div>
                    </a>
                </div>
                <div class="wechat-return">
                    <a href="javascript:;" class="weui-btn weui-btn_warn btn-return">退出登录</a>
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
    .weui-settings-header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 46px;
        background-color: #303036;
        color: #ffffff;
    }
    .weui-settings_head{
        height: 46px;
        line-height: 46px;
        font-size: 16px;
    }
    .weui-settings_head i{
        margin-left: 10px;
        margin-right: 14px;
    }
    .weui-settings_section{
        margin-top: 66px;
    }
    .wechat-return{
        margin-top: 20px;
        padding: 0 20px;
    }
</style>
