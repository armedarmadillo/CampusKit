var ucsf=ucsf||{};ucsf.ctsiProfile={renderProfile:function(e){"use strict";if(e.hasOwnProperty("Profiles")&&e.Profiles instanceof Array&&e.Profiles.length>0){var t,n,a,o,r,i,l,s,c,m,d,u,h,p,g,f,y,v,w,b,k,E,P,z=e.Profiles[0],M=document.getElementById("ctsi-menu"),I=document.getElementById("ctsi-header");if(z.hasOwnProperty("Name")&&(I.innerHTML=z.Name,z.hasOwnProperty("PhotoURL")&&(n=document.createElement("img"),n.setAttribute("src","http://src.sencha.io/80/80/"+z.PhotoURL),n.setAttribute("alt",""),n.setAttribute("style","border-top-right-radius:0;border-bottom-left-radius:.5em;float:left"),a=I.clientHeight,I.setAttribute("style","height:52px;padding-top:20px"),M.insertBefore(n,I))),z.hasOwnProperty("Narrative")&&(t=document.createElement("ol"),M.appendChild(t),o=document.createElement("li"),r=document.createElement("a"),r.setAttribute("href","#"),r.setAttribute("onclick","ucsf.ctsiProfile.toggleNarrative(); return false;"),i=document.createElement("span"),i.setAttribute("class","smallprint"),i.setAttribute("id","ctsi-narrative"),l=z.Narrative.substring(0,z.Narrative.substring(0,200).lastIndexOf(" ")),i.innerHTML=l+"...",document.getElementById("ctsi-narrative-hidden").innerHTML=z.Narrative,r.appendChild(i),o.appendChild(r),t.appendChild(o),n.setAttribute("style","border-top-right-radius:0;float:left")),z.hasOwnProperty("Keywords")&&z.Keywords.length>0){for(s=z.Keywords,c=document.createElement("ol"),m=s.length>5?5:s.length,d=0;m>d;d+=1)u=document.createElement("li"),u.innerHTML=s[d],c.appendChild(u);h=document.getElementById("ctsi-keywords"),h.innerHTML='<h1 class="content-first light">Research Interests</h1>',h.appendChild(c)}if(z.hasOwnProperty("Publications")&&z.Publications.length>0){for(p=z.Publications,g=document.createElement("ol"),f=p.length>5?5:p.length,y=0;f>y;y+=1)p[y].hasOwnProperty("PublicationTitle")&&(v=document.createElement("li"),w=document.createElement("span"),w.setAttribute("class","smallprint"),w.innerHTML=p[y].PublicationTitle,p[y].hasOwnProperty("PublicationSource")&&p[y].PublicationSource[0].hasOwnProperty("PublicationSourceURL")&&p[y].PublicationSource[0].PublicationSourceURL.length>0?(b=document.createElement("a"),b.setAttribute("href",p[y].PublicationSource[0].PublicationSourceURL),b.setAttribute("rel","external")):b=document.createElement("p"),b.appendChild(w),v.appendChild(b),g.appendChild(v));k=document.getElementById("ctsi-publications"),k.innerHTML='<h1 class="content-first light">Recent Publications</h1>',k.appendChild(g)}z.hasOwnProperty("ProfilesURL")&&(E=document.createElement("li"),P=document.createElement("a"),P.innerHTML="Full Research Profile",P.setAttribute("rel","external"),P.setAttribute("href",z.ProfilesURL),document.getElementById("ctsi-full-profile"),E.appendChild(P),document.getElementById("ctsi-full-profile").appendChild(E))}},toggleNarrative:function(){"use strict";var e=document.getElementById("ctsi-narrative").innerHTML;document.getElementById("ctsi-narrative").innerHTML=document.getElementById("ctsi-narrative-hidden").innerHTML,document.getElementById("ctsi-narrative-hidden").innerHTML=e}},window.location.search&&(window.onload=function(){"use strict";var e,t,n=decodeURIComponent(window.location.search),a=n.match(/[&?]fno=([\w.@]+)/);null!==a&&(e=a[1],t=document.createElement("script"),t.src="http://profiles.ucsf.edu/CustomAPI/v1/JSONProfile.aspx?FNO="+e+"&callback=ucsf.ctsiProfile.renderProfile&publications=full&mobile=on",document.body.appendChild(t))});