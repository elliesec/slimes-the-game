!function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(u&&u(e);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={3:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/slimes-the-game/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([81,0,1,5]),n()}([,function(t,e,n){"use strict";var a;n.d(e,"a",(function(){return a})),function(t){t.SHADOW="shadow",t.LEGS="legs",t.TORSO="torso",t.PUBIC_HAIR="pubicHair",t.ARM_LEFT="armLeft",t.ARM_RIGHT="armRight",t.HEAD="head",t.HAIR_BACK="hairBack",t.HAIR_FRONT="hairFront",t.EXPRESSION="expression"}(a||(a={}))},function(t,e,n){"use strict";var a;n.d(e,"a",(function(){return a})),function(t){t.PLAYER="Player"}(a||(a={}))},,,,,,,function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var a={"./armLeft.ts":51,"./armRight.ts":53,"./expression.ts":55,"./hairBack.ts":57,"./hairFront.ts":59,"./head.ts":61,"./legs.ts":63,"./pubicHair.ts":65,"./shadow.ts":67,"./torso.ts":69};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id=50},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultArmLeft",slot:a.a.ARM_LEFT,family:s.a.PLAYER,assets:[{name:"Default",url:n(52)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/ec443cce74498751a3cbb43a21719299.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultArmRight",slot:a.a.ARM_RIGHT,family:s.a.PLAYER,assets:[{name:"Default",url:n(54)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/331d46c72ab2add55af911a9db9c1e81.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultExpression",slot:a.a.EXPRESSION,family:s.a.PLAYER,assets:[{name:"Default",url:n(56)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/bfd9811d3ee1bacf8832c44ef0036dae.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultHairBack",slot:a.a.HAIR_BACK,family:s.a.PLAYER,assets:[{name:"Default",url:n(58)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/293931d54da437ea0371afdc57e1eea9.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultHairFront",slot:a.a.HAIR_FRONT,family:s.a.PLAYER,assets:[{name:"Default",url:n(60)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/5117f2851efb243bafc25294758918fc.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultHead",slot:a.a.HEAD,family:s.a.PLAYER,assets:[{name:"Default",url:n(62)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/7b680c824703557d11fd4f5200c1fb5a.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultLegs",slot:a.a.LEGS,family:s.a.PLAYER,assets:[{name:"Default",url:n(64)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/3876cac8706370c1374ac0c785a1e53c.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultPubicHair",slot:a.a.PUBIC_HAIR,family:s.a.PLAYER,assets:[{name:"Default",url:n(66)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/341f0b6e59168b0379f95878ab6b12b6.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultShadow",slot:a.a.SHADOW,family:s.a.PLAYER,assets:[{name:"Default",url:n(68)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/96b9ed2f34d8e302b7a206c17f7b2399.png"},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2);const i=[{name:"defaultTorso",slot:a.a.TORSO,family:s.a.PLAYER,assets:[{name:"Default",url:n(70)}]}];e.default=i},function(t,e,n){t.exports=n.p+"assets/e81994b2f5ffff2d0916d7d545941483.png"},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a,s=n(7),i=n(0),r=n.n(i),o=n(5),c=n(3),l=(n(9),n(4)),u=n(12);!function(t){t.SET_VIEW="app/set-view",t.SET_PIXI_APP="app/set-pixi-app",t.SET_POSITION="app/set-position"}(a||(a={}));const p={[a.SET_PIXI_APP]:function(t,e){return e.payload}},d={[a.SET_POSITION]:function(t,{payload:e}){const{x:n,y:a}=t;return n!==e.x||a!==e.y?Object.assign({},e):t}};var h;!function(t){t.DEFAULT="default"}(h||(h={}));const f={[a.SET_VIEW]:function(t,e){return e.payload}},m=Object(l.combineReducers)({view:function(t=h.DEFAULT,e){const n=f[e.type];return n?n(t,e):t},pixiApp:function(t=null,e){const n=p[e.type];return n?n(t,e):t},position:function(t={x:0,y:0},e){const n=d[e.type];return n?n(t,e):t}}),g=Object(l.combineReducers)({app:m}),R=Object(l.createStore)(g,Object(u.composeWithDevTools)());var E=n(85);class y extends i.Component{}class A extends i.Component{render(){return r.a.createElement("div",{className:"Sidebar"},"Sidebar")}}class b extends i.PureComponent{constructor(t){super(t),this.ref=Object(i.createRef)(),this.state=this.getInitialState({containerAdded:!1})}componentDidMount(){this.container=this.createContainer(this.props),this.addContainerToApp()}componentDidUpdate(t){const{appPosition:e,width:n,height:a}=this.props;n===t.width&&a===t.height&&e===t.appPosition||this.container.setProps(this.getContainerProps()),this.addContainerToApp()}getContainerProps(){const t=this.ref.current;if(!t)return{x:0,y:0,width:this.props.width,height:this.props.height};const e=this.props.appPosition,{x:n,y:a,width:s,height:i}=t.getBoundingClientRect();return{x:n-e.x,y:a-e.y,width:s,height:i}}addContainerToApp(){!this.state.containerAdded&&this.props.app&&(this.props.app.stage.addChild(this.container),this.setState({containerAdded:!0}))}}const w=Object(c.b)((function(t){return{appPosition:t.app.position}})),P=Object(c.b)((function(t){return{app:t.app.pixiApp}}));var O=n(1),I=n(28);class x{static addUpdateListener(t){this.updateListeners.push(t)}static removeUpdateListener(t){const e=this.updateListeners.indexOf(t);-1!==e&&this.updateListeners.splice(e,1)}static updateApp(t){this.updateListeners.forEach((e=>e(t)))}}x.updateListeners=[];class v extends s.b{constructor(t){super(),this.props=t,this.dirty=!1,this.assignProps=Object(I.a)(this.assignProps),this.layout(),this.tick=this.tick.bind(this),x.addUpdateListener(this.tick)}setProps(t){const e=this.props;this.props=this.assignProps(e,t),this.shouldContainerUpdate(e)&&(this.dirty=!0)}tick(t){this.dirty&&(this.clear(),this.layout(),this.dirty=!1)}clear(){this.removeChildren()}layout(){const{highlight:t=!1,x:e,y:n,width:a,height:i}=this.props;if(this.position.set(e,n),t){const t=new s.c;t.lineStyle(3,16711680),t.beginFill(16711680,.25),t.drawRect(e+1.5,n+1.5,a-3,i-3),t.endFill(),this.addChild(t)}}destroy(){}shouldContainerUpdate(t){return this.props!==t}assignProps(t,e){return Object.assign(Object.assign({},t),e)}}var C,S=n(2),T=n(29),L=n.n(T),D=n(84);!function(t){t[t.ERROR=0]="ERROR",t[t.WARNING=1]="WARNING",t[t.INFO=2]="INFO",t[t.DEBUG=3]="DEBUG",t[t.TRACE=4]="TRACE"}(C||(C={}));const N=new class{constructor(){this.logColors={[C.ERROR]:"#f44336",[C.WARNING]:"#ffa000",[C.INFO]:"#039be5",[C.DEBUG]:"#689f38",[C.TRACE]:"#90a4ae"}}error(t,e){this.log(console.error,C.ERROR,"[ERROR] "+t,e)}warn(t,e){this.log(console.warn,C.WARNING,"[WARN]  "+t,e)}info(t,e){this.log(console.log,C.INFO,"[INFO]  "+t,e)}debug(t,e){this.log(console.log,C.DEBUG,"[DEBUG] "+t,e)}trace(t,e){this.log(console.log,C.TRACE,"[TRACE] "+t,e)}log(t,e,n,a){const s=`color: ${this.logColors[e]};`;t(`%c${Object(D.a)(new Date,"HH:mm:ss.SSS")} ${n}${this.serialiseData(a)}`,s)}serialiseData(t){return null==t?"":String(t)}},_=new class{constructor(){this.familyCache={},this.itemCache={}}getItem(t,e,n){var a;const s=H(t,e,n),i=null!==(a=this.itemCache[s])&&void 0!==a?a:null;return i||N.warn(`Could not find item in item cache matching with family "${t}", slot "${e}" and name "${n}".`),i}registerItem(t){const e=function(t){return H(t.family,t.slot,t.name)}(t);this.itemCache[e]&&N.warn(`Duplicate item registered with ID "${e}". This is probably a mistake.`),this.itemCache[e]=t}loadItemModule(t){t.default.forEach((t=>this.registerItem(t)))}loadItemContext(t){t.keys().forEach((e=>{const n=t(e);this.loadItemModule(n)}))}registerFamily(t){const e=t.type;this.familyCache[e]&&N.warn(`Duplicate item family registered with type "${e}". This is probably a mistake.`),this.familyCache[e]=t}};function H(t,e,n){return L()([t,e,n])}_.loadItemContext(n(50));const j=[_.getItem(S.a.PLAYER,O.a.SHADOW,"defaultShadow"),_.getItem(S.a.PLAYER,O.a.LEGS,"defaultLegs"),_.getItem(S.a.PLAYER,O.a.ARM_LEFT,"defaultArmLeft"),_.getItem(S.a.PLAYER,O.a.TORSO,"defaultTorso"),_.getItem(S.a.PLAYER,O.a.PUBIC_HAIR,"defaultPubicHair"),_.getItem(S.a.PLAYER,O.a.ARM_RIGHT,"defaultArmRight"),_.getItem(S.a.PLAYER,O.a.HAIR_BACK,"defaultHairBack"),_.getItem(S.a.PLAYER,O.a.HEAD,"defaultHead"),_.getItem(S.a.PLAYER,O.a.EXPRESSION,"defaultExpression"),_.getItem(S.a.PLAYER,O.a.HAIR_FRONT,"defaultHairFront")];class W extends v{constructor(t){super(t)}layout(){super.layout();const{width:t,height:e}=this.props,n=t/1800,a=e/1500,i=Math.min(n,a),r=(t-1800*i)/2,o=(e-1500*i)/2;j.forEach((t=>{t&&t.assets.forEach((t=>{if(t){const e=s.d.from(t.url);e.x=r,e.y=o,e.scale.set(Math.min(n,a)),this.addChild(e)}}))}))}}const B=Object(E.a)(w(P(class extends b{render(){return r.a.createElement("div",{ref:this.ref,className:"Window CharacterWindow"},"Character Window")}getInitialState(t){return t}createContainer(t){const{x:e,y:n,width:a,height:s}=this.ref.current.getBoundingClientRect();return new W({x:e,y:n,width:a,height:s})}}))),F=Object(E.a)(w(P(class extends b{render(){return r.a.createElement("div",{ref:this.ref,className:"Window MapWindow"},"Map Window")}getInitialState(t){return t}createContainer(t){const{x:e,y:n,width:a,height:s}=this.ref.current.getBoundingClientRect();return new v({highlight:!0,x:e,y:n,width:a,height:s})}}))),Y=Object(E.a)(w(P(class extends b{render(){return r.a.createElement("div",{ref:this.ref,className:"Window NPCWindow"},"NPC Window")}getInitialState(t){return t}createContainer(t){const{x:e,y:n,width:a,height:s}=this.ref.current.getBoundingClientRect();return new v({highlight:!0,x:e,y:n,width:a,height:s})}})));class M extends i.Component{render(){return r.a.createElement("div",{className:"Window TextWindow"},"Text Window")}}class U extends y{render(){return r.a.createElement("div",{className:"DefaultView"},r.a.createElement(A,null),r.a.createElement("div",{className:"windows"},r.a.createElement(M,null),r.a.createElement("div",{className:"context-windows"},r.a.createElement(B,null),r.a.createElement("div",{className:"context-windows-lower"},r.a.createElement(F,null),r.a.createElement(Y,null)))))}}class G extends s.a{}class k extends i.PureComponent{constructor(){super(...arguments),this.elementRef=Object(i.createRef)()}componentDidMount(){const t=this.elementRef.current,e=t.clientWidth,n=t.clientHeight;this.app=new G({width:e,height:n,transparent:!0}),this.onResize(),t.appendChild(this.app.view),this.props.onPixiAppSet(this.app),this.app.ticker.add((t=>x.updateApp(t)))}componentDidUpdate(t){const{width:e,height:n}=this.props;!this.elementRef.current||e===t.width&&n===t.height||this.onResize()}render(){const t=this.props.view;return r.a.createElement("div",{className:"PixiAppComponent",ref:this.elementRef},r.a.createElement(t,{app:this.app}))}onResize(){const t=this.elementRef.current;this.app.resizeTo!==t&&(this.app.resizeTo=t);const{x:e,y:n}=t.getBoundingClientRect();this.props.onAppResize({x:e,y:n})}}const $=Object(c.b)((function(t){return{view:U}}),(function(t){return{onPixiAppSet(e){t(function(t){return{type:a.SET_PIXI_APP,payload:t}}(e))},onAppResize(e){var n;t((n=e,{type:a.SET_POSITION,payload:n}))}}}))(Object(E.a)(k));class z extends i.Component{render(){return r.a.createElement("div",{id:"SlimesTheGame"},r.a.createElement($,null))}}N.info("Welcome to Slimes: The Game");const X=document.getElementById("app-root");Object(o.render)(r.a.createElement(c.a,{store:R},r.a.createElement(z,null)),X)}]);
//# sourceMappingURL=index.e43f0f08c73a431bb1fb.js.map