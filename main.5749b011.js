!function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],m=0,p=[];m<l.length;m++)i=l[m],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={3:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+"templates/"+({1:"vendors~src/containers/Post~src/pages/blog~src/pages/index",2:"vendors~src/pages/blog~src/pages/index",4:"src/containers/Post",5:"src/pages/404",6:"src/pages/blog",7:"src/pages/index",8:"src/pages/projects"}[e]||e)+"."+{1:"d6b74298",2:"42195ba9",4:"18cbf403",5:"a2250e7a",6:"1eff6521",7:"b0028404",8:"fb35b978"}[e]+".js"}(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([72,0,9]),n()}({134:function(e,t,n){var r={".":20,"./":20,"./index":20,"./index.js":20};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=134},142:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),a=n.n(r),o=n(34),i=n.n(o),l=n(64),c=n(26);if(t.default=c.a,"undefined"!=typeof document){var s=document.getElementById("root"),u=s.hasChildNodes()?i.a.hydrate:i.a.render,m=function(e){u(a.a.createElement(l.AppContainer,null,a.a.createElement(e,null)),s)};m(c.a),e&&e.hot&&e.hot.accept("./App",function(){m(c.a)})}}.call(this,n(143)(e))},26:function(e,t,n){"use strict";var r=n(60),a=n.n(r),o=n(0),i=n.n(o),l=n(17),c=n(13),s=n(11),u=n(7),m=n(5),p=Object(s.b)(m.Grid).withConfig({displayName:"Header",componentId:"zk4l1p-0"})(["padding:0.5rem 1rem;background-color:",";img{width:100%;max-width:90px;}"],u.a.blue),f=Object(s.b)(m.Row).withConfig({displayName:"Header__Nav",componentId:"zk4l1p-1"})(["margin:0;& > div{padding:0 1.5rem;&:first-child{padding-left:0;}a{font-size:18px;}}"]),d=function(){return i.a.createElement(p,{tagName:"header",fluid:!0},i.a.createElement(m.Row,{middle:"xs",between:"xs"},i.a.createElement(m.Col,{xs:!0},i.a.createElement(c.Link,{to:"/"},i.a.createElement("img",{src:"/images/logo.png"}))),i.a.createElement(m.Col,{xs:!0,className:"shrink"},i.a.createElement(f,{tagName:"nav"},i.a.createElement(m.Col,{xs:!0},i.a.createElement(c.Link,{to:"/"},"Home")),i.a.createElement(m.Col,{xs:!0},i.a.createElement(c.Link,{to:"/projects"},"Projects")),i.a.createElement(m.Col,{xs:!0},i.a.createElement(c.Link,{to:"/blog"},"Blog"))))))},g=n(36),h=n(22),b=n(37),v=Object(s.b)(m.Grid).withConfig({displayName:"Footer",componentId:"ks2858-0"})(["padding:1rem;p{margin:0;color:",";font-size:14px;}"],u.a.white),x=Object(s.b)(m.Col).withConfig({displayName:"Footer__Social",componentId:"ks2858-1"})(["color:",";line-height:0;a + a{margin-left:1rem;}"],u.a.white),E=[{icon:h.c,url:"//twitter.com/tingtom2"},{icon:b.e,url:"mailto:footer@tingtom.co.uk"},{icon:h.d,url:"//www.youtube.com/channel/UC-7aXeLR33mDMYIYanLii2A"},{icon:h.a,url:"//bitbucket.org/tingtom"},{icon:h.b,url:"//github.com/tingtom"}],y=function(){return i.a.createElement(v,{tagName:"footer",fluid:!0},i.a.createElement(m.Row,{middle:"xs"},i.a.createElement(m.Col,{xs:12,md:4},i.a.createElement("p",null,"Thomas Mathews © 2019")),i.a.createElement(x,{xs:12,md:4,className:"text-center"},E.map(function(e){return i.a.createElement("a",{href:e.url,target:"_blank",key:e.url},i.a.createElement(g.a,{icon:e.icon}))})),i.a.createElement(m.Col,{xs:12,md:4,style:{textAlign:"right"}},i.a.createElement("p",null,"v1.0"))))};function w(){var e=a()(["\n\thtml, body, #root, #root > div {\n\t\theight: 100%;\n\t}\n\n\t#root > div {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\tbody {\n\t\tmargin: 0;\n\t\tbackground-color: ",";\n\t\tfont-family: 'Overpass', sans-serif;\n\t}\n\t\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\n\t\t&.link {\n\t\t\tfont-size: 14px;\n\t\t\tmargin-top: 1.5rem;\n\t\t\tcolor: ",";\n\t\t\tfont-weight: bold;\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\n\th1 {\n\t\tmargin: 0;\n\t\tcolor: ",';\n\t\tfont-size: 28px;\n\t\tline-height: 32px;\n\t\tfont-weight: 300;\n\t}\n\n\th2 {\n\t\tmargin: 0;\n\t\tcolor: inherit;\n\t\tfont-size: 22px;\n\t\tline-height: 22px;\n\t\tfont-weight: normal;\n\t}\n\n\tp {\n\t\tmargin: 0;\n\n\t\t& + p {\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t}\n\n\t.text-center {\n\t\ttext-align: center;\n\t}\n\n\t.shrink {\n\t\tflex: 0 0 auto;\n\t}\n\n\t.container {\n\t\twidth: 100%;\n\t\tmax-width: 1280px;\n\t\tmargin: 0 auto;\n\t}\n\n\t:not(pre) > code[class*="language-"], pre[class*="language-"] {\n\t\tmax-height: 400px;\n\t}\n']);return w=function(){return e},e}var k=Object(s.a)(w(),u.a.dark,u.a.white,u.a.blue,u.a.white),j=s.b.div.withConfig({displayName:"App__FullHeight",componentId:"sc-16gzbxt-0"})(["flex:1;display:flex;padding-bottom:2rem;& > div{flex:1;display:flex;& > div{width:100%;}}"]);t.a=function(){return i.a.createElement(l.Root,null,i.a.createElement(k,null),i.a.createElement(l.Head,null,i.a.createElement("title",null,"Homepage | Tingtom"),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/fav/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/fav/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/fav/favicon-16x16.png"}),i.a.createElement("link",{rel:"manifest",href:"/images/fav/site.webmanifest"}),i.a.createElement("link",{rel:"mask-icon",href:"/images/fav/safari-pinned-tab.svg",color:"#5bbad5"}),i.a.createElement("link",{rel:"shortcut icon",href:"/images/fav/favicon.ico"}),i.a.createElement("meta",{name:"msapplication-TileColor",content:"#235b98"}),i.a.createElement("meta",{name:"msapplication-config",content:"/images/fav/browserconfig.xml"}),i.a.createElement("meta",{name:"theme-color",content:"#204e5e"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Overpass:300,400,700&display=swap",rel:"stylesheet"})),i.a.createElement(d,null),i.a.createElement(j,null,i.a.createElement(i.a.Suspense,{fallback:i.a.createElement("em",null,"Loading...")},i.a.createElement(c.Router,null,i.a.createElement(l.Routes,{path:"*"})))),i.a.createElement(y,null))}},38:function(e,t,n){"use strict";n.r(t);var r=n(58),a=[{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];t.default=a},55:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",function(){return b});var r=n(8),a=n.n(r),o=n(9),i=n.n(o),l=n(0),c=n.n(l),s=n(10),u=n.n(s);Object(s.setHasBabelPlugin)();var m={loading:function(){return null},error:function(e){return console.error(e.error),c.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},p=u()(i()({id:"../src/pages/404.js",load:function(){return Promise.all([n.e(5).then(n.bind(null,67))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/404.js")},resolve:function(){return 67},chunkName:function(){return"src/pages/404"}}),m);p.template="../src/pages/404.js";var f=u()(i()({id:"../src/pages/blog.js",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,68))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/blog.js")},resolve:function(){return 68},chunkName:function(){return"src/pages/blog"}}),m);f.template="../src/pages/blog.js";var d=u()(i()({id:"../src/pages/index",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,69))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/index")},resolve:function(){return 69},chunkName:function(){return"src/pages/index"}}),m);d.template="../src/pages/index";var g=u()(i()({id:"../src/pages/projects.js",load:function(){return Promise.all([n.e(8).then(n.bind(null,70))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/pages/projects.js")},resolve:function(){return 70},chunkName:function(){return"src/pages/projects"}}),m);g.template="../src/pages/projects.js";var h=u()(i()({id:"../src/containers/Post",load:function(){return Promise.all([Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,71))]).then(function(e){return e[0]})},path:function(){return a.a.join(e,"../src/containers/Post")},resolve:function(){return 71},chunkName:function(){return"src/containers/Post"}}),m);h.template="../src/containers/Post",t.default={"../src/pages/404.js":p,"../src/pages/blog.js":f,"../src/pages/index":d,"../src/pages/projects.js":g,"../src/containers/Post":h};var b="../src/pages/404.js"}.call(this,"/")},7:function(e,t,n){"use strict";t.a={yellow:"#FBC351",blue:"#204e5e",dark:"#191919",white:"#fff",whiteish:"#eee",grey:"#ddd",border:"rgba(0,0,0,0.05)"}},72:function(e,t,n){n(73),n(132),e.exports=n(139)}});