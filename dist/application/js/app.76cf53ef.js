(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,v=[];d<c.length;d++)i=c[d],a[i]&&v.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/application/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("04f5"),a=n.n(r);a.a},"04f5":function(e,t,n){},13:function(e,t){},"14e1":function(e,t,n){"use strict";var r=n("2866"),a=n.n(r);a.a},1650:function(e,t,n){},"184c":function(e,t,n){},2866:function(e,t,n){},"3c14":function(e,t,n){"use strict";var r=n("184c"),a=n.n(r);a.a},"4f82":function(e,t,n){"use strict";var r=n("b167"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var r=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"material-icons"},[e._v("home")])]),n("router-link",{attrs:{to:"/profile"}},[n("i",{staticClass:"material-icons"},[e._v("person")])]),n("router-link",{attrs:{to:"/graph"}},[n("i",{staticClass:"material-icons"},[e._v("bar_chart")])]),n("router-link",{attrs:{to:"/form"}},[n("i",{staticClass:"material-icons"},[e._v("assignment")])])],1)},c=[],s={name:"Navbar",props:{}},l=s,u=(n("6dec"),n("2877")),d=Object(u["a"])(l,i,c,!1,null,"2efffffa",null),v=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"current-view"},[n("span",[e._v("© 2018 - 2019 Nathan Gordon")])])}],p={name:"Footer",props:{}},m=p,b=(n("4f82"),Object(u["a"])(m,f,h,!1,null,"14eca903",null)),g=b.exports,_={name:"app",components:{Navbar:v,Footer:g},methods:{mounted:function(){var e={apiKey:"AIzaSyDbZM64iVkXZZTNKBYQOinSvrUSz-nyh4g",authDomain:"scoutbase-testing.firebaseapp.com",databaseURL:"https://scoutbase-testing.firebaseio.com",projectId:"scoutbase-testing",storageBucket:"scoutbase-testing.appspot.com",messagingSenderId:"84655105633"};firebase.initializeApp(e),null==firebase.auth().currentUser&&(alert("You must login before accessing Scoutbase"),location.href="./login.html")}}},y=_,w=(n("034f"),Object(u["a"])(y,a,o,!1,null,null,null)),S=w.exports,C=n("951b"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"current-view"},[n("h1",[e._v("Welcome to Scoutbase!")]),n("h3",[e._v("Hey! Before scouting be sure to set your event from the dropdown below.")]),n("br"),n("br"),n("label",{staticStyle:{"padding-right":"1em"}},[e._v("Set Event Key: ")]),n("select",{staticStyle:{margin:"0.5em",height:"30px",border:"solid 1px #363486",padding:"0.4em",color:"black","border-radius":"0.5em"},attrs:{id:"event-select",placeholder:"Loading events..."},on:{change:e.evtKeyChange}}),n("br"),n("br"),n("label",[e._v("Current Event Key: "+e._s(e.evtKey))]),n("br"),n("br"),n("v-expansion-panel",{staticClass:"root-expansion"},[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h3",[e._v("Upcoming FIRST Robotics Events")])]),n("v-card",e._l(e.evts,function(e,t){return n("event-item",{key:t,staticClass:"child-expansion",attrs:{event:e}})}))],1)],1)],1)},T=[],E=(n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("55dd"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panel",[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h4",[e._v(e._s(e.event.name))])]),n("v-card",[n("v-card-text",[e._v("\n                FIRST Event in "+e._s(e.event.city)+", "+e._s(e.event.state_prov)+" "+e._s(e.event.country)),n("br"),n("br"),e._v("\n                From "+e._s(e.event.start_date)+" to "+e._s(e.event.end_date)),n("br"),n("br"),e._v("\n                Event Key: "+e._s(e.event.key)),n("br"),n("br"),e._v("\n                Event Type: "+e._s(e.event.event_type_string)),n("br"),n("br"),e._v("\n                View in Google Maps: "),n("a",{attrs:{href:e.event.gmaps_url}},[e._v(e._s(e.event.address))])])],1)],1)],1)}),A=[],O={name:"event-item",props:{event:Object}},k=O,M=(n("3c14"),Object(u["a"])(k,E,A,!1,null,"38bd0410",null)),j=M.exports,F={name:"Home",components:{EventItem:j},data:function(){return{evts:[],evtKey:window.localStorage.getItem("evt")||"unset"}},methods:{getEvents:function(){var e=this;this.$http.get("https://www.thebluealliance.com/api/v3/events/2018?X-TBA-Auth-Key=l546X6HHpPOiuPH0ZtO4rMgY1FvUWYIb9ruZRSdBcMlOsKBlMuyPzplegeFF7Oue").then(function(t){var n=t.body.filter(function(e){var t=(new Date).getTime(),n=new Date(e.end_date).getTime();return n>t});e.evts=n.sort(function(e,t){return e.name<t.name?-1:1});var r="",a=!0,o=!1,i=void 0;try{for(var c,s=e.evts[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;r+='<option value="'.concat(l.key,'">').concat(l.name,"</option>")}}catch(e){o=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}document.querySelector("#event-select").innerHTML=r},function(e){console.error(e)})},evtKeyChange:function(e){window.localStorage.setItem("evt",e.target.value),this.evtKey=window.localStorage.getItem("evt")}},beforeMount:function(){this.getEvents()}},N=F,I=(n("6e3a"),Object(u["a"])(N,x,T,!1,null,"4ba01c41",null)),H=I.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"current-view"},[n("h2",[e._v("Hello, "+e._s(e.name))]),n("br"),n("h3",[e._v("Upcoming Events:")]),e._m(0),n("br"),n("h2",[e._v("Event Schedule")]),n("p",[e._v("No schedule availible from TBA")]),n("br"),n("hr"),n("h2",[e._v("Settings")]),n("label",[e._v("System Issues")]),n("br"),n("button",{on:{click:e.reset}},[e._v("Fix Everything")]),n("button",{on:{click:e.reset}},[e._v("'Tis Broken")]),n("button",{on:{click:e.reset}},[e._v("This is a problem...")]),n("button",{on:{click:e.reset}},[e._v("Reset")])])},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Rah Cha Cha Ruckus, Oct 27th 2018")])])}],$={name:"Profile",props:{},data:function(){return{name:firebase.auth().currentUser.displayName}},methods:{reset:function(){location.reload(!0),location.href="./"},beforeMount:function(){firebase.auth().currentUser,fetch("./assignment.json").then(function(e){return e.json()}).then(function(e){console.log(e)})}}},q=$,B=(n("d117"),Object(u["a"])(q,K,P,!1,null,"5e556e3f",null)),U=B.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"current-view"},[n("h1",[e._v("Graph")]),n("h3",[e._v("Configure your query:")]),n("v-expansion-panel",{staticClass:"root-expansion"},[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("Select Teams"),n("h4")]),n("v-card",[n("v-card-text",{attrs:{id:"team-select"},on:{click:e.addToSelection}})],1)],1)],1),n("button",{on:{click:e.clearSelections}},[e._v("Clear Query")]),n("div",{attrs:{id:"chart-view"}})],1)},G=[],J=(n("6762"),n("2fdb"),n("456d"),{name:"Graph",props:{},data:function(){return{matches:[],selection:[]}},mounted:function(){void 0==window.localStorage.getItem("evt")?(alert("You cannot scout until you have an event key set!"),location.href=location.origin):SFDK.readOnce("/".concat(window.localStorage.getItem("evt")),function(e){window.localStorage.setItem("database",JSON.stringify(e));for(var t=JSON.parse(localStorage.getItem("database")),n=Object.keys(t),r=0;r<n.length;r++){var a=n[r],o=document.querySelector("#team-select");o.innerHTML+="".concat(a,": <button id='for-").concat(a,"_").concat(JSON.stringify(t[a]),"'>Add to Selection</button><br><br>")}})},methods:{addToSelection:function(e){if("for-"==e.target.id.substring(0,4)&&!this.selection.includes(e.target.id.substring(4,e.target.id.indexOf("_")))){var t=JSON.parse(e.target.id.substring(e.target.id.indexOf("_")+1));for(var n in this.selection.push(e.target.id.substring(4,e.target.id.indexOf("_"))),t)this.matches.push(t[n]);console.log(this.matches),this.drawGraph(this.matches)}},clearSelections:function(){this._data.selection=[],this._data.matches=[],document.querySelector("#chart-view").remove();var e=document.createElement("div");e.setAttribute("id","chart-view"),document.querySelector(".current-view").appendChild(e)},drawGraph:function(e){document.querySelector("#chart-view").remove();var t=document.createElement("div");t.setAttribute("id","chart-view"),document.querySelector(".current-view").appendChild(t);var n=!0,r=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value,s=document.createElement("div");s.className="row";var l=document.createElement("canvas");l.setAttribute("id","graph-"+c.TEAM+"-auto");new Chart(l.getContext("2d"),{type:"doughnut",data:{labels:["Auto Switch","Auto Scale"],datasets:[{label:"Auto - Team ".concat(c.TEAM," - Match ").concat(c.MATCH),data:[c.switch_auto,c.scale_auto],backgroundColor:["#d009cb","#013F8A"],borderColor:["#eeeeee"],borderWidth:2}]}});l.setAttribute("width",""),l.setAttribute("height","");var u=document.createElement("canvas");u.setAttribute("id","graph-"+c.TEAM+"-tele");new Chart(u.getContext("2d"),{type:"doughnut",data:{labels:["Tele Switch","Tele Scale","Tele Exchange"],datasets:[{label:"Tele - Team ".concat(c.TEAM," - Match ").concat(c.MATCH),data:[c.switch_tele,c.scale_tele,c.exchange_tele],backgroundColor:["#d009cb","#013F8A","#7323aa"],borderColor:["#eeeeee"],borderWidth:2}]}});u.setAttribute("width",""),u.setAttribute("height","");var d=document.createElement("label");if(window.innerWidth>=800){d.appendChild(document.createTextNode("Team: "+c.TEAM+" Match: "+c.MATCH+" - auto")),d.setAttribute("style","font-weight: bolder; color: white; width: 100%; text-align: center; display: block; padding-bottom: 0.1em;"),s.appendChild(d);d=document.createElement("label");d.appendChild(document.createTextNode("Team: "+c.TEAM+" Match: "+c.MATCH+" - tele")),d.setAttribute("style","font-weight: bolder; color: white; width: 100%; text-align: center; display: block; padding-bottom: 0.1em;"),s.appendChild(d)}else d.appendChild(document.createTextNode("Team: "+c.TEAM+" Match: "+c.MATCH)),d.setAttribute("style","font-weight: bolder; color: white; width: 100%; text-align: center; display: block; padding-bottom: 0.1em;"),s.appendChild(d);s.appendChild(u),s.appendChild(l),t.appendChild(s)}}catch(e){r=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}}}),Y=J,D=(n("14e1"),Object(u["a"])(Y,R,G,!1,null,"8579a2f4",null)),W=D.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"current-view"})},z=[],L={name:"Form",props:{},data:function(){return{}},mounted:function(){void 0==window.localStorage.getItem("evt")&&(alert("You cannot scout until you have an event key set!"),location.href=location.origin),fetch("./PowUp.json").then(function(e){return e.text()}).then(function(e){document.querySelector("#app > div:nth-child(2)").appendChild(JSFN.parse(e))})},methods:{f:function(){}}},X=L,Q=(n("5c33"),Object(u["a"])(X,Z,z,!1,null,"95d797ee",null)),V=Q.exports;r["default"].use(C["a"]);var ee=new C["a"]({mode:"history",base:"application",routes:[{path:"",name:"Home",component:H},{path:"/profile",name:"Profile",component:U},{path:"/form",name:"Form",component:V},{path:"/graph",name:"Graph",component:W}]}),te=n("28dd"),ne=n("ce5b"),re=n.n(ne),ae=n("9483");Object(ae["a"])("".concat("/application/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,r["default"].use(ee),r["default"].use(te["a"]),r["default"].use(re.a),new r["default"]({router:ee,render:function(e){return e(S)}}).$mount("#app")},"5c33":function(e,t,n){"use strict";var r=n("d948"),a=n.n(r);a.a},"6dec":function(e,t,n){"use strict";var r=n("df2d"),a=n.n(r);a.a},"6e3a":function(e,t,n){"use strict";var r=n("1650"),a=n.n(r);a.a},8162:function(e,t,n){},b167:function(e,t,n){},d117:function(e,t,n){"use strict";var r=n("8162"),a=n.n(r);a.a},d948:function(e,t,n){},df2d:function(e,t,n){}});
//# sourceMappingURL=app.76cf53ef.js.map