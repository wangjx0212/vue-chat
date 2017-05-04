/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */
const users = [{ //昵称备注都有的朋友
    "wxid": "wxid_zhangyq",
    "initial": 'z',
    "headerUrl": "https://img3.doubanio.com/img/celebrity/medium/47020.jpg",
    "nickname": "张雨绮",
    "sex": 1,
    "remark": "张雨绮",
    "signature": "大美人",
    "telphone": 135123123123,
    "album": [{
        imgSrc: ""
    }],
    "area": ["中国", "北京", "海淀"],
    "from": "",
    "tag": "",
    "desc": {

    }
},
    { //昵称备注都有的朋友
        "wxid": "wxid_zhangy",
        "initial": 'z',
        "headerUrl": "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
        "nickname": "朱茵",
        "sex": 1,
        "remark": "朱茵",
        "signature": "女神",
        "telphone": 135123123123,
        "album": [{
            imgSrc: "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
            date:123132
        }, {
            imgSrc: "https://img1.doubanio.com/img/celebrity/small/5539.jpg",
            date:123132
        }],
        "area": ["中国", "香港", "中环"],
        "from": "",
        "tag": "",
        "desc": {

        }
    },
    { //昵称备注都有的朋友
        "wxid": "wxid_jincw",
        "initial": 'z',
        "headerUrl": "https://img3.doubanio.com/img/celebrity/small/6925.jpg",
        "nickname": "金城武",
        "sex": 1,
        "remark": "金城武",
        "signature": "男神",
        "telphone": 135123123123,
        "album": [{
            imgSrc: ""
        }],
        "area": ["中国", "香港", "铜锣湾"],
        "from": "",
        "tag": "",
        "desc": {

        }
    },
      { //昵称备注都有的朋友
        "wxid": "wxid_linzl",
        "initial": 'L',
        "headerUrl": "https://img3.doubanio.com/img/celebrity/small/400.jpg",
        "nickname": "林志玲",
        "sex": 1,
        "remark": "林志玲",
        "signature": "女神",
        "telphone": 135123123123,
        "album": [{
          imgSrc: ""
        }],
        "area": ["中国", "台湾", "台北"],
        "from": "",
        "tag": "",
        "desc": {

        }
  },
  { //昵称备注都有的朋友
    "wxid": "wxid_dengc",
    "initial": 'D',
    "headerUrl": "https://img3.doubanio.com/img/celebrity/small/805.jpg",
    "nickname": "邓超",
    "sex": 1,
    "remark": "邓超",
    "signature": "美人鱼邓超",
    "telphone": 135123123123,
    "album": [{
      imgSrc: ""
    }],
    "area": ["中国", "北京", "朝阳"],
    "from": "",
    "tag": "",
    "desc": {

    }
  },
  { //昵称备注都有的朋友
    "wxid": "wxid_tianfz",
    "initial": 'T',
    "headerUrl": "https://img5.doubanio.com/img/celebrity/small/23006.jpg",
    "nickname": "田馥甄",
    "sex": 1,
    "remark": "田馥甄",
    "signature": "小美女",
    "telphone": 135123123123,
    "album": [{
      imgSrc: ""
    }],
    "area": ["中国", "台湾", "台北"],
    "from": "",
    "tag": "",
    "desc": {

    }
  },
  { //昵称备注都有的朋友
    "wxid": "wxid_yuwl",
    "initial": 'Y',
    "headerUrl": "https://img3.doubanio.com/img/celebrity/small/802.jpg",
    "nickname": "余文乐",
    "sex": 1,
    "remark": "余文乐",
    "signature": "志明",
    "telphone": 135123123123,
    "album": [{
      imgSrc: ""
    }],
    "area": ["中国", "香港", "铜锣湾"],
    "from": "",
    "tag": "",
    "desc": {

    }
  },
  { //昵称备注都有的朋友
    "wxid": "wxid_chengx",
    "initial": 'C',
    "headerUrl": "https://img5.doubanio.com/img/celebrity/small/19136.jpg",
    "nickname": "陈冠希",
    "sex": 1,
    "remark": "陈冠希",
    "signature": "陈冠希哥哥",
    "telphone": 135123123123,
    "album": [{
      imgSrc: ""
    }],
    "area": ["中国", "香港", "铜锣湾"],
    "from": "",
    "tag": "",
    "desc": {

    }
  }
]
const user = {
    users
}
user.getUserInfo = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in users) {
            if (users[index].wxid === wxid) {
                return users[index]
            }
        }
    }
}

export default user
