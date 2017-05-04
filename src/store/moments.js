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
const moments = [{
  "headerUrl": "./static/lufei.jpg",
  "nickname": "路飞",
  "remark": "路飞",
  "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
  "timestamp":'15小时前',
  "thumbnails": [{
    imgSrc: "./static/lufei.jpg"
    },{
    imgSrc: "./static/wsp.jpg"
  }],
  "liketext": ["山丘", "鸣人", "小樱"],
  "likeWxId": [],
   "offlike": false,
  "from": "",
  "tag": "",
  "desc": {
  }
},
  {
    "headerUrl": "./static/shanzhi.jpg",
    "nickname": "山治",
    "remark": "山治",
    "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
    "timestamp":'8小时前',
    "thumbnails": [{
      imgSrc: "./static/qb.jpg"
    },{
      imgSrc: "./static/shanzhi.jpg"
    }],
    "liketext": ["蛤蟆仙人", "佐助", "大蛇丸"],
    "likeWxId" : [],
    "offlike": false,
    "from": "",
    "tag": "",
    "desc": {
    }
  },
  {
    "headerUrl": "./static/zl.jpg",
    "nickname": "罗洛亚‧卓洛",
    "remark": "罗洛亚‧卓洛",
    "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
    "timestamp":'10小时前',
    "thumbnails": [{
      imgSrc: "./static/shanzhi.jpg"
    },{
      imgSrc: "./static/lufei.jpg"
    }],
    "liketext": ["山丘", "鸣人", "小樱"],
    "likeWxId" : [],
    "offlike": false,
    "from": "",
    "tag": "",
    "desc": {
    }
  },
  {
    "headerUrl": "./static/lufei.jpg",
    "nickname": "路飞",
    "remark": "路飞",
    "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
    "timestamp":'6小时前',
    "thumbnails": [{
      imgSrc: "./static/qb.jpg"
    },{
      imgSrc: "./static/wsp.jpg"
    }],
    "liketext": ["蛤蟆仙人", "佐助", "大蛇丸"],
    "likeWxId" : [],
    "offlike": false,   
    "from": "",
    "tag": "",
    "desc": {
    }
  },
  {
    "headerUrl": "./static/lufei.jpg",
    "nickname": "路飞",
    "remark": "路飞",
    "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
    "timestamp":'19小时前',
    "thumbnails": [{
      imgSrc: "./static/lufei.jpg"
    },{
      imgSrc: "./static/wsp.jpg"
    }],
    "liketext": ["卡卡西", "小李", "疾风"],
    "likeWxId" : [],
    "offlike": false,   
    "from": "",
    "tag": "",
    "desc": {
    }
  },
  {
    "headerUrl": "./static/lufei.jpg",
    "nickname": "路飞",
    "remark": "路飞",
    "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
    "timestamp":'15小时前',
    "thumbnails": [{
      imgSrc: "./static/lufei.jpg"
    },{
      imgSrc: "./static/wsp.jpg"
    }],
    "liketext": ["卡卡西", "小李", "疾风"],
    "likeWxId" : [],
    "offlike": false,   
    "from": "",
    "tag": "",
    "desc": {
    }
  },
  {
    "headerUrl": "./static/lufei.jpg",
    "nickname": "路飞",
    "remark": "路飞",
    "paragraph": 'weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好',
    "timestamp":'17小时前',
    "thumbnails": [{
      imgSrc: "./static/lufei.jpg"
    },{
      imgSrc: "./static/wsp.jpg"
    }],
    "liketext": ["卡卡西", "小李", "疾风"],
    "likeWxId" : [],
    "offlike": false,   
    "from": "",
    "tag": "",
    "desc": {
    }
  }
]
const moment = {
  moments
};
moment.getUserInfo = function() {

/*    for (var index in users) {
      if (users[index].wxid === wxid) {
        return users[index]
      }
    }*/

}

export default moment
