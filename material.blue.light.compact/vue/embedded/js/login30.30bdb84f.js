"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[7699],{53877:function(e,t,a){var n=a(9783),r=a(40566),o=a(74933),s=a(93140),i=a(55593);a(31490);t["Z"]=(0,i.Z)({format:function(e,t){var a=(0,n.HD)(t)&&""!==t||(0,n.PO)(t)||(0,n.mf)(t),r=(0,n.kE)(e)||(0,n.J_)(e);return a&&r?(0,n.mf)(t)?t(e):((0,n.HD)(t)&&(t={type:t}),(0,n.kE)(e)?o.Z.format(e,t):(0,n.J_)(e)?s.Z.format(e,t):void 0):(0,n.$K)(e)?e.toString():""},getTimeFormat:function(e){return e?"longtime":"shorttime"},_normalizeFormat:function(e){return Array.isArray(e)?1===e.length?e[0]:function(t){return e.map((function(e){return s.Z.format(t,e)})).join(" ")}:e},getDateFormatByDifferences:function(e,t){var a=[],n=t&&e.millisecond&&!(e.year||e.month||e.day);return n?a.push((function(e){return e.getSeconds()+e.getMilliseconds()/1e3+"s"})):e.millisecond&&a.push("millisecond"),(e.hour||e.minute||!n&&e.second)&&a.unshift(this.getTimeFormat(e.second)),e.year&&e.month&&e.day?t&&"month"===t?"monthandyear":(a.unshift("shortdate"),this._normalizeFormat(a)):e.year&&e.month?"monthandyear":e.year&&e.quarter?"quarterandyear":e.year?"year":e.quarter?"quarter":e.month&&e.day?(t?a.unshift((function(e){return s.Z.getMonthNames("abbreviated")[e.getMonth()]+" "+s.Z.format(e,"day")})):a.unshift("monthandday"),this._normalizeFormat(a)):e.month?"month":e.day?(t?a.unshift("day"):a.unshift((function(e){return s.Z.format(e,"dayofweek")+", "+s.Z.format(e,"day")})),this._normalizeFormat(a)):this._normalizeFormat(a)},getDateFormatByTicks:function(e){var t,a,n;if(e.length>1)for(t=r.Z.getDatesDifferences(e[0],e[1]),n=1;n<e.length-1;n++)a=r.Z.getDatesDifferences(e[n],e[n+1]),t.count<a.count&&(t=a);else t={year:!0,month:!0,day:!0,hour:e[0].getHours()>0,minute:e[0].getMinutes()>0,second:e[0].getSeconds()>0,millisecond:e[0].getMilliseconds()>0};var o=this.getDateFormatByDifferences(t);return o},getDateFormatByTickInterval:function(e,t,a){var o,s=function(e,t,a){switch(t){case"year":case"quarter":e.month=a;case"month":e.day=a;case"week":case"day":e.hour=a;case"hour":e.minute=a;case"minute":e.second=a;case"second":e.millisecond=a}};a=(0,n.HD)(a)?a.toLowerCase():a;var i=r.Z.getDatesDifferences(e,t);e!==t&&function(e,t,a){!a.getMilliseconds()&&a.getSeconds()?a.getSeconds()-t.getSeconds()===1&&(e.millisecond=!0,e.second=!1):!a.getSeconds()&&a.getMinutes()?a.getMinutes()-t.getMinutes()===1&&(e.second=!0,e.minute=!1):!a.getMinutes()&&a.getHours()?a.getHours()-t.getHours()===1&&(e.minute=!0,e.hour=!1):!a.getHours()&&a.getDate()>1?a.getDate()-t.getDate()===1&&(e.hour=!0,e.day=!1):1===a.getDate()&&a.getMonth()?a.getMonth()-t.getMonth()===1&&(e.day=!0,e.month=!1):!a.getMonth()&&a.getFullYear()&&a.getFullYear()-t.getFullYear()===1&&(e.month=!0,e.year=!1)}(i,e>t?t:e,e>t?e:t),o=r.Z.getDateUnitInterval(i),s(i,o,!0),o=r.Z.getDateUnitInterval(a||"second"),s(i,o,!1),i[{week:"day"}[o]||o]=!0;var m=this.getDateFormatByDifferences(i);return m}})},70194:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(73396),r=a(44870),o=a(39710),s=a(1175),i=a(21164),m=a(70085),u=(0,n.aZ)({__name:"task-list-gantt",props:{tasks:{default:()=>[]}},setup(e,{expose:t}){const a=e,u=(0,r.iH)(null),d=()=>{const e=new i.jsPDF;(0,m.AI)({jsPDFDocument:e,component:u.value.instance}).then((()=>{e.save("Tasks.pdf")}))},l=()=>{o.N.push("/planning-task-details")},c=e=>{e.event?.target?.closest(".dx-treelist-expanded, .dx-treelist-collapsed")||l()};return t({onExporting:d}),(e,t)=>((0,n.wg)(),(0,n.j4)((0,r.SU)(s.DxGantt),{ref_key:"dxGanttCmp",ref:u,"task-list-width":500,"scale-type":"weeks",onTaskClick:c,height:700},{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(s.DxTasks),{"data-source":a.tasks,"start-expr":"startDate","end-expr":"dueDate","title-expr":"text"},null,8,["data-source"]),(0,n.Wm)((0,r.SU)(s.DxColumn),{"data-field":"text",caption:"Subject",width:300}),(0,n.Wm)((0,r.SU)(s.DxColumn),{"data-field":"startDate",caption:"Start Date","data-type":"date","sort-order":"asc"}),(0,n.Wm)((0,r.SU)(s.DxColumn),{"data-field":"dueDate",caption:"Due Date","data-type":"date"}),(0,n.Wm)((0,r.SU)(s.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,r.SU)(s.DxItem),{name:"undo"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"redo"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"separator"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"collapseAll"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"expandAll"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"separator"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"addTask"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"deleteTask"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"separator"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"zoomIn"}),(0,n.Wm)((0,r.SU)(s.DxItem),{name:"zoomOut"})])),_:1}),(0,n.Wm)((0,r.SU)(s.DxValidation),{"auto-update-parent-tasks":!0}),(0,n.Wm)((0,r.SU)(s.DxEditing),{enabled:!0})])),_:1},512))}});const d=u;var l=d}}]);