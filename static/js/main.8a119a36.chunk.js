(this["webpackJsonpreact-intl-example"]=this["webpackJsonpreact-intl-example"]||[]).push([[1],{36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(28),c=a.n(r),j=(a(36),a(20)),b=a(17),i=a(9),l=a(26),u=a(14),o=a(27),m=a(0),x="en";function d(e){switch(e){case"ar":return"rtl";case"en":case"es-MX":default:return"ltr"}}"es-MX"===navigator.language?x="es-MX":"ar"===navigator.language&&(x="ar");var O=function(){var e=Object(n.useState)(x),t=Object(j.a)(e,2),s=t[0],r=t[1],c=Object(n.useState)(null),i=Object(j.a)(c,2),l=i[0],u=i[1];return Object(n.useEffect)((function(){return function(e){switch(e){case"ar":return a.e(5).then(a.t.bind(null,48,3));case"en":return a.e(0).then(a.t.bind(null,49,3));case"es-MX":return a.e(6).then(a.t.bind(null,50,3));default:return a.e(0).then(a.t.bind(null,49,3))}}(s).then(u)}),[s]),l?Object(m.jsx)(b.a,{locale:s,messages:l,children:Object(m.jsx)(g,{locale:s,direction:d(s),onLocaleChange:function(e){return r(e)}})}):null};function g(e){var t=e.locale,a=e.direction,n=e.onLocaleChange,s=Object(i.a)();return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{textAlign:"center"},children:Object(m.jsxs)("select",{value:t,onChange:function(e){return n(e.target.value)},children:[Object(m.jsx)("option",{value:"en",children:"en"}),Object(m.jsx)("option",{value:"es-MX",children:"es-MX"}),Object(m.jsx)("option",{value:"ar",children:"ar"})]})}),Object(m.jsxs)("div",{dir:a,style:{padding:20},"data-testid":"examples",children:[Object(m.jsx)("h3",{children:"Declarative examples"}),Object(m.jsx)(l.a,{id:"message.simple"}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{id:"message.argument",values:{name:"John"}}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{id:"message.plural",values:{count:6}}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{id:"message.select",values:{gender:"female"}}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{id:"message.text-format",values:{b:function(e){return Object(m.jsx)("b",{children:e})}}}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{id:"message.number-format",values:{num:7500}}),Object(m.jsx)("br",{}),Object(m.jsx)(l.a,{id:"message.currency-format",values:{amount:7.5}}),Object(m.jsx)("br",{}),Object(m.jsx)(u.c,{value:7500}),Object(m.jsx)("br",{}),Object(m.jsx)(u.c,{value:7.5,style:"currency",currency:"USD"})," ",Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{value:Date.now(),year:"numeric",month:"long",day:"2-digit"}),Object(m.jsx)("br",{}),Object(m.jsx)(u.d,{value:Date.now()}),Object(m.jsx)("br",{}),Object(m.jsx)(o.a,{value:0,numeric:"auto",updateIntervalInSeconds:1}),Object(m.jsx)("br",{}),Object(m.jsx)(u.b,{type:"conjunction",value:["foo","bar","baz"]}),Object(m.jsx)("h3",{children:"Imperative examples"}),s.formatMessage({id:"message.simple"}),Object(m.jsx)("br",{}),s.formatMessage({id:"message.argument"},{name:"John"}),Object(m.jsx)("br",{}),s.formatMessage({id:"message.plural"},{count:5}),Object(m.jsx)("br",{}),s.formatMessage({id:"message.select"},{gender:"female"}),Object(m.jsx)("br",{}),s.formatMessage({id:"message.text-format"},{b:function(e){return Object(m.jsx)("b",{children:e})}}),Object(m.jsx)("br",{}),s.formatMessage({id:"message.number-format"},{num:7500}),Object(m.jsx)("br",{}),s.formatMessage({id:"message.currency-format"},{amount:7.5}),Object(m.jsx)("br",{}),s.formatNumber(7500),Object(m.jsx)("br",{}),s.formatNumber(7.5,{style:"currency",currency:"USD"}),Object(m.jsx)("br",{}),s.formatDate(Date.now(),{year:"numeric",month:"long",day:"2-digit"}),Object(m.jsx)("br",{}),s.formatTime(Date.now()),Object(m.jsx)("br",{}),s.formatRelativeTime(-5,"second",{style:"narrow"}),Object(m.jsx)("br",{}),s.formatList(["foo","bar","baz"],{type:"conjunction"})]})]})}var f=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),f()}},[[46,2,3]]]);
//# sourceMappingURL=main.8a119a36.chunk.js.map