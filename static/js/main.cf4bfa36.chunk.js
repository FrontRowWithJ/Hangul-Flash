(this["webpackJsonpkorean-flash-cards"]=this["webpackJsonpkorean-flash-cards"]||[]).push([[0],{12:function(n,e,s){},13:function(n,e,s){},14:function(n,e,s){},16:function(n,e,s){"use strict";s.r(e);var o=s(0),t=s.n(o),u=s(7),c=s.n(u),r=(s(12),s(13),s(6)),l=s(2),d=(s(14),[{symbol:"\uc544",sound:"a (aa)"},{symbol:"\uc5b4",sound:"eo (aww)"},{symbol:"\uc624",sound:"o (oh)"},{symbol:"\uc6b0",sound:"u (oo)"},{symbol:"\uc73c",sound:"eu (uh)"},{symbol:"\uc774",sound:"i (ee)"},{symbol:"\uc560",sound:"ae (eh)"},{symbol:"\uc5d0",sound:"e (eh)"},{symbol:"\uc678",sound:"oe (weh)"},{symbol:"\uc704",sound:"wi (wee)"},{symbol:"\u1100",sound:"g,k"},{symbol:"\u1102",sound:"n"},{symbol:"\u1103",sound:"d/t"},{symbol:"\u1105",sound:"r,l"},{symbol:"\u1106",sound:"m"},{symbol:"\u1107",sound:"b/p"},{symbol:"\u1109",sound:"s,sh"},{symbol:"\u110c",sound:"j,ch"},{symbol:"\u110e",sound:"ch"},{symbol:"\u110f",sound:"k"},{symbol:"\u1110",sound:"t"},{symbol:"\u1111",sound:"p"},{symbol:"\u1112",sound:"h"},{symbol:"\u1101",sound:"kk"},{symbol:"\u1104",sound:"tt"},{symbol:"\u1108",sound:"pp"},{symbol:"\u110a",sound:"ss"},{symbol:"\u110d",sound:"jj"},{symbol:"\uc57c",sound:"ya"},{symbol:"\uc5ec",sound:"yeo"},{symbol:"\uc694",sound:"yo"},{symbol:"\uc720",sound:"yu"},{symbol:"\uc598",sound:"yae"},{symbol:"\uc608",sound:"ye"},{symbol:"\uc640",sound:"wa"},{symbol:"\uc65c",sound:"wae (wey)"},{symbol:"\uc6cc",sound:"weo"},{symbol:"\uc6e8",sound:"we (weh)"},{symbol:"\uc758",sound:"ui (wee)"}]),a=s(1),b=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n.length-1;e>=0;e--){var s=Math.random()*e|0,o=n[e];n[e]=n[s],n[s]=o}return n},y=function(){var n=Object(o.useState)(!0),e=Object(l.a)(n,2),s=e[0],t=e[1],u=function(n){var e=Object(o.useState)(0),s=Object(l.a)(e,2),t=s[0],u=s[1],c=Object(o.useState)(0),d=Object(l.a)(c,2),a=d[0],y=d[1],i=Object(o.useState)(b(Object(r.a)(Array(n).keys()))),m=Object(l.a)(i,2),j=m[0],h=m[1];return[t,function(){a===n&&(h(b(Object(r.a)(Array(n).keys()))),y(0)),u(j[a]),y((function(n){return n+1}))}]}(d.length),c=Object(l.a)(u,2),y=c[0],i=c[1],m=d[y],j=Object(o.useRef)(null),h=Object(o.useCallback)((function(){i(),t(!0),j.current.style.color=s?"":"white"}),[i,s]);return Object(o.useEffect)((function(){var n=function(n){return" "===n.key?h():0},e=j.current,s=function(){return e.style.color=""};return document.body.addEventListener("keypress",n),e.addEventListener("transitioncancel",s),function(){document.body.removeEventListener("keypress",n),e.removeEventListener("transitioncancel",s)}}),[h]),Object(a.jsxs)("div",{className:"card",onClick:function(n){n.target.classList.contains("button")?t(!s):h()},children:[Object(a.jsx)("span",{className:"center card-symbol",children:m.symbol}),Object(a.jsx)("div",{className:"card-sound",children:Object(a.jsxs)("div",{ref:j,className:"card-sound-inner",style:{transform:"rotateX(".concat(s?0:180,"deg)")},onTransitionEnd:function(){return j.current.style.color=""},children:[Object(a.jsx)("div",{className:"center button",children:"Reveal"}),Object(a.jsx)("div",{className:"center button",children:m.sound})]})})]})},i=function(){return Object(a.jsx)(y,{})},m=function(n){n&&n instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,o=e.getFID,t=e.getFCP,u=e.getLCP,c=e.getTTFB;s(n),o(n),t(n),u(n),c(n)}))};c.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(i,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.cf4bfa36.chunk.js.map