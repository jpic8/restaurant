(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(81),a=t.n(o),r=t(645),c=t.n(r)()(a());c.push([e.id,"/*style.css*/\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  font-family: Gotham Rounded, sans-serif;\n  font-weight: normal;\n}\n\nbody {\n  margin: 0;\n  background-color: rgb(192, 95, 51);\n}\n\nh1 {\n  font-weight: 700;\n}\n\nul {\n  list-style-type: none;\n  padding: 5px;\n  border-left: 7px solid black;\n}\n\n.tabs {\n  display: flex;\n  justify-content: space-evenly;\n  margin: auto;\n  max-width: 800px;\n  background-color: seashell;\n  padding: 10px;\n  cursor: pointer;\n  margin-top: 20px;\n  margin-bottom: 5px;\n  border-radius: 10px;\n}\n\n.tabs > span {\n  font-size: 20px;\n  padding: 5px;\n  border-bottom: 1px dotted black;\n}\n\n.tabs > span:hover {\n  background-color: rgb(192, 95, 51);\n  color: white;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  max-width: 800px;\n  margin: auto;\n  background-color: seashell;\n  padding: 20px;\n  border-radius: 10px;\n}\n\n.home {\n  max-width: 700px;\n}\n\n.homePhoto {\n  height: 200px;\n}\n\n.about {\n  max-width: 700px;\n  display: none;\n}\n\n.aboutPhoto {\n  height: 200px;\n}\n\n.menu {\n  max-width: 700px;\n  display: none;\n}\n\n.menuPhoto {\n  height: 200px;\n}\n",""]);const d=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(c[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],d=0;d<e.length;d++){var i=e[d],s=o.base?i[0]+o.base:i[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var d=t(r[c]);n[d].references--}for(var i=o(e,a),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},290:(e,n,t)=>{e.exports=t.p+"ac6e75b36241b01605d5.jpg"},572:(e,n,t)=>{e.exports=t.p+"bba7fe308f4861f45339.png"},987:(e,n,t)=>{e.exports=t.p+"2b382447cabb2b15f567.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),c=t.n(r),d=t(565),i=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(572),y=t(290),b=t(987);document.body.appendChild(function(){const e=document.createElement("header");e.classList.add("tabs");const n=document.createElement("span");n.textContent="Home",n.id="home",e.appendChild(n);const t=document.createElement("span");t.textContent="About",t.id="about",e.appendChild(t);const o=document.createElement("span");return o.textContent="Menu",o.id="menu",e.appendChild(o),e}()),document.body.appendChild(function(){const e=document.createElement("div");return e.classList.add("content"),e}()),function(){let e=document.querySelector(".content");const n=document.createElement("div");n.classList.add("home");const t=new Image;t.src=f,t.classList.add("homePhoto"),n.appendChild(t);const o=document.createElement("h1");o.textContent="Welcome to our cafe!",n.appendChild(o);const a=document.createElement("p");a.textContent="Our meals are made fresh daily and we are always happy to cater to the community! Please reach out for more info.",n.appendChild(a),e.appendChild(n)}(),function(){let e=document.querySelector(".content");const n=document.createElement("div");n.classList.add("about");const t=new Image;t.src=y,t.classList.add("aboutPhoto"),n.appendChild(t);const o=document.createElement("p");o.textContent="Springfield's staple, known all around for their Homemade Cinnamon Rolls, Pies, and Hand Breaded Chicken Fried Steaks!!",n.appendChild(o);const a=["Monday: CLOSED","Tuesday: 6:00am - 8:00pm","Wednesday: 6:00am - 8:00pm","Thursday: 6:00am - 8:00pm","Friday: 6:00am - 8:00pm","Saturday: 6:00am - 8:00pm","Sunday: 6:00am - 2:00pm"];let r=document.createElement("ul");for(let e=0;e<a.length;e++){let n=document.createElement("li");n.appendChild(document.createTextNode(a[e])),r.appendChild(n)}n.appendChild(r);const c=document.createElement("p");c.textContent="555-555-5150 -- noreply@fakeemail.com",n.appendChild(c),e.appendChild(n)}(),function(){let e=document.querySelector(".content");const n=document.createElement("div");n.classList.add("menu");const t=new Image;t.src=b,t.classList.add("menuPhoto"),n.appendChild(t);const o=["THIS WEEK'S MENU","Tuesday: Ham and Cheese Philly","Wednesday: Southwest Sandwich","Thursday: Sauerkraut & Weenies","Friday: Mexican","Saturday: Meatloaf, Steak Fingers, or Rocky Mountain Oysters","Sunday: Fried Chicken & Pork Chops"];let a=document.createElement("ul");for(let e=0;e<o.length;e++){let n=document.createElement("li");n.appendChild(document.createTextNode(o[e])),a.appendChild(n)}n.appendChild(a),e.appendChild(n)}(),function(){const e=document.querySelector(".home"),n=document.querySelector(".about"),t=document.querySelector(".menu"),o=document.querySelector("#home"),a=document.querySelector("#about"),r=document.querySelector("#menu");o.addEventListener("click",(()=>{e.style.display="block",n.style.display="none",t.style.display="none"})),a.addEventListener("click",(()=>{e.style.display="none",n.style.display="block",t.style.display="none"})),r.addEventListener("click",(()=>{e.style.display="none",n.style.display="none",t.style.display="block"}))}()})()})();