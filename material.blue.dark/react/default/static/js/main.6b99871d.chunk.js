(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{591:function(e,t,n){},593:function(e,t,n){},608:function(e,t,n){},609:function(e,t,n){},615:function(e,t,n){},616:function(e,t,n){},617:function(e,t,n){},618:function(e,t,n){},619:function(e,t,n){},620:function(e,t,n){},621:function(e,t,n){},622:function(e,t,n){},623:function(e,t,n){},625:function(e,t,n){"use strict";n.r(t);n(392),n(404);var a=n(14),c=n.n(a),r=n(250),s=n.n(r),i=(n(591),n(592),n(106)),o=(n(593),n(387)),l=n.n(o),u=n(129),d=n(62),j=n(9),b=Object(a.createContext)({}),m=function(){return Object(a.useContext)(b)};function p(e){var t=Object(a.useState)({}),n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(j.jsx)(b.Provider,Object(u.a)({value:{navigationData:c,setNavigationData:r}},e))}var O=n(65),x=n.n(O),h=n(91),f={email:"sandra@example.com",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"};function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0,data:f});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Authentication failed"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function w(){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",{isOk:!0,data:f});case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",{isOk:!1});case 7:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function y(e,t){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function N(e,t){return I.apply(this,arguments)}function I(){return(I=Object(h.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function M(e){return S.apply(this,arguments)}function S(){return(S=Object(h.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.abrupt("return",{isOk:!0});case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function R(e){var t=Object(a.useState)(),n=Object(d.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!0),i=Object(d.a)(s,2),o=i[0],l=i[1];Object(a.useEffect)((function(){Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:(t=e.sent).isOk&&r(t.data),l(!1);case 5:case"end":return e.stop()}}),e)})))()}),[]);var b=Object(a.useCallback)(function(){var e=Object(h.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:return(a=e.sent).isOk&&r(a.data),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),m=Object(a.useCallback)((function(){r()}),[]);return Object(j.jsx)(T.Provider,Object(u.a)({value:{user:c,signIn:b,signOut:m,loading:o}},e))}var T=Object(a.createContext)({}),P=function(){return Object(a.useContext)(T)},B=function(){var e=Object(a.useState)(U()),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useCallback)((function(){c(U())}),[]);return Object(a.useEffect)((function(){return A(r),function(){z(r)}}),[r]),n},E=[],F=window.matchMedia("(max-width: 599.99px)"),L=window.matchMedia("(min-width: 600px) and (max-width: 959.99px)"),D=window.matchMedia("(min-width: 960px) and (max-width: 1279.99px)"),q=window.matchMedia("(min-width: 1280px)");[F,L,D,q].forEach((function(e){e.addListener((function(e){e.matches&&E.forEach((function(e){return e()}))}))}));var A=function(e){return E.push(e)},z=function(e){E=E.filter((function(t){return t!==e}))};function U(){return{isXSmall:F.matches,isSmall:L.matches,isMedium:D.matches,isLarge:q.matches}}var J=n(68),G="UI Templates Gallery",W=(n(608),[{path:"/crm-contact-list",component:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h2",{className:"content-block",children:"Crm Contact List"}),Object(j.jsx)("div",{className:"content-block",children:Object(j.jsx)("div",{className:"dx-card responsive-paddings",children:"Put your content here"})})]})}}].map((function(e){return Object(u.a)(Object(u.a)({},e),{},{component:(t=e.component,function(e){var n=e.match.path,r=m().setNavigationData;return Object(a.useEffect)((function(){r({currentPath:n})}),[n,r]),c.a.createElement(t,e)})});var t}))),X=n(256),H=n.n(X),Y=n(194),K=n.n(Y),Q=n(150),V=n.n(Q),Z=n(227),$=n.n(Z),_=n(309),ee=n.n(_),te=n(388),ne=n.n(te),ae=(n(609),function(e){var t=e.menuMode,n=P(),c=n.user,r=n.signOut,s=Object(J.g)();function i(){s.push("/profile")}var o=Object(a.useMemo)((function(){return[{text:"Profile",icon:"user",onClick:i},{text:"Logout",icon:"runner",onClick:r}]}),[r]);return Object(j.jsxs)("div",{className:"user-panel",children:[Object(j.jsxs)("div",{className:"user-info",children:[Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("div",{style:{background:"url(".concat(c.avatarUrl,") no-repeat #fff"),backgroundSize:"cover"},className:"user-image"})}),Object(j.jsx)("div",{className:"user-name",children:c.email})]}),"context"===t&&Object(j.jsx)(ee.a,{items:o,target:".user-button",showEvent:"dxclick",width:210,cssClass:"user-menu",children:Object(j.jsx)(_.Position,{my:"top center",at:"bottom center"})}),"list"===t&&Object(j.jsx)(ne.a,{className:"dx-toolbar-menu-action",items:o})]})}),ce=(n(615),n(179)),re=function(e){var t=e.menuToggleEnabled,n=e.title,a=e.toggleMenu;return Object(j.jsx)("header",{className:"header-component layout-header",children:Object(j.jsxs)(V.a,{className:"header-toolbar",children:[Object(j.jsx)(Q.Item,{visible:t,location:"before",widget:"dxButton",cssClass:"menu-button",children:Object(j.jsx)($.a,{icon:"menu",stylingMode:"text",onClick:a})}),Object(j.jsx)(Q.Item,{location:"before",cssClass:"header-title",text:n,visible:!!n}),Object(j.jsx)(Q.Item,{location:"after",locateInMenu:"auto",menuItemTemplate:"userPanelTemplate",children:Object(j.jsx)($.a,{className:"user-button authorization",width:210,height:"100%",stylingMode:"text",children:Object(j.jsx)(ae,{menuMode:"context"})})}),Object(j.jsx)(ce.Template,{name:"userPanelTemplate",children:Object(j.jsx)(ae,{menuMode:"list"})})]})})},se=(n(616),function(e){var t=Object.assign({},e);return Object(j.jsx)("footer",Object(u.a)({className:"footer"},t))}),ie=n(34),oe=n.n(ie),le=n(165),ue=n.n(le),de=n(149),je=(n(617),function(){var e=Object(J.g)(),t=P().signIn,n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1],o=Object(a.useRef)({}),l=Object(a.useCallback)(function(){var e=Object(h.a)(x.a.mark((function e(n){var a,c,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=o.current,c=a.email,r=a.password,s(!0),e.next=5,t(c,r);case 5:(i=e.sent).isOk||(s(!1),Object(de.a)(i.message,"error",2e3));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),u=Object(a.useCallback)((function(){e.push("/create-account")}),[e]);return Object(j.jsx)("form",{className:"login-form",onSubmit:l,children:Object(j.jsxs)(oe.a,{formData:o.current,disabled:r,children:[Object(j.jsxs)(ie.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:be,children:[Object(j.jsx)(ie.RequiredRule,{message:"Email is required"}),Object(j.jsx)(ie.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsxs)(ie.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:me,children:[Object(j.jsx)(ie.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsx)(ie.Item,{dataField:"rememberMe",editorType:"dxCheckBox",editorOptions:pe,children:Object(j.jsx)(ie.Label,{visible:!1})}),Object(j.jsx)(ie.ButtonItem,{children:Object(j.jsx)(ie.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ue.a,{width:"24px",height:"24px",visible:!0}):"Sign In"})})}),Object(j.jsx)(ie.Item,{children:Object(j.jsx)("div",{className:"link",children:Object(j.jsx)(i.b,{to:"/reset-password",children:"Forgot password?"})})}),Object(j.jsx)(ie.ButtonItem,{children:Object(j.jsx)(ie.ButtonOptions,{text:"Create an account",width:"100%",onClick:u})})]})})}),be={stylingMode:"filled",placeholder:"Email",mode:"email"},me={stylingMode:"filled",placeholder:"Password",mode:"password"},pe={text:"Remember me",elementAttr:{class:"form-text"}},Oe=(n(618),function(e){var t=Object(J.g)(),n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1],o=Object(a.useRef)({}),l=Object(a.useCallback)(function(){var e=Object(h.a)(x.a.mark((function e(n){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=o.current.email,s(!0),e.next=5,M(a);case 5:c=e.sent,s(!1),c.isOk?(t.push("/login"),Object(de.a)("We've sent a link to reset your password. Check your inbox.","success",2500)):Object(de.a)(c.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]);return Object(j.jsx)("form",{className:"reset-password-form",onSubmit:l,children:Object(j.jsxs)(oe.a,{formData:o.current,disabled:r,children:[Object(j.jsxs)(ie.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:xe,children:[Object(j.jsx)(ie.RequiredRule,{message:"Email is required"}),Object(j.jsx)(ie.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsx)(ie.ButtonItem,{children:Object(j.jsx)(ie.ButtonOptions,{elementAttr:he,width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ue.a,{width:"24px",height:"24px",visible:!0}):"Reset my password"})})}),Object(j.jsx)(ie.Item,{children:Object(j.jsxs)("div",{className:"login-link",children:["Return to ",Object(j.jsx)(i.b,{to:"/login",children:"Sign In"})]})})]})})}),xe={stylingMode:"filled",placeholder:"Email",mode:"email"},he={class:"submit-button"},fe=(n(619),function(e){var t=Object(J.g)(),n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1],o=Object(a.useRef)({}),l=Object(a.useCallback)(function(){var e=Object(h.a)(x.a.mark((function e(n){var a,c,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=o.current,c=a.email,r=a.password,s(!0),e.next=5,y(c,r);case 5:i=e.sent,s(!1),i.isOk?t.push("/login"):Object(de.a)(i.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]),u=Object(a.useCallback)((function(e){return e.value===o.current.password}),[]);return Object(j.jsx)("form",{className:"create-account-form",onSubmit:l,children:Object(j.jsxs)(oe.a,{formData:o.current,disabled:r,children:[Object(j.jsxs)(ie.Item,{dataField:"email",editorType:"dxTextBox",editorOptions:ve,children:[Object(j.jsx)(ie.RequiredRule,{message:"Email is required"}),Object(j.jsx)(ie.EmailRule,{message:"Email is invalid"}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsxs)(ie.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:ge,children:[Object(j.jsx)(ie.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsxs)(ie.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:we,children:[Object(j.jsx)(ie.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ie.CustomRule,{message:"Passwords do not match",validationCallback:u}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsx)(ie.Item,{children:Object(j.jsxs)("div",{className:"policy-info",children:["By creating an account, you agree to the ",Object(j.jsx)(i.b,{to:"#",children:"Terms of Service"})," and ",Object(j.jsx)(i.b,{to:"#",children:"Privacy Policy"})]})}),Object(j.jsx)(ie.ButtonItem,{children:Object(j.jsx)(ie.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ue.a,{width:"24px",height:"24px",visible:!0}):"Create a new account"})})}),Object(j.jsx)(ie.Item,{children:Object(j.jsxs)("div",{className:"login-link",children:["Have an account? ",Object(j.jsx)(i.b,{to:"/login",children:"Sign In"})]})})]})})}),ve={stylingMode:"filled",placeholder:"Email",mode:"email"},ge={stylingMode:"filled",placeholder:"Password",mode:"password"},we={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},ke=function(e){var t=Object(J.g)(),n=Object(a.useState)(!1),c=Object(d.a)(n,2),r=c[0],s=c[1],i=Object(a.useRef)({}),o=Object(J.h)().recoveryCode,l=Object(a.useCallback)(function(){var e=Object(h.a)(x.a.mark((function e(n){var a,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=i.current.password,s(!0),e.next=5,N(a,o);case 5:c=e.sent,s(!1),c.isOk?t.push("/login"):Object(de.a)(c.message,"error",2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,o]),u=Object(a.useCallback)((function(e){return e.value===i.current.password}),[]);return Object(j.jsx)("form",{onSubmit:l,children:Object(j.jsxs)(oe.a,{formData:i.current,disabled:r,children:[Object(j.jsxs)(ie.Item,{dataField:"password",editorType:"dxTextBox",editorOptions:ye,children:[Object(j.jsx)(ie.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsxs)(ie.Item,{dataField:"confirmedPassword",editorType:"dxTextBox",editorOptions:Ce,children:[Object(j.jsx)(ie.RequiredRule,{message:"Password is required"}),Object(j.jsx)(ie.CustomRule,{message:"Passwords do not match",validationCallback:u}),Object(j.jsx)(ie.Label,{visible:!1})]}),Object(j.jsx)(ie.ButtonItem,{children:Object(j.jsx)(ie.ButtonOptions,{width:"100%",type:"default",useSubmitBehavior:!0,children:Object(j.jsx)("span",{className:"dx-button-text",children:r?Object(j.jsx)(ue.a,{width:"24px",height:"24px",visible:!0}):"Continue"})})})]})})},ye={stylingMode:"filled",placeholder:"Password",mode:"password"},Ce={stylingMode:"filled",placeholder:"Confirm Password",mode:"password"},Ne=n(391),Ie=n.n(Ne),Me=[{text:"CRM",icon:"user",path:"",items:[{text:"Contact List",path:"/crm-contact-list"}]}],Se=(n(620),n(223)),Re=function(e){var t=e.children,n=e.selectedItemChanged,c=e.openMenu,r=e.compactMode,s=e.onMenuReady,i=B().isLarge;var o=Object(a.useMemo)((function(){return Me.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(u.a)(Object(u.a)({},e),{},{expanded:i})}))}),[]),l=m().navigationData.currentPath,d=Object(a.useRef)(),b=Object(a.useRef)(),p=Object(a.useCallback)((function(e){var t=b.current;t&&Se.off(t,"dxclick"),b.current=e,Se.on(e,"dxclick",(function(e){c(e)}))}),[c]);return Object(a.useEffect)((function(){var e=d.current&&d.current.instance;e&&(void 0!==l&&(e.selectItem(l),e.expandItem(l)),r&&e.collapseAll())}),[l,r]),Object(j.jsxs)("div",{className:"dx-swatch-additional side-navigation-menu",ref:p,children:[t,Object(j.jsx)("div",{className:"menu-container",children:Object(j.jsx)(Ie.a,{ref:d,items:o,keyExpr:"path",selectionMode:"single",focusStateEnabled:!1,expandEvent:"click",onItemClick:n,onContentReady:s,width:"100%"})})]})};n(621);function Te(){var e=B(),t=e.isSmall,n=e.isMedium,c=Object(a.useState)(t||n),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(a.useCallback)((function(){s&&setTimeout((function(){return i(!1)}))}),[s]);return[s?"pre-init-blink-fix":"",o]}var Pe=function(e){var t=e.title,n=e.children,r=Object(a.useRef)(),s=Object(J.g)(),i=B(),o=i.isXSmall,l=i.isLarge,u=Te(),b=Object(d.a)(u,2),m=b[0],p=b[1],O=Object(a.useState)(l?Be.Opened:Be.Closed),x=Object(d.a)(O,2),h=x[0],f=x[1],v=Object(a.useCallback)((function(e){var t=e.event;f((function(e){return e===Be.Closed?Be.Opened:Be.Closed})),t.stopPropagation()}),[]),g=Object(a.useCallback)((function(){f((function(e){return e===Be.Closed?Be.TemporaryOpened:e}))}),[]),w=Object(a.useCallback)((function(){f((function(e){return e===Be.Closed||l?e:Be.Closed}))}),[l]),k=Object(a.useCallback)((function(e){var t=e.itemData.path,n=e.event,a=e.node;h!==Be.Closed&&t&&!a.selected?(s.push(t),r.current.instance.scrollTo(0),l&&h!==Be.TemporaryOpened||(f(Be.Closed),n.stopPropagation())):n.preventDefault()}),[s,h,l]);return Object(j.jsxs)("div",{className:"side-nav-outer-toolbar",children:[Object(j.jsx)(re,{menuToggleEnabled:!0,toggleMenu:v,title:t}),Object(j.jsxs)(H.a,{className:["drawer",m].join(" "),position:"before",closeOnOutsideClick:w,openedStateMode:l?"shrink":"overlap",revealMode:o?"slide":"expand",minSize:o?0:60,maxSize:250,shading:!l,opened:h!==Be.Closed,template:"menu",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(K.a,{ref:r,className:"layout-body with-footer",children:[Object(j.jsx)("div",{className:"content",children:c.a.Children.map(n,(function(e){return e.type!==se&&e}))}),Object(j.jsx)("div",{className:"content-block",children:c.a.Children.map(n,(function(e){return e.type===se&&e}))})]})}),Object(j.jsx)(ce.Template,{name:"menu",children:Object(j.jsx)(Re,{compactMode:h===Be.Closed,selectedItemChanged:k,openMenu:g,onMenuReady:p})})]})]})},Be={Closed:1,Opened:2,TemporaryOpened:3},Ee=(n(622),n(623),function(e){var t=e.title,n=e.description,a=e.children;return Object(j.jsx)(K.a,{height:"100%",width:"100%",className:"with-footer single-card",children:Object(j.jsxs)("div",{className:"dx-card content",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"title",children:t}),Object(j.jsx)("div",{className:"description",children:n})]}),a]})})}),Fe=function(){return Object(j.jsxs)(Pe,{title:G,children:[Object(j.jsxs)(J.d,{children:[W.map((function(e){var t=e.path,n=e.component;return Object(j.jsx)(J.b,{exact:!0,path:t,component:n},t)})),Object(j.jsx)(J.a,{to:"/crm-contact-list"})]}),Object(j.jsxs)(se,{children:["Copyright \xa9 2011-",(new Date).getFullYear()," ",G," Inc.",Object(j.jsx)("br",{}),"All trademarks or registered trademarks are property of their respective owners."]})]})},Le=function(){return Object(j.jsxs)(J.d,{children:[Object(j.jsx)(J.b,{exact:!0,path:"/login",children:Object(j.jsx)(Ee,{title:"Sign In",children:Object(j.jsx)(je,{})})}),Object(j.jsx)(J.b,{exact:!0,path:"/create-account",children:Object(j.jsx)(Ee,{title:"Sign Up",children:Object(j.jsx)(fe,{})})}),Object(j.jsx)(J.b,{exact:!0,path:"/reset-password",children:Object(j.jsx)(Ee,{title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email.",children:Object(j.jsx)(Oe,{})})}),Object(j.jsx)(J.b,{exact:!0,path:"/change-password/:recoveryCode",children:Object(j.jsx)(Ee,{title:"Change Password",children:Object(j.jsx)(ke,{})})}),Object(j.jsx)(J.a,{to:"/login"})]})};function De(){var e=P(),t=e.user;return e.loading?Object(j.jsx)(l.a,{visible:!0}):t?Object(j.jsx)(Fe,{}):Object(j.jsx)(Le,{})}var qe=function(){var e=function(){var e=B();return e.isLarge?"screen-large":e.isMedium?"screen-medium":e.isSmall?"screen-small":"screen-x-small"}();return Object(j.jsx)(i.a,{children:Object(j.jsx)(R,{children:Object(j.jsx)(p,{children:Object(j.jsx)("div",{className:"app ".concat(e),children:Object(j.jsx)(De,{})})})})})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,631)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(qe,{})}),document.getElementById("root")),Ae()}},[[625,1,2]]]);