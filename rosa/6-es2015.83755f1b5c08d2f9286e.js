(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+eai":function(l,n,u){"use strict";u.r(n);var o=u("kZht");class b{}var r=u("C9Ky"),a=u("zRKt"),e=u("aJVy"),s=u("An66"),t=u("Bca+"),i=u("1VvW"),c=u("dcak"),d=u("3kIJ"),g=u("M7oV"),h=u("mY0g"),f=u("PT7G"),m=u("D4FV"),D=u("8Vj5"),p=u("A2r1"),C=u("66LQ"),k=u("z1+D"),v=u("GH3M"),q=u("9HQE"),x=u("fiyW"),y=u("X3uq"),B=u("vqr4"),I=u("ZaT4"),P=u("oSpD"),K=u("UO+3"),T=u("eGPE"),A=u("PJGU"),_=u("TN4W"),O=u("wIXk"),S=u("Ohay"),H=u("xVbo"),F=u("mWib"),L=u("TLy2"),V=u("SsJh");class M{constructor(l,n,u){this._renderer=l,this._fb=n,this._dadataService=u,this.isDisabled=!1,this.disclaimers={benefAbs:"\u041b\u0438\u0446\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c",thirdPartyAbs:"\u041b\u0438\u0446\u043e, \u043d\u0435 \u044f\u0432\u043b\u044f\u044e\u0449\u0435\u0435\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u043a \u0432\u044b\u0433\u043e\u0434\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442, \u0432 \u0442.\u0447. \u0447\u0438\u0441\u043b\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u0433\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430, \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438, \u0434\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0441 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 \u0438\u043b\u0438 \u0438\u043d\u044b\u043c \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u043c"},this.benefAbs="\u041b\u0438\u0446\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c",this.thirdPartyAbs="\u041b\u0438\u0446\u043e, \u043d\u0435 \u044f\u0432\u043b\u044f\u044e\u0449\u0435\u0435\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u043a \u0432\u044b\u0433\u043e\u0434\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442, \u0432 \u0442.\u0447. \u0447\u0438\u0441\u043b\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u0430\u0433\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430, \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u043c\u0438\u0441\u0441\u0438\u0438, \u0434\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0441 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 \u0438\u043b\u0438 \u0438\u043d\u044b\u043c \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u043c"}ngOnInit(){this.initForm(),this.searchAddress()}ngOnDestroy(){}searchAddress(){this.deliveryForm.get("address").valueChanges.pipe(Object(S.a)(),Object(H.a)(l=>l&&l.length>0),Object(F.a)(300),Object(L.a)(l=>this._dadataService.search(l,"address"))).subscribe(l=>this.options=l)}initForm(){this.deliveryForm=this._fb.group({date:["",{validators:d.r.required,updateOn:"blur",disabled:this.isDisabled},[]],address:["",{validators:d.r.required,updateOn:"change",disabled:this.isDisabled}]}),this.kycForm=this._fb.group({conditions:["",{validators:d.r.required,updateOn:"change",disabled:this.isDisabled}],benefAbs:["",{validators:d.r.required,updateOn:"change",disabled:this.isDisabled}],thirdPartyAbs:["",{validators:d.r.required,updateOn:"change",disabled:this.isDisabled}]}),this.additionalServices=this._fb.group({sms:["",{updateOn:"change",disabled:this.isDisabled}],account:["",{updateOn:"change",disabled:this.isDisabled}]})}}var w=o.pb({encapsulation:0,styles:[[".button_back[_ngcontent-%COMP%]{position:absolute;left:0;top:10px;transform:rotate(180deg)}"]],data:{}});function U(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,2,"rosa-option",[],null,null,null,a.b,a.a)),o.qb(1,114688,[[4,4]],0,e.a,[o.k],{value:[0,"value"]},null),(l()(),o.Kb(2,0,["",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,2,0,n.context.$implicit.value)})}function j(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,2,"rosa-option",[["class","no-result"]],null,null,null,a.b,a.a)),o.qb(1,114688,[[4,4]],0,e.a,[o.k],null,null),(l()(),o.Kb(-1,0,["\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"]))],function(l,n){l(n,1,0)},null)}function J(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,U)),o.qb(2,278528,null,0,s.l,[o.N,o.K,o.r],{ngForOf:[0,"ngForOf"]},null),(l()(),o.gb(16777216,null,null,1,null,j)),o.qb(4,16384,null,0,s.m,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(0,null,null,0))],function(l,n){l(n,2,0,n.context.ngIf),l(n,4,0,!n.context.ngIf.length)},null)}function N(l){return o.Mb(0,[(l()(),o.gb(16777216,null,null,1,null,J)),o.qb(1,16384,null,0,s.m,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(0,null,null,0))],function(l,n){l(n,1,0,n.component.options)},null)}function R(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,158,"div",[["class","content-wrapper offset-top-2 offset-bottom-1"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,157,"div",[["class","rosa-grid-x"]],null,null,null,null,null)),(l()(),o.rb(2,0,null,null,10,"div",[["class","rosa-grid-x__offset offset-bottom-3"]],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,3,"div",[["class","button_back"]],null,null,null,null,null)),(l()(),o.rb(4,0,null,null,2,"rosa-icon-arrow",[["routerLink","/"]],null,[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==o.Db(l,5).onClick()&&b),b},t.b,t.a)),o.qb(5,16384,null,0,i.m,[i.l,i.a,[8,null],o.C,o.k],{routerLink:[0,"routerLink"]},null),o.qb(6,114688,null,0,c.a,[o.C],{fill:[0,"fill"]},null),(l()(),o.rb(7,0,null,null,5,"div",[["class","rosa-grid__row"]],null,null,null,null,null)),(l()(),o.rb(8,0,null,null,4,"div",[["class","rosa-col-lg-3"]],null,null,null,null,null)),(l()(),o.rb(9,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043a\u0430\u0440\u0442\u044b"])),(l()(),o.rb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["\u041c\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u0432\u044b\u0434\u0430\u0442\u044c \u0432\u0430\u043c \u043a\u0440\u0435\u0434\u0438\u0442 \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443 \u0431\u0435\u0437 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u044f \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u043d\u0438\u0436\u0435. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442, \u043f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0441\u0430\u043c\u043e\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044e \u043d\u0438\u0436\u0435."])),(l()(),o.rb(13,0,null,null,145,"div",[["class","rosa-grid-x__offset offset-top-2"]],null,null,null,null,null)),(l()(),o.rb(14,0,null,null,144,"div",[["class","rosa-col-lg-3"]],null,null,null,null,null)),(l()(),o.rb(15,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var b=!0;return"submit"===n&&(b=!1!==o.Db(l,17).onSubmit(u)&&b),"reset"===n&&(b=!1!==o.Db(l,17).onReset()&&b),b},null,null)),o.qb(16,16384,null,0,d.v,[],null,null),o.qb(17,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},null),o.Hb(2048,null,d.c,null,[d.i]),o.qb(19,16384,null,0,d.o,[[4,d.c]],null,null),(l()(),o.rb(20,0,null,null,2,"section",[["class","form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(21,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"])),(l()(),o.rb(23,0,null,null,26,"section",[["class","form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(24,0,null,null,19,"rosa-autocomplete-container",[],[[2,"rosa-form-control",null],[2,"rosa-form-control-disabled",null]],null,null,g.b,g.a)),o.qb(25,4440064,null,2,h.a,[o.C,o.k],null,null),o.Ib(335544320,1,{control:0}),o.Ib(603979776,2,{autocomplete:0}),(l()(),o.rb(28,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"])),(l()(),o.rb(30,16777216,null,1,7,"input",[["rosaInput",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var b=!0;return"input"===n&&(b=!1!==o.Db(l,31)._handleInput(u.target.value)&&b),"blur"===n&&(b=!1!==o.Db(l,31).onTouched()&&b),"compositionstart"===n&&(b=!1!==o.Db(l,31)._compositionStart()&&b),"compositionend"===n&&(b=!1!==o.Db(l,31)._compositionEnd(u.target.value)&&b),b},null,null)),o.qb(31,16384,null,0,d.d,[o.C,o.k,[2,d.a]],null,null),o.Hb(1024,null,d.l,function(l){return[l]},[d.d]),o.qb(33,540672,null,0,d.g,[[8,null],[8,null],[6,d.l],[2,d.u]],{form:[0,"form"]},null),o.Hb(2048,[[1,4]],d.m,null,[d.g]),o.qb(35,16384,null,0,d.n,[[4,d.m]],null,null),o.qb(36,212992,[[2,4]],0,f.a,[o.k,d.m,o.N,m.b],{rosaAutocomplete:[0,"rosaAutocomplete"]},null),o.qb(37,81920,null,0,D.a,[o.k,o.C],{setType:[0,"setType"]},null),(l()(),o.rb(38,0,null,4,2,"rosa-control-error",[],null,null,null,p.b,p.a)),o.qb(39,114688,null,0,C.a,[],null,null),(l()(),o.Kb(-1,0,["\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"])),(l()(),o.rb(41,0,null,3,2,"rosa-control-helper",[],null,null,null,k.b,k.a)),o.qb(42,114688,null,0,v.a,[],null,null),(l()(),o.Kb(-1,0,["\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"])),(l()(),o.rb(44,0,null,null,5,"rosa-autocomplete",[],null,null,null,q.b,q.a)),o.qb(45,49152,[["autocomplete",4]],2,x.a,[],null,null),o.Ib(603979776,3,{content:0}),o.Ib(603979776,4,{options:1}),(l()(),o.gb(0,null,null,1,null,N)),o.qb(49,16384,[[3,4]],0,y.a,[o.K],null,null),(l()(),o.rb(50,0,null,null,39,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var b=!0;return"submit"===n&&(b=!1!==o.Db(l,52).onSubmit(u)&&b),"reset"===n&&(b=!1!==o.Db(l,52).onReset()&&b),b},null,null)),o.qb(51,16384,null,0,d.v,[],null,null),o.qb(52,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},null),o.Hb(2048,null,d.c,null,[d.i]),o.qb(54,16384,null,0,d.o,[[4,d.c]],null,null),(l()(),o.rb(55,0,null,null,2,"section",[["class","form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(56,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"])),(l()(),o.rb(58,0,null,null,15,"section",[["class","form-group checkbox-form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(59,0,null,null,14,"div",[["class","checkbox-group_column"]],null,null,null,null,null)),(l()(),o.rb(60,0,null,null,13,"rosa-checkbox-container",[],[[2,"rosa-form-control",null],[2,"rosa-form-control-disabled",null]],null,null,B.b,B.a)),o.qb(61,4440064,null,2,I.a,[o.C],null,null),o.Ib(335544320,5,{control:0}),o.Ib(335544320,6,{label:0}),(l()(),o.rb(64,0,null,0,6,"input",[["id","checkboxServices"],["name","sms"],["rosaCheckbox","rosaCheckbox"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var b=!0;return"change"===n&&(b=!1!==o.Db(l,65).onChange(u.target.checked)&&b),"blur"===n&&(b=!1!==o.Db(l,65).onTouched()&&b),b},null,null)),o.qb(65,16384,null,0,d.b,[o.C,o.k],null,null),o.Hb(1024,null,d.l,function(l){return[l]},[d.b]),o.qb(67,540672,null,0,d.g,[[8,null],[8,null],[6,d.l],[2,d.u]],{form:[0,"form"]},null),o.Hb(2048,[[5,4]],d.m,null,[d.g]),o.qb(69,16384,null,0,d.n,[[4,d.m]],null,null),o.qb(70,16384,null,0,P.a,[],null,null),(l()(),o.rb(71,0,null,1,2,"label",[["for","checkboxServices"],["rosaCheckboxLabel","rosaCheckboxLabel"]],null,null,null,null,null)),o.qb(72,81920,null,0,K.a,[o.k,o.C],null,null),(l()(),o.Kb(-1,null,["\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c SMS/push-\u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 "])),(l()(),o.rb(74,0,null,null,15,"section",[["class","form-group checkbox-form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(75,0,null,null,14,"div",[["class","checkbox-group_column"]],null,null,null,null,null)),(l()(),o.rb(76,0,null,null,13,"rosa-checkbox-container",[],[[2,"rosa-form-control",null],[2,"rosa-form-control-disabled",null]],null,null,B.b,B.a)),o.qb(77,4440064,null,2,I.a,[o.C],null,null),o.Ib(335544320,7,{control:0}),o.Ib(335544320,8,{label:0}),(l()(),o.rb(80,0,null,0,6,"input",[["id","checkboxAccount"],["name","account"],["rosaCheckbox","rosaCheckbox"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var b=!0;return"change"===n&&(b=!1!==o.Db(l,81).onChange(u.target.checked)&&b),"blur"===n&&(b=!1!==o.Db(l,81).onTouched()&&b),b},null,null)),o.qb(81,16384,null,0,d.b,[o.C,o.k],null,null),o.Hb(1024,null,d.l,function(l){return[l]},[d.b]),o.qb(83,540672,null,0,d.g,[[8,null],[8,null],[6,d.l],[2,d.u]],{form:[0,"form"]},null),o.Hb(2048,[[7,4]],d.m,null,[d.g]),o.qb(85,16384,null,0,d.n,[[4,d.m]],null,null),o.qb(86,16384,null,0,P.a,[],null,null),(l()(),o.rb(87,0,null,1,2,"label",[["for","checkboxAccount"],["rosaCheckboxLabel","rosaCheckboxLabel"]],null,null,null,null,null)),o.qb(88,81920,null,0,K.a,[o.k,o.C],null,null),(l()(),o.Kb(-1,null,["\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0441\u0431\u0435\u0440\u0435\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"])),(l()(),o.rb(90,0,null,null,68,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var b=!0;return"submit"===n&&(b=!1!==o.Db(l,92).onSubmit(u)&&b),"reset"===n&&(b=!1!==o.Db(l,92).onReset()&&b),b},null,null)),o.qb(91,16384,null,0,d.v,[],null,null),o.qb(92,540672,null,0,d.i,[[8,null],[8,null]],{form:[0,"form"]},null),o.Hb(2048,null,d.c,null,[d.i]),o.qb(94,16384,null,0,d.o,[[4,d.c]],null,null),(l()(),o.rb(95,0,null,null,2,"section",[["class","form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(96,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["\u0421\u0430\u043c\u043e\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"])),(l()(),o.rb(98,0,null,null,15,"section",[["class","form-group checkbox-form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(99,0,null,null,14,"div",[["class","checkbox-group_column"]],null,null,null,null,null)),(l()(),o.rb(100,0,null,null,13,"rosa-checkbox-container",[],[[2,"rosa-form-control",null],[2,"rosa-form-control-disabled",null]],null,null,B.b,B.a)),o.qb(101,4440064,null,2,I.a,[o.C],null,null),o.Ib(335544320,9,{control:0}),o.Ib(335544320,10,{label:0}),(l()(),o.rb(104,0,null,0,6,"input",[["id","checkbox1"],["name","disclaimer"],["rosaCheckbox","rosaCheckbox"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var b=!0;return"change"===n&&(b=!1!==o.Db(l,105).onChange(u.target.checked)&&b),"blur"===n&&(b=!1!==o.Db(l,105).onTouched()&&b),b},null,null)),o.qb(105,16384,null,0,d.b,[o.C,o.k],null,null),o.Hb(1024,null,d.l,function(l){return[l]},[d.b]),o.qb(107,540672,null,0,d.g,[[8,null],[8,null],[6,d.l],[2,d.u]],{form:[0,"form"]},null),o.Hb(2048,[[9,4]],d.m,null,[d.g]),o.qb(109,16384,null,0,d.n,[[4,d.m]],null,null),o.qb(110,16384,null,0,P.a,[],null,null),(l()(),o.rb(111,0,null,1,2,"label",[["for","checkbox1"],["rosaCheckboxLabel","rosaCheckboxLabel"]],null,null,null,null,null)),o.qb(112,81920,null,0,K.a,[o.k,o.C],null,null),(l()(),o.Kb(-1,null,["\u0421\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0432\u044b\u0448\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438"])),(l()(),o.rb(114,0,null,null,18,"section",[["class","form-group checkbox-form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(115,0,null,null,17,"div",[["class","checkbox-group_column"]],null,null,null,null,null)),(l()(),o.rb(116,0,null,null,16,"rosa-checkbox-container",[],[[2,"rosa-form-control",null],[2,"rosa-form-control-disabled",null]],null,null,B.b,B.a)),o.qb(117,4440064,null,2,I.a,[o.C],null,null),o.Ib(335544320,11,{control:0}),o.Ib(335544320,12,{label:0}),(l()(),o.rb(120,0,null,0,6,"input",[["id","checkbox2"],["name","thirdPartyAbs"],["rosaCheckbox","rosaCheckbox"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var b=!0;return"change"===n&&(b=!1!==o.Db(l,121).onChange(u.target.checked)&&b),"blur"===n&&(b=!1!==o.Db(l,121).onTouched()&&b),b},null,null)),o.qb(121,16384,null,0,d.b,[o.C,o.k],null,null),o.Hb(1024,null,d.l,function(l){return[l]},[d.b]),o.qb(123,540672,null,0,d.g,[[8,null],[8,null],[6,d.l],[2,d.u]],{form:[0,"form"]},null),o.Hb(2048,[[11,4]],d.m,null,[d.g]),o.qb(125,16384,null,0,d.n,[[4,d.m]],null,null),o.qb(126,16384,null,0,P.a,[],null,null),(l()(),o.rb(127,0,null,1,2,"label",[["for","checkbox2"],["rosaCheckboxLabel","rosaCheckboxLabel"]],null,null,null,null,null)),o.qb(128,81920,null,0,K.a,[o.k,o.C],null,null),(l()(),o.Kb(-1,null,["\u042f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e, \u0447\u0442\u043e \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0441 \u0434\u0435\u043d\u0435\u0436\u043d\u044b\u043c\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0438 \u0438 \u0438\u043d\u044b\u043c \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u043c \u043d\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e \u043a \u0432\u044b\u0433\u043e\u0434\u0435 \u0442\u0440\u0435\u0442\u044c\u0438\u0445 \u043b\u0438\u0446 (\u0432\u044b\u0433\u043e\u0434\u043e\u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0430\u0442\u0435\u043b\u044c \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442)"])),(l()(),o.rb(130,0,null,3,2,"rosa-icon-help",[],null,[[null,"click"],[null,"mouseout"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==o.Db(l,132).show()&&b),"mouseout"===n&&(b=!1!==o.Db(l,132).hide()&&b),b},T.b,T.a)),o.qb(131,114688,null,0,A.a,[o.C],null,null),o.qb(132,81920,null,0,_.a,[m.b,o.k,m.g],{text:[0,"text"]},null),(l()(),o.rb(133,0,null,null,18,"section",[["class","form-group checkbox-form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(134,0,null,null,17,"div",[["class","checkbox-group_column"]],null,null,null,null,null)),(l()(),o.rb(135,0,null,null,16,"rosa-checkbox-container",[],[[2,"rosa-form-control",null],[2,"rosa-form-control-disabled",null]],null,null,B.b,B.a)),o.qb(136,4440064,null,2,I.a,[o.C],null,null),o.Ib(335544320,13,{control:0}),o.Ib(335544320,14,{label:0}),(l()(),o.rb(139,0,null,0,6,"input",[["id","checkbox3"],["name","benefAbs"],["rosaCheckbox","rosaCheckbox"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var b=!0;return"change"===n&&(b=!1!==o.Db(l,140).onChange(u.target.checked)&&b),"blur"===n&&(b=!1!==o.Db(l,140).onTouched()&&b),b},null,null)),o.qb(140,16384,null,0,d.b,[o.C,o.k],null,null),o.Hb(1024,null,d.l,function(l){return[l]},[d.b]),o.qb(142,540672,null,0,d.g,[[8,null],[8,null],[6,d.l],[2,d.u]],{form:[0,"form"]},null),o.Hb(2048,[[13,4]],d.m,null,[d.g]),o.qb(144,16384,null,0,d.n,[[4,d.m]],null,null),o.qb(145,16384,null,0,P.a,[],null,null),(l()(),o.rb(146,0,null,1,2,"label",[["for","checkbox3"],["rosaCheckboxLabel","rosaCheckboxLabel"]],null,null,null,null,null)),o.qb(147,81920,null,0,K.a,[o.k,o.C],null,null),(l()(),o.Kb(-1,null,["\u042f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e, \u0447\u0442\u043e \u0411\u0435\u043d\u0435\u0444\u0438\u0446\u0438\u0430\u0440\u043d\u044b\u0439 \u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 "])),(l()(),o.rb(149,0,null,3,2,"rosa-icon-help",[],null,[[null,"click"],[null,"mouseout"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==o.Db(l,151).show()&&b),"mouseout"===n&&(b=!1!==o.Db(l,151).hide()&&b),b},T.b,T.a)),o.qb(150,114688,null,0,A.a,[o.C],null,null),o.qb(151,81920,null,0,_.a,[m.b,o.k,m.g],{text:[0,"text"]},null),(l()(),o.rb(152,0,null,null,2,"section",[["class","form-group offset-bottom-5"]],null,null,null,null,null)),(l()(),o.rb(153,0,null,null,1,"p",[["class","disclaimer"]],null,null,null,null,null)),(l()(),o.Kb(-1,null,['\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0414\u0430\u043b\u0435\u0435", \u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e \u0441\u0432\u043e\u0451 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c \u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043f\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443 \u041a\u0440\u0435\u0434\u0438\u0442 \u043d\u0430\u043b\u0438\u0447\u043d\u044b\u043c\u0438'])),(l()(),o.rb(155,0,null,null,3,"section",[["class","button-group offset-top-5"]],null,null,null,null,null)),(l()(),o.rb(156,0,null,null,2,"button",[["rosaButton",""],["type","button"]],null,null,null,null,null)),o.qb(157,81920,null,0,O.a,[o.k,o.C],{setType:[0,"setType"]},null),(l()(),o.Kb(-1,null,["\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443"]))],function(l,n){var u=n.component;l(n,5,0,"/"),l(n,6,0,"#282423"),l(n,17,0,u.deliveryForm),l(n,25,0),l(n,33,0,u.deliveryForm.controls.address),l(n,36,0,o.Db(n,45)),l(n,37,0,""),l(n,39,0),l(n,42,0),l(n,52,0,u.additionalServices),l(n,61,0),l(n,67,0,u.additionalServices.controls.sms),l(n,72,0),l(n,77,0),l(n,83,0,u.additionalServices.controls.account),l(n,88,0),l(n,92,0,u.kycForm),l(n,101,0),l(n,107,0,u.kycForm.controls.conditions),l(n,112,0),l(n,117,0),l(n,123,0,u.kycForm.controls.thirdPartyAbs),l(n,128,0),l(n,131,0),l(n,132,0,o.vb(1,"",u.thirdPartyAbs,"")),l(n,136,0),l(n,142,0,u.kycForm.controls.benefAbs),l(n,147,0),l(n,150,0),l(n,151,0,o.vb(1,"",u.benefAbs,"")),l(n,157,0,"")},function(l,n){l(n,15,0,o.Db(n,19).ngClassUntouched,o.Db(n,19).ngClassTouched,o.Db(n,19).ngClassPristine,o.Db(n,19).ngClassDirty,o.Db(n,19).ngClassValid,o.Db(n,19).ngClassInvalid,o.Db(n,19).ngClassPending),l(n,24,0,!0,null==o.Db(n,25).control?null:o.Db(n,25).control.disabled),l(n,30,0,o.Db(n,35).ngClassUntouched,o.Db(n,35).ngClassTouched,o.Db(n,35).ngClassPristine,o.Db(n,35).ngClassDirty,o.Db(n,35).ngClassValid,o.Db(n,35).ngClassInvalid,o.Db(n,35).ngClassPending),l(n,50,0,o.Db(n,54).ngClassUntouched,o.Db(n,54).ngClassTouched,o.Db(n,54).ngClassPristine,o.Db(n,54).ngClassDirty,o.Db(n,54).ngClassValid,o.Db(n,54).ngClassInvalid,o.Db(n,54).ngClassPending),l(n,60,0,!0,null==o.Db(n,61).control?null:o.Db(n,61).control.disabled),l(n,64,0,o.Db(n,69).ngClassUntouched,o.Db(n,69).ngClassTouched,o.Db(n,69).ngClassPristine,o.Db(n,69).ngClassDirty,o.Db(n,69).ngClassValid,o.Db(n,69).ngClassInvalid,o.Db(n,69).ngClassPending),l(n,76,0,!0,null==o.Db(n,77).control?null:o.Db(n,77).control.disabled),l(n,80,0,o.Db(n,85).ngClassUntouched,o.Db(n,85).ngClassTouched,o.Db(n,85).ngClassPristine,o.Db(n,85).ngClassDirty,o.Db(n,85).ngClassValid,o.Db(n,85).ngClassInvalid,o.Db(n,85).ngClassPending),l(n,90,0,o.Db(n,94).ngClassUntouched,o.Db(n,94).ngClassTouched,o.Db(n,94).ngClassPristine,o.Db(n,94).ngClassDirty,o.Db(n,94).ngClassValid,o.Db(n,94).ngClassInvalid,o.Db(n,94).ngClassPending),l(n,100,0,!0,null==o.Db(n,101).control?null:o.Db(n,101).control.disabled),l(n,104,0,o.Db(n,109).ngClassUntouched,o.Db(n,109).ngClassTouched,o.Db(n,109).ngClassPristine,o.Db(n,109).ngClassDirty,o.Db(n,109).ngClassValid,o.Db(n,109).ngClassInvalid,o.Db(n,109).ngClassPending),l(n,116,0,!0,null==o.Db(n,117).control?null:o.Db(n,117).control.disabled),l(n,120,0,o.Db(n,125).ngClassUntouched,o.Db(n,125).ngClassTouched,o.Db(n,125).ngClassPristine,o.Db(n,125).ngClassDirty,o.Db(n,125).ngClassValid,o.Db(n,125).ngClassInvalid,o.Db(n,125).ngClassPending),l(n,135,0,!0,null==o.Db(n,136).control?null:o.Db(n,136).control.disabled),l(n,139,0,o.Db(n,144).ngClassUntouched,o.Db(n,144).ngClassTouched,o.Db(n,144).ngClassPristine,o.Db(n,144).ngClassDirty,o.Db(n,144).ngClassValid,o.Db(n,144).ngClassInvalid,o.Db(n,144).ngClassPending)})}function G(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,1,"rosa-delivery",[],null,null,null,R,w)),o.qb(1,245760,null,0,M,[o.C,d.e,V.a],null,null)],function(l,n){l(n,1,0)},null)}var Q=o.nb("rosa-delivery",M,G,{},{},[]),W=u("AOGJ"),Z=u("RJ9u"),E=u("pOQZ"),z=u("PN0S");class X{}var Y=u("OiM3"),$=u("za1a"),ll=u("DiCn"),nl=u("4rR8"),ul=u("tBgR"),ol=u("i7rM"),bl=u("DWKJ"),rl=u("hkEv"),al=u("Lxeu"),el=u("JS2m"),sl=u("rP9Y"),tl=u("agK2"),il=u("6t+M"),cl=u("a93Z"),dl=u("olQQ"),gl=u("ypLN"),hl=u("lvVi"),fl=u("THds"),ml=u("A8x4"),Dl=u("ssGQ"),pl=u("6ASV"),Cl=u("751F"),kl=u("FUUT");u.d(n,"DeliveryModuleNgFactory",function(){return vl});var vl=o.ob(b,[],function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[r.a,Q,W.a,Z.a]],[3,o.j],o.w]),o.Bb(4608,s.o,s.n,[o.t,[2,s.y]]),o.Bb(4608,d.t,d.t,[]),o.Bb(4608,d.e,d.e,[]),o.Bb(4608,m.b,m.b,[m.h,m.d,o.j,m.g,m.e,o.q,o.y,s.d,E.b,[2,s.i]]),o.Bb(5120,m.i,m.j,[m.b]),o.Bb(5120,z.g,z.f,[z.a,z.d]),o.Bb(4608,z.i,z.i,[z.g]),o.Bb(1073742336,s.c,s.c,[]),o.Bb(1073742336,i.n,i.n,[[2,i.s],[2,i.l]]),o.Bb(1073742336,X,X,[]),o.Bb(1073742336,d.s,d.s,[]),o.Bb(1073742336,d.j,d.j,[]),o.Bb(1073742336,d.q,d.q,[]),o.Bb(1073742336,z.e,z.e,[]),o.Bb(1073742336,Y.a,Y.a,[]),o.Bb(1073742336,$.a,$.a,[]),o.Bb(1073742336,E.a,E.a,[]),o.Bb(1073742336,ll.d,ll.d,[]),o.Bb(1073742336,nl.b,nl.b,[]),o.Bb(1073742336,ul.c,ul.c,[]),o.Bb(1073742336,m.f,m.f,[]),o.Bb(1073742336,ul.a,ul.a,[]),o.Bb(1073742336,ol.a,ol.a,[]),o.Bb(1073742336,bl.a,bl.a,[]),o.Bb(1073742336,rl.a,rl.a,[]),o.Bb(1073742336,al.a,al.a,[]),o.Bb(1073742336,el.a,el.a,[]),o.Bb(1073742336,sl.a,sl.a,[]),o.Bb(1073742336,tl.a,tl.a,[]),o.Bb(1073742336,il.a,il.a,[]),o.Bb(1073742336,cl.a,cl.a,[]),o.Bb(1073742336,dl.a,dl.a,[]),o.Bb(1073742336,gl.a,gl.a,[]),o.Bb(1073742336,hl.a,hl.a,[]),o.Bb(1073742336,fl.a,fl.a,[]),o.Bb(1073742336,ml.a,ml.a,[]),o.Bb(1073742336,Dl.a,Dl.a,[]),o.Bb(1073742336,pl.a,pl.a,[]),o.Bb(1073742336,Cl.a,Cl.a,[]),o.Bb(1073742336,kl.a,kl.a,[]),o.Bb(1073742336,b,b,[]),o.Bb(1024,i.j,function(){return[[{path:"",children:[{path:"",component:M}]}]]},[]),o.Bb(256,z.d,void 0,[]),o.Bb(256,z.a,z.h,[])])})}}]);