(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(4),a=c.n(s),i=(c(11),c(3)),o=(c(12),c(5)),l=c(6),j=c(0);var b=function(e){var t=e.name,c=e.email,r=e.id,n=e.address;return e.website,Object(j.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(j.jsx)("img",{alt:"photo",src:"https://robohash.org/".concat(r,"?200*200")}),Object(j.jsx)("h2",{children:t}),Object(j.jsx)("p",{className:"i",children:c}),Object(j.jsxs)("p",{className:"",children:["City: ",n.city]})]})},h=["i"];var d=function(e){var t=e.robots;return Object(j.jsx)("div",{className:"tc",children:t.map((function(e){var t=e.i,c=Object(l.a)(e,h);return Object(j.jsx)(b,Object(o.a)({},c),t)}))})};var u=function(e){return Object(j.jsx)("div",{style:{overflowY:"scroll",height:"600px",border:"1px solid black"},children:e.children})};var O=function(e){var t=e.onSearch;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search-robot",onChange:t})})};var f=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),a=Object(i.a)(s,2),o=a[0],l=a[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return n(e)}))}));var b=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return c.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{className:"title f1",children:"RoboFriends"}),Object(j.jsx)(O,{onSearch:function(e){l(e.target.value)}}),Object(j.jsx)(u,{children:b.length>0?Object(j.jsx)(d,{robots:b}):Object(j.jsx)("h1",{className:" title f3",children:"No Result Found...."})})]}):Object(j.jsx)("h1",{className:"title tc",children:"Loading..."})};c(14);a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2e00668d.chunk.js.map