"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[7629],{13816:function(e,t,r){r.d(t,{V:function(){return c}});var o=r(99835),l=r(57276),n=r(53106),i=r(7154),a=r(5016),d=r(19657),f="dx-export-loadpanel";class c{constructor(e,t,r,l){this._$targetElement=t,this._$container=r,this._loadPanel=e._createComponent((0,o.Z)("<div>").addClass(f).appendTo(this._$container),a.Z,this.getOptions(l))}getDefaultOptions(){return{animation:null,shading:!1,height:90,width:200,container:this._$container}}getOptions(e){return(0,i.$K)(e.text)?e.message=e.text:e.message=n.Z.format("dxDataGrid-exporting"),(0,l.l)(this.getDefaultOptions(),e)}show(){this._loadPanel.option("position",d.Z.calculateLoadPanelPosition(this._$targetElement)),this._loadPanel.show()}dispose(){(0,o.Z)(this._loadPanel.element()).remove(),delete this._loadPanel}}},17629:function(e,t,r){r.d(t,{d3:function(){return Le},AI:function(){return Oe}});var o=r(7154),l=r(90473),n=r(81096),i=r(57276);function a(e){var t,r,l,n;return(0,o.kE)(e)?{top:e,right:e,bottom:e,left:e}:{top:null!==(t=null===e||void 0===e?void 0:e.top)&&void 0!==t?t:0,right:null!==(r=null===e||void 0===e?void 0:e.right)&&void 0!==r?r:0,bottom:null!==(l=null===e||void 0===e?void 0:e.bottom)&&void 0!==l?l:0,left:null!==(n=null===e||void 0===e?void 0:e.left)&&void 0!==n?n:0}}function d(e){e.forEach((e=>{e.cells.forEach((e=>{var{pdfCell:t}=e;t.padding=a(t.padding)}))}))}var f="...";function c(e,t){var r=1/e.internal.scaleFactor;return t*r}function u(e){return e.internal.pageSize.getWidth()}function h(e){return e.internal.pageSize.getHeight()}function s(e,t,r,o){var{wordWrapEnabled:l,targetRectWidth:n}=o;if(l){var i=e.getFont(null===r||void 0===r?void 0:r.name,null===r||void 0===r?void 0:r.style);return e.splitTextToSize(t,n,{fontSize:(null===r||void 0===r?void 0:r.size)||e.getFontSize(),fontName:i.fontName,fontStyle:i.fontStyle})}var a=t.split("\n").filter((e=>""!==e)).join(" ");if(v(e,a,r).w<=n)return[a];var d=v(e,a+f,r).w;while(a.length>0&&d>n){var c=0;d>=2*n&&(c=a.length/2),c<1&&(c=1),a=a.substring(0,a.length-c),d=v(e,a+f,r).w}return[a+f]}function p(e,t){var r=e-(t.left+t.right);return r>=0?r:0}function v(e,t,r){return e.getTextDimensions(t,{font:e.getFont(null===r||void 0===r?void 0:r.name,null===r||void 0===r?void 0:r.style),fontSize:(null===r||void 0===r?void 0:r.size)||e.getFontSize()})}function g(e,t,r,o){var{wordWrapEnabled:l,targetRectWidth:n}=o,i=v(e,t,r).h,a=s(e,t,r,{wordWrapEnabled:l,targetRectWidth:n}).length;return i*a*e.getLineHeightFactor()}function w(e,t,r){if(t.length!==r.length)throw"the cells count must be equal to the count of the columns";for(var l=0,n=0;n<t.length;n++)if(!(0,o.$K)(t[n].rowSpan)){var i=t[n].pdfCell.text,a=t[n].pdfCell.padding,d=t[n].pdfCell.font,f=t[n].pdfCell.wordWrapEnabled,c=r[n],u=p(c,a);if((0,o.$K)(i)){var h=""!==i?g(e,i,d,{wordWrapEnabled:f,targetRectWidth:u}):0,s=h+a.top+a.bottom;l<s&&(l=s)}}return l}function x(e,t){t.forEach((t=>{t.cells.forEach((t=>{var{pdfCell:r}=t;if((0,o.$K)(r.text)){var l=s(e,r.text,r.font,{wordWrapEnabled:r.wordWrapEnabled,targetRectWidth:p(r._rect.w,r.padding)});r.text=l.join("\n")}}))}))}function C(e,t,r){t.forEach((t=>{t.forEach((t=>{var o=u(e)-(t._rect.x+t._rect.w),l=r.margin.left-r.margin.right;t._rect.x=o+l}))}))}var m=(e,t)=>e+t;function _(e,t,r,l,n){var i=t.getColumnsWidths().map((t=>c(e,null!==t&&void 0!==t?t:150))),a=i.filter(((e,t)=>!(0,o.$K)(n[t]))).reduce(m,0),d=n.filter((e=>(0,o.kE)(e))).reduce(m,0),f=y(e,r,l),u=d<f?(f-d)/a:1;return i.map(((e,t)=>{var r;return null!==(r=n[t])&&void 0!==r?r:e*u}))}function y(e,t,r){return u(e)-t-r.left-r.right}function b(e,t,r,o){var l=_(e,t,o.topLeft.x,o.margin,o.columnWidths);r.forEach((e=>{e.cells.forEach(((e,t)=>{var{gridCell:r,pdfCell:o}=e;o._rect.w=l[t]}))}))}function E(e,t,r){t.forEach((t=>{var l,n=t.cells.map((e=>e.pdfCell));if(r.onRowExporting){var i={rowCells:n};r.onRowExporting(i),(0,o.$K)(i.rowHeight)&&(l=i.rowHeight)}t.height=(0,o.$K)(l)?l:w(e,t.cells,n.map((e=>e._rect.w))),n.forEach((e=>{e._rect.h=t.height}))}))}function $(e){for(var t=0;t<e.length;t++)for(var r=e[t],l=0;l<r.cells.length;l++){var n=r.cells[l];if((0,o.$K)(n.colSpan)&&!(0,o.$K)(n.pdfCell.isMerged))for(var i=1;i<=n.colSpan;i++){var a=e[t].cells[l+i];n.pdfCell._rect.w+=a.pdfCell._rect.w,a.pdfCell._rect.w=0,a.pdfCell.isMerged=!0}}}function I(e){for(var t=0;t<e.length;t++)for(var r=e[t],l=0;l<r.cells.length;l++){var n=r.cells[l];if((0,o.$K)(n.rowSpan)&&!(0,o.$K)(n.pdfCell.isMerged))for(var i=1;i<=n.rowSpan;i++){var a=e[t+i].cells[l];n.pdfCell._rect.h+=a.pdfCell._rect.h,a.pdfCell._rect.h=0,a.pdfCell.isMerged=!0}}}function K(e,t){e.forEach((e=>{e.cells[0].pdfCell._rect.w-=e.indentLevel*t.indent}))}function W(e){for(var t=0;t<e.length;t++)for(var r=e[t].cells,l=0;l<r.length;l++){var n=r[l].pdfCell,i=l>=1?r[l-1].pdfCell:null,a=t>=1?e[t-1].cells[l].pdfCell:null;!1!==n.drawLeftBorder||(0,o.$K)(r[l].colSpan)?(0,o.$K)(n.drawLeftBorder)||(0,o.$K)(i)&&!1===i.drawRightBorder&&(n.drawLeftBorder=!1):(0,o.$K)(i)&&(i.drawRightBorder=!1),!1===n.drawTopBorder?(0,o.$K)(a)&&(a.drawBottomBorder=!1):(0,o.$K)(n.drawTopBorder)||(0,o.$K)(a)&&!1===a.drawBottomBorder&&(n.drawTopBorder=!1)}}function S(e,t,r){var o,l=null===r||void 0===r?void 0:r.topLeft,n=null===r||void 0===r?void 0:r.margin,i=(null!==(o=null===l||void 0===l?void 0:l.y)&&void 0!==o?o:0)+n.top;t.forEach((e=>{var t,o=(null!==(t=null===l||void 0===l?void 0:l.x)&&void 0!==t?t:0)+n.left,a=e.indentLevel*r.indent;e.cells.forEach((e=>{e.pdfCell._rect.x=o+a,e.pdfCell._rect.y=i,o+=e.pdfCell._rect.w})),i+=e.height}))}function T(e,t,r){var l,n,i,a,d,f,c,u,h,s;t.forEach((e=>{(!(0,o.$K)(c)||c>e._rect.x)&&(c=e._rect.x),(!(0,o.$K)(u)||u>e._rect.y)&&(u=e._rect.y),(!(0,o.$K)(h)||h<e._rect.x+e._rect.w)&&(h=e._rect.x+e._rect.w),(!(0,o.$K)(s)||s<e._rect.y+e._rect.h)&&(s=e._rect.y+e._rect.h)}));var p=null!==(l=null!==(n=c)&&void 0!==n?n:null===r||void 0===r||null===(i=r.topLeft)||void 0===i?void 0:i.x)&&void 0!==l?l:0,v=null!==(a=null!==(d=u)&&void 0!==d?d:null===r||void 0===r||null===(f=r.topLeft)||void 0===f?void 0:f.y)&&void 0!==a?a:0,g=(0,o.$K)(h)?h-p:0,w=(0,o.$K)(s)?s-v:0;return{x:p,y:v,w:g,h:w}}function L(e,t){var r=O(e,t);t.forEach((e=>{e.height+=r[e.rowIndex]})),t.forEach((e=>{e.cells.forEach((r=>{var o,l=(null!==(o=r.rowSpan)&&void 0!==o?o:0)+1;r.pdfCell._rect.h=t.slice(e.rowIndex,e.rowIndex+l).reduce(((e,t)=>e+t.height),0)}))}))}function O(e,t){var r=Array.from({length:t.length},(()=>0)),l=R(t);return l.forEach((l=>{var n=l.cells.filter((e=>(0,o.$K)(e.rowSpan)));n.forEach((o=>{var n=p(o.pdfCell._rect.w,o.pdfCell.padding),i=g(e,o.pdfCell.text,o.pdfCell.font,{wordWrapEnabled:o.pdfCell.wordWrapEnabled,targetRectWidth:n}),a=i+o.pdfCell.padding.top+o.pdfCell.padding.bottom,d=o.rowSpan+1,f=t.slice(l.rowIndex,l.rowIndex+d).reduce(((e,t)=>e+t.height+r[t.rowIndex]),0);if(a>f)for(var c=(a-f)/d,u=l.rowIndex;u<l.rowIndex+d;u++)r[u]+=c}))})),r}function R(e){var t=e=>{var t=e.cells.map((e=>{var t;return null!==(t=e.rowSpan)&&void 0!==t?t:0}));return Math.max(...t)};return[...e].sort(((e,r)=>{var o=t(e),l=t(r);return o>l?1:l>o?-1:0}))}r(44936);var z=r(3209),F=r(49946),P={base:{font:{size:10},borderWidth:.5,borderColor:"#979797"},header:{textColor:"#979797"},group:{},data:{},groupFooter:{},totalFooter:{}};function Z(e,t,r,o){for(var l=[],n=t.getRowsCount(),i=!!r.option("wordWrapEnabled"),a=!!r.option("rtlEnabled"),d=t.getColumns(),f=t.getStyles(),c=0;c<n;c++){var u=t.getCellData(c,0,!0).cellSourceData.rowType,h="header"!==u?t.getGroupLevel(c):0,s=l[c-1];"groupFooter"===u&&"groupFooter"===(null===s||void 0===s?void 0:s.rowType)&&(h=s.indentLevel-1),l.push({rowType:u,indentLevel:h,cells:D({doc:e,dataProvider:t,rowIndex:c,wordWrapEnabled:i,columns:d,styles:f,rowType:u,backgroundColor:"header"===u?o:void 0,rtlEnabled:a}),rowIndex:c})}return l}function D(e){for(var{doc:t,dataProvider:r,rowIndex:l,wordWrapEnabled:i,columns:a,styles:d,rowType:f,backgroundColor:u,rtlEnabled:h}=e,s=[],p=0;p<a.length;p++){var v,g=r.getCellData(l,p,!0),w=d[r.getStyleId(l,p)],x=B(a[p],f,w),C=h?"right":"left",m=c(t,5),_={text:k(g.value,w.format),verticalAlign:"middle",horizontalAlign:null!==(v=x.alignment)&&void 0!==v?v:C,wordWrapEnabled:i,backgroundColor:u,padding:{top:m,right:m,bottom:m,left:m},_rect:{},_internalTextOptions:{}};h&&(_._internalTextOptions.isInputVisual=!1,_._internalTextOptions.isOutputVisual=!0,_._internalTextOptions.isInputRtl=!0,_._internalTextOptions.isOutputRtl=!1);var y={gridCell:g.cellSourceData,pdfCell:(0,n.Z)({},_,x)};if("header"===f){var b=r.getCellMerging(l,p);b&&b.rowspan>0&&(y.rowSpan=b.rowspan),b&&b.colspan>0&&(y.colSpan=b.colspan)}else if("group"===f){var E=h?"drawRightBorder":"drawLeftBorder",$=h?"drawLeftBorder":"drawRightBorder";if(y.pdfCell[E]=0===p,y.pdfCell[$]=p===a.length-1,p>0){var I=s.slice(1).reduce(((e,t)=>e&&!(0,o.$K)(t.pdfCell.text)),!0);if(!(0,o.$K)(y.pdfCell.text)&&I){s[0].pdfCell[$]=!0;for(var K=0;K<s.length;K++)s[K].colSpan=s.length;y.colSpan=s.length}}}s.push(y)}return s}function A(){return P.base}function B(e,t,r){var o=(0,n.Z)({},P.base,P[t]),l="header"===t?e.alignment:r.alignment;return l&&(o.alignment=l),r.bold&&"header"!==t&&(o.font=(0,n.Z)({},o.font,{style:"bold"})),o}function k(e,t){if((0,o.$K)(t)){if((0,o.J_)(e))return z["default"].format(e,t);if((0,o.kE)(e))return F.Z.format(e,t)}return null===e||void 0===e?void 0:e.toString()}var M=r(87606),j=["_rect","gridCell"];function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}function G(e){return Math.round(1e3*e)/1e3}function N(e,t,r,o){r.forEach((r=>{var{_rect:l,gridCell:n}=r,i=(0,M.Z)(r,j),{x:a,y:d,w:f,h:c}=l,u={x:a,y:d,w:f,h:c},h={doc:e,rect:u,pdfCell:i,gridCell:n,cancel:!1};null===t||void 0===t||t(h),h.cancel||(U(e,r),Q(e,r,o))}))}function V(e,t,r,o,l){e.line(G(t),G(r),G(o),G(l))}function q(e,t,r,l,n,i){(0,o.$K)(i)?e.rect(G(t),G(r),G(l),G(n),i):e.rect(G(t),G(r),G(l),G(n))}function Y(e){return(e.getLineHeightFactor()-1.15)*e.getFontSize()}function J(e,t,r,o,l,n){var a=t.split("\n"),d=a.length,f=g(e,a[0],e.getFont(),{wordWrapEnabled:!1,targetRectWidth:1e9}),c=null!==o&&void 0!==o?o:"middle",u=null!==l&&void 0!==l?l:"left",h={top:0,middle:.5,bottom:1},s=r.y+r.h*h[c]-f*(d-1)*h[c]+Y(e),p=r.x+r.w*{left:0,center:.5,right:1}[u],v=(0,i.l)({baseline:c,align:u},n);e.text(a.join("\n"),G(p),G(s),v)}function U(e,t){(0,o.$K)(t.backgroundColor)&&(le(e,"fill",t.backgroundColor),q(e,t._rect.x,t._rect.y,t._rect.w,t._rect.h,"F"))}function Q(e,t,r){if((0,o.$K)(t.text)&&""!==t.text){var{textColor:l,font:n,_rect:i,padding:a}=t;re(e,{textColor:l,font:n},r);var d,f,c={x:i.x+a.left,y:i.y+a.top,w:i.w-(a.left+a.right),h:i.h-(a.top+a.bottom)};if((0,o.$K)(t._textLeftOffset)||(0,o.$K)(t._textTopOffset))c.x=c.x+(null!==(d=t._textLeftOffset)&&void 0!==d?d:0),c.y=c.y+(null!==(f=t._textTopOffset)&&void 0!==f?f:0),e.saveGraphicsState(),ue(e,t._rect.x,t._rect.y,t._rect.w,t._rect.h);J(e,t.text,c,t.verticalAlign,t.horizontalAlign,t._internalTextOptions),((0,o.$K)(t._textLeftOffset)||(0,o.$K)(t._textTopOffset))&&e.restoreGraphicsState()}}function X(e,t,r){t.filter((e=>!(0,o.$K)(e.borderColor))).forEach((t=>{te(e,t._rect,t,r)})),t.filter((e=>(0,o.$K)(e.borderColor))).forEach((t=>{te(e,t._rect,t,r)}))}function ee(e,t,r,o){te(e,t,r,o)}function te(e,t,r,l){var{borderWidth:n,borderColor:i,drawLeftBorder:a=!0,drawRightBorder:d=!0,drawTopBorder:f=!0,drawBottomBorder:c=!0}=r;if(!(0,o.$K)(t))throw"rect is required";(a||d||f||c)&&(a&&d&&f&&c?(oe(e,{borderWidth:n,borderColor:i},l),q(e,t.x,t.y,t.w,t.h)):(oe(e,{borderWidth:n,borderColor:i},l),f&&V(e,t.x,t.y,t.x+t.w,t.y),a&&V(e,t.x,t.y,t.x,t.y+t.h),d&&V(e,t.x+t.w,t.y,t.x+t.w,t.y+t.h),c&&V(e,t.x,t.y+t.h,t.x+t.w,t.y+t.h)))}function re(e,t,r){var{textColor:l,font:n}=t;le(e,"text",(0,o.$K)(l)?l:r.textColor);var a=(0,o.$K)(n)?(0,i.l)({},r.font,n):r.font,d=e.getFont();(a.name!==d.fontName||a.style!==d.fontStyle||(0,o.$K)(a.weight))&&e.setFont(a.name,a.style,a.weight),a.size!==e.getFontSize()&&e.setFontSize(a.size)}function oe(e,t,r){var{borderWidth:l,borderColor:n}=t,i=(0,o.$K)(l)?l:r.borderWidth;i!==de(e)&&fe(e,c(e,i)),le(e,"draw",(0,o.$K)(n)?n:r.borderColor)}function le(e,t,r){var o="get".concat(H(t),"Color"),l="set".concat(H(t),"Color"),{ch1:n=r,ch2:i,ch3:a,ch4:d}=r,f=e.__private__.decodeColorString(e.__private__.encodeColorString({ch1:n,ch2:i,ch3:a,ch4:d,precision:"text"===t?3:2}));f===e[o]()&&"fill"!==t||e[l].apply(e,[n,i,a,d].filter((e=>void 0!==e)))}function ne(e){var t=e.getFont();return{borderWidth:de(e),borderColor:e.getDrawColor(),font:{name:t.fontName,style:t.fontStyle,size:e.getFontSize()},textColor:e.getTextColor()}}function ie(e,t){var{borderWidth:r,borderColor:o,font:l,textColor:n}=t,i=e.getFont();i.fontName===l.name&&i.fontStyle===l.style||e.setFont(l.name,l.style,void 0);var a=e.getFontSize();a!==l.size&&e.setFontSize(l.size),de(e)!==r&&fe(e,r),e.getDrawColor()!==o&&e.setDrawColor(o),e.getTextColor()!==n&&e.setTextColor(n)}function ae(e){e.addPage(),ce(e)}function de(e){var t;return(0,o.$K)(e.getLineWidth)?e.getLineWidth():null!==(t=e.__borderWidth)&&void 0!==t?t:.200025}function fe(e,t){e.setLineWidth(t),(0,o.$K)(e.getLineWidth)||(e.__borderWidth=t)}function ce(e){(0,o.$K)(e.getLineWidth)||(e.__borderWidth=null)}function ue(e,t,r,o,l){e.moveTo(G(t),G(r)),e.lineTo(G(t+o),G(r)),e.lineTo(G(t+o),G(r+l)),e.lineTo(G(t),G(r+l)),e.clip(),e.discardPath()}var he=e=>"header"===(null===e||void 0===e?void 0:e.sourceCellInfo.gridCell.rowType),se=(e,t,r,o,l)=>{var[i,a]=o(t,e),d=[t?i.map((e=>(0,n.Z)({},e,{y:r}))):i];while(!l(!1,a[0].h))[i,a]=o(!1,a),d.push(i);return[d,a]},pe=(e,t,r)=>{t.forEach(((e,t)=>{e.sourceCellInfo.text=r[t].sourceCellInfo.text,e.h=r[t].h}));var o=e.indexOf(t[t.length-1])+1;if(!(o>=e.length))for(var l=e[o].y-(t[0].y+r[0].h),n=o;n<e.length;n++)e[n].y=e[n].y-l},ve=(e,t)=>t&&he(e[e.length-1]),ge=(e,t,r,o,l)=>{if(!o)return[];var n=e[e.length-1],i=t[e.length];if(!i||he(i))return[];var a=l(r,i.h);if(a&&!r)return[];var d=t.filter((e=>{var{y:t}=e;return t===i.y})),f=n.y+n.h,[c,u]=se(d,r,f,o,l);return pe(t,d,u),c};function we(e,t,r){return(0,n.Z)({},e,{sourceCellInfo:(0,n.Z)({},e.sourceCellInfo,{text:t}),y:r})}var xe=(e,t,r,o)=>(l,n)=>{var i=[],a=[],d=0,f=0;return n.forEach((n=>{var{w:c,sourceCellInfo:u}=n,h=!l&&t.repeatHeaders?r:r+t.topLeft.y,p=v(e,u.text,u.font).h,w=u.padding.top+u.padding.bottom,x=o.y-h-w-t.margin.top,C=Math.floor(x/(p*e.getLineHeightFactor())),m=s(e,u.text,u.font,{wordWrapEnabled:u.wordWrapEnabled,targetRectWidth:c});if(C<m.length){var _=m.slice(0,C).join("\n"),y=g(e,_,u.font,{wordWrapEnabled:u.wordWrapEnabled,targetRectWidth:c});d=Math.max(d,y+w),f=n.h-y,i.push(we(n,_,t.margin.top)),a.push(we(n,m.slice(C).join("\n"),t.margin.top))}else{var b=g(e,u.text,u.font,{wordWrapEnabled:u.wordWrapEnabled,targetRectWidth:c});d=Math.max(d,b+w),f=Math.max(f,b+w),i.push(we(n,u.text,t.margin.top)),a.push(we(n,"",t.margin.top))}})),i.forEach((e=>e.h=d)),a.forEach((e=>e.h=f)),[i,a]},Ce=.001;function me(e){return[].concat.apply([],e.map((e=>e.cells.filter((e=>!(0,o.$K)(e.pdfCell.isMerged))).map((e=>(0,n.Z)({},e.pdfCell._rect,{sourceCellInfo:(0,n.Z)({},e.pdfCell,{gridCell:e.gridCell})}))))))}function _e(e,t,r,o,l){if(0===t.length)return[[]];var i={x:u(e)-r.margin.right,y:h(e)-r.margin.bottom},a=t.filter((e=>"header"===e.rowType)),d=a.reduce(((e,t)=>e+t.height),0),f=ye(me(t),r.margin.top,"y","h",((e,t)=>{var o=!e&&r.repeatHeaders?d:0;return G(t+o)<=G(i.y)}),((e,t,r,o)=>{var n={sourceRect:e,topRect:{x:e.x,y:e.y,w:e.w,h:t-e.y},bottomRect:{x:e.x,y:t,w:e.w,h:e.h-(t-e.y)}};l(n),r.push(n.topRect),o.push(n.bottomRect)}),xe(e,r,d,i));if(r.repeatHeaders)for(var c=1;c<f.length;c++){f[c].forEach((e=>e.y+=d));var s=me(a);s.forEach((e=>{e.y-=r.topLeft.y})),f[c]=[...s,...f[c]]}var p=0;while(p<f.length){var v=ye(f[p],r.margin.left,"x","w",((e,t)=>G(t)<=G(i.x)),((e,t,r,l)=>{var n={sourceRect:e,leftRect:{x:e.x,y:e.y,w:t-e.x,h:e.h},rightRect:{x:t,y:e.y,w:e.w-(t-e.x),h:e.h}};o(n),r.push(n.leftRect),l.push(n.rightRect)}));v.length>1?(f.splice(p,1,...v),p+=v.length):p+=1}return f.map((e=>e.map((e=>(0,n.Z)({},e.sourceCellInfo,{_rect:e})))))}function ye(e,t,r,l,n,i,a){var d=[],f=[...e],c=(e,r)=>n(e,r+t),u=function(){var e=0,u=f.filter((t=>{var o=t[r]+t[l];return!!n(0===d.length,o)&&(e<=o&&(e=o),!0)})),h=ve(u,0===d.length),s=ge(u,f,h,a,c),p=f.filter((t=>{var o=t[r],n=t[r]+t[l];return e-o>Ce&&n-e>Ce}));p.forEach((t=>{i(t,e,u,f);var r=f.indexOf(t);-1!==r&&f.splice(r,1)})),u.forEach((e=>{var t=f.indexOf(e);-1!==t&&f.splice(t,1)})),f.forEach((l=>{l[r]=(0,o.$K)(e)?l[r]-e+t:l[r]}));var v=h&&s.length>0;if(v){var[g,...w]=s;d.push([...u,...g]),d.push(...w)}else if(u.length>0)d.push(u),d.push(...s);else{if(!(s.length>0))return d.push(f),1;d.push(...s),d.push(f)}};while(f.length>0)if(u())break;return d}var be=r(53106),Ee=r(13816),$e=r(99418);function Ie(e){var{jsPDFDocument:t}=e,r=(0,i.l)({},e);return(0,o.$K)(r.topLeft)||(r.topLeft={x:0,y:0}),(0,o.$K)(r.indent)||(r.indent=0),(0,o.$K)(r.repeatHeaders)||(r.repeatHeaders=!0),(0,o.$K)(r.margin)||(r.margin=c(t,40)),r.margin=a(r.margin),Array.isArray(r.columnWidths)||(r.columnWidths=[]),(0,o.$K)(r.loadPanel)||(r.loadPanel={}),(0,o.$K)(r.loadPanel.enabled)||(r.loadPanel.enabled=!0),(0,o.$K)(r.loadPanel.text)||(r.loadPanel.text=be.Z.format("dxDataGrid-exporting")),r}function Ke(e){var t,r,{jsPDFDocument:l,component:i,selectedRowsOnly:a,loadPanel:f}=e,c=(null===(t=i._getInternalInstance)||void 0===t?void 0:t.call(i))||i,u=c.option("loadPanel")&&c.option("loadPanel").enabled;if(u&&i.option("loadPanel.enabled",!1),f.enabled&&(0,$e.Ym)()){var h=i.getView("rowsView");r=new Ee.V(i,h.element(),h.element().parent(),f),r.show()}var s=i.getDataProvider(a);return new Promise((t=>{s.ready().done((()=>{var r,a,f=Z(l,s,i,null===(r=e.rowOptions)||void 0===r||null===(a=r.headerStyles)||void 0===a?void 0:a.backgroundColor);e.customizeCell&&f.forEach((t=>t.cells.forEach((t=>e.customizeCell(t))))),d(f),b(l,s,f,e),K(f,e),$(f),E(l,f,e),I(f),L(l,f),S(l,f,e),W(f),x(l,f);var c=ne(l),u=!!i.option("rtlEnabled"),h=_e(l,f,e,(e=>{var t,{sourceRect:r,leftRect:i,rightRect:a}=e,d={},f={},c=(null===(t=r.sourceCellInfo.text)||void 0===t?void 0:t.length)>0;if(c)if(u){var h=l.getTextWidth(r.sourceCellInfo.text)>i.w,s=!(0,o.$K)(r.sourceCellInfo.horizontalAlign)||"right"===r.sourceCellInfo.horizontalAlign;if(h||!s){var p,v,g,w,x,C;if("right"===(null===(p=r.sourceCellInfo)||void 0===p?void 0:p.horizontalAlign))w=null!==(C=r.sourceCellInfo._textLeftOffset)&&void 0!==C?C:0,x=w+i.w;else"center"===(null===(v=r.sourceCellInfo)||void 0===v?void 0:v.horizontalAlign)?(x=r.x+r.w-(a.x+a.w)+r.sourceCellInfo._rect.w/2-i.w/2,w=x-a.w):"left"===(null===(g=r.sourceCellInfo)||void 0===g?void 0:g.horizontalAlign)&&(x=r.x+r.w-(a.x+a.w),w=x-a.w);d=(0,n.Z)({},{_textLeftOffset:w}),f=(0,n.Z)({},{_textLeftOffset:x})}else f=(0,n.Z)({},{text:""})}else{var m=l.getTextWidth(r.sourceCellInfo.text)>i.w,_=!(0,o.$K)(r.sourceCellInfo.horizontalAlign)||"left"===r.sourceCellInfo.horizontalAlign;if(m||!_){var y,b,E,$,I,K;if("left"===(null===(y=r.sourceCellInfo)||void 0===y?void 0:y.horizontalAlign))$=null!==(K=r.sourceCellInfo._textLeftOffset)&&void 0!==K?K:0,I=$-i.w;else if("center"===(null===(b=r.sourceCellInfo)||void 0===b?void 0:b.horizontalAlign)){var W,S=null!==(W=r.sourceCellInfo._textLeftOffset)&&void 0!==W?W:0;$=S+(r.x+r.w/2)-(i.x+i.w/2),I=S+(r.x+r.w/2)-(a.x+a.w/2)}else"right"===(null===(E=r.sourceCellInfo)||void 0===E?void 0:E.horizontalAlign)&&($=r.x+r.w-(i.x+i.w),I=r.x+r.w-(a.x+a.w));d=(0,n.Z)({},{_textLeftOffset:$}),f=(0,n.Z)({},{_textLeftOffset:I})}else f=(0,n.Z)({},{text:""})}i.sourceCellInfo=(0,n.Z)({},r.sourceCellInfo,{debugSourceCellInfo:r.sourceCellInfo},d),a.sourceCellInfo=(0,n.Z)({},r.sourceCellInfo,{debugSourceCellInfo:r.sourceCellInfo},f)}),(e=>{var t,{sourceRect:r,topRect:o,bottomRect:i}=e,a={},d={},f=(null===(t=r.sourceCellInfo.text)||void 0===t?void 0:t.length)>0;if(f){var c,u=l.getTextDimensions(r.sourceCellInfo.text).h>o.h,h="top"===(null===(c=r.sourceCellInfo)||void 0===c?void 0:c.verticalAlign);if(u||!h){var s,p,v,g,w,x;if("top"===(null===(s=r.sourceCellInfo)||void 0===s?void 0:s.verticalAlign))g=null!==(x=r.sourceCellInfo._textTopOffset)&&void 0!==x?x:0,w=g-o.h;else if("middle"===(null===(p=r.sourceCellInfo)||void 0===p?void 0:p.verticalAlign)){var C,m=null!==(C=r.sourceCellInfo._textTopOffset)&&void 0!==C?C:0;g=m+(r.y+r.h/2)-(o.y+o.h/2),w=m+(r.y+r.h/2)-(i.y+i.h/2)}else"bottom"===(null===(v=r.sourceCellInfo)||void 0===v?void 0:v.verticalAlign)&&(g=r.y+r.h-(o.y+o.h),w=r.y+r.h-(i.y+i.h));a=(0,n.Z)({},{_textTopOffset:g}),d=(0,n.Z)({},{_textTopOffset:w})}else d=(0,n.Z)({},{text:""})}o.sourceCellInfo=(0,n.Z)({},r.sourceCellInfo,{debugSourceCellInfo:r.sourceCellInfo},a),i.sourceCellInfo=(0,n.Z)({},r.sourceCellInfo,{debugSourceCellInfo:r.sourceCellInfo},d)}));u&&C(l,h,e),h.forEach(((t,r)=>{r>0&&ae(l),N(l,e.customDrawCell,t,c),X(l,t,c);var n=(0,o.$K)(t)&&0===t.length;if(n){var i=T(l,t,e),a=A();ee(l,i,a,c)}})),ie(l,c),t()})).always((()=>{u&&i.option("loadPanel.enabled",u),f.enabled&&(0,$e.Ym)()&&r.dispose()}))}))}var We={getFullOptions:Ie,export:Ke},Se="https://supportcenter.devexpress.com/ticket/details/t1077554";function Te(e){if(!(0,o.$K)(e)||!(0,o.Kn)(e))throw Error('The "exportDataGrid" method requires a configuration object.');if(!(0,o.$K)(e.component)||!(0,o.Kn)(e.component)||"dxDataGrid"!==e.component.NAME)throw Error('The "component" field must contain a DataGrid instance.');if(!(0,o.$K)(e.jsPDFDocument)||!(0,o.Kn)(e.jsPDFDocument))throw Error('The "jsPDFDocument" field must contain a jsPDF instance.');return(0,o.$K)(e.autoTableOptions)&&l.Z.log("W0001","Export","autoTableOptions","22.1","You can migrate from exporting to PDF with the AutoTable plugin to a new export system. See the following topic for more information: ".concat(Se)),We.getFullOptions(e)}function Le(e){return We.export(Te(e))}function Oe(e){var t=e.component;return null===t||void 0===t?void 0:t.exportToPdf(e)}}}]);