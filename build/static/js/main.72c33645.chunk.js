(this["webpackJsonphamster-wars-cli"]=this["webpackJsonphamster-wars-cli"]||[]).push([[0],{10:function(e,t,A){e.exports={Overlay:"Hamster_Overlay__1PwUF",HamsterWrapper:"Hamster_HamsterWrapper__1HPax",Thumb:"Hamster_Thumb__1NPhI",Modal:"Hamster_Modal__18ded",InnerArticle:"Hamster_InnerArticle__1GTOX"}},13:function(e,t,A){e.exports={GameWrapper:"GameWrapper_GameWrapper__VGrp2",Previous:"GameWrapper_Previous__1xTl1",fadeIn:"GameWrapper_fadeIn__1BNX-",PreHamster:"GameWrapper_PreHamster__1AaCg",IndicatorImage:"GameWrapper_IndicatorImage__3HaeY",Active:"GameWrapper_Active__2lTKJ",HamsterOne:"GameWrapper_HamsterOne__2L80y",fadeInLeft:"GameWrapper_fadeInLeft__210_n",HamsterTwo:"GameWrapper_HamsterTwo__2j3xT",fadeInRight:"GameWrapper_fadeInRight__33Hey",fadeOut:"GameWrapper_fadeOut__21K0V"}},35:function(e,t,A){e.exports={TopNavigation:"TopNavigation_TopNavigation__34ptR"}},37:function(e,t,A){},45:function(e,t,A){},70:function(e,t,A){},72:function(e,t,A){"use strict";A.r(t);var a=A(0),c=A.n(a),s=A(20),n=A.n(s),r=A(14),i=(A(45),A(12)),g=A(4),o=A(3),l=A(11),j=A.n(l),m=A(35),d=A.n(m),u=A.p+"static/media/hamster-logo.234e2638.png",O=A(1),h=function(){return Object(O.jsxs)("nav",{className:d.a.TopNavigation,children:[Object(O.jsx)("img",{src:u,alt:"logo"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/game",children:"Game"}),Object(O.jsx)(r.b,{to:"/gallery",children:"Gallery"}),Object(O.jsx)(r.b,{to:"/scoreboard",children:"Scoreboard"})]})]})},B=A(10),b=A.n(B),w="https://murmuring-fortress-23751.herokuapp.com/",p=function(e){var t=Object(a.useState)(!1),A=Object(g.a)(t,2),c=A[0],s=A[1];return Object(O.jsxs)("section",{className:"winner"===e.type?b.a.HamsterWrapper+" winner":b.a.HamsterWrapper&&"loser"===e.type?b.a.HamsterWrapper+" loser":b.a.HamsterWrapper&&"list"===e.type?b.a.HamsterWrapper+" list-item":b.a.HamsterWrapper,children:[Object(O.jsxs)("article",{onClick:function(){return s(!0)},className:b.a.Thumb,children:[Object(O.jsx)("div",{className:b.a.Overlay}),Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("img",{src:e.imgName.includes("http")?e.imgName:w+e.imgName,alt:"hamster-image"})]}),!0===e.game?null:Object(O.jsx)("section",{className:!0===c?b.a.Modal+" active":b.a.Modal,children:Object(O.jsxs)("article",{className:b.a.InnerArticle,children:[Object(O.jsx)("button",{onClick:function(){return s(!1)},children:"X"}),Object(O.jsx)("img",{src:e.imgName.includes("http")?e.imgName:w+e.imgName,alt:"hamster-image"}),Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Age: ",e.age]}),Object(O.jsxs)("li",{children:["Loves: ",e.loves]}),Object(O.jsxs)("li",{children:["Games played: ",e.games]}),Object(O.jsxs)("li",{children:["Wins: ",e.wins]}),Object(O.jsxs)("li",{children:["Losses: ",e.defeats]})]})]})})]})},f=A(13),x=A.n(f),C=function(e){var t,A,c=Object(a.useState)(null===e||void 0===e?void 0:e.data[0]),s=Object(g.a)(c,2),n=s[0],r=s[1],o=Object(a.useState)(null===e||void 0===e?void 0:e.data[0]),l=Object(g.a)(o,2),m=l[0],d=l[1],u=Object(a.useState)(!0),h=Object(g.a)(u,2),B=h[0],b=h[1],w=Object(a.useState)(""),f=Object(g.a)(w,2),C=f[0],v=f[1],D=Math.floor(Math.random()*(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.length)),E=Math.floor(Math.random()*(null===e||void 0===e||null===(A=e.data)||void 0===A?void 0:A.length)),I=Object(a.useCallback)((function(e,t){v(" out"),setTimeout((function(){v("")}),1e3),r(e),d(t),b(!0!==B),j.a.put("https://murmuring-fortress-23751.herokuapp.com/hamsters/".concat(null===n||void 0===n?void 0:n.id),{wins:(null===n||void 0===n?void 0:n.wins)+1,defeats:null===n||void 0===n?void 0:n.defeats,games:(null===n||void 0===n?void 0:n.games)+1}),j.a.put("https://murmuring-fortress-23751.herokuapp.com/hamsters/".concat(null===m||void 0===m?void 0:m.id),{wins:null===m||void 0===m?void 0:m.wins,defeats:(null===m||void 0===m?void 0:m.defeats)+1,games:(null===m||void 0===m?void 0:m.games)+1})}),[n,m]);return Object(O.jsxs)("section",{className:x.a.GameWrapper,children:[void 0===n&&void 0===m?null:Object(O.jsxs)("section",{className:x.a.Previous,style:!0===B?{animationName:"fadeOut"}:{animationName:"fadeIn"},children:[Object(O.jsxs)("article",{className:x.a.PreHamster,onClick:function(){return I(e.data[D],e.data[E])},children:[Object(O.jsx)("img",{className:x.a.IndicatorImage,src:"data:image/png;base64,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",alt:"check"}),Object(O.jsx)(p,Object(i.a)({game:!0,type:"winner"},n))]}),Object(O.jsxs)("article",{className:x.a.PreHamster,onClick:function(){return I(e.data[E],e.data[D])},children:[Object(O.jsx)("img",{className:x.a.IndicatorImage,src:"data:image/png;base64,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",alt:"cross"}),Object(O.jsx)(p,Object(i.a)({game:!0,type:"loser"},m))]})]}),Object(O.jsxs)("section",{className:x.a.Active,children:[Object(O.jsx)("article",{onClick:function(){return I(e.data[D],e.data[E])},className:x.a.HamsterOne+C,children:Object(O.jsx)(p,Object(i.a)({game:!0},e.data[D===E?D+1:D]))}),Object(O.jsx)("article",{onClick:function(){return I(e.data[E],e.data[D])},className:x.a.HamsterTwo+C,children:Object(O.jsx)(p,Object(i.a)({game:!0},e.data[E===D?E+1:E]))})]})]})},v=A(37),D=A.n(v),E=function(e){var t=Object(a.useState)(""),A=Object(g.a)(t,2),c=A[0],s=A[1],n=Object(a.useState)(""),r=Object(g.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),m=Object(g.a)(l,2),d=m[0],u=m[1],h=Object(a.useState)(0),B=Object(g.a)(h,2),b=B[0],w=B[1],p=Object(a.useState)(""),f=Object(g.a)(p,2),x=f[0],C=f[1];return Object(O.jsxs)("section",{className:D.a.Form,children:[Object(O.jsx)("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return s(e.target.value)}}),Object(O.jsx)("input",{type:"text",name:"favFood",placeholder:"Fav food",onChange:function(e){return o(e.target.value)}}),Object(O.jsx)("input",{type:"text",name:"loves",placeholder:"Loves",onChange:function(e){return u(e.target.value)}}),Object(O.jsx)("input",{type:"text",name:"age",placeholder:"Age",onChange:function(e){return w(parseInt(e.target.value))}}),Object(O.jsx)("input",{type:"text",name:"imgName",placeholder:"Image URL",onChange:function(e){return C(e.target.value)}}),Object(O.jsx)("button",{onClick:function(){j.a.post("https://murmuring-fortress-23751.herokuapp.com/hamsters",{name:c,age:b,favFood:i,loves:d,imgName:x,wins:0,defeats:0,games:0})},children:"Add"})]})};A(70);var I=function(){var e,t,A,c,s,n,r,l,m,d=Object(a.useState)([]),B=Object(g.a)(d,2),b=B[0],w=B[1],f=Object(a.useState)([]),x=Object(g.a)(f,2),v=x[0],D=x[1],I=Object(a.useState)([]),Q=Object(g.a)(I,2),k=Q[0],R=Q[1],H=Object(a.useState)([]),y=Object(g.a)(H,2),P=y[0],J=y[1],S=Math.floor(Math.random()*v.length),N={id:null===(e=v[S])||void 0===e?void 0:e.id,wins:null===(t=v[S])||void 0===t?void 0:t.wins,defeats:null===(A=v[S])||void 0===A?void 0:A.defeats,games:null===(c=v[S])||void 0===c?void 0:c.games,favFood:null===(s=v[S])||void 0===s?void 0:s.favFood,name:null===(n=v[S])||void 0===n?void 0:n.name,loves:null===(r=v[S])||void 0===r?void 0:r.loves,imgName:null===(l=v[S])||void 0===l?void 0:l.imgName,age:null===(m=v[S])||void 0===m?void 0:m.age};return Object(a.useEffect)((function(){j.a.get("https://murmuring-fortress-23751.herokuapp.com/hamsters").then((function(e){console.log(e.data),w(e.data)})),j.a.get("https://murmuring-fortress-23751.herokuapp.com/hamsters/cutest").then((function(e){console.log(e.data),D(e.data)})),j.a.get("https://murmuring-fortress-23751.herokuapp.com/winners").then((function(e){console.log(e.data),R(e.data)})),j.a.get("https://murmuring-fortress-23751.herokuapp.com/losers").then((function(e){console.log(e.data),J(e.data)}))}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{children:Object(O.jsx)(h,{})}),Object(O.jsx)("main",{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsxs)("section",{children:[Object(O.jsxs)("div",{className:"logo-wrapper",children:[Object(O.jsx)("img",{src:u,alt:"logo"}),Object(O.jsx)("h1",{className:"title",children:"Hamster wars"})," "]}),Object(O.jsxs)("div",{className:"flex-wrapper",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Welcome to Hamster Wars!"}),Object(O.jsx)("br",{}),"If you LOVE cute hamsters, then this is the place to be.",Object(O.jsx)("br",{}),"To choose which hamster is cutest, just navigate to the game section and start playing!",Object(O.jsx)("br",{}),"Want to see all the super cute hamsters? Then head on over to the gallery.",Object(O.jsx)("br",{}),"And if you're not patient enough, go to the scoreboard to see all the cutest hamsters!",Object(O.jsx)("br",{}),"That's it!"]}),Object(O.jsxs)("article",{children:[Object(O.jsx)("h2",{children:"Top rated hamster!"}),Object(O.jsx)(p,Object(i.a)({},N))]})]})]})}),Object(O.jsx)(o.a,{path:"/game",children:Object(O.jsx)(C,{data:b})}),Object(O.jsxs)(o.a,{path:"/gallery",children:[Object(O.jsx)(E,{}),Object(O.jsxs)("section",{className:"inner-wrapper",children:[b.map((function(e){return Object(O.jsx)(p,Object(i.a)({},e),e.id)}))," "]})]}),Object(O.jsx)(o.a,{path:"/scoreboard",children:Object(O.jsxs)("section",{className:"flex-wrapper",children:[Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{className:"text-center",children:"Top winners"}),Object(O.jsxs)("section",{className:"flex-wrapper column",children:[k.map((function(e){return Object(O.jsx)(p,Object(i.a)({type:"list"},e),e.id)}))," "]})]}),Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{className:"text-center",children:"Top losers"}),Object(O.jsx)("section",{className:"flex-wrapper column",children:P.map((function(e){return Object(O.jsx)(p,Object(i.a)({type:"list"},e),e.id)}))})]})]})})]})}),Object(O.jsx)("footer",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Hamster Wars"}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/JeppeGustafsson/hamster-wars-cli",target:"_blank",children:"Github"})})," "]})})]})},Q=A(39),k=A(22),R=A(40),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_MATCH"===t.type?[].concat(Object(R.a)(e),[t.payload]):e},y=Object(k.a)({matches:H}),P=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,73)).then((function(t){var A=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;A(e),a(e),c(e),s(e),n(e)}))},J=Object(k.b)(y);n.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Q.a,{store:J,children:Object(O.jsx)(r.a,{children:Object(O.jsx)(I,{})})})}),document.getElementById("root")),P()}},[[72,1,2]]]);
//# sourceMappingURL=main.72c33645.chunk.js.map