"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5712],{5712:(D,T,f)=>{f.r(T),f.d(T,{ion_nav:()=>P,ion_nav_link:()=>R});var m=f(467),g=f(4363),A=f(3351),d=f(5638),v=f(7555),b=f(611),k=f(5938);class _{constructor(t,n){this.component=t,this.params=n,this.state=1}init(t){var n=this;return(0,m.A)(function*(){if(n.state=2,!n.element){const s=n.component;n.element=yield(0,k.a)(n.delegate,t,s,["ion-page","ion-page-invisible"],n.params)}})()}_destroy(){(0,d.o)(3!==this.state,"view state must be ATTACHED");const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}const C=(e,t,n)=>!(!e||e.component!==t)&&(0,d.s)(e.params,n),I=(e,t)=>e?e instanceof _?e:new _(e,t):null,P=class{constructor(e){(0,g.r)(this,e),this.ionNavWillLoad=(0,g.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,g.d)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,g.d)(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.delegate=void 0,this.swipeGesture=void 0,this.animated=!0,this.animation=void 0,this.rootParams=void 0,this.root=void 0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&!1!==this.didLoad&&(this.useRouter||void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=(0,b.b)(this);this.swipeGesture=b.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}componentDidLoad(){var e=this;return(0,m.A)(function*(){e.didLoad=!0,e.rootChanged(),e.gesture=(yield f.e(2076).then(f.bind(f,6492))).createSwipeBackGesture(e.el,e.canStart.bind(e),e.onStart.bind(e),e.onMove.bind(e),e.onEnd.bind(e)),e.swipeGestureChanged()})()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)(0,v.l)(e.element,v.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,s){return this.insert(-1,e,t,n,s)}insert(e,t,n,s,i){return this.insertPages(e,[{component:t,componentProps:n}],s,i)}insertPages(e,t,n,s){return this.queueTrns({insertStart:e,insertViews:t,opts:n},s)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const s={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(s.removeView=e,s.removeStart=1):"number"==typeof e&&(s.removeStart=e+1),this.queueTrns(s,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,s){return this.queueTrns({removeStart:e,removeCount:t,opts:n},s)}setRoot(e,t,n,s){return this.setPages([{component:e,componentProps:t}],n,s)}setPages(e,t,n){return null!=t||(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,s){const i=this.getActiveSync();if(C(i,e,t))return Promise.resolve({changed:!1,element:i.element});let r;const a=new Promise(l=>r=l);let o;const c={updateURL:!1,viewIsReady:l=>{let h;const p=new Promise(u=>h=u);return r({changed:!0,element:l,markVisible:(u=(0,m.A)(function*(){h(),yield o}),function(){return u.apply(this,arguments)})}),p;var u}};if("root"===n)o=this.setRoot(e,t,c);else{const l=this.views.find(h=>C(h,e,t));l?o=this.popTo(l,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:s})):"forward"===n?o=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:s})):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:s})))}return a}getRouteId(){var e=this;return(0,m.A)(function*(){const t=e.getActiveSync();if(t)return{id:t.element.tagName,params:t.params,element:t.element}})()}getActive(){var e=this;return(0,m.A)(function*(){return e.getActiveSync()})()}getByIndex(e){var t=this;return(0,m.A)(function*(){return t.views[e]})()}canGoBack(e){var t=this;return(0,m.A)(function*(){return t.canGoBackSync(e)})()}getPrevious(e){var t=this;return(0,m.A)(function*(){return t.getPreviousSync(e)})()}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}queueTrns(e,t){var n=this;return(0,m.A)(function*(){var s,i;if(n.isTransitioning&&null!==(s=e.opts)&&void 0!==s&&s.skipIfBusy)return!1;const r=new Promise((a,o)=>{e.resolve=a,e.reject=o});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&n.useRouter){const a=document.querySelector("ion-router");if(a){const o=yield a.canTransition();if(!1===o)return!1;if("string"==typeof o)return a.push(o,e.opts.direction||"back"),!1}}return 0===(null===(i=e.insertViews)||void 0===i?void 0:i.length)&&(e.insertViews=void 0),n.transInstr.push(e),n.nextTrns(),r})()}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}runTransition(e){var t=this;return(0,m.A)(function*(){try{t.ionNavWillChange.emit(),t.isTransitioning=!0,t.prepareTI(e);const n=t.getActiveSync(),s=t.getEnteringView(e,n);if(!n&&!s)throw new Error("no views in the stack to be removed");s&&1===s.state&&(yield s.init(t.el)),t.postViewInit(s,n,e);const i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&s!==n;let r;i&&e.opts&&n&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||(null==s?void 0:s.animationBuilder)),n.animationBuilder=e.opts.animationBuilder),r=i?yield t.transition(s,n,e):{hasCompleted:!0,requiresTransition:!1},t.success(r,e),t.ionNavDidChange.emit()}catch(n){t.failed(n,e)}t.isTransitioning=!1,t.nextTrns()})()}prepareTI(e){var t,n,s;const i=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(n=(s=e.opts).delegate)&&void 0!==n||(s.delegate=this.delegate),void 0!==e.removeView){(0,d.o)(void 0!==e.removeStart,"removeView needs removeStart"),(0,d.o)(void 0!==e.removeCount,"removeView needs removeCount");const o=this.views.indexOf(e.removeView);if(o<0)throw new Error("removeView was not found");e.removeStart+=o}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=i-1),e.removeCount<0&&(e.removeCount=i-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===i),e.insertViews&&((e.insertStart<0||e.insertStart>i)&&(e.insertStart=i),e.enteringRequiresTransition=e.insertStart===i);const r=e.insertViews;if(!r)return;(0,d.o)(r.length>0,"length can not be zero");const a=(e=>e.map(t=>t instanceof _?t:"component"in t?I(t.component,null===t.componentProps?void 0:t.componentProps):I(t,void 0)).filter(t=>null!==t))(r);if(0===a.length)throw new Error("invalid views to insert");for(const o of a){o.delegate=e.opts.delegate;const c=o.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===o.state)throw new Error("inserted view was already destroyed")}e.insertViews=a}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const s=e.removeStart;if(void 0!==s){const i=this.views,r=s+e.removeCount;for(let a=i.length-1;a>=0;a--){const o=i[a];if((a<s||a>=r)&&o!==t)return o}}}postViewInit(e,t,n){var s,i,r;(0,d.o)(t||e,"Both leavingView and enteringView are null"),(0,d.o)(n.resolve,"resolve must be valid"),(0,d.o)(n.reject,"reject must be valid");const a=n.opts,{insertViews:o,removeStart:c,removeCount:l}=n;let h;if(void 0!==c&&void 0!==l){(0,d.o)(c>=0,"removeStart can not be negative"),(0,d.o)(l>=0,"removeCount can not be negative"),h=[];for(let u=c;u<c+l;u++){const w=this.views[u];void 0!==w&&w!==e&&w!==t&&h.push(w)}null!==(s=a.direction)&&void 0!==s||(a.direction="back")}const p=this.views.length+(null!==(i=null==o?void 0:o.length)&&void 0!==i?i:0)-(null!=l?l:0);if((0,d.o)(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){let u=n.insertStart;for(const w of o)this.insertViewAt(w,u),u++;n.enteringRequiresTransition&&(null!==(r=a.direction)&&void 0!==r||(a.direction="forward"))}if(h&&h.length>0){for(const u of h)(0,v.l)(u.element,v.b),(0,v.l)(u.element,v.c),(0,v.l)(u.element,v.d);for(const u of h)this.destroyView(u)}}transition(e,t,n){var s=this;return(0,m.A)(function*(){const i=n.opts,r=i.progressAnimation?p=>{void 0===p||s.gestureOrAnimationInProgress?s.sbAni=p:(s.gestureOrAnimationInProgress=!0,p.onFinish(()=>{s.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0}),p.progressEnd(0,0,0))}:void 0,a=(0,b.b)(s),o=e.element,c=t&&t.element,l=Object.assign(Object.assign({mode:a,showGoBack:s.canGoBackSync(e),baseEl:s.el,progressCallback:r,animated:s.animated&&b.c.getBoolean("animated",!0),enteringEl:o,leavingEl:c},i),{animationBuilder:i.animationBuilder||s.animation||b.c.get("navAnimation")}),{hasCompleted:h}=yield(0,v.t)(l);return s.transitionFinish(h,e,t,i)})()}transitionFinish(e,t,n,s){const i=e?t:n;return i&&this.unmountInactiveViews(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:s.direction}}insertViewAt(e,t){const n=this.views,s=n.indexOf(e);s>-1?((0,d.o)(e.nav===this,"view is not part of the nav"),n.splice(s,1),n.splice(t,0,e)):((0,d.o)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,d.o)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,d.o)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let s=t.length-1;s>=0;s--){const i=t[s],r=i.element;r&&(s>n?((0,v.l)(r,v.d),this.destroyView(i)):s<n&&(0,v.s)(r,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.sbAni.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0});let s=e?-.001:.001;e?s+=(0,A.g)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),s+=(0,A.g)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,s,n)}else this.gestureOrAnimationInProgress=!1}render(){return(0,g.h)("slot",{key:"6894eccc60e446294b01261477691ea1e88348ab"})}get el(){return(0,g.f)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};P.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";const R=class{constructor(e){(0,g.r)(this,e),this.onClick=()=>((e,t,n,s,i)=>{const r=this.el.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,s,{skipIfBusy:!0,animationBuilder:i})}else if("root"===t){if(void 0!==n)return r.setRoot(n,s,{skipIfBusy:!0,animationBuilder:i})}else if("back"===t)return r.pop({skipIfBusy:!0,animationBuilder:i});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation),this.component=void 0,this.componentProps=void 0,this.routerDirection="forward",this.routerAnimation=void 0}render(){return(0,g.h)(g.H,{key:"dab6e8a908395d99c87452c5e5aa4e61d9e72435",onClick:this.onClick})}get el(){return(0,g.f)(this)}}}}]);