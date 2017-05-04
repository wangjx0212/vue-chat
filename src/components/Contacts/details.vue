<template>
  <div class="weui-contacts_details">
    <div class="contacts-details_main" >
      <header class="contacts-details-header">
        <div class="contacts-details_head">
          <router-link tag="i" to="/Contacts" class="iconfont goBack">&#xe65f;</router-link><span>详细资料</span>
        </div>
      </header>
      <section class="contacts-details_section">
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd self-img"><img :src="getDetails[0].headerUrl" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <h4 class="self-nickname">{{getDetails[0].remark}}</h4>
              <p class="self-wxid">微信号: {{getDetails[0].wxid}}</p>
            </div>
          </a>
        </div>
        <div class="weui-cells">

          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd">
              <p>设置备注和标签</p>
            </div>
            <div class="weui-cell__bd">

            </div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd width60px">
              <p>电话号码</p>
            </div>
            <div class="weui-cell__bd">
              <p class="telphone">{{getDetails[0].telphone}}</p>
            </div>
          </a>
        </div>
        <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd width60px">
              <p>地区</p>
            </div>
            <div class="weui-cell__bd">
              <p><span class="area" v-for="(item, index) in getDetails[0].area">{{item}}</span></p>
            </div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd width60px"><p>个人相册</p></div>
            <div class="weui-cell__bd detailsPic">
              <img v-if="item.imgSrc" v-for="(item, index) in getDetails[0].album" :src="item.imgSrc" alt="" style="width:20px;margin-right:5px;display:block">
            </div>
          </a>
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd"><p>更多</p></div>
          </a>
        </div>
        <div class="wechat-msgsnd">
          <router-link tag="a" :to=" { path: '/wechat/dialogue', query:{ wxid:getDetails[0].wxid,name:getDetails[0].nickname || getDetails[0].nickname }} "  class="weui-btn weui-btn_primary btn-text"   :key="getDetails[0].mid" >
          	发消息
          </router-link>
          <a href="javascript:;" class="weui-btn weui-btn_default btn-voice">视频聊天</a>
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
      getDetails:function(){
            var wxid = this.$route.query.wxid,
                 detailsList=[],
                users=this.$store.state.allContacts;
            users.map(function( item, key, arr){
              if (wxid === item.wxid) {
                detailsList.push(item)
              }
            });
        return detailsList;
      }
    },

  }
</script>

<style>
  .contacts-details-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .contacts-details_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .contacts-details_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .contacts-details_section{
    margin-top: 66px;
  }
  .wechat-msgsnd{
    margin-top: 20px;
    padding: 0 20px;
  }
  .area{
    margin-right: 10px;
  }
  .detailsPic img{
    float: left;
    display: inline-block;
    width: 50px !important;
    height: 50px !important;
  }
  .width60px{
    width: 60px;
  }
  .telphone{
    color:#498cdb;
  }
</style>
