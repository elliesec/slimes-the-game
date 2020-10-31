!function(e){function t(t){for(var a,c,l=t[0],i=t[1],u=t[2],E=0,m=[];E<l.length;E++)c=l[E],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(s&&s(t);m.length;)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={2:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/slimes-the-game/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;r.push([180,0,1]),n()}({178:function(e,t,n){e.exports=n.p+"assets/c627a862d41d9026b5ade2a0fda5b886.jpg"},180:function(e,t,n){"use strict";n.r(t);var a,o,r,c=n(0),l=n.n(c),i=n(9),u=n(3),s=n(7);function E(e,t){let n=0;for(let a=0;a<e;a++)n+=m(1,t);return n}function m(e=1,t=6){return e+Math.floor(Math.random()*(1+t-e))}function d(){return{type:a.END}}function h(e){return{type:r.SET_SCENE,payload:e}}!function(e){e.REGISTER="ENCOUNTER_REGISTER",e.START="ENCOUNTER_START",e.RESET="ENCOUNTER_RESET",e.SELECT_CHOICE="ENCOUNTER_SELECT_CHOICE",e.SET_STAGE_STATE="ENCOUNTER_SET_STAGE_STATE",e.END="ENCOUNTER_END",e.ROLL="ENCOUNTER_ROLL",e.ROLL_CONTINUE="ENCOUNTER_ROLL_CONTINUE",e.SET_STAGE="SET_STAGE"}(a||(a={})),function(e){e.ENCOUNTER_SELECT="ENCOUNTER_SELECT",e.ENCOUNTER="ENCOUNTER",e.ENCOUNTER_END="ENCOUNTER_END"}(o||(o={})),function(e){e.SET_SCENE="SET_SCENE"}(r||(r={}));class p extends c.Component{constructor(e){super(e),this.state={selectedEncounter:null},this.onSelectChange=this.onSelectChange.bind(this),this.onSelectEncounter=this.onSelectEncounter.bind(this)}render(){var e;const{encounters:t}=this.props;return l.a.createElement("div",{className:"EncounterSelection"},l.a.createElement("section",null,l.a.createElement("ul",{className:"encounter-stats-list"},l.a.createElement("li",null,l.a.createElement("span",{className:"key"},"Encounters Available: "),l.a.createElement("span",{className:"value"},t.length)))),l.a.createElement("hr",null),l.a.createElement("section",{className:"encounter-selection-form"},l.a.createElement("label",{htmlFor:"encounter-select"},l.a.createElement("span",null,"Select Encounter: "),l.a.createElement("select",{id:"encounter-select",value:null===(e=this.state.selectedEncounter)||void 0===e?void 0:e.id,onChange:this.onSelectChange},l.a.createElement("option",{value:""}),t.map((e=>l.a.createElement("option",{key:e.id,value:e.id},e.name))))),l.a.createElement("button",{className:"primary",disabled:!this.state.selectedEncounter,onClick:this.onSelectEncounter},"Start Encounter")))}onSelectChange(e){var t;const n=e.currentTarget.value,a=null!==(t=this.props.encounters.find((e=>e.id===n)))&&void 0!==t?t:null;this.setState({selectedEncounter:a})}onSelectEncounter(){const{selectedEncounter:e}=this.state;e&&this.props.onSelectEncounter(e)}}p.defaultProps={encounters:[],onSelectEncounter:s.b};const y=Object(u.b)((function(e){return{encounters:Object.values(e.encounter.byId)}}),(function(e){return{onSelectEncounter(t){e(function(e){return{type:a.START,payload:e}}(t)),e(h(o.ENCOUNTER))}}}))(p),f=({text:e})=>l.a.createElement("div",{className:"EncounterStageText"},e.map((e=>l.a.createElement("p",null,e))));var C,g,N,T;function b(e){return e.type===C.CHOICE}!function(e){e.CHOICE="CHOICE"}(C||(C={})),function(e){e.INIT="INIT",e.PICKED="PICKED"}(g||(g={})),function(e){e.INIT="INIT",e.ROLLED="ROLLED"}(N||(N={})),function(e){e.CRITICAL_SUCCESS="Critical Success",e.SUCCESS="Success",e.FAILURE="Failure",e.CRITICAL_FAILURE="Critical Failure"}(T||(T={}));var S,O=n(13),R=n.n(O);!function(e){e.STR="strength",e.DEX="dexterity",e.CON="constitution",e.WIS="wisdom",e.INT="intelligence",e.CHA="charisma"}(S||(S={}));const v={[S.STR]:"Strength",[S.DEX]:"Dexterity",[S.CON]:"Constitution",[S.WIS]:"Wisdom",[S.INT]:"Intelligence",[S.CHA]:"Charisma"},w={[S.STR]:"STR",[S.DEX]:"DEX",[S.CON]:"CON",[S.WIS]:"WIS",[S.INT]:"INT",[S.CHA]:"CHA"};function _({requirements:e}){return Object.keys(e)}const I=e=>{const{player:t,choice:n,fixed:a}=e;let{onSelect:o}=e;const r=!function(e,t){return!t.requirements||_(t).every((n=>e[n]>=t.requirements[n]))}(t,n);(r||"function"!=typeof o)&&(o=s.b);const i=Object(c.useCallback)((()=>o(n)),[n,o]);let u="";if(n.requirements){const e=_(n);e.length&&(u=e.map((e=>`${n.requirements[e]} ${function(e){return w[e]}(e)}`)).join(", "),u=`[${u}]`)}return l.a.createElement("li",{className:R()(["ChoiceItem","EndEncounterChoiceItem",{fixed:!!a,disabled:r}]),onClick:i},l.a.createElement("span",{className:"requirements"},u," "),l.a.createElement("span",null,n.description))},x=({player:e,choices:t,onSelect:n,fixed:a})=>l.a.createElement("ul",{className:"ChoiceItemList"},t.map((t=>l.a.createElement(I,{player:e,choice:t,onSelect:n,fixed:a}))));var L;function U(e){return e.type===L.ROLL}!function(e){e.END_ENCOUNTER="END_ENCOUNTER",e.ROLL="ROLL"}(L||(L={}));const j=Object(u.b)((function(e,t){return Object.assign(Object.assign({},t),{player:e.player,activeEncounter:e.encounter.active})}),(function(e){return{onContinue(){e(d()),e(h(o.ENCOUNTER_END))}}}))((({player:e,choice:t,onContinue:n})=>l.a.createElement("div",{className:"EndEncounterChoiceView"},l.a.createElement(x,{player:e,choices:[t],fixed:!0}),t.text.map((e=>l.a.createElement("p",null,e))),l.a.createElement("button",{className:"primary",onClick:n},t.continueText))));var A;!function(e){e.NEXT_STAGE="NEXT_STAGE",e.END_ENCOUNTER="END_ENCOUNTER"}(A||(A={}));const D=({player:e,activeEncounter:t,choice:n,onRoll:a,onContinue:o})=>{var r;const i=null!==(r=t.rolls)&&void 0!==r?r:[],u=!!i.length,s=i.length?1:0,E=!i.length||e.willpower>0,m=Object(c.useCallback)((()=>a(s)),[s]),d=_(n),h=d.reduce(((e,t)=>e+n.requirements[t]),0),p=i.reduce(((e,t)=>e+t),0),y=Object(c.useCallback)((()=>o(e)),[e]);return l.a.createElement("div",{className:"RollChoiceView"},l.a.createElement(x,{player:e,choices:[n],fixed:!0}),l.a.createElement("div",{className:"buttons"},u&&l.a.createElement("button",{className:"primary",onClick:y},"Continue"),l.a.createElement("button",{className:R()({primary:!s}),disabled:!E,onClick:m},"Roll"+(s?" [1 WIL]":""))),l.a.createElement("table",{className:"roll-table"},l.a.createElement("tbody",null,d.map((e=>l.a.createElement("tr",null,l.a.createElement("th",null,function(e){return v[e]}(e)),l.a.createElement("td",null,n.requirements[e])))),i.map(((e,t)=>l.a.createElement("tr",null,l.a.createElement("th",null,"Roll ",t+1),l.a.createElement("td",null,e)))),l.a.createElement("tr",{className:"sum-row"},l.a.createElement("th",null,"Total"),l.a.createElement("td",null,h+p)))))},k=({player:e,activeEncounter:t,choice:n,onRolledContinue:a})=>{const o=Object(c.useCallback)((()=>a(t)),[t]);return l.a.createElement("div",{className:"RollChoiceView"},l.a.createElement(x,{player:e,choices:[n],fixed:!0}),l.a.createElement("table",{className:"roll-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Your Roll:"),l.a.createElement("td",null,t.rollTotal)),l.a.createElement("tr",null,l.a.createElement("th",null,"Outcome:"),l.a.createElement("td",null,t.rollOutcomeType)))),t.rollOutcome.text.map((e=>l.a.createElement("p",null,e))),l.a.createElement("button",{className:"primary",onClick:o},t.rollOutcome.continueText))},P=Object(u.b)((function(e,t){return Object.assign(Object.assign({},t),{player:e.player,activeEncounter:e.encounter.active})}),(function(e){return{onRoll(t){e(function(e,t=20,n=1){return{type:a.ROLL,payload:{roll:E(n,t),cost:e}}}(t))},onContinue(t){e(function(e){return{type:a.ROLL_CONTINUE,payload:e}}(t))},onRolledContinue({rollOutcome:t}){var n;t.type===A.END_ENCOUNTER?(e(d()),e(h(o.ENCOUNTER_END))):t.type===A.NEXT_STAGE&&e((n=t.nextStageId,{type:a.SET_STAGE,payload:n}))}}}))((e=>{switch(e.activeEncounter.rollState){case N.INIT:return l.a.createElement(D,Object.assign({},e));case N.ROLLED:return l.a.createElement(k,Object.assign({},e));default:return null}})),Y=function({activeEncounter:e,stage:t}){const{choice:n}=e;return function(e){return e.type===L.END_ENCOUNTER}(n)?l.a.createElement(j,{stage:t,choice:n}):U(n)?l.a.createElement(P,{stage:t,choice:n}):l.a.createElement("div",null,"PickedStateView")},W=({player:e,stage:t,onChoiceSelect:n})=>l.a.createElement(x,{player:e,choices:t.choices,onSelect:n}),F=Object(u.b)((function(e){return{player:e.player,activeEncounter:e.encounter.active}}),(function(e){return{onChoiceSelect(t){e(function(e){return{type:a.SELECT_CHOICE,payload:e}}(t))}}}))((e=>{const{activeEncounter:t}=e,n=function(e){switch(e){case g.INIT:return W;case g.PICKED:return Y;default:return null}}(t.stageState);return l.a.createElement("div",{className:"ChoicesStageView"},l.a.createElement(n,Object.assign({},e)))})),G=Object(u.b)((function(e){return{activeEncounter:e.encounter.active}}))((({activeEncounter:e})=>{const t=b(e.stage)?F:null;return t?l.a.createElement(t,{stage:e.stage}):null})),H=Object(u.b)((function(e){return{activeEncounter:e.encounter.active}}))((({activeEncounter:e})=>l.a.createElement("div",{className:"EncounterStageView"},l.a.createElement(f,{text:e.stage.text}),l.a.createElement("hr",null),l.a.createElement(G,null)))),q=n(178),M=Object(u.b)((function(e){return{}}))((e=>l.a.createElement("div",{className:"EncounterView"},l.a.createElement(H,null),l.a.createElement("img",{src:q,alt:"A mimic"})))),X={[o.ENCOUNTER_SELECT]:"Encounter Selection",[o.ENCOUNTER]:"Encounter Preview",[o.ENCOUNTER_END]:"Encounter Complete"},V=Object(u.b)((function({currentScene:e}){return{currentScene:e}}),(function(e){return{onReset(){e({type:a.RESET}),e(h(o.ENCOUNTER_SELECT))}}}))((({currentScene:e,onReset:t})=>l.a.createElement("div",{className:"EncounterPanel"},l.a.createElement("h3",{className:"header-with-buttons"},l.a.createElement("span",null,X[e]),l.a.createElement("button",{onClick:t,disabled:e===o.ENCOUNTER_SELECT},"Reset")),((e,t)=>{switch(e){case o.ENCOUNTER_SELECT:return l.a.createElement(y,null);case o.ENCOUNTER:return l.a.createElement(M,null);case o.ENCOUNTER_END:return l.a.createElement("div",null,l.a.createElement("p",null,"Congratulations! You finished the encounter!"),l.a.createElement("button",{className:"primary",onClick:t},"Start again?"));default:return null}})(e,t))));var B;function K(e){return{type:B.SET_PLAYER,payload:e}}function $(e,t){return{type:B.SET_PLAYER_STAT,payload:{statName:e,value:t}}}!function(e){e.SET_PLAYER="SET_PLAYER",e.SET_PLAYER_DESCRIPTION="SET_PLAYER_DESCRIPTION",e.SET_PLAYER_STAT="SET_PLAYER_STAT"}(B||(B={}));const z={[B.SET_PLAYER]:function(e,{payload:t}){return t===e?e:Object.assign({},t)},[B.SET_PLAYER_DESCRIPTION]:function(e,{payload:{key:t,value:n}}){return e[t]===n?e:Object.assign(Object.assign({},e),{[t]:n})},[B.SET_PLAYER_STAT]:function(e,{payload:{statName:t,value:n}}){return e[t]===n?e:Object.assign(Object.assign({},e),{[t]:n})},[a.ROLL]:function(e,{payload:t}){return t&&t.cost?Object.assign(Object.assign({},e),{willpower:e.willpower-t.cost}):e}},J=e=>l.a.createElement("label",{htmlFor:e.id},l.a.createElement("span",null,e.label,":"),l.a.createElement("input",Object.assign({},e))),Q=Object(u.b)((function(e){return{player:e.player}}),(function(e){return{onPlayerReset(){e(K({name:"Firecrotch",maxWillpower:10,willpower:10,strength:2,dexterity:2,constitution:2,wisdom:2,intelligence:2,charisma:2}))},onNameChange(t){const n=t.currentTarget.value;e(function(e,t){return{type:B.SET_PLAYER_DESCRIPTION,payload:{key:"name",value:t}}}(0,n))},onStrengthChange(t){const n=Number(t.currentTarget.value);e($("strength",n))},onDexterityChange(t){const n=Number(t.currentTarget.value);e($("dexterity",n))},onConstitutionChange(t){const n=Number(t.currentTarget.value);e($("constitution",n))},onWisdomChange(t){const n=Number(t.currentTarget.value);e($("wisdom",n))},onIntelligenceChange(t){const n=Number(t.currentTarget.value);e($("intelligence",n))},onCharismaChange(t){const n=Number(t.currentTarget.value);e($("charisma",n))},onMaxWillpowerChange(t){const n=Number(t.currentTarget.value);e($("maxWillpower",n))},onWillpowerChange(t){const n=Number(t.currentTarget.value);e($("willpower",n))}}}))((({player:e,onPlayerReset:t,onNameChange:n,onStrengthChange:a,onDexterityChange:o,onConstitutionChange:r,onWisdomChange:c,onIntelligenceChange:i,onCharismaChange:u,onMaxWillpowerChange:s,onWillpowerChange:E})=>l.a.createElement("div",{className:"PlayerConfigPanel"},l.a.createElement("h3",{className:"header-with-buttons"},l.a.createElement("span",null,"Player"),l.a.createElement("button",{onClick:t},"Reset")),l.a.createElement(J,{id:"name-input",label:"Name",type:"text",value:e.name,onChange:n}),l.a.createElement("h4",null,"Attributes"),l.a.createElement("div",{className:"attribute-config"},l.a.createElement(J,{id:"strength-input",label:"Strength",type:"number",value:e.strength,min:1,onChange:a}),l.a.createElement(J,{id:"dexterity-input",label:"Dexterity",type:"number",value:e.dexterity,min:1,onChange:o}),l.a.createElement(J,{id:"constitution-input",label:"Constitution",type:"number",value:e.constitution,min:1,onChange:r}),l.a.createElement(J,{id:"wisdom-input",label:"Wisdom",type:"number",value:e.wisdom,min:1,onChange:c}),l.a.createElement(J,{id:"intelligence-input",label:"Intelligence",type:"number",value:e.intelligence,min:1,onChange:i}),l.a.createElement(J,{id:"charisma-input",label:"Charisma",type:"number",value:e.charisma,min:1,onChange:u})),l.a.createElement("hr",null),l.a.createElement("h4",null,"Resources"),l.a.createElement(J,{id:"max-willpower-input",label:"Max Willpower",type:"number",value:e.maxWillpower,min:1,onChange:s}),l.a.createElement(J,{id:"willpower-input",label:"Willpower",type:"number",value:e.willpower,min:0,max:e.maxWillpower,onChange:E})))),Z={id:"0d895b71-0029-4e82-9a20-ce883e891660",name:"An Old Chest",entryStage:"c0704d17-9746-489b-a3eb-a8cfc5b4bc76",stages:[{id:"c0704d17-9746-489b-a3eb-a8cfc5b4bc76",type:C.CHOICE,text:["You see an old chest. It appears to be locked.","What do you do?"],choices:[{type:L.ROLL,description:"Break the chest open",requirements:{[S.STR]:2},dc:10,outcomes:{criticalSuccess:{type:A.END_ENCOUNTER,text:["You smash the chest so hard that it is reduced to splinters. Inside is the ruined body of a mimic as well as some gear left from a previous - less fortunate - adventurer"],continueText:"Continue"},success:{type:A.NEXT_STAGE,text:["You strike the chest hard, breaking open the wooden frame. Blood and flailing tendrils spring forth immediately. The chest was a mimic! Fortunately you have managed to wound it without placing yourself in danger."],continueText:"Continue",nextStageId:"622df858-e07b-4b26-8237-6d755ffb368c"},failure:{type:A.NEXT_STAGE,text:["You strike the chest but your blow ricochets off leaving only superficial damage. To your surprise the chest opens in response and strong tendrils spring forth, entangling your limbs."],continueText:"Continue",nextStageId:"622df858-e07b-4b26-8237-6d755ffb368c"},criticalFailure:{type:A.END_ENCOUNTER,text:["Holding your weapon shakily you do your best to open the chest with force. Your strike throws you off balance and your blow barely glaces off the chest while you fall flat on the floor.","While you scramble to regain your dignity the chest, surprisingly, opens. Before you can even regain your footing strong tendrils have launched from the chest and ensnared you thoroughly. You are slowly dragged towards the mimic."],continueText:"Continue"}}},{type:L.ROLL,description:"Pick the lock",requirements:{[S.DEX]:3},dc:16,outcomes:{criticalSuccess:{type:A.END_ENCOUNTER,text:["With well honed skill you deftly tease the lock open. In one smooth motion you remove the padlock and open the chest - all without making a sound.","Inside you find a heaped mass of tentacles. A dormant mimic! You were lucky not to disturb it."],continueText:"Continue"},success:{type:A.END_ENCOUNTER,text:["After some time working at it the heavy padlock on the chest gives a satisfying “click”. Before you can investigate the contents, however the chest springs open on its own. You leap backwards just in time to avoid the grasp of a mimic’s tendrils."],continueText:"Continue"},failure:{type:A.END_ENCOUNTER,text:["You pick and pick at the lock but your patience yields before it does. Eventually you are forced to concede and walk away empty handed."],continueText:"Continue"},criticalFailure:{type:A.END_ENCOUNTER,text:["You insert your tools into the lock only to have them snap the moment you apply pressure. In frustration you kick the chest in anger. To your shock, and initial delight, the chest springs open… to reveal a mass of thrashing tentacles.","The mimic coils around you in a flash, ensnaring all your limbs before you can back away. You are slowly dragged towards the mimic."],continueText:"Continue"}}},{type:L.ROLL,description:"Check the chest for traps",requirements:{[S.WIS]:1},dc:18,outcomes:{criticalSuccess:{type:A.END_ENCOUNTER,text:["Careful observation combined with long years of experience tells you one thing: this is a mimic. Only a fool would try to open one carelessly. You should either prepare to deal with it or walk away now."],continueText:"Continue"},success:{type:A.END_ENCOUNTER,text:["Carefully studying the chest you notice a few things amiss. It is positioned conspicuously - something you wouldn’t expect when storing valuables. It is also noticeably less dusty than the surrounding, suggesting that it was moved here recently. You have no firm proof, but you definitely suspect a trap."],continueText:"Continue"},failure:{type:A.END_ENCOUNTER,text:["You don’t notice anything out of the ordinary."],continueText:"Continue"},criticalFailure:{type:A.END_ENCOUNTER,text:["While your attention is focused on the chest something else focuses its attention on you..."],continueText:"Continue"}}},{type:L.ROLL,description:"Open the chest using magic",requirements:{[S.INT]:6},dc:18,outcomes:{criticalSuccess:{type:A.END_ENCOUNTER,text:["The valuable items from the chest teleport directly to you. Oddly some of them seem to be coated in digestive fluid. It seems you looted not only the chest but the stomach contents of its occupying mimic. Good thing you were precise with your incantation."],continueText:"Continue"},success:{type:A.END_ENCOUNTER,text:["The contents of the chest teleport directly to you. Unfortunately this includes a dormant mimic. You can try to fight it or back away now."],continueText:"Continue"},failure:{type:A.END_ENCOUNTER,text:["Your spell fizzles. Magic is hard."],continueText:"Continue"},criticalFailure:{type:A.END_ENCOUNTER,text:["Your magic runs amok. Instead of teleporting the contents of the chest directly to you, you find yourself teleported to them! Worse, this chest appears to have been the hiding spot for a mimic. You are trapped in a locked chest surrounded by tentacles."],continueText:"Continue"}}},{type:L.END_ENCOUNTER,description:"Ignore the chest",text:["You ignore the chest and move on"],continueText:"Continue"}]},{id:"622df858-e07b-4b26-8237-6d755ffb368c",type:C.CHOICE,text:["You attempt to fight the mimic!"],choices:[]}]};class ee extends c.Component{constructor(e){super(e),e.load()}render(){return l.a.createElement("div",{className:"CombatSandbox1"},l.a.createElement("div",{className:"config-panel"},l.a.createElement("div",{className:"panel-header"},l.a.createElement("h2",null,"Configuration")),l.a.createElement(Q,null)),l.a.createElement("div",{className:"encounter-panel"},l.a.createElement("div",{className:"panel-header"},l.a.createElement("h2",null,"Encounter")),l.a.createElement(V,null)))}}ee.defaultProps={load:s.b};const te=Object(u.b)((function(e){return{player:e.player}}),(function(e){return{load(){var t;e((t=Z,{type:a.REGISTER,payload:t})),e(K({name:"Firecrotch",maxWillpower:10,willpower:10,strength:2,dexterity:2,constitution:2,wisdom:2,intelligence:2,charisma:2})),e(h(o.ENCOUNTER_SELECT))}}}))(ee);var ne=n(6),ae=n(26);const oe={[a.START]:function(e,t){const n=t.payload;if(n){const e=n.stages.find((e=>e.id===n.entryStage));if(e)return{encounter:n,stage:e,stageState:g.INIT}}return e},[a.RESET]:function(){return{encounter:null,stage:null,stageState:null}},[a.SELECT_CHOICE]:function(e,{payload:t}){if(e.stageState!==g.INIT||!t||!b(e.stage)||!e.stage.choices.includes(t))return e;const n=Object.assign(Object.assign({},e),{stageState:g.PICKED,choice:t});return t.type===L.ROLL&&(n.rollState=N.INIT),n},[a.SET_STAGE_STATE]:function(e,{payload:t}){return t!==e.stageState?Object.assign(Object.assign({},e),{stageState:t}):e},[a.ROLL]:function(e,{payload:t}){var n;if(t){const a=null!==(n=e.rolls)&&void 0!==n?n:[];return a.push(t.roll),Object.assign(Object.assign({},e),{rolls:a})}return e},[a.ROLL_CONTINUE]:function(e,t){var n,a;const{rolls:o,choice:r}=e;if(!U(r))return e;const c=t.payload,{dc:l,outcomes:i}=r,u=_(r).reduce(((e,t)=>e+c[t]),0)+o.reduce(((e,t)=>e+t),0);let s,E;return o.includes(20)||u>=l+10?(s=null!==(n=i.criticalSuccess)&&void 0!==n?n:i.success,E=i.criticalSuccess?T.CRITICAL_SUCCESS:T.SUCCESS):u<7?(s=null!==(a=i.criticalFailure)&&void 0!==a?a:i.failure,E=i.criticalFailure?T.CRITICAL_FAILURE:T.FAILURE):u>=l?(s=i.success,E=T.SUCCESS):(s=i.failure,E=T.FAILURE),Object.assign(Object.assign({},e),{rollState:N.ROLLED,rollTotal:u,rollOutcome:s,rollOutcomeType:E})},[a.SET_STAGE]:function(e,{payload:t}){if("string"!=typeof t||t===e.stage.id)return e;const n=e.encounter.stages.find((e=>e.id===t));return n?Object.assign(Object.assign({},e),{stage:n,stageState:g.INIT,rolls:[],rollState:null,rollOutcome:null,rollOutcomeType:null,rollTotal:0}):e}},re={[a.REGISTER]:function(e,t){const n=t.payload;return n?(e[n.id]&&console.warn("Duplicate encounter ID registered: "+n.id),Object.assign(Object.assign({},e),{[n.id]:n})):e}},ce=Object(ne.combineReducers)({byId:function(e={},t){const n=re[t.type];return n?n(e,t):e},active:function(e={encounter:null,stage:null,stageState:null},t){const n=oe[t.type];return n?n(e,t):e}}),le={[r.SET_SCENE]:function(e,{payload:t}){return t}},ie=Object(ne.combineReducers)({player:function(e={name:"Firecrotch",maxWillpower:10,willpower:10,strength:2,dexterity:2,constitution:2,wisdom:2,intelligence:2,charisma:2},t){const n=z[t.type];return n?n(e,t):e},encounter:ce,currentScene:function(e=o.ENCOUNTER_SELECT,t){const n=le[t.type];return n?n(e,t):e}}),ue=Object(ne.createStore)(ie,Object(ae.composeWithDevTools)());n(21);const se=document.getElementById("app-root");Object(i.render)(l.a.createElement(u.a,{store:ue},l.a.createElement(te,null)),se)},21:function(e,t,n){},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(28);function o(...e){}const r=n.n(a).a}});
//# sourceMappingURL=combatSandbox1.f8919c2756d186aff457.js.map