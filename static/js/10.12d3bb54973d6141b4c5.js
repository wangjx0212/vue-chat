webpackJsonp([10,13],{102:function(t,e,s){e=t.exports=s(77)(),e.push([t.i,".contacts-details-header{position:fixed;top:0;width:100%;height:46px;background-color:#303036;color:#fff}.contacts-details_head{height:46px;line-height:46px;font-size:16px}.contacts-details_head i{margin-left:10px;margin-right:14px}.contacts-details_section{margin-top:66px}.wechat-msgsnd{margin-top:20px;padding:0 20px}.area{margin-right:10px}.detailsPic img{float:left;display:inline-block;width:50px!important;height:50px!important}.width60px{width:60px}.telphone{color:#498cdb}","",{version:3,sources:["E:/vue_text/vue-wechar-demo/src/components/Contacts/details.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,MAAO,AACP,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,UAAe,CAChB,AACD,uBACE,YAAa,AACb,iBAAkB,AAClB,cAAgB,CACjB,AACD,yBACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,0BACE,eAAiB,CAClB,AACD,eACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,MACE,iBAAmB,CACpB,AACD,gBACE,WAAY,AACZ,qBAAsB,AACtB,qBAAuB,AACvB,qBAAwB,CACzB,AACD,WACE,UAAY,CACb,AACD,UACE,aAAc,CACf",file:"details.vue",sourcesContent:["\n.contacts-details-header{\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 46px;\n  background-color: #303036;\n  color: #ffffff;\n}\n.contacts-details_head{\n  height: 46px;\n  line-height: 46px;\n  font-size: 16px;\n}\n.contacts-details_head i{\n  margin-left: 10px;\n  margin-right: 14px;\n}\n.contacts-details_section{\n  margin-top: 66px;\n}\n.wechat-msgsnd{\n  margin-top: 20px;\n  padding: 0 20px;\n}\n.area{\n  margin-right: 10px;\n}\n.detailsPic img{\n  float: left;\n  display: inline-block;\n  width: 50px !important;\n  height: 50px !important;\n}\n.width60px{\n  width: 60px;\n}\n.telphone{\n  color:#498cdb;\n}\n"],sourceRoot:""}])},113:function(t,e,s){var i=s(102);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(78)("f0b4b8f0",i,!0)},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-contacts_details"},[s("div",{staticClass:"contacts-details_main"},[s("header",{staticClass:"contacts-details-header"},[s("div",{staticClass:"contacts-details_head"},[s("router-link",{staticClass:"iconfont goBack",attrs:{tag:"i",to:"/Contacts"}},[t._v("")]),s("span",[t._v("详细资料")])],1)]),t._v(" "),s("section",{staticClass:"contacts-details_section"},[s("div",{staticClass:"weui-cells"},[s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[s("div",{staticClass:"weui-cell__hd self-img"},[s("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:t.getDetails[0].headerUrl,alt:""}})]),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("h4",{staticClass:"self-nickname"},[t._v(t._s(t.getDetails[0].remark))]),t._v(" "),s("p",{staticClass:"self-wxid"},[t._v("微信号: "+t._s(t.getDetails[0].wxid))])])])]),t._v(" "),s("div",{staticClass:"weui-cells"},[t._m(0),t._v(" "),s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[t._m(1),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("p",{staticClass:"telphone"},[t._v(t._s(t.getDetails[0].telphone))])])])]),t._v(" "),s("div",{staticClass:"weui-cells"},[s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[t._m(2),t._v(" "),s("div",{staticClass:"weui-cell__bd"},[s("p",t._l(t.getDetails[0].area,function(e,i){return s("span",{staticClass:"area"},[t._v(t._s(e))])}))])]),t._v(" "),s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[t._m(3),t._v(" "),s("div",{staticClass:"weui-cell__bd detailsPic"},t._l(t.getDetails[0].album,function(e,i){return e.imgSrc?s("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:e.imgSrc,alt:""}}):t._e()}))]),t._v(" "),t._m(4)]),t._v(" "),t._m(5)])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[s("div",{staticClass:"weui-cell__hd"},[s("p",[t._v("设置备注和标签")])]),t._v(" "),s("div",{staticClass:"weui-cell__bd"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cell__hd width60px"},[s("p",[t._v("电话号码")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cell__hd width60px"},[s("p",[t._v("地区")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-cell__hd width60px"},[s("p",[t._v("个人相册")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:"javascript:;"}},[s("div",{staticClass:"weui-cell__hd"},[s("p",[t._v("更多")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wechat-msgsnd"},[s("a",{staticClass:"weui-btn weui-btn_primary btn-text",attrs:{href:"javascript:;"}},[t._v("发消息")]),t._v(" "),s("a",{staticClass:"weui-btn weui-btn_default btn-voice",attrs:{href:"javascript:;"}},[t._v("视频聊天")])])}]}},52:function(t,e,s){s(113);var i=s(0)(s(83),s(131),null,null);t.exports=i.exports},83:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}},components:{},computed:{getDetails:function(){var t=this.$route.query.wxid,e=[];return this.$store.state.allContacts.map(function(s,i,a){t===s.wxid&&e.push(s)}),e}}}}});
//# sourceMappingURL=10.12d3bb54973d6141b4c5.js.map