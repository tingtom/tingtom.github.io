(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=(n(3),n(12)),r=n(10),l=n(11),c=n(36),m=n(37),s=i.b.div.withConfig({displayName:"Wrapper__Title",componentId:"sc-1t7jmk7-0"})(["position:absolute;top:-3.8rem;left:0;width:100%;display:flex;justify-content:space-between;align-items:center;svg{margin-right:10px;}"]),p=i.b.section.withConfig({displayName:"Wrapper",componentId:"sc-1t7jmk7-1"})(["position:relative;background-color:",";border-radius:5px;margin-top:6rem;padding:1.5rem;"," ",""],r.a.whiteish,function(e){return e.short?"margin-top: 3rem;":""},function(e){return e.bottom?"padding-bottom: ".concat(e.bottom):""});t.a=function(e){return o.a.createElement(p,{short:e.short,bottom:e.bottom},o.a.createElement(s,{className:"text-center"},o.a.createElement("div",null,e.back&&o.a.createElement(l.Link,{to:e.back},o.a.createElement(c.a,{icon:m.c})," Back")),e.url&&o.a.createElement(l.Link,{to:e.url},o.a.createElement("h1",null,e.title))||o.a.createElement("h1",null,e.title),o.a.createElement("div",null)),e.children)}},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(17),r=n(157),l=n(3),c=n(10),m=n(12),s=n(286),p=n.n(s),u=(n(287),n(288),n(289),n(290),n(291),n(155),Object(m.b)(l.Row).withConfig({displayName:"Post__Content",componentId:"sc-1kohatj-0"})(["table{width:100%;border-spacing:0;}p{font-size:16px;line-height:22px;& + table,& + iframe{margin-top:1rem;}a{color:",";font-weight:bold;}}img{width:100%;display:block;}h2{margin:1rem 0;}"],c.a.blue));t.default=function(e){var t=Object(i.useRouteData)(),n=t.title,c=t.contents;return Object(a.useEffect)(function(){p.a.highlightAll()}),o.a.createElement(l.Grid,null,o.a.createElement(r.a,{title:n,back:"/blog"},o.a.createElement(u,null,o.a.createElement(l.Col,{dangerouslySetInnerHTML:{__html:c}}))))}}}]);