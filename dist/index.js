module.exports=(()=>{var e={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},713:e=>{e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},38:(e,t,a)=>{var n=a(858),r=a(884),i=a(379),o=a(521);e.exports=function(e,t){return n(e)||r(e,t)||i(e,t)||o()}},379:(e,t,a)=>{var n=a(228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},294:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Audio:()=>V,AudioPlayer:()=>X,AudioPlayerControlSprite:()=>l});const n=require("react");var r=a.n(n),i="audio-player-icon-id-prefix-";function o(e){var t=e.viewBox,a=void 0===t?"0 0 24 24":t,n=e.id,o=e.dPath,c=e.fill;return r().createElement("symbol",{id:i+n,key:n,viewBox:a,xmlns:"http://www.w3.org/2000/svg"},r().createElement("path",{d:o,fill:c||"#5a5a5a"}))}var c=[{id:"button-pause-playlist",dPath:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z",fill:"#4285f4"},{id:"button-pause",dPath:"M14 19h4V5h-4M6 19h4V5H6v14z"},{id:"button-play",dPath:"M8 5.14v14l11-7-11-7z"},{id:"button-track-list",viewBox:"-1 -1 23 23",dPath:"M19 9H2v2h17V9m0-4H2v2h17V5M2 15h13v-2H2v2m15-2v6l5-3-5-3z"},{id:"button-prev-track",dPath:"M6 6h2v12H6zm3.5 6l8.5 6V6z"},{id:"button-next-track",dPath:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"},{id:"button-repeat",dPath:"M17 17H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z"},{id:"button-repeat-one",dPath:"M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z"},{id:"button-shuffle",dPath:"M14.83 13.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13M14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4m-9.41 5.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41z"},{id:"button-sound-off",dPath:"M12 4L9.91 6.09 12 8.18M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21 21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.916 8.916 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63z"},{id:"button-sound-on",dPath:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z"},{id:"button-download",dPath:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"}];function l(){return r().createElement("svg",{className:"f3cc59"},c.map(o))}var u=a(38),s=a.n(u);function d(){for(var e=[],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var r=0,i=a;r<i.length;r++){var o=i[r];if(o)if("string"!=typeof o)for(var c in o)o[c]&&e.push(c);else e.push(o)}return e.join(" ")}var m="playing",f="paused",v="none",p=[v,"all","one"],b={isTrackListOpen:!0,activeIndex:0,isShuffleOn:!1,isMuted:!1,repeatingState:v},g=a(713),k=a.n(g);function h(e){var t=e.className,a=e.imageId;return r().createElement("svg",{className:t},r().createElement("use",{xlinkHref:a}))}function y(e){var t=e.onClick,a=e.imageId,n=e.isActive,o=e.ariaLabel,c=e.className,l=d("_7e7b1e",k()({},"d03524",n),c);return r().createElement("button",{"aria-label":o,className:l,onClick:t,type:"button"},r().createElement(h,{className:"_59d228",imageId:"#"+i+a}))}function E(e){return{minutes:String(Math.floor(e/60)),seconds:String(Math.floor(e%60)).padStart(2,"0")}}function C(e){var t=e.currentTime,a=e.fullTime,n=e.className,i=E(t),o=i.minutes,c=i.seconds,l=E(a),u=l.minutes,s=l.seconds;return r().createElement("span",{className:d("_547c58",n)},o,":",c," / ",u,":",s)}var S="undefined"!=typeof window,w="undefined"!=typeof navigator,M=w?navigator.userAgent:"",P=!(!w||!S)&&/iPad|iPhone|iPod/.test(M)&&!window.MSStream,L=!!w&&/(android)/i.test(M),N=!P&&!L&&S;function T(e){var t,a=(0,n.useState)(!1),i=s()(a,2),o=i[0],c=i[1],l=(0,n.useRef)(),u=e.className,m=e.isDisable,f=e.progress,v=e.onChange,p=e.ariaLabel,b=d("dd875e",u,(t={},k()(t,"_911595",o),k()(t,"_88628d",!0===m),t));return r().createElement("div",{className:b,onPointerDown:function(){c(!0)},onPointerUp:function(){c(!1)}},r().createElement("div",{className:"d51c7c"},r().createElement("div",{className:"_407fe2",style:{transform:"translateZ(0) scaleX(".concat(f||0,")")}})),r().createElement("div",{className:"_29c928"},r().createElement("div",{className:"_98d7c4",style:{left:"".concat(100*f,"%")}})),r().createElement("input",{"aria-label":p,className:"c405b1",defaultValue:0,max:1,min:0,onChange:function(){var e;v((e=l.current)?Number.parseFloat(e.value):0)},ref:l,step:.001,type:"range"}))}var x={play:"play",pause:"pause",seekbackward:"seekbackward",seekforward:"seekforward",previoustrack:"previoustrack",nexttrack:"nexttrack"};function O(e,t){if("undefined"!=typeof navigator&&"undefined"!=typeof MediaMetadata&&"mediaSession"in navigator&&(function(){if("undefined"!=typeof navigator&&"undefined"!=typeof MediaMetadata&&"mediaSession"in navigator)for(var e in navigator.mediaSession.metadata=null,x)navigator.mediaSession.setActionHandler(e,null)}(),navigator.mediaSession.metadata=new MediaMetadata(e),t))for(var a in t)navigator.mediaSession.setActionHandler(a,t[a])}function I(e){var t=e.isRender,a=e.children;return t?a:null}function V(e){var t=e.src,a=e.mediaMetadata,i=e.className,o=e.onDidMount,c=e.downloadFileName,l=e.useRepeatButton,u=(0,n.useRef)(),v=(0,n.useState)(0),p=s()(v,2),b=p[0],g=p[1],k=(0,n.useState)(0),h=s()(k,2),E=h[0],S=h[1],w=(0,n.useState)(N?.5:1),M=s()(w,2),P=M[0],L=M[1],x=(0,n.useState)(!1),V=s()(x,2),_=V[0],A=V[1],H=(0,n.useState)(f),j=s()(H,2),z=j[0],B=j[1],R=(0,n.useState)(!1),D=s()(R,2),W=D[0],F=D[1],U=_||0===P?"button-sound-off":"button-sound-on";function Z(){var e=u.current;if(e)return e;throw new Error("Audio tag is not exists")}function q(){Z().currentTime+=10}function X(){Z().currentTime-=10}function $(){Z().play()}return(0,n.useEffect)((function(){}),[]),(0,n.useEffect)((function(){var e=Z();o&&o(e)}),[o]),r().createElement("div",{className:d("_6a435a",i)},r().createElement("audio",{className:"fd1431",onEnded:function(){if(Z().currentTime=0,W)return g(0),void $();B(f),g(0)},onLoadedMetadata:function(){var e=Z();g(0),S(e.duration),e.volume=P},onPause:function(){B(f)},onPlay:function(){B(m),O(a||{title:t},{seekforward:q,seekbackward:X})},onTimeUpdate:function(){var e=Z();g(e.currentTime)},onVolumeChange:function(){var e=Z();A(e.muted),L(e.volume)},preload:"metadata",ref:u,src:t,volume:P},r().createElement("track",{kind:"captions",src:t})),z===m?r().createElement(y,{ariaLabel:"pause",imageId:"button-pause",onClick:function(){Z().pause()}}):r().createElement(y,{ariaLabel:"play",imageId:"button-play",onClick:$}),r().createElement(I,{isRender:!0===l},r().createElement(y,{ariaLabel:"repeat",imageId:"button-repeat",isActive:W,onClick:function(){F(!W)}})),r().createElement(C,{className:"cdb4fb",currentTime:b,fullTime:E}),r().createElement(T,{ariaLabel:"progress bar",onChange:function(e){var t=Z(),a=e*E;t.currentTime=a,g(a)},progress:b/E}),r().createElement(I,{isRender:N},r().createElement(y,{ariaLabel:"switch-sound",imageId:U,onClick:function(){var e=Z(),t=!e.muted;e.muted=t,A(t)}}),r().createElement(T,{ariaLabel:"volume bar",className:"_37ab58",onChange:function(e){Z().volume=e,L(e)},progress:P})),r().createElement("a",{className:"_188972",download:c||!0,href:t},r().createElement(y,{ariaLabel:"download",imageId:"button-download"})))}function _(e,t,a){var n=(t+a)%e;return n<0?n+e:n}function A(e,t,a){if(t-e<1)return e;var n=e+Math.floor(Math.random()*(t-e));return a&&a.includes(n)?A(e,t,a):n}var H="static";function j(e){var t=e.size,a=e.lineWidth,n=e.arcColor,i=e.circleColor,o=e.isShow,c=e.wrapperWidth,l=e.wrapperHeight,u=e.position,s=e.wrapperColor,m=e.wrapperPadding,f=e.className;if(!1===o)return null;var v=u||H,p=t||48,b={borderWidth:a,width:p,height:p,borderColor:i,borderTopColor:n},g={minHeight:p,minWidth:p,position:v,backgroundColor:s,width:c,height:l,padding:m};return r().createElement("div",{className:d("e48c57",f,k()({},"_3fad33",v===H)),style:g},r().createElement("div",{className:"_395527",style:b}))}function z(e){var t=e.trackCurrentTime,a=e.trackFullTime,n=e.onClickMuteVolume,i=e.isMuted,o=e.trackVolume,c=e.onChangeProgressBar,l=e.onChangeVolumeBar,u=i||0===o?"button-sound-off":"button-sound-on",s=0!==a;return r().createElement("div",{className:"ea5806"},r().createElement(C,{className:"_97eb17",currentTime:t,fullTime:a}),r().createElement(T,{ariaLabel:"progress bar",isDisable:!s,onChange:c,progress:s?t/a:0}),r().createElement(I,{isRender:N},r().createElement(y,{ariaLabel:"switch-sound",className:"",imageId:u,onClick:n}),r().createElement(T,{ariaLabel:"volume bar",className:"_0ffd4f",onChange:l,progress:o})))}function B(e){var t=e.onClickShuffle,a=e.onClickRepeat,n=e.onClickPrevTrack,i=e.onClickPlay,o=e.onClickNextTrack,c=e.onClickTrackList,l=e.playingState,u=e.isShuffleOn,s=e.repeatingState,d=e.isTrackListOpen,f=l===m;return r().createElement("div",{className:"_1b0bc4"},r().createElement(y,{ariaLabel:"shuffle",imageId:"button-shuffle",isActive:u,onClick:t}),r().createElement(y,{ariaLabel:"repeat",imageId:"one"===s?"button-repeat-one":"button-repeat",isActive:"one"===s||"all"===s,onClick:a}),r().createElement(y,{ariaLabel:"prev",imageId:"button-prev-track",onClick:n}),f?r().createElement(y,{ariaLabel:"pause",imageId:"button-pause",onClick:i}):r().createElement(y,{ariaLabel:"play",imageId:"button-play",onClick:i}),r().createElement(y,{ariaLabel:"next",imageId:"button-next-track",onClick:o}),r().createElement(y,{ariaLabel:"track-list",imageId:"button-track-list",isActive:d,onClick:c}))}function R(e){var t=e.onClickShuffle,a=e.onClickRepeat,n=e.onClickPrevTrack,i=e.onClickPlay,o=e.onClickNextTrack,c=e.onClickTrackList,l=e.onClickMuteVolume,u=e.onChangeProgressBar,s=e.onChangeVolumeBar,d=e.isMuted,m=e.playingState,f=e.isShuffleOn,v=e.repeatingState,p=e.isTrackListOpen,b=e.trackCurrentTime,g=e.trackVolume,k=e.trackFullTime,h=e.isLoading;return r().createElement("div",{className:"da7feb"},r().createElement(j,{className:"a6b10e",isShow:h,lineWidth:3,position:"absolute",size:26,wrapperHeight:26,wrapperPadding:0,wrapperWidth:26}),r().createElement(B,{isShuffleOn:f,isTrackListOpen:p,onClickNextTrack:o,onClickPlay:i,onClickPrevTrack:n,onClickRepeat:a,onClickShuffle:t,onClickTrackList:c,playingState:m,repeatingState:v}),r().createElement(z,{isMuted:d,onChangeProgressBar:u,onChangeVolumeBar:s,onClickMuteVolume:l,trackCurrentTime:b,trackFullTime:k,trackVolume:g}))}const D="_2acf08",W="_979981";function F(e){var t,a,o=e.isCurrentTrack,c=e.activeIndex,l=e.track,u=e.playingState,f=e.onClickPlay,v=e.setActiveIndex,p=e.isLoading,b=e.playByIndex,g=(0,n.useState)(0),y=s()(g,2),C=y[0],S=y[1],w=E(C),M=w.minutes,P=w.seconds,L=(0,n.useRef)(),N=l.content,T=l.mediaMetadata,x=l.src,O=T&&T.title,I=N||O||x,V=r().createElement(j,{isShow:p,lineWidth:4,position:"absolute",size:30,wrapperPadding:0}),_=d("cad308",k()({},"_3c8845",o));return r().createElement("li",{className:_},r().createElement("audio",{className:"_876f0f",muted:!0,onLoadedMetadata:function(){var e=function(){var e=L.current;if(e)return e;throw new Error("Audio tag is not exists")}();S(e.duration)},preload:"metadata",ref:L,src:x}),(t="#"+i+"button-play",a="play",u===m?o?r().createElement("button",{"aria-label":a,className:D,onClick:f,type:"button"},V,r().createElement(h,{className:"_466456",imageId:"#audio-player-icon-id-prefix-button-pause-playlist"})):r().createElement("button",{"aria-label":a,className:D,onClick:function(){v(c)},type:"button"},r().createElement(h,{className:W,imageId:t})):o?r().createElement("button",{"aria-label":a,className:D,onClick:f,type:"button"},V,r().createElement(h,{className:W,imageId:t})):r().createElement("button",{"aria-label":a,className:D,onClick:function(){b(c)},type:"button"},r().createElement(h,{className:W,imageId:t}))),r().createElement("div",{className:"_25eb27"},r().createElement("div",{className:"efdbcb"},I)),r().createElement("div",{className:"_13ff81"},M,":",P))}function U(e){var t=e.activeIndex,a=e.trackList,n=e.playingState,i=e.onClickPlay,o=e.setActiveIndex,c=e.isLoading,l=e.playByIndex;return r().createElement("ul",{className:"e41919"},a.map((function(e,a){var u=t===a;return r().createElement(F,{activeIndex:a,isCurrentTrack:u,isLoading:c&&u,key:e.src,onClickPlay:i,playByIndex:l,playingState:n,setActiveIndex:o,track:e})})))}function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e){var t=e.defaultState,a=e.className,i=e.onDidMount,o=e.trackList,c=function(e){return e?q(q({},b),e):b}(t),l=(0,n.useState)(0),u=s()(l,2),d=u[0],v=u[1],g=(0,n.useState)(0),k=s()(g,2),h=k[0],y=k[1],E=(0,n.useState)(N?.5:1),C=s()(E,2),S=C[0],w=C[1],M=(0,n.useState)(c.isMuted),P=s()(M,2),L=P[0],T=P[1],x=(0,n.useState)(f),V=s()(x,2),H=V[0],j=V[1],z=(0,n.useState)(c.activeIndex),B=s()(z,2),D=B[0],W=B[1],F=(0,n.useState)(c.isShuffleOn),Z=s()(F,2),X=Z[0],$=Z[1],G=(0,n.useState)(c.repeatingState),J=s()(G,2),K=J[0],Q=J[1],Y=(0,n.useState)(c.isTrackListOpen),ee=s()(Y,2),te=ee[0],ae=ee[1],ne=(0,n.useState)(!1),re=s()(ne,2),ie=re[0],oe=re[1],ce=(0,n.useState)(!1),le=s()(ce,2),ue=le[0],se=le[1],de=(0,n.useRef)();function me(){return de.current||document.createElement("audio")}function fe(){return o[D]||null}function ve(){var e=fe();return e?e.src:""}function pe(){var e=fe();if(e){var t=e.mediaMetadata;t&&O(t,{seekforward:be,seekbackward:ge,previoustrack:ye,nexttrack:he})}}function be(){me().currentTime+=10}function ge(){me().currentTime-=10}function ke(){var e=me();e.paused?e.play():e.pause()}function he(){Ee(_(o.length,D,1))}function ye(){Ee(_(o.length,D,-1))}function Ee(e){W(e),oe(!0),v(0),y(0),pe()}return(0,n.useEffect)((function(){var e=me();i&&i(e)}),[i]),r().createElement("div",{className:a||""},r().createElement("audio",{autoPlay:H===m,className:"_068c8f",key:"audio-tag",muted:L,onCanPlay:function(){ue&&(se(!1),ke())},onEnded:function(){var e=o.length;if(se(!0),e<=1)return W(0),void v(0);if(X)Ee(A(0,e,[D]));else{if("one"===K)return se(!1),void ke();"all"!==K?D<e-1?he():(se(!1),Ee(0)):he()}},onLoadedMetadata:function(){var e=me();oe(!1),y(e.duration),e.volume=S},onPause:function(){j(f)},onPlay:function(){j(m),pe()},onTimeUpdate:function(){var e=me();v(e.currentTime)},onVolumeChange:function(){var e=me();T(e.muted),w(e.volume)},preload:"metadata",ref:de,src:ve(),volume:S},r().createElement("track",{kind:"captions",src:ve()})),r().createElement(R,{isLoading:ie,isMuted:L,isShuffleOn:X,isTrackListOpen:te,onChangeProgressBar:function(e){me().currentTime=e*h},onChangeVolumeBar:function(e){me().volume=e},onClickMuteVolume:function(){var e=me(),t=!e.muted;e.muted=t,T(t)},onClickNextTrack:he,onClickPlay:ke,onClickPrevTrack:ye,onClickRepeat:function(){var e=(p.indexOf(K)+1)%p.length;Q(p[e])},onClickShuffle:function(){$(!X)},onClickTrackList:function(){ae(!te)},playingState:H,repeatingState:K,trackCurrentTime:d,trackFullTime:h,trackVolume:S}),r().createElement(I,{isRender:te},r().createElement(U,{activeIndex:D,isLoading:ie,onClickPlay:ke,playByIndex:function(e){W(e),oe(!0);var t=me();t.addEventListener("canplay",(function e(){oe(!1),t.removeEventListener("canplay",e,!1),t.play()}),!1)},playingState:H,setActiveIndex:Ee,trackList:o})))}}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}return a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(294)})();