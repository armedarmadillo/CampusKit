/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-localstorage-touch-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_overflow_scrolling-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a)if(j[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;","<style>",a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e});var H=function(c,d){var f=c.join(""),g=d.length;w(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9},g,d)}([,["@media (",m.join("touch-enabled),("),h,")","{#touch{top:9px;position:absolute}}"].join("")],[,"touch"]);q.touch=function(){return e.touch},q.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}};for(var I in q)z(q,I)&&(v=I.toLowerCase(),e[v]=q[I](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.hasEvent=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")});
var Hogan={};(function(j,h){j.Template=function(o,p,n,m){this.r=o||this.r;this.c=n;this.options=m;this.text=p||"";this.buf=(h)?[]:""};j.Template.prototype={r:function(o,n,m){return""},v:c,t:e,render:function b(o,n,m){return this.ri([o],n||{},m)},ri:function(o,n,m){return this.r(o,n,m)},rp:function(o,q,p,m){var n=p[o];if(!n){return""}if(this.c&&typeof n=="string"){n=this.c.compile(n,this.options)}return n.ri(q,p,m)},rs:function(p,o,q){var m=p[p.length-1];if(!g(m)){q(p,o,this);return}for(var n=0;n<m.length;n++){p.push(m[n]);q(p,o,this);p.pop()}},s:function(s,n,q,o,t,m,p){var r;if(g(s)&&s.length===0){return false}if(typeof s=="function"){s=this.ls(s,n,q,o,t,m,p)}r=(s==="")||!!s;if(!o&&r&&n){n.push((typeof s=="object")?s:n[n.length-1])}return r},d:function(q,n,p,r){var s=q.split("."),t=this.f(s[0],n,p,r),m=null;if(q==="."&&g(n[n.length-2])){return n[n.length-1]}for(var o=1;o<s.length;o++){if(t&&typeof t=="object"&&s[o] in t){m=t;t=t[s[o]]}else{t=""}}if(r&&!t){return false}if(!r&&typeof t=="function"){n.push(m);t=this.lv(t,n,p);n.pop()}return t},f:function(q,m,p,r){var t=false,n=null,s=false;for(var o=m.length-1;o>=0;o--){n=m[o];if(n&&typeof n=="object"&&q in n){t=n[q];s=true;break}}if(!s){return(r)?false:""}if(!r&&typeof t=="function"){t=this.lv(t,m,p)}return t},ho:function(s,m,p,r,o){var q=this.c;var n=this.options;n.delimiters=o;var r=s.call(m,r);r=(r==null)?String(r):r.toString();this.b(q.compile(r,n).render(m,p));return false},b:(h)?function(m){this.buf.push(m)}:function(m){this.buf+=m},fl:(h)?function(){var m=this.buf.join("");this.buf=[];return m}:function(){var m=this.buf;this.buf="";return m},ls:function(n,u,r,o,m,p,v){var q=u[u.length-1],s=null;if(!o&&this.c&&n.length>0){return this.ho(n,q,r,this.text.substring(m,p),v)}s=n.call(q);if(typeof s=="function"){if(o){return true}else{if(this.c){return this.ho(s,q,r,this.text.substring(m,p),v)}}}return s},lv:function(q,o,p){var n=o[o.length-1];var m=q.call(n);if(typeof m=="function"){m=e(m.call(n));if(this.c&&~m.indexOf("{\u007B")){return this.c.compile(m,this.options).render(n,p)}}return e(m)}};var i=/&/g,d=/</g,a=/>/g,l=/\'/g,k=/\"/g,f=/[&<>\"\']/;function e(m){return String((m===null||m===undefined)?"":m)}function c(m){m=e(m);return f.test(m)?m.replace(i,"&amp;").replace(d,"&lt;").replace(a,"&gt;").replace(l,"&#39;").replace(k,"&quot;"):m}var g=Array.isArray||function(m){return Object.prototype.toString.call(m)==="[object Array]"}})(typeof exports!=="undefined"?exports:Hogan);
var ucsf=ucsf||{},_gaq=_gaq||[];ucsf.analytics=function(){var e={},t="UA-15855907-1",a=[{a:"UA-552286-29",s:"/library/"}];e.trackPageview=function(e){e=e||window.location.pathname+window.location.search+window.location.hash;_gaq.push(["_trackPageview",e]);for(var t=0;a.length>t;t++)e.substring(0,a[t].s.length)===a[t].s&&_gaq.push(["t"+t+"._trackPageview",e])};e.init=function(e){e=e||navigator.userAgent;_gaq.push(["_setAccount",t]);for(var n=0;a.length>n;n++)_gaq.push(["t"+n+"._setAccount",a[n].a]);/ mwf\-native\-[a-z]*\/[\d\.]*$/i.test(e)&&_gaq.push(["_setCustomVar",1,"mwf_native_client","1"]);_gaq.push(["_setSiteSpeedSampleRate",100]);this.trackPageview()};var n=document.createElement("script");n.src="//www.google-analytics.com/ga.js";document.getElementsByTagName("head")[0].appendChild(n);return e}();ucsf.analytics.init();(function(){"use strict";if("addEventListener"in document){var e,t,a,n,o,r,i,s,l,c,d,m=[],u=[],f=[];i=[];s=function(){i.splice(0,2)};l=function(e,t){i.push(e,t);window.setTimeout(s,2500)};c=function(e){var t,a,n;for(t=0;i.length>t;t+=2){a=i[t];n=i[t+1];if(25>Math.abs(e.clientX-a)&&25>Math.abs(e.clientY-n)){e.stopPropagation();e.preventDefault()}}};document.addEventListener("click",c,!0);t=function(e,t){this.element=e;this.handler=t;e.addEventListener("touchstart",this,!1);e.addEventListener("click",this,!1)};t.prototype.handleEvent=function(e){switch(e.type){case"touchstart":this.onTouchStart(e);break;case"touchmove":this.onTouchMove(e);break;case"touchend":this.onClick(e);break;case"click":this.onClick(e)}};t.prototype.onTouchStart=function(e){e.stopPropagation();this.element.addEventListener("touchend",this,!1);document.body.addEventListener("touchmove",this,!1);this.startX=e.touches[0].clientX;this.startY=e.touches[0].clientY};t.prototype.onTouchMove=function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&this.reset()};t.prototype.onClick=function(e){e.stopPropagation();this.reset();this.handler(e);"touchend"===e.type&&l(this.startX,this.startY)};t.prototype.reset=function(){this.element.removeEventListener("touchend",this,!1);document.body.removeEventListener("touchmove",this,!1)};a=function(e,t){var a=f.indexOf(t);if(0>a){a=f.length;f.push(t)}u[a]=e};n=function(e,t,n){n=n||location.pathname+location.hash;a(e,n);history.replaceState(e,t,n)};o=function(e){var t=e?location.pathname+"#/"+e:location.pathname+location.hash,a=f.indexOf(t);return 0>a?void 0:u[a]};r=function(e,t){0>e.indexOf(t)&&e.push(t);return e};d=function(){function i(t,a){var n,o,r;o=document.getElementById(t)||document.getElementById(e);if(o){for(r=0;a.length>r;r+=1){n=document.getElementById(a[r]);n&&n.setAttribute("style","display:none")}o.setAttribute("style","display:block")}}var s,l,c,d;e=document.body.getAttribute("data-default-target-id")||"";location.hash||""===e||(location.hash="#/"+e);i(location.hash.substring(2),[e]);if(history instanceof Object&&history.replaceState instanceof Function){c=function(t){var a,s,l,c,d,m;a=this.element.getAttribute("data-target-id");s=document.getElementById(a);if(null!==s){t.preventDefault();l=document.getElementById(location.hash.substr(2));c=l?l.getAttribute("id"):e;i(a,[c]);d=o();m=d&&d.hasOwnProperty("hide")?r(d.hide,a):[a];n({show:c,hide:m},"");location.hash="#/"+a;d=o();m=d&&d.hasOwnProperty("hide")?r(d.hide,c):[c];n({show:a,hide:m},"")}};s=document.getElementsByTagName("a");for(l=0;s.length>l;l+=1)null!==s[l].getAttribute("data-target-id")&&m.push(new t(s[l],c));d=function(e){var t,n,s;t=o();t&&i(t.show,t.hide);if(e.state){for(l=0;e.state.hide.length>l;l+=1){n=o(e.state.hide[l]);if(n){s=r(n.hide,e.state.show);a({show:e.state.hide[l],hide:s},location.pathname+"#/"+e.state.hide[l])}}i(e.state.show,e.state.hide)}};window.addEventListener("popstate",d,!1)}};"complete"===document.readyState||"interactive"===document.readyState?d():document.addEventListener("DOMContentLoaded",d,!1)}})();ucsf.callAnalytics=function(e){"use strict";if(-1!==e.oldURL.indexOf("#")){var t="#/main_menu"===window.location.hash?"/":window.location.hash.substr(4);ucsf.analytics.trackPageview(t)}};"addEventListener"in window&&window.addEventListener("hashchange",ucsf.callAnalytics,!1);ucsf.shuttle=function(){var e={},t=document.getElementById("starting_from"),a=document.getElementById("ending_at"),n=document.getElementById("reverse_trip");if(Modernizr.localstorage){localStorage.shuttle_start&&null!==t&&(t.selectedIndex=parseInt(localStorage.shuttle_start,10));localStorage.shuttle_end&&null!==a&&(a.selectedIndex=parseInt(localStorage.shuttle_end,10))}e.save=function(){if(Modernizr.localstorage){localStorage.shuttle_start=document.getElementById("starting_from").selectedIndex;localStorage.shuttle_end=document.getElementById("ending_at").selectedIndex}};e.swap=function(){if(Modernizr.localstorage){var e=localStorage.shuttle_start;localStorage.shuttle_start=localStorage.shuttle_end;localStorage.shuttle_end=e}};null!==n&&(n.onclick=function(){var e;if(null!==t&&null!==a){e=t.selectedIndex;t.selectedIndex=a.selectedIndex;a.selectedIndex=e}});return e}();var _dirq=_dirq||[];ucsf.directory=function(){"use strict";var e={};e.search=function(){document.getElementById("ucsf_directory_search_submit").disabled=!0;var e=this,t=document.getElementById("ucsf_directory_search_form").first_name.value,a=document.getElementById("ucsf_directory_search_form").last_name.value,n=document.getElementById("ucsf_directory_search_form").department.value;if(t||a||n){var o='<div><section class="center"><progress>Loading...</progress></section></div>';document.getElementById("searchresults").innerHTML=o;_dirq.push([{first_name:t,last_name:a,dep_name:n},function(t){e.renderSearchResults(t)}])}else e.renderSearchResults({})};e.renderSearchResults=function(e){document.getElementById("ucsf_directory_search_submit").disabled=!1;if(e.error)window.alert(e.error.message);else{var t=e.data||[],a=t.length>20?20:t.length,n='<div class="menu"><h1>Search Results ('+a+")</h1>";20===a&&(n+='<p class="info">Results limited to 20.</p>');if(0===a)n+='<p class="info">No results found.</p>';else{n+="<ol>";for(var o=0;a>o;o++)if(t[o].hasOwnProperty("id")&&t[o].hasOwnProperty("name")){n=n+'<li><a href="/directory/detail/?'+encodeURIComponent(t[o].id)+'">';n+='<span style="">';n+=t[o].name;t[o].hasOwnProperty("department")&&(n=n+" &ndash; "+t[o].department);n+="</span>"}n+="</ol>"}n+="</div>";document.getElementById("searchresults").innerHTML=n}};e.renderDetail=function(t){var a=new Hogan.Template(function(e,t,a){var n=this;n.b(a=a||"");n.s(n.f("data",e,t,1),e,t,1,0,0,"")||n.b('<div class="content"><p class="info">No details available.</p></div>');if(n.s(n.f("data",e,t,1),e,t,0,95,1146,"{{ }}")){n.rs(e,t,function(e,t,a){if(a.s(a.d(".",e,t,1),e,t,0,101,1140,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<div class="menu detailed" id="ucsf_directory_detail_menu"><h1>');a.b(a.v(a.f("name",e,t,0)));if(a.s(a.f("degrees",e,t,1),e,t,0,184,191,"{{ }}")){a.rs(e,t,function(e,t,a){a.b(", ");a.b(a.v(a.d(".",e,t,0)))});e.pop()}a.b('</h1><ol id="ucsf_directory_detail_menu_list">');if(a.s(a.f("phones",e,t,1),e,t,0,260,644,"{{ }}")){a.rs(e,t,function(e,t,a){if(a.s(a.f("main",e,t,1),e,t,0,269,321,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><a href="tel:');a.b(a.v(a.d(".",e,t,0)));a.b('">Campus Phone: ');a.b(a.v(a.d(".",e,t,0)));a.b("</a></li>")});e.pop()}if(a.s(a.f("alternate",e,t,1),e,t,0,344,401,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><a href="tel:');a.b(a.v(a.d(".",e,t,0)));a.b('">Alt. Campus Phone: ');a.b(a.v(a.d(".",e,t,0)));a.b("</a></li>")});e.pop()}if(a.s(a.f("privatePractice",e,t,1),e,t,0,435,491,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><a href="tel:');a.b(a.v(a.d(".",e,t,0)));a.b('">Private Practice: ');a.b(a.v(a.d(".",e,t,0)));a.b("</a></li>")});e.pop()}if(a.s(a.f("mobile",e,t,1),e,t,0,522,568,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><a href="tel:');a.b(a.v(a.d(".",e,t,0)));a.b('">Mobile: ');a.b(a.v(a.d(".",e,t,0)));a.b("</a></li>")});e.pop()}if(a.s(a.f("pager",e,t,1),e,t,0,589,634,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><a href="tel:');a.b(a.v(a.d(".",e,t,0)));a.b('">Pager: ');a.b(a.v(a.d(".",e,t,0)));a.b("</a></li>")});e.pop()}});e.pop()}if(a.s(a.f("email",e,t,1),e,t,0,665,713,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><a href="mailto:');a.b(a.v(a.d(".",e,t,0)));a.b('">Email: ');a.b(a.v(a.d(".",e,t,0)));a.b("</a></li>")});e.pop()}a.b('</ol></div><div class="content"><ul class="ucsf-directory">');if(a.s(a.f("department",e,t,1),e,t,0,797,855,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><span class="smallprint">Department:</span> ');a.b(a.v(a.d(".",e,t,0)));a.b("</li>")});e.pop()}if(a.s(a.f("title",e,t,1),e,t,0,880,933,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><span class="smallprint">Title:</span> ');a.b(a.v(a.d(".",e,t,0)));a.b("</li>")});e.pop()}if(a.s(a.f("campusBox",e,t,1),e,t,0,957,1015,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><span class="smallprint">Campus Box:</span> ');a.b(a.v(a.d(".",e,t,0)));a.b("</li>")});e.pop()}if(a.s(a.f("address",e,t,1),e,t,0,1041,1117,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('<li><span class="smallprint">Postal Address:</span><br><pre>');a.b(a.v(a.d(".",e,t,0)));a.b("</pre></li>")});e.pop()}a.b("</ul></div>")});e.pop()}});e.pop()}return n.fl()}),n=document.getElementById("ucsf_directory_detail");n.innerHTML=a.render(t);if(t.hasOwnProperty("data")&&t.data[0].hasOwnProperty("id")){e.id=t.data[0].id;var o=document.createElement("script");o.setAttribute("src","http://profiles.ucsf.edu/CustomAPI/v1/JSONProfile.aspx?FNO="+e.id+"&callback=ucsf.directory.addPhotoAndProfileUrl");document.getElementsByTagName("head")[0].appendChild(o)}};e.addPhotoAndProfileUrl=function(t){if(t.hasOwnProperty("Profiles")&&t.Profiles instanceof Array&&t.Profiles.length>0){var a=t.Profiles[0];if(a.hasOwnProperty("PhotoURL")){var n=document.createElement("img");n.setAttribute("src","http://src.sencha.io/80/80/"+a.PhotoURL);n.setAttribute("alt","");n.setAttribute("style","border-top-right-radius:0;float:left");var o=document.getElementById("ucsf_directory_detail_menu"),r=o.firstChild;r.setAttribute("style","height:52px;padding-top:20px;border-radius:.5em .5em 0 0;");o.insertBefore(n,r)}if(a.hasOwnProperty("ProfilesURL")){var i=document.createElement("a");i.setAttribute("href","/research/?fno="+e.id);i.innerHTML="Research &amp; Publications";var s=document.createElement("li");s.appendChild(i);document.getElementById("ucsf_directory_detail_menu_list").appendChild(s)}}};return e}();Modernizr.load({load:"http://apis.ucsf.edu/static/UCSF.Person.js",callback:function(){var e=_dirq===void 0?[]:_dirq;_dirq={push:function(e){e[0].apikey="c631ef46e918c82cf81ef4869f0029d4";return UCSF.Person.search.apply(ucsf.directory,e)}};for(var t=0,a=e.length;a>t;t++)_dirq.push(e[t])}});var _newsq=_newsq||[];ucsf.news=function(){"use strict";var e={};e.loadFromStorage=function(e){var t;if(Modernizr.localstorage){t=window.localStorage.getItem(e);if(null!==t)return JSON.parse(t)}return{}};e.render=function(e,t,a,n,o){var r;r=new google.feeds.Feed(a);n.numEntries&&r.setNumEntries(n.numEntries);r.load(function(a){var r,i,s,l,c,d,m,u={};if(a.error)u=ucsf.news.loadFromStorage(t);else{u={feed:this.feed};for(r=0;u.feed.entries.length>r;r+=1){i=u.feed.entries[r];s={};l=new Date(i.publishedDate);s.date=l.toLocaleDateString();if(n.showTime){d=l.getMinutes();10>d&&(d="0"+d);c=l.getHours();m=12>c?"AM":"PM";c>12&&(c-=12);0===c&&(c=12);s.time=c+":"+d+" "+m}i.dateTime=s}n.more&&u.feed.entries.push(n.more);Modernizr.localstorage&&window.localStorage.setItem(t,JSON.stringify(u))}e.innerHTML=o.render(u)})};e.headlines=function(t,a,n,o){var r;o=o||{};r="function"!=typeof o.template?new Hogan.Template(function(e,t,a){var n=this;n.b(a=a||"");if(n.s(n.f("feed",e,t,1),e,t,0,9,313,"{{ }}")){n.rs(e,t,function(e,t,a){a.b('<div class="menu detailed"><h2>');a.b(a.v(a.f("title",e,t,0)));a.b("</h2><ol>");if(a.s(a.f("entries",e,t,1),e,t,0,70,290,"{{ }}")){a.rs(e,t,function(e,t,a){a.b('  <li>    <a class="no-ext-ind" rel="external" href="');a.b(a.v(a.f("link",e,t,0)));a.b('"><span class="external">');a.b(a.v(a.f("title",e,t,0)));a.b('</span>    <div class="smallprint light">');a.b(a.v(a.d("dateTime.date",e,t,0)));a.b('</div>    <div class="smallprint light">');a.b(a.v(a.d("dateTime.time",e,t,0)));a.b("</div></a>")});e.pop()}a.b("</ol></div>")});e.pop()}n.s(n.f("feed",e,t,1),e,t,1,0,0,"")||n.b('<div class="content"><p>Content could not be loaded.</p></div>');return n.fl()}):new Hogan.Template(o.template);navigator.onLine?Modernizr.load([{load:"http://www.google.com/jsapi",callback:function(){google.load("feeds","1",{nocss:!0,callback:function(){ucsf.news.render(t,a,n,o,r)}})}}]):t.innerHTML=r.render(e.loadFromStorage(a))};var t=_newsq===void 0?[]:_newsq;_newsq={push:function(t){3===t.length&&(t[3]={});return e.headlines(document.getElementById(t[0]),t[1],t[2],t[3])}};for(var a=0,n=t.length;n>a;a++)_newsq.push(t[a]);return e}();ucsf.maps={locationList:[{lat:37.767569,lon:-122.392223,zoom:17,name:"Mission Bay",marker:!1},{lat:37.763154,lon:-122.457941,zoom:17,name:"Parnassus",marker:!1},{lat:37.7846389,lon:-122.439604,zoom:18,name:"Mt. Zion",marker:!1},{lat:37.7555365,lon:-122.405038,zoom:17,name:"SFGH",marker:!1},{lat:37.764085,lon:-122.459684,zoom:17,name:"145 Irving",marker:!0},{lat:37.76873,lon:-122.395966,zoom:17,name:"1500 Owens",marker:!0},{lat:37.754719,lon:-122.4055,zoom:17,name:"2550 23rd St. (SFGH Bldg. 9)",marker:!0},{lat:37.763964,lon:-122.457349,zoom:17,name:"Ambulatory Care Building",marker:!0},{lat:37.767609,lon:-122.391534,zoom:17,name:"Byers Hall",marker:!0},{lat:37.776485,lon:-122.392202,zoom:17,name:"China Basin",marker:!0},{lat:37.762967,lon:-122.459089,zoom:17,name:"Clinical Sciences",marker:!0},{lat:37.762438,lon:-122.460851,zoom:17,name:"Dentistry",marker:!0},{lat:37.770071,lon:-122.389591,zoom:17,name:"Diller Cancer Research Building",marker:!0},{lat:37.762265,lon:-122.461473,zoom:17,name:"Faculty Alumni House",marker:!0},{lat:37.767609,lon:-122.391534,zoom:17,name:"Genentech Hall",marker:!0},{lat:37.767809,lon:-122.394109,zoom:17,name:"Gladstone Institute",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Health Sciences East",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Health Sciences West",marker:!0},{lat:37.763308,lon:-122.4591,zoom:17,name:"Kalmanovitz Library",marker:!0},{lat:37.760732,lon:-122.460725,zoom:17,name:"Kirkham Child Care",marker:!0},{lat:37.762135,lon:-122.460024,zoom:17,name:"Koret Vision",marker:!0},{lat:37.763617,lon:-122.456789,zoom:17,name:"Langley Porter Psychiatric Institute",marker:!0},{lat:37.763154,lon:-122.457841,zoom:17,name:"Long Hospital",marker:!0},{lat:37.762889,lon:-122.460227,zoom:17,name:"Lucia Child Care",marker:!0},{lat:37.761002,lon:-122.46035,zoom:17,name:"Medical Research IV",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Medical Sciences",marker:!0},{lat:37.763371,lon:-122.458488,zoom:17,name:"Millberry Union",marker:!0},{lat:37.769015,lon:-122.389536,zoom:17,name:"Mission Bay Housing East",marker:!0},{lat:37.769683,lon:-122.389951,zoom:17,name:"Mission Bay Housing North",marker:!0},{lat:37.76893,lon:-122.39075,zoom:17,name:"Mission Bay Housing South",marker:!0},{lat:37.769495,lon:-122.390704,zoom:17,name:"Mission Bay Housing West",marker:!0},{lat:37.763154,lon:-122.457841,zoom:17,name:"Moffitt Hospital",marker:!0},{lat:37.762967,lon:-122.459189,zoom:17,name:"Nursing Building",marker:!0},{lat:37.764121,lon:-122.458674,zoom:17,name:"Parking Garage Entrance",marker:!0},{lat:37.760432,lon:-122.461453,zoom:17,name:"Proctor Foundation",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Regeneration Medicine Building",marker:!0},{lat:37.769212,lon:-122.391189,zoom:17,name:"Rock Hall",marker:!0},{lat:37.767903,lon:-122.393506,zoom:17,name:"Rutter Center",marker:!0},{lat:37.755482,lon:-122.4044,zoom:17,name:"San Francisco General Hospital",marker:!0},{lat:37.770427,lon:-122.390548,zoom:17,name:"Smith Cancer Research Building",marker:!0},{lat:37.7679,lon:-122.389356,zoom:17,name:"Third Street Parking Garage",marker:!0},{lat:37.762728,lon:-122.459943,zoom:17,name:"UC Hall",marker:!0},{lat:37.784654,lon:-122.439373,zoom:17,name:"UCSF Medical Center at Mt. Zion",marker:!0},{lat:37.769765,lon:-122.426147,zoom:12,name:"All Campuses",marker:!1}],render:function(){"use strict";var e,t,a=decodeURIComponent(window.location.search.replace(/\+/g," ")),n=a.match(/[?&]loc=([\w. ()]+)/);e=null!==n?n[1]:"All Campuses";for(var o=0;ucsf.maps.locationList.length>o;o++)if(ucsf.maps.locationList[o].name===e){t=ucsf.maps.locationList[o];break}var r="UCSF Custom Map",i=[{featureType:"administrative",elementType:"all",stylers:[{hue:"#dae6c3"},{saturation:22},{lightness:-5}]},{featureType:"landscape",elementType:"all",stylers:[{hue:"#dae6c3"},{saturation:16},{lightness:-7}]},{featureType:"road",elementType:"geometry",stylers:[{hue:"#ffffff"},{saturation:-100},{lightness:100}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]}],s=new google.maps.StyledMapType(i),l=new google.maps.ImageMapType({tileSize:new google.maps.Size(256,256),getTileUrl:function(e,t){return"/maps/img/tiles/"+t+"/"+e.x+"/"+e.y+".png"}}),c=new google.maps.Map(document.getElementById("map_canvas"),{center:new google.maps.LatLng(t.lat,t.lon),mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:t.zoom,mapTypeControl:!1});c.overlayMapTypes.insertAt(0,l);c.mapTypes.set(r,s);c.setMapTypeId(r);t.marker&&google.maps.event.addListener(new google.maps.Marker({position:new google.maps.LatLng(t.lat,t.lon),map:c,title:t.name}),"click",function(){var e=new google.maps.InfoWindow({content:"<div>"+t.name+'</div><div><a href="https://maps.google.com/maps?daddr='+t.lat+","+t.lon+'">Directions</a></div>',position:new google.maps.LatLng(t.lat,t.lon)});e.open(c)})}};if(document.getElementById("map_canvas")){var script=document.createElement("script");script.type="text/javascript";script.src="http://maps.googleapis.com/maps/api/js?&sensor=false&callback=ucsf.maps.render";document.body.appendChild(script)}if(document.getElementById("locations_menu")){var template=new Hogan.Template(function(e,t,a){var n=this;n.b(a=a||"");if(n.s(n.f("locationList",e,t,1),e,t,0,17,72,"{{ }}")){n.rs(e,t,function(e,t,a){a.b('<li><a href="/maps/map/?loc=');a.b(a.v(a.f("name",e,t,0)));a.b('">');a.b(a.v(a.f("name",e,t,0)));a.b("</a></li>")});e.pop()}return n.fl()});document.getElementById("locations_menu").innerHTML=template.render(ucsf.maps)}