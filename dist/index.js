(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Audio:()=>re,AudioPlayer:()=>Re,AudioPlayerControlSprite:()=>d,PlayListContext:()=>F,PlayListPanel:()=>Ye,PlayListProvider:()=>at});const a=require("react/jsx-runtime"),n=require("react"),i={div:"div",span:"span"};function s(...e){const t=[];for(const a of e)if(a)if("string"!=typeof a)for(const e in a)a[e]&&t.push(e);else t.push(a);return t.join(" ")}var l="e05e18";const r="audio-player-icon-id-prefix-",o="#5a5a5a",c="0 0 24 24",u="http://www.w3.org/2000/svg";function d(){return(0,a.jsxs)("svg",{className:l,children:[(0,a.jsx)("symbol",{id:`${r}button-pause-playlist`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z",fill:"#4285f4"})}),(0,a.jsx)("symbol",{id:`${r}button-pause`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M14 19h4V5h-4M6 19h4V5H6v14z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-play`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M8 5.14v14l11-7-11-7z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-track-list`,viewBox:"-1 -1 23 23",xmlns:u,children:(0,a.jsx)("path",{d:"M19 9H2v2h17V9m0-4H2v2h17V5M2 15h13v-2H2v2m15-2v6l5-3-5-3z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-prev-track`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M6 6h2v12H6zm3.5 6l8.5 6V6z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-next-track`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-repeat`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M17 17H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-repeat-one`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M13 15V9h-1l-2 1v1h1.5v4m5.5 2H7v-3l-4 4 4 4v-3h12v-6h-2M7 7h10v3l4-4-4-4v3H5v6h2V7z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-shuffle`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M14.83 13.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13M14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4m-9.41 5.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-sound-off`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M12 4L9.91 6.09 12 8.18M4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.26c-.67.51-1.42.93-2.25 1.17v2.07c1.38-.32 2.63-.95 3.68-1.81L19.73 21 21 19.73l-9-9M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.916 8.916 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71m-2.5 0c0-1.77-1-3.29-2.5-4.03v2.21l2.45 2.45c.05-.2.05-.42.05-.63z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-sound-on`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}button-download`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}play-list-menu`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}play-list-plus`,viewBox:"-1 -1 23 23",xmlns:u,children:(0,a.jsx)("path",{d:"M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z",fill:o})}),(0,a.jsx)("symbol",{id:`${r}trash-bin`,viewBox:c,xmlns:u,children:(0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z",fill:o})})]})}function f(e){const{className:t,imageId:n}=e;return(0,a.jsx)("svg",{className:t,children:(0,a.jsx)("use",{xlinkHref:n})})}const m="bff2b5",p="a45085",x="fde0b7",v="ac7b4a",h="ab5ee0";function b(e){const{onClick:t,imageId:n,isActive:l,ariaLabel:o,className:c,tag:u,hasBorder:d,isHideForNarrow:b}=e,g=s(m,{[p]:l,[x]:d,[h]:b},c),k=(0,a.jsx)(f,{className:v,imageId:`#${r}${n}`});return u===i.div?(0,a.jsx)("div",{className:g,children:k}):u===i.span?(0,a.jsx)("span",{className:g,children:k}):(0,a.jsx)("button",{"aria-label":o,className:g,onClick:t,type:"button",children:(0,a.jsx)(f,{className:v,imageId:`#${r}${n}`})})}var g="f9d0be",k="f79532",y="eee1d0",j="c44fc5",L="cc7be8",C="e0b58b",N="e13c85",S="d6d969",M="c0ae57";const w={defaultValue:0,max:1,min:0,step:.001};function P(e){const[t,i]=(0,n.useState)(!1),l=(0,n.useRef)(null),{className:r,isDisable:o,progress:c,onChange:u,ariaLabel:d,isHideForNarrow:f}=e,m=s(C,r,{[S]:t,[M]:!0===o,[N]:f});return(0,a.jsxs)("div",{className:m,onPointerDown:function(){i(!0)},onPointerUp:function(){i(!1)},children:[(0,a.jsx)("div",{className:L,children:(0,a.jsx)("div",{className:j,style:{transform:`translateZ(0) scaleX(${c||0})`}})}),(0,a.jsx)("div",{className:y,children:(0,a.jsx)("div",{className:k,style:{left:100*c+"%"}})}),(0,a.jsx)("input",{"aria-label":d,className:g,defaultValue:w.defaultValue,max:w.max,min:w.min,onChange:function(){u(function(){const{current:e}=l;return e?Number.parseFloat(e.value):0}())},ref:l,step:w.step,type:"range"})]})}function T(e){return{minutes:String(Math.floor(e/60)),seconds:String(Math.floor(e%60)).padStart(2,"0")}}var I="c7b08a";function V(e){const{currentTime:t,fullTime:n,className:i}=e,l=s(I,i),r=function(e,t){const{minutes:a,seconds:n}=T(e),{minutes:i,seconds:s}=T(t);return`${a}:${n} / ${i}:${s}`}(t,n);return(0,a.jsx)("span",{className:l,children:r})}const H=["nexttrack","pause","play","previoustrack","seekbackward","seekforward"];function B(e,t){var a;if("undefined"!=typeof navigator&&"undefined"!=typeof MediaMetadata&&"mediaSession"in navigator&&(function(){if("undefined"!=typeof navigator&&"undefined"!=typeof MediaMetadata&&"mediaSession"in navigator){navigator.mediaSession.metadata=null;for(const e of H)navigator.mediaSession.setActionHandler(e,null)}}(),navigator.mediaSession.metadata=new MediaMetadata(e),t))for(const e of H)navigator.mediaSession.setActionHandler(e,null!==(a=t[e])&&void 0!==a?a:null)}function $(){return Math.round(1e6*Math.random()).toString(16)}function z(){return Math.random()>.5?1:-1}function A(e,t){return e.src===t.src}function O(e){const{src:t,mediaMetadata:a,content:n}=e;let i={src:t};return a&&(i={...i,mediaMetadata:a}),n&&(i={...i,content:n}),i}const E=function(){const e={name:"",trackList:[]};return{createPlayList:()=>e,deletePlayList:e=>new Error("deletePlayList: overwrite me"),getAllPlayLists:()=>[e],getTrackById:e=>null,isInitialized:!1,removeTrackById:e=>new Error("removeTrack: overwrite me"),updatePlayList:(e,t)=>new Error("updatePlayList: overwrite me")}}(),F=(0,n.createContext)(E),R="Play list",W="No name playlist";var D="cf10f9",U="b8f0f4",_="f2a1b7";function q(e){const{className:t,track:i}=e,l=s(D,t),r=(0,n.useContext)(F),[o,c]=(0,n.useState)(0),{getAllPlayLists:u,updatePlayList:d,removeTrackById:f,isInitialized:m}=r,p=u(),x="-1",v=(0,n.useCallback)((e=>{const t=e.currentTarget,a=Number.parseInt(t.value,10),n=p.at(a),{src:s,mediaMetadata:l,content:r,preload:u,duration:m}=i;if(c(o+1),!n)return;const v=n.trackList.find((e=>A(e,i)));if(v)return void f(v.id);let h={id:$(),src:s};l&&(h={...h,mediaMetadata:l}),"string"==typeof r&&(h={...h,content:r}),"string"==typeof u&&(h={...h,preload:u}),"number"==typeof m&&(h={...h,duration:m});const b=[h,...n.trackList];d(n,{...n,trackList:b}),t.value=x}),[p,d,i,x,f,c,o]);return m?(0,a.jsxs)("label",{className:U,children:[(0,a.jsx)(b,{ariaLabel:"play list menu",className:l,imageId:"play-list-menu"}),(0,a.jsxs)("select",{className:_,defaultValue:x,onChange:v,children:[(0,a.jsx)("option",{disabled:!0,value:x,children:" "}),p.map(((e,t)=>{const n=e.trackList.find((e=>A(e,i))),s=e.name.trim()||W,l=`${n?"[✓]":"[_]"} ${s}`;return(0,a.jsx)("option",{value:t,children:l},String(t)+s)}))]},o)]}):null}const J=10,Z={paused:"paused",playing:"playing",stopped:"stopped"},X={all:"all",none:"none",one:"one"},{none:G,all:K,one:Q}=X,Y=[G,K,Q],ee={activeIndex:0,isMuted:!1,isShuffleOn:!1,isTrackListOpen:!0,repeatingState:G};function te(e){return function(){e.currentTime=0,e.addEventListener("canplay",(function t(){e.removeEventListener("canplay",t,!1),e.play().then((()=>{e.pause(),e.currentTime=0}))}),!1)}}var ae="ce6c17",ne="e22549",ie="a3d9e7",se="cae029",le="e154e9";function re(e){const{className:t,downloadFileName:l,duration:r=0,mediaMetadata:o,onDidMount:c,preload:u="auto",src:d,useRepeatButton:f=!1}=e,m=(0,n.useRef)(null),[p,x]=(0,n.useState)(0),[v,h]=(0,n.useState)(r),[g,k]=(0,n.useState)(1),[y,j]=(0,n.useState)(!1),[L,C]=(0,n.useState)(Z.paused),[N,S]=(0,n.useState)(!1),M=y||0===g?"button-sound-off":"button-sound-on";function w(){const e=m.current;if(e)return e;throw new Error("Audio tag is not exists")}function T(){w().play()}function I(){w().currentTime+=J}function H(){w().currentTime-=J}(0,n.useEffect)((()=>{const e=w();c&&c(e)}),[c]);const $=o?{mediaMetadata:o,src:d}:{src:d};return(0,a.jsxs)("div",{className:s(ae,t),children:[(0,a.jsx)("audio",{className:ne,onEnded:function(){if(w().currentTime=0,N)return x(0),void T();C(Z.paused),x(0)},onLoadedMetadata:function(){const e=w();x(0),h(e.duration),e.volume=g},onPause:function(){C(Z.paused)},onPlay:function(){C(Z.playing);const e={seekbackward:H,seekforward:I,stop:te(w())};B(o||{title:d},e)},onTimeUpdate:function(){const e=w();x(e.currentTime)},onVolumeChange:function(){const e=w();j(e.muted),k(e.volume)},preload:u,ref:m,src:d,volume:g,children:(0,a.jsx)("track",{kind:"captions",src:d})}),L===Z.playing?(0,a.jsx)(b,{ariaLabel:"pause",imageId:"button-pause",onClick:function(){w().pause()}}):(0,a.jsx)(b,{ariaLabel:"play",imageId:"button-play",onClick:T}),f?(0,a.jsx)(b,{ariaLabel:"repeat",imageId:"button-repeat",isActive:N,onClick:function(){S(!N)}}):null,(0,a.jsx)(V,{className:le,currentTime:p,fullTime:v}),(0,a.jsx)(P,{ariaLabel:"progress bar",onChange:function(e){const t=w(),a=e*v;t.currentTime=a,x(a)},progress:p/v}),(0,a.jsx)(b,{ariaLabel:"switch-sound",imageId:M,isHideForNarrow:!0,onClick:function(){const e=w(),t=!e.muted;e.muted=t,j(t)}}),(0,a.jsx)(P,{ariaLabel:"volume bar",className:se,isHideForNarrow:!0,onChange:function(e){w().volume=e,k(e)},progress:g}),(0,a.jsx)("a",{"aria-label":"download",className:ie,download:null==l||l,href:d,children:(0,a.jsx)(b,{ariaLabel:"download",imageId:"button-download",tag:i.span})}),(0,a.jsx)(q,{track:$})]})}function oe(e,t,a){const n=(t+a)%e;return n<0?n+e:n}function ce(e,t,a){if(t-e<1)return e;const n=e+Math.floor(Math.random()*(t-e));return a&&a.includes(n)?ce(e,t,a):n}var ue="e2ec9c",de="d9b0ab",fe="c82f2f",me="da10e0";const pe={absolute:"absolute",fixed:"fixed",relative:"relative",static:"static"},{size:xe}={size:48};function ve(e){const{size:t,lineWidth:n,arcColor:i,circleColor:l,isShow:r,wrapperWidth:o,wrapperHeight:c,position:u,wrapperColor:d,wrapperPadding:f,className:m}=e;if(!1===r)return null;const p=null!=u?u:pe.static,x=null!=t?t:xe,v={borderColor:l,borderTopColor:i,borderWidth:n,height:x,width:x},h={backgroundColor:d,height:c,minHeight:x,minWidth:x,padding:f,position:p,width:o};return(0,a.jsx)("div",{className:s(fe,m,{[me]:p===pe.static}),style:h,children:(0,a.jsx)("div",{className:de,style:v})})}var he="fa9e1a",be="bcf8d9",ge="b31ddf";const{one:ke,all:ye}=X;function je(e){const{onClickShuffle:t,onClickRepeat:n,onClickPrevTrack:i,onClickPlay:s,onClickNextTrack:l,onClickTrackList:r,playingState:o,isShuffleOn:c,repeatingState:u,isTrackListOpen:d}=e,f=o===Z.playing;return(0,a.jsxs)("div",{className:ge,children:[(0,a.jsx)(b,{ariaLabel:"shuffle",imageId:"button-shuffle",isActive:c,onClick:t}),(0,a.jsx)(b,{ariaLabel:"repeat",imageId:u===ke?"button-repeat-one":"button-repeat",isActive:u===ke||u===ye,onClick:n}),(0,a.jsx)(b,{ariaLabel:"prev",imageId:"button-prev-track",onClick:i}),f?(0,a.jsx)(b,{ariaLabel:"pause",imageId:"button-pause",onClick:s}):(0,a.jsx)(b,{ariaLabel:"play",imageId:"button-play",onClick:s}),(0,a.jsx)(b,{ariaLabel:"next",imageId:"button-next-track",onClick:l}),(0,a.jsx)(b,{ariaLabel:"track-list",imageId:"button-track-list",isActive:d,onClick:r})]})}var Le="bd925c",Ce="df7adc",Ne="da6e9c";function Se(e){const{trackCurrentTime:t,trackFullTime:n,onClickMuteVolume:i,isMuted:s,trackVolume:l,onChangeProgressBar:r,onChangeVolumeBar:o}=e,c=s||0===l?"button-sound-off":"button-sound-on",u=0!==n;return(0,a.jsxs)("div",{className:Le,children:[(0,a.jsx)(V,{className:Ce,currentTime:t,fullTime:n}),(0,a.jsx)(P,{ariaLabel:"progress bar",isDisable:!u,onChange:r,progress:u?t/n:0}),(0,a.jsx)(b,{ariaLabel:"switch-sound",className:"",imageId:c,isHideForNarrow:!0,onClick:i}),(0,a.jsx)(P,{ariaLabel:"volume bar",className:Ne,isHideForNarrow:!0,onChange:o,progress:l})]})}function Me(e){const{onClickShuffle:t,onClickRepeat:n,onClickPrevTrack:i,onClickPlay:s,onClickNextTrack:l,onClickTrackList:r,onClickMuteVolume:o,onChangeProgressBar:c,onChangeVolumeBar:u,isMuted:d,playingState:f,isShuffleOn:m,repeatingState:p,isTrackListOpen:x,trackCurrentTime:v,trackVolume:h,trackFullTime:b,isLoading:g}=e;return(0,a.jsxs)("div",{className:he,children:[(0,a.jsx)(ve,{className:be,isShow:g,lineWidth:3,position:"absolute",size:26,wrapperHeight:26,wrapperPadding:0,wrapperWidth:26}),(0,a.jsx)(je,{isShuffleOn:m,isTrackListOpen:x,onClickNextTrack:l,onClickPlay:s,onClickPrevTrack:i,onClickRepeat:n,onClickShuffle:t,onClickTrackList:r,playingState:f,repeatingState:p}),(0,a.jsx)(Se,{isMuted:d,onChangeProgressBar:c,onChangeVolumeBar:u,onClickMuteVolume:o,trackCurrentTime:v,trackFullTime:b,trackVolume:h})]})}var we="d6f4a6",Pe="b48888",Te="b28ca0",Ie="b3c7d7",Ve="bbcf1f",He="a7a82b",Be="ef10a4",$e="c4d018",ze="c0f54f",Ae="bee42b",Oe="bef821";function Ee(e){const{isCurrentTrack:t,activeIndex:i,track:l,playingState:o,onClickPlay:c,setActiveIndex:u,isLoading:d,playByIndex:m}=e,{src:p,duration:x=0,preload:v="auto"}=l,[h,b]=(0,n.useState)(x),{minutes:g,seconds:k}=T(h),y=(0,n.useRef)(null),j=function(e){const{content:t,mediaMetadata:a,src:n}=e;if(t)return t;const i=null==a?void 0:a.title;if(i)return i;const s=n.split("/").pop();if(!s)return"";const l=s.lastIndexOf(".");return l>0?s.slice(0,l):s}(l),L=(0,a.jsx)(ve,{isShow:d,lineWidth:4,position:"absolute",size:30,wrapperPadding:0}),C=s(Pe,{[Te]:t});function N(){u(i)}function S(){m(i)}return(0,a.jsxs)("li",{className:C,children:[(0,a.jsx)("audio",{className:Ie,muted:!0,onLoadedMetadata:function(){const e=function(){const e=y.current;if(e)return e;throw new Error("Audio tag is not exists")}();b(e.duration)},preload:v,ref:y,src:p}),function(){const e=`#${r}button-play`,n=`#${r}button-pause-playlist`,i="play";return o===Z.playing?t?(0,a.jsxs)("button",{"aria-label":i,className:Ve,onClick:c,type:"button",children:[L,(0,a.jsx)(f,{className:Be,imageId:n})]}):(0,a.jsx)("button",{"aria-label":i,className:Ve,onClick:N,type:"button",children:(0,a.jsx)(f,{className:He,imageId:e})}):t?(0,a.jsxs)("button",{"aria-label":i,className:Ve,onClick:c,type:"button",children:[L,(0,a.jsx)(f,{className:He,imageId:e})]}):(0,a.jsx)("button",{"aria-label":i,className:Ve,onClick:S,type:"button",children:(0,a.jsx)(f,{className:He,imageId:e})})}(),(0,a.jsx)("div",{className:$e,children:(0,a.jsx)("div",{className:Oe,children:j})}),(0,a.jsx)("div",{className:Ae,children:`${g}:${k}`}),(0,a.jsx)(q,{className:ze,track:l})]})}function Fe(e){const{activeIndex:t,trackList:n,playingState:i,onClickPlay:s,setActiveIndex:l,isLoading:r,playByIndex:o}=e;return(0,a.jsx)("ul",{className:we,children:n.map(((e,n)=>{const c=t===n;return(0,a.jsx)(Ee,{activeIndex:n,isCurrentTrack:c,isLoading:!!r&&c,onClickPlay:s,playByIndex:o,playingState:i,setActiveIndex:l,track:e},e.src)}))})}function Re(e){var t,i;const{defaultState:s,className:l,onDidMount:r,trackList:o}=e,c=function(e){return e?{...ee,...e}:ee}(s),u=null!==(i=null===(t=o.at(0))||void 0===t?void 0:t.duration)&&void 0!==i?i:0,[d,f]=(0,n.useState)(0),[m,p]=(0,n.useState)(u),[x,v]=(0,n.useState)(1),[h,b]=(0,n.useState)(c.isMuted),[g,k]=(0,n.useState)(Z.paused),[y,j]=(0,n.useState)(c.activeIndex),[L,C]=(0,n.useState)(c.isShuffleOn),[N,S]=(0,n.useState)(c.repeatingState),[M,w]=(0,n.useState)(c.isTrackListOpen),[P,T]=(0,n.useState)(!1),[I,V]=(0,n.useState)(!1),H=(0,n.useRef)(null);function $(){return H.current||(console.error("Audio tag is not exists"),document.createElement("audio"))}function z(){return o[y]||null}function A(e){j(e),T(!0),f(0),p(0),W()}function O(){A(oe(o.length,y,1))}function E(){A(oe(o.length,y,-1))}function F(){$().currentTime+=J}function R(){$().currentTime-=J}function W(){const e=z();if(!e)return;const{mediaMetadata:t}=e;t&&B(t,{nexttrack:O,previoustrack:E,seekbackward:R,seekforward:F,stop:te($())})}function D(){const e=z();return e?e.src:""}function U(){const e=$();e.paused?e.play():e.pause()}return(0,n.useEffect)((()=>{const e=$();r&&r(e)}),[r]),(0,a.jsxs)("div",{className:null!=l?l:"",children:[(0,a.jsx)("audio",{autoPlay:g===Z.playing,className:ue,muted:h,onCanPlay:function(){I&&(V(!1),U())},onEnded:function(){const{one:e,all:t,none:a}=X,n=o.length;if(V(!0),n<=1)return j(0),void f(0);if(L)A(ce(0,n,[y]));else{if(N===e)return V(!1),void U();N!==t?y<n-1?O():(V(!1),A(0)):O()}},onLoadedMetadata:function(){const e=$();T(!1),p(e.duration),e.volume=x},onPause:function(){k(Z.paused)},onPlay:function(){k(Z.playing),W()},onTimeUpdate:function(){const e=$();f(e.currentTime)},onVolumeChange:function(){const e=$();b(e.muted),v(e.volume)},preload:"metadata",ref:H,src:D(),volume:x,children:(0,a.jsx)("track",{kind:"captions",src:D()})},"audio-tag"),(0,a.jsx)(Me,{isLoading:P,isMuted:h,isShuffleOn:L,isTrackListOpen:M,onChangeProgressBar:function(e){$().currentTime=e*m},onChangeVolumeBar:function(e){$().volume=e},onClickMuteVolume:function(){const e=$(),t=!e.muted;e.muted=t,b(t)},onClickNextTrack:O,onClickPlay:U,onClickPrevTrack:E,onClickRepeat:function(){const e=(Y.indexOf(N)+1)%Y.length;S(Y[e])},onClickShuffle:function(){C(!L)},onClickTrackList:function(){w(!M)},playingState:g,repeatingState:N,trackCurrentTime:d,trackFullTime:m,trackVolume:x}),M?(0,a.jsx)(Fe,{activeIndex:y,isLoading:P,onClickPlay:U,playByIndex:function(e){j(e),T(!0);const t=$();t.addEventListener("canplay",(function e(){T(!1),t.removeEventListener("canplay",e,!1),t.play()}),!1)},playingState:g,setActiveIndex:A,trackList:o}):null]})}var We="dd564f",De="b59941",Ue="a7ad0a",_e="fe1637",qe="f500e1",Je="ecef14",Ze="aec634",Xe="e85b98",Ge="a470ec";function Ke(e){const{playList:t}=e,{trackList:i,name:s}=t,l=(0,n.useRef)(null),r=(0,n.useContext)(F),{updatePlayList:o,deletePlayList:c,getAllPlayLists:u}=r,d=u(),f=i.length>0;function m(){var e;return null!==(e=l.current)&&void 0!==e?e:(()=>{throw new Error("Can not get input of play list name")})()}const p=(0,n.useCallback)((()=>{o(t,{name:m().value.trim(),trackList:i})}),[o,t,i]),x=(0,n.useCallback)((()=>{c(t)}),[c,t]),v=d.length>1&&0===i.length?Ge:Xe;return(0,a.jsxs)("div",{className:Ze,children:[(0,a.jsxs)("div",{className:_e,children:[(0,a.jsx)("input",{className:qe,defaultValue:s,onBlur:p,placeholder:W,ref:l,type:"text"}),(0,a.jsx)(b,{ariaLabel:"delete",className:v,imageId:"trash-bin",onClick:x})]}),f?(0,a.jsx)(Re,{trackList:i.map(O)}):(0,a.jsx)("p",{className:Je,children:"∅"})]})}function Qe(e,t){return(0,a.jsx)(Ke,{playList:e},`${e.name}-${String(t)}`)}function Ye(){const e=(0,n.useContext)(F),{createPlayList:t,getAllPlayLists:i}=e,s=i();return(0,a.jsxs)("div",{className:Ue,children:[s.map(Qe),(0,a.jsx)("div",{className:De,children:(0,a.jsx)(b,{ariaLabel:"add play list",className:We,imageId:"play-list-plus",onClick:t})})]})}const et="react-audio-player-play-list-storage-key-v.1.0.0";function tt(){return[{name:R,trackList:[]}]}function at(e){const{children:t}=e,[i,s]=(0,n.useState)(function(){if("undefined"==typeof localStorage)return tt();const e=localStorage.getItem(et);return"string"==typeof e&&e.trim()?JSON.parse(e):tt()}()),l=(0,n.useCallback)((e=>{const t=i.length;for(let a=0;a<t;a+=1){const{trackList:t}=i[a],n=t.length;for(let a=0;a<n;a+=1){const n=t[a];if(n.id===e)return n}}return null}),[i]),r=(0,n.useCallback)((()=>{const e={name:`${R} ${Array.from({length:4}).map($).sort(z).join("").slice(0,4)}`,trackList:[]},t=[...i,e];return s(t),e}),[i,s]),o=(0,n.useCallback)((()=>[...i]),[i]),c=(0,n.useCallback)(((e,t)=>{const a=[...i],n=a.indexOf(e);return n<0?new Error("Old Play List is not exists."):(a[n]=t,s(a),t)}),[i,s]),u=(0,n.useCallback)((e=>{const t=[...i],a=t.indexOf(e);return a<0?new Error("Play List is not exists."):(t.splice(a,1),s(t),null)}),[i,s]),d=(0,n.useCallback)((e=>{const t=i.length;for(let a=0;a<t;a+=1){const t=i[a],{trackList:n}=t,s=n.length;for(let a=0;a<s;a+=1)if(n[a].id===e){const e=[...n];return e.splice(a,1),c(t,{...t,trackList:e}),null}}return new Error("Track is not exists.")}),[i,c]),f=(0,n.useMemo)((()=>({createPlayList:r,deletePlayList:u,getAllPlayLists:o,getTrackById:l,isInitialized:!0,removeTrackById:d,updatePlayList:c})),[r,o,c,u,d,l]);return(0,n.useEffect)((()=>{var e;e=i,"undefined"!=typeof localStorage&&localStorage.setItem(et,JSON.stringify(e))}),[i]),(0,a.jsx)(F.Provider,{value:f,children:t})}module.exports=t})();
//# sourceMappingURL=index.js.map