<template>

  <div class="dialogue" @click="msgmoreHide" >
    <!--animated bounceInRight-->
  <div class="weui-wechat-dialogue"  >
    <header class="dialogue-header" >
      <div class="dialogue_head" >
        <router-link tag="i" to="/Wechat" class="iconfont goBack">&#xe65f;</router-link><span>{{$route.query.name}}</span>
      </div>
    </header>
    <section class="dialogue_section">

      <div v-for="(getMsgInfo,index) in getMsgInfos" class="  clearfix" v-bind:class="{'infoItem':getMsgInfo.mark == 1,'infoItemUser':getMsgInfo.mark == 0}" >
          <img :src="getMsgInfo.headerUrl" class="headerPic">
        <span class="text" @click="msgmoreShow">{{getMsgInfo.text}}</span>
      </div>
      <div class="msg-more" id="msg-more" >
        <span>复制</span>|<span>转发</span>|<span>收藏</span>|<span>删除</span>
      </div>
    </section>
    <div class="">

    </div>
    <div class="hint1">
      <img src="../../assets/images/recording-bkg.png">
      <img src="../../assets/images/recording-signa-l008.png">
      <p>手指上滑,取消发送</p>
    </div>
    <div class="hint2">
      <img src="../../assets/images/record-cancel.png">
      <p>松开手指,取消发送</p>
    </div>
    <div class="dialogue_footer">
      <div class="dialogue_footer-bar clearfix">
        <div class="icon-left">
          <i class="iconfont "  v-bind:class="{'icon-yuyin1':chatWay,'icon-jianpan':!chatWay}" v-on:click="toggleChatWay"></i>

        </div>

        <div class="icon-right">
          <i class="iconfont icon-xiaolian"></i>
          <i class="iconfont icon-jikediancanicon09" v-if="!chatText.replace(/(^\s*)|(\s*$)/g,'')"></i>
           <a href="javascript:;" class="weui-btn weui-btn_primary btn-send_text" @click="setchat" v-if="chatText.replace(/(^\s*)|(\s*$)/g,'')">发送</a>
        </div>
        <div class="icon-text" v-if="chatWay">
           <input type="text" class="chat-text" v-model="chatText"  >
        </div>
        <div class="icon-text" v-if="!chatWay">
        	<button class="chat-voice"  v-press  >按住 说话</button>
        <!--  <input type="button" class="chat-voice"  value="按住 说话"  v-press >-->
        </div>

      </div>

    </div>
  </div>
  </div>

</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        chatWay:true, // true 打字， false 语音输入
				msgmore:true,
        chatText:'',
      }
    },
    components: {

    },
    computed: {
      getMsgInfos: function () {
        var name = this.$route.query.name,
          	mid = parseInt(this.$route.query.mid),
          	wxid = this.$route.query.wxid,
          	msgInfo = {};
			
				console.log(name);
        this.$store.state.msgList.baseMsg.map(function (item, key, arr) {
            if(mid === item.mid || wxid === item.msgmsg[0].wxid ){
             /* msgInfo.push(item);*/
              msgInfo=item;
            }
        });
        return msgInfo.msgmsg;
      }
    },
    methods: {
    	setchat:function(){
    		var wxid;
    		const obj = {
    			"mid": parseInt(this.$route.query.mid),
    			"wechatText": this.chatText, 
    			"date" : 123455356,
    			"headerUrl": this.$store.state.userInfo[0].headerUrl,
    			"name": this.$store.state.userInfo[0].name,
    			"mark": 0,
    			"wxid":this.$route.query.wxid
    		};
				
				if(!obj.mid){
						wxid = this.$route.query.wxid;
					 	this.$store.state.msgList.baseMsg.map(function (item, key, arr) {	 	
					 		if(wxid ===  item.msgmsg[0].wxid){
					 			obj.mid = parseInt(item.mid);
					 		}			 		
					 	});
				}
				
    		this.$store.dispatch('setwechat',obj);
    		this.chatText="";
    	},
    	msgmoreShow: function(e){
    		if(this.msgmore){
    				var oMsgmore=document.getElementById('msg-more'),
    				_than=e.currentTarget,
    				_thanOffSetTop=_than.offsetTop,
    				oMsgmoreClientHeight,
    				oMsgmoreClientWidth,
    				oMsgmoreTop,
    				oMsgmoreLeft;
		    		//this.msgmore=true;
						oMsgmore.style.display="block";
						oMsgmoreClientHeight=oMsgmore.clientHeight;
						oMsgmoreClientWidth=_than.clientWidth;
						oMsgmoreTop=_thanOffSetTop-oMsgmoreClientHeight-6;
						oMsgmoreLeft=oMsgmoreClientWidth/2+52;
		
						oMsgmore.style.top=oMsgmoreTop+"px";
						oMsgmore.style.left=oMsgmoreLeft+"px";
			    	//	oMsgmore.style.top=offSetTop+"px";
		    		//	oMsgmore.style.color="red";
		    		e.stopPropagation();
    		}  	
    	},
    	msgmoreHide: function(e){
    		if(this.msgmore){
    			    e.stopPropagation();
    					var oMsgmore=document.getElementById('msg-more');
    					oMsgmore.style.display="none"
    		}

    	},
      toggleChatWay: function(){
          let state=this.chatWay;
          if(state === true){
            this.chatWay=false;
          }else{
            this.chatWay=true;
            
          }
      }
    },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    //	console.log("hs");
    this.msgmore=false
		next(true);
  	},
    
    directives: {
      press:{
        bind(el){
						var starTx,starTy;
            el.addEventListener('touchstart',function(e){
               var _this=this,
               		 touches=e.touches[0];
               		 starTx=touches.clientX;
               		 starTy=touches.clientY;

                _this.innerText='松开 结束';
                _this.className ='chat-voice_active';
                document.querySelector(".hint1").style.display='block';
                document.querySelector(".hint2").style.display='none';
            });
            el.addEventListener('touchend', function() {
           
                var _this=this;
                _this.innerText='按住 说话';
                _this.className ='chat-voice';
                document.querySelector(".hint1").style.display='none';
                document.querySelector(".hint2").style.display='none';
            

            });
          el.addEventListener('touchmove', function(e) {
              var _this=this,
              		touches=e.changedTouches[0],
              		endTy=touches.clientY,
              		distanceY=starTy-endTy;

              		if(distanceY >20 && distanceY < 100){
              				_this.innerText='松开手指 取消发送';
              				_this.className ='chat-voice_active';
              				document.querySelector(".hint1").style.display='none';
              				document.querySelector(".hint2").style.display='block';
              		}
              
       

          });

        }
      },

    }
  }
