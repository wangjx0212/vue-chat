import * as types from './mutation-types'

export default {
  // 发送朋友圈
  [types.SET_MOMENTS] (state, moment) {
    state.allMoments.unshift(moment);
  },
  //取消新朋友圈消息小红点
  [types.SET_NEWEXPLORESIGN] (state, value) {
    state.newExploreSign=value;

  },
  
  //点赞
  [types.SET_LIKE] (state, obj) {

    state.allMoments[obj.dex].liketext.push(obj.name);
    state.allMoments[obj.dex].likeWxId.push(obj.weid);
    state.allMoments[obj.dex].offlike = true;
		//state.likedex.push(obj.dex);
		
  },
    //取消点赞
  [types.OFF_LIKE] (state, obj) {
  	function removeByArrValue(arr, val){
  			for(var i=0; i<arr.length;i++){
  				if( arr[i] == val ){
  					arr.splice(i,1);
  					break;
  				} 				
  			}
  	}
  	removeByArrValue(state.allMoments[obj.dex].liketext, obj.name);
  	removeByArrValue(state.allMoments[obj.dex].likeWxId, obj.weid);
    state.allMoments[obj.dex].offlike = false;	
  },
    //发送信息
  [types.SET_WECHAT] (state, obj) {
  	var mid = obj.mid,
  			wxid = obj.wxid,
  			addobj={
			 	"text": obj.wechatText,
        "date": obj.date,
        "name": obj.name,
        "headerUrl": obj.headerUrl,
        "mark":obj.mark,
        "wxid":obj.wxid
				},
				addBaseMsg={};
		var addBaseMsg;
		state.msgList.baseMsg.forEach(function(item, key, arr){
  			if(item.mid == mid){
  				item.msgmsg.push(addobj);
  			}
  	});
  	if(!mid){
					console.log(obj.headerUrl);
					state.allContacts.forEach(function(item, key, arr){
							if(item.wxid === wxid){
								addBaseMsg={
							      "mid": state.msgList.baseMsg.length+1, //消息的id 唯一标识，重要
							      "type": "friend",
							      "group_name": "",
							      "group_qrCode": "",
							      "read": true, //true；已读 false：未读
							      "newMsgCount": 1,
							      "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
							      "msgmsg": [{ //对话框的聊天记录 新消息 push 进
							        "text": addobj.text,
							        "date": addobj.date,
							        "name": obj.name,
							        "headerUrl": obj.headerUrl,
							        "mark":obj.mark,
							        "wxid": obj.wxid,
							      }],
							      "user": [item] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
							   
								};
								state.msgList.baseMsg.unshift(addBaseMsg);
							}
					});
		}
  },
	//删除对话
	  [types.DEL_BASEMSG] (state, dex) {
		state.msgList.baseMsg.splice(dex,1)
		//console.log(state.msgList.baseMsg);
  }
}
