parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vCKq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.radioPlayerInit=void 0;var e=function(){};exports.radioPlayerInit=e;
},{}],"MX02":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.musicPlayerInit=void 0;var e=function(){};exports.musicPlayerInit=e;
},{}],"cHiT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.videoPlayerInit=void 0;var e=function(){};exports.videoPlayerInit=e;
},{}],"g2Hq":[function(require,module,exports) {
"use strict";var e=require("./radioPlayer.js"),r=require("./musicPlayer.js"),t=require("./videoPlayer.js"),c=document.querySelectorAll(".player-btn"),i=document.querySelectorAll(".player-block"),a=document.querySelector(".temp"),n=function(){a.style.display="none",c.forEach(function(e){return e.classList.remove("active")}),i.forEach(function(e){return e.classList.remove("active")})};c.forEach(function(e,r){return e.addEventListener("click",function(){n(),e.classList.add("active"),i[r].classList.add("active")})});
},{"./radioPlayer.js":"vCKq","./musicPlayer.js":"MX02","./videoPlayer.js":"cHiT"}]},{},["g2Hq"], null)
//# sourceMappingURL=scripts.67434b17.js.map