(this.webpackJsonpnba=this.webpackJsonpnba||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(12),r=n.n(i),c=(n(19),n(3)),l=n(4),s=n(9),u=n(5),d=n(10),m=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"header",style:{textAlign:"center",padding:20,color:"orange",fontWeight:"bold",fontSize:"25px"}},"NBA REPO"))},h=(n(20),n(26)),f=n(27),p=n(28),b=n(29),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={items:[],isLoaded:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.balldontlie.io/api/v1/teams").then((function(e){return e.json()})).then((function(t){e.setState({items:t.data,isLoaded:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items;return t?o.a.createElement("div",{className:"Team"},n.map((function(e){return o.a.createElement(h.a,{key:e.id,"data-toggle":"popover",title:e.full_name,"data-content":"{item.city}{item.destination}"},o.a.createElement(f.a,null,o.a.createElement(p.a,{id:"first"},e.name),o.a.createElement(b.a,{id:"second"},e.city)))}))):o.a.createElement("div",null,"Loading...")}}]),t}(o.a.Component),v=(n(23),o.a.Component,n(24),o.a.Component,function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement("div",null,o.a.createElement("button",{style:{width:"25%",backgroundColor:"orange",height:"30px",marginLeft:"24%",color:"white"}},"NBA Teams"),o.a.createElement("button",{style:{width:"25%",backgroundColor:"white",height:"30px",borderColor:"ghostwhite"}},"NBA Games"),o.a.createElement(g,null)))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.0c443136.chunk.js.map