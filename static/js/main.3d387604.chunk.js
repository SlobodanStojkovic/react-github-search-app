(this["webpackJsonpreact-github-search-app"]=this["webpackJsonpreact-github-search-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(8),r=c.n(a),i=(c(13),c(0)),o=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("a",{href:"https://github.com/SlobodanStojkovic",children:"Created by Slobodan Stojkovic"})})},j=(c(15),function(){return Object(i.jsx)("header",{children:Object(i.jsx)("nav",{className:"nav",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"logoName",children:Object(i.jsx)("a",{href:"../home",children:"React GitHub Search App"})}),Object(i.jsx)("div",{id:"mainListDiv",className:"main_list",children:Object(i.jsx)("ul",{className:"navlinks",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"../home",children:"Home"})})})})]})})})}),l=c(3),h=c(5),b=(c(16),function(e){var t=e.setSearchResults,c=e.setWarning,s=Object(n.useState)(""),a=Object(l.a)(s,2),r=a[0],o=a[1];return Object(i.jsx)("div",{className:"inputDiv",children:Object(i.jsx)("input",{className:"searchInput",type:"text",placeholder:"Search profiles...",onChange:function(e){return o(e.target.value.toLowerCase())},onKeyPress:function(e){var n;"Enter"===e.key&&(""===r?c("Type something in Search field."):(n=r,fetch("https://api.github.com/search/users?q="+n).then((function(e){if(e.ok)return e.json();throw new Error("There was an error")})).then((function(e){return e.items})).catch((function(e){console.log(e)}))).then((function(e){t(e),c("There were no results found.")})))}})})}),d=(c(17),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(l.a)(a,2),o=r[0],j=r[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{setSearchResults:s,setWarning:j}),c&&0===c.length?Object(i.jsx)("div",{className:"noResultsFound",children:o}):Object(i.jsx)("div",{className:"users",children:c.map((function(e){return Object(i.jsx)(h.b,{to:"/".concat(e.login),children:Object(i.jsxs)("div",{className:"singleUser",children:[Object(i.jsx)("img",{className:"singleUserAvatar",src:e.avatar_url,alt:"avatar"}),Object(i.jsx)("p",{className:"userName",children:e.login})]})},e.id)}))})]})}),u=c(2),p=function(e){var t=new Date(e),c=t.getDate(),n=t.getMonth()+1,s=t.getFullYear();return t="".concat(c,".").concat(n,".").concat(s)},O=(c(18),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(u.h)();return Object(n.useEffect)((function(){var e;(e=a.user,fetch("https://api.github.com/users/"+e+"/repos?page=1&per_page=100").then((function(e){if(e.ok)return e.json();throw new Error("There was an error")})).then((function(e){return e})).catch((function(e){console.log(e)}))).then((function(e){s(e)}))}),[a]),c.length>0&&Object(i.jsx)("div",{className:"reposDiv",children:c.map((function(e){return Object(i.jsxs)("div",{className:"singleUserDiv",children:[Object(i.jsx)("h1",{className:"repoName",children:e.name}),Object(i.jsxs)("p",{className:"repoDescription",children:[Object(i.jsx)("span",{className:"boldSpan",children:"Description:"})," ",e.description]}),Object(i.jsxs)("p",{className:"createdAt",children:[Object(i.jsx)("span",{className:"boldSpan",children:"Date created: "}),p(e.created_at)]}),Object(i.jsx)("div",{className:"center",children:Object(i.jsx)("button",{className:"openRepositoryButton",onClick:function(){var t;t=e,localStorage.setItem("storedSingleRepo",JSON.stringify(t)),window.open("/".concat(a.user,"/").concat(e.id))},children:"Open in new tab"})})]},e.id)}))})}),m=(c(19),function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("storedSingleRepo"))),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(u.h)();return console.log(a),Object(n.useEffect)((function(){s(JSON.parse(localStorage.getItem("storedSingleRepo")))}),[]),console.log(c),Object(i.jsxs)("div",{className:"singleRepoDiv",children:[Object(i.jsx)("h1",{className:"repositoryName",children:c.name}),Object(i.jsxs)("p",{className:"repositoryDescription",children:[Object(i.jsx)("span",{className:"boldSpan",children:"Description:"})," ",c.description]}),Object(i.jsxs)("p",{className:"repositoryCreatedAt",children:[Object(i.jsx)("span",{className:"boldSpan",children:"Date created: "}),p(c.created_at)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"boldSpan",children:"Stargazers count:"})," ",c.stargazers_count]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"boldSpan",children:"Watchers count:"})," ",c.watchers_count]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"boldSpan",children:"Forks count:"})," ",c.forks_count]})]})});c(20);var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),Object(i.jsxs)(u.d,{children:[Object(i.jsx)(u.b,{path:"/home",element:Object(i.jsx)(d,{})}),Object(i.jsx)(u.b,{path:"/:user",element:Object(i.jsx)(O,{})}),Object(i.jsx)(u.b,{path:"/:user/:id",element:Object(i.jsx)(m,{})}),Object(i.jsx)(u.b,{path:"/",element:Object(i.jsx)(u.a,{to:"home"})})]}),Object(i.jsx)(o,{})]})};c(21);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(h.a,{children:Object(i.jsx)(x,{})})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.3d387604.chunk.js.map