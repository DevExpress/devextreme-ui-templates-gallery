"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8413],{20788:function(e,t,n){
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
var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxTo=t.DxShowSubmenuMode=t.DxShowFirstSubmenuMode=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxItem=t.DxHide=t.DxFrom=t.DxDelay=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxMenu=void 0;var o=l(n(2323)),u=n(35535),i=n(35535),a=u.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,adaptivityEnabled:Boolean,animation:Object,cssClass:String,dataSource:{},disabled:Boolean,disabledExpr:[Function,String],displayExpr:[Function,String],elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hideSubmenuOnMouseLeave:Boolean,hint:String,hoverStateEnabled:Boolean,items:Array,itemsExpr:[Function,String],itemTemplate:{},onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemRendered:Function,onOptionChanged:Function,onSelectionChanged:Function,onSubmenuHidden:Function,onSubmenuHiding:Function,onSubmenuShowing:Function,onSubmenuShown:Function,orientation:String,rtlEnabled:Boolean,selectByClick:Boolean,selectedExpr:[Function,String],selectedItem:{},selectionMode:String,showFirstSubmenuMode:[Object,String],showSubmenuMode:[Object,String],submenuDirection:String,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:adaptivityEnabled":null,"update:animation":null,"update:cssClass":null,"update:dataSource":null,"update:disabled":null,"update:disabledExpr":null,"update:displayExpr":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hideSubmenuOnMouseLeave":null,"update:hint":null,"update:hoverStateEnabled":null,"update:items":null,"update:itemsExpr":null,"update:itemTemplate":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemRendered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:onSubmenuHidden":null,"update:onSubmenuHiding":null,"update:onSubmenuShowing":null,"update:onSubmenuShown":null,"update:orientation":null,"update:rtlEnabled":null,"update:selectByClick":null,"update:selectedExpr":null,"update:selectedItem":null,"update:selectionMode":null,"update:showFirstSubmenuMode":null,"update:showSubmenuMode":null,"update:submenuDirection":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=o.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},item:{isCollectionItem:!0,optionName:"items"},showFirstSubmenuMode:{isCollectionItem:!1,optionName:"showFirstSubmenuMode"},showSubmenuMode:{isCollectionItem:!1,optionName:"showSubmenuMode"}}}});t.DxMenu=a;var d=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var p=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=p,p.$_optionName="at";var r=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=r,r.$_optionName="boundaryOffset";var s=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=s,s.$_optionName="collision";var m=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:Number,show:Number}});t.DxDelay=m,m.$_optionName="delay";var c=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=c,c.$_optionName="from",c.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var b=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=b,b.$_optionName="hide",b.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var g=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:beginGroup":null,"update:closeMenuOnClick":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:items":null,"update:selectable":null,"update:selected":null,"update:template":null,"update:text":null,"update:visible":null},props:{beginGroup:Boolean,closeMenuOnClick:Boolean,disabled:Boolean,html:String,icon:String,items:Array,selectable:Boolean,selected:Boolean,template:{},text:String,visible:Boolean}});t.DxItem=g,g.$_optionName="items",g.$_isCollectionItem=!0;var h=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=h,h.$_optionName="my";var f=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=f,f.$_optionName="offset";var S=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=S,S.$_optionName="position",S.$_expectedChildren={at:{isCollectionItem:!1,optionName:"at"},boundaryOffset:{isCollectionItem:!1,optionName:"boundaryOffset"},collision:{isCollectionItem:!1,optionName:"collision"},my:{isCollectionItem:!1,optionName:"my"},offset:{isCollectionItem:!1,optionName:"offset"}};var C=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=C,C.$_optionName="show";var v=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:delay":null,"update:name":null},props:{delay:[Number,Object],name:String}});t.DxShowFirstSubmenuMode=v,v.$_optionName="showFirstSubmenuMode",v.$_expectedChildren={delay:{isCollectionItem:!1,optionName:"delay"}};var y=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:delay":null,"update:name":null},props:{delay:[Number,Object],name:String}});t.DxShowSubmenuMode=y,y.$_optionName="showSubmenuMode",y.$_expectedChildren={delay:{isCollectionItem:!1,optionName:"delay"}};var x=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=x,x.$_optionName="to",t["default"]=a},64399:function(e,t,n){
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
var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxToolbarItem=t.DxTo=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxHide=t.DxFrom=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxPopup=void 0;var o=l(n(139)),u=n(35535),i=n(35535),a=u.createComponent({props:{accessKey:String,animation:Object,closeOnOutsideClick:[Boolean,Function],container:{},contentTemplate:{},copyRootClassesToWrapper:Boolean,deferRendering:Boolean,disabled:Boolean,dragAndResizeArea:{},dragEnabled:Boolean,dragOutsideBoundary:Boolean,elementAttr:{},focusStateEnabled:Boolean,fullScreen:Boolean,height:[Function,Number,String],hideOnOutsideClick:[Boolean,Function],hideOnParentScroll:Boolean,hint:String,hoverStateEnabled:Boolean,maxHeight:[Function,Number,String],maxWidth:[Function,Number,String],minHeight:[Function,Number,String],minWidth:[Function,Number,String],onContentReady:Function,onDisposing:Function,onHidden:Function,onHiding:Function,onInitialized:Function,onOptionChanged:Function,onResize:Function,onResizeEnd:Function,onResizeStart:Function,onShowing:Function,onShown:Function,onTitleRendered:Function,position:[Function,Object,String],resizeEnabled:Boolean,restorePosition:Boolean,rtlEnabled:Boolean,shading:Boolean,shadingColor:String,showCloseButton:Boolean,showTitle:Boolean,tabIndex:Number,title:String,titleTemplate:{},toolbarItems:Array,visible:Boolean,width:[Function,Number,String],wrapperAttr:{}},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:animation":null,"update:closeOnOutsideClick":null,"update:container":null,"update:contentTemplate":null,"update:copyRootClassesToWrapper":null,"update:deferRendering":null,"update:disabled":null,"update:dragAndResizeArea":null,"update:dragEnabled":null,"update:dragOutsideBoundary":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:fullScreen":null,"update:height":null,"update:hideOnOutsideClick":null,"update:hideOnParentScroll":null,"update:hint":null,"update:hoverStateEnabled":null,"update:maxHeight":null,"update:maxWidth":null,"update:minHeight":null,"update:minWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onHidden":null,"update:onHiding":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onResize":null,"update:onResizeEnd":null,"update:onResizeStart":null,"update:onShowing":null,"update:onShown":null,"update:onTitleRendered":null,"update:position":null,"update:resizeEnabled":null,"update:restorePosition":null,"update:rtlEnabled":null,"update:shading":null,"update:shadingColor":null,"update:showCloseButton":null,"update:showTitle":null,"update:tabIndex":null,"update:title":null,"update:titleTemplate":null,"update:toolbarItems":null,"update:visible":null,"update:width":null,"update:wrapperAttr":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=o.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},position:{isCollectionItem:!1,optionName:"position"},toolbarItem:{isCollectionItem:!0,optionName:"toolbarItems"}}}});t.DxPopup=a;var d=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var p=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=p,p.$_optionName="at";var r=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=r,r.$_optionName="boundaryOffset";var s=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=s,s.$_optionName="collision";var m=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=m,m.$_optionName="from",m.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var c=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=c,c.$_optionName="hide",c.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var b=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=b,b.$_optionName="my";var g=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=g,g.$_optionName="offset";var h=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=h,h.$_optionName="position";var f=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=f,f.$_optionName="show";var S=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=S,S.$_optionName="to";var C=i.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:disabled":null,"update:html":null,"update:location":null,"update:options":null,"update:template":null,"update:text":null,"update:toolbar":null,"update:visible":null,"update:widget":null},props:{disabled:Boolean,html:String,location:String,options:{},template:{},text:String,toolbar:String,visible:Boolean,widget:String}});t.DxToolbarItem=C,C.$_optionName="toolbarItems",C.$_isCollectionItem=!0,t["default"]=a},99080:function(e,t,n){n.d(t,{Z:function(){return p}});var l=n(73396),o=n(44870),u=n(64399),i=n(19647),a=(0,l.aZ)({__name:"form-popup",props:{title:null,isVisible:{type:Boolean,default:!1}},emits:["save","update:isVisible"],setup(e,{emit:t}){const n=e,a=(0,o.iH)(n.isVisible),d=(0,o.iH)();(0,l.YP)((()=>n.isVisible),(e=>{a.value=e}));const p=()=>{t("save")},r=()=>{a.value=!1,t("update:isVisible",!1)};return(e,t)=>a.value?((0,l.wg)(),(0,l.j4)((0,o.SU)(u.DxPopup),{key:0,ref_key:"popup",ref:d,title:n.title,visible:a.value,"full-screen":(0,o.SU)(i.Br).isSmall||(0,o.SU)(i.Br).isXSmall,width:"auto",height:"auto",onOptionChanged:t[0]||(t[0]=()=>d.value?.instance?.repaint())},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(u.DxToolbarItem),{widget:"dxButton",toolbar:"bottom",location:"after",options:{text:"Save",stylingMode:"outlined",type:"default",onClick:p}},null,8,["options"]),(0,l.Wm)((0,o.SU)(u.DxToolbarItem),{widget:"dxButton",toolbar:"bottom",location:"after",options:{text:"Cancel",stylingMode:"text",type:"default",onClick:r}},null,8,["options"]),(0,l.WI)(e.$slots,"default")])),_:3},8,["title","visible","full-screen"])):(0,l.kq)("",!0)}});const d=a;var p=d}}]);