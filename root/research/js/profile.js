var ucsf=ucsf||{};ucsf.ctsiProfile={renderProfile:function(e){"use strict";if(e.hasOwnProperty("Profiles")&&e.Profiles instanceof Array&&e.Profiles.length>0){var t,n,o,a,i,r,s,l,m,c,p,d,u,f,h,v,g,b,y,w,_,P,E,T=e.Profiles[0],I=document.getElementById("ctsi-menu"),k=document.getElementById("ctsi-header");if(T.hasOwnProperty("Name")){k.innerHTML=T.Name;if(T.hasOwnProperty("PhotoURL")){n=document.createElement("img");n.setAttribute("src","http://src.sencha.io/80/80/"+T.PhotoURL);n.setAttribute("alt","");n.setAttribute("style","border-top-right-radius:0;border-bottom-left-radius:.5em;float:left");o=k.clientHeight;k.setAttribute("style","height:52px;padding-top:20px");I.insertBefore(n,k)}}if(T.hasOwnProperty("Narrative")&&"string"==typeof T.Narrative){t=document.createElement("ol");I.appendChild(t);a=document.createElement("li");i=document.createElement("a");i.setAttribute("href","#");i.setAttribute("onclick","ucsf.ctsiProfile.toggleNarrative(); return false;");r=document.createElement("span");r.setAttribute("class","smallprint");r.setAttribute("id","ctsi-narrative");s=T.Narrative.substring(0,T.Narrative.substring(0,200).lastIndexOf(" "));r.innerHTML=s+"...";document.getElementById("ctsi-narrative-hidden").innerHTML=T.Narrative;i.appendChild(r);a.appendChild(i);t.appendChild(a);n.setAttribute("style","border-top-right-radius:0;float:left")}if(T.hasOwnProperty("Keywords")&&T.Keywords.length>0){l=T.Keywords;m=document.createElement("ol");c=l.length>5?5:l.length;for(p=0;c>p;p+=1){d=document.createElement("li");d.innerHTML=l[p];m.appendChild(d)}u=document.getElementById("ctsi-keywords");u.innerHTML='<h1 class="content-first light">Research Interests</h1>';u.appendChild(m)}if(T.hasOwnProperty("Publications")&&T.Publications.length>0){f=T.Publications;h=document.createElement("ol");v=f.length>5?5:f.length;for(g=0;v>g;g+=1)if(f[g].hasOwnProperty("PublicationTitle")){b=document.createElement("li");y=document.createElement("span");y.setAttribute("class","smallprint");y.innerHTML=f[g].PublicationTitle;if(f[g].hasOwnProperty("PublicationSource")&&f[g].PublicationSource[0].hasOwnProperty("PublicationSourceURL")&&f[g].PublicationSource[0].PublicationSourceURL.length>0){w=document.createElement("a");w.setAttribute("href",f[g].PublicationSource[0].PublicationSourceURL);w.setAttribute("rel","external")}else w=document.createElement("p");w.appendChild(y);b.appendChild(w);h.appendChild(b)}_=document.getElementById("ctsi-publications");_.innerHTML='<h1 class="content-first light">Recent Publications</h1>';_.appendChild(h)}if(T.hasOwnProperty("ProfilesURL")){P=document.createElement("li");E=document.createElement("a");E.innerHTML="Full Research Profile";E.setAttribute("rel","external");E.setAttribute("href",T.ProfilesURL);document.getElementById("ctsi-full-profile");P.appendChild(E);document.getElementById("ctsi-full-profile").appendChild(P)}}},toggleNarrative:function(){"use strict";var e=document.getElementById("ctsi-narrative").innerHTML;document.getElementById("ctsi-narrative").innerHTML=document.getElementById("ctsi-narrative-hidden").innerHTML;document.getElementById("ctsi-narrative-hidden").innerHTML=e}};window.location.search&&(window.onload=function(){"use strict";var e,t,n=decodeURIComponent(window.location.search),o=n.match(/[&?]fno=([\w.@]+)/);if(null!==o){e=o[1];t=document.createElement("script");t.src="http://profiles.ucsf.edu/CustomAPI/v1/JSONProfile.aspx?FNO="+e+"&callback=ucsf.ctsiProfile.renderProfile&publications=full&mobile=on";document.body.appendChild(t)}});