(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1fwl":function(t,e,r){"use strict";var n=r("14Xm"),a=r.n(n),s=r("D3Ub"),i=r.n(s),c=r("iCc5"),o=r.n(c),u=r("V7oC"),l=r.n(u),d=r("liqK"),v=function(){function t(){o()(this,t)}return l()(t,[{key:"latest",value:function(){var t=i()(a.a.mark(function t(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:r}});case 2:return e=t.sent,t.abrupt("return",e.data.transactions);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"find",value:function(){var t=i()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions/get",{params:{id:e}});case 2:return r=t.sent,t.abrupt("return",r.data.transaction);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"findByBlock",value:function(){var t=i()(a.a.mark(function t(e){var r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s>1?(s-1)*i:0,t.next=3,d.a.get("transactions",{params:{blockId:e,limit:i,offset:r,orderBy:"timestamp:desc"}});case 3:return n=t.sent,t.abrupt("return",n.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"latestRegistrations",value:function(){var t=i()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:5,type:2}});case 2:return e=t.sent,t.abrupt("return",e.data.transactions);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"latestVotes",value:function(){var t=i()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:5,type:3}});case 2:return e=t.sent,t.abrupt("return",e.data.transactions);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"allByAddress",value:function(){var t=i()(a.a.mark(function t(e){var r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s>1?(s-1)*i:0,t.next=3,d.a.get("transactions",{params:{senderId:e,recipientId:e,limit:i,offset:r,orderBy:"timestamp:desc"}});case 3:return n=t.sent,t.abrupt("return",n.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"sentByAddress",value:function(){var t=i()(a.a.mark(function t(e){var r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s>1?(s-1)*i:0,t.next=3,d.a.get("transactions",{params:{senderId:e,limit:i,offset:r,orderBy:"timestamp:desc"}});case 3:return n=t.sent,t.abrupt("return",n.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"receivedByAddress",value:function(){var t=i()(a.a.mark(function t(e){var r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s>1?(s-1)*i:0,t.next=3,d.a.get("transactions",{params:{recipientId:e,limit:i,offset:r,orderBy:"timestamp:desc"}});case 3:return n=t.sent,t.abrupt("return",n.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"sentByAddressCount",value:function(){var t=i()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions",{params:{senderId:e,limit:1}});case 2:return r=t.sent,t.abrupt("return",r.data.count);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"receivedByAddressCount",value:function(){var t=i()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions",{params:{recipientId:e,limit:1}});case 2:return r=t.sent,t.abrupt("return",r.data.count);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"findByBlockCount",value:function(){var t=i()(a.a.mark(function t(e){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("transactions",{params:{blockId:e,limit:1}});case 2:return r=t.sent,t.abrupt("return",r.data.count);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"paginate",value:function(){var t=i()(a.a.mark(function t(e){var r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e>1?(e-1)*s:0,t.next=3,d.a.get("transactions",{params:{orderBy:"timestamp:desc",limit:s,offset:r}});case 3:return n=t.sent,t.abrupt("return",n.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"paginateByAddress",value:function(){var t=i()(a.a.mark(function t(e){var r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=s>1?(s-1)*i:0,t.next=3,d.a.get("transactions",{params:{senderId:e,recipientId:e,limit:i,offset:r,orderBy:"timestamp:desc"}});case 3:return n=t.sent,t.abrupt("return",n.data.transactions);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}();e.a=new v},Xb7U:function(t,e,r){"use strict";r.r(e);var n=r("14Xm"),a=r.n(n),s=r("D3Ub"),i=r.n(s),c={props:{block:{type:Object,required:!0},prevHandler:{type:Function,required:!0},nextHandler:{type:Function,required:!0}}},o=(r("lPCg"),r("KHd+")),u=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-5 bg-theme-feature-background xl:rounded-lg flex flex-col md:flex-row items-center px-5 sm:px-10 py-8"},[n("div",{staticClass:"flex items-center flex-auto w-full md:w-auto mb-5 md:mb-0"},[n("img",{staticClass:"mr-6",attrs:{src:r("oRy4")}}),t._v(" "),n("div",{staticClass:"flex-auto min-w-0"},[n("div",{staticClass:"text-grey mb-2"},[t._v(t._s(t.$t("Block ID")))]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"text-xl text-white semibold truncate"},[n("span",{staticClass:"mr-2"},[t._v(t._s(t.block.id?t.block.id:" "))])]),t._v(" "),t.block.id?n("clipboard",{attrs:{value:t.block.id}}):t._e()],1)])]),t._v(" "),n("div",{staticClass:"flex w-full md:block md:w-auto justify-between"},[n("button",{staticClass:"block-pager-button mr-5",attrs:{disabled:1==t.block.height},on:{click:t.prevHandler}},[n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"5px",height:"8px"}},[n("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor",d:"M4.054,8.000 L5.000,7.067 L1.892,4.000 L5.000,0.933 L4.054,0.000 L-0.000,4.000 L4.054,8.000 Z"}})]),t._v(" "),n("span",{staticClass:"ml-2 hidden md:block inline-button"},[t._v(t._s(t.$t("Previous block")))]),t._v(" "),n("span",{staticClass:"ml-2 md:hidden"},[t._v(t._s(t.$t("Previous")))])]),t._v(" "),n("button",{staticClass:"block-pager-button",attrs:{disabled:1==t.block.confirmations},on:{click:t.nextHandler}},[n("span",{staticClass:"mr-2 hidden md:block inline-button"},[t._v(t._s(t.$t("Next block")))]),t._v(" "),n("span",{staticClass:"mr-2 md:hidden"},[t._v(t._s(t.$t("Next")))]),t._v(" "),n("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"5px",height:"8px"}},[n("path",{attrs:{"fill-rule":"evenodd",fill:"currentColor",d:"M0.946,-0.001 L-0.000,0.933 L3.107,4.000 L-0.000,7.066 L0.946,8.000 L4.999,4.000 L0.946,-0.001 Z"}})])])])])},[],!1,null,null,null).exports,l={props:{block:{type:Object,required:!0}}},d=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page-section py-8 mb-5"},[r("div",{staticClass:"px-5 sm:px-10 py-4"},[r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Transactions")))]),t._v(" "),r("div",[t._v(t._s(t.block.numberOfTransactions))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Confirmations")))]),t._v(" "),r("div",[t._v(t._s(t.block.confirmations))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Height")))]),t._v(" "),r("div",[t._v(t._s(t.block.height))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Reward")))]),t._v(" "),r("div",[t._v(t._s(t.readableCrypto(t.block.reward)))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Total Fee")))]),t._v(" "),r("div",[t._v(t._s(t.readableCrypto(t.block.totalFee)))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Total Forged")))]),t._v(" "),r("div",[t._v(t._s(t.readableCrypto(t.block.totalForged)))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Total Amount")))]),t._v(" "),r("div",[t._v(t._s(t.readableCrypto(t.block.totalAmount)))])]),t._v(" "),r("div",{staticClass:"list-row-border-b"},[r("div",[t._v(t._s(t.$t("Timestamp")))]),t._v(" "),r("div",[t._v(t._s(t.readableTimestamp(t.block.timestamp)))])]),t._v(" "),r("div",{staticClass:"list-row"},[r("div",[t._v(t._s(t.$t("Generated by")))]),t._v(" "),r("link-wallet",{attrs:{"public-key":t.block.generatorPublicKey}})],1)])])},[],!1,null,null,null).exports,v=r("1fwl"),p={props:{block:{type:Object,required:!0}},data:function(){return{transactions:null}},watch:{block:function(){this.getTransactions()}},methods:{getTransactions:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.block.id){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.a.findByBlock(t.block.id);case 4:r=e.sent,t.transactions=r;case 6:case"end":return e.stop()}},e,t)}))()}}},f=Object(o.a)(p,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.transactions&&t.transactions.length>0?r("div",[r("h2",{staticClass:"text-2xl mb-5 md:mb-6 px-5 sm:hidden text-theme-text-primary"},[t._v(t._s(t.$t("Transactions")))]),t._v(" "),r("section",{staticClass:"page-section py-8"},[r("div",{staticClass:"hidden sm:block"},[r("table-transactions",{attrs:{transactions:t.transactions}})],1),t._v(" "),r("div",{staticClass:"sm:hidden"},[r("table-transactions-mobile",{attrs:{transactions:t.transactions}})],1),t._v(" "),t.transactions.length>=25?r("div",{staticClass:"mx-10 mt-10 flex flex-wrap"},[r("router-link",{staticClass:"show-more-button",attrs:{to:{name:"block-transactions",params:{block:this.block.id,page:2}},tag:"button"}},[t._v("\n        "+t._s(t.$t("Show more"))+"\n      ")])],1):t._e()])]):t._e()},[],!1,null,null,null).exports,m=r("3RCc"),M={components:{Identity:u,BlockDetails:d,Transactions:f},data:function(){return{block:{},timer:null}},beforeRouteEnter:function(t,e,r){var n=this;return i()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.find(t.params.id);case 3:s=e.sent,r(function(t){return t.setBlock(s)}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r({name:"404"});case 10:case"end":return e.stop()}},e,n,[[0,7]])}))()},beforeRouteUpdate:function(t,e,r){var n=this;return i()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.block={},e.prev=1,e.next=4,m.a.find(t.params.id);case 4:s=e.sent,n.setBlock(s),r(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r({name:"404"});case 12:case"end":return e.stop()}},e,n,[[1,9]])}))()},mounted:function(){this.initialiseTimer()},methods:{initialiseTimer:function(){this.timer=setInterval(this.updateBlock,8e3)},updateBlock:function(){var t=this;m.a.find(this.block.id).then(function(e){return t.setBlock(e)})},setBlock:function(t){this.block=t},prevBlock:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.findPrevious(t.block.height);case 3:r=e.sent,t.$router.push({name:"block",params:{id:r.id}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message||e.t0.data.error);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()},nextBlock:function(){var t=this;return i()(a.a.mark(function e(){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.findNext(t.block.height);case 3:r=e.sent,t.$router.push({name:"block",params:{id:r.id}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message||e.t0.data.error);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}}},b=Object(o.a)(M,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.block?r("div",{staticClass:"max-w-2xl mx-auto md:pt-5"},[r("content-header",[t._v(t._s(t.$t("Block")))]),t._v(" "),r("identity",{attrs:{block:t.block,"prev-handler":t.prevBlock,"next-handler":t.nextBlock}}),t._v(" "),r("block-details",{attrs:{block:t.block}}),t._v(" "),r("transactions",{attrs:{block:t.block}})],1):t._e()},[],!1,null,null,null);e.default=b.exports},lPCg:function(t,e,r){"use strict";var n=r("vRTG");r.n(n).a},oRy4:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZwogeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiB3aWR0aD0iMzVweCIgaGVpZ2h0PSIzOHB4Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiAgZmlsbD0icmdiKDMsIDEyNCwgMjU1KSIKIGQ9Ik0zMi4zODYsMzEuMDA1IEwxOS41OTksMzcuNDk3IEMxOC45MzksMzcuODMyIDE4LjIxNSwzOC4wMDAgMTcuNDkxLDM4LjAwMCBDMTYuNzY3LDM4LjAwMCAxNi4wNDMsMzcuODMyIDE1LjM4MywzNy40OTcgTDIuNTk0LDMxLjAwMyBDMC45ODEsMzAuMTc4IC0wLjAxMiwyOC41MzEgLTAuMDAxLDI2LjcwMyBMLTAuMDAxLDExLjI1MiBDLTAuMDAwLDkuNDI0IDEuMDAxLDcuNzg0IDIuNjEzLDYuOTcxIEwxNS40MDAsMC40NzkgQzE2LjcxNiwtMC4xODUgMTguMjgzLC0wLjE4NSAxOS41OTUsMC40NzcgQzE5LjU5NywwLjQ3OCAxOS41OTgsMC40NzggMTkuNTk5LDAuNDc5IEwzMi4zODksNi45NzMgQzMzLjk5Nyw3Ljc4NCAzNC45OTksOS40MjQgMzUuMDAwLDExLjI1MiBMMzUuMDAwLDI2LjcyNCBDMzQuOTk5LDI4LjU1MiAzMy45OTcsMzAuMTkyIDMyLjM4NiwzMS4wMDUgWk0zLjAyNCwyNi43MDcgQzMuMDI0LDI2LjcxMSAzLjAyNCwyNi43MTUgMy4wMjQsMjYuNzE4IEMzLjAxOSwyNy4zNzMgMy4zNzUsMjcuOTYzIDMuOTUxLDI4LjI1OCBMMTUuOTg3LDM0LjM2OCBMMTUuOTg3LDE4LjMwNiBMMy4wMjQsMTEuNzI0IEwzLjAyNCwyNi43MDcgWk0xOC4yNDgsMy4yMjggQzE4LjAxNCwzLjExMCAxNy43NTYsMy4wNTEgMTcuNDk5LDMuMDUxIEMxNy4yNDIsMy4wNTEgMTYuOTg0LDMuMTEwIDE2Ljc0OSwzLjIyOCBMNC45MDIsOS4yNDMgTDE3LjQ5OSwxNS42MzkgTDMwLjA5Niw5LjI0MyBMMTguMjQ4LDMuMjI4IFpNMzEuOTc0LDExLjcyNSBMMTkuMDEyLDE4LjMwNiBMMTkuMDEyLDM0LjM2MCBMMzEuMDM2LDI4LjI1NiBDMzEuNjE2LDI3Ljk2MyAzMS45NzQsMjcuMzc3IDMxLjk3NCwyNi43MjMgTDMxLjk3NCwxMS43MjUgWiIvPgo8L3N2Zz4="},vRTG:function(t,e,r){}}]);
//# sourceMappingURL=12.4a845117934ba32efff5.js.map