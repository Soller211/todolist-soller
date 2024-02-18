(function(){"use strict";var a={4441:function(a,t,e){var n=e(5130),o=e(6768);const r=a=>((0,o.Qi)("data-v-78b9dc79"),a=a(),(0,o.jt)(),a),i={class:"appBodyPrincipal"},c=r((()=>(0,o.Lk)("header",null,[(0,o.Lk)("h3",null,"To Do List")],-1)));function s(a,t,e,n,r,s){const l=(0,o.g2)("Navbar"),d=(0,o.g2)("TaskList");return(0,o.uX)(),(0,o.CE)("div",i,[c,(0,o.bF)(l),(0,o.bF)(d)])}const l={class:"nav-body"},d=(0,o.Fv)('<div class="nav-group" data-v-ae0a12ba><div class="input-search" data-v-ae0a12ba><button type="button" class="btn btn-primary" data-mdb-ripple-init data-v-ae0a12ba><i class="bi bi-search" data-v-ae0a12ba></i></button><div class="form-outline" data-mdb-input-init data-v-ae0a12ba><input type="search" id="form1" class="form-control" placeholder="Buscar" data-v-ae0a12ba></div></div><div class="ordenamiento" data-v-ae0a12ba><select class="form-select" data-v-ae0a12ba><option value="fechaCreacion" data-v-ae0a12ba>Fecha de Creación</option><option value="fechaEdicion" data-v-ae0a12ba>Fecha de Edición</option><option value="titulo" data-v-ae0a12ba>Título</option></select></div><div class="button-group" data-v-ae0a12ba><div class="tasks-buttons" data-v-ae0a12ba><button class="btn btn-primary" data-v-ae0a12ba>Pending Tasks</button><button class="btn btn-primary" data-v-ae0a12ba>Complete Tasks</button></div><button class="btn btn-primary" data-v-ae0a12ba>Add Task</button></div></div>',1),u=[d];function v(a,t,e,n,r,i){return(0,o.uX)(),(0,o.CE)("nav",l,u)}var b={},f=e(1241);const p=(0,f.A)(b,[["render",v],["__scopeId","data-v-ae0a12ba"]]);var h=p,k=e(4232);const m={class:"lista-tareas"},C={class:"info-tarea"},y={class:"meta-tarea"},T={class:"fecha-creacion"},g={class:"fecha-edicion"},L={class:"acciones-tarea"},E=["onClick"],_=["onClick"],O=["onClick"];function w(a,t,e,n,r,i){return(0,o.uX)(),(0,o.CE)("ul",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.tareas,((a,t)=>((0,o.uX)(),(0,o.CE)("li",{class:"tarea",key:t},[(0,o.Lk)("div",C,[(0,o.Lk)("h2",null,(0,k.v_)(a.titulo),1),(0,o.Lk)("p",null,(0,k.v_)(a.descripcion),1),(0,o.Lk)("div",y,[(0,o.Lk)("span",T,"Creado: "+(0,k.v_)(a.fechaCreacion),1),(0,o.Lk)("span",g,"Editado: "+(0,k.v_)(a.fechaEdicion),1)])]),(0,o.Lk)("div",L,[(0,o.Lk)("i",{class:"bi bi-trash3",onClick:a=>i.eliminarTarea(t),style:{color:"#c94139"}},null,8,E),(0,o.Lk)("i",{class:"bi bi-pencil-fill",onClick:a=>i.editarTarea(t),style:{color:"#5589c4"}},null,8,_),(0,o.Lk)("i",{class:"bi bi-check-lg",onClick:a=>i.completarTarea(t),style:{color:"#2d8f2f"}},null,8,O)])])))),128))])}var j={data(){return{tareas:[{titulo:"Título de la tarea 1",descripcion:"Descripción de la tarea 1",fechaCreacion:"15 de enero de 2022",fechaEdicion:"15 de enero de 2022"},{titulo:"Título de la tarea 2",descripcion:"Descripción de la tarea 2",fechaCreacion:"16 de enero de 2022",fechaEdicion:"16 de enero de 2022"}]}},methods:{eliminarTarea(a){this.tareas.splice(a,1)},editarTarea(a){console.log("Editar tarea:",this.tareas[a])},completarTarea(a){console.log("Completar tarea:",this.tareas[a])}}};const F=(0,f.A)(j,[["render",w],["__scopeId","data-v-655a4dfd"]]);var x=F,X={components:{Navbar:h,TaskList:x}};const A=(0,f.A)(X,[["render",s],["__scopeId","data-v-78b9dc79"]]);var I=A;(0,n.Ef)(I).mount("#app")}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return a[n].call(r.exports,r,r.exports,e),r.exports}e.m=a,function(){var a=[];e.O=function(t,n,o,r){if(!n){var i=1/0;for(d=0;d<a.length;d++){n=a[d][0],o=a[d][1],r=a[d][2];for(var c=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(e.O).every((function(a){return e.O[a](n[s])}))?n.splice(s--,1):(c=!1,r<i&&(i=r));if(c){a.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=a.length;d>0&&a[d-1][2]>r;d--)a[d]=a[d-1];a[d]=[n,o,r]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={524:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var o,r,i=n[0],c=n[1],s=n[2],l=0;if(i.some((function(t){return 0!==a[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(s)var d=s(e)}for(t&&t(n);l<i.length;l++)r=i[l],e.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return e.O(d)},n=self["webpackChunktodolist_soller"]=self["webpackChunktodolist_soller"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(4441)}));n=e.O(n)})();
//# sourceMappingURL=app.2ee073da.js.map