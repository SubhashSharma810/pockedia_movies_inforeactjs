(this.webpackJsonppockedia_movies_info=this.webpackJsonppockedia_movies_info||[]).push([[0],{11:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(33),r=a.n(s),i=(a(40),a(3)),l=(a(41),a(0)),o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})},d=a(2),j=a.n(d),b=a(4),u=a(17),p=a.n(u),g=(a(11),function(e){var t=e.title,a=e.original_title,n=e.overview,c=e.release_date,s=e.vote_average,r=e.imageUrl,i=e.language,o=e.genres,d=(e.movie_id,e.backdrop_path);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p.a,{style:{backgroundColor:"rgba(255, 255, 255, 0)",padding:"0px",borderRadius:"15px"},children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"contents",children:[Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+r,alt:"img",className:"imgfluid  "}),Object(l.jsxs)("p",{className:"card-title  title-1 ",children:[Object(l.jsx)("span",{className:"cardThead",children:"Movie Name : "}),a]}),Object(l.jsxs)("p",{className:"card-title title-2",children:[Object(l.jsx)("span",{className:"cardThead",children:"As You Know :"})," ",t]}),Object(l.jsxs)("p",{className:"card-text text1",children:[Object(l.jsx)("span",{className:"cardThead",children:"IMDP Reting : "}),s,"."]}),Object(l.jsxs)("p",{className:"card-text text2",children:[Object(l.jsx)("span",{className:"cardThead",children:"Release date : "}),c,"."]})]}),Object(l.jsxs)("div",{className:"hoverContent",children:[Object(l.jsx)("div",{className:"fevrate",children:" \u2605"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"contentitem",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Overview:- "}),n]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Language:- "}),i]}),Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+d,alt:"img",className:"imgfluid  "}),Object(l.jsx)("p",{children:o})]})]})]})})})}),m=a(7),h=a.n(m),x=a(23),O=(a(61),function(e){var t=e.genress,a=e.setGenress,c=e.selectedGenres,s=e.setSelectedGenres,r=e.setPageNo,i=e.type,o=e.baseurl,d=e.movieResults;function u(){return(u=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(o,"genre/").concat(i,"/list?api_key=8715e8842217df4604773f0cef2fca91&language=en-US")).then((function(e){var t=e.data;a(t.genres),console.log(t)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}Object(n.useEffect)((function(){return function(){u.apply(this,arguments)}(),function(){a({})}}),[]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"chip",children:[d&&c&&c.map((function(e){return Object(l.jsxs)("div",{className:"name",style:{backgroundColor:"#18345b"},onClick:function(){return function(e){s(c.filter((function(t){return t.id!==e.id}))),a([].concat(Object(x.a)(t),[e])),r(1)}(e)},children:[e.name," "]},e.id)})),d&&t.map((function(e){return Object(l.jsxs)("div",{className:"name",onClick:function(){return function(e){s([].concat(Object(x.a)(c),[e])),a(t.filter((function(t){return t.id!==e.id}))),r(1)}(e)},children:[e.name," "]},e.id)}))]})})}),v=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},f=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),m=Object(i.a)(p,2),x=m[0],f=m[1],N=e.apiKey,_=e.baseurl,y=v(d),w=e.language,k=e.pageNo,P=e.setPageNo,S=e.totalPage,L=e.setTotalPage;Object(n.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(N,"&language=").concat(w,"&page=").concat(k,"&with_genres=").concat(y)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[k,N,y,w]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",k]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:P,movieResults:c,baseurl:_}),Object(l.jsx)("div",{className:"row justify-content-center",children:c&&c.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(g,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:k<=1,type:"button",onClick:T,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:k>=S,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},N=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),m=Object(i.a)(p,2),x=m[0],f=m[1],N=e.apiKey,_=e.baseurl,y=v(d),w=e.language,k=e.pageNo,P=e.setPageNo,S=e.totalPage,L=e.setTotalPage;Object(n.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(N,"&language=").concat(w,"&page=").concat(k,"&with_genres=").concat(y)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[k,N,y,w]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",k]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:P,movieResults:c,baseurl:_}),Object(l.jsx)("div",{className:"row justify-content-center",children:c&&c.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(g,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:k<=1,type:"button",onClick:T,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:k>=S,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},_=a(6),y=(a(62),a.p+"static/media/icons8-search.2affdb7a.gif"),w=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{id:"container",className:"container position-sticky  top-0",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light  blur blur-rounded top-0 z-index-fixed  nav-sty position-absolute my-3 py-2 start-0 end-0 mx-4",children:Object(l.jsxs)("div",{className:"container-fluid px-0",children:[Object(l.jsx)(_.b,{className:"navbar-brand font-weight-bolder ps-1 ms-sm-3",to:"/",rel:"tooltip",title:"Designed and Coded by Creative Tim","data-placement":"bottom",target:"_blank",children:"Pockedia Movie Info"}),Object(l.jsxs)("button",{className:"navbar-toggler collapsed border-0 shadow-none ms-md-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navigation","aria-controls":"navigation","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(l.jsx)("span",{className:"toggler-icon bar1 "}),Object(l.jsx)("span",{className:"toggler-icon bar2 "}),Object(l.jsx)("span",{className:"toggler-icon bar3 "})]}),Object(l.jsx)("div",{className:"collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0",id:"navigation",children:Object(l.jsxs)("ul",{className:"navbar-nav navbar-nav-hover mx-auto",children:[Object(l.jsx)("li",{className:"nav-item  mx-2",children:Object(l.jsx)(_.b,{to:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Trending"})}),Object(l.jsxs)("li",{className:"nav-item dropdown mx-2",children:[Object(l.jsx)("li",{role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Movies"}),Object(l.jsxs)("ul",{className:"dropdown-containt",children:[Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/upcoming",children:"Upcoming"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/popular",children:"Popular"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/topRated",children:"Top_rated"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/latest",children:"Latest"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/adult",children:"Adults"})})]})]}),Object(l.jsxs)("li",{className:"nav-item dropdown mx-2",children:[Object(l.jsx)(_.b,{to:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Tv Series"}),Object(l.jsxs)("ul",{className:"dropdown-containt",children:[Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/",children:"Upcoming"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/",children:"Popular"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/",children:"Top_rated"})})]})]}),Object(l.jsxs)("li",{className:"nav-item dropdown mx-2",children:[Object(l.jsx)(_.b,{to:"/",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:"Language"}),Object(l.jsxs)("ul",{className:"dropdown-containt",children:[Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/",children:"Upcoming"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/",children:"Popular"})}),Object(l.jsx)("li",{className:"drop-item",children:Object(l.jsx)(_.b,{className:"drop-link",to:"/",children:"Top_rated"})})]})]}),Object(l.jsx)("li",{className:"nav-item dropdown mx-2",children:Object(l.jsx)(_.b,{to:"/searchBar",role:"button",className:"nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center",children:Object(l.jsx)("img",{id:"searchIcon",src:y,alt:"Search"})})})]})})]})})})})})})},k=(a(71),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),r=Object(i.a)(s,2),o=r[0],d=r[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop,t=document.getElementById("circlebtnUp"),a=document.getElementById("circlebtnDown");e>=500?(c(!0),d(!1),t.classList.add("circleButton-show"),t.classList.remove("circleButton"),a.classList.add("circleButtonDown"),a.classList.remove("circleButtonDown-show")):(c(!1),d(!0),t.classList.remove("circleButton-show"),t.classList.add("circleButton"),a.classList.add("circleButtonDown-show"),a.classList.remove("circleButtonDown"))})),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{id:"circlebtnUp",className:"circleButton",children:Object(l.jsx)("i",{className:"fas fa-angle-double-up",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:a?"inline":"none"}})}),Object(l.jsx)("button",{id:"circlebtnDown",className:"circleButtonDown",children:Object(l.jsx)("i",{className:"fas fa-angle-double-down",onClick:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},style:{display:o?"inline":"none"}})})]})}),P=a(5);a(32);var S=function(e){var t=e.title,a=(e.language,e.vote_average),c=(e.original_title,e.release_date),s=(e.genres,e.overview),r=e.imageUrl,o=e.movie_id,d=e.backdrop_path,j=Object(n.useState)(11470),b=Object(i.a)(j,2),u=(b[0],b[1],Object(n.useState)([])),g=Object(i.a)(u,2);return g[0],g[1],Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(p.a,{style:{backgroundColor:"rgba(255, 255, 255, 0)",padding:"0px",borderRadius:"15px"},children:Object(l.jsxs)("div",{className:"seacard",children:[Object(l.jsxs)("div",{className:"contents",children:[r?Object(l.jsx)("img",{className:"img",src:"https://image.tmdb.org/t/p/w200"+r,alt:"".concat(t," Poster")}):Object(l.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"}),Object(l.jsx)("h3",{id:"title",children:t}),Object(l.jsxs)("div",{className:"spn",children:[Object(l.jsx)("span",{children:a}),Object(l.jsxs)("span",{children:[c," "]}),Object(l.jsx)("p",{children:o})]})]}),Object(l.jsx)("div",{className:"hoverContainer",children:Object(l.jsxs)("div",{className:"hoverContaent row",children:[Object(l.jsx)("h4",{children:t}),Object(l.jsx)(_.b,{to:"/",target:"_blank",children:Object(l.jsx)("img",{className:"img1",src:"https://image.tmdb.org/t/p/w200"+r,alt:"".concat(t," Poster")})}),Object(l.jsx)("img",{className:"img2",src:"https://image.tmdb.org/t/p/w200"+d,alt:"".concat(t," Poster")}),Object(l.jsx)("p",{children:s})]})})]})})})};var L=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=e.apiKey,g=e.pageNo,m=e.setPageNo,h=e.totalPage,x=e.setTotalPage,O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(g+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(g-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[" ",Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",g]})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"searchContainer",children:[Object(l.jsx)("input",{type:"text",name:"search",placeholder:"Search...",className:"searchInput",onChange:function(e){e.preventDefault(),s(e.target.value),fetch("".concat("https://api.themoviedb.org/3/search/multi?","api_key=").concat(p,"&language=en-US&query=").concat(e.target.value,"&page=").concat(g,"&include_adult=true")).then((function(e){return e.json()})).then((function(e){e.errors?u([]):(u(e.results),x(e.total_pages),console.log(e.results+"search data"))}))},value:c}),Object(l.jsx)("a",{href:"/",className:"searchbtn",children:Object(l.jsx)("i",{className:"fas fa-search"})})]}),Object(l.jsx)("div",{className:"searchcard",children:d.length>0&&d.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(S,{title:e.title||e.name,language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,release_date:e.release_date||e.air_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path?e.poster_path:"kqjL17yufvn9OVLyXYpvtyrFfak.jpg",movie_id:e.id,backdrop_path:e.backdrop_path},e.movie_id)})}))}),Object(l.jsxs)("div",{className:"npBox d-flex justify-content-between",style:{zIndex:"100"},children:[Object(l.jsxs)("button",{disabled:g<=1,type:"button",onClick:v,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:g>=h,type:"button",onClick:O,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})]})},C=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),m=Object(i.a)(p,2),x=m[0],f=m[1],N=e.apiKey,_=e.baseurl,y=v(d),w=e.language,k=e.pageNo,P=e.setPageNo,S=e.totalPage,L=e.setTotalPage;Object(n.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(N,"&language=").concat(w,"&page=").concat(k,"&with_genres=").concat(y)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[k,N,y,w]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",k]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:P,movieResults:c,baseurl:_}),Object(l.jsx)("div",{className:"row justify-content-center",children:c&&c.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(g,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:k<=1,type:"button",onClick:T,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:k>=S,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},T=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),m=Object(i.a)(p,2),x=m[0],f=m[1],N=e.apiKey,_=e.baseurl,y=v(d),w=e.language,k=e.pageNo,P=e.setPageNo,S=e.totalPage,L=e.setTotalPage;Object(n.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(N,"&language=").concat(w,"&page=").concat(k,"&with_genres=").concat(y)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[k,N,y,w]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",k]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:P,movieResults:c,baseurl:_}),Object(l.jsx)("div",{className:"row justify-content-center",children:c&&c.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(g,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:k<=1,type:"button",onClick:T,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:k>=S,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},B=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),m=Object(i.a)(p,2),x=m[0],f=m[1],N=e.apiKey,_=e.baseurl,y=v(d),w=e.language,k=e.pageNo,P=e.setPageNo,S=e.totalPage,L=e.setTotalPage;Object(n.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/movie/latest?api_key=".concat(N,"&language=").concat(w,"&page=").concat(k,"&with_genres=").concat(y)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[k,N,y,w]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",k]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:P,movieResults:c,baseurl:_}),Object(l.jsx)("div",{className:"row justify-content-center",children:c&&c.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(g,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:k<=1,type:"button",onClick:T,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:k>=S,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},G=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),d=o[0],u=o[1],p=Object(n.useState)({}),m=Object(i.a)(p,2),x=m[0],f=m[1],N=e.apiKey,_=e.baseurl,y=v(d),w=e.language,k=e.pageNo,P=e.setPageNo,S=e.totalPage,L=e.setTotalPage;Object(n.useEffect)((function(){h.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat(N,"&language=en-").concat(w,"&sort_by=original_title.desc&include_adult=true&include_video=true&page=").concat(k,"&with_watch_monetization_types=flatrate&with_genres=").concat(y)).then((function(e){var t=e.data;s(t.results),L(t.total_pages),console.log(t)})).catch((function(e){return console.log(e)}))}),[k,N,y,w]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k+1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(k-1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pageLableBox",children:Object(l.jsxs)("p",{className:"pageLable",children:["Page No :",k]})}),Object(l.jsxs)("div",{className:"container container-bg  my-4",children:[Object(l.jsx)(O,{genress:x,selectedGenres:d,setGenress:f,setSelectedGenres:u,type:"movie",setPageNo:P,movieResults:c,baseurl:_}),Object(l.jsx)("div",{className:"row justify-content-center",children:c&&c.map((function(e){return Object(l.jsx)("div",{className:"col-md-4 cardSty",children:Object(l.jsx)(g,{language:e.original_language,vote_average:e.vote_average,original_title:e.original_title,title:e.title,release_date:e.release_date,genres:[e.genre_ids],overview:e.overview,imageUrl:e.poster_path,movie_id:e.id,backdrop_path:e.backdrop_path})},e.id)}))})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(l.jsxs)("button",{disabled:k<=1,type:"button",onClick:T,className:"btn np",style:{zIndex:"100"},children:["\xab Previous"," "]}),Object(l.jsx)("button",{disabled:k>=S,type:"button",onClick:C,className:"btn np",style:{zIndex:"100"},children:"Next \xbb"})]})]})},I=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(),d=Object(i.a)(r,2),j=d[0],b=d[1],u="8715e8842217df4604773f0cef2fca91",p="https://api.themoviedb.org/3/";a(72).config();var g=Object(n.useState)("de-DE"),m=Object(i.a)(g,2),h=m[0],x=m[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"backGround1",children:Object(l.jsx)("div",{className:"second",children:Object(l.jsx)("div",{className:"trio",children:Object(l.jsx)("div",{className:"squard"})})})}),Object(l.jsx)("div",{className:"backGround2",children:Object(l.jsx)("div",{className:"second2",children:Object(l.jsx)("div",{className:"trio2",children:Object(l.jsx)("div",{className:"squard2"})})})}),Object(l.jsxs)(_.a,{children:[Object(l.jsx)(w,{searchUrl:"search/movie",language:h,setLanguage:x}),Object(l.jsxs)(P.c,{children:[Object(l.jsx)(P.a,{exact:!0,path:"/",children:Object(l.jsx)(f,{totalPage:j,setTotalPage:b,apiKey:u,pageNo:c,setPageNo:s,baseurl:p,language:h,setLanguage:x})}),Object(l.jsx)(P.a,{exact:!0,path:"/upcoming",children:Object(l.jsx)(C,{totalPage:j,setTotalPage:b,apiKey:u,pageNo:c,setPageNo:s,baseurl:p,language:h,setLanguage:x})}),Object(l.jsx)(P.a,{exact:!0,path:"/popular",children:Object(l.jsx)(T,{totalPage:j,setTotalPage:b,apiKey:u,pageNo:c,setPageNo:s,baseurl:p,language:h,setLanguage:x})}),Object(l.jsx)(P.a,{exact:!0,path:"/topRated",children:Object(l.jsx)(N,{totalPage:j,setTotalPage:b,apiKey:u,pageNo:c,setPageNo:s,baseurl:p,language:h,setLanguage:x})}),Object(l.jsx)(P.a,{exact:!0,path:"/latest",children:Object(l.jsx)(B,{totalPage:j,setTotalPage:b,apiKey:u,pageNo:c,setPageNo:s,baseurl:p,language:h,setLanguage:x})}),Object(l.jsx)(P.a,{exact:!0,path:"/adult",children:Object(l.jsx)(G,{totalPage:j,setTotalPage:b,apiKey:u,pageNo:c,setPageNo:s,baseurl:p,language:h,setLanguage:x})}),Object(l.jsx)(P.a,{exact:!0,path:"/searchBar",children:Object(l.jsx)(L,{setTotalPage:b,totalPage:j,apiKey:u,setPageNo:s,pageNo:c})})]})]}),Object(l.jsx)(k,{}),Object(l.jsx)(o,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),F()}},[[75,1,2]]]);
//# sourceMappingURL=main.42654e9d.chunk.js.map