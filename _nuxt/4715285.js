(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{250:function(t,e,o){t.exports=o.p+"img/IMAGE4.d2009a0.jpg"},254:function(t,e,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("5d9a7d4a",content,!0,{sourceMap:!1})},267:function(t,e,o){"use strict";o(254)},268:function(t,e,o){var r=o(37)(!1);r.push([t.i,'#form_container{display:flex;justify-content:center;align-items:center;height:100%}.contact{overflow:overlay;margin-top:80px}#contact-form{width:100%;margin:15%}.img-form{width:30%;height:auto;margin:0;float:left}.grid-wrapper{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px;grid-row-gap:10px;row-gap:10px;grid-auto-rows:auto;margin-bottom:10px}.grid_element{display:flex;flex-direction:column}.grid_element input{height:30px}textarea{width:100%;height:80px;resize:vertical;box-shadow:none;margin-bottom:20px}#contact-form input,textarea{border-radius:0;border:1px solid #252525}.div_btn{text-align:center}.button1{width:260px;height:34px;margin-top:20px;background-color:#fff;border:0;position:relative;border-left:1px solid #212121;border-right:1px solid #212121;font-family:Helvetica,sans-serif;font-size:16px;font-weight:700;color:#000;padding:0;transition:all .25s ease-in-out;cursor:pointer}.button1:before{display:block;content:"";position:absolute;top:0;width:100%;border-bottom:1px solid #212121;transform:scaleX(0);transition:transform .5s ease-in-out}.button1:hover:before{transform:scaleX(1)}.button1:after{display:block;content:"";position:absolute;bottom:0;width:100%;border-bottom:1px solid #212121;transform:scaleX(0);transition:transform .5s ease-in-out}.button1:hover:after{transform:scaleX(1)}.button1:focus,.button1:hover{font-weight:400}@media (max-width:1000px){.img-form{display:none}}@media (max-width:600px){.grid-wrapper{display:flex;flex-direction:column}.grid_element{margin-bottom:10px}}',""]),t.exports=r},288:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact"},[r("img",{staticClass:"img-form",attrs:{src:o(250),alt:""}}),t._v(" "),r("div",{attrs:{id:"form_container"}},[r("form",{attrs:{id:"contact-form",target:"_blank",action:"https://formsubmit.co/contact@mbstudio-architecture.fr",method:"POST"}},[r("input",{attrs:{type:"hidden",name:"_next",value:"http://leovbk.github.io/mbstudio-nuxt/contact/success"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_subject",value:"Salut Gomar, c'est le site qui te parles, tu as un nouveau message"}}),t._v(" "),r("input",{attrs:{type:"hidden",name:"_template",value:"box"}}),t._v(" "),r("div",{staticClass:"grid-wrapper"},[r("div",{staticClass:"grid_element"},[r("label",{staticClass:"etiquette",attrs:{for:"firstname"}},[t._v("Prénom")]),t._v(" "),r("input",{staticClass:"input_form",attrs:{id:"firstname",type:"text",name:"firstname"}}),t._v(" "),r("p",{staticClass:"comments"})]),t._v(" "),r("div",{staticClass:"grid_element"},[r("label",{staticClass:"etiquette",attrs:{for:"name"}},[t._v("Nom")]),t._v(" "),r("input",{staticClass:"input_form",attrs:{id:"name",type:"text",name:"name"}}),t._v(" "),r("p",{staticClass:"comments"})]),t._v(" "),r("div",{staticClass:"grid_element"},[r("label",{staticClass:"etiquette",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"input_form",attrs:{id:"email",type:"text",name:"email",required:""}}),t._v(" "),r("p",{staticClass:"comments"})]),t._v(" "),r("div",{staticClass:"grid_element"},[r("label",{staticClass:"etiquette",attrs:{for:"phone"}},[t._v("Téléphone")]),t._v(" "),r("input",{staticClass:"input_form",attrs:{id:"phone",type:"tel",name:"phone"}}),t._v(" "),r("p",{staticClass:"comments"})])]),t._v(" "),r("div",{staticClass:"msgSection"},[r("label",{staticClass:"etiquette",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),r("textarea",{staticClass:"input_form",attrs:{id:"message",name:"message",required:""}}),t._v(" "),r("p",{staticClass:"comments"})]),t._v(" "),r("div",{staticClass:"div_btn"},[r("button",{staticClass:"button1",attrs:{type:"submit"}},[t._v("Envoyer")])])])])])}],n=o(55),l={name:"Contact",beforeRouteLeave:function(t,e,o){var r=n.a.timeline();r.to(".img-form",{x:"-100%",opacity:0,duration:.8,delay:.3}),r.to([".etiquette",".div_btn"],{opacity:0,duration:.5,stagger:.15,delay:-1}),r.to([".grid_element",".msgSection"],{opacity:0,duration:.4,stagger:.15,y:-50,delay:-1}),r.call(o)},head:function(){return{title:"Contact | mb. studio"}},mounted:function(){window.scrollTo(0,0),this.returnChilds()},methods:{returnChilds:function(){var t=n.a.timeline();t.from(".img-form",{x:"-100%",opacity:0,duration:1,delay:.3}),t.from([".grid_element",".msgSection"],{opacity:0,duration:.6,stagger:.15,y:50,delay:-1}),t.from([".etiquette",".div_btn"],{opacity:0,duration:.5,stagger:.15,delay:-.6})}}},m=(o(267),o(14)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,null,null);e.default=component.exports}}]);