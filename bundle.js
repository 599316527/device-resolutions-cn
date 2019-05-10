var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function c(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function f(){return u(" ")}function v(){return u("")}let h;function p(e){h=e}const m=[],g=Promise.resolve();let k=!1;const y=[],$=[],b=[];function w(e){$.push(e)}function _(){const e=new Set;do{for(;m.length;){const e=m.shift();p(e),N(e.$$)}for(;y.length;)y.shift()();for(;$.length;){const t=$.pop();e.has(t)||(t(),e.add(t))}}while(m.length);for(;b.length;)b.pop()();k=!1}function N(e){e.fragment&&(e.update(e.dirty),c(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(w))}let x;function j(e,n){const r=n.token={};function o(e,o,s,i){if(n.token!==r)return;n.resolved=s&&{[s]:i};const a=t(t({},n.ctx),n.resolved),l=e&&(n.current=e)(a);n.block&&(n.blocks?n.blocks.forEach((e,t)=>{t!==o&&e&&(x={remaining:0,callbacks:[]},function(e){x.callbacks.push(e)}(()=>{e.d(1),n.blocks[t]=null}),e.o(1),x.remaining||c(x.callbacks))}):n.block.d(1),l.c(),l.i&&l.i(1),l.m(n.mount(),n.anchor),_()),n.block=l,n.blocks&&(n.blocks[o]=l)}if((s=e)&&"function"==typeof s.then){if(e.then(e=>{o(n.then,1,n.value,e)},e=>{o(n.catch,2,n.error,e)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,e),!0;n.resolved={[n.value]:e}}var s}function D(e,t){e.d(1),t.delete(e.key)}function E(e,t){e.$$.dirty||(m.push(e),k||(k=!0,g.then(_)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function M(t,s,i,a,l,d){const u=h;p(t);const f=s.props||{},v=t.$$={fragment:null,ctx:null,props:d,update:e,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:null};let m=!1;var g;v.ctx=i?i(t,f,(e,n)=>{v.ctx&&l(v.ctx[e],v.ctx[e]=n)&&(v.bound[e]&&v.bound[e](n),m&&E(t,e))}):f,v.update(),m=!0,c(v.before_render),v.fragment=a(v.ctx),s.target&&(s.hydrate?v.fragment.l((g=s.target,Array.from(g.childNodes))):v.fragment.c(),s.intro&&t.$$.fragment.i&&t.$$.fragment.i(),function(e,t,r){const{fragment:s,on_mount:i,on_destroy:a,after_render:l}=e.$$;s.m(t,r),w(()=>{const t=i.map(n).filter(o);a?a.push(...t):c(t),e.$$.on_mount=[]}),l.forEach(w)}(t,s.target,s.anchor),_()),p(u)}class C{$destroy(){var t,n;n=!0,(t=this).$$&&(c(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function L(e,t,n){const r=Object.create(e);return r.device=t[n],r}function S(t){var n,r,c,o=t.error.message;return{c(){n=d("p"),r=u("Something went wrong: "),c=u(o)},m(e,t){a(e,n,t),i(n,r),i(n,c)},p:e,d(e){e&&l(n)}}}function A(e){var t,n,r,c,o,s,u,v,h=[],p=new Map,m=e.devices;const g=e=>e.device.jdid;for(var k=0;k<m.length;k+=1){let t=L(e,m,k),n=g(t);p.set(n,h[k]=T(n,t))}return{c(){for(t=d("div"),n=d("div"),r=d("input"),c=f(),o=d("div"),(s=d("div")).innerHTML='<div class="brand svelte-p3fc2h">品牌</div>\n\t\t\t\t\t\t<div class="name">产品</div>\n\t\t\t\t\t\t<div class="resolution svelte-p3fc2h">分辨率</div>\n\t\t\t\t\t\t<div class="jump svelte-p3fc2h"></div>',u=f(),k=0;k<h.length;k+=1)h[k].c();var i,a,l;i=r,a="type",null==(l="search")?i.removeAttribute(a):i.setAttribute(a,l),r.placeholder="搜索",r.className="svelte-p3fc2h",n.className="keyword svelte-p3fc2h",s.className="device svelte-p3fc2h",o.className="devices",t.className="content",v=function(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}(r,"input",e.input_input_handler)},m(l,d){for(a(l,t,d),i(t,n),i(n,r),r.value=e.keyword,i(t,c),i(t,o),i(o,s),i(o,u),k=0;k<h.length;k+=1)h[k].m(o,null)},p(e,t){e.keyword&&(r.value=t.keyword);const n=t.devices;h=function(e,t,n,r,c,o,s,i,a,l,d,u){let f=e.length,v=o.length,h=f;const p={};for(;h--;)p[e[h].key]=h;const m=[],g=new Map,k=new Map;for(h=v;h--;){const e=u(c,o,h),i=n(e);let a=s.get(i);a?r&&a.p(t,e):(a=l(i,e)).c(),g.set(i,m[h]=a),i in p&&k.set(i,Math.abs(h-p[i]))}const y=new Set,$=new Set;function b(e){e.i&&e.i(1),e.m(i,d),s.set(e.key,e),d=e.first,v--}for(;f&&v;){const t=m[v-1],n=e[f-1],r=t.key,c=n.key;t===n?(d=t.first,f--,v--):g.has(c)?!s.has(r)||y.has(r)?b(t):$.has(c)?f--:k.get(r)>k.get(c)?($.add(r),b(t)):(y.add(c),f--):(a(n,s),f--)}for(;f--;){const t=e[f];g.has(t.key)||a(t,s)}for(;v;)b(m[v-1]);return m}(h,e,g,1,t,n,p,o,D,T,null,L)},d(e){for(e&&l(t),k=0;k<h.length;k+=1)h[k].d();v()}}}function O(t){var n,r,c,o,s,v,h,p,m,g,k,y,$,b,w=t.device.brand,_=t.device.name,N=t.device.resolution;return{c(){n=d("div"),r=d("div"),c=u(w),o=f(),s=d("div"),v=u(_),h=f(),p=d("div"),m=u(N),g=f(),k=d("div"),y=d("a"),$=u("🔗"),b=f(),r.className="brand svelte-p3fc2h",s.className="name",p.className="resolution svelte-p3fc2h",y.href="https://item.jd.com/"+t.device.jdid+".html",y.target="_blank",k.className="jump svelte-p3fc2h",n.className="device svelte-p3fc2h"},m(e,t){a(e,n,t),i(n,r),i(r,c),i(n,o),i(n,s),i(s,v),i(n,h),i(n,p),i(p,m),i(n,g),i(n,k),i(k,y),i(y,$),i(n,b)},p:e,d(e){e&&l(n)}}}function T(e,t){var n,r,c=(!t.keyword||t.device.brand.includes(t.keyword)||t.device.name.includes(t.keyword))&&O(t);return{key:e,first:null,c(){n=v(),c&&c.c(),r=v(),this.first=n},m(e,t){a(e,n,t),c&&c.m(e,t),a(e,r,t)},p(e,t){!t.keyword||t.device.brand.includes(t.keyword)||t.device.name.includes(t.keyword)?c?c.p(e,t):((c=O(t)).c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},d(e){e&&l(n),c&&c.d(e),e&&l(r)}}}function H(t){var n;return{c(){(n=d("div")).innerHTML="<p>Downloading devices data</p>",n.className="loading"},m(e,t){a(e,n,t)},p:e,d(e){e&&l(n)}}}function q(n){var r,c,o,s;let i={ctx:n,current:null,pending:H,then:A,catch:S,value:"devices",error:"error"};return j(s=n.fetchingDevicesData,i),{c(){(r=d("h1")).textContent="Device Resolutions CN",c=f(),o=v(),i.block.c(),r.className="svelte-p3fc2h"},m(e,t){a(e,r,t),a(e,c,t),a(e,o,t),i.block.m(e,i.anchor=t),i.mount=(()=>o.parentNode),i.anchor=o},p(e,r){n=r,i.ctx=n,s!==(s=n.fetchingDevicesData)&&j(s,i)||i.block.p(e,t(t({},n),i.resolved))},i:e,o:e,d(e){e&&(l(r),l(c),l(o)),i.block.d(e),i=null}}}function B(e,t,n){let r="",c=fetch("devices.json").then(e=>e.json());return{keyword:r,fetchingDevicesData:c,input_input_handler:function(){r=this.value,n("keyword",r)}}}return new class extends C{constructor(e){super(),M(this,e,B,q,s,[])}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map