(function(){"use strict";var e={7288:function(e,t,n){var r=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e._v(" 这里是主体哦 "),t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/vue2"}},[e._v("vue2")]),e._v(" | "),t("router-link",{attrs:{to:"/vue3/"}},[e._v("vue3")]),e._v(" | "),t("router-link",{attrs:{to:"/react/"}},[e._v("react")]),e._v(" | "),t("router-link",{attrs:{to:"/default/"}},[e._v("default")]),e._v(" | "),t("router-link",{attrs:{to:"/vue2hash/"}},[e._v("vue2hash")]),e._v(" | "),t("router-link",{attrs:{to:"/vue3hash/"}},[e._v("vue3hash")])],1),t("router-view"),t("div",{attrs:{id:"container"}})],1)},i=[],a=n(1001),u={},c=(0,a.Z)(u,o,i,!1,null,null,null),l=c.exports,s=n(2631),v=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[e._v(" 主题HOME ")])},f=[],p=r.ZP.extend({name:"HomeView"}),d=p,h=(0,a.Z)(d,v,f,!1,null,null,null),m=h.exports;r.ZP.use(s.ZP);const y=[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,2323))}],b=new s.ZP({mode:"history",base:"/main/",routes:y});var g=b,_=n(3822);r.ZP.use(_.ZP);var k=new _.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),E=n(7408);const w=!1,P=[{name:"vue2-app",container:"#container",props:{devEntry:"//localhost:8001/child/vue2/",proEntry:"/child/vue2/",activeRule:"/main/vue2"}},{name:"vue3-app",container:"#container",props:{devEntry:"//localhost:8002/child/vue3/",proEntry:"/child/vue3/",activeRule:"/main/vue3"}},{name:"react-app",container:"#container",props:{devEntry:"//localhost:8003/child/react/",proEntry:"/child/react/",activeRule:"/main/react"}},{name:"vue2hash-app",container:"#container",props:{devEntry:"//localhost:8010/child/vue2hash/",proEntry:"/child/vue2hash/",activeRule:"/main/vue2hash"}},{name:"vue3hash-app",container:"#container",props:{devEntry:"//localhost:8011/child/vue3hash/",proEntry:"/child/vue3hash/",activeRule:"/main/vue3hash"}}];function O(){return P.map((e=>(e.entry=w?e.props.devEntry:e.props.proEntry,e.activeRule=e.props.activeRule,e)))}const j=O();(0,E.mI)(j),r.ZP.config.productionTip=!1,(0,E.BL)({prefetch:!1,sandbox:{experimentalStyleIsolation:!0}}),new r.ZP({router:g,store:k,render:e=>e(l)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.30116541.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="main:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var v=l[s];if(v.getAttribute("src")==r||v.getAttribute("data-webpack")==t+i){u=v;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/main/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkmain"]=self["webpackChunkmain"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7288)}));r=n.O(r)})();
//# sourceMappingURL=app.2dbfa677.js.map