(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{508:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("c9c06734",content,!0,{sourceMap:!1})},515:function(t,e,n){"use strict";n(508)},516:function(t,e,n){var r=n(59),o=n(386),d=n(517),c=n(518),l=n(519),f=n(520),v=r(!1);v.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Muli&display=swap);"]);var m=o(d),h=o(c),x=o(l),y=o(f);v.push([t.i,".container[data-v-a84d89b6]{width:100%;display:flex;padding:0 20px}#fer[data-v-a84d89b6]{background-image:url("+m+")}#lambo[data-v-a84d89b6]{background-image:url("+h+")}#bmw[data-v-a84d89b6]{background-image:url("+x+")}#tesla[data-v-a84d89b6]{background-image:url("+y+")}.slide[data-v-a84d89b6]{border-radius:20px;cursor:pointer;color:#fff;flex:1;background-size:cover;background-position:50%;background-repeat:no-repeat;position:relative;transition:all .5s ease-in-out}@media screen and (max-width:400px){.slide[data-v-a84d89b6]{margin:2px;height:200px}}@media screen and (min-width:1024px)and (min-height:1320px){.slide[data-v-a84d89b6]{margin:5px;height:250px}}@media screen and (min-width:1024px)and (max-height:1310px){.slide[data-v-a84d89b6]{margin:10px;height:300px}}.slide h3[data-v-a84d89b6]{position:absolute;font-size:24px;bottom:20px;left:20px;margin:0;opacity:0}.slide.active[data-v-a84d89b6]{flex:10}.slide.active h3[data-v-a84d89b6]{opacity:1;transition:opacity .1s ease-in .4s}",""]),t.exports=v},517:function(t,e,n){t.exports=n.p+"img/slide1.d398f65.jpeg"},518:function(t,e,n){t.exports=n.p+"img/slide2.a2bcbcb.jpeg"},519:function(t,e,n){t.exports=n.p+"img/slide3.70b6cab.jpeg"},520:function(t,e,n){t.exports=n.p+"img/slide4.37562cb.jpeg"},562:function(t,e,n){"use strict";n.r(e);n(2),n(5),n(26),n(29),n(72),n(61),n(17),n(6),n(71),n(77),n(64);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,d=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw d}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d={methods:{slidesPlugin:function(t){var e=document.querySelectorAll(".slide");e[t].classList.add("active");var n,o=r(e);try{var d=function(){var t=n.value;t.addEventListener("click",(function(){e.forEach((function(t){t.classList.remove("active")})),t.classList.add("active")}))};for(o.s();!(n=o.n()).done;)d()}catch(t){o.e(t)}finally{o.f()}}},mounted:function(){this.slidesPlugin(3)}},c=(n(515),n(32)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"slide",attrs:{id:"fer"}},[n("h3",[t._v("Batch 1")])]),t._v(" "),n("div",{staticClass:"slide",attrs:{id:"lambo"}},[n("h3",[t._v("Batch 2")])]),t._v(" "),n("div",{staticClass:"slide",attrs:{id:"bmw"}},[n("h3",[t._v("Batch 3")])]),t._v(" "),n("div",{staticClass:"slide",attrs:{id:"tesla"}},[n("h3",[t._v("Batch 4")])])])])}],!1,null,"a84d89b6",null);e.default=component.exports}}]);