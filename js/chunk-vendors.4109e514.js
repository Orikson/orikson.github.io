/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const c=2.4,u=.2126729,d=.7151522,p=.072175,f=.55,_=.58,m=.57,g=.62,v=.03,T=1.45,S=5e-4,x=1.25,E=1.25,b=.078,C=12.82051282051282,y=.06,R=.001;function A(e,t){const i=((e>>16&255)/255)**c,n=((e>>8&255)/255)**c,s=((e>>0&255)/255)**c,r=((t>>16&255)/255)**c,a=((t>>8&255)/255)**c,o=((t>>0&255)/255)**c;let l,h=i*u+n*d+s*p,A=r*u+a*d+o*p;if(h<=v&&(h+=(v-h)**T),A<=v&&(A+=(v-A)**T),Math.abs(A-h)<S)return 0;if(A>h){const e=(A**f-h**_)*x;l=e<R?0:e<b?e-e*C*y:e-y}else{const e=(A**g-h**m)*E;l=e>-R?0:e>-b?e-e*C*y:e+y}return 100*l}const I=Symbol.for("vuetify:theme"),P=(0,r.U)({theme:String},"theme"),M={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}},D=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;if(!t)return{...M,isDisabled:!0};const i=Object.entries(null!=(e=t.themes)?e:{}).reduce(((e,t)=>{var i,n;let[s,r]=t;const o=r.dark?null==(i=M.themes)?void 0:i.dark:null==(n=M.themes)?void 0:n.light;return e[s]=(0,a.Ee)(o,r),e}),{});return(0,a.Ee)(M,{...t,themes:i})};function O(e,t){const i=e._context.provides.usehead,r=D(t),h=(0,n.iH)(),c=(0,n.iH)(r.defaultTheme),u=(0,n.iH)(r.themes),d=(0,n.iH)(r.variations),p=(0,s.Fl)((()=>Object.entries(u.value).reduce(((e,t)=>{var i;let[n,s]=t;const a={...s,colors:{...s.colors,...(null!=(i=r.variations.colors)?i:[]).reduce(((e,t)=>({...e,...f(t,s.colors[t])})),{})}};for(const r of Object.keys(a.colors)){if(/on-[a-z]/.test(r)||a.colors[`on-${r}`])continue;const e=`on-${r}`,t=(0,o.jx)(a.colors[r]),i=Math.abs(A(0,t)),n=Math.abs(A(16777215,t));a.colors[e]=n>Math.min(i,50)?"#fff":"#000"}return e[n]=a,e}),{})));function f(e,t){const i={};for(const n of["lighten","darken"]){const s="lighten"===n?o.$n:o._j;for(const r of(0,a.MT)(d.value[n],1))i[`${e}-${n}-${r}`]=(0,o.I4)(s((0,o.jx)(t),r))}return i}const _=(0,s.Fl)((()=>{const e=[];for(const i of Object.keys(p.value)){const t=p.value[i].variables;e.push(...g(`.v-theme--${i}`,[...m(i),...Object.keys(t).map((e=>{const i=t[e],n="string"===typeof i&&i.startsWith("#")?(0,o.nA)(i):void 0,s=n?`${n.r}, ${n.g}, ${n.b}`:void 0;return`--v-${e}: ${null!=s?s:i}`}))]))}const t=new Set(Object.values(p.value).flatMap((e=>Object.keys(e.colors))));for(const i of t)/on-[a-z]/.test(i)?e.push(...g(`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`])):e.push(...g(`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),...g(`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),...g(`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}));function m(e){const t=p.value[e];if(!t)throw new Error(`Could not find theme ${e}`);const i=t.dark?2:1,n=t.dark?1:2,s=[];for(const[r,a]of Object.entries(t.colors)){const e=(0,o.nA)(a);s.push(`--v-theme-${r}: ${e.r},${e.g},${e.b}`),r.startsWith("on-")||s.push(`--v-theme-${r}-overlay-multiplier: ${(0,o.zT)(a)>.18?i:n}`)}return s}function g(e,t){return[`${e} {\n`,...t.map((e=>`  ${e};\n`)),"}\n"]}if(i)i.addHeadObjs((0,s.Fl)((()=>({style:[{children:_.value,type:"text/css",id:"vuetify-theme-stylesheet"}]})))),l.BR&&(0,s.m0)((()=>i.updateDOM()));else{function v(){r.isDisabled||(T(),h.value&&(h.value.innerHTML=_.value))}function T(){if("undefined"===typeof document||h.value)return;const e=document.createElement("style");e.type="text/css",e.id="vuetify-theme-stylesheet",h.value=e,document.head.appendChild(h.value)}(0,s.YP)(u,v,{deep:!0,immediate:!0})}return{isDisabled:r.isDisabled,themes:p,setTheme:(e,t)=>u.value[e]=t,getTheme:e=>p.value[e],current:c,themeClasses:(0,s.Fl)((()=>r.isDisabled?void 0:`v-theme--${c.value}`)),styles:_}}function N(e){(0,h.F)("provideTheme");const t=(0,s.f3)(I,null);if(!t)throw new Error("Could not find Vuetify theme injection");const i=(0,s.Fl)((()=>{var i;return null!=(i=e.theme)?i:null==t?void 0:t.current.value})),n=(0,s.Fl)((()=>t.isDisabled?void 0:`v-theme--${i.value}`)),r={...t,current:i,themeClasses:n};return(0,s.JJ)(I,r),r}},2789:function(e,t,i){"use strict";i.d(t,{Ux:function(){return h},bk:function(){return c},c1:function(){return u}});var n=i(8773),s=i(3808),r=i(4233),a=i(9100),o=i(6487);const l=["outlined","plain","text","contained","contained-flat","contained-text"];function h(e,t){return(0,n.Wm)(n.HY,null,[e&&(0,n.Wm)("div",{class:`${t}__overlay`},null),(0,n.Wm)("div",{class:`${t}__underlay`},null)])}const c=(0,a.U)({color:String,textColor:String,variant:{type:String,default:"contained",validator:e=>l.includes(e)}},"variant");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.B)();const i=(0,n.Fl)((()=>{const{variant:i}=(0,r.SU)(e);return`${t}--variant-${i}`})),{colorClasses:a,colorStyles:l}=(0,s.rd)((0,n.Fl)((()=>{const{textColor:t,variant:i,color:n}=(0,r.SU)(e);return{text:t,[["contained","contained-flat"].includes(i)?"background":"text"]:n}})));return{colorClasses:a,colorStyles:l,variantClasses:i}}},8336:function(e,t,i){"use strict";function n(e,t){var i,n;const s=t.value,r={passive:!(null!=(i=t.modifiers)&&i.active)};window.addEventListener("resize",s,r),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:s,options:r},null!=(n=t.modifiers)&&n.quiet||s()}function s(e,t){var i;if(null==(i=e._onResize)||!i[t.instance.$.uid])return;const{handler:n,options:s}=e._onResize[t.instance.$.uid];window.removeEventListener("resize",n,s),delete e._onResize[t.instance.$.uid]}i.d(t,{t:function(){return r}});const r={mounted:n,unmounted:s}},2050:function(e,t,i){"use strict";i.d(t,{H:function(){return y}});var n=i(8362);const s=Symbol("rippleStop"),r=80;function a(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function l(e){return"TouchEvent"===e.constructor.name}function h(e){return"KeyboardEvent"===e.constructor.name}const c=function(e,t){var i;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=0,r=0;if(!h(e)){const i=t.getBoundingClientRect(),n=l(e)?e.touches[e.touches.length-1]:e;s=n.clientX-i.left,r=n.clientY-i.top}let a=0,o=.3;null!=(i=t._ripple)&&i.circle?(o=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((s-a)**2+(r-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*a)/2+"px",u=(t.clientHeight-2*a)/2+"px",d=n.center?c:s-a+"px",p=n.center?u:r-a+"px";return{radius:a,scale:o,x:d,y:p,centerX:c,centerY:u}},u={show(e,t){var i;let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t||null==(i=t._ripple)||!i.enabled)return;const s=document.createElement("span"),r=document.createElement("span");s.appendChild(r),s.className="v-ripple__container",n.class&&(s.className+=` ${n.class}`);const{radius:l,scale:h,x:u,y:d,centerX:p,centerY:f}=c(e,t,n),_=2*l+"px";r.className="v-ripple__animation",r.style.width=_,r.style.height=_,t.appendChild(s);const m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),a(r,`translate(${u}, ${d}) scale3d(${h},${h},${h})`),o(r,0),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),a(r,`translate(${p}, ${f}) scale3d(1,1,1)`),o(r,.08)}),0)},hide(e){var t;if(null==e||null==(t=e._ripple)||!t.enabled)return;const i=e.getElementsByClassName("v-ripple__animation");if(0===i.length)return;const n=i[i.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const s=performance.now()-Number(n.dataset.activated),r=Math.max(250-s,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),o(n,0),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),r)}};function d(e){return"undefined"===typeof e||!!e}function p(e){const t={},i=e.currentTarget;if(null!=i&&i._ripple&&!i._ripple.touched&&!e[s]){if(e[s]=!0,l(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(t.center=i._ripple.centered||h(e),i._ripple.class&&(t.class=i._ripple.class),l(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{u.show(e,i,t)},i._ripple.showTimer=window.setTimeout((()=>{var e;null!=i&&null!=(e=i._ripple)&&e.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),r)}else u.show(e,i,t)}}function f(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{f(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function _(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let m=!1;function g(e){m||e.keyCode!==n.Do.enter&&e.keyCode!==n.Do.space||(m=!0,p(e))}function v(e){m=!1,f(e)}function T(e){m&&(m=!1,f(e))}function S(e,t,i){var s;const{value:r,modifiers:a}=t,o=d(r);o||u.hide(e),e._ripple=null!=(s=e._ripple)?s:{},e._ripple.enabled=o,e._ripple.centered=a.center,e._ripple.circle=a.circle,(0,n.Kn)(r)&&r.class&&(e._ripple.class=r.class),o&&!i?(e.addEventListener("touchstart",p,{passive:!0}),e.addEventListener("touchend",f,{passive:!0}),e.addEventListener("touchmove",_,{passive:!0}),e.addEventListener("touchcancel",f),e.addEventListener("mousedown",p),e.addEventListener("mouseup",f),e.addEventListener("mouseleave",f),e.addEventListener("keydown",g),e.addEventListener("keyup",v),e.addEventListener("blur",T),e.addEventListener("dragstart",f,{passive:!0})):!o&&i&&x(e)}function x(e){e.removeEventListener("mousedown",p),e.removeEventListener("touchstart",p),e.removeEventListener("touchend",f),e.removeEventListener("touchmove",_),e.removeEventListener("touchcancel",f),e.removeEventListener("mouseup",f),e.removeEventListener("mouseleave",f),e.removeEventListener("keydown",g),e.removeEventListener("keyup",v),e.removeEventListener("dragstart",f),e.removeEventListener("blur",T)}function E(e,t){S(e,t,!1)}function b(e){delete e._ripple,x(e)}function C(e,t){if(t.value===t.oldValue)return;const i=d(t.oldValue);S(e,t,i)}const y={mounted:E,unmounted:b,updated:C}},6148:function(e,t,i){"use strict";i.d(t,{Rd:function(){return M}});var n=i(4233),s=i(8773),r=i(8362),a=i(5318);const o=Symbol.for("vuetify:display"),l={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,r.Ee)(l,e)};function c(){return a.BR?Math.max(document.documentElement.clientWidth,window.innerWidth):0}function u(){return a.BR?Math.max(document.documentElement.clientHeight,window.innerHeight):0}function d(){const e=a.BR?window.navigator.userAgent:"ssr";function t(t){return Boolean(e.match(t))}const i=t(/android/i),n=t(/iphone|ipad|ipod/i),s=t(/cordova/i),r=t(/electron/i),o=t(/chrome/i),l=t(/edge/i),h=t(/firefox/i),c=t(/opera/i),u=t(/win/i),d=t(/mac/i),p=t(/linux/i),f=t(/ssr/i);return{android:i,ios:n,cordova:s,electron:r,chrome:o,edge:l,firefox:h,opera:c,win:u,mac:d,linux:p,touch:a.sR,ssr:f}}function p(e){const{thresholds:t,mobileBreakpoint:i}=h(e),r=(0,n.iH)(u()),o=d(),l=(0,n.qj)({}),p=(0,n.iH)(c());function f(){r.value=u(),p.value=c()}return(0,s.m0)((()=>{const e=p.value<t.sm,n=p.value<t.md&&!e,s=p.value<t.lg&&!(n||e),a=p.value<t.xl&&!(s||n||e),h=p.value<t.xxl&&!(a||s||n||e),c=p.value>=t.xxl,u=e?"xs":n?"sm":s?"md":a?"lg":h?"xl":"xxl",d="number"===typeof i?i:t[i],f=o.ssr?o.android||o.ios||o.opera:p.value<d;l.xs=e,l.sm=n,l.md=s,l.lg=a,l.xl=h,l.xxl=c,l.smAndUp=!e,l.mdAndUp=!(e||n),l.lgAndUp=!(e||n||s),l.xlAndUp=!(e||n||s||a),l.smAndDown=!(s||a||h||c),l.mdAndDown=!(a||h||c),l.lgAndDown=!(h||c),l.xlAndDown=!c,l.name=u,l.height=r.value,l.width=p.value,l.mobile=f,l.mobileBreakpoint=i,l.platform=o,l.thresholds=t})),a.BR&&window.addEventListener("resize",f,{passive:!0}),(0,n.BK)(l)}var f=i(4968),_=i(3421),m=i(9069),g=i(7270),v={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}};const T=Symbol.for("vuetify:locale-adapter"),S=Symbol.for("vuetify:locale");function x(e){return!!e&&e.hasOwnProperty("getScope")&&e.hasOwnProperty("createScope")&&e.hasOwnProperty("createRoot")}function E(e,t){const i=x(t)?t:A(t),n=i.createRoot(e);return{adapter:i,rootInstance:n}}const b="$vuetify.",C=(e,t)=>e.replace(/\{(\d+)\}/g,((e,i)=>String(t[+i]))),y=(e,t,i)=>function(n){for(var s=arguments.length,a=new Array(s>1?s-1:0),o=1;o<s;o++)a[o-1]=arguments[o];if(!n.startsWith(b))return C(n,a);const l=n.replace(b,""),h=e.value&&i.value[e.value],c=t.value&&i.value[t.value];let u=(0,r.vO)(h,l,null);return u||((0,g.Kd)(`Translation key "${n}" not found in "${e.value}", trying fallback locale`),u=(0,r.vO)(c,l,null)),u||((0,g.N6)(`Translation key "${n}" not found in fallback`),u=n),"string"!==typeof u&&((0,g.N6)(`Translation key "${n}" has a non-string value`),u=n),C(u,a)};function R(e,t){return(i,n)=>{const s=new Intl.NumberFormat([e.value,t.value],n);return s.format(i)}}function A(e){const t=e=>{const t=(0,n.iH)(e.current),i=(0,n.iH)(e.fallback),s=(0,n.iH)(e.messages);return{current:t,fallback:i,messages:s,t:y(t,i,s),n:R(t,i)}};return{createRoot:i=>{var n,s,r;const a=t({current:null!=(n=null==e?void 0:e.defaultLocale)?n:"en",fallback:null!=(s=null==e?void 0:e.fallbackLocale)?s:"en",messages:null!=(r=null==e?void 0:e.messages)?r:{en:v}});return i.provide(S,a),a},getScope:()=>{const e=(0,s.f3)(S);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e},createScope:e=>{const i=(0,s.f3)(S);if(!i)throw new Error("[Vuetify] Could not find injected locale instance");const n=t({current:(0,s.Fl)((()=>{var t;return null!=(t=null==e?void 0:e.locale)?t:i.current.value})),fallback:(0,s.Fl)((()=>{var t;return null!=(t=null==e?void 0:e.locale)?t:i.fallback.value})),messages:(0,s.Fl)((()=>{var t;return null!=(t=null==e?void 0:e.messages)?t:i.messages.value}))});return(0,s.JJ)(S,n),n}}}var I=i(1149),P=i(2703);const M=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=t=>{const{components:i={},directives:s={},icons:a={}}=e;for(const e in s){const i=s[e];t.directive(e,i)}for(const e in i){const n=i[e];t.component(e,n)}t.provide(m.tI,(0,m.yB)(e.defaults)),t.provide(o,p(e.display)),t.provide(f.bo,(0,f.jG)(t,e.theme)),t.provide(_.YK,(0,r.Ee)({defaultSet:"mdi",sets:{..._.xe,mdi:P.t},aliases:P.j},a));const{adapter:l,rootInstance:h}=E(t,null==e?void 0:e.locale);function c(e){var t,i,n;const s=this.$,r=null!=(t=null==(i=s.parent)?void 0:i.provides)?t:null==(n=s.vnode.appContext)?void 0:n.provides;if(r&&e in r)return r[e]}t.provide(T,l),t.provide(I.Cm,(0,I.is)(h,null==e?void 0:e.locale)),t.mixin({computed:{$vuetify(){return(0,n.qj)({defaults:c.call(this,m.tI),display:c.call(this,o),theme:c.call(this,f.bo),icons:c.call(this,_.YK),locale:c.call(this,T),rtl:c.call(this,I.Cm)})}}})};return{install:t}}},2703:function(e,t,i){"use strict";i.d(t,{j:function(){return r},t:function(){return a}});var n=i(8773),s=i(3421);const r={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},a={component:e=>(0,n.h)(s.$0,{...e,class:"mdi"})}},6085:function(e,t,i){"use strict";i.d(t,{jx:function(){return g},nA:function(){return T},_j:function(){return x},zT:function(){return E},I4:function(){return v},NA:function(){return m},$n:function(){return S}});var n=i(7270),s=i(8362);const r=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],a=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,o=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function h(e){const t=Array(3),i=a,n=r;for(let r=0;r<3;++r)t[r]=Math.round(255*(0,s.uZ)(i(n[r][0]*e[0]+n[r][1]*e[1]+n[r][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function c(e){const t=[0,0,0],i=l,n=o,s=i((e>>16&255)/255),r=i((e>>8&255)/255),a=i((e>>0&255)/255);for(let o=0;o<3;++o)t[o]=n[o][0]*s+n[o][1]*r+n[o][2]*a;return t}const u=.20689655172413793,d=e=>e>u**3?Math.cbrt(e):e/(3*u**2)+4/29,p=e=>e>u?e**3:3*u**2*(e-4/29);function f(e){const t=d,i=t(e[1]);return[116*i-16,500*(t(e[0]/.95047)-i),200*(i-t(e[2]/1.08883))]}function _(e){const t=p,i=(e[0]+16)/116;return[.95047*t(i+e[1]/500),t(i),1.08883*t(i-e[2]/200)]}function m(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function g(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let i=e.startsWith("#")?e.substring(1):e;3===i.length&&(i=i.split("").map((e=>e+e)).join("")),6!==i.length&&(0,n.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(i,16)}}return t<0?((0,n.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,n.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function v(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function T(e){const t=g(e);return{r:(16711680&t)>>16,g:(65280&t)>>8,b:255&t}}function S(e,t){const i=f(c(e));return i[0]=i[0]+10*t,h(_(i))}function x(e,t){const i=f(c(e));return i[0]=i[0]-10*t,h(_(i))}function E(e){const t=g(e);return c(t)[1]}},7270:function(e,t,i){"use strict";function n(e,t,i){if(i&&(t={_isVue:!0,$parent:i,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?h(t):"")}function s(e,t,i){const s=n(e,t,i);null!=s&&console.warn(s)}function r(e,t,i){const s=n(e,t,i);null!=s&&console.error(s)}i.d(t,{Kd:function(){return s},N6:function(){return r}});const a=/(?:^|[-_])(\w)/g,o=e=>e.replace(a,(e=>e.toUpperCase())).replace(/[-_]/g,"");function l(e,t){if(e.$root===e)return"<Root>";const i="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let n=i.name||i._componentTag;const s=i.__file;if(!n&&s){const e=s.match(/([^/\\]+)\.vue$/);n=null==e?void 0:e[1]}return(n?`<${o(n)}>`:"<Anonymous>")+(s&&!1!==t?` at ${s}`:"")}function h(e){if(e._isVue&&e.$parent){const t=[];let i=0;while(e){if(t.length>0){const n=t[t.length-1];if(n.constructor===e.constructor){i++,e=e.$parent;continue}i>0&&(t[t.length-1]=[n,i],i=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${l(e[0])}... (${e[1]} recursive calls)`:l(e)}`)).join("\n")}return`\n\n(found in ${l(e)})`}},5333:function(e,t,i){"use strict";i.d(t,{J:function(){return a}});var n=i(8737),s=i(8773),r=i(122);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",i=arguments.length>2?arguments[2]:void 0;return(0,r.a)({name:null!=i?i:(0,n.kC)((0,n._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,i){let{slots:n}=i;return()=>{var i;return(0,s.h)(t.tag,{class:e},null==(i=n.default)?void 0:i.call(n))}}})}},122:function(e,t,i){"use strict";i.d(t,{a:function(){return h},e:function(){return c}});var n=i(8773),s=i(4233),r=i(7270),a=i(8362),o=i(9069);function l(e,t){var i,n;return(null==(i=e.props)?void 0:i.hasOwnProperty(t))||(null==(n=e.props)?void 0:n.hasOwnProperty((0,a.mA)(t)))}const h=function(e){var t;return e._setup=null!=(t=e._setup)?t:e.setup,e.name?(e._setup&&(e.setup=function(t,i){const r=(0,n.FN)(),a=(0,o.qy)(),h=(0,s.Um)({...(0,s.IU)(t)});return(0,n.m0)((()=>{const i=a.value.global,n=a.value[e.name];for(const e of Object.keys(t)){let a;var s,o;if(l(r.vnode,e))a=t[e];else a=null!=(s=null!=(o=null==n?void 0:n[e])?o:null==i?void 0:i[e])?s:t[e];h[e]!==a&&(h[e]=a)}})),e._setup(h,i)}),e):((0,r.Kd)("The component is missing an explicit name, unable to generate default prop value"),e)};function c(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?h:n.aZ)(t)}},6487:function(e,t,i){"use strict";i.d(t,{B:function(){return a},F:function(){return r}});var n=i(8773),s=i(8362);function r(e,t){const i=(0,n.FN)();if(!i)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return i}function a(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";return(0,s.mA)(null==(e=r(t).type)?void 0:e.name)}},5318:function(e,t,i){"use strict";i.d(t,{BR:function(){return n},cu:function(){return s},sR:function(){return r}});const n="undefined"!==typeof window,s=n&&"IntersectionObserver"in window,r=n&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);n&&CSS.supports("selector(:focus-visible)")},8362:function(e,t,i){"use strict";i.d(t,{Do:function(){return c},Ee:function(){return p},FT:function(){return u},Kn:function(){return h},MT:function(){return o},RA:function(){return _},bY:function(){return g},kb:function(){return l},mA:function(){return m},sq:function(){return f},uZ:function(){return d},vO:function(){return a},vZ:function(){return r}});var n=i(8773);function s(e,t,i){const n=t.length-1;if(n<0)return void 0===e?i:e;for(let s=0;s<n;s++){if(null==e)return i;e=e[t[s]]}return null==e||void 0===e[t[n]]?i:e[t[n]]}function r(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const i=Object.keys(e);return i.length===Object.keys(t).length&&i.every((i=>r(e[i],t[i])))}function a(e,t,i){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),s(e,t.split("."),i)):i}function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,i)=>t+i))}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function h(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}const c=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function u(e){return null==e?[]:Array.isArray(e)?e:[e]}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(i,e))}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;const n={};for(const s in e)n[s]=e[s];for(const s in t){const r=e[s],a=t[s];h(r)&&h(a)?n[s]=p(r,a,i):Array.isArray(r)&&Array.isArray(a)&&i?n[s]=i(r,a):n[s]=a}return n}function f(){return f._uid++}function _(e){return e.map((e=>e.type===n.HY?_(e.children):e)).flat()}f._uid=0;function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function g(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>g(e,t))).flat(1);if(Array.isArray(t.children))return t.children.map((t=>g(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return g(e,t.component.subTree).flat(1)}return[]}},9100:function(e,t,i){"use strict";function n(e,t){return i=>Object.keys(e).reduce(((n,s)=>{const r="object"===typeof e[s]&&null!=e[s]&&!Array.isArray(e[s]),a=r?e[s]:{type:e[s]};return n[s]=i&&s in i?{...a,default:i[s]}:a,t&&(n[s].source=t),n}),{})}i.d(t,{U:function(){return n}})},970:function(e,t,i){"use strict";i.d(t,{L:function(){return s}});var n=i(6487);function s(e){const t=(0,n.F)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.4109e514.js.map