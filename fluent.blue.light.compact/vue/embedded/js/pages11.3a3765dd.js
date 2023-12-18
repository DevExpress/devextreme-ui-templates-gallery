"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[5071,2076,4240,6447,143,1869],{81640:function(e,a,t){t.d(a,{F:function(){return i},b:function(){return l}});const l=["Salaried","Commission","Terminated"],i={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},30972:function(e,a,t){t.d(a,{CN:function(){return i},T4:function(){return o},p6:function(){return d}});var l=t(88980);function i(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function o(e,a){return(0,l.uf)(e,{type:"currency",precision:a||0,currency:"USD"})}function d(e){return(0,l.p6)(new Date(e),"MM/dd/yyyy")}},58849:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var l=t(49256),i=t(47919),o=t(86187),d=t(45991),n=t(65017),s=t(1755);const u=(0,l._)("div",{class:"h-separator"},null,-1);var r=(0,l.aZ)({__name:"change-profile-password-form",props:{visible:{type:Boolean,default:!1}},emits:["update:visible"],setup(e,{emit:a}){const t=(0,i.iH)(null),r=(0,i.iH)(!1),c=(0,i.iH)(!0),p=a,m={},v=[{type:"compare",message:"Passwords do not match",comparisonTarget:()=>m.password}];function f(e){r.value=e,p("update:visible",e)}function w(){const e=Object.entries(m);c.value=!t.value?.isValid()||3!==e.length||!!e.find((([,e])=>!e))}function b(){p("update:visible",!1)}function g(){(0,o.Z)({message:"Password Changed",position:{at:"bottom center",my:"bottom center"}},"success"),b()}return(e,a)=>((0,l.wg)(),(0,l.j4)(n.Z,{title:"Change Password",ref_key:"formPopup",ref:t,visible:e.visible,"is-save-disabled":c.value,"onUpdate:visible":f,width:360,height:410,"wrapper-attr":{class:"change-profile-password-popup"},onSave:a[6]||(a[6]=e=>g())},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.Iq),{"label-mode":"outside","label-location":"top","show-colon-after-label":!0},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.kN),{text:"Current Password"}),(0,l.Wm)(s["default"],{modelValue:m["currentPassword"],"onUpdate:modelValue":a[0]||(a[0]=e=>m["currentPassword"]=e),placeholder:"Current Password",onValueChanged:a[1]||(a[1]=e=>w())},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,i.SU)(d.wy),null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)((0,i.SU)(d.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.kN),{text:"Password"}),(0,l.Wm)(s["default"],{modelValue:m["password"],"onUpdate:modelValue":a[2]||(a[2]=e=>m["password"]=e),placeholder:"Password",onValueChanged:a[3]||(a[3]=e=>w())},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,i.SU)(d.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.kN),{text:"Confirm Password"}),(0,l.Wm)(s["default"],{modelValue:m["confirmedPassword"],"onUpdate:modelValue":a[4]||(a[4]=e=>m["confirmedPassword"]=e),placeholder:"Confirm Password",validators:v,onValueChanged:a[5]||(a[5]=e=>w())},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["visible","is-save-disabled"]))}});const c=r;var p=c},1755:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var l=t(49256),i=t(47919),o=t(47250),d=t(1122),n=(0,l.aZ)({__name:"password-text-box",props:{value:{default:""},stylingMode:{default:"filled"},placeholder:{default:""},validators:{default:()=>[]}},emits:["update:model-value"],setup(e,{emit:a}){const t=e,n=a,s=(0,i.iH)(t.value),u=(0,i.iH)(!0);function r(e){s.value=e,n("update:model-value",e)}function c(){u.value=!u.value}return(e,a)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(o.ki),{"model-value":e.value,"styling-mode":e.stylingMode,placeholder:e.placeholder,mode:u.value?"password":"text","value-change-event":"keyup input change","onUpdate:modelValue":r},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.JV),{name:"today",location:"after",options:{visible:s.value?.length>0,icon:u.value?"eyeopen":"eyeclose",hoverStateEnabled:!1,activeStateEnabled:!1,stylingMode:"text",onClick:c}},null,8,["options"]),(0,l.Wm)((0,i.SU)(d.rP),{"validation-rules":[{type:"required",message:"Password is required"},...e.validators]},null,8,["validation-rules"])])),_:1},8,["model-value","styling-mode","placeholder","mode"]))}});const s=n;var u=s},64894:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var l=t(49256),i=t(47919),o=t(64701),d=t(98157),n=t(47250);const s={class:"pictured-item-select-field"},u=["alt","src"],r=["alt","src"];var c=(0,l.aZ)({__name:"pictured-item-select-box",props:{label:{default:""},modelValue:{default:""},items:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=a;function c(e){t("update:modelValue",e.value)}return(e,a)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(d.L),{class:"pictured-item-select-box",label:e.label,value:e.modelValue,items:e.items,"drop-down-options":{wrapperAttr:{class:"pictured-item-select-box-dropdown"}},"value-expr":"name","styling-mode":"filled","label-mode":"hidden",width:"100%","field-template":"field",onValueChanged:c},{field:(0,l.w5)((({data:a})=>[(0,l._)("div",s,[e.modelValue?((0,l.wg)(),(0,l.iD)("img",{key:0,alt:a?.name,class:"pictured-item-image",src:`data:image/png;base64,${a?.image}`},null,8,u)):(0,l.kq)("",!0),(0,l.Wm)((0,i.SU)(n.ki),{"hover-state-enabled":!1,"input-attr":{class:"pictured-item-editor-input"},"read-only":!0,value:a?.name},null,8,["value"])])])),item:(0,l.w5)((({data:e})=>[(0,l._)("div",null,[(0,l._)("img",{alt:e?.name,class:"pictured-item-image",src:`data:image/png;base64,${e?.image}`},null,8,r),(0,l.Uk)(" "+(0,o.zw)(e?.name),1)])])),_:1},8,["label","value","items"]))}}),p=t(97179);const m=(0,p.Z)(c,[["__scopeId","data-v-d3006e62"]]);var v=m},99306:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var l=t(49256),i=t(64701),o=t(47919),d=t(45991),n=t(28828),s=t(64894),u=t(38098);const r={class:"panel"},c={class:"title-text panel-header"},p={class:"form-container"};var m=(0,l.aZ)({__name:"profile-card",props:{title:{},cardData:{},colCount:{default:2},items:{}},emits:["data-changed"],setup(e,{emit:a}){const t=e,m=a,v=(0,o.qj)(t.cardData),f=(0,o.iH)(null);function w(e,a){const{isValid:t}=f.value?.instance.validate()||{};t&&(e&&(v[e]=a),m("data-changed",v))}return(e,a)=>((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",c,(0,i.zw)(e.title),1),(0,l._)("div",p,[(0,l.WI)(e.$slots,"default"),(0,l.Wm)((0,o.SU)(d.Iq),{ref_key:"form",ref:f,"form-data":t.cardData,"show-colon-after-label":!0,"col-count":(0,o.SU)(n.Br).isXSmall?2:e.colCount,"screen-by-width":(0,o.SU)(n.JW),"label-location":"top","label-mode":"outside","on-field-data-changed":e=>w(e.dataField,e.value)},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.items,(t=>((0,l.wg)(),(0,l.j4)((0,o.SU)(d.wy),{key:t.dataField,"data-field":t.dataField,"editor-type":t.editorType,"editor-options":{stylingMode:"filled",valueChangeEvent:"input",...t.editorOptions},"col-span":t.colSpan},{default:(0,l.w5)((()=>[t.label?((0,l.wg)(),(0,l.j4)((0,o.SU)(d.kN),{key:0,text:t.label},null,8,["text"])):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.validators,(e=>((0,l.wg)(),(0,l.j4)((0,o.SU)(d.n8),{key:e,type:e.type},null,8,["type"])))),128)),"status"===t.dataField?((0,l.wg)(),(0,l.j4)(u["default"],{key:1,items:t.itemsList,"model-value":e.cardData[t.dataField],"styling-mode":"filled","label-mode":"hidden","onUpdate:modelValue":a[0]||(a[0]=e=>w())},null,8,["items","model-value"])):"supervisor"===t.dataField?((0,l.wg)(),(0,l.j4)(s["default"],{key:2,label:t.label,"model-value":e.cardData[t.dataField],items:t.itemsList,"onUpdate:modelValue":a[1]||(a[1]=e=>w())},null,8,["label","model-value","items"])):(0,l.kq)("",!0)])),_:2},1032,["data-field","editor-type","editor-options","col-span"])))),128))])),_:1},8,["form-data","col-count","screen-by-width","on-field-data-changed"])])]))}}),v=t(97179);const f=(0,v.Z)(m,[["__scopeId","data-v-27fe89c6"]]);var w=f},38098:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var l=t(49256),i=t(47919),o=t(64701),d=t(98157),n=t(47250),s=t(24935);const u={class:"status-editor-field"};var r=(0,l.aZ)({__name:"status-select-box",props:{modelValue:{default:""},items:{},readOnly:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},labelMode:{default:""},stylingMode:{default:""},classList:{default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const t=a;function r(e){t("update:modelValue",e.value)}return(e,a)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(d.L),{label:"Status",value:e.modelValue,class:(0,o.C_)(e.classList),onValueChanged:r,items:e.items,"read-only":e.readOnly,"styling-mode":e.stylingMode,"label-mode":e.labelMode,width:"100%","field-template":"field"},{field:(0,l.w5)((({data:e})=>[(0,l._)("div",u,[(0,l.Wm)(s.Z,{class:"status-indicator","show-text":!1,value:e},null,8,["value"]),(0,l.Wm)((0,i.SU)(n.ki),{class:"status-{{data.toLowerCase()}}","hover-state-enabled":!1,"input-attr":{class:`status-editor-input contact-status status-${e?.toLowerCase()}`},"read-only":!0,value:e},null,8,["input-attr","value"])])])),item:(0,l.w5)((({data:e})=>[(0,l.Wm)(s.Z,{value:e},null,8,["value"])])),_:1},8,["value","class","items","read-only","styling-mode","label-mode"]))}}),c=t(97179);const p=(0,c.Z)(r,[["__scopeId","data-v-203e2830"]]);var m=p},24935:function(e,a,t){t.d(a,{Z:function(){return s}});var l=t(49256),i=t(64701),o=(0,l.aZ)({__name:"contact-status",props:{value:{},showText:{type:Boolean,default:!0}},setup(e){const a=e;return(e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:(0,i.C_)("status contact-status status-"+a.value?.toLowerCase())},(0,i.zw)(a.showText?a.value:""),3))}}),d=t(97179);const n=(0,d.Z)(o,[["__scopeId","data-v-3568e1f6"]]);var s=n},99462:function(e,a,t){t.d(a,{Z:function(){return c}});var l=t(49256),i=t(64701),o=t(47919),d=t(16568);const n={key:0,class:"edit-icon dx-icon-photooutline"};var s=(0,l.aZ)({__name:"form-photo",props:{link:{default:""},size:{default:124},editable:{type:Boolean,default:!1}},setup(e){const a=(0,o.iH)(null),t=e;return(e,s)=>((0,l.wg)(),(0,l.iD)("div",{ref_key:"hostRef",ref:a,class:"host"},[(0,l._)("div",{style:(0,i.j5)({width:t.size+"px",height:t.size+"px",maxHeight:t.size+"px",backgroundImage:`url('data:image/png;base64,${t.link}')`}),class:(0,i.C_)(["photo",["photo",e.editable?" editable":""]])},[e.editable?((0,l.wg)(),(0,l.iD)("i",n)):(0,l.kq)("",!0)],6),e.editable?((0,l.wg)(),(0,l.j4)((0,o.SU)(d.c),{key:0,"dialog-trigger":a.value,visible:!1,accept:"image/*"},null,8,["dialog-trigger"])):(0,l.kq)("",!0)],512))}}),u=t(97179);const r=(0,u.Z)(s,[["__scopeId","data-v-0848bed0"]]);var c=r},65017:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(49256),i=t(47919),o=t(64701),d=t(74197),n=t(37252),s=t(28828),u=t(67699),r=(0,l.aZ)({__name:"form-popup",props:{isSaveDisabled:{type:Boolean,default:!1},title:{},visible:{type:Boolean,default:!1},width:{default:480},height:{default:"auto"},wrapperAttr:{default:()=>({})}},emits:["save","update:visible"],setup(e,{expose:a,emit:t}){const r=e,c=(0,i.iH)(),p=t,m=(0,i.iH)(r.visible);function v(e){const a={class:"",...e};return a.class+=" form-popup",a}const f=(0,i.iH)(v(r.wrapperAttr)),w=(0,i.iH)();(0,l.YP)((()=>r.visible),(e=>{m.value=e})),(0,l.YP)((()=>r.wrapperAttr),(e=>{f.value=v(e)}));const b=()=>{m.value=!1,c.value?.instance.reset(),p("update:visible",!1)},g=()=>{c.value?.instance.validate().isValid&&(b(),p("save"))},y=()=>{b()};function h(){c.value?.instance.reset(),b()}function _(){return c.value?.instance.validate().isValid}return a({isValid:_}),(e,a)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(d.fB),{ref_key:"popup",ref:w,title:r.title,visible:m.value,"full-screen":(0,i.SU)(s.Br).isXSmall,width:e.width,"wrapper-attr":f.value,height:e.height,onHidden:a[2]||(a[2]=e=>h()),onOptionChanged:a[3]||(a[3]=()=>w.value?.instance?.repaint())},{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(d.DW),{toolbar:"bottom",location:"center"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,o.C_)({"form-popup-buttons-container":!0,"flex-buttons":e.width<=360})},[(0,l.Wm)((0,i.SU)(n.J),{text:"Cancel","styling-mode":"outlined",type:"normal",onClick:a[0]||(a[0]=e=>y())}),(0,l.Wm)((0,i.SU)(n.J),{text:"Save",disabled:e.isSaveDisabled,"styling-mode":"contained",type:"default",onClick:a[1]||(a[1]=e=>g())},null,8,["disabled"])],2)])),_:1}),(0,l.Wm)((0,i.SU)(u.G),{ref_key:"validationGroup",ref:c},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},512)])),_:3},8,["title","visible","full-screen","width","wrapper-attr","height"]))}}),c=t(97179);const p=(0,c.Z)(r,[["__scopeId","data-v-0a86a163"]]);var m=p},75149:function(e,a,t){t.r(a),t.d(a,{default:function(){return z}});var l=t(49256),i=t(64701),o=t(47919),d=t(69067),n=t(81507),s=t(9533),u=t(37252),r=t(28828),c=t(99462),p=t(86187),m=t(99306),v=t(58849),f=t(23954),w=t(30972),b=t(81640);const g=e=>((0,l.dD)("data-v-15563360"),e=e(),(0,l.Cn)(),e),y={class:"view-wrapper"},h=g((()=>(0,l._)("div",{class:"header-text"}," User Profile ",-1))),_={class:"cards-container"},S={class:"basic-info-top-item"},U={class:"title-text"},x={class:"subtitle-text with-clipboard-copy"},k={class:"contacts-top-item"},C=g((()=>(0,l._)("div",{class:"image-wrapper"},[(0,l._)("i",{class:"dx-icon dx-icon-mention"})],-1))),W={class:"title-text"},V={class:"subtitle-text with-clipboard-copy"},D={class:"address-top-item"},Z=g((()=>(0,l._)("div",{class:"image-wrapper"},[(0,l._)("i",{class:"dx-icon dx-icon-map"})],-1))),F={class:"title-text"};var H=(0,l.aZ)({__name:"user-profile",setup(e){const a=(0,o.iH)(!1),t=(0,o.iH)(!0),g=(0,o.iH)({}),H=(0,o.iH)([]),P=(0,o.iH)(!1),B=(0,o.iH)(!1);let z=null;const T=[{dataField:"firstName",colSpan:2},{dataField:"lastName",colSpan:2},{dataField:"department",editorType:"dxSelectBox",colSpan:1,editorOptions:{items:["UI/UX","Backend Developers"]}},{dataField:"position",editorType:"dxSelectBox",colSpan:1,editorOptions:{items:["Designer","Developer","Technical Writer"]}},{dataField:"hiredDate",editorType:"dxDateBox",colSpan:1},{dataField:"birthDate",colSpan:1,editorType:"dxDateBox"}],j=(0,o.qj)([{dataField:"phone",editorOptions:{mask:"+1(000)000-0000"}},{dataField:"email",validators:[{type:"email"}]},{dataField:"domainUsername",colSpan:2},{dataField:"status",colSpan:2,itemsList:b.b},{dataField:"supervisor",label:"Supervisor",colSpan:2,itemsList:H,editorType:"dxSelectBox"}]),I=[{dataField:"country"},{dataField:"city"},{dataField:"state",colSpan:2,label:"State/province/area",editorOptions:{label:"State/province/area"}},{dataField:"address",colSpan:2},{dataField:"zipCode",editorType:"dxNumberBox",colSpan:2}];function N(){P.value=!0}function q({reachedTop:e=!1}){B.value=!e}function L(){a.value=!0}function J(){(0,p.Z)({message:"Data saved",position:{at:"bottom center",my:"bottom center"}},"success"),a.value=!1,z={...g.value}}function O(){g.value={...z}}function M(e,{event:a}){window.navigator.clipboard?.writeText(e);const t="Text copied";(0,p.Z)({message:t,minWidth:`${t.length+2}ch`,width:"auto",position:{of:a.target,offset:"0 -30"}},"info",500)}return(0,l.YP)(g,(e=>{setTimeout((()=>{a.value=JSON.stringify(e)!==JSON.stringify(z)}),0)})),Promise.all([(0,f.Ai)(22),(0,f.EL)()]).then((([e,a])=>{g.value=e,H.value=a,z={...e},t.value=!1})),(e,p)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",y,[(0,l._)("div",{class:(0,i.C_)({scrolled:B.value,"toolbar-wrapper":!0,"theme-dependent":!0})},[(0,l.Wm)((0,o.SU)(s.sc),{class:"theme-dependent"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.wy),{location:"before"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{location:"after","locate-in-menu":"never"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(u.J),{text:"Cancel","styling-mode":"outlined",type:"normal",disabled:!a.value,onClick:p[0]||(p[0]=e=>O())},null,8,["disabled"])])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{location:"after","locate-in-menu":"never"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(u.J),{disabled:!a.value,text:"Save",icon:"save",type:"default","styling-mode":"contained",onClick:p[1]||(p[1]=e=>J())},null,8,["disabled"])])),_:1})])),_:1})],2),(0,l.Wm)((0,o.SU)(n.Gr),{visible:t.value,"show-pane":!1,position:{of:".view-wrapper"},container:".view-wrapper"},null,8,["visible","position"]),t.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)((0,o.SU)(d.Z),{key:0,class:"view-wrapper-scroll",onScroll:q},{default:(0,l.w5)((()=>[(0,l._)("div",_,[(0,l.Wm)(m["default"],{class:"profile-card basic-info-card",title:"Basic Info","col-count":4,"card-data":g.value,items:T,onDataChanged:p[4]||(p[4]=e=>L())},{default:(0,l.w5)((()=>[(0,l._)("div",S,[(0,l.Wm)(c.Z,{class:"form-photo",link:g.value?.image,editable:!0,size:80},null,8,["link"]),(0,l._)("div",null,[(0,l._)("div",U,(0,i.zw)(g.value.name),1),(0,l._)("div",x,[(0,l.Uk)(" ID: "+(0,i.zw)(g.value.id)+" ",1),(0,l.Wm)((0,o.SU)(u.J),{icon:"copy",class:"copy-clipboard-button","styling-mode":"text",onClick:p[2]||(p[2]=e=>M(g.value.id,e)),"active-state-enabled":!1,"focus-state-enabled":!1,"hover-state-enabled":!1})]),(0,l.Wm)((0,o.SU)(u.J),{text:"Change Password",icon:(0,o.SU)(r.Br).isXSmall?null:"lock",class:"change-password-button","styling-mode":"contained",onClick:p[3]||(p[3]=e=>N())},null,8,["icon"])])])])),_:1},8,["card-data"]),(0,l.Wm)(m["default"],{class:"profile-card contacts-card",title:"Contacts","card-data":g.value,items:j,onDataChanged:p[6]||(p[6]=e=>L())},{default:(0,l.w5)((()=>[(0,l._)("div",k,[C,(0,l._)("div",null,[(0,l._)("div",W,(0,i.zw)((0,o.SU)(w.CN)(g.value.phone)),1),(0,l._)("div",V,[(0,l.Uk)((0,i.zw)(g.value.email)+" ",1),(0,l.Wm)((0,o.SU)(u.J),{icon:"copy",class:"copy-clipboard-button","styling-mode":"text",onClick:p[5]||(p[5]=e=>M(g.value.email,e)),"active-state-enabled":!1,"focus-state-enabled":!1,"hover-state-enabled":!1})])])])])),_:1},8,["card-data","items"]),(0,l.Wm)(m["default"],{class:"profile-card address-card",title:"Address","card-data":g.value,items:I,onDataChanged:p[7]||(p[7]=e=>L())},{default:(0,l.w5)((()=>[(0,l._)("div",D,[Z,(0,l._)("div",null,[(0,l._)("div",F,(0,i.zw)(g.value.address)+", "+(0,i.zw)(g.value.city)+", "+(0,i.zw)(g.value.state)+", "+(0,i.zw)(g.value.country),1)])])])),_:1},8,["card-data"])])])),_:1}))]),(0,l.Wm)(v["default"],{visible:P.value,"onUpdate:visible":p[8]||(p[8]=e=>P.value=e)},null,8,["visible"])],64))}}),P=t(97179);const B=(0,P.Z)(H,[["__scopeId","data-v-15563360"]]);var z=B}}]);