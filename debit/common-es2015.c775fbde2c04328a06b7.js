(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Bca+":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a});var s=e("kZht"),r=(e("dcak"),s.pb({encapsulation:0,styles:["[_nghost-%COMP%]{width: 24px; height: 20px;}"],data:{}}));function a(t){return s.Mb(2,[s.Ib(402653184,1,{iconElement:0}),(t()(),s.rb(1,0,null,null,1,":svg:svg",[["height","20px"],["viewBox","0 0 24 20"],["width","24px"]],null,null,null,null,null)),(t()(),s.rb(2,0,[[1,0],["icon",1]],null,0,":svg:polygon",[["fill","#E60028"],["id","Path"],["points","12.6102 1.42857 20.1356 8.97959 0 8.97959 0 11.0204 20.1356 11.0204 12.6102 18.5714 14.0339 20 24 10 14.0339 0"]],null,null,null,null,null))],null,null)}},SsJh:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var s=e("6uGs"),r=e("YtkY"),a=e("kZht");const o=(()=>{class t{constructor(t){this._http=t,this._apiKey="5c0fa69268870b7061361c5bdfc30bc1b1e95846"}search(t,n){this._apiUrl=`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${n}`;const e=new s.g({"Content-type":"application/json; charset = UTF-8",Accept:"application/json",Authorization:`Token ${this._apiKey}`}),a=(new s.h,JSON.stringify({query:t,count:"5"}));return this._http.post(this._apiUrl,a,{headers:e}).pipe(Object(r.a)(t=>t.suggestions))}}return t.ngInjectableDef=a.Qb({factory:function(){return new t(a.Rb(s.c))},token:t,providedIn:"root"}),t})()},VQPA:function(t,n,e){"use strict";e.d(n,"a",function(){return p});var s=e("D4FV"),r=e("DiCn"),a=e("E097"),o=e("7wUW"),c=e("m36x"),i=e("C05f"),l=e("kZht");const u={hasBackdrop:!0,backdropClass:"dark-backdrop",panelClass:"tm-file-preview-dialog-panel",closeByBackdrop:!0,type:"agreements"},p=(()=>{class t{constructor(t,n){this.injector=t,this.overlay=n,this.agreeSuccess$=new i.a(!1)}open(t={}){const n=Object.assign({},u,t),e=this.createOverlay(n),s=new a.a(e);return this.attachDialogContainer(e,n,s),n.closeByBackdrop&&e.backdropClick().subscribe(t=>s.close()),s}createOverlay(t){const n=this.getOverlayConfig(t);return this.overlay.create(n)}attachDialogContainer(t,n,e){const s=this.createInjector(n,e);if("phone"===n.type){const n=new r.a(c.a,null,s);return t.attach(n).instance}const a=new r.a(o.a,null,s);return t.attach(a).instance}createInjector(t,n){const e=new WeakMap;return e.set(a.a,n),new r.c(this.injector,e)}getOverlayConfig(t){const n=this.overlay.position().global().centerHorizontally().centerVertically();return new s.c({hasBackdrop:t.hasBackdrop,backdropClass:t.backdropClass,panelClass:t.panelClass,scrollStrategy:this.overlay.scrollStrategies.block(),positionStrategy:n})}}return t.ngInjectableDef=l.Qb({factory:function(){return new t(l.Rb(l.n),l.Rb(s.b))},token:t,providedIn:"root"}),t})()},dcak:function(t,n,e){"use strict";e.d(n,"a",function(){return s});class s{constructor(t){this.renderer=t,this.fill="#e60028"}ngOnInit(){this.renderer.setAttribute(this.iconElement.nativeElement,"fill",this.fill)}}}}]);