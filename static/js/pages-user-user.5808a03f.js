(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"5ab2":function(t,d,a){"use strict";(function(t,a){Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var e={data:function(){return{isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showTaskBar:!1,showHeader:!0,showTeam:!1,showToolsBar:!1,name:"",username:"",categoryName:"",levelName:"",alipay:"",avatar:"",showTequanBar:!1,myTaskBarList:[{id:1,url:"/pages/taskInfo/taskAdd",text:"发布任务",img:"/static/img/user/momey.png",icon:"plus",bgColor:"#50A8FF"},{id:2,url:"/pages/user/task_list/task_list",text:"我的发布",img:"/static/img/user/choujiang.png",icon:"file-text",bgColor:"#39d322"},{id:3,url:"/pages/taskInfo/receiveList",text:"接单列表",img:"/static/img/user/point.png",icon:"email-fill",bgColor:"#FFBE4B"}],myfinalList:[{id:1,url:"/pages/user/setting/alipay",text:"绑定支付宝",img:"/static/img/user/alipay.png",icon:"zhifubao",bgColor:"#50A8FF"},{id:2,url:"/pages/wallet/wallet",text:"我的账户",img:"/static/img/user/quan.png",icon:"account-fill",bgColor:"#5ECF9C"},{id:3,url:"/pages/income/income",text:"收益明细",img:"/static/img/user/mingxi.png",icon:"list-dot",bgColor:"#FFBE4B"},{id:4,url:"/pages/user/topUp/topUp",text:"充值",img:"/static/img/user/momey.png",icon:"rmb",bgColor:"#FD7F32"}],myteamList:[{id:1,url:"/pages/invite/invite",text:"邀请服务商",img:"/static/img/user/point.png",icon:"zhuanfa",bgColor:"#FFBE4B"},{id:2,url:"/pages/team/team",text:"我的团队",img:"/static/img/user/shangwu.png",icon:"man-add",bgColor:"#BE73FE"},{id:3,url:"/pages/team/staff",text:"我的员工",img:"/static/img/user/momey.png",icon:"chat",bgColor:"#FFBE4B"}],mytoolbarList:[]}},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3),this.User.syncUserInfo(),this.name=this.User.get("name"),this.username=this.User.get("username"),this.categoryName=this.User.get("categoryName"),this.levelName=this.User.get("levelName"),this.alipay=this.User.get("alipay"),this.avatar=this.User.get("avatar")},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.User.isLogin()?(this.user=this.User.getUserInfo(),this.showTeam=!1,this.showToolsBar=!1,this.User.isStaff()||(this.showTeam=!0,this.showToolsBar=!0,1==this.User.get("level")&&(this.showTequanBar=!0),this.showTaskBar=!0),this.name=this.User.get("name"),this.username=this.User.get("username"),this.categoryName=this.User.get("categoryName"),this.levelName=this.User.get("levelName"),this.alipay=this.User.get("alipay"),this.avatar=this.User.get("avatar"),this.getCarousel(),this.statusHeight=0):this.User.toLogin()},onReady:function(){},onShow:function(){},methods:{toSetting:function(){uni.navigateTo({url:"/pages/user/setting/setting"})},toMyQR:function(){uni.navigateTo({url:"/pages/user/myQR/myQR"})},toPage:function(t){t?uni.navigateTo({url:t}):uni.showToast({title:"页面异常",icon:"none"})},toToolsPage:function(t){uni.navigateTo({url:"/pages/article/article?id="+t})},getCarousel:function(){var d=this;t.$http.request({url:"/article/list",method:"post",header:{contentType:"application/json",dataType:"json"},data:{type:"tools"}}).then((function(t){if(a("log","is then",t," at pages/user/user.vue:358"),d.res=t,t.data&&t.data.length>0){d.showToolsBar=!0,d.mytoolbarList=t.data,a("log",d.mytoolbarList," at pages/user/user.vue:364");for(var e=0,i=d.mytoolbarList.length;e<i;e++)d.mytoolbarList[e].src="/pages/article/article?id="+d.mytoolbarList[e].id;a("log",d.mytoolbarList," at pages/user/user.vue:368")}})).catch((function(t){a("error","is catch",t," at pages/user/user.vue:371"),d.err=t}))},toYongjinSetting:function(){uni.navigateTo({url:"/pages/tequan/yongjinSetting"})},toHuiyuanList:function(){uni.navigateTo({url:"/pages/tequan/team"})}}};d.default=e}).call(this,a("c8ba"),a("0de9")["log"])},"62b2":function(t,d,a){var e=a("c461");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("2ba9857e",e,!0,{sourceMap:!1,shadowMode:!1})},a382:function(t,d,a){"use strict";a.d(d,"b",(function(){return i})),a.d(d,"c",(function(){return o})),a.d(d,"a",(function(){return e}));var e={uAvatar:a("8461").default,uIcon:a("6245").default},i=function(){var t=this,d=t.$createElement,a=t._self._c||d;return a("v-uni-view",[a("v-uni-view",{staticClass:"user flex flex-column"},[a("v-uni-view",{staticClass:"flex justify-end u-m-t-50 u-m-r-30"},[a("v-uni-image",{staticClass:"u-m-r-10",staticStyle:{width:"40rpx",height:"48rpx"},attrs:{src:"/static/img/level.png"}}),a("v-uni-view",{staticClass:"flex justify-end",staticStyle:{"font-size":"14px","font-weight":"400","line-height":"20px",color:"rgba(255,255,255,1)"}},[a("v-uni-text",{staticClass:"mr-1"},[t._v(t._s(t.categoryName))]),t._v("|"),t.User.isStaff()?t._e():a("v-uni-text",{staticClass:"ml-1"},[t._v(t._s(t.levelName))]),t.User.isStaff()?a("v-uni-text",{staticClass:"ml-1"},[t._v("所属服务商"+t._s(t.User.get("parentUser").name))]):t._e()],1)],1),a("v-uni-view",{staticClass:"u-flex u-flex-nowrap u-m-t-30 u-m-l-30 u-row-between",on:{click:function(d){arguments[0]=d=t.$handleEvent(d),t.toSetting.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-flex-1"},[a("u-avatar",{attrs:{src:t.avatar,size:"large"}})],1),a("v-uni-view",{staticClass:"right u-flex-3"},[a("v-uni-view",{staticClass:"username u-font-26 font-weight-bold"},[t._v(t._s(t.name))]),a("v-uni-view",{staticClass:"signature"},[t._v(t._s(t.username))]),t.User.isStaff()?a("v-uni-view",{staticClass:"signature"},[t._v(t._s(t.categoryName)+"  | 所属服务商 "+t._s(t.User.get("parentUser").name))]):t._e()],1),a("v-uni-view",{staticClass:"u-m-r-30"},[a("u-icon",{attrs:{name:"arrow-right",color:"#ffffff"}})],1)],1)],1),a("v-uni-view",{staticClass:"toolbar myfinal"},[a("v-uni-view",{staticClass:"title"},[t._v("我的财务")]),a("v-uni-view",{staticClass:"list"},[t._l(t.myfinalList,(function(d,e){return t.User.isStaff()?t._e():a("v-uni-view",{key:e,staticClass:"box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(d.url)}}},[a("v-uni-view",{staticClass:"img",style:{backgroundColor:d.bgColor}},[a("u-icon",{attrs:{name:d.icon,size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v(t._s(d.text))])],1)})),a("v-uni-view",{staticClass:"box",on:{click:function(d){arguments[0]=d=t.$handleEvent(d),t.toPage("/pages/order/order")}}},[a("v-uni-view",{staticClass:"img",staticStyle:{"background-color":"#ffaa7f"}},[a("u-icon",{attrs:{name:"order",size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v("订单列表")])],1)],2)],1),t.showTaskBar?a("v-uni-view",{staticClass:"toolbar"},[a("v-uni-view",{staticClass:"title"},[t._v("任务管理")]),a("v-uni-view",{staticClass:"list"},t._l(t.myTaskBarList,(function(d,e){return a("v-uni-view",{key:e,staticClass:"box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(d.url)}}},[a("v-uni-view",{staticClass:"img",style:{backgroundColor:d.bgColor}},[a("u-icon",{attrs:{name:d.icon,size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v(t._s(d.text))])],1)})),1)],1):t._e(),t.showTeam?a("v-uni-view",{staticClass:"toolbar"},[a("v-uni-view",{staticClass:"title"},[t._v("我的团队")]),a("v-uni-view",{staticClass:"list"},[t._l(t.myteamList,(function(d,e){return a("v-uni-view",{key:e,staticClass:"box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toPage(d.url)}}},[a("v-uni-view",{staticClass:"img",style:{backgroundColor:d.bgColor}},[a("u-icon",{attrs:{name:d.icon,size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v(t._s(d.text))])],1)})),a("v-uni-view",{staticClass:"box",on:{click:function(d){arguments[0]=d=t.$handleEvent(d),t.toMyQR.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"img",staticStyle:{"background-color":"#00BFFF"}},[a("u-icon",{attrs:{name:"plus-people-fill",size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v("邀请员工")])],1)],2)],1):t._e(),t.showTequanBar?a("v-uni-view",{staticClass:"toolbar"},[a("v-uni-view",{staticClass:"title"},[t._v("省级服务商特权")]),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"box",on:{click:function(d){arguments[0]=d=t.$handleEvent(d),t.toYongjinSetting()}}},[a("v-uni-view",{staticClass:"img",staticStyle:{"background-color":"#00BFFF"}},[a("u-icon",{attrs:{name:"setting",size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v("抽成设置")])],1),a("v-uni-view",{staticClass:"box",on:{click:function(d){arguments[0]=d=t.$handleEvent(d),t.toHuiyuanList()}}},[a("v-uni-view",{staticClass:"img",staticStyle:{"background-color":"#aa007f"}},[a("u-icon",{attrs:{name:"more-circle",size:"70"}})],1),a("v-uni-view",{staticClass:"text"},[t._v("我的会员")])],1)],1)],1):t._e(),t.showToolsBar?a("v-uni-view",{staticClass:"toolbar"},[a("v-uni-view",{staticClass:"title"},[t._v("我的工具")]),a("v-uni-view",{staticClass:"list"},t._l(t.mytoolbarList,(function(d,e){return a("v-uni-view",{key:e,staticClass:"box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toToolsPage(d.id)}}},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:d.icon}})],1),a("v-uni-view",{staticClass:"text"},[t._v(t._s(d.shortTitle))])],1)})),1)],1):t._e(),a("v-uni-view",{staticClass:"place-bottom"})],1)},o=[]},b91f:function(t,d,a){"use strict";a.r(d);var e=a("5ab2"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(d,t,(function(){return e[t]}))}(o);d["default"]=i.a},c461:function(t,d,a){var e=a("24fb");d=e(!1),d.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n/* scroll-view */.scroll-row[data-v-ddb63d68]{width:100%;white-space:nowrap}.scroll-row-item[data-v-ddb63d68]{display:inline-block!important}\r\n\r\n/* 图标 */.iconfont[data-v-ddb63d68]{font-family:iconfont}.view[data-v-ddb63d68],.text[data-v-ddb63d68]{font-size:%?28?%;line-height:1.8;color:#0e151d}\r\n/* 宽度 */\n.w-100[data-v-ddb63d68]{width:100%}\n.row[data-v-ddb63d68]{margin-right:%?-20?%;margin-left:%?-20?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.col-1[data-v-ddb63d68],\r\n.col-2[data-v-ddb63d68],\r\n.col-3[data-v-ddb63d68],\r\n.col-4[data-v-ddb63d68],\r\n.col-5[data-v-ddb63d68],\r\n.col-6[data-v-ddb63d68],\r\n.col-7[data-v-ddb63d68],\r\n.col-8[data-v-ddb63d68],\r\n.col-9[data-v-ddb63d68],\r\n.col-10[data-v-ddb63d68],\r\n.col-11[data-v-ddb63d68],\r\n.col-12[data-v-ddb63d68]{position:relative;padding-right:%?20?%;padding-left:%?20?%}.col-12[data-v-ddb63d68]{width:%?750?%}.col-11[data-v-ddb63d68]{width:%?687.5?%}.col-10[data-v-ddb63d68]{width:%?625?%}.col-9[data-v-ddb63d68]{width:%?562.5?%}.col-8[data-v-ddb63d68]{width:%?500?%}.col-7[data-v-ddb63d68]{width:%?437.5?%}.col-6[data-v-ddb63d68]{width:%?375?%}.col-5[data-v-ddb63d68]{width:%?312.5?%}.col-4[data-v-ddb63d68]{width:%?250?%}.col-3[data-v-ddb63d68]{width:%?187.5?%}.col-2[data-v-ddb63d68]{width:%?125?%}.col-1[data-v-ddb63d68]{width:%?62.5?%}.col-offset-12[data-v-ddb63d68]{margin-left:%?750?%}.col-offset-11[data-v-ddb63d68]{margin-left:%?687.5?%}.col-offset-10[data-v-ddb63d68]{margin-left:%?625?%}.col-offset-9[data-v-ddb63d68]{margin-left:%?562.5?%}.col-offset-8[data-v-ddb63d68]{margin-left:%?500?%}.col-offset-7[data-v-ddb63d68]{margin-left:%?437.5?%}.col-offset-6[data-v-ddb63d68]{margin-left:%?375?%}.col-offset-5[data-v-ddb63d68]{margin-left:%?312.5?%}.col-offset-4[data-v-ddb63d68]{margin-left:%?250?%}.col-offset-3[data-v-ddb63d68]{margin-left:%?187.5?%}.col-offset-2[data-v-ddb63d68]{margin-left:%?125?%}.col-offset-1[data-v-ddb63d68]{margin-left:%?62.5?%}.col-offset-0[data-v-ddb63d68]{margin-left:0}\r\n/* flex 布局 */.flex[data-v-ddb63d68]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-row[data-v-ddb63d68]{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;flex-direction:row!important}.flex-column[data-v-ddb63d68]{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse[data-v-ddb63d68]{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse[data-v-ddb63d68]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap[data-v-ddb63d68]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-nowrap[data-v-ddb63d68]{-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.justify-start[data-v-ddb63d68]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.justify-end[data-v-ddb63d68]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.justify-between[data-v-ddb63d68]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.justify-center[data-v-ddb63d68]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.align-center[data-v-ddb63d68]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.align-stretch[data-v-ddb63d68]{-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.align-start[data-v-ddb63d68]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.align-end[data-v-ddb63d68]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n.content-start[data-v-ddb63d68]{-webkit-align-content:flex-start;align-content:flex-start}.content-end[data-v-ddb63d68]{-webkit-align-content:flex-end;align-content:flex-end}.content-center[data-v-ddb63d68]{-webkit-align-content:center;align-content:center}.content-between[data-v-ddb63d68]{-webkit-align-content:space-between;align-content:space-between}.content-around[data-v-ddb63d68]{-webkit-align-content:space-around;align-content:space-around}.content-stretch[data-v-ddb63d68]{-webkit-align-content:stretch;align-content:stretch}\n.flex-1[data-v-ddb63d68]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.flex-2[data-v-ddb63d68]{-webkit-box-flex:2;-webkit-flex:2;flex:2}.flex-3[data-v-ddb63d68]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.flex-4[data-v-ddb63d68]{-webkit-box-flex:4;-webkit-flex:4;flex:4}.flex-5[data-v-ddb63d68]{-webkit-box-flex:5;-webkit-flex:5;flex:5}\n.flex-shrink[data-v-ddb63d68]{-webkit-flex-shrink:0;flex-shrink:0}\n.container[data-v-ddb63d68]{padding-right:%?20?%;padding-left:%?20?%}\r\n/*  -- 内外边距 -- */.m-0[data-v-ddb63d68]{margin:0}\n.m-auto[data-v-ddb63d68]{margin:auto}\n.m-1[data-v-ddb63d68]{margin:%?10?%}.m-2[data-v-ddb63d68]{margin:%?20?%}.m-3[data-v-ddb63d68]{margin:%?30?%}.m-4[data-v-ddb63d68]{margin:%?40?%}.m-5[data-v-ddb63d68]{margin:%?50?%}.mt-0[data-v-ddb63d68]{margin-top:0}\n.mt-auto[data-v-ddb63d68]{margin-top:auto}\n.mt-1[data-v-ddb63d68]{margin-top:%?10?%}.mt-2[data-v-ddb63d68]{margin-top:%?20?%}.mt-3[data-v-ddb63d68]{margin-top:%?30?%}.mt-4[data-v-ddb63d68]{margin-top:%?40?%}.mt-5[data-v-ddb63d68]{margin-top:%?50?%}.mb-0[data-v-ddb63d68]{margin-bottom:0}\n.mb-auto[data-v-ddb63d68]{margin-bottom:auto}\n.mb-1[data-v-ddb63d68]{margin-bottom:%?10?%}.mb-2[data-v-ddb63d68]{margin-bottom:%?20?%}.mb-3[data-v-ddb63d68]{margin-bottom:%?30?%}.mb-4[data-v-ddb63d68]{margin-bottom:%?40?%}.mb-5[data-v-ddb63d68]{margin-bottom:%?50?%}.ml-0[data-v-ddb63d68]{margin-left:0}\n.ml-auto[data-v-ddb63d68]{margin-left:auto}\n.ml-1[data-v-ddb63d68]{margin-left:%?10?%}.ml-2[data-v-ddb63d68]{margin-left:%?20?%}.ml-3[data-v-ddb63d68]{margin-left:%?30?%}.ml-4[data-v-ddb63d68]{margin-left:%?40?%}.ml-5[data-v-ddb63d68]{margin-left:%?50?%}.mr-0[data-v-ddb63d68]{margin-right:0}\n.mr-auto[data-v-ddb63d68]{margin-right:auto}\n.mr-1[data-v-ddb63d68]{margin-right:%?10?%}.mr-2[data-v-ddb63d68]{margin-right:%?20?%}.mr-3[data-v-ddb63d68]{margin-right:%?30?%}.mr-4[data-v-ddb63d68]{margin-right:%?40?%}.mr-5[data-v-ddb63d68]{margin-right:%?50?%}.my-0[data-v-ddb63d68]{margin-top:0;margin-bottom:0}\n.my-auto[data-v-ddb63d68]{margin-top:auto;margin-bottom:auto}\n.my-1[data-v-ddb63d68]{margin-top:%?10?%;margin-bottom:%?10?%}.my-2[data-v-ddb63d68]{margin-top:%?20?%;margin-bottom:%?20?%}.my-3[data-v-ddb63d68]{margin-top:%?30?%;margin-bottom:%?30?%}.my-4[data-v-ddb63d68]{margin-top:%?40?%;margin-bottom:%?40?%}.my-5[data-v-ddb63d68]{margin-top:%?50?%;margin-bottom:%?50?%}.mx-0[data-v-ddb63d68]{margin-left:0;margin-right:0}\n.mx-auto[data-v-ddb63d68]{margin-left:auto;margin-right:auto}\n.mx-1[data-v-ddb63d68]{margin-left:%?10?%;margin-right:%?10?%}.mx-2[data-v-ddb63d68]{margin-left:%?20?%;margin-right:%?20?%}.mx-3[data-v-ddb63d68]{margin-left:%?30?%;margin-right:%?30?%}.mx-4[data-v-ddb63d68]{margin-left:%?40?%;margin-right:%?40?%}.mx-5[data-v-ddb63d68]{margin-left:%?50?%;margin-right:%?50?%}.p-0[data-v-ddb63d68]{padding:0}.p[data-v-ddb63d68]{padding:%?5?%}.p-1[data-v-ddb63d68]{padding:%?10?%}.p-2[data-v-ddb63d68]{padding:%?20?%}.p-3[data-v-ddb63d68]{padding:%?30?%}.p-4[data-v-ddb63d68]{padding:%?40?%}.p-5[data-v-ddb63d68]{padding:%?50?%}.pt-0[data-v-ddb63d68]{padding-top:0}.pt[data-v-ddb63d68]{padding-top:%?5?%}.pt-1[data-v-ddb63d68]{padding-top:%?10?%}.pt-2[data-v-ddb63d68]{padding-top:%?20?%}.pt-3[data-v-ddb63d68]{padding-top:%?30?%}.pt-4[data-v-ddb63d68]{padding-top:%?40?%}.pt-5[data-v-ddb63d68]{padding-top:%?50?%}.pb-0[data-v-ddb63d68]{padding-bottom:0}.pb-1[data-v-ddb63d68]{padding-bottom:%?10?%}.pb[data-v-ddb63d68]{padding-bottom:%?5?%}.pb-2[data-v-ddb63d68]{padding-bottom:%?20?%}.pb-3[data-v-ddb63d68]{padding-bottom:%?30?%}.pb-4[data-v-ddb63d68]{padding-bottom:%?40?%}.pb-5[data-v-ddb63d68]{padding-bottom:%?50?%}.pl-0[data-v-ddb63d68]{padding-left:0}.pl[data-v-ddb63d68]{padding-left:%?5?%}.pl-1[data-v-ddb63d68]{padding-left:%?10?%}.pl-2[data-v-ddb63d68]{padding-left:%?20?%}.pl-3[data-v-ddb63d68]{padding-left:%?30?%}.pl-4[data-v-ddb63d68]{padding-left:%?40?%}.pl-5[data-v-ddb63d68]{padding-left:%?50?%}.pr-0[data-v-ddb63d68]{padding-right:0}.pr[data-v-ddb63d68]{padding-right:%?5?%}.pr-1[data-v-ddb63d68]{padding-right:%?10?%}.pr-2[data-v-ddb63d68]{padding-right:%?20?%}.pr-3[data-v-ddb63d68]{padding-right:%?30?%}.pr-4[data-v-ddb63d68]{padding-right:%?40?%}.pr-5[data-v-ddb63d68]{padding-right:%?50?%}.py-0[data-v-ddb63d68]{padding-top:0;padding-bottom:0}.py[data-v-ddb63d68]{padding-top:%?5?%;padding-bottom:%?5?%}.py-1[data-v-ddb63d68]{padding-top:%?10?%;padding-bottom:%?10?%}.py-2[data-v-ddb63d68]{padding-top:%?20?%;padding-bottom:%?20?%}.py-3[data-v-ddb63d68]{padding-top:%?30?%;padding-bottom:%?30?%}.py-4[data-v-ddb63d68]{padding-top:%?40?%;padding-bottom:%?40?%}.py-5[data-v-ddb63d68]{padding-top:%?50?%;padding-bottom:%?50?%}.px-0[data-v-ddb63d68]{padding-left:0;padding-right:0}.px-1[data-v-ddb63d68]{padding-left:%?10?%;padding-right:%?10?%}.px[data-v-ddb63d68]{padding-left:%?5?%;padding-right:%?5?%}.px-2[data-v-ddb63d68]{padding-left:%?20?%;padding-right:%?20?%}.px-3[data-v-ddb63d68]{padding-left:%?30?%;padding-right:%?30?%}.px-4[data-v-ddb63d68]{padding-left:%?40?%;padding-right:%?40?%}.px-5[data-v-ddb63d68]{padding-left:%?50?%;padding-right:%?50?%}\r\n/* 文字大小 */.font-smaller[data-v-ddb63d68]{font-size:%?15?%}.font-small[data-v-ddb63d68]{font-size:%?20?%}.font-sm[data-v-ddb63d68]{font-size:%?25?%}.font[data-v-ddb63d68]{font-size:%?30?%}.font-md[data-v-ddb63d68]{font-size:%?35?%}.font-lg[data-v-ddb63d68]{font-size:%?40?%}.h1[data-v-ddb63d68]{font-size:%?80?%;line-height:1.8}.h2[data-v-ddb63d68]{font-size:%?60?%;line-height:1.8}.h3[data-v-ddb63d68]{font-size:%?45?%;line-height:1.8}.h4[data-v-ddb63d68]{font-size:%?32?%;line-height:1.8}.h5[data-v-ddb63d68]{font-size:%?30?%;line-height:1.8}.h6[data-v-ddb63d68]{font-size:%?28?%;line-height:1.8}\r\n/* 文字缩进 */\n.text-indent[data-v-ddb63d68]{text-indent:2}\r\n\r\n/* 文字划线 */.text-through[data-v-ddb63d68]{text-decoration:line-through}\r\n/* 文字对齐 */.text-left[data-v-ddb63d68]{text-align:left}.text-right[data-v-ddb63d68]{text-align:right}.text-center[data-v-ddb63d68]{text-align:center}\r\n/* 文字换行溢出处理 */.text-ellipsis[data-v-ddb63d68]{\r\noverflow:hidden;text-overflow:ellipsis;white-space:nowrap;\n}\r\n/* 文字粗细和斜体 */.font-weight-light[data-v-ddb63d68]{font-weight:300}\r\n/*细*/.font-weight-lighter[data-v-ddb63d68]{font-weight:100}\r\n/*更细*/.font-weight-normal[data-v-ddb63d68]{font-weight:400}\r\n/*正常*/.font-weight-bold[data-v-ddb63d68]{font-weight:700}\r\n/*粗*/.font-weight-bolder[data-v-ddb63d68]{font-weight:700}\r\n/*更粗*/.font-italic[data-v-ddb63d68]{font-style:italic}\r\n/*斜体*/\r\n/* 文字颜色 */.text-white[data-v-ddb63d68]{color:#fff}.text-primary[data-v-ddb63d68]{color:#007bff}.text-hover-primary[data-v-ddb63d68]{color:#0056b3}.text-secondary[data-v-ddb63d68]{color:#6c757d}.text-hover-secondary[data-v-ddb63d68]{color:#494f54}.text-success[data-v-ddb63d68]{color:#28a745}.text-hover-success[data-v-ddb63d68]{color:#19692c}.text-info[data-v-ddb63d68]{color:#17a2b8}.text-hover-info[data-v-ddb63d68]{color:#0f6674}.text-warning[data-v-ddb63d68]{color:#ffc107}.text-hover-warning[data-v-ddb63d68]{color:#ba8b00}.text-danger[data-v-ddb63d68]{color:#dc3545}.text-hover-danger[data-v-ddb63d68]{color:#a71d2a}.text-light[data-v-ddb63d68]{color:#f8f9fa}.text-hover-light[data-v-ddb63d68]{color:#cbd3da}.text-dark[data-v-ddb63d68]{color:#343a40}.text-hover-dark[data-v-ddb63d68]{color:#121416}.text-body[data-v-ddb63d68]{color:#212529}.text-muted[data-v-ddb63d68]{color:#6c757d}\r\n/* 浅灰色 */.text-light-muted[data-v-ddb63d68]{color:#a9a5a0}.text-light-black[data-v-ddb63d68]{color:rgba(0,0,0,.5)}.text-light-white[data-v-ddb63d68]{color:hsla(0,0%,100%,.5)}\r\n/* 背景颜色 */.bg-primary[data-v-ddb63d68]{background-color:#007bff}.bg-hover-primary[data-v-ddb63d68]:hover{background-color:#0062cc}.bg-secondary[data-v-ddb63d68]{background-color:#6c757d}.bg-hover-secondary[data-v-ddb63d68]:hover{background-color:#545b62}.bg-success[data-v-ddb63d68]{background-color:#28a745}.bg-hover-success[data-v-ddb63d68]{background-color:#1e7e34}.bg-info[data-v-ddb63d68]{background-color:#17a2b8}.bg-hover-info[data-v-ddb63d68]{background-color:#117a8b}.bg-warning[data-v-ddb63d68]{background-color:#ffc107}.bg-hover-warning[data-v-ddb63d68]{background-color:#d39e00}.bg-danger[data-v-ddb63d68]{background-color:#dc3545}.bg-hover-danger[data-v-ddb63d68]{background-color:#bd2130}.bg-light[data-v-ddb63d68]{background-color:#f8f9fa}.bg-hover-light[data-v-ddb63d68]{background-color:#dae0e5}.bg-dark[data-v-ddb63d68]{background-color:#343a40}.bg-hover-dark[data-v-ddb63d68]{background-color:#1d2124}.bg-white[data-v-ddb63d68]{background-color:#fff}.bg-transparent[data-v-ddb63d68]{background-color:initial}\r\n/* 边框 */.border[data-v-ddb63d68]{border-width:%?1?%;border-style:solid;border-color:#dee2e6}.border-top[data-v-ddb63d68]{border-top-width:%?1?%;border-top-style:solid;border-top-color:#dee2e6}.border-right[data-v-ddb63d68]{border-right-width:%?1?%;border-right-style:solid;border-right-color:#dee2e6}.border-bottom[data-v-ddb63d68]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#dee2e6}.border-left[data-v-ddb63d68]{border-left-width:%?1?%;border-left-style:solid;border-left-color:#dee2e6}.border-0[data-v-ddb63d68]{border-width:0!important}.border-top-0[data-v-ddb63d68]{border-top-width:0!important}.border-right-0[data-v-ddb63d68]{border-right-width:0!important}.border-bottom-0[data-v-ddb63d68]{border-bottom-width:0!important}.border-left-0[data-v-ddb63d68]{border-left-width:0!important}.border-primary[data-v-ddb63d68]{border-color:#007bff}.border-secondary[data-v-ddb63d68]{border-color:#6c757d}.border-light-secondary[data-v-ddb63d68]{border-color:#e9e8e5}.border-success[data-v-ddb63d68]{border-color:#28a745}.border-info[data-v-ddb63d68]{border-color:#17a2b8}.border-warning[data-v-ddb63d68]{border-color:#ffc107}.border-danger[data-v-ddb63d68]{border-color:#dc3545}.border-light[data-v-ddb63d68]{border-color:#f8f9fa}.border-dark[data-v-ddb63d68]{border-color:#343a40}.border-white[data-v-ddb63d68]{border-color:#fff}\r\n/* 圆角 */.rounded[data-v-ddb63d68]{border-radius:%?8?%}.rounded-top[data-v-ddb63d68]{border-top-left-radius:%?8?%;border-top-right-radius:%?8?%}.rounded-right[data-v-ddb63d68]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.rounded-bottom[data-v-ddb63d68]{border-bottom-right-radius:%?8?%;border-bottom-left-radius:%?8?%}.rounded-left[data-v-ddb63d68]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.rounded-circle[data-v-ddb63d68]{border-radius:%?100?%}.rounded-0[data-v-ddb63d68]{border-radius:0}\r\n/* 显示 */\n.d-none[data-v-ddb63d68]{display:none}.d-inline-block[data-v-ddb63d68]{display:inline-block}.d-block[data-v-ddb63d68]{display:block}\r\n\r\n/* 内容溢出 */.overflow-hidden[data-v-ddb63d68]{overflow:hidden}\r\n/* 定位 */.position-relative[data-v-ddb63d68]{position:relative}.position-absolute[data-v-ddb63d68]{position:absolute}.position-fixed[data-v-ddb63d68]{position:fixed}\r\n/* 定位 - 固定顶部 */.fixed-top[data-v-ddb63d68]{position:fixed;top:0;right:0;left:0;z-index:1030}\r\n/* 定位 - 固定底部 */.fixed-bottom[data-v-ddb63d68]{position:fixed;right:0;bottom:0;left:0;z-index:1030}.top-0[data-v-ddb63d68]{top:0}.left-0[data-v-ddb63d68]{left:0}.right-0[data-v-ddb63d68]{right:0}.bottom-0[data-v-ddb63d68]{bottom:0}\r\n/* 阴影 */\n.shadow[data-v-ddb63d68]{box-shadow:0 %?2?% %?12?% rgba(0,0,0,.15)}.shadow-lg[data-v-ddb63d68]{box-shadow:%?0?% %?40?% %?100?% %?0?% rgba(0,0,0,.175)}.shadow-none[data-v-ddb63d68]{box-shadow:none!important}\n.data-list[data-v-ddb63d68]{width:100%}.data-row[data-v-ddb63d68]{box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);background-color:#fff;padding:%?10?% 3%;margin:%?20?%}.d-r-title[data-v-ddb63d68]{\r\n\t/* font-weight: 400; */}.d-r-money[data-v-ddb63d68]{color:#ec652f;font-weight:600}.loading-text[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-ddb63d68]{position:relative;background-color:#fff}.status[data-v-ddb63d68]{width:100%;height:0;position:fixed;z-index:10;background-color:#f06c7a;top:0}.header[data-v-ddb63d68]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10;background-color:#f06c7a}.header .icon-btn[data-v-ddb63d68]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-ddb63d68]{color:#fff;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.place[data-v-ddb63d68]{background-color:#f06c7a;height:%?100?%}.place-bottom[data-v-ddb63d68]{height:%?300?%}.myfinal[data-v-ddb63d68]{margin-top:%?-30?%}.user[data-v-ddb63d68]{width:100%;height:%?458?%;background:-webkit-linear-gradient(43deg,#ffc642,#fd7c31);background:linear-gradient(47deg,#ffc642,#fd7c31);opacity:1}.user .left[data-v-ddb63d68]{width:20vw;height:20vw;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?20?%;border:solid %?1?% #fff;border-radius:100%}.user .left uni-image[data-v-ddb63d68]{width:20vw;height:20vw;border-radius:100%}.user .right[data-v-ddb63d68]{width:100%}.user .right .username[data-v-ddb63d68]{font-size:%?36?%;color:#fff}.user .right .signature[data-v-ddb63d68]{color:#eee;font-size:%?28?%}.user .erweima[data-v-ddb63d68]{-webkit-flex-shrink:0;flex-shrink:0;width:10vw;height:10vw;margin-left:5vw;border-radius:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(right,#fbbb37,#fcf0d0 105%);background:linear-gradient(270deg,#fbbb37 0,#fcf0d0 105%)}.user .erweima .icon[data-v-ddb63d68]{color:#7b6335;font-size:%?42?%}.order[data-v-ddb63d68]{width:84%;margin:%?30?% 4% %?30?% 4%;padding:%?30?% 4% %?20?% 4%;background-color:#fff;box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);border-radius:%?15?%}.order .list[data-v-ddb63d68]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:solid %?1?% #17e6a1;padding-bottom:%?10?%}.order .list .box[data-v-ddb63d68]{width:20%}.order .list .box .img[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.order .list .box .img .icon[data-v-ddb63d68]{font-size:%?50?%;color:#464646}.order .list .box .text[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#3d3d3d}.order .balance-info[data-v-ddb63d68]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% 0}.order .balance-info .left[data-v-ddb63d68]{width:75%;display:-webkit-box;display:-webkit-flex;display:flex}.order .balance-info .left .box[data-v-ddb63d68]{width:50%;font-size:%?28?%}.order .balance-info .left .box .num[data-v-ddb63d68]{width:100%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:#f9a453}.order .balance-info .left .box .text[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3d3d3d;font-size:%?28?%}.order .balance-info .right[data-v-ddb63d68]{border-left:solid %?1?% #17e6a1;width:25%}.order .balance-info .right .box .img[data-v-ddb63d68]{width:100%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.order .balance-info .right .box .img .icon[data-v-ddb63d68]{font-size:%?45?%;color:#e78901}.order .balance-info .right .box .text[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#3d3d3d}.VIP[data-v-ddb63d68]{width:84%;margin:%?-65?% auto %?20?% auto;padding:%?30?% 4%;background:-webkit-linear-gradient(right,#dea96d,#f6d59b);background:linear-gradient(270deg,#dea96d 0,#f6d59b);box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.2);border-radius:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.VIP .img[data-v-ddb63d68]{-webkit-flex-shrink:0;flex-shrink:0;width:%?60?%;height:%?60?%}.VIP .img uni-image[data-v-ddb63d68]{width:%?60?%;height:%?60?%}.VIP .title[data-v-ddb63d68]{width:100%;color:#796335;font-size:%?30?%}.VIP .tis[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;color:#fcf0d0;font-size:%?26?%}.toolbar[data-v-ddb63d68]{width:92%;margin:%?20?% 4% 0 4%;padding:0 0 %?20?% 0;background-color:#fff;box-shadow:%?0?% %?0?% %?25?% rgba(0,0,0,.1);border-radius:%?15?%}.toolbar .title[data-v-ddb63d68]{padding-top:%?10?%;margin:0 0 %?10?% 3%;font-size:%?30?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.toolbar .list[data-v-ddb63d68]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.toolbar .list .box[data-v-ddb63d68]{width:25%;margin-bottom:%?30?%}.toolbar .list .box .img[data-v-ddb63d68]{width:%?93?%;height:%?93?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:100%;margin-left:%?40?%;color:#fff}.toolbar .list .box .img uni-image[data-v-ddb63d68]{width:9vw;height:9vw}.toolbar .list .box .text[data-v-ddb63d68]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%;color:#3d3d3d}.myfinal[data-v-ddb63d68]{margin-top:%?-150?%}body.?%PAGE?%[data-v-ddb63d68]{background-color:#fff}',""]),t.exports=d},db4c:function(t,d,a){"use strict";a.r(d);var e=a("a382"),i=a("b91f");for(var o in i)"default"!==o&&function(t){a.d(d,t,(function(){return i[t]}))}(o);a("f8a6");var n,r=a("f0c5"),b=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"ddb63d68",null,!1,e["a"],n);d["default"]=b.exports},f8a6:function(t,d,a){"use strict";var e=a("62b2"),i=a.n(e);i.a}}]);