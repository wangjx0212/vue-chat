<template>
    <div class="weui-head">
        <div class="weui-head_left">微信(48)</div>
        <div class="weui-head_right"><router-link tag="i" to="/search" class="iconfont icon-sousuo_sousuo"></router-link><i class="iconfont icon-tianjia" @click="tipsJia()" ></i>
          <div class="right-tips" v-if="isActice">
            <ul>
              <router-link tag="li" to="/" ><i class="iconfont icon-liaotian"></i><span>发起群聊</span></router-link>
              <router-link tag="li" to="/" ><i class="iconfont icon-icon"></i><span>添加朋友</span></router-link>
              <router-link tag="li" to="/" ><i class="iconfont icon-saoyisao"></i><span>扫一扫</span></router-link>
              <router-link tag="li" to="/" ><i class="iconfont icon-fukuan"></i><span>收付款</span></router-link>
              <router-link tag="li" to="/" ><i class="iconfont icon-xinfeng"></i><span>帮助与反馈</span></router-link>
            </ul>
          </div>
          <div class="right-tips_mark"  v-if="isActice" @click="isActice=false" ></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data(){
          return {
            isActice:false
          }
        },
        components: {

        },
      computed: {

      },
      methods:{
        tipsJia(){
              if(this.isActice === true){
                this.isActice=false;
              }else{
                this.isActice=true;
              }
        }
      }
    }
</script>

<style>
.weui-head_left{
    float: left;
    padding-left: 10px;
    height: 46px;
    color: #ffffff;
    font-size: 17px;
    line-height: 46px;
}
    .weui-head_right{
        height: 46px;
        line-height: 46px;
        float: right;
        color: #ffffff;
    }
    .weui-head_right i:nth-of-type(1){
        margin-right: 30px;
    }
.weui-head_right i:nth-of-type(2){
    margin-right: 16px;
}
  .right-tips{
    position: absolute;
    width: 180px;
    right: 8px;
    top: 46px;;
    padding: 0 2px;
    background-color: rgba(055,059,062,1);
    z-index: 2000;
  }
  .right-tips li:hover{
    background-color: rgba(072,073,075,0.8);
  }
  .right-tips li{
    padding: 0 10px;
  }
  .right-tips li i{
    font-size: 20px;
  }
  .right-tips_mark{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
  }
</style>
