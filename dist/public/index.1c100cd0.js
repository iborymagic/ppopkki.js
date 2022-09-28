(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tr="143",Oa=0,Nr=1,Ba=2,Js=1,Ga=2,Zn=3,Qn=0,St=1,cn=2,Va=1,jt=0,Fn=1,zr=2,Ur=3,Or=4,ka=5,Pn=100,Ha=101,Wa=102,Br=103,Gr=104,qa=200,Xa=201,Ya=202,ja=203,Ks=204,Qs=205,Za=206,$a=207,Ja=208,Ka=209,Qa=210,eo=0,to=1,no=2,vr=3,io=4,ro=5,so=6,ao=7,Ar=0,oo=1,lo=2,Ut=0,co=1,uo=2,ho=3,fo=4,po=5,ea=300,zn=301,Un=302,Mr=303,Sr=304,Ii=306,ei=1e3,vt=1001,yr=1002,nt=1003,Vr=1004,kr=1005,ht=1006,mo=1007,Fi=1008,un=1009,go=1010,_o=1011,ta=1012,xo=1013,nn=1014,rn=1015,ti=1016,vo=1017,Mo=1018,Nn=1020,So=1021,yo=1022,Tt=1023,bo=1024,wo=1025,an=1026,On=1027,Eo=1028,To=1029,Ao=1030,Co=1031,Lo=1033,Gi=33776,Vi=33777,ki=33778,Hi=33779,Hr=35840,Wr=35841,qr=35842,Xr=35843,Do=36196,Yr=37492,jr=37496,Zr=37808,$r=37809,Jr=37810,Kr=37811,Qr=37812,es=37813,ts=37814,ns=37815,is=37816,rs=37817,ss=37818,as=37819,os=37820,ls=37821,cs=36492,hn=3e3,Ue=3001,Ro=3200,Po=3201,Io=0,Fo=1,Nt="srgb",sn="srgb-linear",Wi=7680,No=519,us=35044,hs="300 es",br=1035;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qi=Math.PI/180,ds=180/Math.PI;function ii(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[e&255]+Ze[e>>8&255]+"-"+Ze[e>>16&15|64]+Ze[e>>24&255]+"-"+Ze[t&63|128]+Ze[t>>8&255]+"-"+Ze[t>>16&255]+Ze[t>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function zo(s,e){return(s%e+e)%e}function Xi(s,e,t){return(1-t)*s+t*e}function fs(s){return(s&s-1)===0&&s!==0}function wr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],x=n[8],p=i[0],h=i[3],v=i[6],y=i[1],E=i[4],w=i[7],b=i[2],A=i[5],P=i[8];return r[0]=o*p+a*y+c*b,r[3]=o*h+a*E+c*A,r[6]=o*v+a*w+c*P,r[1]=l*p+u*y+d*b,r[4]=l*h+u*E+d*A,r[7]=l*v+u*w+d*P,r[2]=f*p+m*y+x*b,r[5]=f*h+m*E+x*A,r[8]=f*v+m*w+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,m=l*r-o*c,x=t*d+n*f+i*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=d*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*u,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function na(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function ni(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function on(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ri(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Yi={[Nt]:{[sn]:on},[sn]:{[Nt]:Ri}},mt={legacyMode:!0,get workingColorSpace(){return sn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Yi[e]&&Yi[e][t]!==void 0){const n=Yi[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},ia={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},He={r:0,g:0,b:0},gt={h:0,s:0,l:0},ui={h:0,s:0,l:0};function ji(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function hi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=sn){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=sn){if(e=zo(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ji(o,r,e+1/3),this.g=ji(o,r,e),this.b=ji(o,r,e-1/3)}return mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,mt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,mt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nt){const n=ia[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return mt.fromWorkingColorSpace(hi(this,He),e),ot(He.r*255,0,255)<<16^ot(He.g*255,0,255)<<8^ot(He.b*255,0,255)<<0}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sn){mt.fromWorkingColorSpace(hi(this,He),t);const n=He.r,i=He.g,r=He.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=sn){return mt.fromWorkingColorSpace(hi(this,He),t),e.r=He.r,e.g=He.g,e.b=He.b,e}getStyle(e=Nt){return mt.fromWorkingColorSpace(hi(this,He),e),e!==Nt?`color(${e} ${He.r} ${He.g} ${He.b})`:`rgb(${He.r*255|0},${He.g*255|0},${He.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(gt),gt.h+=e,gt.s+=t,gt.l+=n,this.setHSL(gt.h,gt.s,gt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gt),e.getHSL(ui);const n=Xi(gt.h,ui.h,t),i=Xi(gt.s,ui.s,t),r=Xi(gt.l,ui.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=ia;let xn;class ra{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xn===void 0&&(xn=ni("canvas")),xn.width=e.width,xn.height=e.height;const n=xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ni("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=on(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(on(t[n]/255)*255):t[n]=on(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class sa{constructor(e=null){this.isSource=!0,this.uuid=ii(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zi(i[o].image)):r.push(Zi(i[o]))}else r=Zi(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zi(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ra.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uo=0;class pt extends Gn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=vt,i=vt,r=ht,o=Fi,a=Tt,c=un,l=1,u=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uo++}),this.uuid=ii(),this.name="",this.source=new sa(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ea)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=ea;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],x=c[9],p=c[2],h=c[6],v=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+p)<.1&&Math.abs(x+h)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,w=(m+1)/2,b=(v+1)/2,A=(u+f)/4,P=(d+p)/4,g=(x+h)/4;return E>w&&E>b?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=P/n):w>b?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=g/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=P/r,i=g/r),this.set(n,i,r,t),this}let y=Math.sqrt((h-x)*(h-x)+(d-p)*(d-p)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(h-x)/y,this.y=(d-p)/y,this.z=(f-u)/y,this.w=Math.acos((l+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dn extends Gn{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],m=r[o+1],x=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=p;return}if(d!==p||c!==f||l!==m||u!==x){let h=1-a;const v=c*f+l*m+u*x+d*p,y=v>=0?1:-1,E=1-v*v;if(E>Number.EPSILON){const b=Math.sqrt(E),A=Math.atan2(b,v*y);h=Math.sin(h*A)/b,a=Math.sin(a*A)/b}const w=a*y;if(c=c*h+f*w,l=l*h+m*w,u=u*h+x*w,d=d*h+p*w,h===1-a){const b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],f=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+u*d+c*m-l*f,e[t+1]=c*x+u*f+l*d-a*m,e[t+2]=l*x+u*m+a*f-c*d,e[t+3]=u*x-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),f=c(n/2),m=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*m*x,this._y=l*m*d-f*u*x,this._z=l*u*x+f*m*d,this._w=l*u*d-f*m*x;break;case"YXZ":this._x=f*u*d+l*m*x,this._y=l*m*d-f*u*x,this._z=l*u*x-f*m*d,this._w=l*u*d+f*m*x;break;case"ZXY":this._x=f*u*d-l*m*x,this._y=l*m*d+f*u*x,this._z=l*u*x+f*m*d,this._w=l*u*d-f*m*x;break;case"ZYX":this._x=f*u*d-l*m*x,this._y=l*m*d+f*u*x,this._z=l*u*x-f*m*d,this._w=l*u*d+f*m*x;break;case"YZX":this._x=f*u*d+l*m*x,this._y=l*m*d+f*u*x,this._z=l*u*x-f*m*d,this._w=l*u*d-f*m*x;break;case"XZY":this._x=f*u*d-l*m*x,this._y=l*m*d-f*u*x,this._z=l*u*x+f*m*d,this._w=l*u*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ps.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ps.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,d=c*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=l*c+f*-r+u*-a-d*-o,this.y=u*c+f*-o+d*-r-l*-a,this.z=d*c+f*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $i.copy(this).projectOnVector(e),this.sub($i)}reflect(e){return this.sub($i.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $i=new D,ps=new ri;class si{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],d=e[c+1],f=e[c+2];u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),d=e.getY(c),f=e.getZ(c);u<t&&(t=u),d<n&&(n=d),f<i&&(i=f),u>r&&(r=u),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)$t.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint($t)}else n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox),Ji.applyMatrix4(e.matrixWorld),this.union(Ji);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xn),di.subVectors(this.max,Xn),vn.subVectors(e.a,Xn),Mn.subVectors(e.b,Xn),Sn.subVectors(e.c,Xn),Vt.subVectors(Mn,vn),kt.subVectors(Sn,Mn),Jt.subVectors(vn,Sn);let t=[0,-Vt.z,Vt.y,0,-kt.z,kt.y,0,-Jt.z,Jt.y,Vt.z,0,-Vt.x,kt.z,0,-kt.x,Jt.z,0,-Jt.x,-Vt.y,Vt.x,0,-kt.y,kt.x,0,-Jt.y,Jt.x,0];return!Ki(t,vn,Mn,Sn,di)||(t=[1,0,0,0,1,0,0,0,1],!Ki(t,vn,Mn,Sn,di))?!1:(fi.crossVectors(Vt,kt),t=[fi.x,fi.y,fi.z],Ki(t,vn,Mn,Sn,di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return $t.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize($t).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dt=[new D,new D,new D,new D,new D,new D,new D,new D],$t=new D,Ji=new si,vn=new D,Mn=new D,Sn=new D,Vt=new D,kt=new D,Jt=new D,Xn=new D,di=new D,fi=new D,Kt=new D;function Ki(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Kt.fromArray(s,r);const a=i.x*Math.abs(Kt.x)+i.y*Math.abs(Kt.y)+i.z*Math.abs(Kt.z),c=e.dot(Kt),l=t.dot(Kt),u=n.dot(Kt);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Bo=new si,ms=new D,pi=new D,Qi=new D;class Cr{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bo.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Qi.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?pi.set(0,0,1).multiplyScalar(e.radius):pi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ms.copy(e.center).add(pi)),this.expandByPoint(ms.copy(e.center).sub(pi)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rt=new D,er=new D,mi=new D,Ht=new D,tr=new D,gi=new D,nr=new D;class Go{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rt.copy(this.direction).multiplyScalar(t).add(this.origin),Rt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){er.copy(e).add(t).multiplyScalar(.5),mi.copy(t).sub(e).normalize(),Ht.copy(this.origin).sub(er);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mi),a=Ht.dot(this.direction),c=-Ht.dot(mi),l=Ht.lengthSq(),u=Math.abs(1-o*o);let d,f,m,x;if(u>0)if(d=o*c-a,f=o*a-c,x=r*u,d>=0)if(f>=-x)if(f<=x){const p=1/u;d*=p,f*=p,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=x?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(mi).multiplyScalar(f).add(er),m}intersectSphere(e,t){Rt.subVectors(e.center,this.origin);const n=Rt.dot(this.direction),i=Rt.dot(Rt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rt)!==null}intersectTriangle(e,t,n,i,r){tr.subVectors(t,e),gi.subVectors(n,e),nr.crossVectors(tr,gi);let o=this.direction.dot(nr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ht.subVectors(this.origin,e);const c=a*this.direction.dot(gi.crossVectors(Ht,gi));if(c<0)return null;const l=a*this.direction.dot(tr.cross(Ht));if(l<0||c+l>o)return null;const u=-a*Ht.dot(nr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,d,f,m,x,p,h){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=c,v[2]=l,v[6]=u,v[10]=d,v[14]=f,v[3]=m,v[7]=x,v[11]=p,v[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/yn.setFromMatrixColumn(e,0).length(),r=1/yn.setFromMatrixColumn(e,1).length(),o=1/yn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,x=a*u,p=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+x*l,t[5]=f-p*l,t[9]=-a*c,t[2]=p-f*l,t[6]=x+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,x=l*u,p=l*d;t[0]=f+p*a,t[4]=x*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=p+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,x=l*u,p=l*d;t[0]=f-p*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=p-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*d,x=a*u,p=a*d;t[0]=c*u,t[4]=x*l-m,t[8]=f*l+p,t[1]=c*d,t[5]=p*l+f,t[9]=m*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,x=a*c,p=a*l;t[0]=c*u,t[4]=p-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+x,t[10]=f-p*d}else if(e.order==="XZY"){const f=o*c,m=o*l,x=a*c,p=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+p,t[5]=o*u,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*u,t[10]=p*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vo,e,ko)}lookAt(e,t,n){const i=this.elements;return st.subVectors(e,t),st.lengthSq()===0&&(st.z=1),st.normalize(),Wt.crossVectors(n,st),Wt.lengthSq()===0&&(Math.abs(n.z)===1?st.x+=1e-4:st.z+=1e-4,st.normalize(),Wt.crossVectors(n,st)),Wt.normalize(),_i.crossVectors(st,Wt),i[0]=Wt.x,i[4]=_i.x,i[8]=st.x,i[1]=Wt.y,i[5]=_i.y,i[9]=st.y,i[2]=Wt.z,i[6]=_i.z,i[10]=st.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],x=n[2],p=n[6],h=n[10],v=n[14],y=n[3],E=n[7],w=n[11],b=n[15],A=i[0],P=i[4],g=i[8],T=i[12],O=i[1],F=i[5],te=i[9],K=i[13],R=i[2],Y=i[6],V=i[10],X=i[14],q=i[3],N=i[7],k=i[11],J=i[15];return r[0]=o*A+a*O+c*R+l*q,r[4]=o*P+a*F+c*Y+l*N,r[8]=o*g+a*te+c*V+l*k,r[12]=o*T+a*K+c*X+l*J,r[1]=u*A+d*O+f*R+m*q,r[5]=u*P+d*F+f*Y+m*N,r[9]=u*g+d*te+f*V+m*k,r[13]=u*T+d*K+f*X+m*J,r[2]=x*A+p*O+h*R+v*q,r[6]=x*P+p*F+h*Y+v*N,r[10]=x*g+p*te+h*V+v*k,r[14]=x*T+p*K+h*X+v*J,r[3]=y*A+E*O+w*R+b*q,r[7]=y*P+E*F+w*Y+b*N,r[11]=y*g+E*te+w*V+b*k,r[15]=y*T+E*K+w*X+b*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],x=e[3],p=e[7],h=e[11],v=e[15];return x*(+r*c*d-i*l*d-r*a*f+n*l*f+i*a*m-n*c*m)+p*(+t*c*m-t*l*f+r*o*f-i*o*m+i*l*u-r*c*u)+h*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*u-n*l*u)+v*(-i*a*u-t*c*d+t*a*f+i*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],x=e[12],p=e[13],h=e[14],v=e[15],y=d*h*l-p*f*l+p*c*m-a*h*m-d*c*v+a*f*v,E=x*f*l-u*h*l-x*c*m+o*h*m+u*c*v-o*f*v,w=u*p*l-x*d*l+x*a*m-o*p*m-u*a*v+o*d*v,b=x*d*c-u*p*c-x*a*f+o*p*f+u*a*h-o*d*h,A=t*y+n*E+i*w+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=y*P,e[1]=(p*f*r-d*h*r-p*i*m+n*h*m+d*i*v-n*f*v)*P,e[2]=(a*h*r-p*c*r+p*i*l-n*h*l-a*i*v+n*c*v)*P,e[3]=(d*c*r-a*f*r-d*i*l+n*f*l+a*i*m-n*c*m)*P,e[4]=E*P,e[5]=(u*h*r-x*f*r+x*i*m-t*h*m-u*i*v+t*f*v)*P,e[6]=(x*c*r-o*h*r-x*i*l+t*h*l+o*i*v-t*c*v)*P,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*m+t*c*m)*P,e[8]=w*P,e[9]=(x*d*r-u*p*r-x*n*m+t*p*m+u*n*v-t*d*v)*P,e[10]=(o*p*r-x*a*r+x*n*l-t*p*l-o*n*v+t*a*v)*P,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*m-t*a*m)*P,e[12]=b*P,e[13]=(u*p*i-x*d*i+x*n*f-t*p*f-u*n*h+t*d*h)*P,e[14]=(x*a*i-o*p*i-x*n*c+t*p*c+o*n*h-t*a*h)*P,e[15]=(o*d*i-u*a*i+u*n*c-t*d*c-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,m=r*u,x=r*d,p=o*u,h=o*d,v=a*d,y=c*l,E=c*u,w=c*d,b=n.x,A=n.y,P=n.z;return i[0]=(1-(p+v))*b,i[1]=(m+w)*b,i[2]=(x-E)*b,i[3]=0,i[4]=(m-w)*A,i[5]=(1-(f+v))*A,i[6]=(h+y)*A,i[7]=0,i[8]=(x+E)*P,i[9]=(h-y)*P,i[10]=(1-(f+p))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=yn.set(i[0],i[1],i[2]).length();const o=yn.set(i[4],i[5],i[6]).length(),a=yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_t.copy(this);const l=1/r,u=1/o,d=1/a;return _t.elements[0]*=l,_t.elements[1]*=l,_t.elements[2]*=l,_t.elements[4]*=u,_t.elements[5]*=u,_t.elements[6]*=u,_t.elements[8]*=d,_t.elements[9]*=d,_t.elements[10]*=d,t.setFromRotationMatrix(_t),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yn=new D,_t=new ke,Vo=new D(0,0,0),ko=new D(1,1,1),Wt=new D,_i=new D,st=new D,gs=new ke,_s=new ri;class ai{constructor(e=0,t=0,n=0,i=ai.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _s.setFromEuler(this),this.setFromQuaternion(_s,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ai.DefaultOrder="XYZ";ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ho=0;const xs=new D,bn=new ri,Pt=new ke,xi=new D,Yn=new D,Wo=new D,qo=new ri,vs=new D(1,0,0),Ms=new D(0,1,0),Ss=new D(0,0,1),Xo={type:"added"},ys={type:"removed"};class Qe extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ho++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new D,t=new ai,n=new ri,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new ft}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(vs,e)}rotateY(e){return this.rotateOnAxis(Ms,e)}rotateZ(e){return this.rotateOnAxis(Ss,e)}translateOnAxis(e,t){return xs.copy(e).applyQuaternion(this.quaternion),this.position.add(xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vs,e)}translateY(e){return this.translateOnAxis(Ms,e)}translateZ(e){return this.translateOnAxis(Ss,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Pt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xi.copy(e):xi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pt.lookAt(Yn,xi,this.up):Pt.lookAt(xi,Yn,this.up),this.quaternion.setFromRotationMatrix(Pt),i&&(Pt.extractRotation(i.matrixWorld),bn.setFromRotationMatrix(Pt),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ys)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ys)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,e,Wo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yn,qo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DefaultUp=new D(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;const xt=new D,It=new D,ir=new D,Ft=new D,wn=new D,En=new D,bs=new D,rr=new D,sr=new D,ar=new D;class zt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xt.subVectors(e,t),i.cross(xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xt.subVectors(i,t),It.subVectors(n,t),ir.subVectors(e,t);const o=xt.dot(xt),a=xt.dot(It),c=xt.dot(ir),l=It.dot(It),u=It.dot(ir),d=o*l-a*a;if(d===0)return r.set(-2,-1,-1);const f=1/d,m=(l*c-a*u)*f,x=(o*u-a*c)*f;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ft),Ft.x>=0&&Ft.y>=0&&Ft.x+Ft.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ft),c.set(0,0),c.addScaledVector(r,Ft.x),c.addScaledVector(o,Ft.y),c.addScaledVector(a,Ft.z),c}static isFrontFacing(e,t,n,i){return xt.subVectors(n,t),It.subVectors(e,t),xt.cross(It).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xt.subVectors(this.c,this.b),It.subVectors(this.a,this.b),xt.cross(It).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return zt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;wn.subVectors(i,n),En.subVectors(r,n),rr.subVectors(e,n);const c=wn.dot(rr),l=En.dot(rr);if(c<=0&&l<=0)return t.copy(n);sr.subVectors(e,i);const u=wn.dot(sr),d=En.dot(sr);if(u>=0&&d<=u)return t.copy(i);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(wn,o);ar.subVectors(e,r);const m=wn.dot(ar),x=En.dot(ar);if(x>=0&&m<=x)return t.copy(r);const p=m*l-c*x;if(p<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(En,a);const h=u*x-m*d;if(h<=0&&d-u>=0&&m-x>=0)return bs.subVectors(r,i),a=(d-u)/(d-u+(m-x)),t.copy(i).addScaledVector(bs,a);const v=1/(h+p+f);return o=p*v,a=f*v,t.copy(n).addScaledVector(wn,o).addScaledVector(En,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Yo=0;class oi extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yo++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Fn,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ks,this.blendDst=Qs,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Va;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class la extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ve=new D,vi=new De;class At{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=us,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Ie),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new De),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new D),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new We),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vi.fromBufferAttribute(this,t),vi.applyMatrix3(e),this.setXY(t,vi.x,vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==us&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ca extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ua extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jo=0;const ut=new ke,or=new Qe,Tn=new D,at=new si,jn=new si,Xe=new D;class pn extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jo++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(na(e)?ua:ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ut.makeRotationFromQuaternion(e),this.applyMatrix4(ut),this}rotateX(e){return ut.makeRotationX(e),this.applyMatrix4(ut),this}rotateY(e){return ut.makeRotationY(e),this.applyMatrix4(ut),this}rotateZ(e){return ut.makeRotationZ(e),this.applyMatrix4(ut),this}translate(e,t,n){return ut.makeTranslation(e,t,n),this.applyMatrix4(ut),this}scale(e,t,n){return ut.makeScale(e,t,n),this.applyMatrix4(ut),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];at.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,at.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,at.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(at.min),this.boundingBox.expandByPoint(at.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(at.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jn.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(at.min,jn.min),at.expandByPoint(Xe),Xe.addVectors(at.max,jn.max),at.expandByPoint(Xe)):(at.expandByPoint(jn.min),at.expandByPoint(jn.max))}at.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Xe.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xe));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xe.fromBufferAttribute(a,l),c&&(Tn.fromBufferAttribute(e,l),Xe.add(Tn)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<a;O++)l[O]=new D,u[O]=new D;const d=new D,f=new D,m=new D,x=new De,p=new De,h=new De,v=new D,y=new D;function E(O,F,te){d.fromArray(i,O*3),f.fromArray(i,F*3),m.fromArray(i,te*3),x.fromArray(o,O*2),p.fromArray(o,F*2),h.fromArray(o,te*2),f.sub(d),m.sub(d),p.sub(x),h.sub(x);const K=1/(p.x*h.y-h.x*p.y);!isFinite(K)||(v.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(K),y.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(K),l[O].add(v),l[F].add(v),l[te].add(v),u[O].add(y),u[F].add(y),u[te].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let O=0,F=w.length;O<F;++O){const te=w[O],K=te.start,R=te.count;for(let Y=K,V=K+R;Y<V;Y+=3)E(n[Y+0],n[Y+1],n[Y+2])}const b=new D,A=new D,P=new D,g=new D;function T(O){P.fromArray(r,O*3),g.copy(P);const F=l[O];b.copy(F),b.sub(P.multiplyScalar(P.dot(F))).normalize(),A.crossVectors(g,F);const K=A.dot(u[O])<0?-1:1;c[O*4]=b.x,c[O*4+1]=b.y,c[O*4+2]=b.z,c[O*4+3]=K}for(let O=0,F=w.length;O<F;++O){const te=w[O],K=te.start,R=te.count;for(let Y=K,V=K+R;Y<V;Y+=3)T(n[Y+0]),T(n[Y+1]),T(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,h),a.add(u),c.add(u),l.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let d=0,f=l;d<u;d++,f++)o[f]=c[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xe.fromBufferAttribute(e,t),Xe.normalize(),e.setXYZ(t,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,x=0;for(let p=0,h=c.length;p<h;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let v=0;v<u;v++)f[x++]=l[m++]}return new At(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ws=new ke,An=new Go,lr=new Cr,qt=new D,Xt=new D,Yt=new D,cr=new D,ur=new D,hr=new D,Mi=new D,Si=new D,yi=new D,bi=new De,wi=new De,Ei=new De,dr=new D,Ti=new D;class Mt extends Qe{constructor(e=new pn,t=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),e.ray.intersectsSphere(lr)===!1)||(ws.copy(r).invert(),An.copy(e.ray).applyMatrix4(ws),n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,f=n.attributes.uv2,m=n.groups,x=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const v=m[p],y=i[v.materialIndex],E=Math.max(v.start,x.start),w=Math.min(a.count,Math.min(v.start+v.count,x.start+x.count));for(let b=E,A=w;b<A;b+=3){const P=a.getX(b),g=a.getX(b+1),T=a.getX(b+2);o=Ai(this,y,e,An,c,l,u,d,f,P,g,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let v=p,y=h;v<y;v+=3){const E=a.getX(v),w=a.getX(v+1),b=a.getX(v+2);o=Ai(this,i,e,An,c,l,u,d,f,E,w,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const v=m[p],y=i[v.materialIndex],E=Math.max(v.start,x.start),w=Math.min(c.count,Math.min(v.start+v.count,x.start+x.count));for(let b=E,A=w;b<A;b+=3){const P=b,g=b+1,T=b+2;o=Ai(this,y,e,An,c,l,u,d,f,P,g,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(c.count,x.start+x.count);for(let v=p,y=h;v<y;v+=3){const E=v,w=v+1,b=v+2;o=Ai(this,i,e,An,c,l,u,d,f,E,w,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Zo(s,e,t,n,i,r,o,a){let c;if(e.side===St?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==cn,a),c===null)return null;Ti.copy(a),Ti.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ti);return l<t.near||l>t.far?null:{distance:l,point:Ti.clone(),object:s}}function Ai(s,e,t,n,i,r,o,a,c,l,u,d){qt.fromBufferAttribute(i,l),Xt.fromBufferAttribute(i,u),Yt.fromBufferAttribute(i,d);const f=s.morphTargetInfluences;if(r&&f){Mi.set(0,0,0),Si.set(0,0,0),yi.set(0,0,0);for(let x=0,p=r.length;x<p;x++){const h=f[x],v=r[x];h!==0&&(cr.fromBufferAttribute(v,l),ur.fromBufferAttribute(v,u),hr.fromBufferAttribute(v,d),o?(Mi.addScaledVector(cr,h),Si.addScaledVector(ur,h),yi.addScaledVector(hr,h)):(Mi.addScaledVector(cr.sub(qt),h),Si.addScaledVector(ur.sub(Xt),h),yi.addScaledVector(hr.sub(Yt),h)))}qt.add(Mi),Xt.add(Si),Yt.add(yi)}s.isSkinnedMesh&&(s.boneTransform(l,qt),s.boneTransform(u,Xt),s.boneTransform(d,Yt));const m=Zo(s,e,t,n,qt,Xt,Yt,dr);if(m){a&&(bi.fromBufferAttribute(a,l),wi.fromBufferAttribute(a,u),Ei.fromBufferAttribute(a,d),m.uv=zt.getUV(dr,qt,Xt,Yt,bi,wi,Ei,new De)),c&&(bi.fromBufferAttribute(c,l),wi.fromBufferAttribute(c,u),Ei.fromBufferAttribute(c,d),m.uv2=zt.getUV(dr,qt,Xt,Yt,bi,wi,Ei,new De));const x={a:l,b:u,c:d,normal:new D,materialIndex:0};zt.getNormal(qt,Xt,Yt,x.normal),m.face=x}return m}class li extends pn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function x(p,h,v,y,E,w,b,A,P,g,T){const O=w/P,F=b/g,te=w/2,K=b/2,R=A/2,Y=P+1,V=g+1;let X=0,q=0;const N=new D;for(let k=0;k<V;k++){const J=k*F-K;for(let Z=0;Z<Y;Z++){const j=Z*O-te;N[p]=j*y,N[h]=J*E,N[v]=R,l.push(N.x,N.y,N.z),N[p]=0,N[h]=0,N[v]=A>0?1:-1,u.push(N.x,N.y,N.z),d.push(Z/P),d.push(1-k/g),X+=1}}for(let k=0;k<g;k++)for(let J=0;J<P;J++){const Z=f+J+Y*k,j=f+J+Y*(k+1),ce=f+(J+1)+Y*(k+1),me=f+(J+1)+Y*k;c.push(Z,j,me),c.push(j,ce,me),q+=6}a.addGroup(m,q,T),m+=q,f+=X}}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $e(s){const e={};for(let t=0;t<s.length;t++){const n=Bn(s[t]);for(const i in n)e[i]=n[i]}return e}function $o(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}const Jo={clone:Bn,merge:$e};var Ko=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ko,this.fragmentShader=Qo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bn(e.uniforms),this.uniformsGroups=$o(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ha extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dt extends ha{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cn=90,Ln=1;class el extends Qe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new dt(Cn,Ln,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const r=new dt(Cn,Ln,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(-1,0,0)),this.add(r);const o=new dt(Cn,Ln,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new dt(Cn,Ln,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const c=new dt(Cn,Ln,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);const l=new dt(Cn,Ln,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ut,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class da extends pt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:zn,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tl extends dn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new da(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new li(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Bn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:jt});r.uniforms.tEquirect.value=t;const o=new Mt(i,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=ht),new el(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const fr=new D,nl=new D,il=new ft;class Qt{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fr.subVectors(n,t).cross(nl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(fr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||il.getNormalMatrix(e),i=this.coplanarPoint(fr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Cr,Ci=new D;class Lr{constructor(e=new Qt,t=new Qt,n=new Qt,i=new Qt,r=new Qt,o=new Qt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],m=n[9],x=n[10],p=n[11],h=n[12],v=n[13],y=n[14],E=n[15];return t[0].setComponents(a-i,d-c,p-f,E-h).normalize(),t[1].setComponents(a+i,d+c,p+f,E+h).normalize(),t[2].setComponents(a+r,d+l,p+m,E+v).normalize(),t[3].setComponents(a-r,d-l,p-m,E-v).normalize(),t[4].setComponents(a-o,d-u,p-x,E-y).normalize(),t[5].setComponents(a+o,d+u,p+x,E+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSprite(e){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ci.x=i.normal.x>0?e.max.x:e.min.x,Ci.y=i.normal.y>0?e.max.y:e.min.y,Ci.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fa(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function rl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const d=l.array,f=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,d,f),l.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,d){const f=u.array,m=u.updateRange;s.bindBuffer(d,l),m.count===-1?s.bufferSubData(d,0,f):(t?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,u)):d.version<l.version&&(r(d.buffer,l,u),d.version=l.version)}return{get:o,remove:a,update:c}}class Vn extends pn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=e/a,f=t/c,m=[],x=[],p=[],h=[];for(let v=0;v<u;v++){const y=v*f-o;for(let E=0;E<l;E++){const w=E*d-r;x.push(w,-y,0),p.push(0,0,1),h.push(E/a),h.push(1-v/c)}}for(let v=0;v<c;v++)for(let y=0;y<a;y++){const E=y+l*v,w=y+l*(v+1),b=y+1+l*(v+1),A=y+1+l*v;m.push(E,w,A),m.push(w,b,A)}this.setIndex(m),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(h,2))}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var sl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,al=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ol=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ll=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ul=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hl="vec3 transformed = vec3( position );",dl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,pl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ml=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ml=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,El=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Al=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ll=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Il=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ul=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ol=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Hl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ql=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Xl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yl=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,$l=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Kl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ql=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ec=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ic=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ac=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_c=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,xc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ec=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ac=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ic=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Oc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yc=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,jc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Zc=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$c=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,eu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,su=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,au=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ou=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gu=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_u=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Su=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Au=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Du=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:sl,alphamap_pars_fragment:al,alphatest_fragment:ol,alphatest_pars_fragment:ll,aomap_fragment:cl,aomap_pars_fragment:ul,begin_vertex:hl,beginnormal_vertex:dl,bsdfs:fl,iridescence_fragment:pl,bumpmap_pars_fragment:ml,clipping_planes_fragment:gl,clipping_planes_pars_fragment:_l,clipping_planes_pars_vertex:xl,clipping_planes_vertex:vl,color_fragment:Ml,color_pars_fragment:Sl,color_pars_vertex:yl,color_vertex:bl,common:wl,cube_uv_reflection_fragment:El,defaultnormal_vertex:Tl,displacementmap_pars_vertex:Al,displacementmap_vertex:Cl,emissivemap_fragment:Ll,emissivemap_pars_fragment:Dl,encodings_fragment:Rl,encodings_pars_fragment:Pl,envmap_fragment:Il,envmap_common_pars_fragment:Fl,envmap_pars_fragment:Nl,envmap_pars_vertex:zl,envmap_physical_pars_fragment:Yl,envmap_vertex:Ul,fog_vertex:Ol,fog_pars_vertex:Bl,fog_fragment:Gl,fog_pars_fragment:Vl,gradientmap_pars_fragment:kl,lightmap_fragment:Hl,lightmap_pars_fragment:Wl,lights_lambert_vertex:ql,lights_pars_begin:Xl,lights_toon_fragment:jl,lights_toon_pars_fragment:Zl,lights_phong_fragment:$l,lights_phong_pars_fragment:Jl,lights_physical_fragment:Kl,lights_physical_pars_fragment:Ql,lights_fragment_begin:ec,lights_fragment_maps:tc,lights_fragment_end:nc,logdepthbuf_fragment:ic,logdepthbuf_pars_fragment:rc,logdepthbuf_pars_vertex:sc,logdepthbuf_vertex:ac,map_fragment:oc,map_pars_fragment:lc,map_particle_fragment:cc,map_particle_pars_fragment:uc,metalnessmap_fragment:hc,metalnessmap_pars_fragment:dc,morphcolor_vertex:fc,morphnormal_vertex:pc,morphtarget_pars_vertex:mc,morphtarget_vertex:gc,normal_fragment_begin:_c,normal_fragment_maps:xc,normal_pars_fragment:vc,normal_pars_vertex:Mc,normal_vertex:Sc,normalmap_pars_fragment:yc,clearcoat_normal_fragment_begin:bc,clearcoat_normal_fragment_maps:wc,clearcoat_pars_fragment:Ec,iridescence_pars_fragment:Tc,output_fragment:Ac,packing:Cc,premultiplied_alpha_fragment:Lc,project_vertex:Dc,dithering_fragment:Rc,dithering_pars_fragment:Pc,roughnessmap_fragment:Ic,roughnessmap_pars_fragment:Fc,shadowmap_pars_fragment:Nc,shadowmap_pars_vertex:zc,shadowmap_vertex:Uc,shadowmask_pars_fragment:Oc,skinbase_vertex:Bc,skinning_pars_vertex:Gc,skinning_vertex:Vc,skinnormal_vertex:kc,specularmap_fragment:Hc,specularmap_pars_fragment:Wc,tonemapping_fragment:qc,tonemapping_pars_fragment:Xc,transmission_fragment:Yc,transmission_pars_fragment:jc,uv_pars_fragment:Zc,uv_pars_vertex:$c,uv_vertex:Jc,uv2_pars_fragment:Kc,uv2_pars_vertex:Qc,uv2_vertex:eu,worldpos_vertex:tu,background_vert:nu,background_frag:iu,cube_vert:ru,cube_frag:su,depth_vert:au,depth_frag:ou,distanceRGBA_vert:lu,distanceRGBA_frag:cu,equirect_vert:uu,equirect_frag:hu,linedashed_vert:du,linedashed_frag:fu,meshbasic_vert:pu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:_u,meshmatcap_vert:xu,meshmatcap_frag:vu,meshnormal_vert:Mu,meshnormal_frag:Su,meshphong_vert:yu,meshphong_frag:bu,meshphysical_vert:wu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:Au,points_vert:Cu,points_frag:Lu,shadow_vert:Du,shadow_frag:Ru,sprite_vert:Pu,sprite_frag:Iu},ee={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ft},uv2Transform:{value:new ft},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ft}}},Et={basic:{uniforms:$e([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:$e([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.fog,ee.lights,{emissive:{value:new Ie(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:$e([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:$e([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:$e([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Ie(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:$e([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:$e([ee.points,ee.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:$e([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:$e([ee.common,ee.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:$e([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:$e([ee.sprite,ee.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null}},vertexShader:be.background_vert,fragmentShader:be.background_frag},cube:{uniforms:$e([ee.envmap,{opacity:{value:1}}]),vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:$e([ee.common,ee.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:$e([ee.lights,ee.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Et.physical={uniforms:$e([Et.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};function Fu(s,e,t,n,i,r){const o=new Ie(0);let a=i===!0?0:1,c,l,u=null,d=0,f=null;function m(p,h){let v=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=e.get(y));const E=s.xr,w=E.getSession&&E.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?x(o,a):y&&y.isColor&&(x(y,1),v=!0),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ii)?(l===void 0&&(l=new Mt(new li(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Bn(Et.cube.uniforms),vertexShader:Et.cube.vertexShader,fragmentShader:Et.cube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Mt(new Vn(2,2),new fn({name:"BackgroundMaterial",uniforms:Bn(Et.background.uniforms),vertexShader:Et.background.vertexShader,fragmentShader:Et.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,r)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(o,a)},render:m}}function Nu(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=h(null);let l=c,u=!1;function d(R,Y,V,X,q){let N=!1;if(o){const k=p(X,V,Y);l!==k&&(l=k,m(l.object)),N=v(R,X,V,q),N&&y(R,X,V,q)}else{const k=Y.wireframe===!0;(l.geometry!==X.id||l.program!==V.id||l.wireframe!==k)&&(l.geometry=X.id,l.program=V.id,l.wireframe=k,N=!0)}q!==null&&t.update(q,34963),(N||u)&&(u=!1,g(R,Y,V,X),q!==null&&s.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function x(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function p(R,Y,V){const X=V.wireframe===!0;let q=a[R.id];q===void 0&&(q={},a[R.id]=q);let N=q[Y.id];N===void 0&&(N={},q[Y.id]=N);let k=N[X];return k===void 0&&(k=h(f()),N[X]=k),k}function h(R){const Y=[],V=[],X=[];for(let q=0;q<i;q++)Y[q]=0,V[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:V,attributeDivisors:X,object:R,attributes:{},index:null}}function v(R,Y,V,X){const q=l.attributes,N=Y.attributes;let k=0;const J=V.getAttributes();for(const Z in J)if(J[Z].location>=0){const ce=q[Z];let me=N[Z];if(me===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(me=R.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;k++}return l.attributesNum!==k||l.index!==X}function y(R,Y,V,X){const q={},N=Y.attributes;let k=0;const J=V.getAttributes();for(const Z in J)if(J[Z].location>=0){let ce=N[Z];ce===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor));const me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),q[Z]=me,k++}l.attributes=q,l.attributesNum=k,l.index=X}function E(){const R=l.newAttributes;for(let Y=0,V=R.length;Y<V;Y++)R[Y]=0}function w(R){b(R,0)}function b(R,Y){const V=l.newAttributes,X=l.enabledAttributes,q=l.attributeDivisors;V[R]=1,X[R]===0&&(s.enableVertexAttribArray(R),X[R]=1),q[R]!==Y&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,Y),q[R]=Y)}function A(){const R=l.newAttributes,Y=l.enabledAttributes;for(let V=0,X=Y.length;V<X;V++)Y[V]!==R[V]&&(s.disableVertexAttribArray(V),Y[V]=0)}function P(R,Y,V,X,q,N){n.isWebGL2===!0&&(V===5124||V===5125)?s.vertexAttribIPointer(R,Y,V,q,N):s.vertexAttribPointer(R,Y,V,X,q,N)}function g(R,Y,V,X){if(n.isWebGL2===!1&&(R.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const q=X.attributes,N=V.getAttributes(),k=Y.defaultAttributeValues;for(const J in N){const Z=N[J];if(Z.location>=0){let j=q[J];if(j===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const ce=j.normalized,me=j.itemSize,H=t.get(j);if(H===void 0)continue;const Re=H.buffer,pe=H.type,ge=H.bytesPerElement;if(j.isInterleavedBufferAttribute){const oe=j.data,Fe=oe.stride,ye=j.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<Z.locationSize;de++)b(Z.location+de,oe.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<Z.locationSize;de++)w(Z.location+de);s.bindBuffer(34962,Re);for(let de=0;de<Z.locationSize;de++)P(Z.location+de,me/Z.locationSize,pe,ce,Fe*ge,(ye+me/Z.locationSize*de)*ge)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<Z.locationSize;oe++)b(Z.location+oe,j.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<Z.locationSize;oe++)w(Z.location+oe);s.bindBuffer(34962,Re);for(let oe=0;oe<Z.locationSize;oe++)P(Z.location+oe,me/Z.locationSize,pe,ce,me*ge,me/Z.locationSize*oe*ge)}}else if(k!==void 0){const ce=k[J];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(Z.location,ce);break;case 3:s.vertexAttrib3fv(Z.location,ce);break;case 4:s.vertexAttrib4fv(Z.location,ce);break;default:s.vertexAttrib1fv(Z.location,ce)}}}}A()}function T(){te();for(const R in a){const Y=a[R];for(const V in Y){const X=Y[V];for(const q in X)x(X[q].object),delete X[q];delete Y[V]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const Y=a[R.id];for(const V in Y){const X=Y[V];for(const q in X)x(X[q].object),delete X[q];delete Y[V]}delete a[R.id]}function F(R){for(const Y in a){const V=a[Y];if(V[R.id]===void 0)continue;const X=V[R.id];for(const q in X)x(X[q].object),delete X[q];delete V[R.id]}}function te(){K(),u=!0,l!==c&&(l=c,m(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:te,resetDefaultState:K,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:w,disableUnusedAttributes:A}}function zu(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,d){if(d===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,d),t.update(u,r,d)}this.setMode=o,this.render=a,this.renderInstances=c}function Uu(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),x=s.getParameter(34076),p=s.getParameter(34921),h=s.getParameter(36347),v=s.getParameter(36348),y=s.getParameter(36349),E=f>0,w=o||e.has("OES_texture_float"),b=E&&w,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:b,maxSamples:A}}function Ou(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Qt,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,m){const x=d.length!==0||f||n!==0||i;return i=f,t=u(d,m,0),n=d.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(d,f,m){const x=d.clippingPlanes,p=d.clipIntersection,h=d.clipShadows,v=s.get(d);if(!i||x===null||x.length===0||r&&!h)r?u(null):l();else{const y=r?0:n,E=y*4;let w=v.clippingState||null;c.value=w,w=u(x,f,E,m);for(let b=0;b!==E;++b)w[b]=t[b];v.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,x){const p=d!==null?d.length:0;let h=null;if(p!==0){if(h=c.value,x!==!0||h===null){const v=m+p*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(h===null||h.length<v)&&(h=new Float32Array(v));for(let E=0,w=m;E!==p;++E,w+=4)o.copy(d[E]).applyMatrix4(y,a),o.normal.toArray(h,w),h[w+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Bu(s){let e=new WeakMap;function t(o,a){return a===Mr?o.mapping=zn:a===Sr&&(o.mapping=Un),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Mr||a===Sr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pa extends ha{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const In=4,Es=[.125,.215,.35,.446,.526,.582],tn=20,pr=new pa,Ts=new Ie;let mr=null;const en=(1+Math.sqrt(5))/2,Rn=1/en,As=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,en,Rn),new D(0,en,-Rn),new D(Rn,0,en),new D(-Rn,0,en),new D(en,Rn,0),new D(-en,Rn,0)];class Cs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ds(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mr),e.scissorTest=!1,Li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zn||e.mapping===Un?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:ti,format:Tt,encoding:hn,depthBuffer:!1},i=Ls(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ls(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gu(r)),this._blurMaterial=Vu(r,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,n,i){const a=new dt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ts),u.toneMapping=Ut,u.autoClear=!1;const m=new la({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),x=new Mt(new li,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(Ts),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):y===1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v]));const E=this._cubeSize;Li(i,y*E,v>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zn||e.mapping===Un;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ds());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Li(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,pr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=As[(i-1)%As.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Mt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*tn-1),p=r/x,h=isFinite(r)?1+Math.floor(u*p):tn;h>tn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${tn}`);const v=[];let y=0;for(let P=0;P<tn;++P){const g=P/p,T=Math.exp(-g*g/2);v.push(T),P===0?y+=T:P<h&&(y+=2*T)}for(let P=0;P<v.length;P++)v[P]=v[P]/y;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=x,f.mipInt.value=E-n;const w=this._sizeLods[i],b=3*w*(i>E-In?i-E+In:0),A=4*(this._cubeSize-w);Li(t,b,A,3*w,2*w),c.setRenderTarget(t),c.render(d,pr)}}function Gu(s){const e=[],t=[],n=[];let i=s;const r=s-In+1+Es.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-In?c=Es[o-s+In-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,x=6,p=3,h=2,v=1,y=new Float32Array(p*x*m),E=new Float32Array(h*x*m),w=new Float32Array(v*x*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,g=A>2?0:-1,T=[P,g,0,P+2/3,g,0,P+2/3,g+1,0,P,g,0,P+2/3,g+1,0,P,g+1,0];y.set(T,p*x*A),E.set(f,h*x*A);const O=[A,A,A,A,A,A];w.set(O,v*x*A)}const b=new pn;b.setAttribute("position",new At(y,p)),b.setAttribute("uv",new At(E,h)),b.setAttribute("faceIndex",new At(w,v)),e.push(b),i>In&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ls(s,e,t){const n=new dn(s,e,t);return n.texture.mapping=Ii,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Li(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vu(s,e,t){const n=new Float32Array(tn),i=new D(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Ds(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Rs(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Dr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ku(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Mr||c===Sr,u=c===zn||c===Un;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Cs(s)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&i(d)){t===null&&(t=new Cs(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hu(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wu(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const p=m[x];for(let h=0,v=p.length;h<v;h++)e.update(p[h],34962)}}function l(d){const f=[],m=d.index,x=d.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let E=0,w=y.length;E<w;E+=3){const b=y[E+0],A=y[E+1],P=y[E+2];f.push(b,A,A,P,P,b)}}else{const y=x.array;p=x.version;for(let E=0,w=y.length/3-1;E<w;E+=3){const b=E+0,A=E+1,P=E+2;f.push(b,A,A,P,P,b)}}const h=new(na(f)?ua:ca)(f,1);h.version=p;const v=r.get(d);v&&e.remove(v),r.set(d,h)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function qu(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*c),t.update(m,r,1)}function d(f,m,x){if(x===0)return;let p,h;if(i)p=s,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,a,f*c,x),t.update(m,r,x)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function Xu(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yu(s,e){return s[0]-e[0]}function ju(s,e){return Math.abs(e[1])-Math.abs(s[1])}function gr(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Zu(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new We,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let v=r.get(u);if(v===void 0||v.count!==h){let V=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var x=V;v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],g=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let O=0;w===!0&&(O=1),b===!0&&(O=2),A===!0&&(O=3);let F=u.attributes.position.count*O,te=1;F>e.maxTextureSize&&(te=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const K=new Float32Array(F*te*4*h),R=new aa(K,F,te,h);R.type=rn,R.needsUpdate=!0;const Y=O*4;for(let X=0;X<h;X++){const q=P[X],N=g[X],k=T[X],J=F*te*4*X;for(let Z=0;Z<q.count;Z++){const j=Z*Y;w===!0&&(o.fromBufferAttribute(q,Z),q.normalized===!0&&gr(o,q),K[J+j+0]=o.x,K[J+j+1]=o.y,K[J+j+2]=o.z,K[J+j+3]=0),b===!0&&(o.fromBufferAttribute(N,Z),N.normalized===!0&&gr(o,N),K[J+j+4]=o.x,K[J+j+5]=o.y,K[J+j+6]=o.z,K[J+j+7]=0),A===!0&&(o.fromBufferAttribute(k,Z),k.normalized===!0&&gr(o,k),K[J+j+8]=o.x,K[J+j+9]=o.y,K[J+j+10]=o.z,K[J+j+11]=k.itemSize===4?o.w:1)}}v={count:h,texture:R,size:new De(F,te)},r.set(u,v),u.addEventListener("dispose",V)}let y=0;for(let w=0;w<m.length;w++)y+=m[w];const E=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const p=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==p){h=[];for(let b=0;b<p;b++)h[b]=[b,0];n[u.id]=h}for(let b=0;b<p;b++){const A=h[b];A[0]=b,A[1]=m[b]}h.sort(ju);for(let b=0;b<8;b++)b<p&&h[b][1]?(a[b][0]=h[b][0],a[b][1]=h[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Yu);const v=u.morphAttributes.position,y=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const A=a[b],P=A[0],g=A[1];P!==Number.MAX_SAFE_INTEGER&&g?(v&&u.getAttribute("morphTarget"+b)!==v[P]&&u.setAttribute("morphTarget"+b,v[P]),y&&u.getAttribute("morphNormal"+b)!==y[P]&&u.setAttribute("morphNormal"+b,y[P]),i[b]=g,E+=g):(v&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),y&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const w=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function $u(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ma=new pt,ga=new aa,_a=new Oo,xa=new da,Ps=[],Is=[],Fs=new Float32Array(16),Ns=new Float32Array(9),zs=new Float32Array(4);function kn(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ps[i];if(r===void 0&&(r=new Float32Array(i),Ps[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ni(s,e){let t=Is[e];t===void 0&&(t=new Int32Array(e),Is[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ju(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ku(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;s.uniform2fv(this.addr,e),tt(t,e)}}function Qu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;s.uniform3fv(this.addr,e),tt(t,e)}}function eh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;s.uniform4fv(this.addr,e),tt(t,e)}}function th(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;zs.set(n),s.uniformMatrix2fv(this.addr,!1,zs),tt(t,n)}}function nh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Ns.set(n),s.uniformMatrix3fv(this.addr,!1,Ns),tt(t,n)}}function ih(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Fs.set(n),s.uniformMatrix4fv(this.addr,!1,Fs),tt(t,n)}}function rh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sh(s,e){const t=this.cache;et(t,e)||(s.uniform2iv(this.addr,e),tt(t,e))}function ah(s,e){const t=this.cache;et(t,e)||(s.uniform3iv(this.addr,e),tt(t,e))}function oh(s,e){const t=this.cache;et(t,e)||(s.uniform4iv(this.addr,e),tt(t,e))}function lh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ch(s,e){const t=this.cache;et(t,e)||(s.uniform2uiv(this.addr,e),tt(t,e))}function uh(s,e){const t=this.cache;et(t,e)||(s.uniform3uiv(this.addr,e),tt(t,e))}function hh(s,e){const t=this.cache;et(t,e)||(s.uniform4uiv(this.addr,e),tt(t,e))}function dh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ma,i)}function fh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_a,i)}function ph(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xa,i)}function mh(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ga,i)}function gh(s){switch(s){case 5126:return Ju;case 35664:return Ku;case 35665:return Qu;case 35666:return eh;case 35674:return th;case 35675:return nh;case 35676:return ih;case 5124:case 35670:return rh;case 35667:case 35671:return sh;case 35668:case 35672:return ah;case 35669:case 35673:return oh;case 5125:return lh;case 36294:return ch;case 36295:return uh;case 36296:return hh;case 35678:case 36198:case 36298:case 36306:case 35682:return dh;case 35679:case 36299:case 36307:return fh;case 35680:case 36300:case 36308:case 36293:return ph;case 36289:case 36303:case 36311:case 36292:return mh}}function _h(s,e){s.uniform1fv(this.addr,e)}function xh(s,e){const t=kn(e,this.size,2);s.uniform2fv(this.addr,t)}function vh(s,e){const t=kn(e,this.size,3);s.uniform3fv(this.addr,t)}function Mh(s,e){const t=kn(e,this.size,4);s.uniform4fv(this.addr,t)}function Sh(s,e){const t=kn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yh(s,e){const t=kn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bh(s,e){const t=kn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wh(s,e){s.uniform1iv(this.addr,e)}function Eh(s,e){s.uniform2iv(this.addr,e)}function Th(s,e){s.uniform3iv(this.addr,e)}function Ah(s,e){s.uniform4iv(this.addr,e)}function Ch(s,e){s.uniform1uiv(this.addr,e)}function Lh(s,e){s.uniform2uiv(this.addr,e)}function Dh(s,e){s.uniform3uiv(this.addr,e)}function Rh(s,e){s.uniform4uiv(this.addr,e)}function Ph(s,e,t){const n=e.length,i=Ni(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||ma,i[r])}function Ih(s,e,t){const n=e.length,i=Ni(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||_a,i[r])}function Fh(s,e,t){const n=e.length,i=Ni(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||xa,i[r])}function Nh(s,e,t){const n=e.length,i=Ni(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||ga,i[r])}function zh(s){switch(s){case 5126:return _h;case 35664:return xh;case 35665:return vh;case 35666:return Mh;case 35674:return Sh;case 35675:return yh;case 35676:return bh;case 5124:case 35670:return wh;case 35667:case 35671:return Eh;case 35668:case 35672:return Th;case 35669:case 35673:return Ah;case 5125:return Ch;case 36294:return Lh;case 36295:return Dh;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ph;case 35679:case 36299:case 36307:return Ih;case 35680:case 36300:case 36308:case 36293:return Fh;case 36289:case 36303:case 36311:case 36292:return Nh}}class Uh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gh(t.type)}}class Oh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zh(t.type)}}class Bh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function Us(s,e){s.seq.push(e),s.map[e.id]=e}function Gh(s,e,t){const n=s.name,i=n.length;for(_r.lastIndex=0;;){const r=_r.exec(n),o=_r.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Us(t,l===void 0?new Uh(a,s,e):new Oh(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Bh(a),Us(t,d)),t=d}}}class Pi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Gh(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Os(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Vh=0;function kh(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Hh(s){switch(s){case hn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Bs(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+kh(s.getShaderSource(e),o)}else return i}function Wh(s,e){const t=Hh(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qh(s,e){let t;switch(e){case co:t="Linear";break;case uo:t="Reinhard";break;case ho:t="OptimizedCineon";break;case fo:t="ACESFilmic";break;case po:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xh(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($n).join(`
`)}function Yh(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jh(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $n(s){return s!==""}function Gs(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vs(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Er(s){return s.replace(Zh,$h)}function $h(s,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Er(t)}const Jh=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Kh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ks(s){return s.replace(Kh,va).replace(Jh,Qh)}function Qh(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),va(s,e,t,n)}function va(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hs(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ed(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Js?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ga?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function td(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zn:case Un:e="ENVMAP_TYPE_CUBE";break;case Ii:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nd(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Un:e="ENVMAP_MODE_REFRACTION";break}return e}function id(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ar:e="ENVMAP_BLENDING_MULTIPLY";break;case oo:e="ENVMAP_BLENDING_MIX";break;case lo:e="ENVMAP_BLENDING_ADD";break}return e}function rd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sd(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ed(t),l=td(t),u=nd(t),d=id(t),f=rd(t),m=t.isWebGL2?"":Xh(t),x=Yh(r),p=i.createProgram();let h,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter($n).join(`
`),h.length>0&&(h+=`
`),v=[m,x].filter($n).join(`
`),v.length>0&&(v+=`
`)):(h=[Hs(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($n).join(`
`),v=[m,Hs(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ut?"#define TONE_MAPPING":"",t.toneMapping!==Ut?be.tonemapping_pars_fragment:"",t.toneMapping!==Ut?qh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Wh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($n).join(`
`)),o=Er(o),o=Gs(o,t),o=Vs(o,t),a=Er(a),a=Gs(a,t),a=Vs(a,t),o=ks(o),a=ks(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["#define varying in",t.glslVersion===hs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=y+h+o,w=y+v+a,b=Os(i,35633,E),A=Os(i,35632,w);if(i.attachShader(p,b),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),O=i.getShaderInfoLog(b).trim(),F=i.getShaderInfoLog(A).trim();let te=!0,K=!0;if(i.getProgramParameter(p,35714)===!1){te=!1;const R=Bs(i,b,"vertex"),Y=Bs(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+R+`
`+Y)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(O===""||F==="")&&(K=!1);K&&(this.diagnostics={runnable:te,programLog:T,vertexShader:{log:O,prefix:h},fragmentShader:{log:F,prefix:v}})}i.deleteShader(b),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new Pi(i,p)),P};let g;return this.getAttributes=function(){return g===void 0&&(g=jh(i,p)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Vh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let ad=0;class od{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new ld(e);t.set(e,n)}return t.get(e)}}class ld{constructor(e){this.id=ad++,this.code=e,this.usedTimes=0}}function cd(s,e,t,n,i,r,o){const a=new oa,c=new od,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g,T,O,F,te){const K=F.fog,R=te.geometry,Y=g.isMeshStandardMaterial?F.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||Y),X=!!V&&V.mapping===Ii?V.image.height:null,q=x[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const N=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,k=N!==void 0?N.length:0;let J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let Z,j,ce,me;if(q){const Fe=Et[q];Z=Fe.vertexShader,j=Fe.fragmentShader}else Z=g.vertexShader,j=g.fragmentShader,c.update(g),ce=c.getVertexShaderID(g),me=c.getFragmentShaderID(g);const H=s.getRenderTarget(),Re=g.alphaTest>0,pe=g.clearcoat>0,ge=g.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:g.type,vertexShader:Z,fragmentShader:j,defines:g.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:te.isInstancedMesh===!0,instancingColor:te.isInstancedMesh===!0&&te.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?s.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:hn,map:!!g.map,matcap:!!g.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:X,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Fo,tangentSpaceNormalMap:g.normalMapType===Io,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Ue,clearcoat:pe,clearcoatMap:pe&&!!g.clearcoatMap,clearcoatRoughnessMap:pe&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!g.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!g.iridescenceMap,iridescenceThicknessMap:ge&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===Fn,alphaMap:!!g.alphaMap,alphaTest:Re,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!R.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||g.transmission>0||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||g.sheen>0||!!g.sheenColorMap||!!g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!K,useFog:g.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:J,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:g.toneMapped?s.toneMapping:Ut,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===cn,flipSided:g.side===St,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function h(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)T.push(O),T.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(v(T,g),y(T,g),T.push(s.outputEncoding)),T.push(g.customProgramCacheKey),T.join()}function v(g,T){g.push(T.precision),g.push(T.outputEncoding),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.combine),g.push(T.vertexUvs),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function y(g,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),g.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),g.push(a.mask)}function E(g){const T=x[g.type];let O;if(T){const F=Et[T];O=Jo.clone(F.uniforms)}else O=g.uniforms;return O}function w(g,T){let O;for(let F=0,te=l.length;F<te;F++){const K=l[F];if(K.cacheKey===T){O=K,++O.usedTimes;break}}return O===void 0&&(O=new sd(s,T,g,r),l.push(O)),O}function b(g){if(--g.usedTimes===0){const T=l.indexOf(g);l[T]=l[l.length-1],l.pop(),g.destroy()}}function A(g){c.remove(g)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:P}}function ud(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ws(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qs(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,x,p,h){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:p,group:h},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=m,v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=h),e++,v}function a(d,f,m,x,p,h){const v=o(d,f,m,x,p,h);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function c(d,f,m,x,p,h){const v=o(d,f,m,x,p,h);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function l(d,f){t.length>1&&t.sort(d||hd),n.length>1&&n.sort(f||Ws),i.length>1&&i.sort(f||Ws)}function u(){for(let d=e,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function dd(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new qs,s.set(n,[r])):i>=s.get(n).length?(r=new qs,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function fd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function pd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let md=0;function gd(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function _d(s,e){const t=new fd,n=pd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,o=new ke,a=new ke;function c(u,d){let f=0,m=0,x=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,h=0,v=0,y=0,E=0,w=0,b=0,A=0;u.sort(gd);const P=d!==!0?Math.PI:1;for(let T=0,O=u.length;T<O;T++){const F=u[T],te=F.color,K=F.intensity,R=F.distance,Y=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=te.r*K*P,m+=te.g*K*P,x+=te.b*K*P;else if(F.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(F.sh.coefficients[V],K);else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const X=F.shadow,q=n.get(F);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=F.shadow.matrix,w++}i.directional[p]=V,p++}else if(F.isSpotLight){const V=t.get(F);if(V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(te).multiplyScalar(K*P),V.distance=R,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,F.castShadow){const X=F.shadow,q=n.get(F);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=Y,i.spotShadowMatrix[v]=F.shadow.matrix,A++}i.spot[v]=V,v++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(te).multiplyScalar(K),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=V,y++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*P),V.distance=F.distance,V.decay=F.decay,F.castShadow){const X=F.shadow,q=n.get(F);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,i.pointShadow[h]=q,i.pointShadowMap[h]=Y,i.pointShadowMatrix[h]=F.shadow.matrix,b++}i.point[h]=V,h++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(K*P),V.groundColor.copy(F.groundColor).multiplyScalar(K*P),i.hemi[E]=V,E++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=x;const g=i.hash;(g.directionalLength!==p||g.pointLength!==h||g.spotLength!==v||g.rectAreaLength!==y||g.hemiLength!==E||g.numDirectionalShadows!==w||g.numPointShadows!==b||g.numSpotShadows!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=y,i.point.length=h,i.hemi.length=E,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=A,g.directionalLength=p,g.pointLength=h,g.spotLength=v,g.rectAreaLength=y,g.hemiLength=E,g.numDirectionalShadows=w,g.numPointShadows=b,g.numSpotShadows=A,i.version=md++)}function l(u,d){let f=0,m=0,x=0,p=0,h=0;const v=d.matrixWorldInverse;for(let y=0,E=u.length;y<E;y++){const w=u[y];if(w.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),f++}else if(w.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(v),x++}else if(w.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),a.identity(),o.copy(w.matrixWorld),o.premultiply(v),a.extractRotation(o),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(v),m++}else if(w.isHemisphereLight){const b=i.hemi[h];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(v),h++}}}return{setup:c,setupView:l,state:i}}function Xs(s,e){const t=new _d(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function xd(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Xs(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Xs(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class vd extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ro,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Md extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bd(s,e,t){let n=new Lr;const i=new De,r=new De,o=new We,a=new vd({depthPacking:Po}),c=new Md,l={},u=t.maxTextureSize,d={0:St,1:Qn,2:cn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Sd,fragmentShader:yd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new pn;x.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Mt(x,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js,this.render=function(w,b,A){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const P=s.getRenderTarget(),g=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),O=s.state;O.setBlending(jt),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let F=0,te=w.length;F<te;F++){const K=w[F],R=K.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const Y=R.getFrameExtents();if(i.multiply(Y),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,R.mapSize.y=r.y)),R.map===null){const X=this.type!==Zn?{minFilter:nt,magFilter:nt}:{};R.map=new dn(i.x,i.y,X),R.map.texture.name=K.name+".shadowMap",R.camera.updateProjectionMatrix()}s.setRenderTarget(R.map),s.clear();const V=R.getViewportCount();for(let X=0;X<V;X++){const q=R.getViewport(X);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),O.viewport(o),R.updateMatrices(K,X),n=R.getFrustum(),E(b,A,R.camera,K,this.type)}R.isPointLightShadow!==!0&&this.type===Zn&&v(R,A),R.needsUpdate=!1}h.needsUpdate=!1,s.setRenderTarget(P,g,T)};function v(w,b){const A=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new dn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,A,f,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,A,m,p,null)}function y(w,b,A,P,g,T){let O=null;const F=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0?O=F:O=A.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const te=O.uuid,K=b.uuid;let R=l[te];R===void 0&&(R={},l[te]=R);let Y=R[K];Y===void 0&&(Y=O.clone(),R[K]=Y),O=Y}return O.visible=b.visible,O.wireframe=b.wireframe,T===Zn?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:d[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaTest,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(A.matrixWorld),O.nearDistance=P,O.farDistance=g),O}function E(w,b,A,P,g){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const F=e.update(w),te=w.material;if(Array.isArray(te)){const K=F.groups;for(let R=0,Y=K.length;R<Y;R++){const V=K[R],X=te[V.materialIndex];if(X&&X.visible){const q=y(w,X,P,A.near,A.far,g);s.renderBufferDirect(A,null,F,q,w,V)}}}else if(te.visible){const K=y(w,te,P,A.near,A.far,g);s.renderBufferDirect(A,null,F,K,w,null)}}const O=w.children;for(let F=0,te=O.length;F<te;F++)E(O[F],b,A,P,g)}}function wd(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const se=new We;let B=null;const re=new We(0,0,0,0);return{setMask:function(ne){B!==ne&&!C&&(s.colorMask(ne,ne,ne,ne),B=ne)},setLocked:function(ne){C=ne},setClear:function(ne,Ee,qe,Be,Bt){Bt===!0&&(ne*=Be,Ee*=Be,qe*=Be),se.set(ne,Ee,qe,Be),re.equals(se)===!1&&(s.clearColor(ne,Ee,qe,Be),re.copy(se))},reset:function(){C=!1,B=null,re.set(-1,0,0,0)}}}function r(){let C=!1,se=null,B=null,re=null;return{setTest:function(ne){ne?Re(2929):pe(2929)},setMask:function(ne){se!==ne&&!C&&(s.depthMask(ne),se=ne)},setFunc:function(ne){if(B!==ne){if(ne)switch(ne){case eo:s.depthFunc(512);break;case to:s.depthFunc(519);break;case no:s.depthFunc(513);break;case vr:s.depthFunc(515);break;case io:s.depthFunc(514);break;case ro:s.depthFunc(518);break;case so:s.depthFunc(516);break;case ao:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);B=ne}},setLocked:function(ne){C=ne},setClear:function(ne){re!==ne&&(s.clearDepth(ne),re=ne)},reset:function(){C=!1,se=null,B=null,re=null}}}function o(){let C=!1,se=null,B=null,re=null,ne=null,Ee=null,qe=null,Be=null,Bt=null;return{setTest:function(Ne){C||(Ne?Re(2960):pe(2960))},setMask:function(Ne){se!==Ne&&!C&&(s.stencilMask(Ne),se=Ne)},setFunc:function(Ne,Lt,lt){(B!==Ne||re!==Lt||ne!==lt)&&(s.stencilFunc(Ne,Lt,lt),B=Ne,re=Lt,ne=lt)},setOp:function(Ne,Lt,lt){(Ee!==Ne||qe!==Lt||Be!==lt)&&(s.stencilOp(Ne,Lt,lt),Ee=Ne,qe=Lt,Be=lt)},setLocked:function(Ne){C=Ne},setClear:function(Ne){Bt!==Ne&&(s.clearStencil(Ne),Bt=Ne)},reset:function(){C=!1,se=null,B=null,re=null,ne=null,Ee=null,qe=null,Be=null,Bt=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,p=[],h=null,v=!1,y=null,E=null,w=null,b=null,A=null,P=null,g=null,T=!1,O=null,F=null,te=null,K=null,R=null;const Y=s.getParameter(35661);let V=!1,X=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=X>=2);let N=null,k={};const J=s.getParameter(3088),Z=s.getParameter(2978),j=new We().fromArray(J),ce=new We().fromArray(Z);function me(C,se,B){const re=new Uint8Array(4),ne=s.createTexture();s.bindTexture(C,ne),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let Ee=0;Ee<B;Ee++)s.texImage2D(se+Ee,0,6408,1,1,0,6408,5121,re);return ne}const H={};H[3553]=me(3553,3553,1),H[34067]=me(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Re(2929),c.setFunc(vr),Je(!1),yt(Nr),Re(2884),Ye(jt);function Re(C){f[C]!==!0&&(s.enable(C),f[C]=!0)}function pe(C){f[C]!==!1&&(s.disable(C),f[C]=!1)}function ge(C,se){return m[C]!==se?(s.bindFramebuffer(C,se),m[C]=se,n&&(C===36009&&(m[36160]=se),C===36160&&(m[36009]=se)),!0):!1}function oe(C,se){let B=p,re=!1;if(C)if(B=x.get(se),B===void 0&&(B=[],x.set(se,B)),C.isWebGLMultipleRenderTargets){const ne=C.texture;if(B.length!==ne.length||B[0]!==36064){for(let Ee=0,qe=ne.length;Ee<qe;Ee++)B[Ee]=36064+Ee;B.length=ne.length,re=!0}}else B[0]!==36064&&(B[0]=36064,re=!0);else B[0]!==1029&&(B[0]=1029,re=!0);re&&(t.isWebGL2?s.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Fe(C){return h!==C?(s.useProgram(C),h=C,!0):!1}const ye={[Pn]:32774,[Ha]:32778,[Wa]:32779};if(n)ye[Br]=32775,ye[Gr]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ye[Br]=C.MIN_EXT,ye[Gr]=C.MAX_EXT)}const de={[qa]:0,[Xa]:1,[Ya]:768,[Ks]:770,[Qa]:776,[Ja]:774,[Za]:772,[ja]:769,[Qs]:771,[Ka]:775,[$a]:773};function Ye(C,se,B,re,ne,Ee,qe,Be){if(C===jt){v===!0&&(pe(3042),v=!1);return}if(v===!1&&(Re(3042),v=!0),C!==ka){if(C!==y||Be!==T){if((E!==Pn||A!==Pn)&&(s.blendEquation(32774),E=Pn,A=Pn),Be)switch(C){case Fn:s.blendFuncSeparate(1,771,1,771);break;case zr:s.blendFunc(1,1);break;case Ur:s.blendFuncSeparate(0,769,0,1);break;case Or:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Fn:s.blendFuncSeparate(770,771,1,771);break;case zr:s.blendFunc(770,1);break;case Ur:s.blendFuncSeparate(0,769,0,1);break;case Or:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,b=null,P=null,g=null,y=C,T=Be}return}ne=ne||se,Ee=Ee||B,qe=qe||re,(se!==E||ne!==A)&&(s.blendEquationSeparate(ye[se],ye[ne]),E=se,A=ne),(B!==w||re!==b||Ee!==P||qe!==g)&&(s.blendFuncSeparate(de[B],de[re],de[Ee],de[qe]),w=B,b=re,P=Ee,g=qe),y=C,T=null}function it(C,se){C.side===cn?pe(2884):Re(2884);let B=C.side===St;se&&(B=!B),Je(B),C.blending===Fn&&C.transparent===!1?Ye(jt):Ye(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const re=C.stencilWrite;l.setTest(re),re&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Pe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Re(32926):pe(32926)}function Je(C){O!==C&&(C?s.frontFace(2304):s.frontFace(2305),O=C)}function yt(C){C!==Oa?(Re(2884),C!==F&&(C===Nr?s.cullFace(1029):C===Ba?s.cullFace(1028):s.cullFace(1032))):pe(2884),F=C}function je(C){C!==te&&(V&&s.lineWidth(C),te=C)}function Pe(C,se,B){C?(Re(32823),(K!==se||R!==B)&&(s.polygonOffset(se,B),K=se,R=B)):pe(32823)}function Ct(C){C?Re(3089):pe(3089)}function bt(C){C===void 0&&(C=33984+Y-1),N!==C&&(s.activeTexture(C),N=C)}function S(C,se){N===null&&bt();let B=k[N];B===void 0&&(B={type:void 0,texture:void 0},k[N]=B),(B.type!==C||B.texture!==se)&&(s.bindTexture(C,se||H[C]),B.type=C,B.texture=se)}function _(){const C=k[N];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function U(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){j.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),j.copy(C))}function le(C){ce.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),ce.copy(C))}function ve(C,se){let B=d.get(se);B===void 0&&(B=new WeakMap,d.set(se,B));let re=B.get(C);re===void 0&&(re=s.getUniformBlockIndex(se,C.name),B.set(C,re))}function Ae(C,se){const re=d.get(se).get(C);u.get(C)!==re&&(s.uniformBlockBinding(se,re,C.__bindingPointIndex),u.set(C,re))}function Oe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},N=null,k={},m={},x=new WeakMap,p=[],h=null,v=!1,y=null,E=null,w=null,b=null,A=null,P=null,g=null,T=!1,O=null,F=null,te=null,K=null,R=null,j.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Re,disable:pe,bindFramebuffer:ge,drawBuffers:oe,useProgram:Fe,setBlending:Ye,setMaterial:it,setFlipSided:Je,setCullFace:yt,setLineWidth:je,setPolygonOffset:Pe,setScissorTest:Ct,activeTexture:bt,bindTexture:S,unbindTexture:_,compressedTexImage2D:G,texImage2D:he,texImage3D:ae,updateUBOMapping:ve,uniformBlockBinding:Ae,texStorage2D:_e,texStorage3D:U,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:ie,scissor:ue,viewport:le,reset:Oe}}function Ed(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,_){return v?new OffscreenCanvas(S,_):ni("canvas")}function E(S,_,G,$){let Q=1;if((S.width>$||S.height>$)&&(Q=$/Math.max(S.width,S.height)),Q<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ie=_?wr:Math.floor,_e=ie(Q*S.width),U=ie(Q*S.height);p===void 0&&(p=y(_e,U));const he=G?y(_e,U):p;return he.width=_e,he.height=U,he.getContext("2d").drawImage(S,0,0,_e,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_e+"x"+U+")."),he}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function w(S){return fs(S.width)&&fs(S.height)}function b(S){return a?!1:S.wrapS!==vt||S.wrapT!==vt||S.minFilter!==nt&&S.minFilter!==ht}function A(S,_){return S.generateMipmaps&&_&&S.minFilter!==nt&&S.minFilter!==ht}function P(S){s.generateMipmap(S)}function g(S,_,G,$,Q=!1){if(a===!1)return _;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ie=_;return _===6403&&(G===5126&&(ie=33326),G===5131&&(ie=33325),G===5121&&(ie=33321)),_===33319&&(G===5126&&(ie=33328),G===5131&&(ie=33327),G===5121&&(ie=33323)),_===6408&&(G===5126&&(ie=34836),G===5131&&(ie=34842),G===5121&&(ie=$===Ue&&Q===!1?35907:32856),G===32819&&(ie=32854),G===32820&&(ie=32855)),(ie===33325||ie===33326||ie===33327||ie===33328||ie===34842||ie===34836)&&e.get("EXT_color_buffer_float"),ie}function T(S,_,G){return A(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==nt&&S.minFilter!==ht?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function O(S){return S===nt||S===Vr||S===kr?9728:9729}function F(S){const _=S.target;_.removeEventListener("dispose",F),K(_),_.isVideoTexture&&x.delete(_)}function te(S){const _=S.target;_.removeEventListener("dispose",te),Y(_)}function K(S){const _=n.get(S);if(_.__webglInit===void 0)return;const G=S.source,$=h.get(G);if($){const Q=$[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(S),Object.keys($).length===0&&h.delete(G)}n.remove(S)}function R(S){const _=n.get(S);s.deleteTexture(_.__webglTexture);const G=S.source,$=h.get(G);delete $[_.__cacheKey],o.memory.textures--}function Y(S){const _=S.texture,G=n.get(S),$=n.get(_);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)s.deleteFramebuffer(G.__webglFramebuffer[Q]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[Q]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let Q=0;Q<G.__webglColorRenderbuffer.length;Q++)G.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[Q]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Q=0,ie=_.length;Q<ie;Q++){const _e=n.get(_[Q]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(_[Q])}n.remove(_),n.remove(S)}let V=0;function X(){V=0}function q(){const S=V;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),V+=1,S}function N(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.encoding),_.join()}function k(S,_){const G=n.get(S);if(S.isVideoTexture&&Ct(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(G,S,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,G.__webglTexture)}function J(S,_){const G=n.get(S);if(S.version>0&&G.__version!==S.version){pe(G,S,_);return}t.activeTexture(33984+_),t.bindTexture(35866,G.__webglTexture)}function Z(S,_){const G=n.get(S);if(S.version>0&&G.__version!==S.version){pe(G,S,_);return}t.activeTexture(33984+_),t.bindTexture(32879,G.__webglTexture)}function j(S,_){const G=n.get(S);if(S.version>0&&G.__version!==S.version){ge(G,S,_);return}t.activeTexture(33984+_),t.bindTexture(34067,G.__webglTexture)}const ce={[ei]:10497,[vt]:33071,[yr]:33648},me={[nt]:9728,[Vr]:9984,[kr]:9986,[ht]:9729,[mo]:9985,[Fi]:9987};function H(S,_,G){if(G?(s.texParameteri(S,10242,ce[_.wrapS]),s.texParameteri(S,10243,ce[_.wrapT]),(S===32879||S===35866)&&s.texParameteri(S,32882,ce[_.wrapR]),s.texParameteri(S,10240,me[_.magFilter]),s.texParameteri(S,10241,me[_.minFilter])):(s.texParameteri(S,10242,33071),s.texParameteri(S,10243,33071),(S===32879||S===35866)&&s.texParameteri(S,32882,33071),(_.wrapS!==vt||_.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,10240,O(_.magFilter)),s.texParameteri(S,10241,O(_.minFilter)),_.minFilter!==nt&&_.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(_.type===rn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===ti&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(S,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Re(S,_){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",F));const $=_.source;let Q=h.get($);Q===void 0&&(Q={},h.set($,Q));const ie=N(_);if(ie!==S.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ie].usedTimes++;const _e=Q[S.__cacheKey];_e!==void 0&&(Q[S.__cacheKey].usedTimes--,_e.usedTimes===0&&R(_)),S.__cacheKey=ie,S.__webglTexture=Q[ie].texture}return G}function pe(S,_,G){let $=3553;_.isDataArrayTexture&&($=35866),_.isData3DTexture&&($=32879);const Q=Re(S,_),ie=_.source;if(t.activeTexture(33984+G),t.bindTexture($,S.__webglTexture),ie.version!==ie.__currentVersion||Q===!0){s.pixelStorei(37440,_.flipY),s.pixelStorei(37441,_.premultiplyAlpha),s.pixelStorei(3317,_.unpackAlignment),s.pixelStorei(37443,0);const _e=b(_)&&w(_.image)===!1;let U=E(_.image,_e,!1,u);U=bt(_,U);const he=w(U)||a,ae=r.convert(_.format,_.encoding);let ue=r.convert(_.type),le=g(_.internalFormat,ae,ue,_.encoding,_.isVideoTexture);H($,_,he);let ve;const Ae=_.mipmaps,Oe=a&&_.isVideoTexture!==!0,C=ie.__currentVersion===void 0||Q===!0,se=T(_,U,he);if(_.isDepthTexture)le=6402,a?_.type===rn?le=36012:_.type===nn?le=33190:_.type===Nn?le=35056:le=33189:_.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===an&&le===6402&&_.type!==ta&&_.type!==nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=nn,ue=r.convert(_.type)),_.format===On&&le===6402&&(le=34041,_.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Nn,ue=r.convert(_.type))),C&&(Oe?t.texStorage2D(3553,1,le,U.width,U.height):t.texImage2D(3553,0,le,U.width,U.height,0,ae,ue,null));else if(_.isDataTexture)if(Ae.length>0&&he){Oe&&C&&t.texStorage2D(3553,se,le,Ae[0].width,Ae[0].height);for(let B=0,re=Ae.length;B<re;B++)ve=Ae[B],Oe?t.texSubImage2D(3553,B,0,0,ve.width,ve.height,ae,ue,ve.data):t.texImage2D(3553,B,le,ve.width,ve.height,0,ae,ue,ve.data);_.generateMipmaps=!1}else Oe?(C&&t.texStorage2D(3553,se,le,U.width,U.height),t.texSubImage2D(3553,0,0,0,U.width,U.height,ae,ue,U.data)):t.texImage2D(3553,0,le,U.width,U.height,0,ae,ue,U.data);else if(_.isCompressedTexture){Oe&&C&&t.texStorage2D(3553,se,le,Ae[0].width,Ae[0].height);for(let B=0,re=Ae.length;B<re;B++)ve=Ae[B],_.format!==Tt?ae!==null?Oe?t.compressedTexSubImage2D(3553,B,0,0,ve.width,ve.height,ae,ve.data):t.compressedTexImage2D(3553,B,le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,B,0,0,ve.width,ve.height,ae,ue,ve.data):t.texImage2D(3553,B,le,ve.width,ve.height,0,ae,ue,ve.data)}else if(_.isDataArrayTexture)Oe?(C&&t.texStorage3D(35866,se,le,U.width,U.height,U.depth),t.texSubImage3D(35866,0,0,0,0,U.width,U.height,U.depth,ae,ue,U.data)):t.texImage3D(35866,0,le,U.width,U.height,U.depth,0,ae,ue,U.data);else if(_.isData3DTexture)Oe?(C&&t.texStorage3D(32879,se,le,U.width,U.height,U.depth),t.texSubImage3D(32879,0,0,0,0,U.width,U.height,U.depth,ae,ue,U.data)):t.texImage3D(32879,0,le,U.width,U.height,U.depth,0,ae,ue,U.data);else if(_.isFramebufferTexture){if(C)if(Oe)t.texStorage2D(3553,se,le,U.width,U.height);else{let B=U.width,re=U.height;for(let ne=0;ne<se;ne++)t.texImage2D(3553,ne,le,B,re,0,ae,ue,null),B>>=1,re>>=1}}else if(Ae.length>0&&he){Oe&&C&&t.texStorage2D(3553,se,le,Ae[0].width,Ae[0].height);for(let B=0,re=Ae.length;B<re;B++)ve=Ae[B],Oe?t.texSubImage2D(3553,B,0,0,ae,ue,ve):t.texImage2D(3553,B,le,ae,ue,ve);_.generateMipmaps=!1}else Oe?(C&&t.texStorage2D(3553,se,le,U.width,U.height),t.texSubImage2D(3553,0,0,0,ae,ue,U)):t.texImage2D(3553,0,le,ae,ue,U);A(_,he)&&P($),ie.__currentVersion=ie.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ge(S,_,G){if(_.image.length!==6)return;const $=Re(S,_),Q=_.source;if(t.activeTexture(33984+G),t.bindTexture(34067,S.__webglTexture),Q.version!==Q.__currentVersion||$===!0){s.pixelStorei(37440,_.flipY),s.pixelStorei(37441,_.premultiplyAlpha),s.pixelStorei(3317,_.unpackAlignment),s.pixelStorei(37443,0);const ie=_.isCompressedTexture||_.image[0].isCompressedTexture,_e=_.image[0]&&_.image[0].isDataTexture,U=[];for(let B=0;B<6;B++)!ie&&!_e?U[B]=E(_.image[B],!1,!0,l):U[B]=_e?_.image[B].image:_.image[B],U[B]=bt(_,U[B]);const he=U[0],ae=w(he)||a,ue=r.convert(_.format,_.encoding),le=r.convert(_.type),ve=g(_.internalFormat,ue,le,_.encoding),Ae=a&&_.isVideoTexture!==!0,Oe=Q.__currentVersion===void 0||$===!0;let C=T(_,he,ae);H(34067,_,ae);let se;if(ie){Ae&&Oe&&t.texStorage2D(34067,C,ve,he.width,he.height);for(let B=0;B<6;B++){se=U[B].mipmaps;for(let re=0;re<se.length;re++){const ne=se[re];_.format!==Tt?ue!==null?Ae?t.compressedTexSubImage2D(34069+B,re,0,0,ne.width,ne.height,ue,ne.data):t.compressedTexImage2D(34069+B,re,ve,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+B,re,0,0,ne.width,ne.height,ue,le,ne.data):t.texImage2D(34069+B,re,ve,ne.width,ne.height,0,ue,le,ne.data)}}}else{se=_.mipmaps,Ae&&Oe&&(se.length>0&&C++,t.texStorage2D(34067,C,ve,U[0].width,U[0].height));for(let B=0;B<6;B++)if(_e){Ae?t.texSubImage2D(34069+B,0,0,0,U[B].width,U[B].height,ue,le,U[B].data):t.texImage2D(34069+B,0,ve,U[B].width,U[B].height,0,ue,le,U[B].data);for(let re=0;re<se.length;re++){const Ee=se[re].image[B].image;Ae?t.texSubImage2D(34069+B,re+1,0,0,Ee.width,Ee.height,ue,le,Ee.data):t.texImage2D(34069+B,re+1,ve,Ee.width,Ee.height,0,ue,le,Ee.data)}}else{Ae?t.texSubImage2D(34069+B,0,0,0,ue,le,U[B]):t.texImage2D(34069+B,0,ve,ue,le,U[B]);for(let re=0;re<se.length;re++){const ne=se[re];Ae?t.texSubImage2D(34069+B,re+1,0,0,ue,le,ne.image[B]):t.texImage2D(34069+B,re+1,ve,ue,le,ne.image[B])}}}A(_,ae)&&P(34067),Q.__currentVersion=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function oe(S,_,G,$,Q){const ie=r.convert(G.format,G.encoding),_e=r.convert(G.type),U=g(G.internalFormat,ie,_e,G.encoding);n.get(_).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,U,_.width,_.height,_.depth,0,ie,_e,null):t.texImage2D(Q,0,U,_.width,_.height,0,ie,_e,null)),t.bindFramebuffer(36160,S),Pe(_)?f.framebufferTexture2DMultisampleEXT(36160,$,Q,n.get(G).__webglTexture,0,je(_)):s.framebufferTexture2D(36160,$,Q,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(S,_,G){if(s.bindRenderbuffer(36161,S),_.depthBuffer&&!_.stencilBuffer){let $=33189;if(G||Pe(_)){const Q=_.depthTexture;Q&&Q.isDepthTexture&&(Q.type===rn?$=36012:Q.type===nn&&($=33190));const ie=je(_);Pe(_)?f.renderbufferStorageMultisampleEXT(36161,ie,$,_.width,_.height):s.renderbufferStorageMultisample(36161,ie,$,_.width,_.height)}else s.renderbufferStorage(36161,$,_.width,_.height);s.framebufferRenderbuffer(36160,36096,36161,S)}else if(_.depthBuffer&&_.stencilBuffer){const $=je(_);G&&Pe(_)===!1?s.renderbufferStorageMultisample(36161,$,35056,_.width,_.height):Pe(_)?f.renderbufferStorageMultisampleEXT(36161,$,35056,_.width,_.height):s.renderbufferStorage(36161,34041,_.width,_.height),s.framebufferRenderbuffer(36160,33306,36161,S)}else{const $=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Q=0;Q<$.length;Q++){const ie=$[Q],_e=r.convert(ie.format,ie.encoding),U=r.convert(ie.type),he=g(ie.internalFormat,_e,U,ie.encoding),ae=je(_);G&&Pe(_)===!1?s.renderbufferStorageMultisample(36161,ae,he,_.width,_.height):Pe(_)?f.renderbufferStorageMultisampleEXT(36161,ae,he,_.width,_.height):s.renderbufferStorage(36161,he,_.width,_.height)}}s.bindRenderbuffer(36161,null)}function ye(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const $=n.get(_.depthTexture).__webglTexture,Q=je(_);if(_.depthTexture.format===an)Pe(_)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Q):s.framebufferTexture2D(36160,36096,3553,$,0);else if(_.depthTexture.format===On)Pe(_)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Q):s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function de(S){const _=n.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ye(_.__webglFramebuffer,S)}else if(G){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]=s.createRenderbuffer(),Fe(_.__webglDepthbuffer[$],S,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Fe(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ye(S,_,G){const $=n.get(S);_!==void 0&&oe($.__webglFramebuffer,S,S.texture,36064,3553),G!==void 0&&de(S)}function it(S){const _=S.texture,G=n.get(S),$=n.get(_);S.addEventListener("dispose",te),S.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=_.version,o.memory.textures++);const Q=S.isWebGLCubeRenderTarget===!0,ie=S.isWebGLMultipleRenderTargets===!0,_e=w(S)||a;if(Q){G.__webglFramebuffer=[];for(let U=0;U<6;U++)G.__webglFramebuffer[U]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ie)if(i.drawBuffers){const U=S.texture;for(let he=0,ae=U.length;he<ae;he++){const ue=n.get(U[he]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&Pe(S)===!1){const U=ie?_:[_];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let he=0;he<U.length;he++){const ae=U[he];G.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[he]);const ue=r.convert(ae.format,ae.encoding),le=r.convert(ae.type),ve=g(ae.internalFormat,ue,le,ae.encoding),Ae=je(S);s.renderbufferStorageMultisample(36161,Ae,ve,S.width,S.height),s.framebufferRenderbuffer(36160,36064+he,36161,G.__webglColorRenderbuffer[he])}s.bindRenderbuffer(36161,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,$.__webglTexture),H(34067,_,_e);for(let U=0;U<6;U++)oe(G.__webglFramebuffer[U],S,_,36064,34069+U);A(_,_e)&&P(34067),t.unbindTexture()}else if(ie){const U=S.texture;for(let he=0,ae=U.length;he<ae;he++){const ue=U[he],le=n.get(ue);t.bindTexture(3553,le.__webglTexture),H(3553,ue,_e),oe(G.__webglFramebuffer,S,ue,36064+he,3553),A(ue,_e)&&P(3553)}t.unbindTexture()}else{let U=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?U=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,$.__webglTexture),H(U,_,_e),oe(G.__webglFramebuffer,S,_,36064,U),A(_,_e)&&P(U),t.unbindTexture()}S.depthBuffer&&de(S)}function Je(S){const _=w(S)||a,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0,Q=G.length;$<Q;$++){const ie=G[$];if(A(ie,_)){const _e=S.isWebGLCubeRenderTarget?34067:3553,U=n.get(ie).__webglTexture;t.bindTexture(_e,U),P(_e),t.unbindTexture()}}}function yt(S){if(a&&S.samples>0&&Pe(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],G=S.width,$=S.height;let Q=16384;const ie=[],_e=S.stencilBuffer?33306:36096,U=n.get(S),he=S.isWebGLMultipleRenderTargets===!0;if(he)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,U.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,U.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,U.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){ie.push(36064+ae),S.depthBuffer&&ie.push(_e);const ue=U.__ignoreDepthValues!==void 0?U.__ignoreDepthValues:!1;if(ue===!1&&(S.depthBuffer&&(Q|=256),S.stencilBuffer&&(Q|=1024)),he&&s.framebufferRenderbuffer(36008,36064,36161,U.__webglColorRenderbuffer[ae]),ue===!0&&(s.invalidateFramebuffer(36008,[_e]),s.invalidateFramebuffer(36009,[_e])),he){const le=n.get(_[ae]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,le,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,Q,9728),m&&s.invalidateFramebuffer(36008,ie)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ae,36161,U.__webglColorRenderbuffer[ae]);const ue=n.get(_[ae]).__webglTexture;t.bindFramebuffer(36160,U.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ae,3553,ue,0)}t.bindFramebuffer(36009,U.__webglMultisampledFramebuffer)}}function je(S){return Math.min(d,S.samples)}function Pe(S){const _=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(S){const _=o.render.frame;x.get(S)!==_&&(x.set(S,_),S.update())}function bt(S,_){const G=S.encoding,$=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===br||G!==hn&&(G===Ue?a===!1?e.has("EXT_sRGB")===!0&&$===Tt?(S.format=br,S.minFilter=ht,S.generateMipmaps=!1):_=ra.sRGBToLinear(_):($!==Tt||Q!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),_}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Ye,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Pe}function Td(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===un)return 5121;if(r===vo)return 32819;if(r===Mo)return 32820;if(r===go)return 5120;if(r===_o)return 5122;if(r===ta)return 5123;if(r===xo)return 5124;if(r===nn)return 5125;if(r===rn)return 5126;if(r===ti)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===So)return 6406;if(r===Tt)return 6408;if(r===bo)return 6409;if(r===wo)return 6410;if(r===an)return 6402;if(r===On)return 34041;if(r===Eo)return 6403;if(r===yo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===br)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===To)return 36244;if(r===Ao)return 33319;if(r===Co)return 33320;if(r===Lo)return 36249;if(r===Gi||r===Vi||r===ki||r===Hi)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ki)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ki)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hi)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hr||r===Wr||r===qr||r===Xr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Do)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yr||r===jr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yr)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===jr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zr||r===$r||r===Jr||r===Kr||r===Qr||r===es||r===ts||r===ns||r===is||r===rs||r===ss||r===as||r===os||r===ls)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$r)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qr)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===es)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ts)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ns)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===is)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ss)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===as)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===os)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ls)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===cs)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Nn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Ad extends dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cd={type:"move"};class xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const y=new Di;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[p.jointName]=y,l.add(y)}const v=l.joints[p.jointName];h!==null&&(v.matrix.fromArray(h.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=h.radius),v.visible=h!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class Ld extends pt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:an,u!==an&&u!==On)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===an&&(n=nn),n===void 0&&u===On&&(n=Nn),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nt,this.minFilter=c!==void 0?c:nt,this.flipY=!1,this.generateMipmaps=!1}}class Dd extends Gn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,u=null,d=null,f=null,m=null;const x=t.getContextAttributes();let p=null,h=null;const v=[],y=[],E=new dt;E.layers.enable(1),E.viewport=new We;const w=new dt;w.layers.enable(2),w.viewport=new We;const b=[E,w],A=new Ad;A.layers.enable(1),A.layers.enable(2);let P=null,g=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=v[N];return k===void 0&&(k=new xr,v[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=v[N];return k===void 0&&(k=new xr,v[N]=k),k.getGripSpace()},this.getHand=function(N){let k=v[N];return k===void 0&&(k=new xr,v[N]=k),k.getHandSpace()};function T(N){const k=y.indexOf(N.inputSource);if(k===-1)return;const J=v[k];J!==void 0&&J.dispatchEvent({type:N.type,data:N.inputSource})}function O(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",F);for(let N=0;N<v.length;N++){const k=y[N];k!==null&&(y[N]=null,v[N].disconnect(k))}P=null,g=null,e.setRenderTarget(p),f=null,d=null,u=null,i=null,h=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",O),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:f}),h=new dn(f.framebufferWidth,f.framebufferHeight,{format:Tt,type:un,encoding:e.outputEncoding})}else{let k=null,J=null,Z=null;x.depth&&(Z=x.stencil?35056:33190,k=x.stencil?On:an,J=x.stencil?Nn:nn);const j={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(j),i.updateRenderState({layers:[d]}),h=new dn(d.textureWidth,d.textureHeight,{format:Tt,type:un,depthTexture:new Ld(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const ce=e.properties.get(h);ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(N){for(let k=0;k<N.removed.length;k++){const J=N.removed[k],Z=y.indexOf(J);Z>=0&&(y[Z]=null,v[Z].dispatchEvent({type:"disconnected",data:J}))}for(let k=0;k<N.added.length;k++){const J=N.added[k];let Z=y.indexOf(J);if(Z===-1){for(let ce=0;ce<v.length;ce++)if(ce>=y.length){y.push(J),Z=ce;break}else if(y[ce]===null){y[ce]=J,Z=ce;break}if(Z===-1)break}const j=v[Z];j&&j.dispatchEvent({type:"connected",data:J})}}const te=new D,K=new D;function R(N,k,J){te.setFromMatrixPosition(k.matrixWorld),K.setFromMatrixPosition(J.matrixWorld);const Z=te.distanceTo(K),j=k.projectionMatrix.elements,ce=J.projectionMatrix.elements,me=j[14]/(j[10]-1),H=j[14]/(j[10]+1),Re=(j[9]+1)/j[5],pe=(j[9]-1)/j[5],ge=(j[8]-1)/j[0],oe=(ce[8]+1)/ce[0],Fe=me*ge,ye=me*oe,de=Z/(-ge+oe),Ye=de*-ge;k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ye),N.translateZ(de),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const it=me+de,Je=H+de,yt=Fe-Ye,je=ye+(Z-Ye),Pe=Re*H/Je*it,Ct=pe*H/Je*it;N.projectionMatrix.makePerspective(yt,je,Pe,Ct,it,Je)}function Y(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;A.near=w.near=E.near=N.near,A.far=w.far=E.far=N.far,(P!==A.near||g!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,g=A.far);const k=N.parent,J=A.cameras;Y(A,k);for(let j=0;j<J.length;j++)Y(J[j],k);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),N.position.copy(A.position),N.quaternion.copy(A.quaternion),N.scale.copy(A.scale),N.matrix.copy(A.matrix),N.matrixWorld.copy(A.matrixWorld);const Z=N.children;for(let j=0,ce=Z.length;j<ce;j++)Z[j].updateMatrixWorld(!0);J.length===2?R(A,E,w):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let V=null;function X(N,k){if(l=k.getViewerPose(c||o),m=k,l!==null){const J=l.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let Z=!1;J.length!==A.cameras.length&&(A.cameras.length=0,Z=!0);for(let j=0;j<J.length;j++){const ce=J[j];let me=null;if(f!==null)me=f.getViewport(ce);else{const Re=u.getViewSubImage(d,ce);me=Re.viewport,j===0&&(e.setRenderTargetTextures(h,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(h))}let H=b[j];H===void 0&&(H=new dt,H.layers.enable(j),H.viewport=new We,b[j]=H),H.matrix.fromArray(ce.transform.matrix),H.projectionMatrix.fromArray(ce.projectionMatrix),H.viewport.set(me.x,me.y,me.width,me.height),j===0&&A.matrix.copy(H.matrix),Z===!0&&A.cameras.push(H)}}for(let J=0;J<v.length;J++){const Z=y[J],j=v[J];Z!==null&&j!==void 0&&j.update(Z,k,c||o)}V&&V(N,k),m=null}const q=new fa;q.setAnimationLoop(X),this.setAnimationLoop=function(N){V=N},this.dispose=function(){}}}function Rd(s,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,v,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),l(p,h)):h.isMeshStandardMaterial?(i(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,E)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),x(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,v,y):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===St&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===St&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let y;h.map?y=h.map:h.specularMap?y=h.specularMap:h.displacementMap?y=h.displacementMap:h.normalMap?y=h.normalMap:h.bumpMap?y=h.bumpMap:h.roughnessMap?y=h.roughnessMap:h.metalnessMap?y=h.metalnessMap:h.alphaMap?y=h.alphaMap:h.emissiveMap?y=h.emissiveMap:h.clearcoatMap?y=h.clearcoatMap:h.clearcoatNormalMap?y=h.clearcoatNormalMap:h.clearcoatRoughnessMap?y=h.clearcoatRoughnessMap:h.iridescenceMap?y=h.iridescenceMap:h.iridescenceThicknessMap?y=h.iridescenceThicknessMap:h.specularIntensityMap?y=h.specularIntensityMap:h.specularColorMap?y=h.specularColorMap:h.transmissionMap?y=h.transmissionMap:h.thicknessMap?y=h.thicknessMap:h.sheenColorMap?y=h.sheenColorMap:h.sheenRoughnessMap&&(y=h.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let E;h.aoMap?E=h.aoMap:h.lightMap&&(E=h.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,v,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*v,p.scale.value=y*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let E;h.map?E=h.map:h.alphaMap&&(E=h.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,v){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===St&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Pd(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(y,E){const w=E.program;n.uniformBlockBinding(y,w)}function l(y,E){let w=i[y.id];w===void 0&&(x(y),w=u(y),i[y.id]=w,y.addEventListener("dispose",h));const b=E.program;n.updateUBOMapping(y,b);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const E=d();y.__bindingPointIndex=E;const w=s.createBuffer(),b=y.__size,A=y.usage;return s.bindBuffer(35345,w),s.bufferData(35345,b,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,E,w),w}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const E=i[y.id],w=y.uniforms,b=y.__cache;s.bindBuffer(35345,E);for(let A=0,P=w.length;A<P;A++){const g=w[A];if(m(g,A,b)===!0){const T=g.value,O=g.__offset;typeof T=="number"?(g.__data[0]=T,s.bufferSubData(35345,O,g.__data)):(g.value.isMatrix3?(g.__data[0]=g.value.elements[0],g.__data[1]=g.value.elements[1],g.__data[2]=g.value.elements[2],g.__data[3]=g.value.elements[0],g.__data[4]=g.value.elements[3],g.__data[5]=g.value.elements[4],g.__data[6]=g.value.elements[5],g.__data[7]=g.value.elements[0],g.__data[8]=g.value.elements[6],g.__data[9]=g.value.elements[7],g.__data[10]=g.value.elements[8],g.__data[11]=g.value.elements[0]):T.toArray(g.__data),s.bufferSubData(35345,O,g.__data))}}s.bindBuffer(35345,null)}function m(y,E,w){const b=y.value;if(w[E]===void 0)return typeof b=="number"?w[E]=b:w[E]=b.clone(),!0;if(typeof b=="number"){if(w[E]!==b)return w[E]=b,!0}else{const A=w[E];if(A.equals(b)===!1)return A.copy(b),!0}return!1}function x(y){const E=y.uniforms;let w=0;const b=16;let A=0;for(let P=0,g=E.length;P<g;P++){const T=E[P],O=p(T);if(T.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,P>0){A=w%b;const F=b-A;A!==0&&F-O.boundary<0&&(w+=b-A,T.__offset=w)}w+=O.storage}return A=w%b,A>0&&(w+=b-A),y.__size=w,y.__cache={},this}function p(y){const E=y.value,w={boundary:0,storage:0};return typeof E=="number"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function h(y){const E=y.target;E.removeEventListener("dispose",h);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function v(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:v}}function Id(){const s=ni("canvas");return s.style.display="block",s}function Ma(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Id(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hn,this.physicallyCorrectLights=!1,this.toneMapping=Ut,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,v=0,y=0,E=null,w=-1,b=null;const A=new We,P=new We;let g=null,T=e.width,O=e.height,F=1,te=null,K=null;const R=new We(0,0,T,O),Y=new We(0,0,T,O);let V=!1;const X=new Lr;let q=!1,N=!1,k=null;const J=new ke,Z=new De,j=new D,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return E===null?F:1}let H=t;function Re(M,L){for(let z=0;z<M.length;z++){const I=M[z],W=e.getContext(I,L);if(W!==null)return W}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tr}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),H===null){const L=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&L.shift(),H=Re(L,M),H===null)throw Re(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let pe,ge,oe,Fe,ye,de,Ye,it,Je,yt,je,Pe,Ct,bt,S,_,G,$,Q,ie,_e,U,he,ae;function ue(){pe=new Hu(H),ge=new Uu(H,pe,s),pe.init(ge),U=new Td(H,pe,ge),oe=new wd(H,pe,ge),Fe=new Xu,ye=new ud,de=new Ed(H,pe,oe,ye,ge,U,Fe),Ye=new Bu(p),it=new ku(p),Je=new rl(H,ge),he=new Nu(H,pe,Je,ge),yt=new Wu(H,Je,Fe,he),je=new $u(H,yt,Je,Fe),Q=new Zu(H,ge,de),_=new Ou(ye),Pe=new cd(p,Ye,it,pe,ge,he,_),Ct=new Rd(p,ye),bt=new dd,S=new xd(pe,ge),$=new Fu(p,Ye,oe,je,u,o),G=new bd(p,je,ge),ae=new Pd(H,Fe,ge,oe),ie=new zu(H,pe,Fe,ge),_e=new qu(H,pe,Fe,ge),Fe.programs=Pe.programs,p.capabilities=ge,p.extensions=pe,p.properties=ye,p.renderLists=bt,p.shadowMap=G,p.state=oe,p.info=Fe}ue();const le=new Dd(p,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(T,O,!1))},this.getSize=function(M){return M.set(T,O)},this.setSize=function(M,L,z){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,O=L,e.width=Math.floor(M*F),e.height=Math.floor(L*F),z!==!1&&(e.style.width=M+"px",e.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(T*F,O*F).floor()},this.setDrawingBufferSize=function(M,L,z){T=M,O=L,F=z,e.width=Math.floor(M*z),e.height=Math.floor(L*z),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,L,z,I){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,L,z,I),oe.viewport(A.copy(R).multiplyScalar(F).floor())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,L,z,I){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,L,z,I),oe.scissor(P.copy(Y).multiplyScalar(F).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(M){oe.setScissorTest(V=M)},this.setOpaqueSort=function(M){te=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(M=!0,L=!0,z=!0){let I=0;M&&(I|=16384),L&&(I|=256),z&&(I|=1024),H.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),bt.dispose(),S.dispose(),ye.dispose(),Ye.dispose(),it.dispose(),je.dispose(),he.dispose(),ae.dispose(),Pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ee),le.removeEventListener("sessionend",qe),k&&(k.dispose(),k=null),Be.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const M=Fe.autoReset,L=G.enabled,z=G.autoUpdate,I=G.needsUpdate,W=G.type;ue(),Fe.autoReset=M,G.enabled=L,G.autoUpdate=z,G.needsUpdate=I,G.type=W}function Oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function C(M){const L=M.target;L.removeEventListener("dispose",C),se(L)}function se(M){B(M),ye.remove(M)}function B(M){const L=ye.get(M).programs;L!==void 0&&(L.forEach(function(z){Pe.releaseProgram(z)}),M.isShaderMaterial&&Pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,z,I,W,fe){L===null&&(L=ce);const xe=W.isMesh&&W.matrixWorld.determinant()<0,Se=Fa(M,L,z,I,W);oe.setMaterial(I,xe);let Me=z.index;const Le=z.attributes.position;if(Me===null){if(Le===void 0||Le.count===0)return}else if(Me.count===0)return;let we=1;I.wireframe===!0&&(Me=yt.getWireframeAttribute(z),we=2),he.setup(W,I,Se,z,Me);let Te,ze=ie;Me!==null&&(Te=Je.get(Me),ze=_e,ze.setIndex(Te));const Zt=Me!==null?Me.count:Le.count,mn=z.drawRange.start*we,gn=z.drawRange.count*we,wt=fe!==null?fe.start*we:0,Ce=fe!==null?fe.count*we:1/0,_n=Math.max(mn,wt),Ge=Math.min(Zt,mn+gn,wt+Ce)-1,ct=Math.max(0,Ge-_n+1);if(ct!==0){if(W.isMesh)I.wireframe===!0?(oe.setLineWidth(I.wireframeLinewidth*me()),ze.setMode(1)):ze.setMode(4);else if(W.isLine){let Gt=I.linewidth;Gt===void 0&&(Gt=1),oe.setLineWidth(Gt*me()),W.isLineSegments?ze.setMode(1):W.isLineLoop?ze.setMode(2):ze.setMode(3)}else W.isPoints?ze.setMode(0):W.isSprite&&ze.setMode(4);if(W.isInstancedMesh)ze.renderInstances(_n,ct,W.count);else if(z.isInstancedBufferGeometry){const Gt=Math.min(z.instanceCount,z._maxInstanceCount);ze.renderInstances(_n,ct,Gt)}else ze.render(_n,ct)}},this.compile=function(M,L){f=S.get(M),f.init(),x.push(f),M.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(p.physicallyCorrectLights),M.traverse(function(z){const I=z.material;if(I)if(Array.isArray(I))for(let W=0;W<I.length;W++){const fe=I[W];zi(fe,M,z)}else zi(I,M,z)}),x.pop(),f=null};let re=null;function ne(M){re&&re(M)}function Ee(){Be.stop()}function qe(){Be.start()}const Be=new fa;Be.setAnimationLoop(ne),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(M){re=M,le.setAnimationLoop(M),M===null?Be.stop():Be.start()},le.addEventListener("sessionstart",Ee),le.addEventListener("sessionend",qe),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,L,E),f=S.get(M,x.length),f.init(),x.push(f),J.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(J),N=this.localClippingEnabled,q=_.init(this.clippingPlanes,N,L),d=bt.get(M,m.length),d.init(),m.push(d),Bt(M,L,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(te,K),q===!0&&_.beginShadows();const z=f.state.shadowsArray;if(G.render(z,M,L),q===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(d,M),f.setupLights(p.physicallyCorrectLights),L.isArrayCamera){const I=L.cameras;for(let W=0,fe=I.length;W<fe;W++){const xe=I[W];Ne(d,M,xe,xe.viewport)}}else Ne(d,M,L);E!==null&&(de.updateMultisampleRenderTarget(E),de.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(p,M,L),he.resetDefaultState(),w=-1,b=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Bt(M,L,z,I){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||X.intersectsSprite(M)){I&&j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const xe=je.update(M),Se=M.material;Se.visible&&d.push(M,xe,Se,z,j.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Fe.render.frame&&(M.skeleton.update(),M.skeleton.frame=Fe.render.frame),!M.frustumCulled||X.intersectsObject(M))){I&&j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const xe=je.update(M),Se=M.material;if(Array.isArray(Se)){const Me=xe.groups;for(let Le=0,we=Me.length;Le<we;Le++){const Te=Me[Le],ze=Se[Te.materialIndex];ze&&ze.visible&&d.push(M,xe,ze,z,j.z,Te)}}else Se.visible&&d.push(M,xe,Se,z,j.z,null)}}const fe=M.children;for(let xe=0,Se=fe.length;xe<Se;xe++)Bt(fe[xe],L,z,I)}function Ne(M,L,z,I){const W=M.opaque,fe=M.transmissive,xe=M.transparent;f.setupLightsView(z),fe.length>0&&Lt(W,L,z),I&&oe.viewport(A.copy(I)),W.length>0&&lt(W,L,z),fe.length>0&&lt(fe,L,z),xe.length>0&&lt(xe,L,z),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Lt(M,L,z){const I=ge.isWebGL2;k===null&&(k=new dn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?ti:un,minFilter:Fi,samples:I&&r===!0?4:0})),p.getDrawingBufferSize(Z),I?k.setSize(Z.x,Z.y):k.setSize(wr(Z.x),wr(Z.y));const W=p.getRenderTarget();p.setRenderTarget(k),p.clear();const fe=p.toneMapping;p.toneMapping=Ut,lt(M,L,z),p.toneMapping=fe,de.updateMultisampleRenderTarget(k),de.updateRenderTargetMipmap(k),p.setRenderTarget(W)}function lt(M,L,z){const I=L.isScene===!0?L.overrideMaterial:null;for(let W=0,fe=M.length;W<fe;W++){const xe=M[W],Se=xe.object,Me=xe.geometry,Le=I===null?xe.material:I,we=xe.group;Se.layers.test(z.layers)&&Ia(Se,L,z,Me,Le,we)}}function Ia(M,L,z,I,W,fe){M.onBeforeRender(p,L,z,I,W,fe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(p,L,z,I,M,fe),W.transparent===!0&&W.side===cn?(W.side=St,W.needsUpdate=!0,p.renderBufferDirect(z,L,I,W,M,fe),W.side=Qn,W.needsUpdate=!0,p.renderBufferDirect(z,L,I,W,M,fe),W.side=cn):p.renderBufferDirect(z,L,I,W,M,fe),M.onAfterRender(p,L,z,I,W,fe)}function zi(M,L,z){L.isScene!==!0&&(L=ce);const I=ye.get(M),W=f.state.lights,fe=f.state.shadowsArray,xe=W.state.version,Se=Pe.getParameters(M,W.state,fe,L,z),Me=Pe.getProgramCacheKey(Se);let Le=I.programs;I.environment=M.isMeshStandardMaterial?L.environment:null,I.fog=L.fog,I.envMap=(M.isMeshStandardMaterial?it:Ye).get(M.envMap||I.environment),Le===void 0&&(M.addEventListener("dispose",C),Le=new Map,I.programs=Le);let we=Le.get(Me);if(we!==void 0){if(I.currentProgram===we&&I.lightsStateVersion===xe)return Ir(M,Se),we}else Se.uniforms=Pe.getUniforms(M),M.onBuild(z,Se,p),M.onBeforeCompile(Se,p),we=Pe.acquireProgram(Se,Me),Le.set(Me,we),I.uniforms=Se.uniforms;const Te=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=_.uniform),Ir(M,Se),I.needsLights=za(M),I.lightsStateVersion=xe,I.needsLights&&(Te.ambientLightColor.value=W.state.ambient,Te.lightProbe.value=W.state.probe,Te.directionalLights.value=W.state.directional,Te.directionalLightShadows.value=W.state.directionalShadow,Te.spotLights.value=W.state.spot,Te.spotLightShadows.value=W.state.spotShadow,Te.rectAreaLights.value=W.state.rectArea,Te.ltc_1.value=W.state.rectAreaLTC1,Te.ltc_2.value=W.state.rectAreaLTC2,Te.pointLights.value=W.state.point,Te.pointLightShadows.value=W.state.pointShadow,Te.hemisphereLights.value=W.state.hemi,Te.directionalShadowMap.value=W.state.directionalShadowMap,Te.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Te.spotShadowMap.value=W.state.spotShadowMap,Te.spotShadowMatrix.value=W.state.spotShadowMatrix,Te.pointShadowMap.value=W.state.pointShadowMap,Te.pointShadowMatrix.value=W.state.pointShadowMatrix);const ze=we.getUniforms(),Zt=Pi.seqWithValue(ze.seq,Te);return I.currentProgram=we,I.uniformsList=Zt,we}function Ir(M,L){const z=ye.get(M);z.outputEncoding=L.outputEncoding,z.instancing=L.instancing,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Fa(M,L,z,I,W){L.isScene!==!0&&(L=ce),de.resetTextureUnits();const fe=L.fog,xe=I.isMeshStandardMaterial?L.environment:null,Se=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:hn,Me=(I.isMeshStandardMaterial?it:Ye).get(I.envMap||xe),Le=I.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!I.normalMap&&!!z.attributes.tangent,Te=!!z.morphAttributes.position,ze=!!z.morphAttributes.normal,Zt=!!z.morphAttributes.color,mn=I.toneMapped?p.toneMapping:Ut,gn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,wt=gn!==void 0?gn.length:0,Ce=ye.get(I),_n=f.state.lights;if(q===!0&&(N===!0||M!==b)){const rt=M===b&&I.id===w;_.setState(I,M,rt)}let Ge=!1;I.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==_n.state.version||Ce.outputEncoding!==Se||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||Ce.envMap!==Me||I.fog===!0&&Ce.fog!==fe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==_.numPlanes||Ce.numIntersection!==_.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==we||Ce.morphTargets!==Te||Ce.morphNormals!==ze||Ce.morphColors!==Zt||Ce.toneMapping!==mn||ge.isWebGL2===!0&&Ce.morphTargetsCount!==wt)&&(Ge=!0):(Ge=!0,Ce.__version=I.version);let ct=Ce.currentProgram;Ge===!0&&(ct=zi(I,L,W));let Gt=!1,Wn=!1,Ui=!1;const Ke=ct.getUniforms(),qn=Ce.uniforms;if(oe.useProgram(ct.program)&&(Gt=!0,Wn=!0,Ui=!0),I.id!==w&&(w=I.id,Wn=!0),Gt||b!==M){if(Ke.setValue(H,"projectionMatrix",M.projectionMatrix),ge.logarithmicDepthBuffer&&Ke.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,Wn=!0,Ui=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const rt=Ke.map.cameraPosition;rt!==void 0&&rt.setValue(H,j.setFromMatrixPosition(M.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ke.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&Ke.setValue(H,"viewMatrix",M.matrixWorldInverse)}if(W.isSkinnedMesh){Ke.setOptional(H,W,"bindMatrix"),Ke.setOptional(H,W,"bindMatrixInverse");const rt=W.skeleton;rt&&(ge.floatVertexTextures?(rt.boneTexture===null&&rt.computeBoneTexture(),Ke.setValue(H,"boneTexture",rt.boneTexture,de),Ke.setValue(H,"boneTextureSize",rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oi=z.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0&&ge.isWebGL2===!0)&&Q.update(W,z,I,ct),(Wn||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,Ke.setValue(H,"receiveShadow",W.receiveShadow)),Wn&&(Ke.setValue(H,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&Na(qn,Ui),fe&&I.fog===!0&&Ct.refreshFogUniforms(qn,fe),Ct.refreshMaterialUniforms(qn,I,F,O,k),Pi.upload(H,Ce.uniformsList,qn,de)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Pi.upload(H,Ce.uniformsList,qn,de),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ke.setValue(H,"center",W.center),Ke.setValue(H,"modelViewMatrix",W.modelViewMatrix),Ke.setValue(H,"normalMatrix",W.normalMatrix),Ke.setValue(H,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const rt=I.uniformsGroups;for(let Bi=0,Ua=rt.length;Bi<Ua;Bi++)if(ge.isWebGL2){const Fr=rt[Bi];ae.update(Fr,ct),ae.bind(Fr,ct)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ct}function Na(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function za(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,L,z){ye.get(M.texture).__webglTexture=L,ye.get(M.depthTexture).__webglTexture=z;const I=ye.get(M);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=z===void 0,I.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,L){const z=ye.get(M);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,z=0){E=M,v=L,y=z;let I=!0;if(M){const Me=ye.get(M);Me.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),I=!1):Me.__webglFramebuffer===void 0?de.setupRenderTarget(M):Me.__hasExternalTextures&&de.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture)}let W=null,fe=!1,xe=!1;if(M){const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(xe=!0);const Le=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(W=Le[L],fe=!0):ge.isWebGL2&&M.samples>0&&de.useMultisampledRTT(M)===!1?W=ye.get(M).__webglMultisampledFramebuffer:W=Le,A.copy(M.viewport),P.copy(M.scissor),g=M.scissorTest}else A.copy(R).multiplyScalar(F).floor(),P.copy(Y).multiplyScalar(F).floor(),g=V;if(oe.bindFramebuffer(36160,W)&&ge.drawBuffers&&I&&oe.drawBuffers(M,W),oe.viewport(A),oe.scissor(P),oe.setScissorTest(g),fe){const Me=ye.get(M.texture);H.framebufferTexture2D(36160,36064,34069+L,Me.__webglTexture,z)}else if(xe){const Me=ye.get(M.texture),Le=L||0;H.framebufferTextureLayer(36160,36064,Me.__webglTexture,z||0,Le)}w=-1},this.readRenderTargetPixels=function(M,L,z,I,W,fe,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){oe.bindFramebuffer(36160,Se);try{const Me=M.texture,Le=Me.format,we=Me.type;if(Le!==Tt&&U.convert(Le)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=we===ti&&(pe.has("EXT_color_buffer_half_float")||ge.isWebGL2&&pe.has("EXT_color_buffer_float"));if(we!==un&&U.convert(we)!==H.getParameter(35738)&&!(we===rn&&(ge.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-I&&z>=0&&z<=M.height-W&&H.readPixels(L,z,I,W,U.convert(Le),U.convert(we),fe)}finally{const Me=E!==null?ye.get(E).__webglFramebuffer:null;oe.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(M,L,z=0){const I=Math.pow(2,-z),W=Math.floor(L.image.width*I),fe=Math.floor(L.image.height*I);de.setTexture2D(L,0),H.copyTexSubImage2D(3553,z,0,0,M.x,M.y,W,fe),oe.unbindTexture()},this.copyTextureToTexture=function(M,L,z,I=0){const W=L.image.width,fe=L.image.height,xe=U.convert(z.format),Se=U.convert(z.type);de.setTexture2D(z,0),H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment),L.isDataTexture?H.texSubImage2D(3553,I,M.x,M.y,W,fe,xe,Se,L.image.data):L.isCompressedTexture?H.compressedTexSubImage2D(3553,I,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,xe,L.mipmaps[0].data):H.texSubImage2D(3553,I,M.x,M.y,xe,Se,L.image),I===0&&z.generateMipmaps&&H.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(M,L,z,I,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=M.max.x-M.min.x+1,xe=M.max.y-M.min.y+1,Se=M.max.z-M.min.z+1,Me=U.convert(I.format),Le=U.convert(I.type);let we;if(I.isData3DTexture)de.setTexture3D(I,0),we=32879;else if(I.isDataArrayTexture)de.setTexture2DArray(I,0),we=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,I.flipY),H.pixelStorei(37441,I.premultiplyAlpha),H.pixelStorei(3317,I.unpackAlignment);const Te=H.getParameter(3314),ze=H.getParameter(32878),Zt=H.getParameter(3316),mn=H.getParameter(3315),gn=H.getParameter(32877),wt=z.isCompressedTexture?z.mipmaps[0]:z.image;H.pixelStorei(3314,wt.width),H.pixelStorei(32878,wt.height),H.pixelStorei(3316,M.min.x),H.pixelStorei(3315,M.min.y),H.pixelStorei(32877,M.min.z),z.isDataTexture||z.isData3DTexture?H.texSubImage3D(we,W,L.x,L.y,L.z,fe,xe,Se,Me,Le,wt.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(we,W,L.x,L.y,L.z,fe,xe,Se,Me,wt.data)):H.texSubImage3D(we,W,L.x,L.y,L.z,fe,xe,Se,Me,Le,wt),H.pixelStorei(3314,Te),H.pixelStorei(32878,ze),H.pixelStorei(3316,Zt),H.pixelStorei(3315,mn),H.pixelStorei(32877,gn),W===0&&I.generateMipmaps&&H.generateMipmap(we),oe.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?de.setTextureCube(M,0):M.isData3DTexture?de.setTexture3D(M,0):M.isDataArrayTexture?de.setTexture2DArray(M,0):de.setTexture2D(M,0),oe.unbindTexture()},this.resetState=function(){v=0,y=0,E=null,oe.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Fd extends Ma{}Fd.prototype.isWebGL1Renderer=!0;class Nd extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Sa extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ys={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class zd{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],x=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Ud=new zd;class ya{constructor(e){this.manager=e!==void 0?e:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Od extends ya{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ys.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ni("img");function c(){u(),Ys.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ba extends ya{constructor(e){super(e)}load(e,t,n,i){const r=new pt,o=new Od(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Bd extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const js=new ke,Zs=new D,$s=new D;class Gd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zs),$s.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($s),t.updateMatrixWorld(),js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vd extends Gd{constructor(){super(new pa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hn extends Bd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new Vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tr);const Ot=new Nd,Jn=new dt(45,window.innerWidth/window.innerHeight,1,500);Jn.position.set(0,0,50);Jn.lookAt(0,0,0);const Kn=new Ma;Kn.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Kn.domElement);const Rr=new ba().load("./yugioh-card-back.jpeg");Rr.wrapS=ei;Rr.wrapT=ei;const wa=new Sa({map:Rr}),Pr=[];for(let s=0;s<5;s++)Pr.push(new Mt(new Vn(5,8),wa));Pr.forEach((s,e)=>{s.material.side=cn,s.position.set(-14+e*7,0,0),Ot.add(s)});const kd=new ba().load("./blackhole.jpeg"),Hd=new Sa({map:kd}),Wd=new Vn(5,8),Ea=new Vn(5,8);Ea.applyMatrix4(new ke().makeRotationY(Math.PI));const ci=new Qe,qd=new Mt(Wd,Hd),Xd=new Mt(Ea,wa);ci.add(qd);ci.add(Xd);ci.position.set(0,10,0);Ot.add(ci);const Ta=new Hn(16777215,1);Ta.position.set(0,0,1);Ot.add(Ta);const Aa=new Hn(16777215,1);Aa.position.set(0,0,-1);Ot.add(Aa);const Ca=new Hn(16777215,1);Ca.position.set(0,1,0);Ot.add(Ca);const La=new Hn(16777215,1);La.position.set(0,-1,0);Ot.add(La);const Da=new Hn(16777215,1);Da.position.set(1,0,0);Ot.add(Da);const Ra=new Hn(16777215,1);Ra.position.set(-1,0,0);Ot.add(Ra);function Yd(s){const e=s.domElement,t=e.clientWidth,n=e.clientHeight,i=e.width!==t||e.height!==n;return i&&s.setSize(t,n,!1),i}function Pa(){if(requestAnimationFrame(Pa),Pr.forEach(s=>{s.rotation.x+=.005,s.rotation.y+=.005}),ci.rotation.y+=.03,Yd(Kn)){const s=Kn.domElement;Jn.aspect=s.clientWidth/s.clientHeight,Jn.updateProjectionMatrix()}Kn.render(Ot,Jn)}Pa();
