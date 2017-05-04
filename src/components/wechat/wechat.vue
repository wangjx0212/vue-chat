<template>
    <div id="wechat">
        <ul class="wechat-list"  v-if="$route.path == '/Wechat' || $route.path == '/' " >
          <li v-for="(baseMsgObj,index) in getMsgList" >
           <router-link tag="div" :to=" { path: '/wechat/dialogue', query:{ mid:baseMsgObj.mid,wxid:baseMsgObj.msgmsg[0].wxid,name:baseMsgObj.group_name || (baseMsgObj.user[0].remark || baseMsgObj.user[0].nickname)}} "  class="item-box clearfix" v-swiper   :key="baseMsgObj.mid" >
              <div class="pic">
                <img v-for="(item,dex) in baseMsgObj.user" :src="item.headerUrl">
              </div>
              <div class="info">
                <p v-if="baseMsgObj.type==='group'">{{baseMsgObj.group_name}}</p>
                <p v-else>{{baseMsgObj.user[0].remark||baseMsgObj.user[0].nickname}}</p>
                <span v-if="baseMsgObj.type==='group'">{{baseMsgObj.msg[baseMsgObj.msg.length-1].name}}:</span>
                <span>{{baseMsgObj.msgmsg[baseMsgObj.msgmsg.length-1].text}}</span>
              </div>
            </router-link>
            <div class="operate">
            	<div class="operate-read">标为已读</div>
            	<div class="operate-del" @click="operateDel(index)">删除</div>
           </div>
          </li> 
        </ul>
        <router-view ></router-view>

    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {

        },
        computed:{
            getMsgList(){

                return this.$store.state.msgList.baseMsg;
            }
        },
        methods: {
        	operateDel:function(dex){
        		this.$store.dispatch('delBasemsg',dex);
        	}
        	
        },
        directives:{
        	swiper:{
        		bind: function(el){
        			var isTouchMove, startTx, startTy;
        			el.addEventListener('touchstart', function(e) {
        				var touches = e.touches[0];
        					startTx = touches.clientX;
        					startTy = touches.clientY;
        					isTouchMove = false;

        			},false);
        			el.addEventListener('touchmove',function(e){			
        				var touches = e.changedTouches[0],
        					endTx = touches.clientX,
        					endTy = touches.clientY,
        					distanceX = startTx-endTx,
        					distancey = startTy-endTy;
        					
        				if(distanceX < 0){
        					if(Math.abs(distanceX) > Math.abs(distancey)){
        						if(Math.abs(distanceX) > 20){
        							el.style.transition="0.5s";
        							el.style.Webkittransition="0.5s";
        							el.style.left=0;
        						}
        					}
        				}else{
        						if(Math.abs(distanceX) > Math.abs(distancey) && Math.abs(parseInt(el.style.left)) != 156){
        							
        							if(Math.abs(distanceX) < 156 && Math.abs(distanceX) > 20){
        								e.preventDefault();
        								el.style.transition="0s";
        								el.style.Webkittransition="0s";
        								el.style.left=-distanceX + "px";
        								isTouchMove=true;
        							}
        						}
        					}
        			},false);
        			el.addEventListener('touchend', function(e){
        				if(!isTouchMove){
        					return;
        				}
        				var touches=e.changedTouches[0],
        					endTx=touches.clientX,
        					endTy=touches.clientY,
        					distanceX = startTx-endTx,
        					distancey = startTy-endTy;
        				if(Math.abs(distanceX) > Math.abs(distancey)){
        					if(distanceX < 0){
        						return;
        					};
        					if(Math.abs(distanceX) < 60){
        						    el.style.transition="0.5s";
        						    el.style.Webkittransition="0.5s";
        							el.style.left=0;
        					}else{
        						   	el.style.transition="0.5s";
        						   	el.style.Webkittransition="0.5s";
        							el.style.left="-156px";
        					}
        				}
        				
        			})
        		}
        	}
        }

    }
</script>

<style>
.wechat-list li{
	position: relative;
    height: 64px;
    padding: 8px;
    border-bottom: 1px solid #dbdbdb;
    background-color: #ffffff;
    padding: 0 0 0 8px;
}
.item-box{
	position: absolute;
	background: #FFFFFF;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	padding: 0 0 0 8px;
}
.wechat-list li .pic{
	padding-top: 8px;
    float: left;
}
.wechat-list li .info{
	padding-top: 8px;
    float: left;
    margin-left: 10px;
    height: 100%;
    line-height: 25px;
    font-size: 16px;
    z-index: 9999;
}
.wechat-list .info span{
    font-size: 14px;
    color: #888888;
}
.wechat-list li img{
    width: 48px;
    height: 48px;
    border-radius: 6px;
}
.operate{
	position: absolute;
	height: 100%;
	right: 0;
	top: 0;
	z-index: 1;
}
.operate div{
	float: left;
	height: 100%;
	color: #fff;
	font-size: 18px;
	padding: 0 12px;
}
.operate div:after{
	display: inline-block;
	width: 0;
	height: 100%;
	vertical-align: middle;
	content: "";
}
.operate .operate-read{
	height: 100%;
	background-color: #c7c7cc;
}
.operate .operate-del{
	height: 100%;
	background-color: #ff3b30;
}
</style>
