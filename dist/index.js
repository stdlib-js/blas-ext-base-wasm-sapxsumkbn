"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(H,y){
var k=require("path").resolve,R=require('@stdlib/fs-read-wasm/dist').sync,W=R(k(__dirname,"..","src","main.wasm"));y.exports=W
});var v=o(function(I,b){
var A=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=require('@stdlib/utils-inherit/dist'),f=require('@stdlib/wasm-module-wrapper/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),g=q();function a(e){if(!(this instanceof a))return new a(e);if(!A(e))throw new TypeError(S('2GFH0',e));return f.call(this,g,e,{env:{memory:e}}),this}O(a,f);m(a.prototype,"main",function(r,i,s,t){return this._instance.exports.stdlib_strided_sapxsumkbn(r,i,s,t)});m(a.prototype,"ndarray",function(r,i,s,t,p){return this._instance.exports.stdlib_strided_sapxsumkbn_ndarray(r,i,s,t,p)});b.exports=a
});var w=o(function(J,x){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),z=require('@stdlib/strided-base-stride2offset/dist'),B=require('@stdlib/wasm-memory/dist'),E=require('@stdlib/wasm-base-arrays2ptrs/dist'),T=require('@stdlib/wasm-base-strided2object/dist'),d=v();function n(){return this instanceof n?(d.call(this,new B({initial:0})),this):new n}j(n,d);h(n.prototype,"main",function(r,i,s,t){return this.ndarray(r,i,s,t,z(r,t))});h(n.prototype,"ndarray",function(r,i,s,t,p){var c,u;return c=E(this,[T(r,s,t,p)]),u=c[0],d.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});x.exports=n
});var _=o(function(K,M){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=w(),D=v(),l=new C;l.initializeSync();V(l,"Module",D.bind(null));M.exports=l
});var F=_();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
