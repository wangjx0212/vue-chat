<template>
    <div class="weui-settings-notice">
        <header class="settings-notice-header" >
            <div class="notice_head" >
                <router-link tag="i" to="/Self/settings" class="iconfont goBack">&#xe65f;</router-link><span>新消息提醒</span>
            </div>
        </header>
        <section class="settings-notice_section">
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">接收新消息通知</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox"/>
                    </div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">通知显示消息详情</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox"/>
                    </div>

                </div>
            </div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">声音</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox"/>
                    </div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">新消息提示音</div>
                    <div class="weui-cell__ft">
                        跟随系统
                    </div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">震动</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox"/>
                    </div>

                </div>
            </div>






        </section>

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
    .settings-notice-header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 46px;
        background-color: #303036;
        color: #ffffff;
    }
    .notice_head{
        height: 46px;
        line-height: 46px;
        font-size: 16px;
    }
    .notice_head i{
        margin-left: 10px;
        margin-right: 14px;
    }
    .settings-notice_section{
        margin-top: 66px;
    }

</style>
