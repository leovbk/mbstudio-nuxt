(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(t,e,r){"use strict";var o=r(2),n=r(85).charAt;o({target:"String",proto:!0,forced:r(6)((function(){return"𠮷"!=="𠮷".at(0)}))},{at:function(t){return n(this,t)}})},256:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("c8df83d2",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(256)},272:function(t,e,r){var o=r(37)(!1);o.push([t.i,".mosaicContainer{position:relative;margin-top:80px;display:flex;justify-content:center;width:100vw}.projetMosaic{margin:140px 120px;max-width:1250px}.projetMosaic,.projetMosaic a{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.projetMosaic a{height:100%;width:100%;text-decoration:none}.photo{background-size:115%;background-repeat:no-repeat;background-position:50%;width:300px;height:230px;margin:12px;will-change:transform;transition:background-size .4s}.photo:hover{background-size:120%}.photoLayer{background-color:rgba(47,46,46,.6);width:100%;height:100%;transition-duration:.4s;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0}.photoLayer:hover{opacity:1}.titreProjet{display:flex;justify-content:center;align-items:center;color:#fff;width:100%;font-size:x-large;line-height:1.1;transition-duration:.4s}.sousTitre{font-size:12px;color:#fff;z-index:0;pointer-events:none}@media (max-width:887px){.projetMosaic{margin:140px 40px}}@media (max-width:728px){.photo{width:70vw;height:53vw}}@media (min-width:1250px){.projetMosaic{margin:140px auto}}",""]),t.exports=o},290:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(43),r(249),r(25),r(55)),c=r(117),l={name:"Project",beforeRouteLeave:function(t,e,r){var o=n.a.timeline();o.to(".photo",{opacity:0,stagger:.1,duration:.5}),o.call(r)},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$prismic,t.error,e.next=3,r.api.query(r.predicates.at("document.type","projet"));case 3:for(o=e.sent,n=[],i=0;i<o.results.length;i++)n.push(o.results[i].data);return e.abrupt("return",{prismicProject:n});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{projetsData:[],projectIndex:"",projectName:""}},head:function(){return{title:"Réalisations | mb. studio"}},created:function(){for(var t in this.prismicProject)this.projetsData[t]={name:"",sousTitre:"",id:"",title:"",phase:"",lieu:"",domaine:"",credit:"",bandeau:"",photos:[]},this.projetsData[t].name=this.prismicProject[t].name,this.projetsData[t].sousTitre=this.prismicProject[t].soustitre,this.projetsData[t].id=this.prismicProject[t].url,this.projetsData[t].title=this.prismicProject[t].title,this.projetsData[t].phase=this.prismicProject[t].phase,this.projetsData[t].lieu=this.prismicProject[t].lieu,this.projetsData[t].domaine=this.prismicProject[t].domaine,this.projetsData[t].credit=this.prismicProject[t].credit_photo,this.projetsData[t].cover=this.prismicProject[t].cover.url},mounted:function(){window.scrollTo(0,0),n.a.registerPlugin(c.ScrollTrigger),n.a.from(".photo",{y:100,opacity:0,duration:.7,stagger:.1})}},h=(r(271),r(14)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"moisaicContainer"},[r("div",{staticClass:"projetMosaic"},t._l(t.projetsData,(function(e,i){var o=e.cover,n=e.name,c=e.id,l=e.sousTitre;return r("div",{key:i},[r("nuxt-link",{attrs:{to:{name:"realisation-project",params:{project:c}}}},[r("div",{staticClass:"photo",class:"photo"+(i+1),style:{backgroundImage:"url("+o+")"}},[r("div",{staticClass:"photoLayer"},[r("p",{staticClass:"titreProjet"},[t._v("\n              "+t._s(n)+"\n            ")]),t._v(" "),r("p",{staticClass:"sousTitre"},[t._v(t._s(l))])])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);