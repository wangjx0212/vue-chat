<template>
  <div class="weui-explore_moments" >
    <div class="explore_moments_main" >
      <header class="explore_moments-header">
        <div class="explore_moments_head">
          <router-link tag="i" to="/Explore" class="iconfont icon-xiangzuo"></router-link><span>朋友圈</span> <router-link tag="i" to="/Explore/setMoments" class="iconfont icon-iconphoto"></router-link>
        </div>
      </header>
      <section class="explore_moments_section">
        <div class="home-pic clearfix">
            <div class="home-pic-base">
              <img :src="this.$store.state.userInfo[0].headerUrl" alt=""  class="home-pic_inner">
              <p class="home-pic_text">{{this.$store.state.userInfo[0].name}}</p>
            </div>

        </div>

        <div class="weui-cell moments__post" v-for="( item, index ) in getMoments">
          <div class="weui-cell__hd moments-cell__hd">
            <img  :src="item.headerUrl">
          </div>
          <div class="weui-cell__bd">
            <!-- 人名链接 -->
            <a class="title">
              <span>{{item.nickname}}</span>
            </a>
            <!-- post内容 -->
            <p id="paragraph" class="paragraph">{{item.paragraph}}</p>
            <!-- 伸张链接 -->
            <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
            <!-- 相册 -->
            <div class="thumbnails clearfix">
              <div class="thumbnail" v-for="(thumbnail, index) in item.thumbnails">
                <img :src="thumbnail.imgSrc">
              </div>
            </div>
            <!-- 资料条 -->
            <div class="toolbar">
              <span class="timestamp">{{item.timestamp}}</span>
              <div class="interact"><ul><li @click="like(index)" v-if="!item.offlike" >赞</li><li v-if="item.offlike" @click="offlike(index)" >取消</li><li>评论</li></ul></div>
              <span class="actionToggle" @click="actionToggle($event,index)">..</span>
            </div>
            <!-- 赞／评论区 -->
            <p class="liketext"><i class="icon icon-96"></i><span class="nickname" v-for="(like,index) in item.liketext">{{like}} </span></p>
          </div>
          <!-- 结束 post -->
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
					interact:"true",
					oInteractDom:'' ,
					oInteractDex:''
      }
    },
    components: {

    },
    computed:{
      getMoments:function(){
        return this.$store.state.allMoments;
      }
    },
    methods: {
    	actionToggleHide:function() {
    		this.oInteractDom.style.display = "none";
    	},
    	
    	actionToggle:function(e,index) {

				var _this=e.currentTarget,
						oToolbar = _this.parentNode,
						oInteract = oToolbar.getElementsByClassName("interact")[0],
				oInteracts=document.getElementsByClassName("interact");
				if(this.oInteractDex === index){
					
				}else{
					if(this.oInteractDom){
						this.oInteractDom.style.display="none"
					}
						this.interact = "true";
						this.oInteractDex=index;
						this.oInteractDom=oInteract;
				}
			
				if(this.interact === "true"){
					oInteract.style.display = 'block';
					this.interact = "false";
				}else{
						oInteract.style.display = 'none';
						this.interact = "true";
				};

				
    },
    	like:function(index) {
				var obj = {};
				obj.name = this.$store.state.userInfo[0].name;
				obj.wxid = this.$store.state.userInfo[0].wxid;
				obj.dex = index;
    		this.oInteractDom.style = "none";
    		this.interact = "true";
    		this.$store.dispatch('setLike', obj);
    	},
    	offlike:function(index){
    		var obj = {};
    		obj.name = this.$store.state.userInfo[0].name;
				obj.wxid = this.$store.state.userInfo[0].wxid;
				obj.dex=index;
    		this.oInteractDom.style = "none";
    		this.interact = "true";
    		this.$store.dispatch('offlike', obj);
    	}
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
      
       	return  vm.$store.dispatch('setNewExploreSign',false);
       
       })
    },

  }
</script>

<style>
  .weui-explore_moments{

  }
  .explore_moments-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
    z-index: 6;
  }
  .explore_moments_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .explore_moments_head i{
    margin-left: 10px;
    margin-right: 14px;
  }
  .explore_moments_head .icon-iconphoto{
    float: right;
    font-size: 22px;
  }

  .explore_moments_section{
    background-color: #ffffff;
  }
  .home-pic{
    width: 100%;
    position: relative;
    height: 370px;
    z-index: 5;
    background: url("../../assets/images/header/header02.png") no-repeat 50%;
    background-size: cover;
    margin-top: -46px;
    margin-bottom: 50px;
    position: relative;
  }
  .home-pic-base{
    position: absolute;
    bottom: -32px;
    width: 100%;
  }
  .home-pic_inner{
    float: right;
    margin-right: 10px;
    display: block;
    width: 66px;
    width: 66px;

  }
  .home-pic_text{
    float: right;
    margin-top: 6px;
    margin-right: 10px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
  }
  .moments-cell__hd{

  }
  .moments__post{
    -webkit-box-align: inherit !important;
     -webkit-align-items: inherit !important;
     align-items: inherit !important;
  }
  .moments-cell__hd img{
    width: 45px !important;
    height: 45px !important;
  }
  .weui-cell__bd .title{
    font-size: 14px;
    color: #498cdb;
  }
  .weui-cell__bd  .paragraph{
    font-size: 14px;
  }
  .thumbnails .thumbnail{
    float: left;
    margin-right: 6px;
  }
  .thumbnails .thumbnail img{
    width: 80px;
    height: 80px;
  }
  .toolbar{
  	position: relative;
  }
  .toolbar .actionToggle{
  	position: relative;
    float: right;
    width: 20px;
    height: 15px;
   	font-size: 22px;
   	line-height: 4px;
    text-align: center;
    background-color: #8293ae;
    color: #FFFFFF;
  }
  .toolbar .actionToggle:before{
  	content: '';
  	left: -9px;
  	top: 3px;
  	position: absolute;
  	border: 5px solid transparent;
  	border-right-color: #8293ae;
  }
  
  .liketext{
    margin-top: 10px;
    background-color: #f3f3f5;
  }
  .interact{
  	position: absolute;
  	width: 200px;
  	background-color: #303036;
  	top: -8px;
  	right: 32px;
  	color: #ffffff;
  	display: none;
  }
  .interact ul li{
  	float: left;
  	box-sizing: border-box;
  	-webkit-box-sizing: border-box;
  	width: 50%;
  	padding: 8px;
  	text-align: center;
  }
  .interact ul li:active{
  	background-color: #304036;
  }

</style>
