"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[6046,5679,715],{58719:function(e,t,n){n.d(t,{F:function(){return a},b:function(){return l}});const l=["Salaried","Commission","Terminated"],a={name:"",firstName:"",lastName:"",status:"Salaried",position:"",manager:"",company:"",city:"",state:{stateShort:""},phone:"",email:"",image:"",address:"",zipCode:null,activities:[],opportunities:[],tasks:[]}},83835:function(e,t,n){
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
var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxToolbarItem=t.DxTo=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxItem=t.DxHide=t.DxFrom=t.DxDropDownOptions=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxDropDownButton=void 0;var a=l(n(61659)),o=n(35535),i=n(35535),u=o.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,dataSource:{},deferRendering:Boolean,disabled:Boolean,displayExpr:[Function,String],dropDownContentTemplate:{},dropDownOptions:Object,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,icon:String,items:Array,itemTemplate:{},keyExpr:String,noDataText:String,onButtonClick:Function,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onOptionChanged:Function,onSelectionChanged:Function,opened:Boolean,rtlEnabled:Boolean,selectedItem:{},selectedItemKey:[Number,String],showArrowIcon:Boolean,splitButton:Boolean,stylingMode:String,tabIndex:Number,text:String,useItemTextAsTitle:Boolean,useSelectMode:Boolean,visible:Boolean,width:[Function,Number,String],wrapItemText:Boolean},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:dataSource":null,"update:deferRendering":null,"update:disabled":null,"update:displayExpr":null,"update:dropDownContentTemplate":null,"update:dropDownOptions":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:icon":null,"update:items":null,"update:itemTemplate":null,"update:keyExpr":null,"update:noDataText":null,"update:onButtonClick":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:opened":null,"update:rtlEnabled":null,"update:selectedItem":null,"update:selectedItemKey":null,"update:showArrowIcon":null,"update:splitButton":null,"update:stylingMode":null,"update:tabIndex":null,"update:text":null,"update:useItemTextAsTitle":null,"update:useSelectMode":null,"update:visible":null,"update:width":null,"update:wrapItemText":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={dropDownOptions:{isCollectionItem:!1,optionName:"dropDownOptions"},item:{isCollectionItem:!0,optionName:"items"}}}});t.DxDropDownButton=u;var d=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var p=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=p,p.$_optionName="at";var r=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=r,r.$_optionName="boundaryOffset";var s=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=s,s.$_optionName="collision";var m=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:animation":null,"update:bindingOptions":null,"update:closeOnOutsideClick":null,"update:container":null,"update:contentTemplate":null,"update:copyRootClassesToWrapper":null,"update:deferRendering":null,"update:disabled":null,"update:dragAndResizeArea":null,"update:dragEnabled":null,"update:dragOutsideBoundary":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:fullScreen":null,"update:height":null,"update:hideOnOutsideClick":null,"update:hideOnParentScroll":null,"update:hint":null,"update:hoverStateEnabled":null,"update:maxHeight":null,"update:maxWidth":null,"update:minHeight":null,"update:minWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onFocusIn":null,"update:onFocusOut":null,"update:onHidden":null,"update:onHiding":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onResize":null,"update:onResizeEnd":null,"update:onResizeStart":null,"update:onShowing":null,"update:onShown":null,"update:onTitleRendered":null,"update:position":null,"update:resizeEnabled":null,"update:restorePosition":null,"update:rtlEnabled":null,"update:shading":null,"update:shadingColor":null,"update:showCloseButton":null,"update:showTitle":null,"update:tabIndex":null,"update:title":null,"update:titleTemplate":null,"update:toolbarItems":null,"update:visible":null,"update:width":null,"update:wrapperAttr":null},props:{accessKey:String,activeStateEnabled:Boolean,animation:Object,bindingOptions:Object,closeOnOutsideClick:[Boolean,Function],container:{},contentTemplate:{},copyRootClassesToWrapper:Boolean,deferRendering:Boolean,disabled:Boolean,dragAndResizeArea:{},dragEnabled:Boolean,dragOutsideBoundary:Boolean,elementAttr:{},focusStateEnabled:Boolean,fullScreen:Boolean,height:[Function,Number,String],hideOnOutsideClick:[Boolean,Function],hideOnParentScroll:Boolean,hint:String,hoverStateEnabled:Boolean,maxHeight:[Function,Number,String],maxWidth:[Function,Number,String],minHeight:[Function,Number,String],minWidth:[Function,Number,String],onContentReady:Function,onDisposing:Function,onFocusIn:Function,onFocusOut:Function,onHidden:Function,onHiding:Function,onInitialized:Function,onOptionChanged:Function,onResize:Function,onResizeEnd:Function,onResizeStart:Function,onShowing:Function,onShown:Function,onTitleRendered:Function,position:[Function,Object,String],resizeEnabled:Boolean,restorePosition:Boolean,rtlEnabled:Boolean,shading:Boolean,shadingColor:String,showCloseButton:Boolean,showTitle:Boolean,tabIndex:Number,title:String,titleTemplate:{},toolbarItems:Array,visible:Boolean,width:[Function,Number,String],wrapperAttr:{}}});t.DxDropDownOptions=m,m.$_optionName="dropDownOptions",m.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},position:{isCollectionItem:!1,optionName:"position"},toolbarItem:{isCollectionItem:!0,optionName:"toolbarItems"}};var c=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=c,c.$_optionName="from",c.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var g=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=g,g.$_optionName="hide",g.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var v=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:onClick":null,"update:showChevron":null,"update:template":null,"update:text":null,"update:visible":null},props:{badge:String,disabled:Boolean,html:String,icon:String,onClick:Function,showChevron:Boolean,template:{},text:String,visible:Boolean}});t.DxItem=v,v.$_optionName="items",v.$_isCollectionItem=!0;var h=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=h,h.$_optionName="my";var S=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=S,S.$_optionName="offset";var f=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=f,f.$_optionName="position";var b=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=b,b.$_optionName="show";var x=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=x,x.$_optionName="to";var C=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:disabled":null,"update:html":null,"update:location":null,"update:options":null,"update:template":null,"update:text":null,"update:toolbar":null,"update:visible":null,"update:widget":null},props:{disabled:Boolean,html:String,location:String,options:{},template:{},text:String,toolbar:String,visible:Boolean,widget:String}});t.DxToolbarItem=C,C.$_optionName="toolbarItems",C.$_isCollectionItem=!0,t["default"]=u},38563:function(e,t,n){var l=n(70004);t["Z"]=l.o},58758:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var l=n(73396),a=n(44870),o=n(94969),i=n(58719),u=n(64699),d=n(57454),p=(0,l.aZ)({__name:"contact-new-form",props:{validationGroup:null},setup(e){const t=e,n=(0,a.iH)(i.F);return(e,i)=>((0,l.wg)(),(0,l.j4)((0,a.SU)(o.DxForm),{class:"plain-styled-form","label-mode":"floating","validation-group":t.validationGroup},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o.DxItem),{"item-type":"group"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o.DxColCountByScreen),{xs:1,sm:1,md:1,lg:1}),(0,l.Wm)((0,a.SU)(o.DxItem),{class:"uploader"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(d["default"])])])),_:1})])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),{"item-type":"group"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o.DxColCountByScreen),{xs:1,sm:1,md:2,lg:2}),(0,l.Wm)((0,a.SU)(o.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{label:"First Name",modelValue:n.value.firstName,"onUpdate:modelValue":i[0]||(i[0]=e=>n.value.firstName=e),"is-editing":!0,"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{label:"Last Name",modelValue:n.value.lastName,"onUpdate:modelValue":i[1]||(i[1]=e=>n.value.lastName=e),"is-editing":!0,"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{label:"Company",modelValue:n.value.company,"onUpdate:modelValue":i[2]||(i[2]=e=>n.value.company=e),"is-editing":!0,validators:[],"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{label:"Position",modelValue:n.value.position,"onUpdate:modelValue":i[3]||(i[3]=e=>n.value.position=e),"is-editing":!0,validators:[],"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1})])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),{"item-type":"group","css-class":"contact-fields-group"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(o.DxColCountByScreen),{xs:1,sm:1,md:2,lg:2}),(0,l.Wm)((0,a.SU)(o.DxItem),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{label:"Assigned to",modelValue:n.value.manager,"onUpdate:modelValue":i[4]||(i[4]=e=>n.value.manager=e),"is-editing":!0,validators:[],"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{modelValue:n.value.phone,"onUpdate:modelValue":i[5]||(i[5]=e=>n.value.phone=e),"is-editing":!0,icon:"tel",mask:"+1(000)000-0000",validators:[],"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{modelValue:n.value.email,"onUpdate:modelValue":i[6]||(i[6]=e=>n.value.email=e),"is-editing":!0,icon:"email",validators:[{type:"email"}]},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,a.SU)(o.DxItem),null,{default:(0,l.w5)((()=>[(0,l.Wm)(u.Z,{modelValue:n.value.address,"onUpdate:modelValue":i[7]||(i[7]=e=>n.value.address=e),"is-editing":!0,icon:"home",validators:[],"validation-group":t.validationGroup},null,8,["modelValue","validation-group"])])),_:1})])),_:1})])),_:1},8,["validation-group"]))}});const r=p;var s=r},57454:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var l=n(73396),a=n(87139),o=n(44870),i=n(78517);const u=e=>((0,l.dD)("data-v-5f922d86"),e=e(),(0,l.Cn)(),e),d=u((()=>(0,l._)("span",null,"Drag and drop a photo here or click the area to select it from a folder",-1))),p=[d];var r=(0,l.aZ)({__name:"form-photo-uploader",setup(e){const t=(0,o.iH)(!1),n=(0,o.iH)(),u=e=>{e.dropZoneElement===n.value&&(t.value=!0)},d=e=>{e.dropZoneElement===n.value&&(t.value=!1)};return(e,r)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{id:"dropzone",ref_key:"dropzone",ref:n,class:(0,a.C_)(t.value?"dx-theme-accent-as-border-color":"dx-theme-border-color")},p,2),(0,l.Wm)((0,o.SU)(i.DxFileUploader),{"drop-zone":n.value,"dialog-trigger":n.value,multiple:!1,accept:"image/*","upload-mode":"instantly","show-file-list":!1,visible:!1,onDropZoneEnter:u,onDropZoneLeave:d},null,8,["drop-zone","dialog-trigger"])],64))}}),s=n(40089);const m=(0,s.Z)(r,[["__scopeId","data-v-5f922d86"]]);var c=m},75e3:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var l=n(73396),a=n(44870),o=n(87139),i=n(83835),u=n.n(i),d=n(69119),p=n.n(d),r=n(88707),s=n(58719),m=n(38563),c=n(99660),g=n(93468),v=n(99080),h=n(34646),S=n(58758),f=n(97473);const b=e=>((0,l.dD)("data-v-35b636d8"),e=e(),(0,l.Cn)(),e),x={class:"view-wrapper"},C=b((()=>(0,l._)("div",{class:"grid-header"}," Contacts ",-1))),D=b((()=>(0,l._)("div",{class:"separator"},null,-1))),y=b((()=>(0,l._)("div",{class:"separator"},null,-1))),w={class:"name-template"},_={class:"position"};var I=(0,l.aZ)({__name:"crm-contact-list",setup(e){const t=["All",...s.b],n="new-contact",i=(0,a.iH)(null),b=(0,a.iH)(!1),I=(0,a.iH)(null),N=(0,a.iH)(!1),W=new m.Z({key:"id",load:()=>(0,r.K2)()}),U=e=>{e.data.id&&(i.value=e.data,b.value=!0)},B=()=>{N.value=!0},O=e=>{const{item:t}=e;"All"===t?I.value?.instance.clearFilter():I.value?.instance.filter(["status","=",t])},F=()=>{W.reload()},E=e=>{const{value:t}=e;if(t)return(0,c.CN)(t.toString())},A=()=>{h.Z.validateGroup(n).isValid&&(N.value=!1)};return(e,r)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",x,[(0,l.Wm)((0,a.SU)(p()),{"data-source":(0,a.SU)(W),height:"100%",class:"grid",onRowClick:U},{nameCellTemplate:(0,l.w5)((({data:e})=>[(0,l._)("div",w,[(0,l._)("div",null,(0,o.zw)(e.data.name),1),(0,l._)("div",_,(0,o.zw)(e.data.position),1)])])),statusCellTemplate:(0,l.w5)((({data:e})=>[(0,l.Wm)(g.Z,{value:e.data?.status},null,8,["value"])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxScrolling),{mode:"virtual"}),(0,l.Wm)((0,a.SU)(d.DxColumnChooser),{enabled:!0}),(0,l.Wm)((0,a.SU)(d.DxSorting),{mode:"multiple"}),(0,l.Wm)((0,a.SU)(d.DxHeaderFilter),{visible:!0}),(0,l.Wm)((0,a.SU)(d.DxLoadPanel),{enabled:!0,"show-pane":!1}),(0,l.Wm)((0,a.SU)(d.DxSelection),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,l.Wm)((0,a.SU)(d.DxSearchPanel),{visible:!0,placeholder:"Contact Search"}),(0,l.Wm)((0,a.SU)(d.DxExport),{enabled:!0,"allow-export-selected-data":!0}),(0,l.Wm)((0,a.SU)(d.DxToolbar),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxItem),{location:"before"},{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"before","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(u()),{"styling-mode":"text",width:160,"use-select-mode":!0,items:t,"selected-item-key":t[0],onSelectionChanged:O},null,8,["selected-item-key"])])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton",options:{icon:"plus",text:"Add Contact",type:"default",stylingMode:"contained",onClick:B}},null,8,["options"]),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto","show-text":"inMenu",widget:"dxButton",options:{text:"Refresh",icon:"refresh",onClick:F}},null,8,["options"]),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[D])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{name:"exportButton"}),(0,l.Wm)((0,a.SU)(d.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)((0,a.SU)(d.DxItem),{name:"columnChooserButton","locate-in-menu":"auto"}),(0,l.Wm)((0,a.SU)(d.DxItem),{name:"searchPanel","locate-in-menu":"auto"})])),_:1}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"name",caption:"Name","sort-order":"asc","cell-template":"nameCellTemplate","hiding-priority":5,"min-width":150},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxRequiredRule))])),_:1}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"company",caption:"Company","hiding-priority":5,"min-width":150}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"status",caption:"Status","data-type":"string","cell-template":"statusCellTemplate","hiding-priority":3,"min-width":100}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"assignedTo",caption:"Assigned to","hiding-priority":4}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"phone",caption:"Phone","hiding-priority":2,"customize-text":E},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxRequiredRule))])),_:1}),(0,l.Wm)((0,a.SU)(d.DxColumn),{"data-field":"email",caption:"Email","hiding-priority":1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,a.SU)(d.DxRequiredRule))])),_:1})])),_:1},8,["data-source"]),(0,l.Wm)(f["default"],{"contact-id":i.value?.id,"is-panel-open":b.value,onClose:r[0]||(r[0]=e=>b.value=!1)},null,8,["contact-id","is-panel-open"])]),(0,l.Wm)(v.Z,{title:"New Contact","is-visible":N.value,"onUpdate:is-visible":r[1]||(r[1]=e=>N.value=e),onSave:A},{default:(0,l.w5)((()=>[(0,l.Wm)(S["default"],{"validation-group":n})])),_:1},8,["is-visible"])],64))}}),N=n(40089);const W=(0,N.Z)(I,[["__scopeId","data-v-35b636d8"]]);var U=W}}]);