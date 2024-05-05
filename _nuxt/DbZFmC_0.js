import{q as Ae,x as ce,ab as Ve,k as le,A as Ke,C as Ge,h as S,g as Je,o as M,c as ae,n as z,Z as ue,U as fe,i as We,ac as Ye,Y as Ze,d as Xe,t as et,I as tt,_ as nt}from"./BcFy9bLq.js";import{r as ot}from"./qsMMcMsd.js";const Oe=Object.freeze({left:0,top:0,width:16,height:16}),Pe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),X=Object.freeze({...Oe,...Pe});Object.freeze({...X,body:"",hidden:!1});({...Oe});const Fe=Object.freeze({width:null,height:null}),Ee=Object.freeze({...Fe,...Pe});function rt(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Fe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const st=/[\s,]+/;function it(e,t){t.split(st).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function ct(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const lt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,at=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function de(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(lt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=at.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}const ut=e=>e==="unset"||e==="undefined"||e==="none";function ft(e,t){const n={...X,...e},r={...Ee,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(b=>{const p=[],u=b.hFlip,w=b.vFlip;let y=b.rotate;u?w?y+=2:(p.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),p.push("scale(-1 1)"),o.top=o.left=0):w&&(p.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),p.push("scale(1 -1)"),o.top=o.left=0);let v;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:v=o.height/2+o.top,p.unshift("rotate(90 "+v.toString()+" "+v.toString()+")");break;case 2:p.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:v=o.width/2+o.left,p.unshift("rotate(-90 "+v.toString()+" "+v.toString()+")");break}y%2===1&&(o.left!==o.top&&(v=o.left,o.left=o.top,o.top=v),o.width!==o.height&&(v=o.width,o.width=o.height,o.height=v)),p.length&&(s='<g transform="'+p.join(" ")+'">'+s+"</g>")});const i=r.width,c=r.height,l=o.width,a=o.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?a:c,f=de(d,l/a)):(f=i==="auto"?l:i,d=c===null?de(f,a/l):c==="auto"?a:c);const h={},m=(b,p)=>{ut(p)||(h[b]=p.toString())};return m("width",f),m("height",d),h.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:h,body:s}}const dt=/\sid="(\S+)"/g,pt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ht=0;function gt(e,t=pt){const n=[];let r;for(;r=dt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(ht++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function mt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function yt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function vt(e){return"data:image/svg+xml,"+yt(e)}function bt(e){return'url("'+vt(e)+'")'}const pe={...Ee,inline:!1},wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},xt={display:"inline-block"},Q={backgroundColor:"currentColor"},Me={backgroundColor:"transparent"},he={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ge={webkitMask:Q,mask:Q,background:Me};for(const e in ge){const t=ge[e];for(const n in he)t[e+n]=he[n]}const $={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";$[e+"-flip"]=t,$[e.slice(0,1)+"-flip"]=t,$[e+"Flip"]=t});function me(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const It=(e,t)=>{const n=rt(pe,t),r={...wt},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let p in t){const u=t[p];if(u!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&it(n,u);break;case"color":s.color=u;break;case"rotate":typeof u=="string"?n[p]=ct(u):typeof u=="number"&&(n[p]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete r["aria-hidden"];break;default:{const w=$[p];w?(u===!0||u==="true"||u===1)&&(n[w]=!0):pe[p]===void 0&&(r[p]=u)}}}const l=ft(e,n),a=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,a);let p=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),r.innerHTML=gt(l.body,u?()=>u+"ID"+p++:"iconifyVue"),ce("svg",r)}const{body:f,width:d,height:h}=e,m=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),b=mt(f,{...a,width:d+"",height:h+""});return r.style={...s,"--svg":bt(b),width:me(a.width),height:me(a.height),...xt,...m?Q:Me,...c},ce("span",r)},St=Object.create(null),Ct=Ae({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?St[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:It({...X,...n},e)}}),A=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!N(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!N(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!N(c,n)?null:c}return null},N=(e,t)=>e?!!((e.provider===""||e.provider.match(A))&&(t&&e.prefix===""||e.prefix.match(A))&&e.name.match(A)):!1,ze=Object.freeze({left:0,top:0,width:16,height:16}),D=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ee=Object.freeze({...ze,...D}),V=Object.freeze({...ee,body:"",hidden:!1});function kt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ye(e,t){const n=kt(e,t);for(const r in V)r in D?r in e&&!(r in n)&&(n[r]=D[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function jt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function Tt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ye(r[c]||o[c],s)}return i(t),n.forEach(i),ye(e,s)}function Le(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=jt(e);for(const o in r){const s=r[o];s&&(t(o,Tt(e,o,s)),n.push(o))}return n}const At={provider:"",aliases:{},not_found:{},...ze};function U(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function $e(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!U(e,At))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(A)||typeof s.body!="string"||!U(s,V))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(A)||typeof i!="string"||!n[i]&&!r[i]||!U(s,V))return null}return t}const ve=Object.create(null);function Ot(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=ve[e]||(ve[e]=Object.create(null));return n[t]||(n[t]=Ot(e,t))}function te(e,t){return $e(t)?Le(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Pt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let O=!1;function Ne(e){return typeof e=="boolean"&&(O=e),O}function Ft(e){const t=typeof e=="string"?R(e,!0,O):e;if(t){const n=C(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Et(e,t){const n=R(e,!0,O);if(!n)return!1;const r=C(n.provider,n.prefix);return Pt(r,n.name,t)}function Mt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),O&&!t&&!e.prefix){let o=!1;return $e(e)&&(e.prefix="",Le(e,(s,i)=>{i&&Et(s,i)&&(o=!0)})),o}const n=e.prefix;if(!N({provider:t,prefix:n,name:"a"}))return!1;const r=C(t,n);return!!te(r,e)}const zt=Object.freeze({width:null,height:null}),Lt=Object.freeze({...zt,...D});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const K=Object.create(null);function $t(e,t){K[e]=t}function G(e){return K[e]||K[""]}function ne(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const oe=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],_=[];for(;T.length>0;)T.length===1||Math.random()>.5?_.push(T.shift()):_.push(T.pop());oe[""]=ne({resources:["https://api.iconify.design"].concat(_)});function J(e,t){const n=ne(t);return n===null?!1:(oe[e]=n,!0)}function re(e){return oe[e]}const Nt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let be=Nt();function _t(e,t){const n=re(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Dt(e){return e===404}const Rt=(e,t,n)=>{const r=[],o=_t(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function Bt(e){if(typeof e=="string"){const t=re(e);if(t)return t.path}return"/"}const Ut=(e,t,n)=>{if(!be){n("abort",424);return}let r=Bt(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;be(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Dt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},qt={prepare:Rt,send:Ut};function Ht(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=C(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:s,prefix:i,name:c};f.push(d)}),t}function _e(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Qt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||_e([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Vt=0;function Kt(e,t,n){const r=Vt++,o=_e.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Gt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?R(o,t,n):o;s&&r.push(s)}),r}var Jt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Wt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const x=Math.floor(Math.random()*g.length);i.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}i=i.concat(g)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,d=null,h=[],m=[];typeof r=="function"&&m.push(r);function b(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),b(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function u(g,x){x&&(m=[]),typeof g=="function"&&m.push(g)}function w(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:u,abort:p}}function y(){l="failed",m.forEach(g=>{g(void 0,f)})}function v(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function F(g,x,j){const E=x!=="success";switch(h=h.filter(I=>I!==g),l){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(x==="abort"){f=j,y();return}if(E){f=j,h.length||(i.length?k():y());return}if(b(),v(),!e.random){const I=e.resources.indexOf(g.resource);I!==-1&&I!==e.index&&(e.index=I)}l="completed",m.forEach(I=>{I(j)})}function k(){if(l!=="pending")return;b();const g=i.shift();if(g===void 0){if(h.length){d=setTimeout(()=>{b(),l==="pending"&&(v(),y())},e.timeout);return}y();return}const x={status:"pending",resource:g,callback:(j,E)=>{F(x,j,E)}};h.push(x),a++,d=setTimeout(k,e.rotate),n(g,t,x.callback)}return setTimeout(k),w}function De(e){const t={...Jt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=Wt(t,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function we(){}const q=Object.create(null);function Yt(e){if(!q[e]){const t=re(e);if(!t)return;const n=De(t),r={config:t,redundancy:n};q[e]=r}return q[e]}function Zt(e,t,n){let r,o;if(typeof e=="string"){const s=G(e);if(!s)return n(void 0,424),we;o=s.send;const i=Yt(e);i&&(r=i.redundancy)}else{const s=ne(e);if(s){r=De(s);const i=e.resources?e.resources[0]:"",c=G(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),we):r.query(t,o,n)().abort}const xe="iconify2",P="iconify",Re=P+"-count",Ie=P+"-version",Be=36e5,Xt=168;function W(e,t){try{return e.getItem(t)}catch{}}function se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Se(e,t){try{e.removeItem(t)}catch{}}function Y(e,t){return se(e,Re,t.toString())}function Z(e){return parseInt(W(e,Re))||0}const B={local:!0,session:!0},Ue={local:new Set,session:new Set};let ie=!1;function en(e){ie=e}let L=typeof window>"u"?{}:window;function qe(e){const t=e+"Storage";try{if(L&&L[t]&&typeof L[t].length=="number")return L[t]}catch{}B[e]=!1}function He(e,t){const n=qe(e);if(!n)return;const r=W(n,Ie);if(r!==xe){if(r){const c=Z(n);for(let l=0;l<c;l++)Se(n,P+l.toString())}se(n,Ie,xe),Y(n,0);return}const o=Math.floor(Date.now()/Be)-Xt,s=c=>{const l=P+c.toString(),a=W(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Se(n,l)}};let i=Z(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,Y(n,i)):Ue[e].add(c))}function Qe(){if(!ie){en(!0);for(const e in B)He(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=C(r,o);if(!te(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function tn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in B)He(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function nn(e,t){ie||Qe();function n(r){let o;if(!B[r]||!(o=qe(r)))return;const s=Ue[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Z(o),!Y(o,i+1))return;const c={cached:Math.floor(Date.now()/Be),provider:e.provider,data:t};return se(o,P+i.toString(),JSON.stringify(c))}t.lastModified&&!tn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ce(){}function on(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Qt(e)}))}function rn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=G(n)))return;s.prepare(n,r,o).forEach(c=>{Zt(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=te(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(d=>{f.delete(d)}),nn(e,l)}catch(a){console.error(a)}on(e)})})}))}const sn=(e,t)=>{const n=Gt(e,!0,Ne()),r=Ht(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Ce)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(C(a,f));const d=o[a]||(o[a]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,h=C(a,f),m=h.pendingIcons||(h.pendingIcons=new Set);m.has(d)||(m.add(d),o[a][f].push(d))}),s.forEach(l=>{const{provider:a,prefix:f}=l;o[a][f].length&&rn(l,o[a][f])}),t?Kt(t,r,s):Ce},cn=e=>new Promise((t,n)=>{const r=typeof e=="string"?R(e,!0):e;if(!r){n(e);return}sn([r||e],o=>{if(o.length&&r){const s=Ft(r);if(s){t({...ee,...s});return}}n(e)})});({...Lt});const ke={backgroundColor:"currentColor"},ln={backgroundColor:"transparent"},je={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Te={webkitMask:ke,mask:ke,background:ln};for(const e in Te){const t=Te[e];for(const n in je)t[e+n]=je[n]}const H={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";H[e+"-flip"]=t,H[e.slice(0,1)+"-flip"]=t,H[e+"Flip"]=t});Ne(!0);$t("",qt);if(typeof document<"u"&&typeof window<"u"){Qe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Mt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;J(n,o)||console.error(r)}catch{console.error(r)}}}}({...ee});const an=Ae({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){let t,n;const r=tt(),o=Ve(),s=e;le(()=>{var u;return(u=o.nuxtIcon)==null?void 0:u.iconifyApiOptions},()=>{var u,w,y,v,F,k;if((w=(u=o.nuxtIcon)==null?void 0:u.iconifyApiOptions)!=null&&w.url){try{new URL(o.nuxtIcon.iconifyApiOptions.url)}catch{console.warn("Nuxt Icon: Invalid custom Iconify API URL");return}if((v=(y=o.nuxtIcon)==null?void 0:y.iconifyApiOptions)!=null&&v.publicApiFallback){J("custom",{resources:[(F=o.nuxtIcon)==null?void 0:F.iconifyApiOptions.url],index:0});return}J("",{resources:[(k=o.nuxtIcon)==null?void 0:k.iconifyApiOptions.url]})}},{immediate:!0});const i=Ke("icons",()=>({})),c=Ge(!1),l=S(()=>{var u,w;return(w=(u=o.nuxtIcon)==null?void 0:u.aliases)!=null&&w[s.name]?o.nuxtIcon.aliases[s.name]:s.name}),a=S(()=>ot(l.value)),f=S(()=>[a.value.provider,a.value.prefix,a.value.name].filter(Boolean).join(":")),d=S(()=>{var u;return(u=i.value)==null?void 0:u[f.value]}),h=S(()=>{var u;return(u=r.vueApp)==null?void 0:u.component(l.value)}),m=S(()=>{var w,y,v;if(!s.size&&typeof((w=o.nuxtIcon)==null?void 0:w.size)=="boolean"&&!((y=o.nuxtIcon)!=null&&y.size))return;const u=s.size||((v=o.nuxtIcon)==null?void 0:v.size)||"1em";return String(Number(u))===u?`${u}px`:u}),b=S(()=>{var u;return((u=o==null?void 0:o.nuxtIcon)==null?void 0:u.class)??"icon"});async function p(){var u;h.value||(u=i.value)!=null&&u[f.value]||(c.value=!0,i.value[f.value]=await cn(a.value).catch(()=>{}),c.value=!1)}return le(l,p),!h.value&&([t,n]=Je(()=>p()),t=await t,n()),(u,w)=>c.value?(M(),ae("span",{key:0,class:z(b.value),style:ue({width:m.value,height:m.value})},null,6)):d.value?(M(),fe(We(Ct),{key:1,icon:d.value,class:z(b.value),width:m.value,height:m.value},null,8,["icon","class","width","height"])):h.value?(M(),fe(Ye(h.value),{key:2,class:z(b.value),width:m.value,height:m.value},null,8,["class","width","height"])):(M(),ae("span",{key:3,class:z(b.value),style:ue({fontSize:m.value,lineHeight:m.value,width:m.value,height:m.value})},[Ze(u.$slots,"default",{},()=>[Xe(et(e.name),1)],!0)],6))}}),dn=nt(an,[["__scopeId","data-v-e8d572f6"]]);export{dn as default};
