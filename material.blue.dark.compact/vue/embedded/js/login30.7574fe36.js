"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[7699],{71793:function(e,t,l){l.d(t,{Lu:function(){return a},Ww:function(){return n},nJ:function(){return o}});const n=["Open","In Progress","Deferred","Completed"],a=["Low","Normal","High"],o={id:null,text:"",description:"",company:"",priority:"Low",startDate:new Date,dueDate:new Date,owner:"",status:"Open",activities:[],notes:[],messages:[],parentId:null,progress:0}},26898:function(e,t,l){
/*!
 * devextreme-vue
 * Version: 22.1.5
 * Build date: Fri Sep 02 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxTo=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxHide=t.DxFrom=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxLoadPanel=void 0;var a=n(l(88383)),o=l(35535),i=l(35535),u=o.createComponent({props:{animation:Object,closeOnOutsideClick:[Boolean,Function],container:{},copyRootClassesToWrapper:Boolean,deferRendering:Boolean,delay:Number,elementAttr:{},focusStateEnabled:Boolean,height:[Function,Number,String],hideOnOutsideClick:[Boolean,Function],hideOnParentScroll:Boolean,hint:String,hoverStateEnabled:Boolean,indicatorSrc:String,maxHeight:[Function,Number,String],maxWidth:[Function,Number,String],message:String,minHeight:[Function,Number,String],minWidth:[Function,Number,String],onContentReady:Function,onDisposing:Function,onHidden:Function,onHiding:Function,onInitialized:Function,onOptionChanged:Function,onShowing:Function,onShown:Function,position:[Function,Object,String],rtlEnabled:Boolean,shading:Boolean,shadingColor:String,showIndicator:Boolean,showPane:Boolean,visible:Boolean,width:[Function,Number,String],wrapperAttr:{}},emits:{"update:isActive":null,"update:hoveredElement":null,"update:animation":null,"update:closeOnOutsideClick":null,"update:container":null,"update:copyRootClassesToWrapper":null,"update:deferRendering":null,"update:delay":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hideOnOutsideClick":null,"update:hideOnParentScroll":null,"update:hint":null,"update:hoverStateEnabled":null,"update:indicatorSrc":null,"update:maxHeight":null,"update:maxWidth":null,"update:message":null,"update:minHeight":null,"update:minWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onHidden":null,"update:onHiding":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onShowing":null,"update:onShown":null,"update:position":null,"update:rtlEnabled":null,"update:shading":null,"update:shadingColor":null,"update:showIndicator":null,"update:showPane":null,"update:visible":null,"update:width":null,"update:wrapperAttr":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},position:{isCollectionItem:!1,optionName:"position"}}}});t.DxLoadPanel=u;var d=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var r=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=r,r.$_optionName="at";var s=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=s,s.$_optionName="boundaryOffset";var p=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=p,p.$_optionName="collision";var m=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=m,m.$_optionName="from",m.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var c=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=c,c.$_optionName="hide",c.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var v=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=v,v.$_optionName="my";var f=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=f,f.$_optionName="offset";var g=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=g,g.$_optionName="position";var b=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=b,b.$_optionName="show";var y=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=y,y.$_optionName="to",t["default"]=u},8614:function(e,t,l){l.d(t,{Z:function(){return s}});var n=l(73396),a=l(87139),o=l(44870),i=l(16453),u=(0,n.aZ)({__name:"status-indicator",props:{value:{default:""},showBar:{type:Boolean,default:!1},isField:{type:Boolean,default:!1}},setup(e){const t=e;function l(){return(t.showBar?"| ":"")+t.value}return(e,u)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)([[{"input-with-bar":t.showBar},"status-indicator-"+t.value?.toLowerCase()],"status status-indicator"])},[t.isField?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",{key:0,class:(0,a.C_)(["status-indicator-"+t.value.toLowerCase()])},(0,a.zw)(l()),3)),t.isField?((0,n.wg)(),(0,n.j4)((0,o.SU)(i.DxTextBox),{key:1,class:(0,a.C_)(["status-indicator-"+t.value.replace(" ","-").toLowerCase()]),"input-attr":{class:"status-input status-editor-input"},"hover-state-enabled":!1,"read-only":!0,value:l()},null,8,["class","value"])):(0,n.kq)("",!0)],2))}}),d=l(40089);const r=(0,d.Z)(u,[["__scopeId","data-v-d80dce7c"]]);var s=r},57168:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});var n=l(73396),a=l(44870),o=l(87139),i=l(8614),u=l(6224),d=l(86050),r=l(71793),s=l(68389),p=l(94969),m=l(34774),c=l(85219),v=l(64699),f=l(50585),g=(0,n.aZ)({__name:"form-datebox",props:{modelValue:null,isEditing:{type:Boolean},label:null},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,o=(0,n.Fl)({get(){return l.modelValue},set(e){t("update:modelValue",e)}});return(e,t)=>((0,n.wg)(),(0,n.j4)((0,a.SU)(f.DxDateBox),{label:l.label,modelValue:(0,a.SU)(o),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,a.dq)(o)?o.value=e:null),"read-only":!l.isEditing,placeholder:"MM/dd/y","display-format":"MM/dd/y","element-attr":{class:"form-editor"},"input-attr":{class:"form-editor-input"},"picker-type":"calendar","styling-mode":"filled"},null,8,["label","modelValue","read-only"]))}});const b=g;var y=b;const x=e=>((0,n.dD)("data-v-4a1a24d8"),e=e(),(0,n.Cn)(),e),h={id:"task-form"},S=x((()=>(0,n._)("span",{class:"dx-form-group-caption"},"Details",-1))),D={class:"task-editor-field"},C={class:"task-editor-field"};var w=(0,n.aZ)({__name:"task-form",props:{isLoading:{type:Boolean,default:!1},data:{default:()=>r.nJ},contentByScreen:null,validationGroup:{default:void 0}},setup(e){const t=e,l=t.data===r.nJ,f=(0,a.iH)(l),g=(0,a.iH)(r.nJ);(0,n.YP)((()=>t.data),(e=>{g.value=e}));let b=null;function x(){b={...g.value},f.value=!0}function w(){f.value=!1}function _(){b&&(g.value=b),f.value=!1}return(b,N)=>((0,n.wg)(),(0,n.iD)("div",h,[l?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)((0,a.SU)(s.DxToolbar),{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(s.DxItem),{location:"before"},{default:(0,n.w5)((()=>[S])),_:1}),(0,n.Wm)((0,a.SU)(s.DxItem),{location:"after","locate-in-menu":"after",visible:!f.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(u.DxButton),{text:"Edit",icon:"edit","styling-mode":"outlined",type:"default",visible:!t.isLoading,onClick:N[0]||(N[0]=e=>x())},null,8,["visible"])])),_:1},8,["visible"]),(0,n.Wm)((0,a.SU)(s.DxItem),{location:"after","locate-in-menu":"after",visible:f.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(u.DxButton),{text:"Save","styling-mode":"outlined",type:"default",onClick:N[1]||(N[1]=e=>w())})])),_:1},8,["visible"]),(0,n.Wm)((0,a.SU)(s.DxItem),{location:"after","locate-in-menu":"after",visible:f.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(u.DxButton),{text:"Cancel",onClick:N[2]||(N[2]=e=>_()),"styling-mode":"text"})])),_:1},8,["visible"])])),_:1})),(0,n.Wm)(c.Z,{"is-loading":e.isLoading,"container-selector":"#task-form"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)((0,a.SU)(p.DxForm),{"form-data":g.value,class:(0,o.C_)(["plain-styled-form",{"view-mode":!f.value}]),"label-mode":"floating","validation-group":t.validationGroup},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(p.DxGroupItem),{"col-count":2},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(p.DxColCountByScreen),{xs:t.contentByScreen.xs,sm:t.contentByScreen.sm,md:2,lg:2},null,8,["xs","sm"]),(0,n.Wm)((0,a.SU)(p.DxItem),{visible:l,"col-span":2},{default:(0,n.w5)((()=>[(0,n.Wm)(v.Z,{label:"Subject",modelValue:g.value.text,"onUpdate:modelValue":N[3]||(N[3]=e=>g.value.text=e),"is-editing":f.value,"validation-group":t.validationGroup},null,8,["modelValue","is-editing","validation-group"])])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),{"css-class":"accent"},{default:(0,n.w5)((()=>[(0,n.Wm)(v.Z,{label:"Company",modelValue:g.value.company,"onUpdate:modelValue":N[4]||(N[4]=e=>g.value.company=e),"is-editing":f.value,validators:[],"validation-group":t.validationGroup},null,8,["modelValue","is-editing","validation-group"])])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),{"css-class":"accent"},{default:(0,n.w5)((()=>[(0,n.Wm)(v.Z,{label:"Assigned to",modelValue:g.value.owner,"onUpdate:modelValue":N[5]||(N[5]=e=>g.value.owner=e),"is-editing":f.value,"validation-group":t.validationGroup},null,8,["modelValue","is-editing","validation-group"])])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(m.DxSelectBox),{label:"Priority",modelValue:g.value.priority,"onUpdate:modelValue":N[6]||(N[6]=e=>g.value.priority=e),items:(0,a.SU)(r.Lu),"read-only":!f.value,"element-attr":{class:"form-editor"},"field-template":"field","item-template":"item","styling-mode":"filled"},{field:(0,n.w5)((()=>[(0,n._)("div",D,[(0,n.Wm)(i.Z,{"is-field":!0,"show-bar":!0,value:g.value.priority},null,8,["value"])])])),item:(0,n.w5)((({data:e})=>[(0,n.Wm)(i.Z,{"show-bar":!0,value:e},null,8,["value"])])),_:1},8,["modelValue","items","read-only"])])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(m.DxSelectBox),{label:"Status",modelValue:g.value.status,"onUpdate:modelValue":N[7]||(N[7]=e=>g.value.status=e),items:(0,a.SU)(r.Ww),"read-only":!f.value,"element-attr":{class:"form-editor"},"field-template":"field","item-template":"item","styling-mode":"filled"},{field:(0,n.w5)((()=>[(0,n._)("div",C,[(0,n.Wm)(i.Z,{"is-field":!0,value:g.value.status},null,8,["value"])])])),item:(0,n.w5)((({data:e})=>[(0,n.Wm)(i.Z,{value:e},null,8,["value"])])),_:1},8,["modelValue","items","read-only"])])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(y,{label:"Start Date",modelValue:g.value.startDate,"onUpdate:modelValue":N[8]||(N[8]=e=>g.value.startDate=e),"is-editing":f.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(y,{label:"Due Date",modelValue:g.value.dueDate,"onUpdate:modelValue":N[9]||(N[9]=e=>g.value.dueDate=e),"is-editing":f.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1}),(0,n.Wm)((0,a.SU)(p.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxTextArea),{label:"Details","styling-mode":"filled",modelValue:g.value.description,"onUpdate:modelValue":N[10]||(N[10]=e=>g.value.description=e),"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1})])),_:1},8,["form-data","class","validation-group"])])])),_:1},8,["is-loading"])]))}}),_=l(40089);const N=(0,_.Z)(w,[["__scopeId","data-v-4a1a24d8"]]);var W=N}}]);