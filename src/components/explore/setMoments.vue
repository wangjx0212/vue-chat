<template>
  <div class="weui-explore-setMoments">
    <div class="explore-setMoments-main">
      <header class="explore-setMoments-header">
        <div class="explore-setMoments_head">
          <router-link tag="i" to="/Explore/moments" class="iconfont icon-xiangzuo"></router-link>   <input v-bind:disabled="!setMomentsInfo.replace(/(^\s*)|(\s*$)/g,'')"  type="button"  class="btn-setMoments" value="发送" @click="setMoments()">
        </div>
      </header>
      <section class="setMoments_section">
                <div class="weui-cells">
                  <div class="weui-cell">
                    <div class="weui-cell__bd">
                      <textarea  class="weui-textarea setMomentsInfo" placeholder="这一刻的想法" rows="3" v-model="setMomentsInfo" ></textarea>
                      <div class="weui_textarea_counter">
                        <p>所在位置</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="weui-cells">
                  <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="../../assets/images/me_more-my-album.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                      <p>谁可以看</p>
                    </div>
                    <div>公开</div>
                  </a>
                  <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd "><img src="../../assets/images/me_more-my-favorites.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    <div class="weui-cell__bd">
                      <p>提醒谁看</p>
                    </div>
                  </a>
                </div>

      </section>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        setMomentsInfo:'',

      }
    },
    components: {

    },
    computed:{

				

    },
  methods:{
		
    setMoments(){
    	let userInfo=this.$store.state.userInfo;
      const moment = {
        "headerUrl": userInfo[0].headerUrl,
        "nickname": userInfo[0].name,
        "remark": "savill",
        "paragraph": this.setMomentsInfo,
        "timestamp":'刚刚',
        "thumbnails": [/*{
          imgSrc: "/static/header01.png"
        },{
          imgSrc: "/static/lufei.jpg"
        }*/],
        "liketext": [],
        "likeWxId": [],
   			"offlike": false,
        "from": "",
        "tag": "",
        "desc": {
        }
      };
      this.$store.dispatch('setMoments',moment);
      this.$router.replace({ path: '/Explore/moments', force: true })
    }
		

		
    }
  }
</script>

<style>
  .explore-setMoments-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .explore-setMoments-header{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .explore-setMoments_head i{
    margin-left: 10px;
    margin-right: 14px;
  }

  .btn-setMoments{
    float: right;
    margin-top: 8px;
    border-radius: 2px;
    padding: 6px 12px;
    border: none;
    background-color:#7dd43c ;
    margin-right: 10px;
  }



</style>
