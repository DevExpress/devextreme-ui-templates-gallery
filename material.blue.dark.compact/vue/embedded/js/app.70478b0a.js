(function(e){function t(t){for(var r,o,i=t[0],l=t[1],s=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==c[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function i(e){return l.p+"js/"+({login0:"login0",login1:"login1",login3:"login3",login5:"login5"}[e]||e)+"."+{login0:"7dea595f",login1:"00cad8dc",login3:"69523f8b",login5:"9f8212c4"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={login1:1,login3:1,login5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({login0:"login0",login1:"login1",login3:"login3",login5:"login5"}[e]||e)+"."+{login0:"31d6cfe0",login1:"39ad8cb7",login3:"85399580",login5:"f23863c9"}[e]+".css",c=l.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===r||u===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./change-password-form.vue":["cdd9","login0"],"./create-account-form.vue":["9e38","login1"],"./home.vue":["6511"],"./login-form.vue":["bf37","login3"],"./profile.vue":["b3b1"],"./reset-password-form.vue":["dc00","login5"],"./tasks.vue":["6d24"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="1a5d",e.exports=o},"1ab6":function(e,t,n){"use strict";var r=n("5530"),o=n("1da1"),c=(n("96cf"),{email:"sandra@example.com",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"});t["a"]={_user:c,loggedIn:function(){return!!this._user},logIn:function(e,t){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,console.log(e,t),n._user=Object(r["a"])(Object(r["a"])({},c),{},{email:e}),o.abrupt("return",{isOk:!0,data:n._user});case 6:return o.prev=6,o.t0=o["catch"](0),o.abrupt("return",{isOk:!1,message:"Authentication failed"});case 9:case"end":return o.stop()}}),o,null,[[0,6]])})))()},logOut:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e._user=null;case 1:case"end":return t.stop()}}),t)})))()},getUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",{isOk:!0,data:e._user});case 4:return t.prev=4,t.t0=t["catch"](0),t.abrupt("return",{isOk:!1});case 7:case"end":return t.stop()}}),t,null,[[0,4]])})))()},resetPassword:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e),t.abrupt("return",{isOk:!0});case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},changePassword:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),n.abrupt("return",{isOk:!0});case 5:return n.prev=5,n.t0=n["catch"](0),n.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},createAccount:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),n.abrupt("return",{isOk:!0});case 5:return n.prev=5,n.t0=n["catch"](0),n.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()}}},"20f3":function(e,t,n){},"2c35":function(e,t,n){"use strict";n("b288")},3284:function(e,t,n){"use strict";n("f435")},"429f":function(e,t,n){},5667:function(e,t,n){"use strict";n("c3e4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("483b"),n("429f"),n("7e58");var r=n("7a23"),o=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("1ab6")),c=n("6c02"),a=n("6511"),i=n("b3b1"),l=n("6d24"),s={class:"side-nav-outer-toolbar"};function u(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("header-toolbar"),l=Object(r["resolveComponent"])("dx-scroll-view"),u=Object(r["resolveComponent"])("side-nav-menu"),d=Object(r["resolveComponent"])("dx-drawer");return Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[Object(r["createVNode"])(i,{class:"layout-header","menu-toggle-enabled":!0,"toggle-menu-func":o.toggleMenu,title:n.title},null,8,["toggle-menu-func","title"]),Object(r["createVNode"])(d,{class:"layout-body",position:"before",template:"menuTemplate",opened:o.menuOpened,"onUpdate:opened":t[1]||(t[1]=function(e){return o.menuOpened=e}),"opened-state-mode":o.drawerOptions.menuMode,"reveal-mode":o.drawerOptions.menuRevealMode,"min-size":o.drawerOptions.minMenuSize,"max-size":o.drawerOptions.maxMenuSize,shading:o.drawerOptions.shaderEnabled,"close-on-outside-click":o.drawerOptions.closeOnOutsideClick},{menuTemplate:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u,{"compact-mode":!o.menuOpened,onClick:o.handleSideBarClick},null,8,["compact-mode","onClick"])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{ref:"scrollViewRef",class:"with-footer"},{default:Object(r["withCtx"])((function(){return[Object(r["renderSlot"])(e.$slots,"default"),Object(r["renderSlot"])(e.$slots,"footer")]})),_:3},512)]})),_:1},8,["opened","opened-state-mode","reveal-mode","min-size","max-size","shading","close-on-outside-click"])])}var d=n("f87d"),p=n.n(d),m=n("5a1f"),f=n.n(m),b=[{text:"Home",path:"/home",icon:"home"},{text:"Examples",icon:"folder",items:[{text:"Profile",path:"/profile"},{text:"Tasks",path:"/tasks"}]}],h={class:"header-component"};function g(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("dx-button"),l=Object(r["resolveComponent"])("dx-item"),s=Object(r["resolveComponent"])("user-panel"),u=Object(r["resolveComponent"])("dx-toolbar");return Object(r["openBlock"])(),Object(r["createBlock"])("header",h,[Object(r["createVNode"])(u,{class:"header-toolbar"},{menuUserItem:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{email:o.email,"menu-items":o.userMenuItems,"menu-mode":"list"},null,8,["email","menu-items"])]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{visible:n.menuToggleEnabled,location:"before","css-class":"menu-button"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{icon:"menu","styling-mode":"text",onClick:n.toggleMenuFunc},null,8,["onClick"])]})),_:1},8,["visible"]),n.title?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0,location:"before","css-class":"header-title dx-toolbar-label"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",null,Object(r["toDisplayString"])(n.title),1)]})),_:1})):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(l,{location:"after","locate-in-menu":"auto","menu-item-template":"menuUserItem"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",null,[Object(r["createVNode"])(i,{class:"user-button authorization",width:210,height:"100%","styling-mode":"text"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{email:o.email,"menu-items":o.userMenuItems,"menu-mode":"context"},null,8,["email","menu-items"])]})),_:1})])]})),_:1})]})),_:1})])}var v=n("6191"),O=n.n(v),j=n("d158"),C=n.n(j),w={class:"user-panel"},V={class:"user-info"},x=Object(r["createVNode"])("div",{class:"image-container"},[Object(r["createVNode"])("div",{class:"user-image"})],-1),k={class:"user-name"};function N(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("dx-position"),l=Object(r["resolveComponent"])("dx-context-menu"),s=Object(r["resolveComponent"])("dx-list");return Object(r["openBlock"])(),Object(r["createBlock"])("div",w,[Object(r["createVNode"])("div",V,[x,Object(r["createVNode"])("div",k,Object(r["toDisplayString"])(n.email),1)]),"context"===n.menuMode?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:0,target:".user-button",items:n.menuItems,width:210,"show-event":"dxclick","css-class":"user-menu"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{my:"top center",at:"bottom center"})]})),_:1},8,["items"])):Object(r["createCommentVNode"])("",!0),"list"===n.menuMode?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:1,class:"dx-toolbar-menu-action",items:n.menuItems},null,8,["items"])):Object(r["createCommentVNode"])("",!0)])}var y=n("c68b"),_=n.n(y),D=n("6dd7"),S=n.n(D),M={props:{menuMode:String,menuItems:Array,email:String},components:{DxContextMenu:_.a,DxPosition:y["DxPosition"],DxList:S.a}};n("3284");M.render=N;var T=M,H={props:{menuToggleEnabled:Boolean,title:String,toggleMenuFunc:Function,logOutFunc:Function},setup:function(){var e=Object(c["d"])(),t=Object(c["c"])(),n=Object(r["ref"])("");o["a"].getUser().then((function(e){return n.value=e.data.email}));var a=[{text:"Profile",icon:"user",onClick:l},{text:"Logout",icon:"runner",onClick:i}];function i(){o["a"].logOut(),e.push({path:"/login-form",query:{redirect:t.path}})}function l(){e.push({path:"/profile",query:{redirect:t.path}})}return{email:n,userMenuItems:a}},components:{DxButton:O.a,DxToolbar:C.a,DxItem:j["DxItem"],UserPanel:T}};n("c612");H.render=g;var B=H,L={class:"menu-container"};function P(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("dx-tree-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",{class:"dx-swatch-additional side-navigation-menu",onClick:t[1]||(t[1]=function(){return o.forwardClick&&o.forwardClick.apply(o,arguments)})},[Object(r["renderSlot"])(e.$slots,"default"),Object(r["createVNode"])("div",L,[Object(r["createVNode"])(i,{ref:"treeViewRef",items:o.items,"key-expr":"path","selection-mode":"single","focus-state-enabled":!1,"expand-event":"click",onItemClick:o.handleItemClick,width:"100%"},null,8,["items","onItemClick"])])])}var E=n("5530"),I=(n("d81d"),n("8dc9")),A=n.n(I),R=(n("159b"),n("4de4"),{XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px)"}),z=[],F=window.matchMedia(R.XSmall),G=window.matchMedia(R.Small),Z=window.matchMedia(R.Medium),U=window.matchMedia(R.Large);[F,G,Z,U].forEach((function(e){e.addListener((function(){z.forEach((function(e){return e()}))}))}));var q=function(){return{"screen-x-small":F.matches,"screen-small":G.matches,"screen-medium":Z.matches,"screen-large":U.matches}},X=function(e){return z.push(e)},$=function(e){z=z.filter((function(t){return t!==e}))},J={props:{compactMode:Boolean},setup:function(e,t){var n=Object(c["c"])(),o=Object(c["d"])(),a=q()["screen-large"],i=b.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(E["a"])(Object(E["a"])({},e),{},{expanded:a})})),l=Object(r["ref"])(null);function s(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.emit("click",n)}function u(t){if(t.itemData.path&&!e.compactMode){o.push(t.itemData.path);var n=t.event;n.stopPropagation()}}function d(){l.value&&l.value.instance&&(l.value.instance.selectItem(n.path),l.value.instance.expandItem(n.path))}return Object(r["onMounted"])((function(){d(),e.compactMode&&l.value.instance.collapseAll()})),Object(r["watch"])((function(){return n.path}),(function(){d()})),Object(r["watch"])((function(){return e.compactMode}),(function(){e.compactMode?l.value.instance.collapseAll():d()})),{treeViewRef:l,items:i,forwardClick:s,handleItemClick:u,updateSelection:d}},components:{DxTreeView:A.a}};n("2c35");J.render=P;var W=J,K={props:{title:String,isXSmall:Boolean,isLarge:Boolean},setup:function(e){var t=Object(c["c"])(),n=Object(r["ref"])(null),o=Object(r["ref"])(e.isLarge),a=Object(r["ref"])(!1);function i(e){var t=e.event;t.stopPropagation(),o.value&&(a.value=!1),o.value=!o.value}function l(){!1===o.value&&(a.value=!0),o.value=!0}var s=Object(r["computed"])((function(){var t=!e.isLarge;return{menuMode:e.isLarge?"shrink":"overlap",menuRevealMode:e.isXSmall?"slide":"expand",minMenuSize:e.isXSmall?0:60,maxMenuSize:e.isXSmall?250:void 0,closeOnOutsideClick:t,shaderEnabled:t}}));return Object(r["watch"])((function(){return e.isLarge}),(function(){a.value||(o.value=e.isLarge)})),Object(r["watch"])((function(){return t.path}),(function(){!a.value&&e.isLarge||(o.value=!1,a.value=!1),n.value.instance.scrollTo(0)})),{menuOpened:o,menuItems:b,toggleMenu:i,handleSideBarClick:l,drawerOptions:s,scrollViewRef:n}},components:{DxDrawer:p.a,DxScrollView:f.a,HeaderToolbar:B,SideNavMenu:W}};n("9c5c");K.render=u;var Q=K,Y=(n("a4d3"),n("e01a"),{class:"dx-card content"}),ee={class:"header"},te={class:"title"},ne={class:"description"};function re(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("dx-scroll-view");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{height:"100%",width:"100%",class:"with-footer single-card"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",Y,[Object(r["createVNode"])("div",ee,[Object(r["createVNode"])("div",te,Object(r["toDisplayString"])(o.title),1),Object(r["createVNode"])("div",ne,Object(r["toDisplayString"])(o.description),1)]),Object(r["renderSlot"])(e.$slots,"default")])]})),_:3})}var oe={components:{DxScrollView:f.a},setup:function(){var e=Object(c["c"])(),t=Object(r["ref"])(e.meta.title),n=Object(r["ref"])("");return Object(r["watch"])((function(){return e.path}),(function(){t.value=e.meta.title,n.value=e.meta.description})),{title:t,description:n}}};n("e746");oe.render=re;var ce=oe;function ae(e){return function(){return n("1a5d")("./".concat(e,".vue"))}}var ie=new c["a"]({routes:[{path:"/home",name:"home",meta:{requiresAuth:!0,layout:Q},component:a["default"]},{path:"/profile",name:"profile",meta:{requiresAuth:!0,layout:Q},component:i["default"]},{path:"/tasks",name:"tasks",meta:{requiresAuth:!0,layout:Q},component:l["default"]},{path:"/login-form",name:"login-form",meta:{requiresAuth:!1,layout:ce,title:"Sign In"},component:ae("login-form")},{path:"/reset-password",name:"reset-password",meta:{requiresAuth:!1,layout:ce,title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email."},component:ae("reset-password-form")},{path:"/create-account",name:"create-account",meta:{requiresAuth:!1,layout:ce,title:"Sign Up"},component:ae("create-account-form")},{path:"/change-password/:recoveryCode",name:"change-password",meta:{requiresAuth:!1,layout:ce,title:"Change Password"},component:ae("change-password-form")},{path:"/",redirect:"/home"},{path:"/recovery",redirect:"/home"},{path:"/:pathMatch(.*)*",redirect:"/home"}],history:Object(c["b"])()});ie.beforeEach((function(e,t,n){"login-form"===e.name&&o["a"].loggedIn()&&n({name:"home"}),e.matched.some((function(e){return e.meta.requiresAuth}))?o["a"].loggedIn()?n():n({name:"login-form",query:{redirect:e.fullPath}}):n()}));var le=ie,se={id:"root"},ue={class:"content"};function de(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",se,[Object(r["createVNode"])("div",{class:o.cssClasses},[Object(r["createVNode"])("div",ue,[Object(r["createVNode"])(i)])],2)])}n("b64b"),n("99af");function pe(){var e=q();return{isXSmall:e["screen-x-small"],isLarge:e["screen-large"],cssClasses:Object.keys(e).filter((function(t){return e[t]}))}}var me={components:{},setup:function(){var e=Object(r["getCurrentInstance"])(),t=e.proxy.$appInfo.title,n=Object(r["reactive"])({getScreenSizeInfo:{}});function o(){n.getScreenSizeInfo=pe()}n.getScreenSizeInfo=pe(),Object(r["onMounted"])((function(){X(o)})),Object(r["onBeforeUnmount"])((function(){$(o)}));var c=Object(r["computed"])((function(){return["app"].concat(n.getScreenSizeInfo.cssClasses)}));return{title:t,screen:n,cssClasses:c}}};n("79c8");me.render=de;var fe=me,be={title:"Vue"},he=Object(r["createApp"])(fe);he.use(le),he.config.globalProperties.$appInfo=be,he.mount("#app")},6511:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["createVNode"])("h2",{class:"content-block"},"Home",-1),c=Object(r["createVNode"])("div",{class:"content-block"},[Object(r["createVNode"])("div",{class:"dx-card responsive-paddings"},[Object(r["createVNode"])("div",{class:"logos-container"},[Object(r["createVNode"])("svg",{class:"devextreme-logo",viewBox:"0 0 200 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(r["createVNode"])("path",{d:"M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z",fill:"#F05B41"})]),Object(r["createVNode"])("svg",{class:"plus",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Object(r["createVNode"])("path",{d:"M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z",fill:"#BCBCBC"})]),Object(r["createVNode"])("svg",{class:"vue-logo",viewBox:"0 0 180 62",xmlns:"http://www.w3.org/2000/svg"},[Object(r["createVNode"])("polygon",{style:{fill:"#41B782"},points:"44.3,0 36,14.3 27.7,0 0,0 36,62 72,0 "}),Object(r["createVNode"])("polygon",{style:{fill:"#35495E"},points:"44.3,0 36,14.3 27.7,0 14.4,0 36,37.2 57.6,0 "}),Object(r["createVNode"])("g",null,[Object(r["createVNode"])("path",{style:{fill:"#35495E"},d:"M77.2,15c0-0.4,0.2-0.8,0.7-1c0.5-0.3,0.9-0.4,1.4-0.4c0.7,0,1.1,0.3,1.3,0.8l7.2,24.4L95,14.4\n                c0.2-0.5,0.6-0.8,1.2-0.8c0.5,0,1,0.1,1.4,0.4c0.4,0.3,0.7,0.6,0.7,1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2l-8.3,27.3\n                c-0.3,0.8-1,1.2-2.1,1.2s-1.8-0.4-2.1-1.2l-8.4-27.3C77.2,15.2,77.2,15.1,77.2,15z"}),Object(r["createVNode"])("path",{style:{fill:"#35495E"},d:"M99.8,36V25.4c0-0.3,0.2-0.6,0.5-0.9c0.3-0.2,0.7-0.4,1.2-0.4c0.4,0,0.8,0.1,1.2,0.4\n                s0.5,0.5,0.5,0.8V36c0,1.2,0.5,2.3,1.4,3.3c0.9,1,2,1.5,3.3,1.5c1.3,0,2.4-0.5,3.3-1.5c0.9-1,1.4-2.1,1.4-3.3V25.3\n                c0-0.3,0.2-0.6,0.5-0.8c0.3-0.2,0.7-0.4,1.2-0.4c0.5,0,0.9,0.1,1.2,0.3c0.3,0.2,0.5,0.5,0.5,0.8V36c0,2.1-0.8,3.9-2.4,5.5\n                c-1.6,1.6-3.5,2.4-5.7,2.4c-2.2,0-4.1-0.8-5.7-2.4C100.6,40,99.8,38.1,99.8,36z"}),Object(r["createVNode"])("path",{style:{fill:"#35495E"},d:"M119.9,35.9v-4.3c0-2.1,0.8-3.9,2.4-5.5c1.6-1.5,3.5-2.3,5.8-2.3c2.1,0,4,0.7,5.5,2.1\n                s2.3,3.2,2.3,5.4c0,0.8-0.1,1.4-0.3,1.9s-0.5,0.8-0.9,1c-0.4,0.2-0.8,0.3-1.1,0.4s-0.8,0.1-1.4,0.1h-9v1.2c0,1.5,0.5,2.7,1.6,3.6\n                c1.1,0.9,2.5,1.4,4.2,1.4c0.9,0,1.7-0.1,2.4-0.4c0.7-0.3,1.2-0.5,1.6-0.8c0.4-0.3,0.7-0.4,1-0.4c0.4,0,0.7,0.2,1,0.5\n                c0.3,0.3,0.4,0.7,0.4,1c0,0.6-0.6,1.3-1.9,1.9c-1.2,0.7-2.8,1-4.6,1c-2.7,0-4.9-0.7-6.6-2.2S119.9,38.3,119.9,35.9z M123.3,32.5\n                h7.6c0.7,0,1.2-0.1,1.4-0.3c0.2-0.2,0.4-0.5,0.4-1c0-1.2-0.5-2.3-1.4-3.2c-0.9-0.9-2-1.4-3.3-1.4c-1.3,0-2.4,0.4-3.3,1.3\n                c-0.9,0.9-1.4,1.9-1.4,3.2V32.5z"}),Object(r["createVNode"])("path",{style:{fill:"#35495E"},d:"M138.8,41.9c0-0.5,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6\n                c0.4,0.4,0.6,0.8,0.6,1.4c0,0.5-0.2,1-0.6,1.4s-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6S138.8,42.4,138.8,41.9z"}),Object(r["createVNode"])("path",{style:{fill:"#35495E"},d:"M143,51.4c0-0.5,0.1-0.8,0.4-1.1c0.3-0.3,0.6-0.4,1-0.4c1.1,0,1.8-0.4,2.1-1.2\n                c0.3-0.8,0.5-2,0.5-3.6V25.3c0-0.4,0.2-0.6,0.5-0.9c0.3-0.2,0.7-0.3,1.2-0.3c0.5,0,0.9,0.1,1.2,0.3c0.3,0.2,0.5,0.5,0.5,0.9v19.9\n                c0,2.4-0.5,4.3-1.4,5.7c-0.9,1.4-2.3,2.1-4.2,2.1C143.6,53,143,52.4,143,51.4z M147.2,18.2c-0.4-0.4-0.6-0.9-0.6-1.4\n                c0-0.5,0.2-1,0.6-1.4c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.8,0.6,1.4c0,0.5-0.2,1-0.6,1.4\n                c-0.4,0.4-0.9,0.6-1.5,0.6C148.1,18.8,147.6,18.6,147.2,18.2z"}),Object(r["createVNode"])("path",{style:{fill:"#35495E"},d:"M154.1,40.8c0-0.4,0.1-0.7,0.3-1c0.2-0.3,0.5-0.5,0.8-0.5c0.2,0,0.5,0.2,0.9,0.5s1,0.7,1.8,1\n                c0.8,0.3,1.7,0.5,2.7,0.5c1.4,0,2.4-0.2,3-0.7s0.9-1.1,0.9-1.9c0-0.9-0.3-1.6-1-2.2c-0.7-0.5-1.5-0.9-2.5-1.2c-1-0.3-2-0.6-3-0.9\n                s-1.8-0.9-2.5-1.7c-0.7-0.8-1-1.8-1-3.1c0-1.5,0.6-2.9,1.7-4c1.1-1.1,2.8-1.7,5.1-1.7c1.4,0,2.8,0.2,4,0.7c1.2,0.4,1.8,0.9,1.8,1.5\n                c0,0.3-0.1,0.7-0.4,1.1c-0.3,0.4-0.6,0.6-1,0.6c-0.1,0-0.6-0.2-1.6-0.6c-0.9-0.4-1.9-0.6-2.8-0.6c-1.3,0-2.2,0.3-2.8,0.9\n                c-0.6,0.6-0.9,1.3-0.9,2c0,0.8,0.3,1.4,1,1.8c0.7,0.4,1.5,0.8,2.5,1c1,0.2,2,0.6,3,0.9c1,0.4,1.8,1,2.5,1.8c0.7,0.9,1,2,1,3.4\n                c0,1.7-0.6,3-1.8,4c-1.2,1-2.9,1.5-5,1.5c-1.9,0-3.4-0.3-4.8-1C154.7,42.2,154.1,41.5,154.1,40.8z"})])])]),Object(r["createVNode"])("p",null," Thanks for using the DevExtreme Vue App Template. "),Object(r["createVNode"])("p",null,[Object(r["createTextVNode"])("This application was built using "),Object(r["createVNode"])("a",{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},"Vue CLI"),Object(r["createTextVNode"])(" and "),Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Common/DevExtreme_CLI/",target:"_blank",rel:"noopener noreferrer"},"DevExtreme CLI"),Object(r["createTextVNode"])(" and includes the following DevExtreme components:")]),Object(r["createVNode"])("ul",null,[Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/",target:"_blank",rel:"noopener noreferrer"},"DataGrid")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Widgets/Form/Overview/",target:"_blank",rel:"noopener noreferrer"},"Form")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Widgets/Drawer/Getting_Started_with_Navigation_Drawer/",target:"_blank",rel:"noopener noreferrer"},"Drawer")])]),Object(r["createVNode"])("p",null," To customize your DevExtreme Vue application further, please refer to the following help topics: "),Object(r["createVNode"])("ul",null,[Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Vue_Components/Application_Template/#Layouts",target:"_blank",rel:"noopener noreferrer"},"Layouts")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Vue_Components/Application_Template/#Add_a_New_View",target:"_blank",rel:"noopener noreferrer"},"Add a New View")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Vue_Components/Application_Template/#Configure_the_Navigation_Menu",target:"_blank",rel:"noopener noreferrer"},"Configure the Navigation Menu")]),Object(r["createVNode"])("li",null,[Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Documentation/Guide/Vue_Components/Application_Template/#Configure_Themes",target:"_blank",rel:"noopener noreferrer"},"Configure Themes")])]),Object(r["createVNode"])("p",null,[Object(r["createTextVNode"])(" For technical content related to DevExtreme Vue components, feel free to explore our "),Object(r["createVNode"])("a",{href:"https://js.devexpress.com/documentation/",target:"_blank",rel:"noopener noreferrer"},"online documentation"),Object(r["createTextVNode"])(" and "),Object(r["createVNode"])("a",{href:"https://js.devexpress.com/Demos/Widgetsgallery/",target:"_blank",rel:"noopener noreferrer"},"technical demos"),Object(r["createTextVNode"])(". ")])])],-1);function a(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[o,c])}n("bcf4");const i={};i.render=a;t["default"]=i},"6d24":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["createVNode"])("h2",{class:"content-block"},"Tasks",-1);function c(e,t,n,c,a,i){var l=Object(r["resolveComponent"])("dx-paging"),s=Object(r["resolveComponent"])("dx-pager"),u=Object(r["resolveComponent"])("dx-filter-row"),d=Object(r["resolveComponent"])("dx-column"),p=Object(r["resolveComponent"])("dx-lookup"),m=Object(r["resolveComponent"])("dx-data-grid");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[o,Object(r["createVNode"])(m,{class:"dx-card wide-card","data-source":c.dataSourceConfig,"focused-row-index":0,"show-borders":!1,"focused-row-enabled":!0,"column-auto-width":!0,"column-hiding-enabled":!0},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{"page-size":10}),Object(r["createVNode"])(s,{"show-page-size-selector":!0,"show-info":!0}),Object(r["createVNode"])(u,{visible:!0}),Object(r["createVNode"])(d,{"data-field":"Task_ID",width:90,"hiding-priority":2}),Object(r["createVNode"])(d,{"data-field":"Task_Subject",caption:"Subject",width:190,"hiding-priority":8}),Object(r["createVNode"])(d,{"data-field":"Task_Status",caption:"Status","hiding-priority":6}),Object(r["createVNode"])(d,{"data-field":"Task_Priority",caption:"Priority","hiding-priority":5},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(p,{"display-expr":"name","value-expr":"value","data-source":c.priorities},null,8,["data-source"])]})),_:1}),Object(r["createVNode"])(d,{"data-field":"ResponsibleEmployee.Employee_Full_Name",caption:"Assigned To","allow-sorting":!1,"hiding-priority":7}),Object(r["createVNode"])(d,{"data-field":"Task_Start_Date",caption:"Start Date","data-type":"date","hiding-priority":3}),Object(r["createVNode"])(d,{"data-field":"Task_Due_Date",caption:"Due Date","data-type":"date","hiding-priority":4}),Object(r["createVNode"])(d,{"data-field":"Task_Priority",caption:"Priority",name:"Priority","hiding-priority":1}),Object(r["createVNode"])(d,{"data-field":"Task_Completion",caption:"Completion","hiding-priority":0})]})),_:1},8,["data-source"])])}n("493c");var a=n("d30a"),i=n.n(a),l=[{name:"High",value:4},{name:"Urgent",value:3},{name:"Normal",value:2},{name:"Low",value:1}],s={setup:function(){var e={store:{type:"odata",key:"Task_ID",url:"https://js.devexpress.com/Demos/DevAV/odata/Tasks"},expand:"ResponsibleEmployee",select:["Task_ID","Task_Subject","Task_Start_Date","Task_Due_Date","Task_Status","Task_Priority","Task_Completion","ResponsibleEmployee/Employee_Full_Name"]};return{dataSourceConfig:e,priorities:l}},components:{DxDataGrid:i.a,DxColumn:a["DxColumn"],DxFilterRow:a["DxFilterRow"],DxLookup:a["DxLookup"],DxPager:a["DxPager"],DxPaging:a["DxPaging"]}};s.render=c;t["default"]=s},"79c8":function(e,t,n){"use strict";n("20f3")},"7e58":function(e,t,n){},"9c5c":function(e,t,n){"use strict";n("b463")},a27a:function(e,t,n){},b288:function(e,t,n){},b3b1:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=Object(r["createVNode"])("h2",{class:"content-block"},"Profile",-1),c={class:"content-block dx-card responsive-paddings"},a={class:"form-avatar"},i={class:"content-block dx-card responsive-paddings"};function l(e,t,n,l,s,u){var d=Object(r["resolveComponent"])("dx-form");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[o,Object(r["createVNode"])("div",c,[Object(r["createVNode"])("div",a,[Object(r["createVNode"])("img",{src:l.imageSrc},null,8,["src"])]),Object(r["createVNode"])("span",null,Object(r["toDisplayString"])(l.formData.Notes),1)]),Object(r["createVNode"])("div",i,[Object(r["createVNode"])(d,{id:"form","label-location":"top","form-data":l.formData,colCountByScreen:l.colCountByScreen},null,8,["form-data","colCountByScreen"])])])}var s=n("66dc"),u=n.n(s),d={props:{picture:String},setup:function(){var e="images/employees/06.png",t="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/".concat(e),n={ID:7,FirstName:"Sandra",LastName:"Johnson",Prefix:"Mrs.",Position:"Controller",Picture:e,BirthDate:new Date("1974/11/15"),HireDate:new Date("2005/05/11"),Notes:"Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",Address:"4600 N Virginia Rd."},r={xs:1,sm:2,md:3,lg:4};return{imageSrc:t,formData:n,colCountByScreen:r}},components:{DxForm:u.a}};n("5667");d.render=l;t["default"]=d},b463:function(e,t,n){},bcf4:function(e,t,n){"use strict";n("bdd2")},bdd2:function(e,t,n){},c3e4:function(e,t,n){},c612:function(e,t,n){"use strict";n("a27a")},e4bd:function(e,t,n){},e746:function(e,t,n){"use strict";n("e4bd")},f435:function(e,t,n){}});