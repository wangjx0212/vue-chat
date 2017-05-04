import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import user from './users' //存放所有好友数据
import moment from './moments'

Vue.use(Vuex);

const state = {
	//likedex:[],
  newExploreSign:true,
  tipsStatus:false,
  allContacts:user.users,
  allMoments:moment.moments,
  userInfo:[{
  	"name": "savill",
  	"wxid": "savill.W",
  	"headerUrl": "./static/header01.png",
  	"sex": "男",
  	"area": "广东 广州",
  	"signature": "王先森"
  	
  }],
  msgList:{
    baseMsg:[{ //普通消息列表
      "mid": 1, //消息的id 唯一标识，重要
      "type": "friend",
      "group_name": "",
      "group_qrCode": "",
      "read": true, //true；已读 false：未读
      "newMsgCount": 1,
      "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
      "msgmsg": [{ //对话框的聊天记录 新消息 push 进
        "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
        "date": 1488117964495,
        "name": "张雨绮",
        "headerUrl": "https://img3.doubanio.com/img/celebrity/medium/47020.jpg",
        "mark":1,
        "wxid": "wxid_zhangyq",
      }, {
        "text": '点击空白处，操作菜单消失',
        "date": 1488117964495,
        "name": "张雨绮",
        "headerUrl": "https://img3.doubanio.com/img/celebrity/medium/47020.jpg",
        "mark":1,
         "wxid": "wxid_zhangyq",
      }, {
        "text": '来呀 快活啊',
        "date": 1488117964495,
        "name": "张雨绮",
        "headerUrl": "https://img3.doubanio.com/img/celebrity/medium/47020.jpg",
        "mark":1,
         "wxid": "wxid_zhangyq",       
      }],
      "user": [user.getUserInfo('wxid_zhangyq')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
    },
      { //普通消息列表
        "mid": 2, //消息的id 唯一标识，重要
        "type": "friend",
        "group_name": "",
        "group_qrCode": "",
        "read": true, //true；已读 false：未读
        "newMsgCount": 1,
        "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
        "msgmsg": [{ //对话框的聊天记录 新消息 push 进
          "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
          "date": 1488117964495,
          "name": "朱茵",
          "headerUrl": "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
          "mark":1,
          "wxid": "wxid_zhangy",
        }, {
          "text": '点击空白处，操作菜单消失',
          "date": 1488117964495,
          "name": "朱茵",
          "headerUrl": "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
          "mark":1,
          "wxid": "wxid_zhangy"
        }, {
          "text": '西遊記大結局之仙履奇緣',
          "date": 1488117964495,
          "name": "朱茵",
          "headerUrl": "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
          "mark":1,
          "wxid": "wxid_zhangy"
        }],
        "user": [user.getUserInfo('wxid_zhangy')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
      },{ //普通消息列表
        "mid": 3, //消息的id 唯一标识，重要
        "type": "friend",
        "group_name": "",
        "group_qrCode": "",
        "read": true, //true；已读 false：未读
        "newMsgCount": 1,
        "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
        "msgmsg": [{ //对话框的聊天记录 新消息 push 进
          "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
          "date": 1488117964495,
          "name": "金城武",
          "headerUrl": "https://img3.doubanio.com/img/celebrity/small/6925.jpg",
          "mark":1,
          "wxid": "wxid_jincw"
        }, {
          "text": '点击空白处，操作菜单消失',
          "date": 1488117964495,
          "name": "金城武",
          "headerUrl": "https://img3.doubanio.com/img/celebrity/small/6925.jpg",
          "mark":1,
          "wxid": "wxid_jincw"
        }, {
          "text": '摆渡人',
          "date": 1488117964495,
          "name": "金城武",
          "headerUrl": "https://img3.doubanio.com/img/celebrity/small/6925.jpg",
          "mark":1,
          "wxid": "wxid_jincw"
        }],
        "user": [user.getUserInfo('wxid_jincw')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
      }/*,
      { //普通消息列表
        "mid": 2, //消息的id 唯一标识，重要
        "type": "friend",
        "group_name": "",
        "group_qrCode": "",
        "read": true, //true；已读 false：未读
        "newMsgCount": 1,
        "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
        "msg": [{ //对话框的聊天记录 新消息 push 进
          "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }, {
          "text": '点击空白处，操作菜单消失',
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }, {
          "text": '来呀 快活啊',
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }],
        "user": [user.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
      },
      { //普通消息列表
        "mid": 3, //消息的id 唯一标识，重要
        "type": "friend",
        "group_name": "",
        "group_qrCode": "",
        "read": true, //true；已读 false：未读
        "newMsgCount": 1,
        "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
        "msg": [{ //对话框的聊天记录 新消息 push 进
          "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }, {
          "text": '点击空白处，操作菜单消失',
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }, {
          "text": '来呀 快活啊',
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }],
        "user": [user.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
      },
      { //普通消息列表
        "mid": 4, //消息的id 唯一标识，重要
        "type": "friend",
        "group_name": "",
        "group_qrCode": "",
        "read": true, //true；已读 false：未读
        "newMsgCount": 1,
        "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
        "msg": [{ //对话框的聊天记录 新消息 push 进
          "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }, {
          "text": '点击空白处，操作菜单消失',
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }, {
          "text": '来呀 快活啊',
          "date": 1488117964495,
          "name": "阿荡",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
        }],
        "user": [user.getUserInfo('wxid_zhaohd')] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
      }*/]
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
