(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),s=n(2),c=n(6),l=n(7),u=n(9),m=n(8),g=(n(15),n(16),n(1)),h=n.n(g),b={name:h.a.string.isRequired},d=function(e){var t=e.name;return r.a.createElement("p",null,t)},f=n(3),p=(h.a.arrayOf(h.a.shape(Object(f.a)(Object(f.a)({},b),{},{id:h.a.number.isRequired}))).isRequired,n(19),function(e){var t=e.goods;return r.a.createElement("div",{className:"card border-warning"},r.a.createElement("h1",{className:"card-header mb-3"},"Goods"),r.a.createElement("ul",{className:"list"},t.map((function(e){var t=e.name,n=e.id;return r.a.createElement("li",{key:n,className:"list__item"},r.a.createElement(d,{name:t}))}))))}),v=(h.a.func.isRequired,h.a.func.isRequired,h.a.func.isRequired,h.a.func.isRequired,function(e){var t=e.reverse,n=e.sortByAlph,a=e.sortByLength,o=e.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-warning mr-2",type:"button",onClick:t},"Reverse"),r.a.createElement("button",{className:"btn btn-warning mr-2",type:"button",onClick:n},"Sort alphabetically"),r.a.createElement("button",{className:"btn btn-warning mr-2",type:"button",onClick:a},"Sort by length"),r.a.createElement("button",{className:"btn btn-warning mr-2",type:"button",onClick:o},"Reset"))}),E=(h.a.number.isRequired,h.a.func.isRequired,n(20),function(e){var t=e.minLength,n=e.changeMinLength;return r.a.createElement("select",{name:"length",className:"select custom-select",size:"1",value:t,onChange:n},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"7"},"7"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"10"},"10"))}),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),L=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={goods:y,isVisibleGoods:!1,isVisibleButton:!0,minLength:1},e.start=function(){e.setState((function(e){return{isVisibleGoods:!e.isVisibleGoods,isVisibleButton:!e.isVisibleButton}}))},e.reverse=function(){e.setState((function(e){var t=e.goods;return{goods:Object(s.a)(t).reverse()}}))},e.changeMinLength=function(t){var n=t.target;e.setState({minLength:+n.value})},e.sortByAlph=function(){e.setState((function(e){var t=e.goods;return{goods:Object(s.a)(t).sort((function(e,t){return e.name.localeCompare(t.name)}))}}))},e.sortByLength=function(){e.setState((function(e){var t=e.goods;return{goods:Object(s.a)(t).sort((function(e,t){return e.name.length-t.name.length}))}}))},e.reset=function(){e.setState({goods:y,minLength:1})},e.filterGoods=function(){var t=e.state,n=t.goods,a=t.minLength;return n.filter((function(e){return e.name.length>=a}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isVisibleGoods,n=e.minLength,a=e.isVisibleButton,o=this.start,i=this.reverse,s=this.sortByAlph,c=this.sortByLength,l=this.reset,u=this.changeMinLength,m=this.filterGoods;return r.a.createElement("div",{className:"App m-auto"},a&&r.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:o},"Start"),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-3"},r.a.createElement(v,{reverse:i,sortByAlph:s,sortByLength:c,reset:l}),r.a.createElement(E,{minLength:n,changeMinLength:u})),r.a.createElement(p,{goods:m()})))}}]),n}(r.a.Component);i.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.9ee98afb.chunk.js.map