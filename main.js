!function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],p=0,m=[];p<c.length;p++)i=c[p],a[i]&&m.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={3:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"templates/"+({1:"vendors~src/containers/Post~src/pages/blog~src/pages/index",2:"vendors~src/pages/blog~src/pages/index",4:"src/containers/Post",5:"src/containers/Recipe",6:"src/pages/404",7:"src/pages/blog",8:"src/pages/index",9:"src/pages/projects",10:"src/pages/recipes",11:"src/pages/tealog"}[e]||e)+".js"}(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([75,0,12]),n()}({10:function(e,t,n){"use strict";t.a={yellow:"#FBC351",blue:"#204e5e",dark:"#191919",white:"#fff",whiteish:"#eee",grey:"#ddd",border:"rgba(0,0,0,0.05)"}},137:function(e,t,n){var r={".":20,"./":20,"./index":20,"./index.js":20};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=137},145:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),a=n.n(r),o=n(34),i=n.n(o),c=n(64),l=n(26);if(t.default=l.a,"undefined"!=typeof document){var s=document.getElementById("root"),u=s.hasChildNodes()?i.a.hydrate:i.a.render,p=function(e){u(a.a.createElement(c.AppContainer,null,a.a.createElement(e,null)),s)};p(l.a),e&&e.hot&&e.hot.accept("./App",function(){p(l.a)})}}.call(this,n(146)(e))},26:function(e,t,n){"use strict";var r=n(60),a=n.n(r),o=n(0),i=n.n(o),c=n(17),l=n(11),s=n(12),u=n(10),p=n(3),m=Object(s.b)(p.Grid).withConfig({displayName:"Header",componentId:"zk4l1p-0"})(["padding:0.5rem 1rem;background-color:",";img{width:100%;max-width:90px;}"],u.a.blue),g=Object(s.b)(p.Row).withConfig({displayName:"Header__Nav",componentId:"zk4l1p-1"})(["margin:0;& > div{padding:0 1.5rem;&:first-child{padding-left:0;}a{font-size:18px;white-space:nowrap;}}"]),d=function(){return i.a.createElement(m,{tagName:"header",fluid:!0},i.a.createElement(p.Row,{middle:"xs",center:"xs",between:"md"},i.a.createElement(p.Col,{xs:!0,className:"shrink"},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:"/images/logo.png"}))),i.a.createElement(p.Col,{xs:!0,className:"shrink"},i.a.createElement(g,{tagName:"nav",center:"xs"},i.a.createElement(p.Col,{xs:!0},i.a.createElement(l.Link,{to:"/"},"Home")),i.a.createElement(p.Col,{xs:!0},i.a.createElement(l.Link,{to:"/projects"},"Projects")),i.a.createElement(p.Col,{xs:!0},i.a.createElement(l.Link,{to:"/blog"},"Blog")),i.a.createElement(p.Col,{xs:!0},i.a.createElement(l.Link,{to:"/tealog"},"Tea review"))))))},f=n(36),h=n(22),b=n(37),v=Object(s.b)(p.Grid).withConfig({displayName:"Footer",componentId:"ks2858-0"})(["padding:1rem;p{margin:0;color:",";font-size:14px;}"],u.a.white),w=Object(s.b)(p.Col).withConfig({displayName:"Footer__Social",componentId:"ks2858-1"})(["color:",";line-height:0;a + a{margin-left:1rem;}"],u.a.white),x=[{icon:h.c,url:"//twitter.com/tingtom2"},{icon:b.f,url:"mailto:footer@tingtom.co.uk"},{icon:h.d,url:"//www.youtube.com/channel/UC-7aXeLR33mDMYIYanLii2A"},{icon:h.a,url:"//bitbucket.org/tingtom"},{icon:h.b,url:"//github.com/tingtom"}],E=function(){return i.a.createElement(v,{tagName:"footer",fluid:!0},i.a.createElement(p.Row,{middle:"xs"},i.a.createElement(p.Col,{xs:12,md:4},i.a.createElement("p",null,"Thomas Mathews © 2020")),i.a.createElement(w,{xs:12,md:4,className:"text-center"},x.map(function(e){return i.a.createElement("a",{href:e.url,target:"_blank",key:e.url},i.a.createElement(f.a,{icon:e.icon}))})),i.a.createElement(p.Col,{xs:12,md:4,style:{textAlign:"right"}},i.a.createElement("p",null,"v1.2"))))};function y(){var e=a()(["\n\thtml, body, #root, #root > div {\n\t\theight: 100%;\n\t}\n\n\t#root > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\tbody {\n\t\tmargin: 0;\n\t\tbackground-color: ",";\n\t\tfont-family: 'Overpass', sans-serif;\n\t}\n\t\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\n\t\t&.link {\n\t\t\tfont-size: 14px;\n\t\t\tmargin-top: 1.5rem;\n\t\t\tcolor: ",";\n\t\t\tfont-weight: bold;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\n\th1 {\n\t\tmargin: 0;\n\t\tcolor: ",';\n\t\tfont-size: 28px;\n\t\tline-height: 32px;\n\t\tfont-weight: 300;\n\t}\n\n\th2 {\n\t\tmargin: 0;\n\t\tcolor: inherit;\n\t\tfont-size: 22px;\n\t\tline-height: 22px;\n\t\tfont-weight: normal;\n\t}\n\n\tp {\n\t\tmargin: 0;\n\n\t\t& + p {\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t}\n\n\t.text-center {\n\t\ttext-align: center;\n\t}\n\n\t.shrink {\n\t\tflex: 0 0 auto;\n\t}\n\n\t.container {\n\t\twidth: 100%;\n\t\tmax-width: 1280px;\n\t\tmargin: 0 auto;\n\t}\n\n\t:not(pre) > code[class*="language-"], pre[class*="language-"] {\n\t\tmax-height: 400px;\n\n        code {\n            white-space: pre-wrap;\n            word-wrap: break-word;\n            word-break: break-word;\n        }\n\t}\n']);return y=function(){return e},e}var j=Object(s.a)(y(),u.a.dark,u.a.white,u.a.blue,u.a.white),k=s.b.div.withConfig({displayName:"App__FullHeight",componentId:"sc-16gzbxt-0"})(["flex:1;display:flex;padding-bottom:2rem;& > div{flex:1;display:flex;& > div{width:100%;}}"]);t.a=function(){return l.globalHistory.listen(function(e){var t=e.location;window.ga&&(window.ga("set","page",t.pathname+t.search),window.ga("send","pageview"))}),i.a.createElement(c.Root,null,i.a.createElement(j,null),i.a.createElement(c.Head,null,i.a.createElement("title",null,"Homepage | Tingtom"),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/fav/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/fav/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/fav/favicon-16x16.png"}),i.a.createElement("link",{rel:"manifest",href:"/images/fav/site.webmanifest"}),i.a.createElement("link",{rel:"mask-icon",href:"/images/fav/safari-pinned-tab.svg",color:"#5bbad5"}),i.a.createElement("link",{rel:"shortcut icon",href:"/images/fav/favicon.ico"}),i.a.createElement("meta",{name:"msapplication-TileColor",content:"#235b98"}),i.a.createElement("meta",{name:"msapplication-config",content:"/images/fav/browserconfig.xml"}),i.a.createElement("meta",{name:"theme-color",content:"#204e5e"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-93970266-1"}),i.a.createElement("script",null,"window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'UA-93970266-1');"),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Overpass:300,400,700&display=swap",rel:"stylesheet"})),i.a.createElement(d,null),i.a.createElement(k,null,i.a.createElement(i.a.Suspense,{fallback:i.a.createElement("p",{style:{width:"100%",textAlign:"center",color:"#FFF",padding:"2rem 0",fontSize:30}},"Loading...")},i.a.createElement(l.Router,null,i.a.createElement(c.Routes,{path:"*"})))),i.a.createElement(E,null))}},38:function(e,t,n){"use strict";n.r(t);var r=n(58),a=[{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];t.default=a},55:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",function(){return x});var r=n(5),a=n.n(r),o=n(6),i=n.n(o),c=n(0),l=n.n(c),s=n(8),u=n.n(s);Object(s.setHasBabelPlugin)();var p={loading:function(){return null},error:function(e){return console.error(e.error),l.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},m=u()(i()({id:"../src/pages/404.js",load:function(){return Promise.all([n.e(6).then(n.bind(null,67))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/404.js")},resolve:function(){return 67},chunkName:function(){return"src/pages/404"}}),p);m.template="../src/pages/404.js";var g=u()(i()({id:"../src/pages/blog.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,68))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/blog.js")},resolve:function(){return 68},chunkName:function(){return"src/pages/blog"}}),p);g.template="../src/pages/blog.js";var d=u()(i()({id:"../src/pages/index",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(2),n.e(8)]).then(n.bind(null,69))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/index")},resolve:function(){return 69},chunkName:function(){return"src/pages/index"}}),p);d.template="../src/pages/index";var f=u()(i()({id:"../src/pages/projects.js",load:function(){return Promise.all([n.e(9).then(n.bind(null,70))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/projects.js")},resolve:function(){return 70},chunkName:function(){return"src/pages/projects"}}),p);f.template="../src/pages/projects.js";var h=u()(i()({id:"../src/pages/recipes.js",load:function(){return Promise.all([n.e(10).then(n.bind(null,71))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/recipes.js")},resolve:function(){return 71},chunkName:function(){return"src/pages/recipes"}}),p);h.template="../src/pages/recipes.js";var b=u()(i()({id:"../src/pages/tealog",load:function(){return Promise.all([n.e(11).then(n.bind(null,72))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/tealog")},resolve:function(){return 72},chunkName:function(){return"src/pages/tealog"}}),p);b.template="../src/pages/tealog";var v=u()(i()({id:"../src/containers/Post",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,73))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/containers/Post")},resolve:function(){return 73},chunkName:function(){return"src/containers/Post"}}),p);v.template="../src/containers/Post";var w=u()(i()({id:"../src/containers/Recipe",load:function(){return Promise.all([n.e(5).then(n.bind(null,74))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/containers/Recipe")},resolve:function(){return 74},chunkName:function(){return"src/containers/Recipe"}}),p);w.template="../src/containers/Recipe",t.default={"../src/pages/404.js":m,"../src/pages/blog.js":g,"../src/pages/index":d,"../src/pages/projects.js":f,"../src/pages/recipes.js":h,"../src/pages/tealog":b,"../src/containers/Post":v,"../src/containers/Recipe":w};var x="../src/pages/404.js"}.call(this,"/")},75:function(e,t,n){n(76),n(135),e.exports=n(142)}});