(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tequan-yongjinSetting"],{"40fe":function(a,t,e){"use strict";(function(a,i){e("4d63"),e("ac1f"),e("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{percentPlaceholder:"请输入0-5之间的整数",inputPercent:0,min:0,max:5,currPercent:0}},onLoad:function(){this.User.isLogin()?this.getPercent():this.User.toLogin()},methods:{save:function(){var t=this,e="^["+this.min+"-"+this.max+"]$";if(!new RegExp(e).test(this.inputPercent))return uni.showToast({title:this.percentPlaceholder,icon:"none"}),!1;a.$http.request({url:"/my/brokerage/update",method:"post",header:{contentType:"application/json",dataType:"json"},data:{brokeragePercent:this.inputPercent}}).then((function(a){i("log","is then",a," at pages/tequan/yongjinSetting.vue:88"),t.res=a,t.currPercent=a.data.brokeragePercent,uni.hideLoading(),uni.showToast({title:"操作成功"})})).catch((function(a){i("error","is catch",a," at pages/tequan/yongjinSetting.vue:98"),t.err=a}))},getPercent:function(){var t=this;a.$http.request({url:"/my/brokerage/get",method:"post",header:{contentType:"application/json",dataType:"json"},data:{}}).then((function(a){i("log","is then",a," at pages/tequan/yongjinSetting.vue:114"),t.res=a,t.inputPercent=a.data.percent,t.min=a.data.min,t.max=a.data.max,t.percentPlaceholder="请输入"+t.min+"-"+t.max+"之间的整数",t.currPercent=a.data.percent})).catch((function(a){i("error","is catch",a," at pages/tequan/yongjinSetting.vue:125"),t.err=a}))}}};t.default=n}).call(this,e("c8ba"),e("0de9")["log"])},6301:function(a,t,e){"use strict";e.r(t);var i=e("40fe"),n=e.n(i);for(var o in i)"default"!==o&&function(a){e.d(t,a,(function(){return i[a]}))}(o);t["default"]=n.a},"838a":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */\r\n\r\n/* scroll-view */.scroll-row[data-v-240ab4f6]{width:100%;white-space:nowrap}.scroll-row-item[data-v-240ab4f6]{display:inline-block!important}\r\n\r\n/* 图标 */.iconfont[data-v-240ab4f6]{font-family:iconfont}.view[data-v-240ab4f6],.text[data-v-240ab4f6]{font-size:%?28?%;line-height:1.8;color:#0e151d}\r\n/* 宽度 */\n.w-100[data-v-240ab4f6]{width:100%}\n.row[data-v-240ab4f6]{margin-right:%?-20?%;margin-left:%?-20?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.col-1[data-v-240ab4f6],\r\n.col-2[data-v-240ab4f6],\r\n.col-3[data-v-240ab4f6],\r\n.col-4[data-v-240ab4f6],\r\n.col-5[data-v-240ab4f6],\r\n.col-6[data-v-240ab4f6],\r\n.col-7[data-v-240ab4f6],\r\n.col-8[data-v-240ab4f6],\r\n.col-9[data-v-240ab4f6],\r\n.col-10[data-v-240ab4f6],\r\n.col-11[data-v-240ab4f6],\r\n.col-12[data-v-240ab4f6]{position:relative;padding-right:%?20?%;padding-left:%?20?%}.col-12[data-v-240ab4f6]{width:%?750?%}.col-11[data-v-240ab4f6]{width:%?687.5?%}.col-10[data-v-240ab4f6]{width:%?625?%}.col-9[data-v-240ab4f6]{width:%?562.5?%}.col-8[data-v-240ab4f6]{width:%?500?%}.col-7[data-v-240ab4f6]{width:%?437.5?%}.col-6[data-v-240ab4f6]{width:%?375?%}.col-5[data-v-240ab4f6]{width:%?312.5?%}.col-4[data-v-240ab4f6]{width:%?250?%}.col-3[data-v-240ab4f6]{width:%?187.5?%}.col-2[data-v-240ab4f6]{width:%?125?%}.col-1[data-v-240ab4f6]{width:%?62.5?%}.col-offset-12[data-v-240ab4f6]{margin-left:%?750?%}.col-offset-11[data-v-240ab4f6]{margin-left:%?687.5?%}.col-offset-10[data-v-240ab4f6]{margin-left:%?625?%}.col-offset-9[data-v-240ab4f6]{margin-left:%?562.5?%}.col-offset-8[data-v-240ab4f6]{margin-left:%?500?%}.col-offset-7[data-v-240ab4f6]{margin-left:%?437.5?%}.col-offset-6[data-v-240ab4f6]{margin-left:%?375?%}.col-offset-5[data-v-240ab4f6]{margin-left:%?312.5?%}.col-offset-4[data-v-240ab4f6]{margin-left:%?250?%}.col-offset-3[data-v-240ab4f6]{margin-left:%?187.5?%}.col-offset-2[data-v-240ab4f6]{margin-left:%?125?%}.col-offset-1[data-v-240ab4f6]{margin-left:%?62.5?%}.col-offset-0[data-v-240ab4f6]{margin-left:0}\r\n/* flex 布局 */.flex[data-v-240ab4f6]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-row[data-v-240ab4f6]{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;flex-direction:row!important}.flex-column[data-v-240ab4f6]{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse[data-v-240ab4f6]{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse[data-v-240ab4f6]{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap[data-v-240ab4f6]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.flex-nowrap[data-v-240ab4f6]{-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.justify-start[data-v-240ab4f6]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.justify-end[data-v-240ab4f6]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.justify-between[data-v-240ab4f6]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.justify-center[data-v-240ab4f6]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.align-center[data-v-240ab4f6]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.align-stretch[data-v-240ab4f6]{-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}.align-start[data-v-240ab4f6]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.align-end[data-v-240ab4f6]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}\n.content-start[data-v-240ab4f6]{-webkit-align-content:flex-start;align-content:flex-start}.content-end[data-v-240ab4f6]{-webkit-align-content:flex-end;align-content:flex-end}.content-center[data-v-240ab4f6]{-webkit-align-content:center;align-content:center}.content-between[data-v-240ab4f6]{-webkit-align-content:space-between;align-content:space-between}.content-around[data-v-240ab4f6]{-webkit-align-content:space-around;align-content:space-around}.content-stretch[data-v-240ab4f6]{-webkit-align-content:stretch;align-content:stretch}\n.flex-1[data-v-240ab4f6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.flex-2[data-v-240ab4f6]{-webkit-box-flex:2;-webkit-flex:2;flex:2}.flex-3[data-v-240ab4f6]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.flex-4[data-v-240ab4f6]{-webkit-box-flex:4;-webkit-flex:4;flex:4}.flex-5[data-v-240ab4f6]{-webkit-box-flex:5;-webkit-flex:5;flex:5}\n.flex-shrink[data-v-240ab4f6]{-webkit-flex-shrink:0;flex-shrink:0}\n.container[data-v-240ab4f6]{padding-right:%?20?%;padding-left:%?20?%}\r\n/*  -- 内外边距 -- */.m-0[data-v-240ab4f6]{margin:0}\n.m-auto[data-v-240ab4f6]{margin:auto}\n.m-1[data-v-240ab4f6]{margin:%?10?%}.m-2[data-v-240ab4f6]{margin:%?20?%}.m-3[data-v-240ab4f6]{margin:%?30?%}.m-4[data-v-240ab4f6]{margin:%?40?%}.m-5[data-v-240ab4f6]{margin:%?50?%}.mt-0[data-v-240ab4f6]{margin-top:0}\n.mt-auto[data-v-240ab4f6]{margin-top:auto}\n.mt-1[data-v-240ab4f6]{margin-top:%?10?%}.mt-2[data-v-240ab4f6]{margin-top:%?20?%}.mt-3[data-v-240ab4f6]{margin-top:%?30?%}.mt-4[data-v-240ab4f6]{margin-top:%?40?%}.mt-5[data-v-240ab4f6]{margin-top:%?50?%}.mb-0[data-v-240ab4f6]{margin-bottom:0}\n.mb-auto[data-v-240ab4f6]{margin-bottom:auto}\n.mb-1[data-v-240ab4f6]{margin-bottom:%?10?%}.mb-2[data-v-240ab4f6]{margin-bottom:%?20?%}.mb-3[data-v-240ab4f6]{margin-bottom:%?30?%}.mb-4[data-v-240ab4f6]{margin-bottom:%?40?%}.mb-5[data-v-240ab4f6]{margin-bottom:%?50?%}.ml-0[data-v-240ab4f6]{margin-left:0}\n.ml-auto[data-v-240ab4f6]{margin-left:auto}\n.ml-1[data-v-240ab4f6]{margin-left:%?10?%}.ml-2[data-v-240ab4f6]{margin-left:%?20?%}.ml-3[data-v-240ab4f6]{margin-left:%?30?%}.ml-4[data-v-240ab4f6]{margin-left:%?40?%}.ml-5[data-v-240ab4f6]{margin-left:%?50?%}.mr-0[data-v-240ab4f6]{margin-right:0}\n.mr-auto[data-v-240ab4f6]{margin-right:auto}\n.mr-1[data-v-240ab4f6]{margin-right:%?10?%}.mr-2[data-v-240ab4f6]{margin-right:%?20?%}.mr-3[data-v-240ab4f6]{margin-right:%?30?%}.mr-4[data-v-240ab4f6]{margin-right:%?40?%}.mr-5[data-v-240ab4f6]{margin-right:%?50?%}.my-0[data-v-240ab4f6]{margin-top:0;margin-bottom:0}\n.my-auto[data-v-240ab4f6]{margin-top:auto;margin-bottom:auto}\n.my-1[data-v-240ab4f6]{margin-top:%?10?%;margin-bottom:%?10?%}.my-2[data-v-240ab4f6]{margin-top:%?20?%;margin-bottom:%?20?%}.my-3[data-v-240ab4f6]{margin-top:%?30?%;margin-bottom:%?30?%}.my-4[data-v-240ab4f6]{margin-top:%?40?%;margin-bottom:%?40?%}.my-5[data-v-240ab4f6]{margin-top:%?50?%;margin-bottom:%?50?%}.mx-0[data-v-240ab4f6]{margin-left:0;margin-right:0}\n.mx-auto[data-v-240ab4f6]{margin-left:auto;margin-right:auto}\n.mx-1[data-v-240ab4f6]{margin-left:%?10?%;margin-right:%?10?%}.mx-2[data-v-240ab4f6]{margin-left:%?20?%;margin-right:%?20?%}.mx-3[data-v-240ab4f6]{margin-left:%?30?%;margin-right:%?30?%}.mx-4[data-v-240ab4f6]{margin-left:%?40?%;margin-right:%?40?%}.mx-5[data-v-240ab4f6]{margin-left:%?50?%;margin-right:%?50?%}.p-0[data-v-240ab4f6]{padding:0}.p[data-v-240ab4f6]{padding:%?5?%}.p-1[data-v-240ab4f6]{padding:%?10?%}.p-2[data-v-240ab4f6]{padding:%?20?%}.p-3[data-v-240ab4f6]{padding:%?30?%}.p-4[data-v-240ab4f6]{padding:%?40?%}.p-5[data-v-240ab4f6]{padding:%?50?%}.pt-0[data-v-240ab4f6]{padding-top:0}.pt[data-v-240ab4f6]{padding-top:%?5?%}.pt-1[data-v-240ab4f6]{padding-top:%?10?%}.pt-2[data-v-240ab4f6]{padding-top:%?20?%}.pt-3[data-v-240ab4f6]{padding-top:%?30?%}.pt-4[data-v-240ab4f6]{padding-top:%?40?%}.pt-5[data-v-240ab4f6]{padding-top:%?50?%}.pb-0[data-v-240ab4f6]{padding-bottom:0}.pb-1[data-v-240ab4f6]{padding-bottom:%?10?%}.pb[data-v-240ab4f6]{padding-bottom:%?5?%}.pb-2[data-v-240ab4f6]{padding-bottom:%?20?%}.pb-3[data-v-240ab4f6]{padding-bottom:%?30?%}.pb-4[data-v-240ab4f6]{padding-bottom:%?40?%}.pb-5[data-v-240ab4f6]{padding-bottom:%?50?%}.pl-0[data-v-240ab4f6]{padding-left:0}.pl[data-v-240ab4f6]{padding-left:%?5?%}.pl-1[data-v-240ab4f6]{padding-left:%?10?%}.pl-2[data-v-240ab4f6]{padding-left:%?20?%}.pl-3[data-v-240ab4f6]{padding-left:%?30?%}.pl-4[data-v-240ab4f6]{padding-left:%?40?%}.pl-5[data-v-240ab4f6]{padding-left:%?50?%}.pr-0[data-v-240ab4f6]{padding-right:0}.pr[data-v-240ab4f6]{padding-right:%?5?%}.pr-1[data-v-240ab4f6]{padding-right:%?10?%}.pr-2[data-v-240ab4f6]{padding-right:%?20?%}.pr-3[data-v-240ab4f6]{padding-right:%?30?%}.pr-4[data-v-240ab4f6]{padding-right:%?40?%}.pr-5[data-v-240ab4f6]{padding-right:%?50?%}.py-0[data-v-240ab4f6]{padding-top:0;padding-bottom:0}.py[data-v-240ab4f6]{padding-top:%?5?%;padding-bottom:%?5?%}.py-1[data-v-240ab4f6]{padding-top:%?10?%;padding-bottom:%?10?%}.py-2[data-v-240ab4f6]{padding-top:%?20?%;padding-bottom:%?20?%}.py-3[data-v-240ab4f6]{padding-top:%?30?%;padding-bottom:%?30?%}.py-4[data-v-240ab4f6]{padding-top:%?40?%;padding-bottom:%?40?%}.py-5[data-v-240ab4f6]{padding-top:%?50?%;padding-bottom:%?50?%}.px-0[data-v-240ab4f6]{padding-left:0;padding-right:0}.px-1[data-v-240ab4f6]{padding-left:%?10?%;padding-right:%?10?%}.px[data-v-240ab4f6]{padding-left:%?5?%;padding-right:%?5?%}.px-2[data-v-240ab4f6]{padding-left:%?20?%;padding-right:%?20?%}.px-3[data-v-240ab4f6]{padding-left:%?30?%;padding-right:%?30?%}.px-4[data-v-240ab4f6]{padding-left:%?40?%;padding-right:%?40?%}.px-5[data-v-240ab4f6]{padding-left:%?50?%;padding-right:%?50?%}\r\n/* 文字大小 */.font-smaller[data-v-240ab4f6]{font-size:%?15?%}.font-small[data-v-240ab4f6]{font-size:%?20?%}.font-sm[data-v-240ab4f6]{font-size:%?25?%}.font[data-v-240ab4f6]{font-size:%?30?%}.font-md[data-v-240ab4f6]{font-size:%?35?%}.font-lg[data-v-240ab4f6]{font-size:%?40?%}.h1[data-v-240ab4f6]{font-size:%?80?%;line-height:1.8}.h2[data-v-240ab4f6]{font-size:%?60?%;line-height:1.8}.h3[data-v-240ab4f6]{font-size:%?45?%;line-height:1.8}.h4[data-v-240ab4f6]{font-size:%?32?%;line-height:1.8}.h5[data-v-240ab4f6]{font-size:%?30?%;line-height:1.8}.h6[data-v-240ab4f6]{font-size:%?28?%;line-height:1.8}\r\n/* 文字缩进 */\n.text-indent[data-v-240ab4f6]{text-indent:2}\r\n\r\n/* 文字划线 */.text-through[data-v-240ab4f6]{text-decoration:line-through}\r\n/* 文字对齐 */.text-left[data-v-240ab4f6]{text-align:left}.text-right[data-v-240ab4f6]{text-align:right}.text-center[data-v-240ab4f6]{text-align:center}\r\n/* 文字换行溢出处理 */.text-ellipsis[data-v-240ab4f6]{\r\noverflow:hidden;text-overflow:ellipsis;white-space:nowrap;\n}\r\n/* 文字粗细和斜体 */.font-weight-light[data-v-240ab4f6]{font-weight:300}\r\n/*细*/.font-weight-lighter[data-v-240ab4f6]{font-weight:100}\r\n/*更细*/.font-weight-normal[data-v-240ab4f6]{font-weight:400}\r\n/*正常*/.font-weight-bold[data-v-240ab4f6]{font-weight:700}\r\n/*粗*/.font-weight-bolder[data-v-240ab4f6]{font-weight:700}\r\n/*更粗*/.font-italic[data-v-240ab4f6]{font-style:italic}\r\n/*斜体*/\r\n/* 文字颜色 */.text-white[data-v-240ab4f6]{color:#fff}.text-primary[data-v-240ab4f6]{color:#007bff}.text-hover-primary[data-v-240ab4f6]{color:#0056b3}.text-secondary[data-v-240ab4f6]{color:#6c757d}.text-hover-secondary[data-v-240ab4f6]{color:#494f54}.text-success[data-v-240ab4f6]{color:#28a745}.text-hover-success[data-v-240ab4f6]{color:#19692c}.text-info[data-v-240ab4f6]{color:#17a2b8}.text-hover-info[data-v-240ab4f6]{color:#0f6674}.text-warning[data-v-240ab4f6]{color:#ffc107}.text-hover-warning[data-v-240ab4f6]{color:#ba8b00}.text-danger[data-v-240ab4f6]{color:#dc3545}.text-hover-danger[data-v-240ab4f6]{color:#a71d2a}.text-light[data-v-240ab4f6]{color:#f8f9fa}.text-hover-light[data-v-240ab4f6]{color:#cbd3da}.text-dark[data-v-240ab4f6]{color:#343a40}.text-hover-dark[data-v-240ab4f6]{color:#121416}.text-body[data-v-240ab4f6]{color:#212529}.text-muted[data-v-240ab4f6]{color:#6c757d}\r\n/* 浅灰色 */.text-light-muted[data-v-240ab4f6]{color:#a9a5a0}.text-light-black[data-v-240ab4f6]{color:rgba(0,0,0,.5)}.text-light-white[data-v-240ab4f6]{color:hsla(0,0%,100%,.5)}\r\n/* 背景颜色 */.bg-primary[data-v-240ab4f6]{background-color:#007bff}.bg-hover-primary[data-v-240ab4f6]:hover{background-color:#0062cc}.bg-secondary[data-v-240ab4f6]{background-color:#6c757d}.bg-hover-secondary[data-v-240ab4f6]:hover{background-color:#545b62}.bg-success[data-v-240ab4f6]{background-color:#28a745}.bg-hover-success[data-v-240ab4f6]{background-color:#1e7e34}.bg-info[data-v-240ab4f6]{background-color:#17a2b8}.bg-hover-info[data-v-240ab4f6]{background-color:#117a8b}.bg-warning[data-v-240ab4f6]{background-color:#ffc107}.bg-hover-warning[data-v-240ab4f6]{background-color:#d39e00}.bg-danger[data-v-240ab4f6]{background-color:#dc3545}.bg-hover-danger[data-v-240ab4f6]{background-color:#bd2130}.bg-light[data-v-240ab4f6]{background-color:#f8f9fa}.bg-hover-light[data-v-240ab4f6]{background-color:#dae0e5}.bg-dark[data-v-240ab4f6]{background-color:#343a40}.bg-hover-dark[data-v-240ab4f6]{background-color:#1d2124}.bg-white[data-v-240ab4f6]{background-color:#fff}.bg-transparent[data-v-240ab4f6]{background-color:initial}\r\n/* 边框 */.border[data-v-240ab4f6]{border-width:%?1?%;border-style:solid;border-color:#dee2e6}.border-top[data-v-240ab4f6]{border-top-width:%?1?%;border-top-style:solid;border-top-color:#dee2e6}.border-right[data-v-240ab4f6]{border-right-width:%?1?%;border-right-style:solid;border-right-color:#dee2e6}.border-bottom[data-v-240ab4f6]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#dee2e6}.border-left[data-v-240ab4f6]{border-left-width:%?1?%;border-left-style:solid;border-left-color:#dee2e6}.border-0[data-v-240ab4f6]{border-width:0!important}.border-top-0[data-v-240ab4f6]{border-top-width:0!important}.border-right-0[data-v-240ab4f6]{border-right-width:0!important}.border-bottom-0[data-v-240ab4f6]{border-bottom-width:0!important}.border-left-0[data-v-240ab4f6]{border-left-width:0!important}.border-primary[data-v-240ab4f6]{border-color:#007bff}.border-secondary[data-v-240ab4f6]{border-color:#6c757d}.border-light-secondary[data-v-240ab4f6]{border-color:#e9e8e5}.border-success[data-v-240ab4f6]{border-color:#28a745}.border-info[data-v-240ab4f6]{border-color:#17a2b8}.border-warning[data-v-240ab4f6]{border-color:#ffc107}.border-danger[data-v-240ab4f6]{border-color:#dc3545}.border-light[data-v-240ab4f6]{border-color:#f8f9fa}.border-dark[data-v-240ab4f6]{border-color:#343a40}.border-white[data-v-240ab4f6]{border-color:#fff}\r\n/* 圆角 */.rounded[data-v-240ab4f6]{border-radius:%?8?%}.rounded-top[data-v-240ab4f6]{border-top-left-radius:%?8?%;border-top-right-radius:%?8?%}.rounded-right[data-v-240ab4f6]{border-top-right-radius:%?8?%;border-bottom-right-radius:%?8?%}.rounded-bottom[data-v-240ab4f6]{border-bottom-right-radius:%?8?%;border-bottom-left-radius:%?8?%}.rounded-left[data-v-240ab4f6]{border-top-left-radius:%?8?%;border-bottom-left-radius:%?8?%}.rounded-circle[data-v-240ab4f6]{border-radius:%?100?%}.rounded-0[data-v-240ab4f6]{border-radius:0}\r\n/* 显示 */\n.d-none[data-v-240ab4f6]{display:none}.d-inline-block[data-v-240ab4f6]{display:inline-block}.d-block[data-v-240ab4f6]{display:block}\r\n\r\n/* 内容溢出 */.overflow-hidden[data-v-240ab4f6]{overflow:hidden}\r\n/* 定位 */.position-relative[data-v-240ab4f6]{position:relative}.position-absolute[data-v-240ab4f6]{position:absolute}.position-fixed[data-v-240ab4f6]{position:fixed}\r\n/* 定位 - 固定顶部 */.fixed-top[data-v-240ab4f6]{position:fixed;top:0;right:0;left:0;z-index:1030}\r\n/* 定位 - 固定底部 */.fixed-bottom[data-v-240ab4f6]{position:fixed;right:0;bottom:0;left:0;z-index:1030}.top-0[data-v-240ab4f6]{top:0}.left-0[data-v-240ab4f6]{left:0}.right-0[data-v-240ab4f6]{right:0}.bottom-0[data-v-240ab4f6]{bottom:0}\r\n/* 阴影 */\n.shadow[data-v-240ab4f6]{box-shadow:0 %?2?% %?12?% rgba(0,0,0,.15)}.shadow-lg[data-v-240ab4f6]{box-shadow:%?0?% %?40?% %?100?% %?0?% rgba(0,0,0,.175)}.shadow-none[data-v-240ab4f6]{box-shadow:none!important}\n.data-list[data-v-240ab4f6]{width:100%}.data-row[data-v-240ab4f6]{box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);background-color:#fff;padding:%?10?% 3%;margin:%?20?%}.d-r-title[data-v-240ab4f6]{\r\n\t/* font-weight: 400; */}.d-r-money[data-v-240ab4f6]{color:#ec652f;font-weight:600}.loading-text[data-v-240ab4f6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-240ab4f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.content uni-view[data-v-240ab4f6]{display:-webkit-box;display:-webkit-flex;display:flex}.content .row[data-v-240ab4f6]{width:94%;margin:0 3%;border-bottom:solid %?1?% #eee}.content .row .nominal[data-v-240ab4f6]{width:30%;height:%?120?%;font-weight:200;font-size:%?30?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .row .input[data-v-240ab4f6]{width:70%;padding:%?20?% 0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.content .row .input.switch[data-v-240ab4f6]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .row .input .textarea[data-v-240ab4f6]{margin:%?20?% 0;min-height:%?120?%}.content .row .del[data-v-240ab4f6]{width:100%;height:%?100?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?36?%;color:#f06c7a;background-color:rgba(255,0,0,.05);border-bottom:solid %?1?% #eee}.tips[data-v-240ab4f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border:%?1?% solid #f0ad4e;width:%?650?%;border-radius:%?30?%;margin:%?50?%}.tips uni-view[data-v-240ab4f6]{display:-webkit-box;display:-webkit-flex;display:flex}.tips .title[data-v-240ab4f6]{font-weight:200;padding:%?30?% %?30?%;font-size:%?30?%;border-bottom:%?1?% solid #cacaca;width:100%}.tips .row[data-v-240ab4f6]{width:94%;padding:%?20?%;font-size:%?25?%;font-weight:200}.save[data-v-240ab4f6]{position:fixed;bottom:0;width:100%;height:%?120?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.save uni-view[data-v-240ab4f6]{display:-webkit-box;display:-webkit-flex;display:flex}.save .btn[data-v-240ab4f6]{box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.4);width:70%;height:%?80?%;border-radius:%?80?%;background-color:#f06c7a;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.save .btn .icon[data-v-240ab4f6]{height:%?80?%;color:#fff;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),a.exports=t},"8dca":function(a,t,e){"use strict";var i;e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"nominal"},[a._v("抽成比例")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:a.percentPlaceholder,type:"text"},model:{value:a.inputPercent,callback:function(t){a.inputPercent=t},expression:"inputPercent"}}),e("v-uni-view",[a._v("%")])],1)],1),e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"nominal"},[a._v("当前值")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-view",[a._v(a._s(a.currPercent)+"%")])],1)],1)],1),e("v-uni-view",{staticClass:"tips"},[e("v-uni-view",{staticClass:"title"},[a._v("温馨提示：")]),e("v-uni-view",{staticClass:"row"},[a._v("1、该抽成比例将对您的所有下级服务商生效，他们做的所有单子，您将得到该比例抽成。")]),e("v-uni-view",{staticClass:"row"},[a._v("2、数字越大、您的下级接单的价格越低，下级接单价格=原始价格-原始价格*(1-抽成比例)。")]),e("v-uni-view",{staticClass:"row"},[a._v("3、举例说明：有一任务，原始价格为50元，您设置抽成比例为2%，则您的下级接单的价格为50-50*(1-2%)=49元，做单成功后，您将抽得1元的分佣。")]),e("v-uni-view",{staticClass:"row"},[a._v("4、平台会根据市场行情来进行整体的抽佣比例约束和调控！")]),e("v-uni-view",{staticClass:"row"},[a._v("5、最佳区间：1-5。")])],1),e("v-uni-view",{staticClass:"save",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.save.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"btn"},[a._v("保存设置")])],1)],1)},o=[]},"96cb":function(a,t,e){"use strict";var i=e("e13b"),n=e.n(i);n.a},c3e4:function(a,t,e){"use strict";e.r(t);var i=e("8dca"),n=e("6301");for(var o in n)"default"!==o&&function(a){e.d(t,a,(function(){return n[a]}))}(o);e("96cb");var r,d=e("f0c5"),b=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"240ab4f6",null,!1,i["a"],r);t["default"]=b.exports},e13b:function(a,t,e){var i=e("838a");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=e("4f06").default;n("935a0010",i,!0,{sourceMap:!1,shadowMode:!1})}}]);