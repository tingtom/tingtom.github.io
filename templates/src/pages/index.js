(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,t,a){"use strict";var s=a(0),n=a.n(s),r=(a(3),a(12)),o=a(10),i=a(11),l=a(36),c=a(37),m=r.b.div.withConfig({displayName:"Wrapper__Title",componentId:"sc-1t7jmk7-0"})(["position:absolute;top:-3.8rem;left:0;width:100%;display:flex;justify-content:space-between;align-items:center;svg{margin-right:10px;}"]),d=r.b.section.withConfig({displayName:"Wrapper",componentId:"sc-1t7jmk7-1"})(["position:relative;background-color:",";border-radius:5px;margin-top:6rem;padding:1.5rem;"," ",""],o.a.whiteish,function(e){return e.short?"margin-top: 3rem;":""},function(e){return e.bottom?"padding-bottom: ".concat(e.bottom):""});t.a=function(e){return n.a.createElement(d,{short:e.short,bottom:e.bottom},n.a.createElement(m,{className:"text-center"},n.a.createElement("div",null,e.back&&n.a.createElement(i.Link,{to:e.back},n.a.createElement(l.a,{icon:c.c})," Back")),e.url&&n.a.createElement(i.Link,{to:e.url},n.a.createElement("h1",null,e.title))||n.a.createElement("h1",null,e.title),n.a.createElement("div",null)),e.children)}},285:function(e,t,a){"use strict";var s=a(14),n=a.n(s),r=a(0),o=a.n(r),i=a(3),l=a(11),c=a(12),m=a(10),d=a(286),j=a.n(d),u=(a(287),a(288),a(289),a(290),a(291),a(155),a(156)),p=a.n(u),b=a(36),g=a(37),h=c.b.section.withConfig({displayName:"Post",componentId:"msu8sa-0"})(["border-radius:5px;background-color:",";color:",";padding:1rem 1rem 0;transition:box-shadow 0.15s ease;border:1px solid ",";cursor:pointer;&:hover{box-shadow:5px 5px 5px ",";}& + &{margin-top:1.5rem;}"],m.a.grey,m.a.dark,m.a.border,m.a.border),f=Object(c.b)(i.Col).withConfig({displayName:"Post__Icons",componentId:"msu8sa-1"})(["label{font-size:14px;pointer-events:none;user-select:none;-webkit-user-select:none;color:",";& + label{margin-left:0.5rem;}}svg{margin-right:0.2rem;}"],m.a.dark),k=Object(c.b)(i.Row).withConfig({displayName:"Post__Content",componentId:"msu8sa-2"})(["margin-top:1rem;table{width:100%;border-spacing:0;}p{font-size:14px;line-height:18px;& + table,& + iframe{margin-top:1rem;}a{color:",";font-weight:bold;}}img{width:100%;display:block;}h2{margin:1rem 0;}"],m.a.blue),w=Object(c.b)(i.Row).withConfig({displayName:"Post__Expand",componentId:"msu8sa-3"})(["border-top:1px solid ",";background-color:rgba(0,0,0,0.01);margin:0 -1rem;line-height:10px;padding:2px 0;margin-top:1rem;transition:padding 0.15s ease,background-color 0.3s ease;&:hover{padding:4px 0 0 0;}",":hover &{background-color:rgba(0,0,0,0.03);}"],m.a.border,h);t.a=function(e){var t=Object(r.useState)(!1),a=n()(t,2),s=a[0],c=a[1];return Object(r.useEffect)(function(){j.a.highlightAll()}),o.a.createElement(h,null,o.a.createElement(i.Row,{between:"xs",middle:"xs"},o.a.createElement(i.Col,{xs:!0},o.a.createElement("h2",null,e.data.title)),o.a.createElement(f,{xs:!0,className:"shrink"},e.data.mins&&o.a.createElement("label",{title:e.data.mins+"mins read time"},o.a.createElement(b.a,{icon:g.e}),e.data.mins,"m"),e.data.date&&o.a.createElement("label",{title:e.data.date},o.a.createElement(b.a,{icon:g.a}),p()(e.data.date,"YYYY-MM-DD").format("DD/MM/YYYY")))),o.a.createElement(k,null,o.a.createElement(i.Col,{xs:!0,dangerouslySetInnerHTML:{__html:s?e.data.contents:"<p>"+e.data.summary+"</p>"}})),!s&&o.a.createElement(i.Row,null,o.a.createElement(i.Col,{xs:!0,className:"text-center"},o.a.createElement(l.Link,{to:"/blog/"+e.data.slug,className:"link"},"View Post"))),o.a.createElement(w,{center:"xs",onClick:function(){return c(!s)}},o.a.createElement(i.Col,{xs:!0,className:"shrink"},o.a.createElement(b.a,{icon:s?g.d:g.b}))))}},292:function(e,t,a){"use strict";var s=a(0),n=a.n(s),r=a(3),o=a(11),i=a(12),l=a(10),c=Object(i.b)(r.Col).withConfig({displayName:"Project",componentId:"exvg6c-0"})(["height:100%;position:relative;",";"],function(e){return e.bottom?"margin-bottom: ".concat(e.bottom):""}),m=i.b.div.withConfig({displayName:"Project__Aspect",componentId:"exvg6c-1"})(['position:relative;overflow:hidden;border-radius:10px;transition:box-shadow 0.15s ease;&:after{content:"";display:block;padding-bottom:100%;}&:hover{box-shadow:5px 5px 5px ',";}"],l.a.border),d=i.b.div.withConfig({displayName:"Project__Background",componentId:"exvg6c-2"})(["position:absolute;top:0;height:100%;width:100%;background:"," no-repeat center;background-image:url(",");background-size:cover;transition:transform 0.5s ease;",":hover &{transform:scale(1.1) rotate(1deg);}"],l.a.white,function(e){return e.image},m),j=Object(i.b)(r.Row).withConfig({displayName:"Project__Wrapper",componentId:"exvg6c-3"})(["position:absolute;top:0;height:100%;width:100%;color:",";margin:0;background-color:rgb(25,25,25,0.3);border:1px solid ",";h2{text-shadow:2px 2px 5px rgba(0,0,0,0.25);}"],l.a.whiteish,l.a.border);t.a=function(e){return n.a.createElement(c,{xs:6,lg:3,bottom:e.bottom||"1rem"},n.a.createElement(o.Link,{to:"/projects/"+e.data.slug},n.a.createElement(m,null,n.a.createElement(d,{image:"/images/projects/"+e.data.image}),n.a.createElement(j,{middle:"xs",center:"xs"},n.a.createElement(r.Col,null,n.a.createElement("h2",null,e.data.title))))))}},293:function(e,t,a){var s={"./af":158,"./af.js":158,"./ar":159,"./ar-dz":160,"./ar-dz.js":160,"./ar-kw":161,"./ar-kw.js":161,"./ar-ly":162,"./ar-ly.js":162,"./ar-ma":163,"./ar-ma.js":163,"./ar-sa":164,"./ar-sa.js":164,"./ar-tn":165,"./ar-tn.js":165,"./ar.js":159,"./az":166,"./az.js":166,"./be":167,"./be.js":167,"./bg":168,"./bg.js":168,"./bm":169,"./bm.js":169,"./bn":170,"./bn.js":170,"./bo":171,"./bo.js":171,"./br":172,"./br.js":172,"./bs":173,"./bs.js":173,"./ca":174,"./ca.js":174,"./cs":175,"./cs.js":175,"./cv":176,"./cv.js":176,"./cy":177,"./cy.js":177,"./da":178,"./da.js":178,"./de":179,"./de-at":180,"./de-at.js":180,"./de-ch":181,"./de-ch.js":181,"./de.js":179,"./dv":182,"./dv.js":182,"./el":183,"./el.js":183,"./en-SG":184,"./en-SG.js":184,"./en-au":185,"./en-au.js":185,"./en-ca":186,"./en-ca.js":186,"./en-gb":187,"./en-gb.js":187,"./en-ie":188,"./en-ie.js":188,"./en-il":189,"./en-il.js":189,"./en-nz":190,"./en-nz.js":190,"./eo":191,"./eo.js":191,"./es":192,"./es-do":193,"./es-do.js":193,"./es-us":194,"./es-us.js":194,"./es.js":192,"./et":195,"./et.js":195,"./eu":196,"./eu.js":196,"./fa":197,"./fa.js":197,"./fi":198,"./fi.js":198,"./fo":199,"./fo.js":199,"./fr":200,"./fr-ca":201,"./fr-ca.js":201,"./fr-ch":202,"./fr-ch.js":202,"./fr.js":200,"./fy":203,"./fy.js":203,"./ga":204,"./ga.js":204,"./gd":205,"./gd.js":205,"./gl":206,"./gl.js":206,"./gom-latn":207,"./gom-latn.js":207,"./gu":208,"./gu.js":208,"./he":209,"./he.js":209,"./hi":210,"./hi.js":210,"./hr":211,"./hr.js":211,"./hu":212,"./hu.js":212,"./hy-am":213,"./hy-am.js":213,"./id":214,"./id.js":214,"./is":215,"./is.js":215,"./it":216,"./it-ch":217,"./it-ch.js":217,"./it.js":216,"./ja":218,"./ja.js":218,"./jv":219,"./jv.js":219,"./ka":220,"./ka.js":220,"./kk":221,"./kk.js":221,"./km":222,"./km.js":222,"./kn":223,"./kn.js":223,"./ko":224,"./ko.js":224,"./ku":225,"./ku.js":225,"./ky":226,"./ky.js":226,"./lb":227,"./lb.js":227,"./lo":228,"./lo.js":228,"./lt":229,"./lt.js":229,"./lv":230,"./lv.js":230,"./me":231,"./me.js":231,"./mi":232,"./mi.js":232,"./mk":233,"./mk.js":233,"./ml":234,"./ml.js":234,"./mn":235,"./mn.js":235,"./mr":236,"./mr.js":236,"./ms":237,"./ms-my":238,"./ms-my.js":238,"./ms.js":237,"./mt":239,"./mt.js":239,"./my":240,"./my.js":240,"./nb":241,"./nb.js":241,"./ne":242,"./ne.js":242,"./nl":243,"./nl-be":244,"./nl-be.js":244,"./nl.js":243,"./nn":245,"./nn.js":245,"./pa-in":246,"./pa-in.js":246,"./pl":247,"./pl.js":247,"./pt":248,"./pt-br":249,"./pt-br.js":249,"./pt.js":248,"./ro":250,"./ro.js":250,"./ru":251,"./ru.js":251,"./sd":252,"./sd.js":252,"./se":253,"./se.js":253,"./si":254,"./si.js":254,"./sk":255,"./sk.js":255,"./sl":256,"./sl.js":256,"./sq":257,"./sq.js":257,"./sr":258,"./sr-cyrl":259,"./sr-cyrl.js":259,"./sr.js":258,"./ss":260,"./ss.js":260,"./sv":261,"./sv.js":261,"./sw":262,"./sw.js":262,"./ta":263,"./ta.js":263,"./te":264,"./te.js":264,"./tet":265,"./tet.js":265,"./tg":266,"./tg.js":266,"./th":267,"./th.js":267,"./tl-ph":268,"./tl-ph.js":268,"./tlh":269,"./tlh.js":269,"./tr":270,"./tr.js":270,"./tzl":271,"./tzl.js":271,"./tzm":272,"./tzm-latn":273,"./tzm-latn.js":273,"./tzm.js":272,"./ug-cn":274,"./ug-cn.js":274,"./uk":275,"./uk.js":275,"./ur":276,"./ur.js":276,"./uz":277,"./uz-latn":278,"./uz-latn.js":278,"./uz.js":277,"./vi":279,"./vi.js":279,"./x-pseudo":280,"./x-pseudo.js":280,"./yo":281,"./yo.js":281,"./zh-cn":282,"./zh-cn.js":282,"./zh-hk":283,"./zh-hk.js":283,"./zh-tw":284,"./zh-tw.js":284};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=293},69:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(17),o=a(3),i=a(12),l=a(10),c=a(157),m=a(285),d=a(292),j=Object(i.b)(o.Col).withConfig({displayName:"pages__IntroText",componentId:"sc-12h6wak-0"})(["color:",";margin-top:2rem;"],l.a.white);t.default=function(){var e=Object(r.useRouteData)(),t=e.limitedPosts,a=e.limitedProjects;return n.a.createElement(o.Grid,null,n.a.createElement(o.Row,{center:"xs"},n.a.createElement(j,{xs:!0,className:"text-center",lg:8},n.a.createElement("p",null,"My name is Thomas, also known as Tingtom! I love to code and currently work as a Software Engineer."),n.a.createElement("p",null,"I try to keep the site up to date with current projects I'm working on, most blog posts will be write-ups on features I've added to Source but I'm always working on something random."))),n.a.createElement(c.a,{title:"Projects",bottom:"0.5rem",url:"/projects"},n.a.createElement(o.Row,null,a.map(function(e){return n.a.createElement(d.a,{key:e.slug,data:e})}))),n.a.createElement(c.a,{title:"Latest Blog Entries",url:"/blog"},t.map(function(e){return n.a.createElement(m.a,{key:e.slug,data:e})})))}}}]);