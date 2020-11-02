(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{34:function(e,t,a){},41:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},52:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),l=a(12),c=a(13),o=a(36),u=a(37),p=a(40),m=a(39),f=(a(50),function(){return r.a.createElement("div",{className:"header d-flex align-items-center"},r.a.createElement("h2",{className:"header__title"},"Star DB"),r.a.createElement("ul",{className:"header__list d-sm-flex"},r.a.createElement("li",{className:"header__item"},r.a.createElement(c.b,{className:"header-item__link",to:"/people"},"People")),r.a.createElement("li",{className:"header__item"},r.a.createElement(c.b,{className:"header-item__link",to:"/planets"},"Planets")),r.a.createElement("li",{className:"header__item"},r.a.createElement(c.b,{className:"header-item__link",to:"/starships"},"Starships"))))}),g=(a(52),a(4)),d=a(1),E=a.n(d),P=a(5),h=a(2),_=a(23),S=a.n(_),I=S.a.create({baseURL:"//swapi.dev/api/"}),b=S.a.create({baseURL:"//starwars-visualguide.com/assets/img/"}),v=function(e){return b.get("characters/".concat(e,".jpg")).then((function(e){return e.request.responseURL}))},O=function(e){return b.get("planets/".concat(e,".jpg")).then((function(e){return e.request.responseURL})).catch((function(){return null}))},j=function(e){return b.get("starships/".concat(e,".jpg")).then((function(e){return e.request.responseURL})).catch((function(){return null}))},N=function(e){return I.get("people/?page=".concat(e)).then((function(e){return e.data.results})).catch((function(){return null}))},T=function(e){return I.get("planets/?page=".concat(e)).then((function(e){return e.data.results})).catch((function(){return null}))},U=function(e){return I.get("starships/?page=".concat(e)).then((function(e){return e.data.results})).catch((function(){return null}))},y={getPerson:function(e){return I.get("people/".concat(e)).then((function(e){return e.data}))},getPlanetInfo:function(e){return I.get("planets/".concat(e)).then((function(e){return e.data}))},getStarshipsInfo:function(e){return I.get("starships/".concat(e)).then((function(e){return e.data}))}},w=function(e){return e.match(/\/([0-9]*)\/$/)[1]},L={imageUrlPlanet:"",listPlanets:[],idItemPlanets:1,planetInfo:[],pagePlanets:1,randomPlanets:[],randomUrlImage:null},x=function(e){return{type:"SET_IMAGE_URL_PLANETS",imageUrlPlanet:e}},A=function(e){return{type:"SET_PLANET_INFO",planetInfo:e}},k=function(e){return{type:"SET_ID_ITEM_PLANETS",idItemPlanets:e}},D=function(e){return{type:"SET_NEW_PAGE_PLANETS",pagePlanets:e}},R=function(e){return{type:"SET_RANDOM_URL_IMAGE",randomUrlImage:e}},q=function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://starwars-visualguide.com/assets/img/big-placeholder.jpg",t.next=3,O(e);case 3:r=t.sent,a(x(r||n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return{id:+w(e.url),name:e.name,diameter:e.diameter,population:e.population,rotationPeriod:e.rotation_period}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGE_URL_PLANETS":return Object(h.a)(Object(h.a)({},e),{},{imageUrlPlanet:t.imageUrlPlanet});case"SET_LIST_PLANET":return Object(h.a)(Object(h.a)({},e),{},{listPlanets:t.listPlanets});case"SET_PLANET_INFO":return Object(h.a)(Object(h.a)({},e),{},{planetInfo:[t.planetInfo]});case"SET_ID_ITEM_PLANETS":return Object(h.a)(Object(h.a)({},e),{},{idItemPlanets:t.idItemPlanets});case"SET_NEW_PAGE_PLANETS":return Object(h.a)(Object(h.a)({},e),{},{pagePlanets:t.pagePlanets});case"SET_RANDOM_PLANETS":return Object(h.a)(Object(h.a)({},e),{},{randomPlanets:t.randomPlanets});case"SET_RANDOM_URL_IMAGE":return Object(h.a)(Object(h.a)({},e),{},{randomUrlImage:t.randomUrlImage});default:return e}},C=a(6),F=(a(71),a(72),function(){return r.a.createElement("div",{className:"col-sm-2 spiner"},r.a.createElement("div",{id:"nest3"}))}),H=function(e){var t=e.details,a=t.diameter,n=t.population,s=t.rotationPeriod;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Diametr: ",a),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Population: ",n),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Rotation Period: ",s))},W=function(e){var t=e.details,a=t.gender,n=t.birthYear,s=t.eyeColor;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Gender: ",a),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Birth year: ",n),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Eye color: ",s))},B=function(e){var t=e.details,a=t.model,n=t.manufacturer,s=t.costInCredits,i=t.length,l=t.crew,c=t.passengers,o=t.cargo_capacity;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Model: ",a),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Manufacturer: ",n),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Cost in credits: ",s),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Length: ",i),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Crew: ",l),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Passengers: ",c),r.a.createElement("li",{className:"personDetails-list__item list-group-item "},"Cargo Capacity: ",o))},J=function(e){var t=e.imageUrl,a=e.info,n=e.way,s=a.map((function(e){var a=e.name;return r.a.createElement("div",{key:a,className:"personDetails d-flex jumbotron"},r.a.createElement("div",{className:"personDetails__img"},r.a.createElement("img",{className:"personDetails__picture",src:t,alt:""})),r.a.createElement("div",{className:"personDetails__description"},r.a.createElement("div",{className:"personDetails__title"},r.a.createElement("h3",{className:"personDetails-title__name"},a," ")),r.a.createElement("ul",{className:"personDetails__list list-group list-group-flush m-0"},"planet"===n?r.a.createElement(H,{details:e}):"people"===n?r.a.createElement(W,{details:e}):r.a.createElement(B,{details:e}))))}));return t&&a?r.a.createElement(r.a.Fragment,null,s):r.a.createElement(F,null)},X=(a(73),function(e){var t=e.list,a=e.page,s=e.togglePage,i=e.requestList,l=e.children;return Object(n.useEffect)((function(){i(a)}),[a,i]),a?r.a.createElement("div",{className:"item-list mr-5"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("button",{className:a>1?"btn btn-dark":"btn btn-dark disabled",onClick:a>1?function(){return s("m",a)}:null},"Previous page"),r.a.createElement("span",{className:"d-inline-flex p-2 bd-highlight"},a," number page "),r.a.createElement("button",{className:t.length?"btn btn-dark":"btn btn-dark disabled",onClick:t.length?function(){return s("p",a)}:null},"Next page"))),r.a.createElement("ul",{className:"list-group"},l)):r.a.createElement(F,null)}),Y=(a(34),function(e){var t=e.setStartId,a=e.getUrlimage,s=e.requestInfo,i=e.idItem,l=e.children;return Object(n.useEffect)((function(){t(i),a(i),s(i)}),[i,t,a,s]),r.a.createElement("div",{className:"blockPage"},l)}),V=a(18),$=function(e){var t=e.list,a=e.setStartId,s=e.idItem,i=e.way,l=t.map((function(e){var t=Object.values(e),n=Object(V.a)(t,4),l=n[0],c=n[1],o=n[2],u=n[3];return r.a.createElement("li",{id:l,key:l,onClick:function(){a(l)},className:l!==s?"list-group-item list-group-item-action list":"list-group-item list-group-item-action list active"},r.a.createElement("span",{className:"name"},c)," ","starships"!==i?r.a.createElement("span",{className:"label"},o,", ",u):null)}));return t?r.a.createElement(n.Fragment,null,l):r.a.createElement(F,null)},z=Object(C.d)(Object(l.b)((function(e){return{idItemPlanets:e.planetsPage.idItemPlanets,imageUrlPlanet:e.planetsPage.imageUrlPlanet,planetInfo:e.planetsPage.planetInfo,listPlanets:e.planetsPage.listPlanets,pagePlanets:e.planetsPage.pagePlanets}}),{setStartIdPlanets:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(k(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUrlimagePlanet:q,requestPlanetInfo:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getPlanetInfo(e);case 2:n=t.sent,a(A(M(n)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestListPlanets:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n,r,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:if(n=t.sent,r=n?n.map(M):[],a({type:"SET_LIST_PLANET",listPlanets:r}),t.t0=n,!t.t0){t.next=10;break}return t.next=9,r[0].id;case 9:t.t0=t.sent;case 10:s=t.t0,a(k(s));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},togglePagePlanet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"p",t=arguments.length>1?arguments[1]:void 0;return function(){var a=Object(P.a)(E.a.mark((function a(n){var r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="m"===e?t-1:t+1,a.next=3,n(D(r));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}))((function(e){var t=e.setStartIdPlanets,a=e.imageUrlPlanet,n=e.planetInfo,s=e.listPlanets,i=e.requestListPlanets,l=e.requestPlanetInfo,c=e.getUrlimagePlanet,o=e.pagePlanets,u=e.idItemPlanets;return r.a.createElement(Y,{getUrlimage:c,requestInfo:l,idItem:u,setStartId:t},r.a.createElement(X,{list:s,page:o,togglePage:e.togglePagePlanet,requestList:i},r.a.createElement($,{list:s,setStartId:t,idItem:u})),r.a.createElement(J,{imageUrl:a,info:n,way:"planet"}))})),K={imageUrlPeople:null,listPeople:[],idItemPeople:1,peopleInfo:[],pagePeople:1},Q=function(e){return{type:"SET_ID_ITEM_PEOPLE",idItemPeople:e}},Z=function(e){return{type:"SET_NEW_PAGE_PEOPLE",pagePeople:e}},ee=function(e){return{id:+w(e.url),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color,hairColor:e.hair_color}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGE_URL_PEOPLE":return Object(h.a)(Object(h.a)({},e),{},{imageUrlPeople:t.imageUrlPeople});case"SET_LIST_PEOPLE":return Object(h.a)(Object(h.a)({},e),{},{listPeople:t.listPeople});case"SET_PEOPLE_INFO":return Object(h.a)(Object(h.a)({},e),{},{peopleInfo:[t.peopleInfo]});case"SET_ID_ITEM_PEOPLE":return Object(h.a)(Object(h.a)({},e),{},{idItemPeople:t.idItemPeople});case"SET_NEW_PAGE_PEOPLE":return Object(h.a)(Object(h.a)({},e),{},{pagePeople:t.pagePeople});default:return e}},ae=Object(C.d)(Object(l.b)((function(e){return{idItemPeople:e.peoplePage.idItemPeople,imageUrlPeople:e.peoplePage.imageUrlPeople,listPeople:e.peoplePage.listPeople,peopleInfo:e.peoplePage.peopleInfo,pagePeople:e.peoplePage.pagePeople}}),{setStartIdPeople:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(Q(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUrlimagePeople:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:n=t.sent,a({type:"SET_IMAGE_URL_PEOPLE",imageUrlPeople:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestPeopleInfo:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getPerson(e);case 2:n=t.sent,a({type:"SET_PEOPLE_INFO",peopleInfo:ee(n)});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestListPeople:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n,r,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:if(n=t.sent,r=n?n.map(ee):[],a({type:"SET_LIST_PEOPLE",listPeople:r}),t.t0=n,!t.t0){t.next=10;break}return t.next=9,r[0].id;case 9:t.t0=t.sent;case 10:s=t.t0,a(Q(s));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},togglePagePeople:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"p",t=arguments.length>1?arguments[1]:void 0;return function(){var a=Object(P.a)(E.a.mark((function a(n){var r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="m"===e?t-1:t+1,a.next=3,n(Z(r));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}))((function(e){var t=e.setStartIdPeople,a=e.getUrlimagePeople,n=e.requestPeopleInfo,s=e.listPeople,i=e.peopleInfo,l=e.requestListPeople,c=e.imageUrlPeople,o=e.pagePeople,u=e.idItemPeople,p=e.togglePagePeople;return r.a.createElement(Y,{getUrlimage:a,requestInfo:n,idItem:u,setStartId:t},r.a.createElement(X,{list:s,page:o,togglePage:p,requestList:l},r.a.createElement($,{list:s,setStartId:t,idItem:u})),r.a.createElement(J,{imageUrl:c,info:i,way:"people"}))})),ne={imageUrlStarships:null,listStarships:[],idItemStarships:1,starshipsInfo:[],pageStarships:1},re=function(e){return{type:"SET_IMAGE_URL_STARSHIPS",imageUrlStarships:e}},se=function(e){return{type:"SET_ID_ITEM_STARSHIPS",idItemStarships:e}},ie=function(e){return{type:"SET_NEW_PAGE_STARSHIPS",pageStarships:e}},le=function(e){return{id:+w(e.url),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargo_capacity:e.cargo_capacity}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGE_URL_STARSHIPS":return Object(h.a)(Object(h.a)({},e),{},{imageUrlStarships:t.imageUrlStarships});case"SET_LIST_STARSHIPS":return Object(h.a)(Object(h.a)({},e),{},{listStarships:t.listStarships});case"SET_STARSHIPS_INFO":return Object(h.a)(Object(h.a)({},e),{},{starshipsInfo:[t.starshipsInfo]});case"SET_ID_ITEM_STARSHIPS":return Object(h.a)(Object(h.a)({},e),{},{idItemStarships:t.idItemStarships});case"SET_NEW_PAGE_STARSHIPS":return Object(h.a)(Object(h.a)({},e),{},{pageStarships:t.pageStarships});default:return e}},oe=Object(C.d)(Object(l.b)((function(e){return{idItemStarships:e.starshipsPage.idItemStarships,imageUrlStarships:e.starshipsPage.imageUrlStarships,starshipsInfo:e.starshipsPage.starshipsInfo,listStarships:e.starshipsPage.listStarships,pageStarships:e.starshipsPage.pageStarships}}),{setStartIdStarships:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(se(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},togglePageStarships:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"p",t=arguments.length>1?arguments[1]:void 0;return function(){var a=Object(P.a)(E.a.mark((function a(n){var r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="m"===e?t-1:t+1,a.next=3,n(ie(r));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},requestStarshipsInfo:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getStarshipsInfo(e);case 2:n=t.sent,a({type:"SET_STARSHIPS_INFO",starshipsInfo:le(n)});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUrlimageStarships:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://starwars-visualguide.com/assets/img/big-placeholder.jpg",t.next=3,j(e);case 3:r=t.sent,a(re(r||n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestListStarships:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n,r,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:if(n=t.sent,r=n?n.map(le):[],a({type:"SET_LIST_STARSHIPS",listStarships:r}),t.t0=n,!t.t0){t.next=10;break}return t.next=9,r[0].id;case 9:t.t0=t.sent;case 10:s=t.t0,a(se(s));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))((function(e){return r.a.createElement(Y,{getUrlimage:e.getUrlimageStarships,requestInfo:e.requestStarshipsInfo,idItem:e.idItemStarships,setStartId:e.setStartIdStarships},r.a.createElement(X,{list:e.listStarships,page:e.pageStarships,togglePage:e.togglePageStarships,requestList:e.requestListStarships},r.a.createElement($,{list:e.listStarships,setStartId:e.setStartIdStarships,idItem:e.idItemStarships,way:"starships"})),r.a.createElement(J,{imageUrl:e.imageUrlStarships,info:e.starshipsInfo,way:"starships"}))})),ue=function(){return r.a.createElement("div",{className:"container "},r.a.createElement(g.a,{path:"/people"},r.a.createElement(ae,null)),r.a.createElement(g.a,{path:"/planets"},r.a.createElement(z,null)),r.a.createElement(g.a,{path:"/starships"},r.a.createElement(oe,null)))},pe=(a(74),function(e){var t=e.info,a=e.imageUrl;return a&&t?r.a.createElement("div",{className:"random-planet d-flex jumbotron mb-5 rounded "},r.a.createElement(me,{info:t,imageUrl:a})):r.a.createElement(F,null)}),me=function(e){var t=e.info,a=e.imageUrl,s=t.name,i=t.rotationPeriod,l=t.population,c=t.diameter;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"random-planet__image"},r.a.createElement("img",{className:"random-planet__picture",src:a,alt:""})),r.a.createElement("div",{className:"random-planet__description"},r.a.createElement("h2",{className:"random-planet__title"},s),r.a.createElement("ul",{className:"random-planet__list list-group list-group-flush"},r.a.createElement("li",{className:"random-planet__item list-group-item "},"Population: ",l," "),r.a.createElement("li",{className:"random-planet__item list-group-item "},"Rotation period: ",i),r.a.createElement("li",{className:"random-planet__item list-group-item "},"Diameter ",c))))},fe=Object(C.d)(Object(l.b)((function(e){return{randomPlanets:e.planetsPage.randomPlanets,randomUrlImage:e.planetsPage.randomUrlImage}}),{requestRandomPlanet:function(e){return function(){var t=Object(P.a)(E.a.mark((function t(a){var n,r,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.getPlanetInfo(e);case 2:return n=t.sent,a({type:"SET_RANDOM_PLANETS",randomPlanets:M(n)}),r="https://starwars-visualguide.com/assets/img/big-placeholder.jpg",t.next=7,O(e);case 7:s=t.sent,a(R(s||r));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUrlimagePlanet:q}))((function(e){var t=e.randomPlanets,a=e.requestRandomPlanet,s=e.randomUrlImage,i=Object(n.useState)(2),l=Object(V.a)(i,2),c=l[0],o=l[1],u=Math.round(16*Math.random()+2),p=setTimeout((function(){return o(u)}),5e3);return Object(n.useEffect)((function(){a(c)}),[a,c]),Object(n.useEffect)((function(){return function(){clearTimeout(p)}}),[p]),r.a.createElement("div",null,r.a.createElement(pe,{info:t,imageUrl:s}))})),ge=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container app"},r.a.createElement(f,null),r.a.createElement(fe,null),r.a.createElement(ue,null))}}]),a}(n.Component),de=a(38),Ee=Object(C.c)({planetsPage:G,peoplePage:te,starshipsPage:ce}),Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.d,he=Object(C.e)(Ee,Pe(Object(C.a)(de.a)));i.a.render(r.a.createElement(c.a,null,r.a.createElement(l.a,{store:he},r.a.createElement(ge,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.dfcf464a.chunk.js.map