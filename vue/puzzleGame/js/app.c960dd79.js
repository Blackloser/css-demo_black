(function(e){function t(t){for(var r,o,s=t[0],a=t[1],c=t[2],p=0,u=[];p<s.length;p++)o=s[p],n[o]&&u.push(n[o][0]),n[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);h&&h(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],r=!0,s=1;s<l.length;s++){var a=l[s];0!==n[a]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=l[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=r,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(l,r,function(t){return e[t]}.bind(null,r));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var h=a;i.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"034f":function(e,t,l){"use strict";var r=l("64a9"),n=l.n(r);n.a},"56d7":function(e,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("097d");var r=l("2b0e"),n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"app"}},[l("puzzleGame")],1)},i=[],o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("button",{on:{click:e.play}},[e._v("开始")]),l("div",{style:{width:e.areaWidth+"px",height:e.areaHeight+"px"},attrs:{id:"play_area"}})])},s=[],a=(l("28a5"),l("2909")),c={data:function(){return{playArea:null,cellArr:[],cellRow:4,cellCol:4,img:"",imgArr:[],cellWidth:0,cellHeight:0,cellIndex:0,cellLeft:"",cellTop:"",ranArr:[],areaWidth:300,areaHeight:300}},methods:{init:function(){var e,t;this.cellWidth=this.areaWidth/this.cellCol,this.cellHeight=this.areaHeight/this.cellRow;for(var l=0;l<this.cellRow;l++)for(var r=0;r<this.cellCol;r++)this.imgArr.push(l*this.cellCol+r),t=document.createElement("div"),t.className="play_cell",t.style.width=this.cellWidth+"px",t.style.height=this.cellHeight+"px",t.style.left=r*this.cellWidth+"px",t.style.top=l*this.cellHeight+"px",t.style.background="url("+this.img+")",t.style.backgroundPosition=-r*this.cellWidth+"px "+-l*this.cellHeight+"px",t.ondragstart=function(){return!1},this.cellArr.push(t);(e=this.playArea).append.apply(e,Object(a["a"])(this.cellArr))},play:function(){this.randomImg(),this.bindCell()},randomImg:function(){var e,t;e=this.imgArr.slice(),this.ranArr=[];for(var l=0,r=e.length;l<r;l++){t=Math.floor(Math.random()*e.length),this.ranArr.push(e[t]);var n=-e[t]%this.cellCol*this.cellWidth+"px",i=-Math.floor(e[t]/this.cellCol)*this.cellHeight+"px";this.cellArr[l].style.backgroundPosition=n+" "+i,e.splice(t,1)}},bindCell:function(){for(var e=this,t=this,l=function(l,r){e.cellArr[l].onmouseover=function(){t.cellArr[l].style.filter="alpha(opacity=80)",t.cellArr[l].style.opacity=".8",t.cellArr[l].style.boxShadow="0px 0px 8px #000",t.cellArr[l].style.zIndex="90"},e.cellArr[l].onmouseout=function(){t.cellArr[l].style.filter="",t.cellArr[l].style.opacity="",t.cellArr[l].style.boxShadow="",t.cellArr[l].style.zIndex="80"},e.cellArr[l].onmousedown=function(e){return t.cellDown(e,t.cellArr[l]),e.preventDefault(),!1}},r=0,n=this.cellArr.length;r<n;r++)l(r,n)},cellDown:function(e,t){var l=this,r=this.playArea.offsetLeft,n=this.playArea.offsetTop,i=e.pageX-this.playArea.offsetLeft-t.offsetLeft,o=e.pageY-this.playArea.offsetTop-t.offsetTop;this.cellLeft=t.style.left.split("px")[0],this.cellTop=t.style.top.split("px")[0],this.cellIndex=Math.floor(parseInt(this.cellTop)/this.cellHeight)*this.cellCol+Math.floor(parseInt(this.cellLeft)/this.cellWidth),t.style.zIndex="99",document.onmousemove=function(e){t.style.left=e.pageX-r-i+"px",t.style.top=e.pageY-n-o+"px"},document.onmouseup=function(e){var i,o,s,a;(document.onmousemove=null,document.onmouseup=null,e.pageX-r<0||e.pageX-r>l.areaWidth||e.pageY-n<0||e.pageY-n>l.areaHeight)?l.returnCell(t):(i=e.pageX-r,o=e.pageY-n,s=Math.floor(o/l.cellHeight),a=Math.floor(i/l.cellWidth),l.nextIndex=s*l.cellCol+a,l.nextIndex===l.cellIndex?l.returnCell(t):l.changeCell())}},returnCell:function(e){var t=this,l=setInterval(function(){e.style.left=t.cellLeft+"px",e.style.top=t.cellTop+"px",clearInterval(l)})},changeCell:function(){var e=this.cellArr[this.cellIndex],t=this.cellLeft,l=this.cellTop,r=this.cellArr[this.nextIndex],n=this.nextIndex%this.cellCol*this.cellWidth,i=Math.floor(this.nextIndex/this.cellCol)*this.cellHeight;r.style.zIndex="98",this.ranArr[this.nextIndex]=this.ranArr[this.nextIndex]+this.ranArr[this.cellIndex],this.ranArr[this.cellIndex]=this.ranArr[this.nextIndex]-this.ranArr[this.cellIndex],this.ranArr[this.nextIndex]=this.ranArr[this.nextIndex]-this.ranArr[this.cellIndex],e.style.left=n+"px",e.style.top=i+"px",r.style.left=t+"px",r.style.top=l+"px",this.cellArr[this.nextIndex]=e,this.cellArr[this.cellIndex]=r;var o=setInterval(function(){r.style.zIndex="",r.style.filter="",r.style.opacity="",r.style.boxShadow="",e.style.zIndex="",e.style.filter="",e.style.opacity="",e.style.boxShadow="",clearInterval(o)});this.ranArr.join()==this.imgArr.join()&&alert("success"),this.bindCell()}},mounted:function(){this.playArea=this.$el.querySelector("#play_area"),this.img=l("79e3"),this.init()}},h=c,p=(l("c870"),l("2877")),u=Object(p["a"])(h,o,s,!1,null,null,null);u.options.__file="puzzleGame.vue";var f=u.exports,d={name:"app",components:{puzzleGame:f}},x=d,y=(l("034f"),Object(p["a"])(x,n,i,!1,null,null,null));y.options.__file="App.vue";var g=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,t,l){},"79e3":function(e,t,l){e.exports=l.p+"vue/puzzleGame/img/puzzle.d063f083.jpg"},abe3:function(e,t,l){},c870:function(e,t,l){"use strict";var r=l("abe3"),n=l.n(r);n.a}});
//# sourceMappingURL=app.c960dd79.js.map