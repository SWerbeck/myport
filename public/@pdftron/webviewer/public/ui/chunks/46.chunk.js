(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1560:function(e,t,n){var a=n(27),o=n(1561);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:function(e){const t=document.getElementsByTagName("apryse-webviewer");if(t.length>0){const n=[];for(let a=0;a<t.length;a++){const o=t[a];if(0===a)o.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);o.shadowRoot.appendChild(t),n.push(t)}}}else document.head.appendChild(e)},singleton:!1};a(o,i);e.exports=o.locals||{}},1561:function(e,t,n){(t=e.exports=n(28)(!1)).push([e.i,".open.ScaleModal{visibility:visible}.closed.ScaleModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.ScaleModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.ScaleModal .modal-container .wrapper .modal-content{padding:10px}.ScaleModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.ScaleModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.ScaleModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.ScaleModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.ScaleModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.ScaleModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.ScaleModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.ScaleModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.ScaleModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.ScaleModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .footer .modal-button{padding:23px 8px}}.ScaleModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .swipe-indicator{display:none}}.ScaleModal .container{box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .ScaleModal .container,.ScaleModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .ScaleModal .container,.ScaleModal .App.is-web-component .container{overflow:auto;max-height:100%}}.ScaleModal .container{display:flex;flex-direction:column;width:480px;padding:0;border-radius:4px;box-shadow:0 0 3px var(--document-box-shadow);overflow:visible}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .container{width:100%;position:fixed;border-radius:0;left:0;bottom:0}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .container{width:100%;position:fixed;border-radius:0;left:0;bottom:0}}.ScaleModal .container .header-container{box-shadow:inset 0 -1px 0 var(--modal-stroke-and-border);padding:20px 16px 16px}.ScaleModal .container .header{margin:0;display:flex;align-items:center;width:100%;height:24px}.ScaleModal .container .header p{font-size:16px;font-weight:700;width:89.286%;margin:0 16px 0 0}.ScaleModal .container .header .scaleModalCloseButton{position:static;height:32px;width:32px}.ScaleModal .container .header .scaleModalCloseButton:hover{background:var(--view-header-button-hover);border-radius:4px}.ScaleModal .container .header .scaleModalCloseButton.selected{background:var(--view-header-button-active);cursor:default}.ScaleModal .container .content-container{padding:24px 16px 16px}.ScaleModal .container .content-container .ui__choice__label{font-weight:700;font-size:13px;line-height:16px;display:flex;align-items:center}.ScaleModal .container .content-container .scaleSetting .custom-option-wrapper{display:flex;align-items:center;justify-content:space-between}.ScaleModal .container .content-container .scaleSetting .custom-option-wrapper .calibrate-btn{font-weight:400;line-height:16px;display:flex;align-items:center;text-align:center;color:#3183c8;background-color:transparent;border:none;cursor:pointer}.ScaleModal .container .content-container .scaleSetting .selector{margin-top:16px;width:100%;height:32px;margin-bottom:18px}.ScaleModal .container .content-container .scaleSetting .selector .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:left}.ScaleModal .container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown .arrow{flex:0 1 auto}.ScaleModal .container .content-container .scaleSetting .selector .Dropdown__wrapper .Dropdown__items{width:100%}.ScaleModal .container .content-container .scaleSetting .block{height:36px}.ScaleModal .container .content-container .scaleSetting .custom-scale-container{margin-top:16px;margin-bottom:16px}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .scale-ratio-display{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper{display:flex;flex-direction:row}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{border-radius:4px;border:1px solid var(--border);width:94px;height:32px;margin-right:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{width:79px;height:32px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input{width:79px;height:32px}}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .scale-input.invalid-value{border-color:red}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:100px;height:32px}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper .Dropdown{height:100%;text-align:left}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input .Dropdown__wrapper .Dropdown__items{width:100%}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:4rem;height:2rem}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .container .content-container .scaleSetting .custom-scale-container .input-wrapper .unit-input{width:4rem;height:2rem}}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .warning-messages{height:16px;font-weight:400;color:red;margin-top:4px;position:relative;display:flex}.ScaleModal .container .content-container .scaleSetting .custom-scale-container .warning-messages .world-value-warning{position:absolute;left:246px}.ScaleModal .container .content-container .precision-container{display:flex;font-size:13px;font-weight:400;margin-top:16px;align-items:center;justify-content:space-between}.ScaleModal .container .content-container .precision-container .precision-selector{display:flex;justify-content:space-between;align-items:center;width:288px;height:32px}.ScaleModal .container .content-container .precision-container .precision-selector .precision-title{height:1rem;font-weight:400;font-size:13px;line-height:16px}.ScaleModal .container .content-container .precision-container .precision-selector .selector{width:223px;height:32px;z-index:0}.ScaleModal .container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper{width:100%;height:100%}.ScaleModal .container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown{height:100%;width:100%!important;text-align:left}.ScaleModal .container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown .arrow{flex:0 1 auto}.ScaleModal .container .content-container .precision-container .precision-selector .selector .Dropdown__wrapper .Dropdown__items{width:100%}.ScaleModal .container .content-container .precision-container .ui__choice__label{font-weight:400}.ScaleModal .container .content-container .precision-container .ui__choice--disabled .ui__choice__label{color:#cfd4da}.ScaleModal .container .footer{display:flex;padding:16px;align-items:center;justify-content:flex-end;width:100%;box-shadow:inset 0 1px 0 var(--modal-stroke-and-border);margin:0}.ScaleModal .container .footer .scale-update{height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;color:var(--blue-5);background-color:transparent;border:1px solid var(--blue-5);box-sizing:border-box;border-radius:4px;cursor:pointer;margin-right:8px}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .container .footer .scale-update{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .container .footer .scale-update{font-size:13px}}.ScaleModal .container .footer .scale-update:enabled:hover{background:var(--outline-hover)}.ScaleModal .container .footer .scale-update:disabled{opacity:.5;cursor:not-allowed}.ScaleModal .container .footer .scale-create{border:none;background-color:transparent;background:var(--primary-button);border-radius:4px;padding:0 8px;height:32px;min-width:72px;display:flex;align-items:center;justify-content:center;position:relative;color:var(--primary-button-text);cursor:pointer}:host(:not([data-tabbing=true])) .ScaleModal .container .footer .scale-create,html:not([data-tabbing=true]) .ScaleModal .container .footer .scale-create{outline:none}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .ScaleModal .container .footer .scale-create{font-size:13px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .ScaleModal .container .footer .scale-create{font-size:13px}}.ScaleModal .container .footer .scale-create:enabled:hover{background:var(--primary-button-hover)}.ScaleModal .container .footer .scale-create:disabled{opacity:.5;cursor:not-allowed}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1735:function(e,t,n){"use strict";n.r(t);n(36),n(52),n(64),n(106),n(7),n(84),n(424),n(104),n(127),n(32),n(39),n(18),n(11),n(13),n(12),n(8),n(9),n(10),n(15),n(14),n(20),n(17);var a=n(0),o=n.n(a),i=n(6),r=n(362),c=n(182),l=n(1371),s=n(1213),d=n(19),p=n.n(d),u=n(370),m=n(1),f=n(2),b=n(3),h=(n(34),n(146),n(183),n(4)),w=n.n(h),g=n(153),x=n(148);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,i,r,c=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var y=window.Core.Scale,M={scale:w.a.array,onScaleChange:w.a.func,precision:w.a.number};function E(e){var t=e.scale,n=e.onScaleChange,c=e.precision,l=S(Object(i.e)((function(e){return[b.a.getMeasurementUnits(e)]}),i.c),1)[0],s=S(Object(a.useState)(""),2),d=s[0],m=s[1],f=S(Object(a.useState)(""),2),h=f[0],w=f[1],v=S(Object(a.useState)(!1),2),M=v[0],E=v[1],A=S(Object(a.useState)(""),2),j=A[0],O=A[1],_=S(Object(a.useState)(""),2),k=_[0],C=_[1],D=S(Object(a.useState)(!1),2),N=D[0],I=D[1],T=Object(a.useRef)(null),L=Object(a.useRef)(null),R=S(Object(r.a)(),1)[0],z=function(e){return e.filter((function(e){return u.e.includes(e)}))},U=M?z(l.from):l.from,H=M?z(l.to):l.to;Object(a.useEffect)((function(){U.includes(t[0][1])||J(U[0],!0)}),[t[0][1]]),Object(a.useEffect)((function(){U.includes(t[0][1])&&!H.includes(t[1][1])&&J(H[0],!1)}),[t[0][1],t[1][1]]),Object(a.useEffect)((function(){var e=function(e){return null==e?void 0:e.toFixed((1/c).toString().length-1)};t[0][0]&&(null==T?void 0:T.current)!==document.activeElement&&m(M?y.getFormattedValue(t[0][0],t[0][1],c,!1,!0)||"":e(t[0][0])||""),!t[1][0]||L&&L.current===document.activeElement||(M||"ft-in"===t[1][1]?w(y.getFormattedValue(t[1][0],t[1][1],c,!1,!0)||""):w(e(t[1][0])||""))}),[t,c,L,T,M,N]),Object(a.useEffect)((function(){E(Object(u.j)(c))}),[c]),Object(a.useEffect)((function(){M?(O(u.i[t[0][1]]),C(u.i[t[1][1]])):"ft-in"===t[1][1]?(O(""),C(u.i["ft-in decimal"])):(O(""),C(""))}),[t,M]),Object(a.useEffect)((function(){!B&&G(L.current.value,!1)}),[t[1][1]]),Object(a.useEffect)((function(){if(F||B)!F&&G(T.current.value,!0),!B&&G(L.current.value,!1);else{var e={value:t[0][0],unit:t[0][1]};G(T.current.value,!0,(function(t){e=t.pageScale}));var n={value:t[1][0],unit:t[1][1]};G(L.current.value,!1,(function(e){n=e.worldScale})),K(new y({pageScale:e,worldScale:n}))}}),[M]);var F=!!t[0][0],B=!!t[1][0],P=p()("scale-input",{"invalid-value":!F}),V=p()("scale-input",{"invalid-value":!B}),K=function(e){var t=function(e){return"ft-in"===e?c/12:c};e.pageScale.value&&e.pageScale.value<c&&(e.pageScale.value=t(e.pageScale.unit)),e.worldScale.value&&e.worldScale.value<c&&(e.worldScale.value=t(e.worldScale.unit)),n(e)},G=function(e,n,a){var o=function(e){if(n&&e!==t[0][0]||!n&&e!==t[1][0]){var o=new y({pageScale:{value:n?e:t[0][0],unit:t[0][1]},worldScale:{value:n?t[1][0]:e,unit:t[1][1]}});a?a(o):K(o)}};n?m(e):w(e);var i=e.trim();if(M){var r=n?t[0][1]:t[1][1];if("in"===r){if(u.k.test(i)){var c=Object(u.p)(i);if(c>0)return void o(c)}}else if("ft-in"===r&&u.g.test(i)){var l=Object(u.o)(i);if(l>0)return void o(l)}}else if(n||"ft-in"!==t[1][1]){if(u.d.test(i)){return void o(parseFloat(i)||0)}}else if(u.f.test(i)){var s=Object(u.n)(i);if(s>0)return void o(s)}o(void 0)},J=function(e,n){var a,o;a=n&&e!==t[0][1]?{value:t[0][0]?Object(u.c)(t[0][0],t[0][1],e):t[0][0],unit:e}:{value:t[0][0],unit:t[0][1]},o=n||e===t[1][1]?{value:t[1][0],unit:t[1][1]}:{value:t[1][0]?Object(u.c)(t[1][0],t[1][1],e):t[1][0],unit:e},K(new y({pageScale:a,worldScale:o}))},W=function(e){var n=e?t[0][1]:t[1][1];return M?u.i[n]:"ft-in"===n?u.i["ft-in decimal"]:""},$=function(){I((function(e){return!e}))};return o.a.createElement("div",{className:"custom-scale-container"},o.a.createElement("div",{className:"scale-ratio-input-container"},o.a.createElement("div",{className:"scale-ratio-display"},o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("input",{type:M?"text":"number",min:"0",className:P,value:d,"data-element":"customPageScaleValue",onChange:function(e){return G(e.target.value,!0)},placeholder:W(!0),ref:T,onBlur:$}),o.a.createElement(g.a,{content:"option.measurement.scaleModal.paperUnits"},o.a.createElement("div",{className:"unit-input"},o.a.createElement(x.a,{dataElement:"customPageScaleUnit",items:U,onClickItem:function(e){return J(e,!0)},currentSelectionKey:t[0][1]}))))," = ",o.a.createElement("div",{className:"input-wrapper"},o.a.createElement("input",{type:M||"ft-in"===t[1][1]?"text":"number",min:"0",className:V,value:h,"data-element":"customDisplayScaleValue",onChange:function(e){return G(e.target.value,!1)},placeholder:W(!1),ref:L,onBlur:$}),o.a.createElement(g.a,{content:"option.measurement.scaleModal.displayUnits"},o.a.createElement("div",{className:"unit-input"},o.a.createElement(x.a,{items:H,dataElement:"customDisplayScaleUnit",onClickItem:function(e){return J(e,!1)},currentSelectionKey:t[1][1]})))))),o.a.createElement("div",{className:"warning-messages"},!F&&o.a.createElement("div",null,"".concat(R("option.measurement.scaleModal.incorrectSyntax")," ").concat(j)),!B&&o.a.createElement("div",{className:"world-value-warning"},"".concat(R("option.measurement.scaleModal.incorrectSyntax")," ").concat(k))))}E.propTypes=M;var A=E,j=n(5),O=n(310),_=n(21),k=n(57);n(1560);function C(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,i,r,c=[],l=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=i.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(s)throw o}}return c}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=window.Core.Scale,L="custom",R="preset",z=function(e){var t,n,d=e.annotations,h=e.selectedTool,w=Object(i.d)(),S=D(Object(r.a)(),1)[0],v=D(Object(i.e)((function(e){return[b.a.isElementDisabled(e,j.a.SCALE_MODAL),b.a.isElementOpen(e,j.a.SCALE_MODAL),b.a.isElementHidden(e,j.a.SCALE_MODAL),b.a.getCurrentToolbarGroup(e),b.a.getSelectedScale(e),b.a.getActiveToolName(e),b.a.getIsAddingNewScale(e),b.a.getMeasurementScalePreset(e),b.a.getCalibrationInfo(e),b.a.getIsMultipleScalesMode(e)]})),10),y=v[0],M=v[1],E=v[2],N=v[3],I=v[4],z=v[5],U=v[6],H=v[7],F=v[8],B=F.tempScale,P=F.isFractionalUnit,V=v[9],K=D(Object(a.useState)(!1),2),G=K[0],J=K[1],W=D(Object(a.useState)(u.r[u.a.DECIMAL][0]),2),$=W[0],q=W[1],Q=D(Object(a.useState)(L),2),X=Q[0],Y=Q[1],Z=D(Object(a.useState)(H[u.b.METRIC][0]),2),ee=Z[0],te=Z[1],ne=D(Object(a.useState)(new T("")),2),ae=ne[0],oe=ne[1],ie=D(Object(a.useState)(!1),2),re=ie[0],ce=ie[1],le=Object.keys(m.a.getScales()).length;Object(a.useEffect)((function(){u.r[be].includes($)||q(u.r[be][0]),te(H[me][0])}),[G]),Object(a.useEffect)((function(){Y(L),oe(new T(I.getScaleRatioAsArray()));var e=m.a.getScalePrecision(I);if(e){var t=Object(u.j)(e);J(t);var n=u.r[fe(t)].find((function(t){return t[1]===e}));q(n),setTimeout((function(){ce(!1)}))}}),[I]),Object(O.a)((function(){if(X===L)oe(ee[1]);else{var e=u.s[ee[0]];e&&e!==$&&q(e)}}),[X]),Object(O.a)((function(){"toolbarGroup-Measure"===N&&se()}),[N]),Object(a.useEffect)((function(){var e=u.s[ee[0]];e&&X===R&&q(e)}),[ee]),Object(a.useEffect)((function(){!E&&B&&(oe(new T(B)),w(f.a.updateCalibrationInfo({isCalibration:!1})),J(P))}),[E]),Object(a.useEffect)((function(){ce(!0)}),[$,ae,ee,X]),Object(a.useEffect)((function(){M&&U&&!B&&(Y(L),oe(u.l),J(!1),q(u.r[u.a.DECIMAL][0]))}),[M,U]);var se=function(){w(f.a.closeElement(j.a.SCALE_MODAL))},de=function(){var e=function(e,t){var n=e,a=$[1];return G?("ft-in"===t&&(a/=12),n=Math.round(n/a)*a):"ft-in"!==t&&(n=n.toFixed((1/a).toString().length-1)),1*n};if(ue){var t=ae.getScaleRatioAsArray();return t[0][0]=e(t[0][0],t[0][1]),t[1][0]=e(t[1][0],t[1][1]),t}return ee[1].toString()},pe=p()("Modal","ScaleModal",{open:!E,closed:E}),ue=X===L,me=G?u.b.IMPERIAL:u.b.METRIC,fe=function(e){return e?u.a.FRACTIONAL:u.a.DECIMAL},be=fe(G),he=!ue||ae.isValid(),we=ue&&!(u.e.includes(null===(t=ae.pageScale)||void 0===t?void 0:t.unit)&&u.e.includes(null===(n=ae.worldScale)||void 0===n?void 0:n.unit));return!y&&o.a.createElement(c.a,{onSwipedUp:se,onSwipedDown:se,preventDefaultTouchmoveEvent:!0},o.a.createElement(l.a,{locked:!E},o.a.createElement("div",{className:pe,"data-element":j.a.SCALE_MODAL},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header-container"},o.a.createElement("div",{className:"header"},o.a.createElement("p",null,S("option.measurementOption.scale")),o.a.createElement(_.a,{className:"scaleModalCloseButton",title:"action.close",img:"ic_close_black_24px",onClick:se}))),o.a.createElement("div",{className:"content-container"},o.a.createElement("div",{className:"scaleSetting"},o.a.createElement("div",{className:"custom-option-wrapper"},o.a.createElement("div",{className:"custom-scale-option"},o.a.createElement(s.a,{"data-element":"customScaleOption",radio:!0,name:"setting",onChange:function(){return Y(L)},checked:ue,label:"".concat(S("option.measurement.scaleModal.custom"),":"),center:!0})),ue&&o.a.createElement("button",{"data-element":"calibrate",className:"calibrate-btn",onMouseDown:function(){var e;m.a.setToolMode("AnnotationCreateCalibrationMeasurement");var t=ue?(null===(e=ae.worldScale)||void 0===e?void 0:e.unit)||"":ee[1].worldScale.unit;w(f.a.updateCalibrationInfo({isCalibration:!0,previousToolName:z,defaultUnit:t})),w(f.a.setIsElementHidden(j.a.SCALE_MODAL,!0))}},S("option.measurement.scaleModal.calibrate"))),ue?o.a.createElement(A,{scale:ae.getScaleRatioAsArray(),onScaleChange:oe,precision:$[1]}):o.a.createElement("div",{className:"block"}),o.a.createElement(s.a,{"data-element":"presetScaleOption",radio:!0,onChange:function(){return Y(R)},name:"setting",checked:!ue,label:"".concat(S("option.measurement.scaleModal.preset"),":"),center:!0}),!ue&&o.a.createElement("div",{className:"scaleModal__preset-container"},o.a.createElement("div",{className:"selector"},o.a.createElement(x.a,{dataElement:"presetScales",items:H[me].map((function(e){return e[0]})),currentSelectionKey:ee[0],onClickItem:function(e,t){return te(H[me][t])}})))),o.a.createElement("div",{className:"precision-container"},o.a.createElement("div",{className:"precision-selector"},o.a.createElement("div",{className:"precision-title"},S("option.shared.precision"),":"),o.a.createElement("div",{className:"selector"},o.a.createElement(x.a,{dataElement:"scalePrecisions",items:u.r[be].map((function(e){return e[0]})),currentSelectionKey:$[0],onClickItem:function(e,t){return q(u.r[be][t])}}))),o.a.createElement(g.a,{content:S("option.measurement.scaleModal.fractionUnitsTooltip")},o.a.createElement("div",null,o.a.createElement(s.a,{isSwitch:!0,leftLabel:!0,id:"scale-modal-fractional-units",label:S("option.measurement.scaleModal.fractionalUnits"),checked:G,onChange:function(){J((function(e){return!e}))},disabled:we}))))),o.a.createElement("div",{className:"footer"},o.a.createElement(k.a,{type:"button",onClick:function(){var e,t;e=[I],t=new T(de(),$[1]),m.a.replaceScales(e,t),se()},className:"scale-update",dataElement:"updateScale",disabled:U||!he||!re},S("action.update")),o.a.createElement("button",{onClick:function(){var e,t;e=new T(de(),$[1]),t=[].concat(C(d),[h]),m.a.createAndApplyScale(e,t),se()},className:"scale-create","data-element":"createScale",disabled:!he||!V&&le||!U&&!re},S("action.create")))))))};t.default=z}}]);
//# sourceMappingURL=46.chunk.js.map