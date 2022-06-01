"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{1764:function(r,n,e){e.d(n,{Z:function(){return i}});var t=e(501),a="listItems_item__nlysi",u=e(184),c=function(r){var n=r.movies,e=n.map((function(r){var n=r.id,e=r.title,c=r.original_name;return(0,u.jsxs)("li",{className:a,children:[e&&(0,u.jsx)(t.rU,{to:"/movies/".concat(n),children:e}),!e&&(0,u.jsx)(t.rU,{to:"/movies/".concat(n),children:c})]},n)}));return(0,u.jsx)(u.Fragment,{children:Boolean(n.length)&&(0,u.jsx)("ul",{children:e})})},i=c;c.dafaultProps={movies:[]}},9329:function(r,n,e){e.r(n),e.d(n,{default:function(){return m}});var t=e(1413),a=e(5861),u=e(885),c=e(7757),i=e.n(c),o=e(2791),s=e(501),f=e(1764),p=e(4942),l=e(184),v=function(r){var n=r.onSubmit,e=(0,o.useState)({query:""}),a=(0,u.Z)(e,2),c=a[0],i=a[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{action:"",onSubmit:function(r){r.preventDefault(),n((0,t.Z)({},c)),i({query:""})},children:[(0,l.jsx)("input",{value:c.query,name:"query",onChange:function(r){var n=r.target,e=n.name,a=n.value;i((function(r){return(0,t.Z)((0,t.Z)({},r),{},(0,p.Z)({},e,a))}))},type:"text",placeholder:"Movie"}),(0,l.jsx)("button",{children:"Search"})]})})},d=e(9242),m=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),n=(0,u.Z)(r,2),e=n[0],c=n[1],p=(0,s.lr)(),m=(0,u.Z)(p,2),h=m[0],x=m[1],g=h.get("query");(0,o.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!0})})),r.prev=1,r.next=4,(0,d.d$)(g);case 4:n=r.sent,console.log(n.results),c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!1,items:n.results})})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),c((function(n){return(0,t.Z)((0,t.Z)({},n),{},{loading:!1,error:r.t0.message})}));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();g&&r()}),[g]);var Z=e.items,y=e.loading,b=e.error;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v,{onSubmit:function(r){var n=r.query;return x({query:n})}}),y&&(0,l.jsx)("p",{children:"Loading..."}),(0,l.jsx)(f.Z,{movies:Z}),b&&(0,l.jsx)("p",{children:b})]})}},9242:function(r,n,e){e.d(n,{Hx:function(){return p},Mc:function(){return s},Tg:function(){return o},d$:function(){return l},uV:function(){return f}});var t=e(5861),a=e(7757),u=e.n(a),c=e(4569),i=e.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"473bf57b6e795f74966a4b9785ccc38f"}}),o=function(){var r=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/all/day",{params:{page:1}});case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n));case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n,"/reviews"));case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("search/movie/",{params:{query:n}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=329.97776abb.chunk.js.map