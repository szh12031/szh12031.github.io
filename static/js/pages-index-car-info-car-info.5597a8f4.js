(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-car-info-car-info"],{"24dd":function(t,a,n){"use strict";(function(t){var e=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("7ae1")),o={components:{aParse:i.default},data:function(){return{test:!1,detailData:"<p></p>",loading:!1,title:"",background:{"background-image":"linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))"}}},onLoad:function(a){var n=this;t.$http.request({url:"/carousel/detail/"+a.id,method:"post",header:{contentType:"application/json",dataType:"json"},data:{}}).then((function(t){n.title=t.data.title,n.detailData=t.data.content})).catch((function(t){console.error("is catch",t),n.err=t}))},methods:{preview:function(t,a){},navigate:function(t,a){}}};a.default=o}).call(this,n("c8ba"))},"9b40":function(t,a,n){var e=n("c767");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("1825f718",e,!0,{sourceMap:!1,shadowMode:!1})},aa1f:function(t,a,n){"use strict";var e=n("9b40"),i=n.n(e);i.a},baa8:function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var e={uNavbar:n("1bf4").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("u-navbar",{attrs:{"back-text":"返回",title:t.title}}),n("v-uni-view",{staticClass:"content"},[n("a-parse",{attrs:{content:t.detailData,loading:t.loading},on:{preview:function(a){arguments[0]=a=t.$handleEvent(a),t.preview.apply(void 0,arguments)},navigate:function(a){arguments[0]=a=t.$handleEvent(a),t.navigate.apply(void 0,arguments)}}})],1)],1)},o=[]},c1cb:function(t,a,n){"use strict";n.r(a);var e=n("baa8"),i=n("d509");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("aa1f");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"7776ba6e",null,!1,e["a"],r);a["default"]=u.exports},c767:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".content[data-v-7776ba6e]{padding-left:1.5em;padding-right:1.5em;\n\t/* 在这里调整，整体字体大小 */font-size:%?35?%}",""]),t.exports=a},d509:function(t,a,n){"use strict";n.r(a);var e=n("24dd"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a}}]);