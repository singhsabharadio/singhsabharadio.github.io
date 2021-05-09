(function(e){function n(n){for(var r,a,s=n[0],c=n[1],l=n[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(n);while(p.length)p.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,s=1;s<t.length;s++){var c=t[s];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("v-app",[e.deferredPrompt?r("v-banner",{staticClass:"text-left",attrs:{color:"info",dark:""},scopedSlots:e._u([{key:"actions",fn:function(){return[r("v-btn",{attrs:{text:""},on:{click:e.dismiss}},[e._v("Dismiss")]),r("v-btn",{attrs:{text:""},on:{click:e.install}},[e._v("Install")])]},proxy:!0}],null,!1,1608450964)},[e._v(" Get our free app. It won't take up space on your phone and also works offline! ")]):e._e(),r("div",{staticClass:"pa-4 text-center"},[r("img",{staticClass:"logo",attrs:{alt:"Logo",src:t("cf05")}}),r("div",[r("audio",{ref:"player",attrs:{src:"http://listen.akjradio.org:4242/stream/1/",type:"audio/mpeg"}},[e._v(" Cannot load audio player. ")]),e.isPlaying?e._e():r("v-btn",{attrs:{color:"primary",fab:"",large:"",dark:""},on:{click:e.play}},[r("v-icon",[e._v("mdi-play")])],1),e.isPlaying?r("v-btn",{staticClass:"pause-btn",attrs:{color:"primary",fab:"",large:"",dark:""},on:{click:e.pause}},[r("v-icon",[e._v("mdi-pause")])],1):e._e(),e.isPlaying?r("v-btn",{attrs:{color:"primary",fab:"",large:"",dark:""},on:{click:e.stop}},[r("v-icon",[e._v("mdi-stop")])],1):e._e()],1)]),e.isOffline?r("v-alert",{staticClass:"missing-internet",attrs:{prominent:"",type:"error"}},[e._v(" ਨੈਟ ਮੌਜੂਦ ਨਹੀਂ ਹੈ. Internet not available. ")]):e._e()],1)],1)},i=[],a=t("1da1"),s=(t("96cf"),t("a78e")),c=t.n(s),l={name:"App",data:function(){return{deferredPrompt:null,isPlaying:!1,isOffline:!1}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),void 0===c.a.get("add-to-home-screen")&&(e.deferredPrompt=n)})),window.addEventListener("appinstalled",(function(){e.deferredPrompt=null})),this.isOffline=!navigator.onLine,window.addEventListener("online",(function(){return e.isOffline=!1})),window.addEventListener("offline",(function(){return e.isOffline=!0}))},mounted:function(){var e=this;this.$refs.player.onplay=function(){e.isPlaying=!0},this.$refs.player.error=function(){e.isPlaying=!1}},methods:{dismiss:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:c.a.set("add-to-home-screen",null,{expires:15}),e.deferredPrompt=null;case 2:case"end":return n.stop()}}),n)})))()},install:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.deferredPrompt.prompt();case 1:case"end":return n.stop()}}),n)})))()},play:function(){this.$refs.player.play()},pause:function(){this.$refs.player.pause(),this.isPlaying=!1},stop:function(){var e=this.$refs.player.src;this.$refs.player.src=e,this.isPlaying=!1}}},u=l,f=(t("6405"),t("2877")),p=t("6544"),d=t.n(p),v=t("0798"),g=t("7496"),y=t("e4e5"),h=t("8336"),m=t("132d"),b=Object(f["a"])(u,o,i,!1,null,"2343ee1e",null),w=b.exports;d()(b,{VAlert:v["a"],VApp:g["a"],VBanner:y["a"],VBtn:h["a"],VIcon:m["a"]});var k=t("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=t("f309");r["a"].use(_["a"]);var P=new _["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:P,render:function(e){return e(w)}}).$mount("#app")},6405:function(e,n,t){"use strict";t("d50f")},cf05:function(e,n,t){e.exports=t.p+"img/logo.dc2135b7.png"},d50f:function(e,n,t){}});
//# sourceMappingURL=app.7785f42d.js.map