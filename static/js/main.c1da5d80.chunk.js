(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(15),a(4)),i=a.n(o),s=a(7),u=a(9),m=a(1),d=(a(17),function(e){return r.a.createElement("header",null,r.a.createElement("h2",{className:"logo"},"Star Wars"),r.a.createElement("nav",null,r.a.createElement("button",{onClick:e.toListComp,className:"button-nav"},"Information list"),r.a.createElement("button",{onClick:e.toAddComp,className:"button-nav"},"Add favorite"),r.a.createElement("button",{onClick:e.toFavoritesComp,className:"button-nav"}," Favorites")))}),v=a(8),f=a.n(v),p=function(e){var t=e.nextComp;return r.a.createElement("div",{className:"Start"},r.a.createElement("div",{className:"container-start"},r.a.createElement("img",{src:f.a,alt:"Text",className:"item"}),r.a.createElement("div",{className:"flex-start"},r.a.createElement("button",{onClick:t},"Continue"))))},h=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1];var o=null;return o=e.isLoaded?e.items.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())||e.birth_year.toLowerCase().includes(c.toLowerCase())||e.gender.toLowerCase().includes(c.toLowerCase())})).map((function(t,a){return r.a.createElement("div",{key:a,className:"container-list"},r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.birth_year),r.a.createElement("p",null,t.gender),r.a.createElement("button",{className:"btn-favorite",onClick:function(){return function(t){var a={name:t.name,birth_year:t.birth_year,gender:t.gender};e.addFavorite(a)}(t)}},"Add to favorites"))})):r.a.createElement("div",{className:"loading"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"App"},r.a.createElement("input",{type:"text",placeholder:"Search",onKeyUp:function(e){l(e.target.value)}}),r.a.createElement("div",null,o))},E=function(e){var t=[],a=null;return a=0===(t=t.concat(e.favorites)).length?r.a.createElement("h2",{className:"no-favorites"},"No favorites"):t.map((function(e,t){return r.a.createElement("div",{key:t,className:"container-list"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.birth_year),r.a.createElement("p",null,e.gender),r.a.createElement("h3",{className:"own-favorite"},e.own_favorite))})),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,a))},b=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(""),v=Object(m.a)(d,2),f=v[0],p=v[1],h={name:c,birth_year:s,gender:f,own_favorite:"Own favo"};return r.a.createElement("div",{className:"Add"},r.a.createElement("div",{id:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{className:"input-add",type:"text",placeholder:"Enter the name of the character",value:c,onChange:function(e){return l(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},onClick:function(){return l("")}}),r.a.createElement("label",null,"Birth year"),r.a.createElement("input",{className:"input-add",type:"text",placeholder:"The characters birthyear",value:s,onChange:function(e){return u(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},onClick:function(){return u("")}}),r.a.createElement("label",null,"Gender"),r.a.createElement("input",{className:"input-add",type:"text",placeholder:"Enter the characters gender",value:f,onChange:function(e){return p(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1))},onClick:function(){return p("")}}),r.a.createElement("button",{className:"btn-add",onClick:function(){e.addFavorite(h)}},"Add character")))};var g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),v=o[0],f=o[1],g=Object(n.useState)(!1),C=Object(m.a)(g,2),w=C[0],N=C[1],k=function(e){c([].concat(Object(u.a)(a),[e]))},j=Object(n.useState)("start"),O=Object(m.a)(j,2),y=O[0],x=O[1],A=null;switch(y){case"start":A=r.a.createElement(p,{nextComp:function(){return x("list")}});break;case"list":A=r.a.createElement(h,{items:v,setItems:f,isLoaded:w,addFavorite:k});break;case"favorites":A=r.a.createElement(E,{favorites:a,setFavorites:c});break;case"add":A=r.a.createElement(b,{addFavorite:k});break;default:A=r.a.createElement(p,null)}return Object(n.useEffect)((function(){var e=[];!function t(a){fetch(a).then((function(e){return e.json()})).then(function(){var a=Object(s.a)(i.a.mark((function a(n){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null===(r=n.next)){a.next=7;break}return a.next=4,t(r);case 4:n.results.forEach((function(t){return e.push(t)})),a.next=9;break;case 7:f(e),N(!0);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}("https://swapi.dev/api/people/")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(d,{toListComp:function(){return x("list")},toAddComp:function(){return x("add")},toFavoritesComp:function(){return x("favorites")}}),A)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/Image1.475b7094.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.c1da5d80.chunk.js.map