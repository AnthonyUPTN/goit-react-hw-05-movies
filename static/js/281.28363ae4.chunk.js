"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{4281:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(1413),a=n(5861),s=n(885),i=n(7757),c=n.n(i),o=n(2791),u=n(501),l=n(6871),v=n(9242),p={goBack:"movieDetailsPage_goBack__gAebg",wrapper:"movieDetailsPage_wrapper__kmPut",about:"movieDetailsPage_about__vqkbY",score:"movieDetailsPage_score__MK4dr",overwiev:"movieDetailsPage_overwiev__QSdyG",genresTitle:"movieDetailsPage_genresTitle__sJZRH",genres:"movieDetailsPage_genres__LiaVf",info:"movieDetailsPage_info__G9PsW",links:"movieDetailsPage_links__AVOFn",genresItem:"movieDetailsPage_genresItem__qaqEt",link:"movieDetailsPage_link__ZHtlQ"},m=n(184),f=function(){var e,r=(0,o.useState)({movie:{},loading:!1,error:null}),n=(0,s.Z)(r,2),i=n[0],f=n[1],d=(0,l.UO)().id,g=(0,l.s0)(),h=(0,l.TH)(),_=(null===h||void 0===h||null===(e=h.state)||void 0===e?void 0:e.from)||"/";(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,v.Mc)(d);case 4:r=e.sent,f((function(e){return(0,t.Z)((0,t.Z)({},e),{},{movie:r,loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!1,error:e.t0.message})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);var x=i.movie,k=i.loading,w=i.error,j=x.poster_path,b=x.title,Z=x.vote_average,P=x.overview,N=x.genres;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:p.goBack,onClick:function(){return g(_)},children:"\u21a9 Go back"}),k&&(0,m.jsx)("p",{children:"...Loading"}),x&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:p.wrapper,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+j,alt:b,className:p.img}),(0,m.jsxs)("div",{className:p.about,children:[(0,m.jsx)("h2",{children:b}),(0,m.jsxs)("p",{className:p.score,children:[" User score: ",10*Z,"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{className:p.overwiev,children:P}),(0,m.jsx)("h3",{className:p.genresTitle,children:"Genres"}),(0,m.jsx)("p",{children:N&&N.map((function(e){return(0,m.jsx)("span",{className:p.genresItem,children:e.name},e.id)}))})]})]}),(0,m.jsxs)("div",{className:p.links,children:[(0,m.jsx)("h3",{className:p.info,children:"Aditional information"}),(0,m.jsx)(u.rU,{state:{from:_},className:p.link,to:"/movies/".concat(d,"/cast"),children:"Cast"}),(0,m.jsx)(u.rU,{state:{from:_},className:p.link,to:"/movies/".concat(d,"/reviews"),children:"Reviews"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(l.j3,{})})]}),w&&(0,m.jsx)("p",{children:w})]})}},9242:function(e,r,n){n.d(r,{Hx:function(){return v},Mc:function(){return u},Tg:function(){return o},d$:function(){return p},uV:function(){return l}});var t=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"473bf57b6e795f74966a4b9785ccc38f"}}),o=function(){var e=(0,t.Z)(s().mark((function e(){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/day",{params:{page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie/",{params:{query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=281.28363ae4.chunk.js.map