</script>

<style>
  .dialogue{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .weui-wechat-dialogue{
    position: fixed;
    top: 0;
    width: 100%;
    height: 46px;
    background-color: #303036;
    color: #ffffff;
  }
  .dialogue_head{
    height: 46px;
    line-height: 46px;
    font-size: 16px;
  }
  .dialogue_head i{
    margin-left: 10px;
    margin-right: 14px;
  }

  .infoItem{
    width: 88%;
    margin-top: 30px;
    padding-left: 16px;
  }
  .infoItemUser{
  	float: right;
  	width: 88%;
    margin-top: 30px;
    padding-left: 16px;
  }
  
  .infoItem img{
    float: left;
    width: 36px;
    height: 36px;
    display: block;
  }
  .infoItemUser img{
    float: right;
    width: 36px;
    height: 36px;
    display: block;  	
  }
  
  .infoItem .text{
    position: relative;
    float: left;
    padding: 8px;
    margin-left: 10px;
    background-color: #ffffff;
    max-width: 80%;
    border-radius: 6px;
    color: #000000;
    font-size: 14px;
  }
  .infoItemUser .text{
    position: relative;
    float: right;
    padding: 8px;
    margin-right: 10px;
    background-color: #ffffff;
    max-width: 80%;
    border-radius: 6px;
    color: #000000;
    font-size: 14px;	
  }
  
  .infoItem .text:before{
    position: absolute;
    left: -10px;
    top: 11px;
    width: 0;
    height: 0;
    content: "";
    border: 6px solid transparent;
    border-right-color: #fff
  }
  .infoItemUser .text:after{
  	position: absolute;
    right: -10px;
    top: 11px;
    width: 0;
    height: 0;
    content: "";
    border: 6px solid transparent;
    border-left-color: #fff
  }
  
  .dialogue_footer{
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #ffffff;
    border-top: 1px solid #ffffff;
    padding-bottom: 6px;
  }
  .dialogue_footer-bar .icon-yuyin1,.dialogue_footer-bar .icon-jianpan{
    margin-left: 6px;
    font-size: 32px;
    color: #84858a;

  }
  .dialogue_footer-bar .chat-text{
  	padding-left: 6px;
    width: 98.5%;
    height: 42px;
    border: none;
    border-bottom:1px solid #dbdbdb;
    font-size: 18px;
    
  }
  .dialogue_footer-bar .chat-voice{
    margin-top: 4px;
    margin-left: 10px;
    width: 95.0%;
    height: 40px;
    border:1px solid #dbdbdb;
    background: #ffffff;
  }
  .dialogue_footer-bar .chat-voice_active{
    margin-top: 4px;
    margin-left: 10px;
    width: 95.0%;
    height: 40px;
    border:1px solid #dbdbdb;
    background-color: #c6c7ca;
  }

  .dialogue_footer-bar .icon-xiaolian{
    margin: 0 16px;
    font-size: 34px;
    color: #84858a;
    position: relative;
    bottom: 3px;
  }
  .dialogue_footer-bar .icon-jikediancanicon09{
    margin-right: 12px;
    font-size: 36px;
    color: #84858a;
    position: relative;
    bottom: 5px;
  }
  .icon-left{
    float: left;
  }
  .icon-right{
    float: right;
  }
  .icon-text{
    margin-left: 46px;
    margin-right: 122px;
  }
  .hint1{
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -113px;
    margin-left: -102px;
    text-align: center;
    background-color: rgba(105,105,105,0.8);
    border-radius: 12px;
    display: none;
  }
  .hint2{
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -113px;
    margin-left: -100px;
    text-align: center;
    background-color: rgba(105,105,105,0.8);
    border-radius: 12px;
    display: none;
  }
  .hint1 p{
    font-size: 18px;
    margin-bottom: 14px;
  }
  .hint2 p{
    font-size: 18px;
    margin:0 12px 16px ;
    padding: 6px;
    border-radius: 6px;
    background-color: rgba(145,50,49,0.8);
  }
  .msg-more{
    position: absolute;
    width: 220px;
    padding: 6px;
    border-radius: 6px;
    background:rgba(000,000,000,1);
    display: none;
  }
  .msg-more span{
    margin: 0 12px;
  }
  .btn-send_text{
  	display: inline-block;
  	position: relative;
    width: 50px;
    height: 35px;
    font-size: 16px;
    line-height: 38px;
    top: 2px;
    right: 6px;
    padding: 0;
  }
</style>
