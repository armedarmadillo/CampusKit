var Hogan={};(function(e,t){function n(e){return(null===e||void 0===e?"":e)+""}function o(e){e=n(e);return u.test(e)?e.replace(i,"&amp;").replace(r,"&lt;").replace(a,"&gt;").replace(s,"&#39;").replace(l,"&quot;"):e}e.Template=function(e,n,o,i){this.r=e||this.r;this.c=o;this.options=i;this.text=n||"";this.buf=t?[]:""};e.Template.prototype={r:function(){return""},v:o,t:n,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){return this.r(e,t,n)},rp:function(e,t,n,o){var i=n[e];if(!i)return"";this.c&&"string"==typeof i&&(i=this.c.compile(i,this.options));return i.ri(t,n,o)},rs:function(e,t,n){var o=e[e.length-1];if(c(o))for(var i=0;o.length>i;i++){e.push(o[i]);n(e,t,this);e.pop()}else n(e,t,this)},s:function(e,t,n,o,i,r,a){var s;if(c(e)&&0===e.length)return!1;"function"==typeof e&&(e=this.ls(e,t,n,o,i,r,a));s=""===e||!!e;!o&&s&&t&&t.push("object"==typeof e?e:t[t.length-1]);return s},d:function(e,t,n,o){var i=e.split("."),r=this.f(i[0],t,n,o),a=null;if("."===e&&c(t[t.length-2]))return t[t.length-1];for(var s=1;i.length>s;s++)if(r&&"object"==typeof r&&i[s]in r){a=r;r=r[i[s]]}else r="";if(o&&!r)return!1;if(!o&&"function"==typeof r){t.push(a);r=this.lv(r,t,n);t.pop()}return r},f:function(e,t,n,o){for(var i=!1,r=null,a=!1,s=t.length-1;s>=0;s--){r=t[s];if(r&&"object"==typeof r&&e in r){i=r[e];a=!0;break}}if(!a)return o?!1:"";o||"function"!=typeof i||(i=this.lv(i,t,n));return i},ho:function(e,t,n,o,i){var r=this.c,a=this.options;a.delimiters=i;var o=e.call(t,o);o=null==o?o+"":""+o;this.b(r.compile(o,a).render(t,n));return!1},b:t?function(e){this.buf.push(e)}:function(e){this.buf+=e},fl:t?function(){var e=this.buf.join("");this.buf=[];return e}:function(){var e=this.buf;this.buf="";return e},ls:function(e,t,n,o,i,r,a){var s=t[t.length-1],l=null;if(!o&&this.c&&e.length>0)return this.ho(e,s,n,this.text.substring(i,r),a);l=e.call(s);if("function"==typeof l){if(o)return!0;if(this.c)return this.ho(l,s,n,this.text.substring(i,r),a)}return l},lv:function(e,t,o){var i=t[t.length-1],r=e.call(i);if("function"==typeof r){r=n(r.call(i));if(this.c&&~r.indexOf("{{"))return this.c.compile(r,this.options).render(i,o)}return n(r)}};var i=/&/g,r=/</g,a=/>/g,s=/\'/g,l=/\"/g,u=/[&<>\"\']/,c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}})("undefined"!=typeof exports?exports:Hogan);var ucsf=ucsf||{};ucsf.maps={locationList:[{lat:37.767569,lon:-122.392223,zoom:17,name:"Mission Bay",marker:!1},{lat:37.763154,lon:-122.457941,zoom:17,name:"Parnassus",marker:!1},{lat:37.7846389,lon:-122.439604,zoom:18,name:"Mt. Zion",marker:!1},{lat:37.7555365,lon:-122.405038,zoom:17,name:"SFGH",marker:!1},{lat:37.764085,lon:-122.459684,zoom:17,name:"145 Irving",marker:!0},{lat:37.76873,lon:-122.395966,zoom:17,name:"1500 Owens",marker:!0},{lat:37.754719,lon:-122.4055,zoom:17,name:"2550 23rd St. (SFGH Bldg. 9)",marker:!0},{lat:37.763964,lon:-122.457349,zoom:17,name:"Ambulatory Care Building",marker:!0},{lat:37.767609,lon:-122.391534,zoom:17,name:"Byers Hall",marker:!0},{lat:37.776485,lon:-122.392202,zoom:17,name:"China Basin",marker:!0},{lat:37.762967,lon:-122.459089,zoom:17,name:"Clinical Sciences",marker:!0},{lat:37.762438,lon:-122.460851,zoom:17,name:"Dentistry",marker:!0},{lat:37.770071,lon:-122.389591,zoom:17,name:"Diller Cancer Research Building",marker:!0},{lat:37.762265,lon:-122.461473,zoom:17,name:"Faculty Alumni House",marker:!0},{lat:37.767609,lon:-122.391534,zoom:17,name:"Genentech Hall",marker:!0},{lat:37.767809,lon:-122.394109,zoom:17,name:"Gladstone Institute",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Health Sciences East",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Health Sciences West",marker:!0},{lat:37.763308,lon:-122.4591,zoom:17,name:"Kalmanovitz Library",marker:!0},{lat:37.760732,lon:-122.460725,zoom:17,name:"Kirkham Child Care",marker:!0},{lat:37.762135,lon:-122.460024,zoom:17,name:"Koret Vision",marker:!0},{lat:37.763617,lon:-122.456789,zoom:17,name:"Langley Porter Psychiatric Institute",marker:!0},{lat:37.763154,lon:-122.457841,zoom:17,name:"Long Hospital",marker:!0},{lat:37.762889,lon:-122.460227,zoom:17,name:"Lucia Child Care",marker:!0},{lat:37.761002,lon:-122.46035,zoom:17,name:"Medical Research IV",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Medical Sciences",marker:!0},{lat:37.763371,lon:-122.458488,zoom:17,name:"Millberry Union",marker:!0},{lat:37.769015,lon:-122.389536,zoom:17,name:"Mission Bay Housing East",marker:!0},{lat:37.769683,lon:-122.389951,zoom:17,name:"Mission Bay Housing North",marker:!0},{lat:37.76893,lon:-122.39075,zoom:17,name:"Mission Bay Housing South",marker:!0},{lat:37.769495,lon:-122.390704,zoom:17,name:"Mission Bay Housing West",marker:!0},{lat:37.763154,lon:-122.457841,zoom:17,name:"Moffitt Hospital",marker:!0},{lat:37.762967,lon:-122.459189,zoom:17,name:"Nursing Building",marker:!0},{lat:37.764121,lon:-122.458674,zoom:17,name:"Parking Garage Entrance",marker:!0},{lat:37.760432,lon:-122.461453,zoom:17,name:"Proctor Foundation",marker:!0},{lat:37.763145,lon:-122.458197,zoom:17,name:"Regeneration Medicine Building",marker:!0},{lat:37.769212,lon:-122.391189,zoom:17,name:"Rock Hall",marker:!0},{lat:37.767903,lon:-122.393506,zoom:17,name:"Rutter Center",marker:!0},{lat:37.755482,lon:-122.4044,zoom:17,name:"San Francisco General Hospital",marker:!0},{lat:37.770427,lon:-122.390548,zoom:17,name:"Smith Cancer Research Building",marker:!0},{lat:37.7679,lon:-122.389356,zoom:17,name:"Third Street Parking Garage",marker:!0},{lat:37.762728,lon:-122.459943,zoom:17,name:"UC Hall",marker:!0},{lat:37.784654,lon:-122.439373,zoom:17,name:"UCSF Medical Center at Mt. Zion",marker:!0},{lat:37.769765,lon:-122.426147,zoom:12,name:"All Campuses",marker:!1}],render:function(){"use strict";var e,t,n=decodeURIComponent(window.location.search.replace(/\+/g," ")),o=n.match(/[?&]loc=([\w. ()]+)/);e=null!==o?o[1]:"All Campuses";for(var i=0;ucsf.maps.locationList.length>i;i++)if(ucsf.maps.locationList[i].name===e){t=ucsf.maps.locationList[i];break}var r="UCSF Custom Map",a=[{featureType:"administrative",elementType:"all",stylers:[{hue:"#dae6c3"},{saturation:22},{lightness:-5}]},{featureType:"landscape",elementType:"all",stylers:[{hue:"#dae6c3"},{saturation:16},{lightness:-7}]},{featureType:"road",elementType:"geometry",stylers:[{hue:"#ffffff"},{saturation:-100},{lightness:100}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"off"}]}],s=new google.maps.StyledMapType(a),l=new google.maps.ImageMapType({tileSize:new google.maps.Size(256,256),getTileUrl:function(e,t){return"/maps/img/tiles/"+t+"/"+e.x+"/"+e.y+".png"}}),u=new google.maps.Map(document.getElementById("map_canvas"),{center:new google.maps.LatLng(t.lat,t.lon),mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:t.zoom,mapTypeControl:!1});u.overlayMapTypes.insertAt(0,l);u.mapTypes.set(r,s);u.setMapTypeId(r);t.marker&&google.maps.event.addListener(new google.maps.Marker({position:new google.maps.LatLng(t.lat,t.lon),map:u,title:t.name}),"click",function(){var e=new google.maps.InfoWindow({content:"<div>"+t.name+'</div><div><a href="https://maps.google.com/maps?daddr='+t.lat+","+t.lon+'">Directions</a></div>',position:new google.maps.LatLng(t.lat,t.lon)});e.open(u)})}};if(document.getElementById("map_canvas")){var script=document.createElement("script");script.type="text/javascript";script.src="http://maps.googleapis.com/maps/api/js?&sensor=false&callback=ucsf.maps.render";document.body.appendChild(script)}if(document.getElementById("locations_menu")){var template=new Hogan.Template(function(e,t,n){var o=this;o.b(n=n||"");if(o.s(o.f("locationList",e,t,1),e,t,0,17,72,"{{ }}")){o.rs(e,t,function(e,t,n){n.b('<li><a href="/maps/map/?loc=');n.b(n.v(n.f("name",e,t,0)));n.b('">');n.b(n.v(n.f("name",e,t,0)));n.b("</a></li>")});e.pop()}return o.fl()});document.getElementById("locations_menu").innerHTML=template.render(ucsf.maps)}