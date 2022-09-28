(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2022 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Tn="143",Fs=0,On=1,Bs=2,Ka=1,Gs=2,Yi=3,Qi=0,yt=1,oi=2,ks=1,Xt=0,Pi=1,Un=2,zn=3,Fn=4,Hs=5,Di=100,Vs=101,Ws=102,Bn=103,Gn=104,js=200,qs=201,Xs=202,Ys=203,Qa=204,$a=205,Zs=206,Js=207,Ks=208,Qs=209,$s=210,eo=0,to=1,io=2,xn=3,ro=4,no=5,ao=6,so=7,An=0,oo=1,lo=2,Ut=0,co=1,uo=2,ho=3,po=4,fo=5,es=300,Ni=301,Oi=302,yn=303,Mn=304,Pr=306,$i=1e3,_t=1001,bn=1002,tt=1003,kn=1004,Hn=1005,ut=1006,mo=1007,Ir=1008,li=1009,go=1010,vo=1011,ts=1012,_o=1013,ti=1014,ii=1015,er=1016,xo=1017,yo=1018,Ii=1020,Mo=1021,bo=1022,Et=1023,So=1024,wo=1025,ni=1026,Ui=1027,Eo=1028,To=1029,Ao=1030,Co=1031,Lo=1033,Br=33776,Gr=33777,kr=33778,Hr=33779,Vn=35840,Wn=35841,jn=35842,qn=35843,Do=36196,Xn=37492,Yn=37496,Zn=37808,Jn=37809,Kn=37810,Qn=37811,$n=37812,ea=37813,ta=37814,ia=37815,ra=37816,na=37817,aa=37818,sa=37819,oa=37820,la=37821,ca=36492,ci=3e3,Ue=3001,Ro=3200,Po=3201,Io=0,No=1,Nt="srgb",ri="srgb-linear",Vr=7680,Oo=519,ua=35044,ha="300 es",Sn=1035;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,da=180/Math.PI;function ir(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[a&255]+Ye[a>>8&255]+Ye[a>>16&255]+Ye[a>>24&255]+"-"+Ye[e&255]+Ye[e>>8&255]+"-"+Ye[e>>16&15|64]+Ye[e>>24&255]+"-"+Ye[t&63|128]+Ye[t>>8&255]+"-"+Ye[t>>16&255]+Ye[t>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function st(a,e,t){return Math.max(e,Math.min(t,a))}function Uo(a,e){return(a%e+e)%e}function jr(a,e,t){return(1-t)*a+t*e}function pa(a){return(a&a-1)===0&&a!==0}function wn(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=n,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],u=i[4],p=i[7],d=i[2],m=i[5],g=i[8],f=r[0],h=r[3],y=r[6],S=r[1],T=r[4],M=r[7],w=r[2],A=r[5],I=r[8];return n[0]=o*f+s*S+c*w,n[3]=o*h+s*T+c*A,n[6]=o*y+s*M+c*I,n[1]=l*f+u*S+p*w,n[4]=l*h+u*T+p*A,n[7]=l*y+u*M+p*I,n[2]=d*f+m*S+g*w,n[5]=d*h+m*T+g*A,n[8]=d*y+m*M+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-i*n*u+i*s*c+r*n*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],p=u*o-s*l,d=s*c-u*n,m=l*n-o*c,g=t*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=p*f,e[1]=(r*l-u*i)*f,e[2]=(s*i-r*o)*f,e[3]=d*f,e[4]=(u*t-r*c)*f,e[5]=(r*n-s*t)*f,e[6]=m*f,e[7]=(i*c-l*t)*f,e[8]=(o*t-i*n)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,s){const c=Math.cos(n),l=Math.sin(n);return this.set(i*c,i*l,-i*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,n=r[0],o=r[3],s=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*n+i*c,r[3]=t*o+i*l,r[6]=t*s+i*u,r[1]=-i*n+t*c,r[4]=-i*o+t*l,r[7]=-i*s+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function is(a){for(let e=a.length-1;e>=0;--e)if(a[e]>65535)return!0;return!1}function tr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function ai(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Dr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const qr={[Nt]:{[ri]:ai},[ri]:{[Nt]:Dr}},ft={legacyMode:!0,get workingColorSpace(){return ri},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(qr[e]&&qr[e][t]!==void 0){const i=qr[e][t];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},rs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ke={r:0,g:0,b:0},mt={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Xr(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ur(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ri){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ri){if(e=Uo(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=Xr(o,n,e+1/3),this.g=Xr(o,n,e),this.b=Xr(o,n,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,ft.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,ft.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(n[1])/360,l=parseInt(n[2],10)/100,u=parseInt(n[3],10)/100;return i(n[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nt){const i=rs[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ft.fromWorkingColorSpace(ur(this,ke),e),st(ke.r*255,0,255)<<16^st(ke.g*255,0,255)<<8^st(ke.b*255,0,255)<<0}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ri){ft.fromWorkingColorSpace(ur(this,ke),t);const i=ke.r,r=ke.g,n=ke.b,o=Math.max(i,r,n),s=Math.min(i,r,n);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const p=o-s;switch(l=u<=.5?p/(o+s):p/(2-o-s),o){case i:c=(r-n)/p+(r<n?6:0);break;case r:c=(n-i)/p+2;break;case n:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ri){return ft.fromWorkingColorSpace(ur(this,ke),t),e.r=ke.r,e.g=ke.g,e.b=ke.b,e}getStyle(e=Nt){return ft.fromWorkingColorSpace(ur(this,ke),e),e!==Nt?`color(${e} ${ke.r} ${ke.g} ${ke.b})`:`rgb(${ke.r*255|0},${ke.g*255|0},${ke.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(mt),mt.h+=e,mt.s+=t,mt.l+=i,this.setHSL(mt.h,mt.s,mt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mt),e.getHSL(cr);const i=jr(mt.h,cr.h,t),r=jr(mt.s,cr.s,t),n=jr(mt.l,cr.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Re.NAMES=rs;let gi;class ns{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gi===void 0&&(gi=tr("canvas")),gi.width=e.width,gi.height=e.height;const i=gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=ai(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class as{constructor(e=null){this.isSource=!0,this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?n.push(Yr(r[o].image)):n.push(Yr(r[o]))}else n=Yr(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function Yr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ns.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zo=0;class pt extends Fi{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,i=_t,r=_t,n=ut,o=Ir,s=Et,c=li,l=1,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zo++}),this.uuid=ir(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==es)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case _t:e.x=e.x<0?0:1;break;case bn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case _t:e.y=e.y<0?0:1;break;case bn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=es;class He{constructor(e=0,t=0,i=0,r=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,s=o[0],c=o[4],l=o[8],u=o[1],p=o[5],d=o[9],m=o[2],g=o[6],f=o[10];if(Math.abs(c-u)<.01&&Math.abs(l-m)<.01&&Math.abs(d-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(l+m)<.1&&Math.abs(d+g)<.1&&Math.abs(s+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(s+1)/2,S=(p+1)/2,T=(f+1)/2,M=(c+u)/4,w=(l+m)/4,A=(d+g)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(y),r=M/i,n=w/i):S>T?S<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(S),i=M/r,n=A/r):T<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(T),i=w/n,r=A/n),this.set(i,r,n,t),this}let h=Math.sqrt((g-d)*(g-d)+(l-m)*(l-m)+(u-c)*(u-c));return Math.abs(h)<.001&&(h=1),this.x=(g-d)/h,this.y=(l-m)/h,this.z=(u-c)/h,this.w=Math.acos((s+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Fi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ut,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new as(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tt,this.minFilter=tt,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo extends pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tt,this.minFilter=tt,this.wrapR=_t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,s){let c=i[r+0],l=i[r+1],u=i[r+2],p=i[r+3];const d=n[o+0],m=n[o+1],g=n[o+2],f=n[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(p!==f||c!==d||l!==m||u!==g){let h=1-s;const y=c*d+l*m+u*g+p*f,S=y>=0?1:-1,T=1-y*y;if(T>Number.EPSILON){const w=Math.sqrt(T),A=Math.atan2(w,y*S);h=Math.sin(h*A)/w,s=Math.sin(s*A)/w}const M=s*S;if(c=c*h+d*M,l=l*h+m*M,u=u*h+g*M,p=p*h+f*M,h===1-s){const w=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=w,l*=w,u*=w,p*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,n,o){const s=i[r],c=i[r+1],l=i[r+2],u=i[r+3],p=n[o],d=n[o+1],m=n[o+2],g=n[o+3];return e[t]=s*g+u*p+c*m-l*d,e[t+1]=c*g+u*d+l*p-s*m,e[t+2]=l*g+u*m+s*d-c*p,e[t+3]=u*g-s*p-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,n=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(i/2),u=s(r/2),p=s(n/2),d=c(i/2),m=c(r/2),g=c(n/2);switch(o){case"XYZ":this._x=d*u*p+l*m*g,this._y=l*m*p-d*u*g,this._z=l*u*g+d*m*p,this._w=l*u*p-d*m*g;break;case"YXZ":this._x=d*u*p+l*m*g,this._y=l*m*p-d*u*g,this._z=l*u*g-d*m*p,this._w=l*u*p+d*m*g;break;case"ZXY":this._x=d*u*p-l*m*g,this._y=l*m*p+d*u*g,this._z=l*u*g+d*m*p,this._w=l*u*p-d*m*g;break;case"ZYX":this._x=d*u*p-l*m*g,this._y=l*m*p+d*u*g,this._z=l*u*g-d*m*p,this._w=l*u*p+d*m*g;break;case"YZX":this._x=d*u*p+l*m*g,this._y=l*m*p+d*u*g,this._z=l*u*g-d*m*p,this._w=l*u*p-d*m*g;break;case"XZY":this._x=d*u*p-l*m*g,this._y=l*m*p-d*u*g,this._z=l*u*g+d*m*p,this._w=l*u*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],p=t[10],d=i+s+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(n-l)*m,this._z=(o-r)*m}else if(i>s&&i>p){const m=2*Math.sqrt(1+i-s-p);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(n+l)/m}else if(s>p){const m=2*Math.sqrt(1+s-i-p);this._w=(n-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+p-i-s);this._w=(o-r)/m,this._x=(n+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*s+r*l-n*c,this._y=r*u+o*c+n*s-i*l,this._z=n*u+o*l+i*c-r*s,this._w=o*u-i*s-r*c-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),p=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=n*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,s=e.z,c=e.w,l=c*t+o*r-s*i,u=c*i+s*t-n*r,p=c*r+n*i-o*t,d=-n*t-o*i-s*r;return this.x=l*c+d*-n+u*-s-p*-o,this.y=u*c+d*-o+p*-n-l*-s,this.z=p*c+d*-s+l*-o-u*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-n*s,this.y=n*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new D,fa=new rr;class nr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],p=e[c+1],d=e[c+2];u<t&&(t=u),p<i&&(i=p),d<r&&(r=d),u>n&&(n=u),p>o&&(o=p),d>s&&(s=d)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),p=e.getY(c),d=e.getZ(c);u<t&&(t=u),p<i&&(i=p),d<r&&(r=d),u>n&&(n=u),p>o&&(o=p),d>s&&(s=d)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,s=n.count;o<s;o++)Zt.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zt)}else i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox),Jr.applyMatrix4(e.matrixWorld),this.union(Jr);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),hr.subVectors(this.max,ji),vi.subVectors(e.a,ji),_i.subVectors(e.b,ji),xi.subVectors(e.c,ji),Gt.subVectors(_i,vi),kt.subVectors(xi,_i),Jt.subVectors(vi,xi);let t=[0,-Gt.z,Gt.y,0,-kt.z,kt.y,0,-Jt.z,Jt.y,Gt.z,0,-Gt.x,kt.z,0,-kt.x,Jt.z,0,-Jt.x,-Gt.y,Gt.x,0,-kt.y,kt.x,0,-Jt.y,Jt.x,0];return!Kr(t,vi,_i,xi,hr)||(t=[1,0,0,0,1,0,0,0,1],!Kr(t,vi,_i,xi,hr))?!1:(dr.crossVectors(Gt,kt),t=[dr.x,dr.y,dr.z],Kr(t,vi,_i,xi,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zt.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Lt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lt=[new D,new D,new D,new D,new D,new D,new D,new D],Zt=new D,Jr=new nr,vi=new D,_i=new D,xi=new D,Gt=new D,kt=new D,Jt=new D,ji=new D,hr=new D,dr=new D,Kt=new D;function Kr(a,e,t,i,r){for(let n=0,o=a.length-3;n<=o;n+=3){Kt.fromArray(a,n);const s=r.x*Math.abs(Kt.x)+r.y*Math.abs(Kt.y)+r.z*Math.abs(Kt.z),c=e.dot(Kt),l=t.dot(Kt),u=i.dot(Kt);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Bo=new nr,ma=new D,pr=new D,Qr=new D;class Cn{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bo.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Qr.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?pr.set(0,0,1).multiplyScalar(e.radius):pr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ma.copy(e.center).add(pr)),this.expandByPoint(ma.copy(e.center).sub(pr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dt=new D,$r=new D,fr=new D,Ht=new D,en=new D,mr=new D,tn=new D;class Go{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dt.copy(this.direction).multiplyScalar(t).add(this.origin),Dt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$r.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Ht.copy(this.origin).sub($r);const n=e.distanceTo(t)*.5,o=-this.direction.dot(fr),s=Ht.dot(this.direction),c=-Ht.dot(fr),l=Ht.lengthSq(),u=Math.abs(1-o*o);let p,d,m,g;if(u>0)if(p=o*c-s,d=o*s-c,g=n*u,p>=0)if(d>=-g)if(d<=g){const f=1/u;p*=f,d*=f,m=p*(p+o*d+2*s)+d*(o*p+d+2*c)+l}else d=n,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*c)+l;else d=-n,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*c)+l;else d<=-g?(p=Math.max(0,-(-o*n+s)),d=p>0?-n:Math.min(Math.max(-n,-c),n),m=-p*p+d*(d+2*c)+l):d<=g?(p=0,d=Math.min(Math.max(-n,-c),n),m=d*(d+2*c)+l):(p=Math.max(0,-(o*n+s)),d=p>0?n:Math.min(Math.max(-n,-c),n),m=-p*p+d*(d+2*c)+l);else d=o>0?-n:n,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(fr).multiplyScalar(d).add($r),m}intersectSphere(e,t){Dt.subVectors(e.center,this.origin);const i=Dt.dot(this.direction),r=Dt.dot(Dt)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),s=i-o,c=i+o;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(n=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||n>r||((n>i||i!==i)&&(i=n),(o<r||r!==r)&&(r=o),p>=0?(s=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(s=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dt)!==null}intersectTriangle(e,t,i,r,n){en.subVectors(t,e),mr.subVectors(i,e),tn.crossVectors(en,mr);let o=this.direction.dot(tn),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ht.subVectors(this.origin,e);const c=s*this.direction.dot(mr.crossVectors(Ht,mr));if(c<0)return null;const l=s*this.direction.dot(en.cross(Ht));if(l<0||c+l>o)return null;const u=-s*Ht.dot(tn);return u<0?null:this.at(u/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,s,c,l,u,p,d,m,g,f,h){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=n,y[5]=o,y[9]=s,y[13]=c,y[2]=l,y[6]=u,y[10]=p,y[14]=d,y[3]=m,y[7]=g,y[11]=f,y[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),n=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const d=o*u,m=o*p,g=s*u,f=s*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=m+g*l,t[5]=d-f*l,t[9]=-s*c,t[2]=f-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*p,g=l*u,f=l*p;t[0]=d+f*s,t[4]=g*s-m,t[8]=o*l,t[1]=o*p,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=f+d*s,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*p,g=l*u,f=l*p;t[0]=d-f*s,t[4]=-o*p,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=f-d*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*p,g=s*u,f=s*p;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+f,t[1]=c*p,t[5]=f*l+d,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=s*c,f=s*l;t[0]=c*u,t[4]=f-d*p,t[8]=g*p+m,t[1]=p,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*p+g,t[10]=d-f*p}else if(e.order==="XZY"){const d=o*c,m=o*l,g=s*c,f=s*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=d*p+f,t[5]=o*u,t[9]=m*p-g,t[2]=g*p-m,t[6]=s*u,t[10]=f*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ko,e,Ho)}lookAt(e,t,i){const r=this.elements;return nt.subVectors(e,t),nt.lengthSq()===0&&(nt.z=1),nt.normalize(),Vt.crossVectors(i,nt),Vt.lengthSq()===0&&(Math.abs(i.z)===1?nt.x+=1e-4:nt.z+=1e-4,nt.normalize(),Vt.crossVectors(i,nt)),Vt.normalize(),gr.crossVectors(nt,Vt),r[0]=Vt.x,r[4]=gr.x,r[8]=nt.x,r[1]=Vt.y,r[5]=gr.y,r[9]=nt.y,r[2]=Vt.z,r[6]=gr.z,r[10]=nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],u=i[1],p=i[5],d=i[9],m=i[13],g=i[2],f=i[6],h=i[10],y=i[14],S=i[3],T=i[7],M=i[11],w=i[15],A=r[0],I=r[4],_=r[8],E=r[12],O=r[1],U=r[5],ie=r[9],K=r[13],P=r[2],j=r[6],k=r[10],X=r[14],q=r[3],N=r[7],H=r[11],Q=r[15];return n[0]=o*A+s*O+c*P+l*q,n[4]=o*I+s*U+c*j+l*N,n[8]=o*_+s*ie+c*k+l*H,n[12]=o*E+s*K+c*X+l*Q,n[1]=u*A+p*O+d*P+m*q,n[5]=u*I+p*U+d*j+m*N,n[9]=u*_+p*ie+d*k+m*H,n[13]=u*E+p*K+d*X+m*Q,n[2]=g*A+f*O+h*P+y*q,n[6]=g*I+f*U+h*j+y*N,n[10]=g*_+f*ie+h*k+y*H,n[14]=g*E+f*K+h*X+y*Q,n[3]=S*A+T*O+M*P+w*q,n[7]=S*I+T*U+M*j+w*N,n[11]=S*_+T*ie+M*k+w*H,n[15]=S*E+T*K+M*X+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],p=e[6],d=e[10],m=e[14],g=e[3],f=e[7],h=e[11],y=e[15];return g*(+n*c*p-r*l*p-n*s*d+i*l*d+r*s*m-i*c*m)+f*(+t*c*m-t*l*d+n*o*d-r*o*m+r*l*u-n*c*u)+h*(+t*l*p-t*s*m-n*o*p+i*o*m+n*s*u-i*l*u)+y*(-r*s*u-t*c*p+t*s*d+r*o*p-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],p=e[9],d=e[10],m=e[11],g=e[12],f=e[13],h=e[14],y=e[15],S=p*h*l-f*d*l+f*c*m-s*h*m-p*c*y+s*d*y,T=g*d*l-u*h*l-g*c*m+o*h*m+u*c*y-o*d*y,M=u*f*l-g*p*l+g*s*m-o*f*m-u*s*y+o*p*y,w=g*p*c-u*f*c-g*s*d+o*f*d+u*s*h-o*p*h,A=t*S+i*T+r*M+n*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/A;return e[0]=S*I,e[1]=(f*d*n-p*h*n-f*r*m+i*h*m+p*r*y-i*d*y)*I,e[2]=(s*h*n-f*c*n+f*r*l-i*h*l-s*r*y+i*c*y)*I,e[3]=(p*c*n-s*d*n-p*r*l+i*d*l+s*r*m-i*c*m)*I,e[4]=T*I,e[5]=(u*h*n-g*d*n+g*r*m-t*h*m-u*r*y+t*d*y)*I,e[6]=(g*c*n-o*h*n-g*r*l+t*h*l+o*r*y-t*c*y)*I,e[7]=(o*d*n-u*c*n+u*r*l-t*d*l-o*r*m+t*c*m)*I,e[8]=M*I,e[9]=(g*p*n-u*f*n-g*i*m+t*f*m+u*i*y-t*p*y)*I,e[10]=(o*f*n-g*s*n+g*i*l-t*f*l-o*i*y+t*s*y)*I,e[11]=(u*s*n-o*p*n-u*i*l+t*p*l+o*i*m-t*s*m)*I,e[12]=w*I,e[13]=(u*f*r-g*p*r+g*i*d-t*f*d-u*i*h+t*p*h)*I,e[14]=(g*s*r-o*f*r-g*i*c+t*f*c+o*i*h-t*s*h)*I,e[15]=(o*p*r-u*s*r+u*i*c-t*p*c-o*i*d+t*s*d)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,s=e.y,c=e.z,l=n*o,u=n*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+i,u*c-r*o,0,l*c-r*s,u*c+r*o,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,s=t._z,c=t._w,l=n+n,u=o+o,p=s+s,d=n*l,m=n*u,g=n*p,f=o*u,h=o*p,y=s*p,S=c*l,T=c*u,M=c*p,w=i.x,A=i.y,I=i.z;return r[0]=(1-(f+y))*w,r[1]=(m+M)*w,r[2]=(g-T)*w,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+y))*A,r[6]=(h+S)*A,r[7]=0,r[8]=(g+T)*I,r[9]=(h-S)*I,r[10]=(1-(d+f))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=yi.set(r[0],r[1],r[2]).length();const o=yi.set(r[4],r[5],r[6]).length(),s=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],gt.copy(this);const c=1/n,l=1/o,u=1/s;return gt.elements[0]*=c,gt.elements[1]*=c,gt.elements[2]*=c,gt.elements[4]*=l,gt.elements[5]*=l,gt.elements[6]*=l,gt.elements[8]*=u,gt.elements[9]*=u,gt.elements[10]*=u,t.setFromRotationMatrix(gt),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,r,n,o){const s=this.elements,c=2*n/(t-e),l=2*n/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),d=-(o+n)/(o-n),m=-2*o*n/(o-n);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=p,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,n,o){const s=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-n),p=(t+e)*c,d=(i+r)*l,m=(o+n)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-p,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new D,gt=new Ge,ko=new D(0,0,0),Ho=new D(1,1,1),Vt=new D,gr=new D,nt=new D,ga=new Ge,va=new rr;class ar{constructor(e=0,t=0,i=0,r=ar.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-st(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return va.setFromEuler(this),this.setFromQuaternion(va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ar.DefaultOrder="XYZ";ar.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class os{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vo=0;const _a=new D,Mi=new rr,Rt=new Ge,vr=new D,qi=new D,Wo=new D,jo=new rr,xa=new D(1,0,0),ya=new D(0,1,0),Ma=new D(0,0,1),qo={type:"added"},ba={type:"removed"};class Qe extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DefaultUp.clone();const e=new D,t=new ar,i=new rr,r=new D(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ge},normalMatrix:{value:new dt}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(ya,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return _a.copy(e).applyQuaternion(this.quaternion),this.position.add(_a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(ya,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Rt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rt.lookAt(qi,vr,this.up):Rt.lookAt(vr,qi,this.up),this.quaternion.setFromRotationMatrix(Rt),r&&(Rt.extractRotation(r.matrixWorld),Mi.setFromRotationMatrix(Rt),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ba)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ba)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Rt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Wo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,jo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];n(e.shapes,p)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(n(e.materials,this.material[c]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(n(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qe.DefaultUp=new D(0,1,0);Qe.DefaultMatrixAutoUpdate=!0;const vt=new D,Pt=new D,rn=new D,It=new D,bi=new D,Si=new D,Sa=new D,nn=new D,an=new D,sn=new D;class Ot{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vt.subVectors(e,t),r.cross(vt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){vt.subVectors(r,t),Pt.subVectors(i,t),rn.subVectors(e,t);const o=vt.dot(vt),s=vt.dot(Pt),c=vt.dot(rn),l=Pt.dot(Pt),u=Pt.dot(rn),p=o*l-s*s;if(p===0)return n.set(-2,-1,-1);const d=1/p,m=(l*c-s*u)*d,g=(o*u-s*c)*d;return n.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,It),It.x>=0&&It.y>=0&&It.x+It.y<=1}static getUV(e,t,i,r,n,o,s,c){return this.getBarycoord(e,t,i,r,It),c.set(0,0),c.addScaledVector(n,It.x),c.addScaledVector(o,It.y),c.addScaledVector(s,It.z),c}static isFrontFacing(e,t,i,r){return vt.subVectors(i,t),Pt.subVectors(e,t),vt.cross(Pt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vt.subVectors(this.c,this.b),Pt.subVectors(this.a,this.b),vt.cross(Pt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Ot.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,s;bi.subVectors(r,i),Si.subVectors(n,i),nn.subVectors(e,i);const c=bi.dot(nn),l=Si.dot(nn);if(c<=0&&l<=0)return t.copy(i);an.subVectors(e,r);const u=bi.dot(an),p=Si.dot(an);if(u>=0&&p<=u)return t.copy(r);const d=c*p-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(bi,o);sn.subVectors(e,n);const m=bi.dot(sn),g=Si.dot(sn);if(g>=0&&m<=g)return t.copy(n);const f=m*l-c*g;if(f<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(i).addScaledVector(Si,s);const h=u*g-m*p;if(h<=0&&p-u>=0&&m-g>=0)return Sa.subVectors(n,r),s=(p-u)/(p-u+(m-g)),t.copy(r).addScaledVector(Sa,s);const y=1/(h+f+d);return o=f*y,s=d*y,t.copy(i).addScaledVector(bi,o).addScaledVector(Si,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xo=0;class sr extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xo++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Pi,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qa,this.blendDst=$a,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===ks;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(n){const o=[];for(const s in n){const c=n[s];delete c.metadata,o.push(c)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ls extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=An,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Be=new D,_r=new Ce;class Tt{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ua,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Re),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ce),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new He),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Be.fromBufferAttribute(this,t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Be.fromBufferAttribute(this,t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class cs extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class us extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class si extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Yo=0;const ct=new Ge,on=new Qe,wi=new D,at=new nr,Xi=new nr,je=new D;class di extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yo++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(is(e)?us:cs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new dt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ct.makeRotationFromQuaternion(e),this.applyMatrix4(ct),this}rotateX(e){return ct.makeRotationX(e),this.applyMatrix4(ct),this}rotateY(e){return ct.makeRotationY(e),this.applyMatrix4(ct),this}rotateZ(e){return ct.makeRotationZ(e),this.applyMatrix4(ct),this}translate(e,t,i){return ct.makeTranslation(e,t,i),this.applyMatrix4(ct),this}scale(e,t,i){return ct.makeScale(e,t,i),this.applyMatrix4(ct),this}lookAt(e){return on.lookAt(e),on.updateMatrix(),this.applyMatrix4(on.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];at.setFromBufferAttribute(n),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,at.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,at.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(at.min),this.boundingBox.expandByPoint(at.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(at.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Xi.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(at.min,Xi.min),at.expandByPoint(je),je.addVectors(at.max,Xi.max),at.expandByPoint(je)):(at.expandByPoint(Xi.min),at.expandByPoint(Xi.max))}at.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)je.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(je));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)je.fromBufferAttribute(s,l),c&&(wi.fromBufferAttribute(e,l),je.add(wi)),r=Math.max(r,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let O=0;O<s;O++)l[O]=new D,u[O]=new D;const p=new D,d=new D,m=new D,g=new Ce,f=new Ce,h=new Ce,y=new D,S=new D;function T(O,U,ie){p.fromArray(r,O*3),d.fromArray(r,U*3),m.fromArray(r,ie*3),g.fromArray(o,O*2),f.fromArray(o,U*2),h.fromArray(o,ie*2),d.sub(p),m.sub(p),f.sub(g),h.sub(g);const K=1/(f.x*h.y-h.x*f.y);!isFinite(K)||(y.copy(d).multiplyScalar(h.y).addScaledVector(m,-f.y).multiplyScalar(K),S.copy(m).multiplyScalar(f.x).addScaledVector(d,-h.x).multiplyScalar(K),l[O].add(y),l[U].add(y),l[ie].add(y),u[O].add(S),u[U].add(S),u[ie].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let O=0,U=M.length;O<U;++O){const ie=M[O],K=ie.start,P=ie.count;for(let j=K,k=K+P;j<k;j+=3)T(i[j+0],i[j+1],i[j+2])}const w=new D,A=new D,I=new D,_=new D;function E(O){I.fromArray(n,O*3),_.copy(I);const U=l[O];w.copy(U),w.sub(I.multiplyScalar(I.dot(U))).normalize(),A.crossVectors(_,U);const ie=A.dot(u[O])<0?-1:1;c[O*4]=w.x,c[O*4+1]=w.y,c[O*4+2]=w.z,c[O*4+3]=ie}for(let O=0,U=M.length;O<U;++O){const ie=M[O],K=ie.start,P=ie.count;for(let j=K,k=K+P;j<k;j+=3)E(i[j+0]),E(i[j+1]),E(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new D,n=new D,o=new D,s=new D,c=new D,l=new D,u=new D,p=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),f=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,f),o.fromBufferAttribute(t,h),u.subVectors(o,n),p.subVectors(r,n),u.cross(p),s.fromBufferAttribute(i,g),c.fromBufferAttribute(i,f),l.fromBufferAttribute(i,h),s.add(u),c.add(u),l.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(f,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,n),p.subVectors(r,n),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const n=i[r].array,o=e.attributes[r],s=o.array,c=o.itemSize*t,l=Math.min(s.length,n.length-c);for(let u=0,p=c;u<l;u++,p++)n[p]=s[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)je.fromBufferAttribute(e,t),je.normalize(),e.setXYZ(t,je.x,je.y,je.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,p=s.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let f=0,h=c.length;f<h;f++){s.isInterleavedBufferAttribute?m=c[f]*s.data.stride+s.offset:m=c[f]*u;for(let y=0;y<u;y++)d[g++]=l[m++]}return new Tt(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,i);t.setAttribute(s,l)}const n=this.morphAttributes;for(const s in n){const c=[],l=n[s];for(let u=0,p=l.length;u<p;u++){const d=l[u],m=e(d,i);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,d=l.length;p<d;p++){const m=l[p];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const n=e.morphAttributes;for(const l in n){const u=[],p=n[l];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new Ge,Ei=new Go,ln=new Cn,Wt=new D,jt=new D,qt=new D,cn=new D,un=new D,hn=new D,xr=new D,yr=new D,Mr=new D,br=new Ce,Sr=new Ce,wr=new Ce,dn=new D,Er=new D;class xt extends Qe{constructor(e=new di,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ln.copy(i.boundingSphere),ln.applyMatrix4(n),e.ray.intersectsSphere(ln)===!1)||(wa.copy(n).invert(),Ei.copy(e.ray).applyMatrix4(wa),i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,c=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative,p=i.attributes.uv,d=i.attributes.uv2,m=i.groups,g=i.drawRange;if(s!==null)if(Array.isArray(r))for(let f=0,h=m.length;f<h;f++){const y=m[f],S=r[y.materialIndex],T=Math.max(y.start,g.start),M=Math.min(s.count,Math.min(y.start+y.count,g.start+g.count));for(let w=T,A=M;w<A;w+=3){const I=s.getX(w),_=s.getX(w+1),E=s.getX(w+2);o=Tr(this,S,e,Ei,c,l,u,p,d,I,_,E),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),h=Math.min(s.count,g.start+g.count);for(let y=f,S=h;y<S;y+=3){const T=s.getX(y),M=s.getX(y+1),w=s.getX(y+2);o=Tr(this,r,e,Ei,c,l,u,p,d,T,M,w),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let f=0,h=m.length;f<h;f++){const y=m[f],S=r[y.materialIndex],T=Math.max(y.start,g.start),M=Math.min(c.count,Math.min(y.start+y.count,g.start+g.count));for(let w=T,A=M;w<A;w+=3){const I=w,_=w+1,E=w+2;o=Tr(this,S,e,Ei,c,l,u,p,d,I,_,E),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),h=Math.min(c.count,g.start+g.count);for(let y=f,S=h;y<S;y+=3){const T=y,M=y+1,w=y+2;o=Tr(this,r,e,Ei,c,l,u,p,d,T,M,w),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Zo(a,e,t,i,r,n,o,s){let c;if(e.side===yt?c=i.intersectTriangle(o,n,r,!0,s):c=i.intersectTriangle(r,n,o,e.side!==oi,s),c===null)return null;Er.copy(s),Er.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(Er);return l<t.near||l>t.far?null:{distance:l,point:Er.clone(),object:a}}function Tr(a,e,t,i,r,n,o,s,c,l,u,p){Wt.fromBufferAttribute(r,l),jt.fromBufferAttribute(r,u),qt.fromBufferAttribute(r,p);const d=a.morphTargetInfluences;if(n&&d){xr.set(0,0,0),yr.set(0,0,0),Mr.set(0,0,0);for(let g=0,f=n.length;g<f;g++){const h=d[g],y=n[g];h!==0&&(cn.fromBufferAttribute(y,l),un.fromBufferAttribute(y,u),hn.fromBufferAttribute(y,p),o?(xr.addScaledVector(cn,h),yr.addScaledVector(un,h),Mr.addScaledVector(hn,h)):(xr.addScaledVector(cn.sub(Wt),h),yr.addScaledVector(un.sub(jt),h),Mr.addScaledVector(hn.sub(qt),h)))}Wt.add(xr),jt.add(yr),qt.add(Mr)}a.isSkinnedMesh&&(a.boneTransform(l,Wt),a.boneTransform(u,jt),a.boneTransform(p,qt));const m=Zo(a,e,t,i,Wt,jt,qt,dn);if(m){s&&(br.fromBufferAttribute(s,l),Sr.fromBufferAttribute(s,u),wr.fromBufferAttribute(s,p),m.uv=Ot.getUV(dn,Wt,jt,qt,br,Sr,wr,new Ce)),c&&(br.fromBufferAttribute(c,l),Sr.fromBufferAttribute(c,u),wr.fromBufferAttribute(c,p),m.uv2=Ot.getUV(dn,Wt,jt,qt,br,Sr,wr,new Ce));const g={a:l,b:u,c:p,normal:new D,materialIndex:0};Ot.getNormal(Wt,jt,qt,g.normal),m.face=g}return m}class or extends di{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const s=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const c=[],l=[],u=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,n,0),g("z","y","x",1,-1,i,t,-e,o,n,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new si(l,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(p,2));function g(f,h,y,S,T,M,w,A,I,_,E){const O=M/I,U=w/_,ie=M/2,K=w/2,P=A/2,j=I+1,k=_+1;let X=0,q=0;const N=new D;for(let H=0;H<k;H++){const Q=H*U-K;for(let Y=0;Y<j;Y++){const Z=Y*O-ie;N[f]=Z*S,N[h]=Q*T,N[y]=P,l.push(N.x,N.y,N.z),N[f]=0,N[h]=0,N[y]=A>0?1:-1,u.push(N.x,N.y,N.z),p.push(Y/I),p.push(1-H/_),X+=1}}for(let H=0;H<_;H++)for(let Q=0;Q<I;Q++){const Y=d+Q+j*H,Z=d+Q+j*(H+1),ce=d+(Q+1)+j*(H+1),Ee=d+(Q+1)+j*H;c.push(Y,Z,Ee),c.push(Z,ce,Ee),q+=6}s.addGroup(m,q,E),m+=q,d+=X}}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ze(a){const e={};for(let t=0;t<a.length;t++){const i=zi(a[t]);for(const r in i)e[r]=i[r]}return e}function Jo(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}const Ko={clone:zi,merge:Ze};var Qo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$o=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qo,this.fragmentShader=$o,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Jo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hs extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ht extends hs{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;n+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=90,Ai=1;class el extends Qe{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new ht(Ti,Ai,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const n=new ht(Ti,Ai,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new D(-1,0,0)),this.add(n);const o=new ht(Ti,Ai,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const s=new ht(Ti,Ai,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new D(0,-1,0)),this.add(s);const c=new ht(Ti,Ai,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);const l=new ht(Ti,Ai,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,s,c,l]=this.children,u=e.getRenderTarget(),p=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ut,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ds extends pt{constructor(e,t,i,r,n,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,i,r,n,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tl extends ui{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ds(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new or(5,5,5),n=new hi({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:Xt});n.uniforms.tEquirect.value=t;const o=new xt(r,n),s=t.minFilter;return t.minFilter===Ir&&(t.minFilter=ut),new el(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const pn=new D,il=new D,rl=new dt;class Qt{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pn.subVectors(i,t).cross(il.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(pn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rl.getNormalMatrix(e),r=this.coplanarPoint(pn).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Cn,Ar=new D;class Ln{constructor(e=new Qt,t=new Qt,i=new Qt,r=new Qt,n=new Qt,o=new Qt){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],s=i[3],c=i[4],l=i[5],u=i[6],p=i[7],d=i[8],m=i[9],g=i[10],f=i[11],h=i[12],y=i[13],S=i[14],T=i[15];return t[0].setComponents(s-r,p-c,f-d,T-h).normalize(),t[1].setComponents(s+r,p+c,f+d,T+h).normalize(),t[2].setComponents(s+n,p+l,f+m,T+y).normalize(),t[3].setComponents(s-n,p-l,f-m,T-y).normalize(),t[4].setComponents(s-o,p-u,f-g,T-S).normalize(),t[5].setComponents(s+o,p+u,f+g,T+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ar.x=r.normal.x>0?e.max.x:e.min.x,Ar.y=r.normal.y>0?e.max.y:e.min.y,Ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ps(){let a=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function nl(a,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const p=l.array,d=l.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,p,d),l.onUploadCallback();let g;if(p instanceof Float32Array)g=5126;else if(p instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(p instanceof Int16Array)g=5122;else if(p instanceof Uint32Array)g=5125;else if(p instanceof Int32Array)g=5124;else if(p instanceof Int8Array)g=5120;else if(p instanceof Uint8Array)g=5121;else if(p instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version}}function n(l,u,p){const d=u.array,m=u.updateRange;a.bindBuffer(p,l),m.count===-1?a.bufferSubData(p,0,d):(t?a.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):a.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(a.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const p=i.get(l);p===void 0?i.set(l,r(l,u)):p.version<l.version&&(n(p.buffer,l,u),p.version=l.version)}return{get:o,remove:s,update:c}}class Bi extends di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),l=s+1,u=c+1,p=e/s,d=t/c,m=[],g=[],f=[],h=[];for(let y=0;y<u;y++){const S=y*d-o;for(let T=0;T<l;T++){const M=T*p-n;g.push(M,-S,0),f.push(0,0,1),h.push(T/s),h.push(1-y/c)}}for(let y=0;y<c;y++)for(let S=0;S<s;S++){const T=S+l*y,M=S+l*(y+1),w=S+1+l*(y+1),A=S+1+l*y;m.push(T,M,A),m.push(M,w,A)}this.setIndex(m),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(f,3)),this.setAttribute("uv",new si(h,2))}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var al=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sl=`#ifdef USE_ALPHAMAP
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
#endif`,pl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,fl=`#ifdef USE_IRIDESCENCE
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
#endif`,vl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ml=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sl=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ol=`#ifdef USE_ENVMAP
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
#endif`,Ul=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zl=`#ifdef USE_ENVMAP
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
#endif`,Fl=`#ifdef USE_FOG
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
#endif`,kl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hl=`#ifdef USE_GRADIENTMAP
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
}`,Vl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jl=`vec3 diffuse = vec3( 1.0 );
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
#endif`,ql=`uniform bool receiveShadow;
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
#endif`,Xl=`#if defined( USE_ENVMAP )
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
#endif`,Yl=`ToonMaterial material;
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
#define Material_LightProbeLOD( material )	(0)`,Jl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kl=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Ql=`PhysicalMaterial material;
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
#endif`,$l=`struct PhysicalMaterial {
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
#endif`,ic=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ac=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sc=`#ifdef USE_LOGDEPTHBUF
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
#endif`,pc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fc=`#ifdef USE_MORPHNORMALS
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
#endif`,vc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_c=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,xc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bc=`#ifdef USE_NORMALMAP
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
#endif`,Sc=`#ifdef USE_CLEARCOAT
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
#endif`,Nc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oc=`#ifdef USE_SHADOWMAP
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
#endif`,Uc=`#ifdef USE_SHADOWMAP
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
#endif`,zc=`#ifdef USE_SHADOWMAP
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
#endif`,Fc=`float getShadowMask() {
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
#endif`,kc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hc=`#ifdef USE_SKINNING
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
#endif`,Vc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xc=`#ifdef USE_TRANSMISSION
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
#endif`,Yc=`#ifdef USE_TRANSMISSION
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
#endif`,Jc=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Qc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$c=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
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
#endif`;const iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,au=`#include <envmap_common_pars_fragment>
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
}`,su=`#include <common>
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
}`,pu=`uniform vec3 diffuse;
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
}`,fu=`#include <common>
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
}`,vu=`uniform vec3 diffuse;
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
}`,_u=`#define MATCAP
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
}`,xu=`#define MATCAP
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
}`,yu=`#define NORMAL
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
}`,Mu=`#define NORMAL
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
}`,bu=`#define PHONG
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
}`,Su=`#define PHONG
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
}`,Me={alphamap_fragment:al,alphamap_pars_fragment:sl,alphatest_fragment:ol,alphatest_pars_fragment:ll,aomap_fragment:cl,aomap_pars_fragment:ul,begin_vertex:hl,beginnormal_vertex:dl,bsdfs:pl,iridescence_fragment:fl,bumpmap_pars_fragment:ml,clipping_planes_fragment:gl,clipping_planes_pars_fragment:vl,clipping_planes_pars_vertex:_l,clipping_planes_vertex:xl,color_fragment:yl,color_pars_fragment:Ml,color_pars_vertex:bl,color_vertex:Sl,common:wl,cube_uv_reflection_fragment:El,defaultnormal_vertex:Tl,displacementmap_pars_vertex:Al,displacementmap_vertex:Cl,emissivemap_fragment:Ll,emissivemap_pars_fragment:Dl,encodings_fragment:Rl,encodings_pars_fragment:Pl,envmap_fragment:Il,envmap_common_pars_fragment:Nl,envmap_pars_fragment:Ol,envmap_pars_vertex:Ul,envmap_physical_pars_fragment:Xl,envmap_vertex:zl,fog_vertex:Fl,fog_pars_vertex:Bl,fog_fragment:Gl,fog_pars_fragment:kl,gradientmap_pars_fragment:Hl,lightmap_fragment:Vl,lightmap_pars_fragment:Wl,lights_lambert_vertex:jl,lights_pars_begin:ql,lights_toon_fragment:Yl,lights_toon_pars_fragment:Zl,lights_phong_fragment:Jl,lights_phong_pars_fragment:Kl,lights_physical_fragment:Ql,lights_physical_pars_fragment:$l,lights_fragment_begin:ec,lights_fragment_maps:tc,lights_fragment_end:ic,logdepthbuf_fragment:rc,logdepthbuf_pars_fragment:nc,logdepthbuf_pars_vertex:ac,logdepthbuf_vertex:sc,map_fragment:oc,map_pars_fragment:lc,map_particle_fragment:cc,map_particle_pars_fragment:uc,metalnessmap_fragment:hc,metalnessmap_pars_fragment:dc,morphcolor_vertex:pc,morphnormal_vertex:fc,morphtarget_pars_vertex:mc,morphtarget_vertex:gc,normal_fragment_begin:vc,normal_fragment_maps:_c,normal_pars_fragment:xc,normal_pars_vertex:yc,normal_vertex:Mc,normalmap_pars_fragment:bc,clearcoat_normal_fragment_begin:Sc,clearcoat_normal_fragment_maps:wc,clearcoat_pars_fragment:Ec,iridescence_pars_fragment:Tc,output_fragment:Ac,packing:Cc,premultiplied_alpha_fragment:Lc,project_vertex:Dc,dithering_fragment:Rc,dithering_pars_fragment:Pc,roughnessmap_fragment:Ic,roughnessmap_pars_fragment:Nc,shadowmap_pars_fragment:Oc,shadowmap_pars_vertex:Uc,shadowmap_vertex:zc,shadowmask_pars_fragment:Fc,skinbase_vertex:Bc,skinning_pars_vertex:Gc,skinning_vertex:kc,skinnormal_vertex:Hc,specularmap_fragment:Vc,specularmap_pars_fragment:Wc,tonemapping_fragment:jc,tonemapping_pars_fragment:qc,transmission_fragment:Xc,transmission_pars_fragment:Yc,uv_pars_fragment:Zc,uv_pars_vertex:Jc,uv_vertex:Kc,uv2_pars_fragment:Qc,uv2_pars_vertex:$c,uv2_vertex:eu,worldpos_vertex:tu,background_vert:iu,background_frag:ru,cube_vert:nu,cube_frag:au,depth_vert:su,depth_frag:ou,distanceRGBA_vert:lu,distanceRGBA_frag:cu,equirect_vert:uu,equirect_frag:hu,linedashed_vert:du,linedashed_frag:pu,meshbasic_vert:fu,meshbasic_frag:mu,meshlambert_vert:gu,meshlambert_frag:vu,meshmatcap_vert:_u,meshmatcap_frag:xu,meshnormal_vert:yu,meshnormal_frag:Mu,meshphong_vert:bu,meshphong_frag:Su,meshphysical_vert:wu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:Au,points_vert:Cu,points_frag:Lu,shadow_vert:Du,shadow_frag:Ru,sprite_vert:Pu,sprite_frag:Iu},te={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}}},wt={basic:{uniforms:Ze([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Ze([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new Re(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Ze([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Ze([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Ze([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Re(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Ze([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Ze([te.points,te.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Ze([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Ze([te.common,te.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Ze([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Ze([te.sprite,te.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},cube:{uniforms:Ze([te.envmap,{opacity:{value:1}}]),vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Ze([te.common,te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Ze([te.lights,te.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};wt.physical={uniforms:Ze([wt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};function Nu(a,e,t,i,r,n){const o=new Re(0);let s=r===!0?0:1,c,l,u=null,p=0,d=null;function m(f,h){let y=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=e.get(S));const T=a.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?g(o,s):S&&S.isColor&&(g(S,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Pr)?(l===void 0&&(l=new xt(new or(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:zi(wt.cube.uniforms),vertexShader:wt.cube.vertexShader,fragmentShader:wt.cube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||p!==S.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,d=a.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new Bi(2,2),new hi({name:"BackgroundMaterial",uniforms:zi(wt.background.uniforms),vertexShader:wt.background.vertexShader,fragmentShader:wt.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,h){t.buffers.color.setClear(f.r,f.g,f.b,h,n)}return{getClearColor:function(){return o},setClearColor:function(f,h=1){o.set(f),s=h,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(f){s=f,g(o,s)},render:m}}function Ou(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},c=h(null);let l=c,u=!1;function p(P,j,k,X,q){let N=!1;if(o){const H=f(X,k,j);l!==H&&(l=H,m(l.object)),N=y(P,X,k,q),N&&S(P,X,k,q)}else{const H=j.wireframe===!0;(l.geometry!==X.id||l.program!==k.id||l.wireframe!==H)&&(l.geometry=X.id,l.program=k.id,l.wireframe=H,N=!0)}q!==null&&t.update(q,34963),(N||u)&&(u=!1,_(P,j,k,X),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function d(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function m(P){return i.isWebGL2?a.bindVertexArray(P):n.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?a.deleteVertexArray(P):n.deleteVertexArrayOES(P)}function f(P,j,k){const X=k.wireframe===!0;let q=s[P.id];q===void 0&&(q={},s[P.id]=q);let N=q[j.id];N===void 0&&(N={},q[j.id]=N);let H=N[X];return H===void 0&&(H=h(d()),N[X]=H),H}function h(P){const j=[],k=[],X=[];for(let q=0;q<r;q++)j[q]=0,k[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:k,attributeDivisors:X,object:P,attributes:{},index:null}}function y(P,j,k,X){const q=l.attributes,N=j.attributes;let H=0;const Q=k.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const Z=q[Y];let ce=N[Y];if(ce===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;H++}return l.attributesNum!==H||l.index!==X}function S(P,j,k,X){const q={},N=j.attributes;let H=0;const Q=k.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let Z=N[Y];Z===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),q[Y]=ce,H++}l.attributes=q,l.attributesNum=H,l.index=X}function T(){const P=l.newAttributes;for(let j=0,k=P.length;j<k;j++)P[j]=0}function M(P){w(P,0)}function w(P,j){const k=l.newAttributes,X=l.enabledAttributes,q=l.attributeDivisors;k[P]=1,X[P]===0&&(a.enableVertexAttribArray(P),X[P]=1),q[P]!==j&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,j),q[P]=j)}function A(){const P=l.newAttributes,j=l.enabledAttributes;for(let k=0,X=j.length;k<X;k++)j[k]!==P[k]&&(a.disableVertexAttribArray(k),j[k]=0)}function I(P,j,k,X,q,N){i.isWebGL2===!0&&(k===5124||k===5125)?a.vertexAttribIPointer(P,j,k,q,N):a.vertexAttribPointer(P,j,k,X,q,N)}function _(P,j,k,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const q=X.attributes,N=k.getAttributes(),H=j.defaultAttributeValues;for(const Q in N){const Y=N[Q];if(Y.location>=0){let Z=q[Q];if(Z===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const ce=Z.normalized,Ee=Z.itemSize,W=t.get(Z);if(W===void 0)continue;const Le=W.buffer,fe=W.type,me=W.bytesPerElement;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Ie=ae.stride,ye=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let pe=0;pe<Y.locationSize;pe++)w(Y.location+pe,ae.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<Y.locationSize;pe++)M(Y.location+pe);a.bindBuffer(34962,Le);for(let pe=0;pe<Y.locationSize;pe++)I(Y.location+pe,Ee/Y.locationSize,fe,ce,Ie*me,(ye+Ee/Y.locationSize*pe)*me)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<Y.locationSize;ae++)w(Y.location+ae,Z.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<Y.locationSize;ae++)M(Y.location+ae);a.bindBuffer(34962,Le);for(let ae=0;ae<Y.locationSize;ae++)I(Y.location+ae,Ee/Y.locationSize,fe,ce,Ee*me,Ee/Y.locationSize*ae*me)}}else if(H!==void 0){const ce=H[Q];if(ce!==void 0)switch(ce.length){case 2:a.vertexAttrib2fv(Y.location,ce);break;case 3:a.vertexAttrib3fv(Y.location,ce);break;case 4:a.vertexAttrib4fv(Y.location,ce);break;default:a.vertexAttrib1fv(Y.location,ce)}}}}A()}function E(){ie();for(const P in s){const j=s[P];for(const k in j){const X=j[k];for(const q in X)g(X[q].object),delete X[q];delete j[k]}delete s[P]}}function O(P){if(s[P.id]===void 0)return;const j=s[P.id];for(const k in j){const X=j[k];for(const q in X)g(X[q].object),delete X[q];delete j[k]}delete s[P.id]}function U(P){for(const j in s){const k=s[j];if(k[P.id]===void 0)continue;const X=k[P.id];for(const q in X)g(X[q].object),delete X[q];delete k[P.id]}}function ie(){K(),u=!0,l!==c&&(l=c,m(l.object))}function K(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:ie,resetDefaultState:K,dispose:E,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:M,disableUnusedAttributes:A}}function Uu(a,e,t,i){const r=i.isWebGL2;let n;function o(l){n=l}function s(l,u){a.drawArrays(n,l,u),t.update(u,n,1)}function c(l,u,p){if(p===0)return;let d,m;if(r)d=a,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](n,l,u,p),t.update(u,n,p)}this.setMode=o,this.render=s,this.renderInstances=c}function zu(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(I){if(I==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=n(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=a.getParameter(34930),d=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),h=a.getParameter(36347),y=a.getParameter(36348),S=a.getParameter(36349),T=d>0,M=o||e.has("OES_texture_float"),w=T&&M,A=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:h,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:T,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:A}}function Fu(a){const e=this;let t=null,i=0,r=!1,n=!1;const o=new Qt,s=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d,m){const g=p.length!==0||d||i!==0||r;return r=d,t=u(p,m,0),i=p.length,g},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1,l()},this.setState=function(p,d,m){const g=p.clippingPlanes,f=p.clipIntersection,h=p.clipShadows,y=a.get(p);if(!r||g===null||g.length===0||n&&!h)n?u(null):l();else{const S=n?0:i,T=S*4;let M=y.clippingState||null;c.value=M,M=u(g,d,T,m);for(let w=0;w!==T;++w)M[w]=t[w];y.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,m,g){const f=p!==null?p.length:0;let h=null;if(f!==0){if(h=c.value,g!==!0||h===null){const y=m+f*4,S=d.matrixWorldInverse;s.getNormalMatrix(S),(h===null||h.length<y)&&(h=new Float32Array(y));for(let T=0,M=m;T!==f;++T,M+=4)o.copy(p[T]).applyMatrix4(S,s),o.normal.toArray(h,M),h[M+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,h}}function Bu(a){let e=new WeakMap;function t(o,s){return s===yn?o.mapping=Ni:s===Mn&&(o.mapping=Oi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===yn||s===Mn)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tl(c.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class fs extends hs{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,o=n+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Ea=[.125,.215,.35,.446,.526,.582],ei=20,fn=new fs,Ta=new Re;let mn=null;const $t=(1+Math.sqrt(5))/2,Li=1/$t,Aa=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,$t,Li),new D(0,$t,-Li),new D(Li,0,$t),new D(-Li,0,$t),new D($t,Li,0),new D(-$t,Li,0)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){mn=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mn),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:er,format:Et,encoding:ci,depthBuffer:!1},r=La(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=La(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gu(n)),this._blurMaterial=ku(n,e,t)}return r}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,fn)}_sceneToCubeUV(e,t,i,r){const n=new ht(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ta),c.toneMapping=Ut,c.autoClear=!1;const p=new ls({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),d=new xt(new or,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Ta),m=!0);for(let f=0;f<6;f++){const h=f%3;h===0?(n.up.set(0,o[f],0),n.lookAt(s[f],0,0)):h===1?(n.up.set(0,0,o[f]),n.lookAt(0,s[f],0)):(n.up.set(0,o[f],0),n.lookAt(0,0,s[f]));const y=this._cubeSize;Cr(r,h*y,f>2?y:0,y,y),c.setRenderTarget(r),m&&c.render(d,n),c.render(e,n)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ni||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Da());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,fn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Aa[(r-1)%Aa.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new xt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*ei-1),f=n/g,h=isFinite(n)?1+Math.floor(u*f):ei;h>ei&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ei}`);const y=[];let S=0;for(let I=0;I<ei;++I){const _=I/f,E=Math.exp(-_*_/2);y.push(E),I===0?S+=E:I<h&&(S+=2*E)}for(let I=0;I<y.length;I++)y[I]=y[I]/S;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=y,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const M=this._sizeLods[r],w=3*M*(r>T-Ri?r-T+Ri:0),A=4*(this._cubeSize-M);Cr(t,w,A,3*M,2*M),c.setRenderTarget(t),c.render(p,fn)}}function Gu(a){const e=[],t=[],i=[];let r=a;const n=a-Ri+1+Ea.length;for(let o=0;o<n;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>a-Ri?c=Ea[o-a+Ri-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),u=-l,p=1+l,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,f=3,h=2,y=1,S=new Float32Array(f*g*m),T=new Float32Array(h*g*m),M=new Float32Array(y*g*m);for(let A=0;A<m;A++){const I=A%3*2/3-1,_=A>2?0:-1,E=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];S.set(E,f*g*A),T.set(d,h*g*A);const O=[A,A,A,A,A,A];M.set(O,y*g*A)}const w=new di;w.setAttribute("position",new Tt(S,f)),w.setAttribute("uv",new Tt(T,h)),w.setAttribute("faceIndex",new Tt(M,y)),e.push(w),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function La(a,e,t){const i=new ui(a,e,t);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function ku(a,e,t){const i=new Float32Array(ei),r=new D(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dn(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Da(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dn(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Ra(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function Dn(){return`

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
	`}function Hu(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===yn||c===Mn,u=c===Ni||c===Oi;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new Ca(a)),p=l?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(l&&p&&p.height>0||u&&p&&r(p)){t===null&&(t=new Ca(a));const d=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",n),d.texture}else return null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function n(s){const c=s.target;c.removeEventListener("dispose",n);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Vu(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Wu(a,e,t,i){const r={},n=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=n.get(d);m&&(e.remove(m),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(p){const d=p.attributes;for(const g in d)e.update(d[g],34962);const m=p.morphAttributes;for(const g in m){const f=m[g];for(let h=0,y=f.length;h<y;h++)e.update(f[h],34962)}}function l(p){const d=[],m=p.index,g=p.attributes.position;let f=0;if(m!==null){const S=m.array;f=m.version;for(let T=0,M=S.length;T<M;T+=3){const w=S[T+0],A=S[T+1],I=S[T+2];d.push(w,A,A,I,I,w)}}else{const S=g.array;f=g.version;for(let T=0,M=S.length/3-1;T<M;T+=3){const w=T+0,A=T+1,I=T+2;d.push(w,A,A,I,I,w)}}const h=new(is(d)?us:cs)(d,1);h.version=f;const y=n.get(p);y&&e.remove(y),n.set(p,h)}function u(p){const d=n.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&l(p)}else l(p);return n.get(p)}return{get:s,update:c,getWireframeAttribute:u}}function ju(a,e,t,i){const r=i.isWebGL2;let n;function o(d){n=d}let s,c;function l(d){s=d.type,c=d.bytesPerElement}function u(d,m){a.drawElements(n,m,s,d*c),t.update(m,n,1)}function p(d,m,g){if(g===0)return;let f,h;if(r)f=a,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](n,m,s,d*c,g),t.update(m,n,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=p}function qu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xu(a,e){return a[0]-e[0]}function Yu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function gn(a,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),a.divideScalar(t)}function Zu(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new He,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,p,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=g!==void 0?g.length:0;let h=n.get(u);if(h===void 0||h.count!==f){let T=function(){P.dispose(),n.delete(u),u.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const M=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let O=0;M===!0&&(O=1),w===!0&&(O=2),A===!0&&(O=3);let U=u.attributes.position.count*O,ie=1;U>e.maxTextureSize&&(ie=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const K=new Float32Array(U*ie*4*f),P=new ss(K,U,ie,f);P.type=ii,P.needsUpdate=!0;const j=O*4;for(let k=0;k<f;k++){const X=I[k],q=_[k],N=E[k],H=U*ie*4*k;for(let Q=0;Q<X.count;Q++){const Y=Q*j;M===!0&&(o.fromBufferAttribute(X,Q),X.normalized===!0&&gn(o,X),K[H+Y+0]=o.x,K[H+Y+1]=o.y,K[H+Y+2]=o.z,K[H+Y+3]=0),w===!0&&(o.fromBufferAttribute(q,Q),q.normalized===!0&&gn(o,q),K[H+Y+4]=o.x,K[H+Y+5]=o.y,K[H+Y+6]=o.z,K[H+Y+7]=0),A===!0&&(o.fromBufferAttribute(N,Q),N.normalized===!0&&gn(o,N),K[H+Y+8]=o.x,K[H+Y+9]=o.y,K[H+Y+10]=o.z,K[H+Y+11]=N.itemSize===4?o.w:1)}}h={count:f,texture:P,size:new Ce(U,ie)},n.set(u,h),u.addEventListener("dispose",T)}let y=0;for(let T=0;T<m.length;T++)y+=m[T];const S=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(a,"morphTargetBaseInfluence",S),d.getUniforms().setValue(a,"morphTargetInfluences",m),d.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}else{const g=m===void 0?0:m.length;let f=i[u.id];if(f===void 0||f.length!==g){f=[];for(let M=0;M<g;M++)f[M]=[M,0];i[u.id]=f}for(let M=0;M<g;M++){const w=f[M];w[0]=M,w[1]=m[M]}f.sort(Yu);for(let M=0;M<8;M++)M<g&&f[M][1]?(s[M][0]=f[M][0],s[M][1]=f[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(Xu);const h=u.morphAttributes.position,y=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const w=s[M],A=w[0],I=w[1];A!==Number.MAX_SAFE_INTEGER&&I?(h&&u.getAttribute("morphTarget"+M)!==h[A]&&u.setAttribute("morphTarget"+M,h[A]),y&&u.getAttribute("morphNormal"+M)!==y[A]&&u.setAttribute("morphNormal"+M,y[A]),r[M]=I,S+=I):(h&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),y&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const T=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(a,"morphTargetBaseInfluence",T),d.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:c}}function Ju(a,e,t,i){let r=new WeakMap;function n(c){const l=i.render.frame,u=c.geometry,p=e.get(c,u);return r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),p}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:o}}const ms=new pt,gs=new ss,vs=new Fo,_s=new ds,Pa=[],Ia=[],Na=new Float32Array(16),Oa=new Float32Array(9),Ua=new Float32Array(4);function Gi(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=Pa[r];if(n===void 0&&(n=new Float32Array(r),Pa[r]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(n,s)}return n}function $e(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function et(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Nr(a,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Ku(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Qu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;a.uniform2fv(this.addr,e),et(t,e)}}function $u(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;a.uniform3fv(this.addr,e),et(t,e)}}function eh(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;a.uniform4fv(this.addr,e),et(t,e)}}function th(a,e){const t=this.cache,i=e.elements;if(i===void 0){if($e(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if($e(t,i))return;Ua.set(i),a.uniformMatrix2fv(this.addr,!1,Ua),et(t,i)}}function ih(a,e){const t=this.cache,i=e.elements;if(i===void 0){if($e(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if($e(t,i))return;Oa.set(i),a.uniformMatrix3fv(this.addr,!1,Oa),et(t,i)}}function rh(a,e){const t=this.cache,i=e.elements;if(i===void 0){if($e(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if($e(t,i))return;Na.set(i),a.uniformMatrix4fv(this.addr,!1,Na),et(t,i)}}function nh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ah(a,e){const t=this.cache;$e(t,e)||(a.uniform2iv(this.addr,e),et(t,e))}function sh(a,e){const t=this.cache;$e(t,e)||(a.uniform3iv(this.addr,e),et(t,e))}function oh(a,e){const t=this.cache;$e(t,e)||(a.uniform4iv(this.addr,e),et(t,e))}function lh(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ch(a,e){const t=this.cache;$e(t,e)||(a.uniform2uiv(this.addr,e),et(t,e))}function uh(a,e){const t=this.cache;$e(t,e)||(a.uniform3uiv(this.addr,e),et(t,e))}function hh(a,e){const t=this.cache;$e(t,e)||(a.uniform4uiv(this.addr,e),et(t,e))}function dh(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ms,r)}function ph(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vs,r)}function fh(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||_s,r)}function mh(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||gs,r)}function gh(a){switch(a){case 5126:return Ku;case 35664:return Qu;case 35665:return $u;case 35666:return eh;case 35674:return th;case 35675:return ih;case 35676:return rh;case 5124:case 35670:return nh;case 35667:case 35671:return ah;case 35668:case 35672:return sh;case 35669:case 35673:return oh;case 5125:return lh;case 36294:return ch;case 36295:return uh;case 36296:return hh;case 35678:case 36198:case 36298:case 36306:case 35682:return dh;case 35679:case 36299:case 36307:return ph;case 35680:case 36300:case 36308:case 36293:return fh;case 36289:case 36303:case 36311:case 36292:return mh}}function vh(a,e){a.uniform1fv(this.addr,e)}function _h(a,e){const t=Gi(e,this.size,2);a.uniform2fv(this.addr,t)}function xh(a,e){const t=Gi(e,this.size,3);a.uniform3fv(this.addr,t)}function yh(a,e){const t=Gi(e,this.size,4);a.uniform4fv(this.addr,t)}function Mh(a,e){const t=Gi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function bh(a,e){const t=Gi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Sh(a,e){const t=Gi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function wh(a,e){a.uniform1iv(this.addr,e)}function Eh(a,e){a.uniform2iv(this.addr,e)}function Th(a,e){a.uniform3iv(this.addr,e)}function Ah(a,e){a.uniform4iv(this.addr,e)}function Ch(a,e){a.uniform1uiv(this.addr,e)}function Lh(a,e){a.uniform2uiv(this.addr,e)}function Dh(a,e){a.uniform3uiv(this.addr,e)}function Rh(a,e){a.uniform4uiv(this.addr,e)}function Ph(a,e,t){const i=e.length,r=Nr(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTexture2D(e[n]||ms,r[n])}function Ih(a,e,t){const i=e.length,r=Nr(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTexture3D(e[n]||vs,r[n])}function Nh(a,e,t){const i=e.length,r=Nr(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTextureCube(e[n]||_s,r[n])}function Oh(a,e,t){const i=e.length,r=Nr(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.setTexture2DArray(e[n]||gs,r[n])}function Uh(a){switch(a){case 5126:return vh;case 35664:return _h;case 35665:return xh;case 35666:return yh;case 35674:return Mh;case 35675:return bh;case 35676:return Sh;case 5124:case 35670:return wh;case 35667:case 35671:return Eh;case 35668:case 35672:return Th;case 35669:case 35673:return Ah;case 5125:return Ch;case 36294:return Lh;case 36295:return Dh;case 36296:return Rh;case 35678:case 36198:case 36298:case 36306:case 35682:return Ph;case 35679:case 36299:case 36307:return Ih;case 35680:case 36300:case 36308:case 36293:return Nh;case 36289:case 36303:case 36311:case 36292:return Oh}}class zh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=gh(t.type)}}class Fh{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Uh(t.type)}}class Bh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const s=r[n];s.setValue(e,t[s.id],i)}}}const vn=/(\w+)(\])?(\[|\.)?/g;function za(a,e){a.seq.push(e),a.map[e.id]=e}function Gh(a,e,t){const i=a.name,r=i.length;for(vn.lastIndex=0;;){const n=vn.exec(i),o=vn.lastIndex;let s=n[1];const c=n[2]==="]",l=n[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){za(t,l===void 0?new zh(s,a,e):new Fh(s,a,e));break}else{let u=t.map[s];u===void 0&&(u=new Bh(s),za(t,u)),t=u}}}class Rr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);Gh(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const s=t[n],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Fa(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let kh=0;function Hh(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Vh(a){switch(a){case ci:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ba(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Hh(a.getShaderSource(e),o)}else return r}function Wh(a,e){const t=Vh(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jh(a,e){let t;switch(e){case co:t="Linear";break;case uo:t="Reinhard";break;case ho:t="OptimizedCineon";break;case po:t="ACESFilmic";break;case fo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qh(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Xh(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yh(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),o=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[o]={type:n.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Zi(a){return a!==""}function Ga(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zh=/^[ \t]*#include +<([\w\d./]+)>/gm;function En(a){return a.replace(Zh,Jh)}function Jh(a,e){const t=Me[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return En(t)}const Kh=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Qh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ha(a){return a.replace(Qh,xs).replace(Kh,$h)}function $h(a,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),xs(a,e,t,i)}function xs(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Va(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ed(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ka?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Gs?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function td(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ni:case Oi:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function id(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function rd(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case An:e="ENVMAP_BLENDING_MULTIPLY";break;case oo:e="ENVMAP_BLENDING_MIX";break;case lo:e="ENVMAP_BLENDING_ADD";break}return e}function nd(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ad(a,e,t,i){const r=a.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=ed(t),l=td(t),u=id(t),p=rd(t),d=nd(t),m=t.isWebGL2?"":qh(t),g=Xh(n),f=r.createProgram();let h,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(Zi).join(`
`),h.length>0&&(h+=`
`),y=[m,g].filter(Zi).join(`
`),y.length>0&&(y+=`
`)):(h=[Va(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),y=[m,Va(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ut?"#define TONE_MAPPING":"",t.toneMapping!==Ut?Me.tonemapping_pars_fragment:"",t.toneMapping!==Ut?jh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Me.encodings_pars_fragment,Wh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=En(o),o=Ga(o,t),o=ka(o,t),s=En(s),s=Ga(s,t),s=ka(s,t),o=Ha(o),s=Ha(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,y=["#define varying in",t.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=S+h+o,M=S+y+s,w=Fa(r,35633,T),A=Fa(r,35632,M);if(r.attachShader(f,w),r.attachShader(f,A),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),a.debug.checkShaderErrors){const E=r.getProgramInfoLog(f).trim(),O=r.getShaderInfoLog(w).trim(),U=r.getShaderInfoLog(A).trim();let ie=!0,K=!0;if(r.getProgramParameter(f,35714)===!1){ie=!1;const P=Ba(r,w,"vertex"),j=Ba(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+E+`
`+P+`
`+j)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(O===""||U==="")&&(K=!1);K&&(this.diagnostics={runnable:ie,programLog:E,vertexShader:{log:O,prefix:h},fragmentShader:{log:U,prefix:y}})}r.deleteShader(w),r.deleteShader(A);let I;this.getUniforms=function(){return I===void 0&&(I=new Rr(r,f)),I};let _;return this.getAttributes=function(){return _===void 0&&(_=Yh(r,f)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=kh++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=A,this}let sd=0;class od{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new ld(e);t.set(e,i)}return t.get(e)}}class ld{constructor(e){this.id=sd++,this.code=e,this.usedTimes=0}}function cd(a,e,t,i,r,n,o){const s=new os,c=new od,l=[],u=r.isWebGL2,p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_,E,O,U,ie){const K=U.fog,P=ie.geometry,j=_.isMeshStandardMaterial?U.environment:null,k=(_.isMeshStandardMaterial?t:e).get(_.envMap||j),X=!!k&&k.mapping===Pr?k.image.height:null,q=g[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const N=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,H=N!==void 0?N.length:0;let Q=0;P.morphAttributes.position!==void 0&&(Q=1),P.morphAttributes.normal!==void 0&&(Q=2),P.morphAttributes.color!==void 0&&(Q=3);let Y,Z,ce,Ee;if(q){const ae=wt[q];Y=ae.vertexShader,Z=ae.fragmentShader}else Y=_.vertexShader,Z=_.fragmentShader,c.update(_),ce=c.getVertexShaderID(_),Ee=c.getFragmentShaderID(_);const W=a.getRenderTarget(),Le=_.alphaTest>0,fe=_.clearcoat>0,me=_.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:_.type,vertexShader:Y,fragmentShader:Z,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?a.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ci,map:!!_.map,matcap:!!_.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:X,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===No,tangentSpaceNormalMap:_.normalMapType===Io,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ue,clearcoat:fe,clearcoatMap:fe&&!!_.clearcoatMap,clearcoatRoughnessMap:fe&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!_.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!_.iridescenceMap,iridescenceThicknessMap:me&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Pi,alphaMap:!!_.alphaMap,alphaTest:Le,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!P.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!K,useFog:_.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:p,skinning:ie.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:_.toneMapped?a.toneMapping:Ut,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===oi,flipSided:_.side===yt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)E.push(O),E.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(y(E,_),S(E,_),E.push(a.outputEncoding)),E.push(_.customProgramCacheKey),E.join()}function y(_,E){_.push(E.precision),_.push(E.outputEncoding),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.combine),_.push(E.vertexUvs),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function S(_,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.map&&s.enable(4),E.matcap&&s.enable(5),E.envMap&&s.enable(6),E.lightMap&&s.enable(7),E.aoMap&&s.enable(8),E.emissiveMap&&s.enable(9),E.bumpMap&&s.enable(10),E.normalMap&&s.enable(11),E.objectSpaceNormalMap&&s.enable(12),E.tangentSpaceNormalMap&&s.enable(13),E.clearcoat&&s.enable(14),E.clearcoatMap&&s.enable(15),E.clearcoatRoughnessMap&&s.enable(16),E.clearcoatNormalMap&&s.enable(17),E.iridescence&&s.enable(18),E.iridescenceMap&&s.enable(19),E.iridescenceThicknessMap&&s.enable(20),E.displacementMap&&s.enable(21),E.specularMap&&s.enable(22),E.roughnessMap&&s.enable(23),E.metalnessMap&&s.enable(24),E.gradientMap&&s.enable(25),E.alphaMap&&s.enable(26),E.alphaTest&&s.enable(27),E.vertexColors&&s.enable(28),E.vertexAlphas&&s.enable(29),E.vertexUvs&&s.enable(30),E.vertexTangents&&s.enable(31),E.uvsVertexOnly&&s.enable(32),E.fog&&s.enable(33),_.push(s.mask),s.disableAll(),E.useFog&&s.enable(0),E.flatShading&&s.enable(1),E.logarithmicDepthBuffer&&s.enable(2),E.skinning&&s.enable(3),E.morphTargets&&s.enable(4),E.morphNormals&&s.enable(5),E.morphColors&&s.enable(6),E.premultipliedAlpha&&s.enable(7),E.shadowMapEnabled&&s.enable(8),E.physicallyCorrectLights&&s.enable(9),E.doubleSided&&s.enable(10),E.flipSided&&s.enable(11),E.useDepthPacking&&s.enable(12),E.dithering&&s.enable(13),E.specularIntensityMap&&s.enable(14),E.specularColorMap&&s.enable(15),E.transmission&&s.enable(16),E.transmissionMap&&s.enable(17),E.thicknessMap&&s.enable(18),E.sheen&&s.enable(19),E.sheenColorMap&&s.enable(20),E.sheenRoughnessMap&&s.enable(21),E.decodeVideoTexture&&s.enable(22),E.opaque&&s.enable(23),_.push(s.mask)}function T(_){const E=g[_.type];let O;if(E){const U=wt[E];O=Ko.clone(U.uniforms)}else O=_.uniforms;return O}function M(_,E){let O;for(let U=0,ie=l.length;U<ie;U++){const K=l[U];if(K.cacheKey===E){O=K,++O.usedTimes;break}}return O===void 0&&(O=new ad(a,E,_,n),l.push(O)),O}function w(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),_.destroy()}}function A(_){c.remove(_)}function I(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:I}}function ud(){let a=new WeakMap;function e(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function t(n){a.delete(n)}function i(n,o,s){a.get(n)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function hd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Wa(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function ja(){const a=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(p,d,m,g,f,h){let y=a[e];return y===void 0?(y={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:f,group:h},a[e]=y):(y.id=p.id,y.object=p,y.geometry=d,y.material=m,y.groupOrder=g,y.renderOrder=p.renderOrder,y.z=f,y.group=h),e++,y}function s(p,d,m,g,f,h){const y=o(p,d,m,g,f,h);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):t.push(y)}function c(p,d,m,g,f,h){const y=o(p,d,m,g,f,h);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function l(p,d){t.length>1&&t.sort(p||hd),i.length>1&&i.sort(d||Wa),r.length>1&&r.sort(d||Wa)}function u(){for(let p=e,d=a.length;p<d;p++){const m=a[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:s,unshift:c,finish:u,sort:l}}function dd(){let a=new WeakMap;function e(i,r){let n;return a.has(i)===!1?(n=new ja,a.set(i,[n])):r>=a.get(i).length?(n=new ja,a.get(i).push(n)):n=a.get(i)[r],n}function t(){a=new WeakMap}return{get:e,dispose:t}}function pd(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return a[e.id]=t,t}}}function fd(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let md=0;function gd(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function vd(a,e){const t=new pd,i=fd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const n=new D,o=new Ge,s=new Ge;function c(u,p){let d=0,m=0,g=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let f=0,h=0,y=0,S=0,T=0,M=0,w=0,A=0;u.sort(gd);const I=p!==!0?Math.PI:1;for(let E=0,O=u.length;E<O;E++){const U=u[E],ie=U.color,K=U.intensity,P=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=ie.r*K*I,m+=ie.g*K*I,g+=ie.b*K*I;else if(U.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(U.sh.coefficients[k],K);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*I),U.castShadow){const X=U.shadow,q=i.get(U);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,r.directionalShadow[f]=q,r.directionalShadowMap[f]=j,r.directionalShadowMatrix[f]=U.shadow.matrix,M++}r.directional[f]=k,f++}else if(U.isSpotLight){const k=t.get(U);if(k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(ie).multiplyScalar(K*I),k.distance=P,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,U.castShadow){const X=U.shadow,q=i.get(U);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,r.spotShadow[y]=q,r.spotShadowMap[y]=j,r.spotShadowMatrix[y]=U.shadow.matrix,A++}r.spot[y]=k,y++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(ie).multiplyScalar(K),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),r.rectArea[S]=k,S++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*I),k.distance=U.distance,k.decay=U.decay,U.castShadow){const X=U.shadow,q=i.get(U);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,r.pointShadow[h]=q,r.pointShadowMap[h]=j,r.pointShadowMatrix[h]=U.shadow.matrix,w++}r.point[h]=k,h++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(K*I),k.groundColor.copy(U.groundColor).multiplyScalar(K*I),r.hemi[T]=k,T++}}S>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const _=r.hash;(_.directionalLength!==f||_.pointLength!==h||_.spotLength!==y||_.rectAreaLength!==S||_.hemiLength!==T||_.numDirectionalShadows!==M||_.numPointShadows!==w||_.numSpotShadows!==A)&&(r.directional.length=f,r.spot.length=y,r.rectArea.length=S,r.point.length=h,r.hemi.length=T,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotShadowMatrix.length=A,_.directionalLength=f,_.pointLength=h,_.spotLength=y,_.rectAreaLength=S,_.hemiLength=T,_.numDirectionalShadows=M,_.numPointShadows=w,_.numSpotShadows=A,r.version=md++)}function l(u,p){let d=0,m=0,g=0,f=0,h=0;const y=p.matrixWorldInverse;for(let S=0,T=u.length;S<T;S++){const M=u[S];if(M.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(y),d++}else if(M.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(y),g++}else if(M.isRectAreaLight){const w=r.rectArea[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(y),s.identity(),o.copy(M.matrixWorld),o.premultiply(y),s.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),f++}else if(M.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(y),m++}else if(M.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(y),h++}}}return{setup:c,setupView:l,state:r}}function qa(a,e){const t=new vd(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(u){i.push(u)}function s(u){r.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function _d(a,e){let t=new WeakMap;function i(n,o=0){let s;return t.has(n)===!1?(s=new qa(a,e),t.set(n,[s])):o>=t.get(n).length?(s=new qa(a,e),t.get(n).push(s)):s=t.get(n)[o],s}function r(){t=new WeakMap}return{get:i,dispose:r}}class xd extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ro,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yd extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Md=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bd=`uniform sampler2D shadow_pass;
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
}`;function Sd(a,e,t){let i=new Ln;const r=new Ce,n=new Ce,o=new He,s=new xd({depthPacking:Po}),c=new yd,l={},u=t.maxTextureSize,p={0:yt,1:Qi,2:oi},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Md,fragmentShader:bd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new xt(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka,this.render=function(M,w,A){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const I=a.getRenderTarget(),_=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),O=a.state;O.setBlending(Xt),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let U=0,ie=M.length;U<ie;U++){const K=M[U],P=K.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const j=P.getFrameExtents();if(r.multiply(j),n.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(n.x=Math.floor(u/j.x),r.x=n.x*j.x,P.mapSize.x=n.x),r.y>u&&(n.y=Math.floor(u/j.y),r.y=n.y*j.y,P.mapSize.y=n.y)),P.map===null){const X=this.type!==Yi?{minFilter:tt,magFilter:tt}:{};P.map=new ui(r.x,r.y,X),P.map.texture.name=K.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const k=P.getViewportCount();for(let X=0;X<k;X++){const q=P.getViewport(X);o.set(n.x*q.x,n.y*q.y,n.x*q.z,n.y*q.w),O.viewport(o),P.updateMatrices(K,X),i=P.getFrustum(),T(w,A,P.camera,K,this.type)}P.isPointLightShadow!==!0&&this.type===Yi&&y(P,A),P.needsUpdate=!1}h.needsUpdate=!1,a.setRenderTarget(I,_,E)};function y(M,w){const A=e.update(f);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ui(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(w,null,A,d,f,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(w,null,A,m,f,null)}function S(M,w,A,I,_,E){let O=null;const U=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0?O=U:O=A.isPointLight===!0?c:s,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ie=O.uuid,K=w.uuid;let P=l[ie];P===void 0&&(P={},l[ie]=P);let j=P[K];j===void 0&&(j=O.clone(),P[K]=j),O=j}return O.visible=w.visible,O.wireframe=w.wireframe,E===Yi?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:p[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaTest,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(A.matrixWorld),O.nearDistance=I,O.farDistance=_),O}function T(M,w,A,I,_){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===Yi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const O=e.update(M),U=M.material;if(Array.isArray(U)){const ie=O.groups;for(let K=0,P=ie.length;K<P;K++){const j=ie[K],k=U[j.materialIndex];if(k&&k.visible){const X=S(M,k,I,A.near,A.far,_);a.renderBufferDirect(A,null,O,X,M,j)}}}else if(U.visible){const ie=S(M,U,I,A.near,A.far,_);a.renderBufferDirect(A,null,O,ie,M,null)}}const E=M.children;for(let O=0,U=E.length;O<U;O++)T(E[O],w,A,I,_)}}function wd(a,e,t){const i=t.isWebGL2;function r(){let C=!1;const ne=new He;let B=null;const se=new He(0,0,0,0);return{setMask:function(ee){B!==ee&&!C&&(a.colorMask(ee,ee,ee,ee),B=ee)},setLocked:function(ee){C=ee},setClear:function(ee,Pe,Ve,Fe,Ft){Ft===!0&&(ee*=Fe,Pe*=Fe,Ve*=Fe),ne.set(ee,Pe,Ve,Fe),se.equals(ne)===!1&&(a.clearColor(ee,Pe,Ve,Fe),se.copy(ne))},reset:function(){C=!1,B=null,se.set(-1,0,0,0)}}}function n(){let C=!1,ne=null,B=null,se=null;return{setTest:function(ee){ee?Le(2929):fe(2929)},setMask:function(ee){ne!==ee&&!C&&(a.depthMask(ee),ne=ee)},setFunc:function(ee){if(B!==ee){if(ee)switch(ee){case eo:a.depthFunc(512);break;case to:a.depthFunc(519);break;case io:a.depthFunc(513);break;case xn:a.depthFunc(515);break;case ro:a.depthFunc(514);break;case no:a.depthFunc(518);break;case ao:a.depthFunc(516);break;case so:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);B=ee}},setLocked:function(ee){C=ee},setClear:function(ee){se!==ee&&(a.clearDepth(ee),se=ee)},reset:function(){C=!1,ne=null,B=null,se=null}}}function o(){let C=!1,ne=null,B=null,se=null,ee=null,Pe=null,Ve=null,Fe=null,Ft=null;return{setTest:function(Ne){C||(Ne?Le(2960):fe(2960))},setMask:function(Ne){ne!==Ne&&!C&&(a.stencilMask(Ne),ne=Ne)},setFunc:function(Ne,Ct,ot){(B!==Ne||se!==Ct||ee!==ot)&&(a.stencilFunc(Ne,Ct,ot),B=Ne,se=Ct,ee=ot)},setOp:function(Ne,Ct,ot){(Pe!==Ne||Ve!==Ct||Fe!==ot)&&(a.stencilOp(Ne,Ct,ot),Pe=Ne,Ve=Ct,Fe=ot)},setLocked:function(Ne){C=Ne},setClear:function(Ne){Ft!==Ne&&(a.clearStencil(Ne),Ft=Ne)},reset:function(){C=!1,ne=null,B=null,se=null,ee=null,Pe=null,Ve=null,Fe=null,Ft=null}}}const s=new r,c=new n,l=new o,u=new WeakMap,p=new WeakMap;let d={},m={},g=new WeakMap,f=[],h=null,y=!1,S=null,T=null,M=null,w=null,A=null,I=null,_=null,E=!1,O=null,U=null,ie=null,K=null,P=null;const j=a.getParameter(35661);let k=!1,X=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=X>=2);let N=null,H={};const Q=a.getParameter(3088),Y=a.getParameter(2978),Z=new He().fromArray(Q),ce=new He().fromArray(Y);function Ee(C,ne,B){const se=new Uint8Array(4),ee=a.createTexture();a.bindTexture(C,ee),a.texParameteri(C,10241,9728),a.texParameteri(C,10240,9728);for(let Pe=0;Pe<B;Pe++)a.texImage2D(ne+Pe,0,6408,1,1,0,6408,5121,se);return ee}const W={};W[3553]=Ee(3553,3553,1),W[34067]=Ee(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(2929),c.setFunc(xn),Je(!1),Mt(On),Le(2884),qe(Xt);function Le(C){d[C]!==!0&&(a.enable(C),d[C]=!0)}function fe(C){d[C]!==!1&&(a.disable(C),d[C]=!1)}function me(C,ne){return m[C]!==ne?(a.bindFramebuffer(C,ne),m[C]=ne,i&&(C===36009&&(m[36160]=ne),C===36160&&(m[36009]=ne)),!0):!1}function ae(C,ne){let B=f,se=!1;if(C)if(B=g.get(ne),B===void 0&&(B=[],g.set(ne,B)),C.isWebGLMultipleRenderTargets){const ee=C.texture;if(B.length!==ee.length||B[0]!==36064){for(let Pe=0,Ve=ee.length;Pe<Ve;Pe++)B[Pe]=36064+Pe;B.length=ee.length,se=!0}}else B[0]!==36064&&(B[0]=36064,se=!0);else B[0]!==1029&&(B[0]=1029,se=!0);se&&(t.isWebGL2?a.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Ie(C){return h!==C?(a.useProgram(C),h=C,!0):!1}const ye={[Di]:32774,[Vs]:32778,[Ws]:32779};if(i)ye[Bn]=32775,ye[Gn]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(ye[Bn]=C.MIN_EXT,ye[Gn]=C.MAX_EXT)}const pe={[js]:0,[qs]:1,[Xs]:768,[Qa]:770,[$s]:776,[Ks]:774,[Zs]:772,[Ys]:769,[$a]:771,[Qs]:775,[Js]:773};function qe(C,ne,B,se,ee,Pe,Ve,Fe){if(C===Xt){y===!0&&(fe(3042),y=!1);return}if(y===!1&&(Le(3042),y=!0),C!==Hs){if(C!==S||Fe!==E){if((T!==Di||A!==Di)&&(a.blendEquation(32774),T=Di,A=Di),Fe)switch(C){case Pi:a.blendFuncSeparate(1,771,1,771);break;case Un:a.blendFunc(1,1);break;case zn:a.blendFuncSeparate(0,769,0,1);break;case Fn:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Pi:a.blendFuncSeparate(770,771,1,771);break;case Un:a.blendFunc(770,1);break;case zn:a.blendFuncSeparate(0,769,0,1);break;case Fn:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,w=null,I=null,_=null,S=C,E=Fe}return}ee=ee||ne,Pe=Pe||B,Ve=Ve||se,(ne!==T||ee!==A)&&(a.blendEquationSeparate(ye[ne],ye[ee]),T=ne,A=ee),(B!==M||se!==w||Pe!==I||Ve!==_)&&(a.blendFuncSeparate(pe[B],pe[se],pe[Pe],pe[Ve]),M=B,w=se,I=Pe,_=Ve),S=C,E=null}function it(C,ne){C.side===oi?fe(2884):Le(2884);let B=C.side===yt;ne&&(B=!B),Je(B),C.blending===Pi&&C.transparent===!1?qe(Xt):qe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),s.setMask(C.colorWrite);const se=C.stencilWrite;l.setTest(se),se&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),De(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Le(32926):fe(32926)}function Je(C){O!==C&&(C?a.frontFace(2304):a.frontFace(2305),O=C)}function Mt(C){C!==Fs?(Le(2884),C!==U&&(C===On?a.cullFace(1029):C===Bs?a.cullFace(1028):a.cullFace(1032))):fe(2884),U=C}function Xe(C){C!==ie&&(k&&a.lineWidth(C),ie=C)}function De(C,ne,B){C?(Le(32823),(K!==ne||P!==B)&&(a.polygonOffset(ne,B),K=ne,P=B)):fe(32823)}function At(C){C?Le(3089):fe(3089)}function bt(C){C===void 0&&(C=33984+j-1),N!==C&&(a.activeTexture(C),N=C)}function b(C,ne){N===null&&bt();let B=H[N];B===void 0&&(B={type:void 0,texture:void 0},H[N]=B),(B.type!==C||B.texture!==ne)&&(a.bindTexture(C,ne||W[C]),B.type=C,B.texture=ne)}function v(){const C=H[N];C!==void 0&&C.type!==void 0&&(a.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function G(){try{a.compressedTexImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{a.texSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{a.texSubImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{a.texStorage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{a.texStorage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{a.texImage2D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{a.texImage3D.apply(a,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){Z.equals(C)===!1&&(a.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function le(C){ce.equals(C)===!1&&(a.viewport(C.x,C.y,C.z,C.w),ce.copy(C))}function xe(C,ne){let B=p.get(ne);B===void 0&&(B=new WeakMap,p.set(ne,B));let se=B.get(C);se===void 0&&(se=a.getUniformBlockIndex(ne,C.name),B.set(C,se))}function Te(C,ne){const B=p.get(ne).get(C);u.get(C)!==B&&(a.uniformBlockBinding(ne,B,C.__bindingPointIndex),u.set(C,B))}function ze(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},N=null,H={},m={},g=new WeakMap,f=[],h=null,y=!1,S=null,T=null,M=null,w=null,A=null,I=null,_=null,E=!1,O=null,U=null,ie=null,K=null,P=null,Z.set(0,0,a.canvas.width,a.canvas.height),ce.set(0,0,a.canvas.width,a.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Le,disable:fe,bindFramebuffer:me,drawBuffers:ae,useProgram:Ie,setBlending:qe,setMaterial:it,setFlipSided:Je,setCullFace:Mt,setLineWidth:Xe,setPolygonOffset:De,setScissorTest:At,activeTexture:bt,bindTexture:b,unbindTexture:v,compressedTexImage2D:G,texImage2D:de,texImage3D:oe,updateUBOMapping:xe,uniformBlockBinding:Te,texStorage2D:ge,texStorage3D:F,texSubImage2D:J,texSubImage3D:$,compressedTexSubImage2D:re,scissor:ue,viewport:le,reset:ze}}function Ed(a,e,t,i,r,n,o){const s=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,p=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const h=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,v){return y?new OffscreenCanvas(b,v):tr("canvas")}function T(b,v,G,J){let $=1;if((b.width>J||b.height>J)&&($=J/Math.max(b.width,b.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=v?wn:Math.floor,ge=re($*b.width),F=re($*b.height);f===void 0&&(f=S(ge,F));const de=G?S(ge,F):f;return de.width=ge,de.height=F,de.getContext("2d").drawImage(b,0,0,ge,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+F+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return pa(b.width)&&pa(b.height)}function w(b){return s?!1:b.wrapS!==_t||b.wrapT!==_t||b.minFilter!==tt&&b.minFilter!==ut}function A(b,v){return b.generateMipmaps&&v&&b.minFilter!==tt&&b.minFilter!==ut}function I(b){a.generateMipmap(b)}function _(b,v,G,J,$=!1){if(s===!1)return v;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=v;return v===6403&&(G===5126&&(re=33326),G===5131&&(re=33325),G===5121&&(re=33321)),v===33319&&(G===5126&&(re=33328),G===5131&&(re=33327),G===5121&&(re=33323)),v===6408&&(G===5126&&(re=34836),G===5131&&(re=34842),G===5121&&(re=J===Ue&&$===!1?35907:32856),G===32819&&(re=32854),G===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function E(b,v,G){return A(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==tt&&b.minFilter!==ut?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function O(b){return b===tt||b===kn||b===Hn?9728:9729}function U(b){const v=b.target;v.removeEventListener("dispose",U),K(v),v.isVideoTexture&&g.delete(v)}function ie(b){const v=b.target;v.removeEventListener("dispose",ie),j(v)}function K(b){const v=i.get(b);if(v.__webglInit===void 0)return;const G=b.source,J=h.get(G);if(J){const $=J[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(b),Object.keys(J).length===0&&h.delete(G)}i.remove(b)}function P(b){const v=i.get(b);a.deleteTexture(v.__webglTexture);const G=b.source,J=h.get(G);delete J[v.__cacheKey],o.memory.textures--}function j(b){const v=b.texture,G=i.get(b),J=i.get(v);if(J.__webglTexture!==void 0&&(a.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)a.deleteFramebuffer(G.__webglFramebuffer[$]),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer[$]);else{if(a.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&a.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let $=0;$<G.__webglColorRenderbuffer.length;$++)G.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(G.__webglColorRenderbuffer[$]);G.__webglDepthRenderbuffer&&a.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let $=0,re=v.length;$<re;$++){const ge=i.get(v[$]);ge.__webglTexture&&(a.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(v[$])}i.remove(v),i.remove(b)}let k=0;function X(){k=0}function q(){const b=k;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),k+=1,b}function N(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.encoding),v.join()}function H(b,v){const G=i.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(G,b,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,G.__webglTexture)}function Q(b,v){const G=i.get(b);if(b.version>0&&G.__version!==b.version){fe(G,b,v);return}t.activeTexture(33984+v),t.bindTexture(35866,G.__webglTexture)}function Y(b,v){const G=i.get(b);if(b.version>0&&G.__version!==b.version){fe(G,b,v);return}t.activeTexture(33984+v),t.bindTexture(32879,G.__webglTexture)}function Z(b,v){const G=i.get(b);if(b.version>0&&G.__version!==b.version){me(G,b,v);return}t.activeTexture(33984+v),t.bindTexture(34067,G.__webglTexture)}const ce={[$i]:10497,[_t]:33071,[bn]:33648},Ee={[tt]:9728,[kn]:9984,[Hn]:9986,[ut]:9729,[mo]:9985,[Ir]:9987};function W(b,v,G){if(G?(a.texParameteri(b,10242,ce[v.wrapS]),a.texParameteri(b,10243,ce[v.wrapT]),(b===32879||b===35866)&&a.texParameteri(b,32882,ce[v.wrapR]),a.texParameteri(b,10240,Ee[v.magFilter]),a.texParameteri(b,10241,Ee[v.minFilter])):(a.texParameteri(b,10242,33071),a.texParameteri(b,10243,33071),(b===32879||b===35866)&&a.texParameteri(b,32882,33071),(v.wrapS!==_t||v.wrapT!==_t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,10240,O(v.magFilter)),a.texParameteri(b,10241,O(v.minFilter)),v.minFilter!==tt&&v.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(v.type===ii&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===er&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(a.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Le(b,v){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",U));const J=v.source;let $=h.get(J);$===void 0&&($={},h.set(J,$));const re=N(v);if(re!==b.__cacheKey){$[re]===void 0&&($[re]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,G=!0),$[re].usedTimes++;const ge=$[b.__cacheKey];ge!==void 0&&($[b.__cacheKey].usedTimes--,ge.usedTimes===0&&P(v)),b.__cacheKey=re,b.__webglTexture=$[re].texture}return G}function fe(b,v,G){let J=3553;v.isDataArrayTexture&&(J=35866),v.isData3DTexture&&(J=32879);const $=Le(b,v),re=v.source;if(t.activeTexture(33984+G),t.bindTexture(J,b.__webglTexture),re.version!==re.__currentVersion||$===!0){a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const ge=w(v)&&M(v.image)===!1;let F=T(v.image,ge,!1,u);F=bt(v,F);const de=M(F)||s,oe=n.convert(v.format,v.encoding);let ue=n.convert(v.type),le=_(v.internalFormat,oe,ue,v.encoding,v.isVideoTexture);W(J,v,de);let xe;const Te=v.mipmaps,ze=s&&v.isVideoTexture!==!0,C=re.__currentVersion===void 0||$===!0,ne=E(v,F,de);if(v.isDepthTexture)le=6402,s?v.type===ii?le=36012:v.type===ti?le=33190:v.type===Ii?le=35056:le=33189:v.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ni&&le===6402&&v.type!==ts&&v.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ti,ue=n.convert(v.type)),v.format===Ui&&le===6402&&(le=34041,v.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ii,ue=n.convert(v.type))),C&&(ze?t.texStorage2D(3553,1,le,F.width,F.height):t.texImage2D(3553,0,le,F.width,F.height,0,oe,ue,null));else if(v.isDataTexture)if(Te.length>0&&de){ze&&C&&t.texStorage2D(3553,ne,le,Te[0].width,Te[0].height);for(let B=0,se=Te.length;B<se;B++)xe=Te[B],ze?t.texSubImage2D(3553,B,0,0,xe.width,xe.height,oe,ue,xe.data):t.texImage2D(3553,B,le,xe.width,xe.height,0,oe,ue,xe.data);v.generateMipmaps=!1}else ze?(C&&t.texStorage2D(3553,ne,le,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,oe,ue,F.data)):t.texImage2D(3553,0,le,F.width,F.height,0,oe,ue,F.data);else if(v.isCompressedTexture){ze&&C&&t.texStorage2D(3553,ne,le,Te[0].width,Te[0].height);for(let B=0,se=Te.length;B<se;B++)xe=Te[B],v.format!==Et?oe!==null?ze?t.compressedTexSubImage2D(3553,B,0,0,xe.width,xe.height,oe,xe.data):t.compressedTexImage2D(3553,B,le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,B,0,0,xe.width,xe.height,oe,ue,xe.data):t.texImage2D(3553,B,le,xe.width,xe.height,0,oe,ue,xe.data)}else if(v.isDataArrayTexture)ze?(C&&t.texStorage3D(35866,ne,le,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,oe,ue,F.data)):t.texImage3D(35866,0,le,F.width,F.height,F.depth,0,oe,ue,F.data);else if(v.isData3DTexture)ze?(C&&t.texStorage3D(32879,ne,le,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,oe,ue,F.data)):t.texImage3D(32879,0,le,F.width,F.height,F.depth,0,oe,ue,F.data);else if(v.isFramebufferTexture){if(C)if(ze)t.texStorage2D(3553,ne,le,F.width,F.height);else{let B=F.width,se=F.height;for(let ee=0;ee<ne;ee++)t.texImage2D(3553,ee,le,B,se,0,oe,ue,null),B>>=1,se>>=1}}else if(Te.length>0&&de){ze&&C&&t.texStorage2D(3553,ne,le,Te[0].width,Te[0].height);for(let B=0,se=Te.length;B<se;B++)xe=Te[B],ze?t.texSubImage2D(3553,B,0,0,oe,ue,xe):t.texImage2D(3553,B,le,oe,ue,xe);v.generateMipmaps=!1}else ze?(C&&t.texStorage2D(3553,ne,le,F.width,F.height),t.texSubImage2D(3553,0,0,0,oe,ue,F)):t.texImage2D(3553,0,le,oe,ue,F);A(v,de)&&I(J),re.__currentVersion=re.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function me(b,v,G){if(v.image.length!==6)return;const J=Le(b,v),$=v.source;if(t.activeTexture(33984+G),t.bindTexture(34067,b.__webglTexture),$.version!==$.__currentVersion||J===!0){a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const re=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,F=[];for(let B=0;B<6;B++)!re&&!ge?F[B]=T(v.image[B],!1,!0,l):F[B]=ge?v.image[B].image:v.image[B],F[B]=bt(v,F[B]);const de=F[0],oe=M(de)||s,ue=n.convert(v.format,v.encoding),le=n.convert(v.type),xe=_(v.internalFormat,ue,le,v.encoding),Te=s&&v.isVideoTexture!==!0,ze=$.__currentVersion===void 0||J===!0;let C=E(v,de,oe);W(34067,v,oe);let ne;if(re){Te&&ze&&t.texStorage2D(34067,C,xe,de.width,de.height);for(let B=0;B<6;B++){ne=F[B].mipmaps;for(let se=0;se<ne.length;se++){const ee=ne[se];v.format!==Et?ue!==null?Te?t.compressedTexSubImage2D(34069+B,se,0,0,ee.width,ee.height,ue,ee.data):t.compressedTexImage2D(34069+B,se,xe,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+B,se,0,0,ee.width,ee.height,ue,le,ee.data):t.texImage2D(34069+B,se,xe,ee.width,ee.height,0,ue,le,ee.data)}}}else{ne=v.mipmaps,Te&&ze&&(ne.length>0&&C++,t.texStorage2D(34067,C,xe,F[0].width,F[0].height));for(let B=0;B<6;B++)if(ge){Te?t.texSubImage2D(34069+B,0,0,0,F[B].width,F[B].height,ue,le,F[B].data):t.texImage2D(34069+B,0,xe,F[B].width,F[B].height,0,ue,le,F[B].data);for(let se=0;se<ne.length;se++){const ee=ne[se].image[B].image;Te?t.texSubImage2D(34069+B,se+1,0,0,ee.width,ee.height,ue,le,ee.data):t.texImage2D(34069+B,se+1,xe,ee.width,ee.height,0,ue,le,ee.data)}}else{Te?t.texSubImage2D(34069+B,0,0,0,ue,le,F[B]):t.texImage2D(34069+B,0,xe,ue,le,F[B]);for(let se=0;se<ne.length;se++){const ee=ne[se];Te?t.texSubImage2D(34069+B,se+1,0,0,ue,le,ee.image[B]):t.texImage2D(34069+B,se+1,xe,ue,le,ee.image[B])}}}A(v,oe)&&I(34067),$.__currentVersion=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ae(b,v,G,J,$){const re=n.convert(G.format,G.encoding),ge=n.convert(G.type),F=_(G.internalFormat,re,ge,G.encoding);i.get(v).__hasExternalTextures||($===32879||$===35866?t.texImage3D($,0,F,v.width,v.height,v.depth,0,re,ge,null):t.texImage2D($,0,F,v.width,v.height,0,re,ge,null)),t.bindFramebuffer(36160,b),De(v)?d.framebufferTexture2DMultisampleEXT(36160,J,$,i.get(G).__webglTexture,0,Xe(v)):a.framebufferTexture2D(36160,J,$,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(b,v,G){if(a.bindRenderbuffer(36161,b),v.depthBuffer&&!v.stencilBuffer){let J=33189;if(G||De(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===ii?J=36012:$.type===ti&&(J=33190));const re=Xe(v);De(v)?d.renderbufferStorageMultisampleEXT(36161,re,J,v.width,v.height):a.renderbufferStorageMultisample(36161,re,J,v.width,v.height)}else a.renderbufferStorage(36161,J,v.width,v.height);a.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){const J=Xe(v);G&&De(v)===!1?a.renderbufferStorageMultisample(36161,J,35056,v.width,v.height):De(v)?d.renderbufferStorageMultisampleEXT(36161,J,35056,v.width,v.height):a.renderbufferStorage(36161,34041,v.width,v.height),a.framebufferRenderbuffer(36160,33306,36161,b)}else{const J=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<J.length;$++){const re=J[$],ge=n.convert(re.format,re.encoding),F=n.convert(re.type),de=_(re.internalFormat,ge,F,re.encoding),oe=Xe(v);G&&De(v)===!1?a.renderbufferStorageMultisample(36161,oe,de,v.width,v.height):De(v)?d.renderbufferStorageMultisampleEXT(36161,oe,de,v.width,v.height):a.renderbufferStorage(36161,de,v.width,v.height)}}a.bindRenderbuffer(36161,null)}function ye(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const G=i.get(v.depthTexture).__webglTexture,J=Xe(v);if(v.depthTexture.format===ni)De(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,G,0,J):a.framebufferTexture2D(36160,36096,3553,G,0);else if(v.depthTexture.format===Ui)De(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,G,0,J):a.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function pe(b){const v=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ye(v.__webglFramebuffer,b)}else if(G){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=a.createRenderbuffer(),Ie(v.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),Ie(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function qe(b,v,G){const J=i.get(b);v!==void 0&&ae(J.__webglFramebuffer,b,b.texture,36064,3553),G!==void 0&&pe(b)}function it(b){const v=b.texture,G=i.get(b),J=i.get(v);b.addEventListener("dispose",ie),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=v.version,o.memory.textures++);const $=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ge=M(b)||s;if($){G.__webglFramebuffer=[];for(let F=0;F<6;F++)G.__webglFramebuffer[F]=a.createFramebuffer()}else{if(G.__webglFramebuffer=a.createFramebuffer(),re)if(r.drawBuffers){const F=b.texture;for(let de=0,oe=F.length;de<oe;de++){const ue=i.get(F[de]);ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&De(b)===!1){const F=re?v:[v];G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let de=0;de<F.length;de++){const oe=F[de];G.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(36161,G.__webglColorRenderbuffer[de]);const ue=n.convert(oe.format,oe.encoding),le=n.convert(oe.type),xe=_(oe.internalFormat,ue,le,oe.encoding),Te=Xe(b);a.renderbufferStorageMultisample(36161,Te,xe,b.width,b.height),a.framebufferRenderbuffer(36160,36064+de,36161,G.__webglColorRenderbuffer[de])}a.bindRenderbuffer(36161,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if($){t.bindTexture(34067,J.__webglTexture),W(34067,v,ge);for(let F=0;F<6;F++)ae(G.__webglFramebuffer[F],b,v,36064,34069+F);A(v,ge)&&I(34067),t.unbindTexture()}else if(re){const F=b.texture;for(let de=0,oe=F.length;de<oe;de++){const ue=F[de],le=i.get(ue);t.bindTexture(3553,le.__webglTexture),W(3553,ue,ge),ae(G.__webglFramebuffer,b,ue,36064+de,3553),A(ue,ge)&&I(3553)}t.unbindTexture()}else{let F=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?F=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(F,J.__webglTexture),W(F,v,ge),ae(G.__webglFramebuffer,b,v,36064,F),A(v,ge)&&I(F),t.unbindTexture()}b.depthBuffer&&pe(b)}function Je(b){const v=M(b)||s,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,$=G.length;J<$;J++){const re=G[J];if(A(re,v)){const ge=b.isWebGLCubeRenderTarget?34067:3553,F=i.get(re).__webglTexture;t.bindTexture(ge,F),I(ge),t.unbindTexture()}}}function Mt(b){if(s&&b.samples>0&&De(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,J=b.height;let $=16384;const re=[],ge=b.stencilBuffer?33306:36096,F=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,F.__webglFramebuffer),a.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,F.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){re.push(36064+oe),b.depthBuffer&&re.push(ge);const ue=F.__ignoreDepthValues!==void 0?F.__ignoreDepthValues:!1;if(ue===!1&&(b.depthBuffer&&($|=256),b.stencilBuffer&&($|=1024)),de&&a.framebufferRenderbuffer(36008,36064,36161,F.__webglColorRenderbuffer[oe]),ue===!0&&(a.invalidateFramebuffer(36008,[ge]),a.invalidateFramebuffer(36009,[ge])),de){const le=i.get(v[oe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,le,0)}a.blitFramebuffer(0,0,G,J,0,0,G,J,$,9728),m&&a.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),de)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+oe,36161,F.__webglColorRenderbuffer[oe]);const ue=i.get(v[oe]).__webglTexture;t.bindFramebuffer(36160,F.__webglFramebuffer),a.framebufferTexture2D(36009,36064+oe,3553,ue,0)}t.bindFramebuffer(36009,F.__webglMultisampledFramebuffer)}}function Xe(b){return Math.min(p,b.samples)}function De(b){const v=i.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(b){const v=o.render.frame;g.get(b)!==v&&(g.set(b,v),b.update())}function bt(b,v){const G=b.encoding,J=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Sn||G!==ci&&(G===Ue?s===!1?e.has("EXT_sRGB")===!0&&J===Et?(b.format=Sn,b.minFilter=ut,b.generateMipmaps=!1):v=ns.sRGBToLinear(v):(J!==Et||$!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=q,this.resetTextureUnits=X,this.setTexture2D=H,this.setTexture2DArray=Q,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=De}function Td(a,e,t){const i=t.isWebGL2;function r(n,o=null){let s;if(n===li)return 5121;if(n===xo)return 32819;if(n===yo)return 32820;if(n===go)return 5120;if(n===vo)return 5122;if(n===ts)return 5123;if(n===_o)return 5124;if(n===ti)return 5125;if(n===ii)return 5126;if(n===er)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Mo)return 6406;if(n===Et)return 6408;if(n===So)return 6409;if(n===wo)return 6410;if(n===ni)return 6402;if(n===Ui)return 34041;if(n===Eo)return 6403;if(n===bo)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===Sn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===To)return 36244;if(n===Ao)return 33319;if(n===Co)return 33320;if(n===Lo)return 36249;if(n===Br||n===Gr||n===kr||n===Hr)if(o===Ue)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vn||n===Wn||n===jn||n===qn)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vn)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jn)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qn)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Xn||n===Yn)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xn)return o===Ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yn)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zn||n===Jn||n===Kn||n===Qn||n===$n||n===ea||n===ta||n===ia||n===ra||n===na||n===aa||n===sa||n===oa||n===la)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zn)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jn)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kn)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qn)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$n)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return o===Ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ca)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ca)return o===Ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===Ii?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[n]!==void 0?a[n]:null}return{convert:r}}class Ad extends ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Lr extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cd={type:"move"};class _n{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const f of e.hand.values()){const h=t.getJointPose(f,i);if(l.joints[f.jointName]===void 0){const S=new Lr;S.matrixAutoUpdate=!1,S.visible=!1,l.joints[f.jointName]=S,l.add(S)}const y=l.joints[f.jointName];h!==null&&(y.matrix.fromArray(h.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=h.radius),y.visible=h!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=n!==null),l!==null&&(l.visible=o!==null),this}}class Ld extends pt{constructor(e,t,i,r,n,o,s,c,l,u){if(u=u!==void 0?u:ni,u!==ni&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ni&&(i=ti),i===void 0&&u===Ui&&(i=Ii),super(null,r,n,o,s,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:tt,this.minFilter=c!==void 0?c:tt,this.flipY=!1,this.generateMipmaps=!1}}class Dd extends Fi{constructor(e,t){super();const i=this;let r=null,n=1,o=null,s="local-floor",c=null,l=null,u=null,p=null,d=null,m=null;const g=t.getContextAttributes();let f=null,h=null;const y=[],S=[],T=new ht;T.layers.enable(1),T.viewport=new He;const M=new ht;M.layers.enable(2),M.viewport=new He;const w=[T,M],A=new Ad;A.layers.enable(1),A.layers.enable(2);let I=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let H=y[N];return H===void 0&&(H=new _n,y[N]=H),H.getTargetRaySpace()},this.getControllerGrip=function(N){let H=y[N];return H===void 0&&(H=new _n,y[N]=H),H.getGripSpace()},this.getHand=function(N){let H=y[N];return H===void 0&&(H=new _n,y[N]=H),H.getHandSpace()};function E(N){const H=S.indexOf(N.inputSource);if(H===-1)return;const Q=y[H];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function O(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",U);for(let N=0;N<y.length;N++){const H=S[N];H!==null&&(S[N]=null,y[N].disconnect(H))}I=null,_=null,e.setRenderTarget(f),d=null,p=null,u=null,r=null,h=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){n=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",O),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};d=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:d}),h=new ui(d.framebufferWidth,d.framebufferHeight,{format:Et,type:li,encoding:e.outputEncoding})}else{let H=null,Q=null,Y=null;g.depth&&(Y=g.stencil?35056:33190,H=g.stencil?Ui:ni,Q=g.stencil?Ii:ti);const Z={colorFormat:32856,depthFormat:Y,scaleFactor:n};u=new XRWebGLBinding(r,t),p=u.createProjectionLayer(Z),r.updateRenderState({layers:[p]}),h=new ui(p.textureWidth,p.textureHeight,{format:Et,type:li,depthTexture:new Ld(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(h);ce.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(s),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(N){for(let H=0;H<N.removed.length;H++){const Q=N.removed[H],Y=S.indexOf(Q);Y>=0&&(S[Y]=null,y[Y].dispatchEvent({type:"disconnected",data:Q}))}for(let H=0;H<N.added.length;H++){const Q=N.added[H];let Y=S.indexOf(Q);if(Y===-1){for(let ce=0;ce<y.length;ce++)if(ce>=S.length){S.push(Q),Y=ce;break}else if(S[ce]===null){S[ce]=Q,Y=ce;break}if(Y===-1)break}const Z=y[Y];Z&&Z.dispatchEvent({type:"connected",data:Q})}}const ie=new D,K=new D;function P(N,H,Q){ie.setFromMatrixPosition(H.matrixWorld),K.setFromMatrixPosition(Q.matrixWorld);const Y=ie.distanceTo(K),Z=H.projectionMatrix.elements,ce=Q.projectionMatrix.elements,Ee=Z[14]/(Z[10]-1),W=Z[14]/(Z[10]+1),Le=(Z[9]+1)/Z[5],fe=(Z[9]-1)/Z[5],me=(Z[8]-1)/Z[0],ae=(ce[8]+1)/ce[0],Ie=Ee*me,ye=Ee*ae,pe=Y/(-me+ae),qe=pe*-me;H.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(qe),N.translateZ(pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const it=Ee+pe,Je=W+pe,Mt=Ie-qe,Xe=ye+(Y-qe),De=Le*W/Je*it,At=fe*W/Je*it;N.projectionMatrix.makePerspective(Mt,Xe,De,At,it,Je)}function j(N,H){H===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(H.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;A.near=M.near=T.near=N.near,A.far=M.far=T.far=N.far,(I!==A.near||_!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,_=A.far);const H=N.parent,Q=A.cameras;j(A,H);for(let Z=0;Z<Q.length;Z++)j(Q[Z],H);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),N.position.copy(A.position),N.quaternion.copy(A.quaternion),N.scale.copy(A.scale),N.matrix.copy(A.matrix),N.matrixWorld.copy(A.matrixWorld);const Y=N.children;for(let Z=0,ce=Y.length;Z<ce;Z++)Y[Z].updateMatrixWorld(!0);Q.length===2?P(A,T,M):A.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(N){p!==null&&(p.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let k=null;function X(N,H){if(l=H.getViewerPose(c||o),m=H,l!==null){const Q=l.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Y=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,Y=!0);for(let Z=0;Z<Q.length;Z++){const ce=Q[Z];let Ee=null;if(d!==null)Ee=d.getViewport(ce);else{const Le=u.getViewSubImage(p,ce);Ee=Le.viewport,Z===0&&(e.setRenderTargetTextures(h,Le.colorTexture,p.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(h))}let W=w[Z];W===void 0&&(W=new ht,W.layers.enable(Z),W.viewport=new He,w[Z]=W),W.matrix.fromArray(ce.transform.matrix),W.projectionMatrix.fromArray(ce.projectionMatrix),W.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Z===0&&A.matrix.copy(W.matrix),Y===!0&&A.cameras.push(W)}}for(let Q=0;Q<y.length;Q++){const Y=S[Q],Z=y[Q];Y!==null&&Z!==void 0&&Z.update(Y,H,c||o)}k&&k(N,H),m=null}const q=new ps;q.setAnimationLoop(X),this.setAnimationLoop=function(N){k=N},this.dispose=function(){}}}function Rd(a,e){function t(f,h){f.fogColor.value.copy(h.color),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function i(f,h,y,S,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),u(f,h)):h.isMeshPhongMaterial?(r(f,h),l(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&d(f,h,T)):h.isMeshMatcapMaterial?(r(f,h),m(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),g(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(n(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?s(f,h,y,S):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map),h.alphaMap&&(f.alphaMap.value=h.alphaMap),h.bumpMap&&(f.bumpMap.value=h.bumpMap,f.bumpScale.value=h.bumpScale,h.side===yt&&(f.bumpScale.value*=-1)),h.displacementMap&&(f.displacementMap.value=h.displacementMap,f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap),h.normalMap&&(f.normalMap.value=h.normalMap,f.normalScale.value.copy(h.normalScale),h.side===yt&&f.normalScale.value.negate()),h.specularMap&&(f.specularMap.value=h.specularMap),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const y=e.get(h).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const M=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*M}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity);let S;h.map?S=h.map:h.specularMap?S=h.specularMap:h.displacementMap?S=h.displacementMap:h.normalMap?S=h.normalMap:h.bumpMap?S=h.bumpMap:h.roughnessMap?S=h.roughnessMap:h.metalnessMap?S=h.metalnessMap:h.alphaMap?S=h.alphaMap:h.emissiveMap?S=h.emissiveMap:h.clearcoatMap?S=h.clearcoatMap:h.clearcoatNormalMap?S=h.clearcoatNormalMap:h.clearcoatRoughnessMap?S=h.clearcoatRoughnessMap:h.iridescenceMap?S=h.iridescenceMap:h.iridescenceThicknessMap?S=h.iridescenceThicknessMap:h.specularIntensityMap?S=h.specularIntensityMap:h.specularColorMap?S=h.specularColorMap:h.transmissionMap?S=h.transmissionMap:h.thicknessMap?S=h.thicknessMap:h.sheenColorMap?S=h.sheenColorMap:h.sheenRoughnessMap&&(S=h.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uvTransform.value.copy(S.matrix));let T;h.aoMap?T=h.aoMap:h.lightMap&&(T=h.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),f.uv2Transform.value.copy(T.matrix))}function n(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function s(f,h,y,S){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*y,f.scale.value=S*.5,h.map&&(f.map.value=h.map),h.alphaMap&&(f.alphaMap.value=h.alphaMap),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let T;h.map?T=h.map:h.alphaMap&&(T=h.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),f.uvTransform.value.copy(T.matrix))}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map),h.alphaMap&&(f.alphaMap.value=h.alphaMap),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let y;h.map?y=h.map:h.alphaMap&&(y=h.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function l(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function u(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.roughness.value=h.roughness,f.metalness.value=h.metalness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function d(f,h,y){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),f.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===yt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap)}function m(f,h){h.matcap&&(f.matcap.value=h.matcap)}function g(f,h){f.referencePosition.value.copy(h.referencePosition),f.nearDistance.value=h.nearDistance,f.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Pd(a,e,t,i){let r={},n={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function c(S,T){const M=T.program;i.uniformBlockBinding(S,M)}function l(S,T){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",h));const w=T.program;i.updateUBOMapping(S,w);const A=e.render.frame;n[S.id]!==A&&(d(S),n[S.id]=A)}function u(S){const T=p();S.__bindingPointIndex=T;const M=a.createBuffer(),w=S.__size,A=S.usage;return a.bindBuffer(35345,M),a.bufferData(35345,w,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,T,M),M}function p(){for(let S=0;S<s;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],M=S.uniforms,w=S.__cache;a.bindBuffer(35345,T);for(let A=0,I=M.length;A<I;A++){const _=M[A];if(m(_,A,w)===!0){const E=_.value,O=_.__offset;typeof E=="number"?(_.__data[0]=E,a.bufferSubData(35345,O,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):E.toArray(_.__data),a.bufferSubData(35345,O,_.__data))}}a.bindBuffer(35345,null)}function m(S,T,M){const w=S.value;if(M[T]===void 0)return typeof w=="number"?M[T]=w:M[T]=w.clone(),!0;if(typeof w=="number"){if(M[T]!==w)return M[T]=w,!0}else{const A=M[T];if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(S){const T=S.uniforms;let M=0;const w=16;let A=0;for(let I=0,_=T.length;I<_;I++){const E=T[I],O=f(E);if(E.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,I>0){A=M%w;const U=w-A;A!==0&&U-O.boundary<0&&(M+=w-A,E.__offset=M)}M+=O.storage}return A=M%w,A>0&&(M+=w-A),S.__size=M,S.__cache={},this}function f(S){const T=S.value,M={boundary:0,storage:0};return typeof T=="number"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function h(S){const T=S.target;T.removeEventListener("dispose",h);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),a.deleteBuffer(r[T.id]),delete r[T.id],delete n[T.id]}function y(){for(const S in r)a.deleteBuffer(r[S]);o=[],r={},n={}}return{bind:c,update:l,dispose:y}}function Id(){const a=tr("canvas");return a.style.display="block",a}function ys(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Id(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,n=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let p=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ci,this.physicallyCorrectLights=!1,this.toneMapping=Ut,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let h=!1,y=0,S=0,T=null,M=-1,w=null;const A=new He,I=new He;let _=null,E=e.width,O=e.height,U=1,ie=null,K=null;const P=new He(0,0,E,O),j=new He(0,0,E,O);let k=!1;const X=new Ln;let q=!1,N=!1,H=null;const Q=new Ge,Y=new Ce,Z=new D,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ee(){return T===null?U:1}let W=t;function Le(x,L){for(let z=0;z<x.length;z++){const R=x[z],V=e.getContext(R,L);if(V!==null)return V}return null}try{const x={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tn}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",ze,!1),W===null){const L=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&L.shift(),W=Le(L,x),W===null)throw Le(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let fe,me,ae,Ie,ye,pe,qe,it,Je,Mt,Xe,De,At,bt,b,v,G,J,$,re,ge,F,de,oe;function ue(){fe=new Vu(W),me=new zu(W,fe,a),fe.init(me),F=new Td(W,fe,me),ae=new wd(W,fe,me),Ie=new qu,ye=new ud,pe=new Ed(W,fe,ae,ye,me,F,Ie),qe=new Bu(f),it=new Hu(f),Je=new nl(W,me),de=new Ou(W,fe,Je,me),Mt=new Wu(W,Je,Ie,de),Xe=new Ju(W,Mt,Je,Ie),$=new Zu(W,me,pe),v=new Fu(ye),De=new cd(f,qe,it,fe,me,de,v),At=new Rd(f,ye),bt=new dd,b=new _d(fe,me),J=new Nu(f,qe,ae,Xe,u,o),G=new Sd(f,Xe,me),oe=new Pd(W,Ie,me,ae),re=new Uu(W,fe,Ie,me),ge=new ju(W,fe,Ie,me),Ie.programs=De.programs,f.capabilities=me,f.extensions=fe,f.properties=ye,f.renderLists=bt,f.shadowMap=G,f.state=ae,f.info=Ie}ue();const le=new Dd(f,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const x=fe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=fe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(x){x!==void 0&&(U=x,this.setSize(E,O,!1))},this.getSize=function(x){return x.set(E,O)},this.setSize=function(x,L,z){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=x,O=L,e.width=Math.floor(x*U),e.height=Math.floor(L*U),z!==!1&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(E*U,O*U).floor()},this.setDrawingBufferSize=function(x,L,z){E=x,O=L,U=z,e.width=Math.floor(x*z),e.height=Math.floor(L*z),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(P)},this.setViewport=function(x,L,z,R){x.isVector4?P.set(x.x,x.y,x.z,x.w):P.set(x,L,z,R),ae.viewport(A.copy(P).multiplyScalar(U).floor())},this.getScissor=function(x){return x.copy(j)},this.setScissor=function(x,L,z,R){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,L,z,R),ae.scissor(I.copy(j).multiplyScalar(U).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(x){ae.setScissorTest(k=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(x=!0,L=!0,z=!0){let R=0;x&&(R|=16384),L&&(R|=256),z&&(R|=1024),W.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),bt.dispose(),b.dispose(),ye.dispose(),qe.dispose(),it.dispose(),Xe.dispose(),de.dispose(),oe.dispose(),De.dispose(),le.dispose(),le.removeEventListener("sessionstart",Pe),le.removeEventListener("sessionend",Ve),H&&(H.dispose(),H=null),Fe.stop()};function xe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const x=Ie.autoReset,L=G.enabled,z=G.autoUpdate,R=G.needsUpdate,V=G.type;ue(),Ie.autoReset=x,G.enabled=L,G.autoUpdate=z,G.needsUpdate=R,G.type=V}function ze(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function C(x){const L=x.target;L.removeEventListener("dispose",C),ne(L)}function ne(x){B(x),ye.remove(x)}function B(x){const L=ye.get(x).programs;L!==void 0&&(L.forEach(function(z){De.releaseProgram(z)}),x.isShaderMaterial&&De.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,z,R,V,he){L===null&&(L=ce);const ve=V.isMesh&&V.matrixWorld.determinant()<0,_e=Ns(x,L,z,R,V);ae.setMaterial(R,ve);let be=z.index;const Oe=z.attributes.position;if(be===null){if(Oe===void 0||Oe.count===0)return}else if(be.count===0)return;let Se=1;R.wireframe===!0&&(be=Mt.getWireframeAttribute(z),Se=2),de.setup(V,R,_e,z,be);let we,We=re;be!==null&&(we=Je.get(be),We=ge,We.setIndex(we));const Yt=be!==null?be.count:Oe.count,pi=z.drawRange.start*Se,fi=z.drawRange.count*Se,St=he!==null?he.start*Se:0,Ae=he!==null?he.count*Se:1/0,mi=Math.max(pi,St),Hi=Math.min(Yt,pi+fi,St+Ae)-1,lt=Math.max(0,Hi-mi+1);if(lt!==0){if(V.isMesh)R.wireframe===!0?(ae.setLineWidth(R.wireframeLinewidth*Ee()),We.setMode(1)):We.setMode(4);else if(V.isLine){let Bt=R.linewidth;Bt===void 0&&(Bt=1),ae.setLineWidth(Bt*Ee()),V.isLineSegments?We.setMode(1):V.isLineLoop?We.setMode(2):We.setMode(3)}else V.isPoints?We.setMode(0):V.isSprite&&We.setMode(4);if(V.isInstancedMesh)We.renderInstances(mi,lt,V.count);else if(z.isInstancedBufferGeometry){const Bt=Math.min(z.instanceCount,z._maxInstanceCount);We.renderInstances(mi,lt,Bt)}else We.render(mi,lt)}},this.compile=function(x,L){d=b.get(x),d.init(),g.push(d),x.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(f.physicallyCorrectLights),x.traverse(function(z){const R=z.material;if(R)if(Array.isArray(R))for(let V=0;V<R.length;V++){const he=R[V];Or(he,x,z)}else Or(R,x,z)}),g.pop(),d=null};let se=null;function ee(x){se&&se(x)}function Pe(){Fe.stop()}function Ve(){Fe.start()}const Fe=new ps;Fe.setAnimationLoop(ee),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(x){se=x,le.setAnimationLoop(x),x===null?Fe.stop():Fe.start()},le.addEventListener("sessionstart",Pe),le.addEventListener("sessionend",Ve),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;x.autoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(L),L=le.getCamera()),x.isScene===!0&&x.onBeforeRender(f,x,L,T),d=b.get(x,g.length),d.init(),g.push(d),Q.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Q),N=this.localClippingEnabled,q=v.init(this.clippingPlanes,N,L),p=bt.get(x,m.length),p.init(),m.push(p),Ft(x,L,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(ie,K),q===!0&&v.beginShadows();const z=d.state.shadowsArray;if(G.render(z,x,L),q===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(p,x),d.setupLights(f.physicallyCorrectLights),L.isArrayCamera){const R=L.cameras;for(let V=0,he=R.length;V<he;V++){const ve=R[V];Ne(p,x,ve,ve.viewport)}}else Ne(p,x,L);T!==null&&(pe.updateMultisampleRenderTarget(T),pe.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(f,x,L),de.resetDefaultState(),M=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function Ft(x,L,z,R){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||X.intersectsSprite(x)){R&&Z.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Q);const he=Xe.update(x),ve=x.material;ve.visible&&p.push(x,he,ve,z,Z.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==Ie.render.frame&&(x.skeleton.update(),x.skeleton.frame=Ie.render.frame),!x.frustumCulled||X.intersectsObject(x))){R&&Z.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Q);const he=Xe.update(x),ve=x.material;if(Array.isArray(ve)){const _e=he.groups;for(let be=0,Oe=_e.length;be<Oe;be++){const Se=_e[be],we=ve[Se.materialIndex];we&&we.visible&&p.push(x,he,we,z,Z.z,Se)}}else ve.visible&&p.push(x,he,ve,z,Z.z,null)}}const V=x.children;for(let he=0,ve=V.length;he<ve;he++)Ft(V[he],L,z,R)}function Ne(x,L,z,R){const V=x.opaque,he=x.transmissive,ve=x.transparent;d.setupLightsView(z),he.length>0&&Ct(V,L,z),R&&ae.viewport(A.copy(R)),V.length>0&&ot(V,L,z),he.length>0&&ot(he,L,z),ve.length>0&&ot(ve,L,z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Ct(x,L,z){const R=me.isWebGL2;H===null&&(H=new ui(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?er:li,minFilter:Ir,samples:R&&n===!0?4:0})),f.getDrawingBufferSize(Y),R?H.setSize(Y.x,Y.y):H.setSize(wn(Y.x),wn(Y.y));const V=f.getRenderTarget();f.setRenderTarget(H),f.clear();const he=f.toneMapping;f.toneMapping=Ut,ot(x,L,z),f.toneMapping=he,pe.updateMultisampleRenderTarget(H),pe.updateRenderTargetMipmap(H),f.setRenderTarget(V)}function ot(x,L,z){const R=L.isScene===!0?L.overrideMaterial:null;for(let V=0,he=x.length;V<he;V++){const ve=x[V],_e=ve.object,be=ve.geometry,Oe=R===null?ve.material:R,Se=ve.group;_e.layers.test(z.layers)&&Is(_e,L,z,be,Oe,Se)}}function Is(x,L,z,R,V,he){x.onBeforeRender(f,L,z,R,V,he),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(f,L,z,R,x,he),V.transparent===!0&&V.side===oi?(V.side=yt,V.needsUpdate=!0,f.renderBufferDirect(z,L,R,V,x,he),V.side=Qi,V.needsUpdate=!0,f.renderBufferDirect(z,L,R,V,x,he),V.side=oi):f.renderBufferDirect(z,L,R,V,x,he),x.onAfterRender(f,L,z,R,V,he)}function Or(x,L,z){L.isScene!==!0&&(L=ce);const R=ye.get(x),V=d.state.lights,he=d.state.shadowsArray,ve=V.state.version,_e=De.getParameters(x,V.state,he,L,z),be=De.getProgramCacheKey(_e);let Oe=R.programs;R.environment=x.isMeshStandardMaterial?L.environment:null,R.fog=L.fog,R.envMap=(x.isMeshStandardMaterial?it:qe).get(x.envMap||R.environment),Oe===void 0&&(x.addEventListener("dispose",C),Oe=new Map,R.programs=Oe);let Se=Oe.get(be);if(Se!==void 0){if(R.currentProgram===Se&&R.lightsStateVersion===ve)return In(x,_e),Se}else _e.uniforms=De.getUniforms(x),x.onBuild(z,_e,f),x.onBeforeCompile(_e,f),Se=De.acquireProgram(_e,be),Oe.set(be,Se),R.uniforms=_e.uniforms;const we=R.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=v.uniform),In(x,_e),R.needsLights=Us(x),R.lightsStateVersion=ve,R.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMap.value=V.state.directionalShadowMap,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotShadowMap.value=V.state.spotShadowMap,we.spotShadowMatrix.value=V.state.spotShadowMatrix,we.pointShadowMap.value=V.state.pointShadowMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix);const We=Se.getUniforms(),Yt=Rr.seqWithValue(We.seq,we);return R.currentProgram=Se,R.uniformsList=Yt,Se}function In(x,L){const z=ye.get(x);z.outputEncoding=L.outputEncoding,z.instancing=L.instancing,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Ns(x,L,z,R,V){L.isScene!==!0&&(L=ce),pe.resetTextureUnits();const he=L.fog,ve=R.isMeshStandardMaterial?L.environment:null,_e=T===null?f.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:ci,be=(R.isMeshStandardMaterial?it:qe).get(R.envMap||ve),Oe=R.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Se=!!R.normalMap&&!!z.attributes.tangent,we=!!z.morphAttributes.position,We=!!z.morphAttributes.normal,Yt=!!z.morphAttributes.color,pi=R.toneMapped?f.toneMapping:Ut,fi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,St=fi!==void 0?fi.length:0,Ae=ye.get(R),mi=d.state.lights;if(q===!0&&(N===!0||x!==w)){const rt=x===w&&R.id===M;v.setState(R,x,rt)}let Hi=!1;R.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==mi.state.version||Ae.outputEncoding!==_e||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||Ae.envMap!==be||R.fog===!0&&Ae.fog!==he||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==v.numPlanes||Ae.numIntersection!==v.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==Se||Ae.morphTargets!==we||Ae.morphNormals!==We||Ae.morphColors!==Yt||Ae.toneMapping!==pi||me.isWebGL2===!0&&Ae.morphTargetsCount!==St)&&(Hi=!0):(Hi=!0,Ae.__version=R.version);let lt=Ae.currentProgram;Hi===!0&&(lt=Or(R,L,V));let Bt=!1,Vi=!1,Ur=!1;const Ke=lt.getUniforms(),Wi=Ae.uniforms;if(ae.useProgram(lt.program)&&(Bt=!0,Vi=!0,Ur=!0),R.id!==M&&(M=R.id,Vi=!0),Bt||w!==x){if(Ke.setValue(W,"projectionMatrix",x.projectionMatrix),me.logarithmicDepthBuffer&&Ke.setValue(W,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),w!==x&&(w=x,Vi=!0,Ur=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const rt=Ke.map.cameraPosition;rt!==void 0&&rt.setValue(W,Z.setFromMatrixPosition(x.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&Ke.setValue(W,"isOrthographic",x.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||V.isSkinnedMesh)&&Ke.setValue(W,"viewMatrix",x.matrixWorldInverse)}if(V.isSkinnedMesh){Ke.setOptional(W,V,"bindMatrix"),Ke.setOptional(W,V,"bindMatrixInverse");const rt=V.skeleton;rt&&(me.floatVertexTextures?(rt.boneTexture===null&&rt.computeBoneTexture(),Ke.setValue(W,"boneTexture",rt.boneTexture,pe),Ke.setValue(W,"boneTextureSize",rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zr=z.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0&&me.isWebGL2===!0)&&$.update(V,z,R,lt),(Vi||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,Ke.setValue(W,"receiveShadow",V.receiveShadow)),Vi&&(Ke.setValue(W,"toneMappingExposure",f.toneMappingExposure),Ae.needsLights&&Os(Wi,Ur),he&&R.fog===!0&&At.refreshFogUniforms(Wi,he),At.refreshMaterialUniforms(Wi,R,U,O,H),Rr.upload(W,Ae.uniformsList,Wi,pe)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Rr.upload(W,Ae.uniformsList,Wi,pe),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&Ke.setValue(W,"center",V.center),Ke.setValue(W,"modelViewMatrix",V.modelViewMatrix),Ke.setValue(W,"normalMatrix",V.normalMatrix),Ke.setValue(W,"modelMatrix",V.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const rt=R.uniformsGroups;for(let Fr=0,zs=rt.length;Fr<zs;Fr++)if(me.isWebGL2){const Nn=rt[Fr];oe.update(Nn,lt),oe.bind(Nn,lt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lt}function Os(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Us(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,L,z){ye.get(x.texture).__webglTexture=L,ye.get(x.depthTexture).__webglTexture=z;const R=ye.get(x);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=z===void 0,R.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,L){const z=ye.get(x);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,z=0){T=x,y=L,S=z;let R=!0;if(x){const _e=ye.get(x);_e.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),R=!1):_e.__webglFramebuffer===void 0?pe.setupRenderTarget(x):_e.__hasExternalTextures&&pe.rebindTextures(x,ye.get(x.texture).__webglTexture,ye.get(x.depthTexture).__webglTexture)}let V=null,he=!1,ve=!1;if(x){const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture)&&(ve=!0);const be=ye.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(V=be[L],he=!0):me.isWebGL2&&x.samples>0&&pe.useMultisampledRTT(x)===!1?V=ye.get(x).__webglMultisampledFramebuffer:V=be,A.copy(x.viewport),I.copy(x.scissor),_=x.scissorTest}else A.copy(P).multiplyScalar(U).floor(),I.copy(j).multiplyScalar(U).floor(),_=k;if(ae.bindFramebuffer(36160,V)&&me.drawBuffers&&R&&ae.drawBuffers(x,V),ae.viewport(A),ae.scissor(I),ae.setScissorTest(_),he){const _e=ye.get(x.texture);W.framebufferTexture2D(36160,36064,34069+L,_e.__webglTexture,z)}else if(ve){const _e=ye.get(x.texture),be=L||0;W.framebufferTextureLayer(36160,36064,_e.__webglTexture,z||0,be)}M=-1},this.readRenderTargetPixels=function(x,L,z,R,V,he,ve){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve]),_e){ae.bindFramebuffer(36160,_e);try{const be=x.texture,Oe=be.format,Se=be.type;if(Oe!==Et&&F.convert(Oe)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const we=Se===er&&(fe.has("EXT_color_buffer_half_float")||me.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Se!==li&&F.convert(Se)!==W.getParameter(35738)&&!(Se===ii&&(me.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!we){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-R&&z>=0&&z<=x.height-V&&W.readPixels(L,z,R,V,F.convert(Oe),F.convert(Se),he)}finally{const be=T!==null?ye.get(T).__webglFramebuffer:null;ae.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(x,L,z=0){const R=Math.pow(2,-z),V=Math.floor(L.image.width*R),he=Math.floor(L.image.height*R);pe.setTexture2D(L,0),W.copyTexSubImage2D(3553,z,0,0,x.x,x.y,V,he),ae.unbindTexture()},this.copyTextureToTexture=function(x,L,z,R=0){const V=L.image.width,he=L.image.height,ve=F.convert(z.format),_e=F.convert(z.type);pe.setTexture2D(z,0),W.pixelStorei(37440,z.flipY),W.pixelStorei(37441,z.premultiplyAlpha),W.pixelStorei(3317,z.unpackAlignment),L.isDataTexture?W.texSubImage2D(3553,R,x.x,x.y,V,he,ve,_e,L.image.data):L.isCompressedTexture?W.compressedTexSubImage2D(3553,R,x.x,x.y,L.mipmaps[0].width,L.mipmaps[0].height,ve,L.mipmaps[0].data):W.texSubImage2D(3553,R,x.x,x.y,ve,_e,L.image),R===0&&z.generateMipmaps&&W.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(x,L,z,R,V=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=x.max.x-x.min.x+1,ve=x.max.y-x.min.y+1,_e=x.max.z-x.min.z+1,be=F.convert(R.format),Oe=F.convert(R.type);let Se;if(R.isData3DTexture)pe.setTexture3D(R,0),Se=32879;else if(R.isDataArrayTexture)pe.setTexture2DArray(R,0),Se=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,R.flipY),W.pixelStorei(37441,R.premultiplyAlpha),W.pixelStorei(3317,R.unpackAlignment);const we=W.getParameter(3314),We=W.getParameter(32878),Yt=W.getParameter(3316),pi=W.getParameter(3315),fi=W.getParameter(32877),St=z.isCompressedTexture?z.mipmaps[0]:z.image;W.pixelStorei(3314,St.width),W.pixelStorei(32878,St.height),W.pixelStorei(3316,x.min.x),W.pixelStorei(3315,x.min.y),W.pixelStorei(32877,x.min.z),z.isDataTexture||z.isData3DTexture?W.texSubImage3D(Se,V,L.x,L.y,L.z,he,ve,_e,be,Oe,St.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Se,V,L.x,L.y,L.z,he,ve,_e,be,St.data)):W.texSubImage3D(Se,V,L.x,L.y,L.z,he,ve,_e,be,Oe,St),W.pixelStorei(3314,we),W.pixelStorei(32878,We),W.pixelStorei(3316,Yt),W.pixelStorei(3315,pi),W.pixelStorei(32877,fi),V===0&&R.generateMipmaps&&W.generateMipmap(Se),ae.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?pe.setTextureCube(x,0):x.isData3DTexture?pe.setTexture3D(x,0):x.isDataArrayTexture?pe.setTexture2DArray(x,0):pe.setTexture2D(x,0),ae.unbindTexture()},this.resetState=function(){y=0,S=0,T=null,ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Nd extends ys{}Nd.prototype.isWebGL1Renderer=!0;class Od extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Ms extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=An,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xa={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Ud{constructor(e,t,i){const r=this;let n=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){s++,n===!1&&r.onStart!==void 0&&r.onStart(u,o,s),n=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){const p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=l.length;p<d;p+=2){const m=l[p],g=l[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const zd=new Ud;class bs{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Fd extends bs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,o=Xa.get(e);if(o!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(o),n.manager.itemEnd(e)},0),o;const s=tr("img");function c(){u(),Xa.add(e,this),t&&t(this),n.manager.itemEnd(e)}function l(p){u(),r&&r(p),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),n.manager.itemStart(e),s.src=e,s}}class Ss extends bs{constructor(e){super(e)}load(e,t,i,r){const n=new pt,o=new Fd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){n.image=s,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Bd extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ya=new Ge,Za=new D,Ja=new D;class Gd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ln,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Za.setFromMatrixPosition(e.matrixWorld),t.position.copy(Za),Ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ja),t.updateMatrixWorld(),Ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kd extends Gd{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ki extends Bd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DefaultUp),this.updateMatrix(),this.target=new Qe,this.shadow=new kd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tn);const zt=new Od,Ji=new ht(45,window.innerWidth/window.innerHeight,1,500);Ji.position.set(0,0,50);Ji.lookAt(0,0,0);const Ki=new ys;Ki.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ki.domElement);const Rn=new Ss().load("yugioh-card-back.jpeg");Rn.wrapS=$i;Rn.wrapT=$i;const ws=new Ms({map:Rn}),Pn=[];for(let a=0;a<5;a++)Pn.push(new xt(new Bi(5,8),ws));Pn.forEach((a,e)=>{a.material.side=oi,a.position.set(-14+e*7,0,0),zt.add(a)});const Hd=new Ss().load("blackhole.jpeg"),Vd=new Ms({map:Hd}),Wd=new Bi(5,8),Es=new Bi(5,8);Es.applyMatrix4(new Ge().makeRotationY(Math.PI));const lr=new Qe,jd=new xt(Wd,Vd),qd=new xt(Es,ws);lr.add(jd);lr.add(qd);lr.position.set(0,10,0);zt.add(lr);const Ts=new ki(16777215,1);Ts.position.set(0,0,1);zt.add(Ts);const As=new ki(16777215,1);As.position.set(0,0,-1);zt.add(As);const Cs=new ki(16777215,1);Cs.position.set(0,1,0);zt.add(Cs);const Ls=new ki(16777215,1);Ls.position.set(0,-1,0);zt.add(Ls);const Ds=new ki(16777215,1);Ds.position.set(1,0,0);zt.add(Ds);const Rs=new ki(16777215,1);Rs.position.set(-1,0,0);zt.add(Rs);function Xd(a){const e=a.domElement,t=e.clientWidth,i=e.clientHeight,r=e.width!==t||e.height!==i;return r&&a.setSize(t,i,!1),r}function Ps(){if(requestAnimationFrame(Ps),Pn.forEach(a=>{a.rotation.x+=.005,a.rotation.y+=.005}),lr.rotation.y+=.03,Xd(Ki)){const a=Ki.domElement;Ji.aspect=a.clientWidth/a.clientHeight,Ji.updateProjectionMatrix()}Ki.render(zt,Ji)}Ps();
