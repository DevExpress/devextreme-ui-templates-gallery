"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8060],{99660:function(t,e,a){a.d(e,{CN:function(){return i},T4:function(){return l},p6:function(){return o}});var n=a(23142);function i(t){return String(t).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function l(t){return(0,n.uf)(t,{type:"currency",currency:"USD"})}function o(t){return(0,n.p6)(new Date(t),"MM/dd/yyyy")}},89661:function(t,e,a){a.d(e,{Z:function(){return g}});var n=a(73396),i=a(87139),l=a(44870),o=a(4702),s=a(20788),u=a(99660),d=a(85219);const c={class:"activity"},r={class:"name"},v={key:0};var m=(0,n.aZ)({__name:"card-activities",props:{isLoading:{type:Boolean,default:!0},showBy:{type:Boolean,default:!1},items:null},setup(t){const e=t,a=[{icon:"overflow",items:[{text:"View details"},{text:"Delete"}]}];return(m,f)=>((0,n.wg)(),(0,n.iD)("div",{id:"activities-list",class:(0,i.C_)({load:!t.isLoading})},[(0,n.Wm)(d.Z,{"is-loading":e.isLoading,"container-selector":"#activities-list"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(o.DxList),{class:"activities-list",items:e.items,"scrolling-enabled":!1},{item:(0,n.w5)((({data:t})=>[(0,n._)("div",null,[(0,n._)("div",c,[(0,n._)("div",r,(0,i.zw)(t.name),1),(0,n._)("div",{class:(0,i.C_)(["date",{by:e.showBy}])},[(0,n._)("span",null,(0,i.zw)((0,l.SU)(u.p6)(new Date(t.date))),1),e.showBy?((0,n.wg)(),(0,n.iD)("span",v,"by")):(0,n.kq)("",!0),(0,n._)("span",null,(0,i.zw)(t.manager),1)],2),(0,n.Wm)((0,l.SU)(s.DxMenu),{class:"overflow-menu",items:a})])])])),_:1},8,["items"])])),_:1},8,["is-loading"])],2))}}),f=a(40089);const p=(0,f.Z)(m,[["__scopeId","data-v-fb720686"]]);var g=p},66329:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(73396),i=a(44870),l=a(87139),o=a(86050),s=a(16453),u=a(6224),d=a(68389),c=a(78517),r=a(45903),v=a(99660),m=a(85219);const f={class:"messages",id:"card-messages"},p={class:"input-content"},g={class:"messages-content"},w={class:"message-container"},_={class:"avatar"},x={class:"message dx-card"},D={class:"message-title"},S={class:"left-title"},W={class:"subject"},y={class:"message-text"};var U=(0,n.aZ)({__name:"card-messages",props:{isLoading:{type:Boolean,default:!0},user:{default:""},messages:{default:()=>[]}},setup(t){const e=t,a=(0,i.iH)(e.messages),U=(0,i.iH)(""),b=(0,i.iH)("");function I(){b.value="",U.value=""}function h(t){return t.split(" ").map((t=>t[0])).join("")}function k(t){return t.replace("{username}",e.user)}function Z(){if(""===U.value||""===b.value)return;const t={subject:b.value,text:U.value,manager:e.user,date:new Date};a.value.push(t),I()}return(0,n.YP)((()=>e.messages),(t=>{a.value=t})),(t,I)=>((0,n.wg)(),(0,n.iD)("div",f,[(0,n.Wm)(m.Z,{"is-loading":e.isLoading,"container-selector":"#card-messages"},{default:(0,n.w5)((()=>[(0,n._)("div",p,[(0,n.Wm)((0,i.SU)(s.DxTextBox),{label:"Subject","styling-mode":"outlined",value:b.value,onValueChanged:I[0]||(I[0]=t=>b.value=t.value)},null,8,["value"]),(0,n.Wm)((0,i.SU)(o.DxTextArea),{label:"Message","styling-mode":"outlined",value:U.value,height:150,onValueChanged:I[1]||(I[1]=t=>U.value=t.value)},null,8,["value"]),(0,n.Wm)((0,i.SU)(d.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(d.DxItem),{location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(c.DxFileUploader),{class:"file-uploader","label-text":"","select-button-text":"Attach file"})])),_:1}),(0,n.Wm)((0,i.SU)(d.DxItem),{widget:"dxButton",location:"after",options:{text:"Send",stylingMode:"outlined",type:"default",onClick:Z}},null,8,["options"])])),_:1})]),(0,n.Wm)((0,i.SU)(r.DxScrollView),null,{default:(0,n.w5)((()=>[(0,n._)("div",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value,(t=>((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",_,(0,l.zw)(h(t.manager)),1),(0,n._)("div",x,[(0,n._)("div",D,[(0,n._)("div",S,[(0,n._)("div",W,(0,l.zw)(t.subject),1),(0,n._)("div",null,(0,l.zw)((0,i.SU)(v.p6)(new Date(t.date)))+" - "+(0,l.zw)(t.manager),1)]),(0,n.Wm)((0,i.SU)(u.DxButton),{icon:"overflow"})]),(0,n._)("div",y,(0,l.zw)(k(t.text)),1)])])))),256))])])),_:1})])),_:1},8,["is-loading"])]))}}),b=a(40089);const I=(0,b.Z)(U,[["__scopeId","data-v-574a130b"]]);var h=I},5555:function(t,e,a){a.d(e,{Z:function(){return S}});var n=a(73396),i=a(44870),l=a(87139),o=a(86050),s=a(6224),u=a(68389),d=a(99660),c=a(88707),r=a(85219);const v={class:"notes",id:"card-notes"},m={class:"input-content"},f={class:"notes-content"},p={class:"note dx-card"},g={class:"note-title"},w={class:"note-text"};var _=(0,n.aZ)({__name:"card-notes",props:{user:{default:""},contactId:{default:null},items:null},setup(t){const e=t,a=(0,i.iH)(!0),_=(0,i.iH)([]),x=(0,i.iH)("");function D(){x.value=""}function S(){if(""===x.value)return;const t={manager:e.user,date:new Date,text:x.value};_.value.push(t),D()}async function W(){null!=e.contactId&&(a.value=!0,_.value=await(0,c.$f)(e.contactId),a.value=!1)}return(0,n.YP)((()=>e.items),(t=>{t&&t.length>0&&(_.value=t,a.value=!1)})),(0,n.bv)((()=>{e.contactId&&W()})),(t,e)=>((0,n.wg)(),(0,n.iD)("div",v,[(0,n.Wm)(r.Z,{"is-loading":a.value,"container-selector":"#card-notes"},{default:(0,n.w5)((()=>[(0,n._)("div",m,[(0,n.Wm)((0,i.SU)(o.DxTextArea),{label:"New Note","styling-mode":"outlined",value:x.value,onValueChanged:e[0]||(e[0]=t=>x.value=t.value)},null,8,["value"]),(0,n.Wm)((0,i.SU)(u.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(u.DxItem),{widget:"dxButton",location:"after",options:{text:"Add",stylingMode:"outlined",type:"default",onClick:S}},null,8,["options"])])),_:1})]),(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.value,(t=>((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",g,[(0,n._)("div",null,(0,l.zw)((0,i.SU)(d.p6)(new Date(t.date)))+" - "+(0,l.zw)(t.manager),1),(0,n.Wm)((0,i.SU)(s.DxButton),{icon:"overflow"})]),(0,n._)("div",w,(0,l.zw)(t.text),1)])))),256))])])),_:1},8,["is-loading"])]))}}),x=a(40089);const D=(0,x.Z)(_,[["__scopeId","data-v-4b1f3c4c"]]);var S=D},98184:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var n=a(73396),i=a(44870),l=a(53898),o=a(6224),s=a(85219),u=a(88707),d=a(93566);const c=t=>((0,n.dD)("data-v-d03ca7b8"),t=t(),(0,n.Cn)(),t),r={id:"card-opportunies"},v={class:"opportunities-block"},m=c((()=>(0,n._)("div",{class:"dx-form-group-caption"}," Active ",-1))),f={class:"opportunities-container"},p={class:"opportunities"},g={class:"opportunities-block"},w=c((()=>(0,n._)("div",{class:"dx-form-group-caption"}," Closed ",-1))),_={class:"opportunities-container"},x={class:"opportunities"};var D=(0,n.aZ)({__name:"card-opportunities",props:{contactId:{default:null}},setup(t){const e=t,a=(0,i.iH)([]),c=(0,i.iH)([]),D=(0,i.iH)(!1);async function S(){if(!e.contactId)return;D.value=!0;const t=(0,u.mj)(e.contactId),n=(0,u.dY)(e.contactId);[a.value,c.value]=await Promise.all([t,n]),D.value=!1}function W(){(0,l.Z)("Add opportunity event")}return(0,n.bv)((()=>{S()})),(t,e)=>((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(s.Z,{"is-loading":D.value,"container-selector":"#card-opportunies"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(o.DxButton),{text:"Add Opportunity",icon:"add",width:"300",height:"115","styling-mode":"outlined",type:"default",class:"add-tile",onClick:W}),(0,n._)("div",null,[(0,n._)("div",v,[m,(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value,(t=>((0,n.wg)(),(0,n.iD)("div",p,[(0,n.Wm)(d["default"],{data:t},null,8,["data"])])))),256))])]),(0,n._)("div",g,[w,(0,n._)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.value,(t=>((0,n.wg)(),(0,n.iD)("div",x,[(0,n.Wm)(d["default"],{data:t},null,8,["data"])])))),256))])])])])),_:1},8,["is-loading"])]))}}),S=a(40089);const W=(0,S.Z)(D,[["__scopeId","data-v-d03ca7b8"]]);var y=W},45173:function(t,e,a){a.r(e),a.d(e,{default:function(){return r}});var n=a(73396),i=a(44870),l=a(69119),o=a(85219);const s={id:"card-tasks"};var u=(0,n.aZ)({__name:"card-tasks",props:{isLoading:{type:Boolean,default:!0},manager:{default:""},tasks:{default:()=>[]}},setup(t){const e=t,a=(0,i.iH)([]);(0,n.YP)((()=>e.tasks),(t=>{a.value=t}));const u=(0,n.Fl)((()=>a.value.filter((t=>!!t.status&&!!t.priority)))),d=t=>{const e=t.component.getVisibleRows(),n=a.value.indexOf(e[t.toIndex].data),i=a.value.indexOf(t.itemData);a.value.splice(i,1),a.value.splice(n,0,t.itemData)};return(t,a)=>((0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(o.Z,{"is-loading":e.isLoading,"container-selector":"#card-tasks"},{default:(0,n.w5)((()=>[e.isLoading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)((0,i.SU)(l.DxDataGrid),{key:0,"data-source":(0,i.SU)(u),"column-auto-width":!0,"selection-filter":["done","=",!0]},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxSelection),{deferred:!0,"show-check-boxes-mode":"always",mode:"multiple"}),(0,n.Wm)((0,i.SU)(l.DxRowDragging),{"allow-reordering":!0,"on-reorder":d,"show-drag-icons":!0}),(0,n.Wm)((0,i.SU)(l.DxColumn),{"data-field":"text",caption:"Subject","hiding-priority":3}),(0,n.Wm)((0,i.SU)(l.DxColumn),{"data-field":"date","data-type":"date",caption:"Due Date","hiding-priority":1}),(0,n.Wm)((0,i.SU)(l.DxColumn),{caption:"Assigned To","data-field":"manager","hiding-priority":0})])),_:1},8,["data-source"]))])),_:1},8,["is-loading"])]))}}),d=a(40089);const c=(0,d.Z)(u,[["__scopeId","data-v-6d583fa8"]]);var r=c},93566:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var n=a(73396),i=a(87139),l=a(44870),o=a(99660),s=a(53898);const u={class:"name"},d={class:"product-info"},c={class:"total"},r={class:"owner"},v=(0,n.Uk)(" Owner: "),m={class:"owner-name"};var f=(0,n.aZ)({__name:"opportunity-tile",props:{data:{default:()=>({})}},setup(t){const e=t,a=()=>{(0,s.Z)("Click opportunity event")};return(t,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"opportunity",onClick:s[0]||(s[0]=t=>a())},[(0,n._)("div",u,(0,i.zw)(e.data.name),1),(0,n._)("div",d,[(0,n.Uk)(" Products: "+(0,i.zw)(e.data.products)+", total: ",1),(0,n._)("span",c,(0,i.zw)((0,l.SU)(o.T4)(e.data.total)),1)]),(0,n._)("div",r,[v,(0,n._)("span",m,(0,i.zw)(e.data.manager),1)])]))}}),p=a(40089);const g=(0,p.Z)(f,[["__scopeId","data-v-0e8672c7"]]);var w=g},68828:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(73396),i=a(44870),l=a(32583),o=a(70369),s=a(89661),u=a(5555),d=a(66329),c=a(88707),r=a(45173),v=a(98184);const m={class:"dx-card"};var f=(0,n.aZ)({__name:"contact-cards",props:{contactId:{default:null},isLoading:{type:Boolean,default:!0},contactName:{default:""},tasks:{default:()=>[]},activities:{default:()=>[]}},setup(t){const e=t,a=(0,i.iH)(!0),f=(0,i.iH)([]);async function p(){e.contactId&&(a.value=!0,f.value=await(0,c.vz)(e.contactId),a.value=!1)}return(0,n.bv)((()=>{p()})),(t,c)=>((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)((0,i.SU)(l.DxTabPanel),{"show-nav-buttons":!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(o.DxItem),{title:"Tasks"},{default:(0,n.w5)((()=>[(0,n.Wm)(r["default"],{tasks:e.tasks,"is-loading":e.isLoading,manager:e.contactName},null,8,["tasks","is-loading","manager"])])),_:1}),(0,n.Wm)((0,i.SU)(o.DxItem),{title:"Activities"},{default:(0,n.w5)((()=>[(0,n.Wm)(s.Z,{"is-loading":e.isLoading,items:e.activities,"show-by":!0},null,8,["is-loading","items"])])),_:1}),(0,n.Wm)((0,i.SU)(o.DxItem),{title:"Opportunities"},{default:(0,n.w5)((()=>[(0,n.Wm)(v["default"],{"contact-id":e.contactId},null,8,["contact-id"])])),_:1}),(0,n.Wm)((0,i.SU)(o.DxItem),{title:"Notes"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.Z,{user:e.contactName,"contact-id":e.contactId},null,8,["user","contact-id"])])),_:1}),(0,n.Wm)((0,i.SU)(o.DxItem),{title:"Messages",badge:f.value?.length+""},{default:(0,n.w5)((()=>[(0,n.Wm)(d.Z,{user:e.contactName,messages:f.value,"is-loading":a.value},null,8,["user","messages","is-loading"])])),_:1},8,["badge"])])),_:1})]))}});const p=f;var g=p},30847:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var n=a(73396),i=a(44870),l=a(6224),o=a(83835),s=a(68389),u=a(88707),d=a(20997),c=a(68828);const r=t=>((0,n.dD)("data-v-74eea6c6"),t=t(),(0,n.Cn)(),t),v={class:"view-wrapper"},m=r((()=>(0,n._)("div",{class:"separator"},null,-1))),f={class:"panels"},p={class:"left"},g={class:"right"};var w=(0,n.aZ)({__name:"crm-contact-details",setup(t){const e=12,a=(0,i.iH)(""),r=(0,i.iH)({}),w=(0,i.iH)(!1);async function _(){w.value=!0;const t=await(0,u.vS)(e);r.value=t,a.value=t.name,w.value=!1}const x=()=>{_()};return(0,n.bv)((()=>{_()})),(t,u)=>((0,n.wg)(),(0,n.iD)("div",v,[(0,n.Wm)((0,i.SU)(s.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(s.DxItem),{location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxButton),{icon:"arrowleft"})])),_:1}),(0,n.Wm)((0,i.SU)(s.DxItem),{location:"before",text:a.value},null,8,["text"]),(0,n.Wm)((0,i.SU)(s.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.DxButton),{text:"Terminate",type:"default","styling-mode":"contained"})])),_:1}),(0,n.Wm)((0,i.SU)(s.DxItem),{location:"after"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(o.DxDropDownButton),{text:"Actions",width:120,"styling-mode":"text"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(o.DxItem),{text:"Assign to Me"}),(0,n.Wm)((0,i.SU)(o.DxItem),{text:"Archive"})])),_:1})])),_:1}),(0,n.Wm)((0,i.SU)(s.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)((0,i.SU)(s.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Copy",icon:"copy"}}),(0,n.Wm)((0,i.SU)(s.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Refresh",icon:"refresh",onClick:x}},null,8,["options"])])),_:1}),(0,n._)("div",f,[(0,n._)("div",p,[(0,n.Wm)(d["default"],{"contact-data":r.value,"is-editing":!1,"is-loading":w.value&&!r.value.name},null,8,["contact-data","is-loading"])]),(0,n._)("div",g,[(0,n.Wm)(c["default"],{"is-loading":w.value,"contact-name":r.value?.name,"contact-id":e,tasks:r.value?.tasks,activities:r.value?.activities},null,8,["is-loading","contact-name","tasks","activities"])])])]))}}),_=a(40089);const x=(0,_.Z)(w,[["__scopeId","data-v-74eea6c6"]]);var D=x}}]);