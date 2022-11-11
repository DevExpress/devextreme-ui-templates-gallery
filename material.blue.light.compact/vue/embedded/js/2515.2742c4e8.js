"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[2515],{55897:function(e,t,i){
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
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxItem=t.DxAccordion=void 0;var a=n(i(23317)),l=i(35535),s=i(35535),o=l.createComponent({props:{accessKey:String,activeStateEnabled:Boolean,animationDuration:Number,collapsible:Boolean,dataSource:{},deferRendering:Boolean,disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,itemHoldTimeout:Number,items:Array,itemTemplate:{},itemTitleTemplate:{},keyExpr:[Function,String],multiple:Boolean,noDataText:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemHold:Function,onItemRendered:Function,onItemTitleClick:Function,onOptionChanged:Function,onSelectionChanged:Function,repaintChangesOnly:Boolean,rtlEnabled:Boolean,selectedIndex:Number,selectedItem:{},selectedItemKeys:Array,selectedItems:Array,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:activeStateEnabled":null,"update:animationDuration":null,"update:collapsible":null,"update:dataSource":null,"update:deferRendering":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:itemHoldTimeout":null,"update:items":null,"update:itemTemplate":null,"update:itemTitleTemplate":null,"update:keyExpr":null,"update:multiple":null,"update:noDataText":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemHold":null,"update:onItemRendered":null,"update:onItemTitleClick":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:repaintChangesOnly":null,"update:rtlEnabled":null,"update:selectedIndex":null,"update:selectedItem":null,"update:selectedItemKeys":null,"update:selectedItems":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={item:{isCollectionItem:!0,optionName:"items"}}}});t.DxAccordion=o;var u=s.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:template":null,"update:text":null,"update:title":null,"update:visible":null},props:{disabled:Boolean,html:String,icon:String,template:{},text:String,title:String,visible:Boolean}});t.DxItem=u,u.$_optionName="items",u.$_isCollectionItem=!0,t["default"]=o},23317:function(e,t,i){i.r(t);var n=i(79264),a=i(60621),l=i(66487),s=i(11572),o=i(36879),u=i(26256),d=i(33158),r=i(72602),c=i(84392),p=i(12117),m=i(12145),h=i(9783),_=i(70732),f=i(84518),g=i(19428),I=i(42061),v=i(48898),C=i(12023),b=i(6530),x="dx-accordion",S="dx-accordion-wrapper",T="dx-accordion-item",y="dx-accordion-item-opened",B="dx-accordion-item-closed",k="dx-accordion-item-title",A="dx-accordion-item-body",E="dx-accordion-item-title-caption",D="dxAccordionItemData",H=g.Z.inherit({_activeStateUnit:"."+T,_getDefaultOptions:function(){return(0,r.l)(this.callBase(),{hoverStateEnabled:!0,height:void 0,itemTitleTemplate:"title",onItemTitleClick:null,selectedIndex:0,collapsible:!1,multiple:!1,animationDuration:300,deferRendering:!0,selectionByClick:!0,activeStateEnabled:!0,_itemAttributes:{role:"tab"},_animationEasing:"ease"})},_defaultOptionsRules:function(){return this.callBase().concat([{device:function(){return"desktop"===u.Z.real().deviceType&&!u.Z.isSimulator()},options:{focusStateEnabled:!0}},{device:function(){return(0,b.x2)()},options:{animationDuration:200,_animationEasing:"cubic-bezier(0.4, 0, 0.2, 1)"}}])},_itemElements:function(){return this._itemContainer().children(this._itemSelector())},_init:function(){this.callBase(),this.option("selectionRequired",!this.option("collapsible")),this.option("selectionMode",this.option("multiple")?"multiple":"single");var e=this.$element();e.addClass(x),this._$container=(0,a.Z)("<div>").addClass(S),e.append(this._$container)},_initTemplates:function(){this.callBase(),this._templateManager.addDefaultTemplates({title:new v.c((function(e,t){if((0,h.PO)(t)){var i=(0,C.H)(t.icon);i&&e.append(i),(0,h.$K)(t.title)&&!(0,h.PO)(t.title)&&e.append(d["default"].createTextNode(t.title))}else(0,h.$K)(t)&&e.text(String(t));e.wrapInner((0,a.Z)("<div>").addClass(E))}),["title","icon"],this.option("integrationOptions.watchMethod"))})},_initMarkup:function(){this._deferredItems=[],this.callBase(),this.setAria({role:"tablist",multiselectable:this.option("multiple")}),(0,c.g0)((()=>{var e=this._getSelectedItemIndices();this._renderSelection(e,[])}))},_render:function(){this.callBase(),this._updateItemHeightsWrapper(!0)},_itemDataKey:function(){return D},_itemClass:function(){return T},_itemContainer:function(){return this._$container},_itemTitles:function(){return this._itemElements().find("."+k)},_itemContents:function(){return this._itemElements().find("."+A)},_getItemData:function(e){return(0,a.Z)(e).parent().data(this._itemDataKey())||this.callBase.apply(this,arguments)},_executeItemRenderAction:function(e){e.type||this.callBase.apply(this,arguments)},_itemSelectHandler:function(e){(0,a.Z)(e.target).closest(this._itemContents()).length||this.callBase.apply(this,arguments)},_afterItemElementDeleted:function(e,t){this._deferredItems.splice(t.itemIndex,1),this.callBase.apply(this,arguments)},_renderItemContent:function(e){var t=this.callBase((0,r.l)({},e,{contentClass:k,templateProperty:"titleTemplate",defaultTemplateName:this.option("itemTitleTemplate")}));this._attachItemTitleClickAction(t);var i=new I.BH;(0,h.$K)(this._deferredItems[e.index])?this._deferredItems[e.index]=i:this._deferredItems.push(i),(!this.option("deferRendering")||this._getSelectedItemIndices().indexOf(e.index)>=0)&&i.resolve(),i.done(this.callBase.bind(this,(0,r.l)({},e,{contentClass:A,container:(0,p.u)((0,a.Z)("<div>").appendTo((0,a.Z)(t).parent()))})))},_attachItemTitleClickAction:function(e){var t=(0,f.V4)(o.u,this.NAME);l.Z.off(e,t),l.Z.on(e,t,this._itemTitleClickHandler.bind(this))},_itemTitleClickHandler:function(e){this._itemDXEventHandler(e,"onItemTitleClick")},_renderSelection:function(e,t){this._itemElements().addClass(B),this.setAria("hidden",!0,this._itemContents()),this._updateItems(e,t)},_updateSelection:function(e,t){this._updateItems(e,t),this._updateItemHeightsWrapper(!1)},_updateItems:function(e,t){var i=this._itemElements();m.S6(e,((e,t)=>{this._deferredItems[t].resolve();var n=i.eq(t).addClass(y).removeClass(B);this.setAria("hidden",!1,n.find("."+A))})),m.S6(t,((e,t)=>{var n=i.eq(t).removeClass(y);this.setAria("hidden",!0,n.find("."+A))}))},_updateItemHeightsWrapper:function(e){this.option("templatesRenderAsynchronously")?this._animationTimer=setTimeout(function(){this._updateItemHeights(e)}.bind(this)):this._updateItemHeights(e)},_updateItemHeights:function(e){var t=this,i=t._deferredAnimate,n=this._splitFreeSpace(this._calculateFreeSpace());return clearTimeout(this._animationTimer),I.gx.apply(a.Z,[].slice.call(this._itemElements()).map((function(i){return t._updateItemHeight((0,a.Z)(i),n,e)}))).done((function(){i&&i.resolveWith(t)}))},_updateItemHeight:function(e,t,i){var a=e.children("."+k);s.Z.isAnimating(e)&&s.Z.stop(e);var l,o=(0,n.zp)(e);return e.hasClass(y)?(l=t+(0,n.zp)(a),l||((0,n.QQ)(e,"auto"),l=(0,n.zp)(e))):l=(0,n.zp)(a),this._animateItem(e,o,l,i,!!t)},_animateItem:function(e,t,i,n,a){var l;return n||t===i?(e.css("height",i),l=(new I.BH).resolve()):l=s.Z.animate(e,{type:"custom",from:{height:t},to:{height:i},duration:this.option("animationDuration"),easing:this.option("_animationEasing")}),l.done((function(){e.hasClass(y)&&!a&&e.css("height",""),e.not("."+y).addClass(B)}))},_splitFreeSpace:function(e){return e?e/this.option("selectedItems").length:e},_calculateFreeSpace:function(){var e=this.option("height");if(void 0!==e&&"auto"!==e){var t=this._itemTitles(),i=0;return m.S6(t,(function(e,t){i+=(0,n.zp)(t)})),(0,n.Cr)(this.$element())-i}},_visibilityChanged:function(e){e&&this._dimensionChanged()},_dimensionChanged:function(){this._updateItemHeights(!0)},_clean:function(){clearTimeout(this._animationTimer),this.callBase()},_tryParseItemPropertyName:function(e){var t=e.match(/.*\.(.*)/);if((0,h.$K)(t)&&t.length>=1)return t[1]},_optionChanged:function(e){switch(e.name){case"items":this.callBase(e),"title"===this._tryParseItemPropertyName(e.fullName)&&this._renderSelection(this._getSelectedItemIndices(),[]),"visible"===this._tryParseItemPropertyName(e.fullName)&&this._updateItemHeightsWrapper(!0),!0===this.option("repaintChangesOnly")&&"items"===e.fullName&&(this._updateItemHeightsWrapper(!0),this._renderSelection(this._getSelectedItemIndices(),[]));break;case"animationDuration":case"onItemTitleClick":case"_animationEasing":break;case"collapsible":this.option("selectionRequired",!this.option("collapsible"));break;case"itemTitleTemplate":case"height":case"deferRendering":this._invalidate();break;case"multiple":this.option("selectionMode",e.value?"multiple":"single");break;default:this.callBase(e)}},expandItem:function(e){return this._deferredAnimate=new I.BH,this.selectItem(e),this._deferredAnimate.promise()},collapseItem:function(e){return this._deferredAnimate=new I.BH,this.unselectItem(e),this._deferredAnimate.promise()},updateDimensions:function(){return this._updateItemHeights(!1)}});(0,_.Z)("dxAccordion",H),t["default"]=H},93468:function(e,t,i){i.d(t,{Z:function(){return u}});var n=i(73396),a=i(87139),l=(0,n.aZ)({__name:"contact-status",props:{value:null,showText:{type:Boolean,default:!0}},setup(e){const t=e;return(e,i)=>((0,n.wg)(),(0,n.iD)("span",{class:(0,a.C_)("contact-status status-"+t.value?.toLowerCase())},(0,a.zw)(t.showText?this.props.value:""),3))}}),s=i(40089);const o=(0,s.Z)(l,[["__scopeId","data-v-34610948"]]);var u=o},88706:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(73396),a=i(87139);const l={class:"host"};var s=(0,n.aZ)({__name:"form-photo",props:{link:{default:""},size:{default:124}},setup(e){const t=e;return(e,i)=>((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",{style:(0,a.j5)({width:t.size+"px",height:t.size+"px",backgroundImage:`url('data:image/png;base64,${t.link}')`}),class:"photo dx-card"},null,4)]))}}),o=i(40089);const u=(0,o.Z)(s,[["__scopeId","data-v-2721d06f"]]);var d=u}}]);