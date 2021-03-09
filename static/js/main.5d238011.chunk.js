(this["webpackJsonplongman-to-anki"]=this["webpackJsonplongman-to-anki"]||[]).push([[0],{118:function(e,t,n){e.exports=n(186)},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=n(44),i=n.n(l),s=n(45),u=n(58),d=n(51),m=n(49),f=n(95),p=n.n(f),h=n(229),b=n(246),y=n(252),E=n(247),O=n(253),v=n(96),w=n.n(v);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C,_=function e(t){var n=t.wordData,a=t.entryData;return function(t){var r=n.headword,o=n.frequency,c=a.pronunciation,l=a.partOfSpeech,i=t.definition,s=t.situation,u=t.geography,d=t.synonym,m=t.antonym,f=t.examples,p=t.exampleGroups,h=t.subsenses,b={headword:r,pronunciation:c,partOfSpeech:l,frequency:o,definition:i,situation:s,geography:u,synonym:d,antonym:m},v=function(e){return function(t){return j({},b,{example:t,form:e})}},g=y.a(v(r))(f),C=y.a((function(e){var t=e.form;return e.examples.map(v(t))}))(p),_=y.a(e({wordData:n,entryData:a}))(h),k=E.a(O.a,[f,p,h])&&i?[j({},b,{form:r,example:""})]:[];return w()([g,C,_,k],2)}},k=n(62),N=n.n(k),W=function(e){return function(t){return N()(y.a(_({wordData:e,entryData:t}))(t.senses))}},L=function(e){return b.a(y.a(W(e)),N.a)(e.entries)},S=n(223),x=S.a(""),I=function(e){var t=e.form,n=e.definition,a=e.example,r=e.situation,o=e.geography,c=e.pronunciation,l=e.synonym,i=e.antonym,s='<span class="lta-example">'.concat(a,"</span>"),u='<span class="lta-definition">'.concat(n,"</span>"),d='<span class="lta-form">'.concat(t,"</span>"),m=r?"".concat("<br>",'<span class="lta-situation">(').concat(r,")</span>"):"",f=o?"".concat("<br>",'<span class="lta-geography">(').concat(o,")</span>"):"",p=c?"".concat("<br>",'<span class="lta-pronunciation">[').concat(c,"]</span>"):"",h=l?"".concat("<br>",'<span class="lta-synonym">(synonym: ').concat(l,")</span>"):"",b=i?"".concat("<br>",'<span class="lta-antonym">(antonym: ').concat(i,")</span>"):"";return{front:x(a?[s,m,f,"<br><br>",d,p]:[u,h,b,m,f]),back:x(a?[u,h,b]:[d,p])}},D=function(e,t){return e.reverse().map((function(e){return t[e]})).filter(Array.isArray).reduce((function(e,t){return t?e.concat.apply(e,Object(d.a)(t)):e}),[])},P=n(224),A=n(225),F=n(226),R=b.a(P.a("\n"),y.a(A.a),y.a(F.a),(function(e){return e.filter((function(e){return e.length}))})),q=n(227),B=q.a(/[(!?.,)]/g,""),T=q.a(/ {2}/g," "),H=q.a(/[/ \u2019]/g,"-"),M=function(e){var t=b.a(A.a,B,F.a,T,H)(e),n="https://www.ldoceonline.com/dictionary/".concat(t);return"https://cors-anywhere.herokuapp.com/".concat(n)},J=function(e){var t=document.implementation.createHTMLDocument().createElement("div");return t.innerHTML=e,t},G=function(e){var t=e.selector,n=e.onlyChildren,a=void 0!==n&&n;return function(e){var n=J(e);return a?Array.from(n.children).filter((function(e){return e.matches(t)})).map((function(e){return e.innerHTML})):Array.from(n.querySelectorAll(t)).map((function(e){return e.innerHTML}))}},K=function(e){return e&&e.textContent?e.textContent.trim():""},U=function(e){var t=J(e).querySelector(".entry_content h1.pagetitle");return K(t)},z=function(e){var t=J(e).querySelector(".LEVEL");return t?K(t):"\u25cb\u25cb\u25cb"},V=function(e){var t=J(e).querySelector(".PronCodes");return t?Array.from(t.querySelectorAll(".PRON, .AMEVARPRON")).map(K).join(" "):""},Y=function(e){var t=J(e).querySelector(".POS");return t?K(t):""},X=n(248),$=q.a(/\(=.*\)/g,""),Q=q.a(/\n/g," "),Z=q.a(/&nbsp;/g," "),ee=q.a(/\s{2,}/g," "),te=q.a(/ \./g,"."),ne=b.a($,Q,Z,ee,te,F.a),ae=function(e){return b.a(G({selector:".EXAMPLE",onlyChildren:!0}),y.a(b.a(J,X.a("","textContent"),ne)))(e)},re=function(e){return Array.from(J(e).querySelectorAll(".PROPFORM, .PROPFORMPREP, .COLLO, .LINKWORD, .LEXUNIT")).map(K).join(" ")},oe=function(e){return{form:re(e),examples:ae(e)}},ce=function(e){var t=G({selector:".DEF",onlyChildren:!0})(e)[0];return t?b.a(J,K)(t):""},le=n(228),ie=function(e){return function(t){var n=J(t).querySelector("synonym"===e?".SYN":".OPP");return n?Array.from(n.childNodes).filter((function(e){return!function(e){return e instanceof Element&&e.classList.contains("synopp")}(e)})).map(le.a("textContent")).join(" ").trim():""}},se=ie("synonym"),ue=ie("antonym"),de=function(e){return Array.from(J(e).querySelectorAll(".REGISTERLAB")).map(K).join(" ")},me=function(e){var t=J(e).querySelector(".GEO");return K(t)},fe=function e(t){return{definition:ce(t),situation:de(t),geography:me(t),synonym:se(t),antonym:ue(t),examples:ae(t),exampleGroups:b.a(G({selector:".ColloExa, .GramExa",onlyChildren:!0}),y.a(oe))(t),subsenses:b.a(G({selector:".Subsense"}),y.a(e))(t)}},pe=function(e){var t=V(e),n=Y(e);return{senses:b.a(G({selector:".Sense"}),y.a(fe))(e),pronunciation:t,partOfSpeech:n}},he=function(e){return{headword:U(e),frequency:z(e),entries:b.a(G({selector:".ldoceEntry"}),y.a(pe))(e)}},be="WORD IS LOADING";!function(e){e.NotFound="FETCH ERROR: NOT FOUND",e.Offline="FETCH ERROR: OFFLINE"}(C||(C={}));var ye=q.a(/ {2}/gm," "),Ee=q.a(/\n/gm," "),Oe=b.a(Ee,ye),ve=function(e){return""===U(e)},we=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=M(t),e.next=4,fetch(a).then((function(e){return e.text()}));case 4:n=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{status:C.Offline});case 10:if(r=Oe(n),!ve(r)){e.next=15;break}return e.abrupt("return",{status:C.NotFound});case 15:return o=he(r),e.abrupt("return",{payload:o});case 17:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ge=n(64),je={css:"\n            .card { font-family: arial; font-size: 20px; text-align: center; color: black; background-color: white; }\n            .lta-example { font-style: italic; } \n            .lta-form { font-weight: bold; }\n        "},Ce=function(e,t){return fetch("https://cors-anywhere.herokuapp.com/https://vercel-anki-deck.now.sh/api/create",{body:JSON.stringify({cards:t,deckName:e,template:je}),method:"POST",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.blob()})).then((function(t){return Object(ge.saveAs)(t,"".concat(e,".apkg"))}))},_e=n(97),ke=function(e,t){var n=new _e.Parser({fields:["headword","form","example","definition","pronunciation","partOfSpeech","situation","geography","synonym","antonym","frequency"],withBOM:!0}).parse(t),a=new Blob([n],{type:"text/csv"});Object(ge.saveAs)(a,"".concat(e,".csv"))},Ne=function(e){return Object.values(e).filter(Array.isArray).reduce((function(e,t){return e+(t?t.length:0)}),0)},We=n(16),Le=n(17),Se=n(20),xe=n(18),Ie=n(21),De=n(98),Pe=n.n(De),Ae=function(e){function t(){return Object(We.a)(this,t),Object(Se.a)(this,Object(xe.a)(t).apply(this,arguments))}return Object(Ie.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe.a,{href:"https://github.com/yakhinvadim/longman-to-anki",bannerColor:"#3f51b5"}),r.a.createElement("header",null,r.a.createElement("h1",null,"Longman to Anki"),r.a.createElement("p",null,"A web app to help you learn English with Anki")))}}]),t}(a.PureComponent),Fe=n(232),Re=n(233),qe=n(101),Be=n.n(qe),Te=n(72),He=n.n(Te),Me=n(251),Je=n(4),Ge=n(99),Ke=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"s";return"".concat(e," ").concat(t).concat(1!==e?n:"")},Ue=function(e){function t(){return Object(We.a)(this,t),Object(Se.a)(this,Object(xe.a)(t).apply(this,arguments))}return Object(Ie.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onDownloadAnkiButtonClick,a=e.onDownloadCsvButtonClick,o=e.onClearWordsButtonClick,c=e.isLoading,l=e.wordsCount,i=e.cardsCount,s=Ke(l,"word"),u=Ke(i,"card");return r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement("div",{className:t.totals,"data-qa":"download-section__totals"},"".concat(s,", ").concat(u))),r.a.createElement(h.a,{item:!0,container:!0,xs:12,spacing:1,sm:12,md:12},r.a.createElement(h.a,{item:!0,xs:12,sm:4},r.a.createElement(Fe.a,{variant:"outlined",onClick:o,disabled:!i,fullWidth:!0,color:"secondary"},"Clear words")),r.a.createElement(h.a,{item:!0,xs:12,sm:4},r.a.createElement(Fe.a,{variant:"outlined",onClick:a,disabled:!i,fullWidth:!0},"Download CSV")),r.a.createElement(h.a,{item:!0,xs:12,sm:4},r.a.createElement(Ge.Detector,{polling:!1,render:function(e){var a=e.online;return r.a.createElement(Fe.a,{variant:"contained",onClick:n,disabled:!i||!a,color:"primary",fullWidth:!0},a?c?r.a.createElement(r.a.Fragment,null,r.a.createElement(Re.a,{className:t.leftIcon,color:"inherit",size:24}),"Preparing your\xa0deck"):r.a.createElement(r.a.Fragment,null,r.a.createElement(Be.a,{className:t.leftIcon}),"Download anki\xa0deck"):r.a.createElement(r.a.Fragment,null,r.a.createElement(He.a,{className:t.leftIcon}),"No internet connection"))}}))))}}]),t}(a.PureComponent),ze=Object(Je.a)((function(e){return Object(Me.a)({totals:{lineHeight:"36px"},leftIcon:{marginRight:e.spacing(1)}})}))(Ue),Ve=n(187),Ye=n(249),Xe=n(240),$e=n(243),Qe=n(236),Ze=n(238),et=n(235),tt=n(237),nt=n(234),at=n(250),rt=n(102),ot=n.n(rt),ct=n(83),lt=n.n(ct),it=n(76),st=n.n(it);n(183);var ut=function(e){function t(){var e,n;Object(We.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(Se.a)(this,(e=Object(xe.a)(t)).call.apply(e,[this].concat(o)))).renderRow=function(e){return r.a.createElement(nt.a,{key:e.example+e.definition},r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.form),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.example||"\u2014"),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.definition),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.pronunciation||"\u2014"),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.partOfSpeech||"\u2014"),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.situation||"\u2014"),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.geography||"\u2014"),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.synonym||"\u2014"),r.a.createElement(et.a,{className:"WordsListItem__tableCell"},e.antonym||"\u2014"))},n.renderTable=function(e){return r.a.createElement("div",{className:"WordsListItem__tableWrapper"},r.a.createElement(Qe.a,{size:"small"},r.a.createElement(tt.a,null,r.a.createElement(nt.a,null,r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Form"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Example"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Definition"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Pronunciation"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Part of speech"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Situation"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Geography"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Synonym"),r.a.createElement(et.a,{className:"WordsListItem__tableHeadCell"},"Antonym"))),r.a.createElement(Ze.a,null,e.map(n.renderRow))))},n.renderDeleteButton=function(e){return r.a.createElement(Ve.a,{className:"WordsListItem__delete",onClick:n.props.onDeleteButtonClick(e),"data-qa":"words-list-item__delete"},r.a.createElement(ot.a,null))},n.renderFetchedWord=function(e){return r.a.createElement(Ye.a,{className:"WordsListItem__listItem",key:"".concat(e[0].headword," loaded")},r.a.createElement(Xe.a,{expandIcon:r.a.createElement(st.a,null)},r.a.createElement("div",{className:"WordsListItem__header"},r.a.createElement(at.a,{title:r.a.createElement(r.a.Fragment,null,"\u25cf\u25cf\u25cf \u2013 indicates the top 3000 words",r.a.createElement("br",null),"\u25cf\u25cf\u25cb \u2013 indicates the next most important 3000 words",r.a.createElement("br",null),"\u25cf\u25cb\u25cb \u2013 indicates the less frequent yet important 3000 words",r.a.createElement("br",null),"\u25cb\u25cb\u25cb \u2013 indicates other words")},r.a.createElement("div",{className:"WordsListItem__icon"},e[0].frequency)),r.a.createElement("div",{className:"WordsListItem__word"},r.a.createElement("span",{"data-qa":"words-list-item__fetched-word"},e[0].headword),"\xa0",r.a.createElement("span",{className:"WordsListItem__counter"},"(",e.length,")")),r.a.createElement("div",{className:"WordsListItem__description"},e[0].definition),n.renderDeleteButton(n.props.word))),r.a.createElement($e.a,null,n.renderTable(e)))},n.renderLoadingWord=function(){return r.a.createElement(Ye.a,{className:"WordsListItem__listItem",key:"".concat(n.props.word," load")},r.a.createElement(Xe.a,{expandIcon:r.a.createElement(st.a,null)},r.a.createElement("div",{className:"WordsListItem__header"},r.a.createElement("div",{className:"WordsListItem__icon"},r.a.createElement(Re.a,{size:24,thickness:2})),r.a.createElement("div",{className:"WordsListItem__word","data-qa":"words-list-item__loading-word"},n.props.word),r.a.createElement("div",{className:"WordsListItem__description"},"..."),n.renderDeleteButton(n.props.word))))},n.renderFailedWord=function(e,t,a){return r.a.createElement(Ye.a,{className:"WordsListItem__listItem",key:"".concat(e," fail")},r.a.createElement(Xe.a,{expandIcon:r.a.createElement(st.a,null)},r.a.createElement("div",{className:"WordsListItem__header"},r.a.createElement("div",{className:"WordsListItem__icon"},t),r.a.createElement("div",{className:"WordsListItem__word"},e),r.a.createElement("div",{className:"WordsListItem__description"},a),n.renderDeleteButton(e))))},n.renderOfflineWord=function(){return n.renderFailedWord(n.props.word,r.a.createElement(He.a,null),"No internet connection. The word will be loaded when you are back online")},n.renderNotFoundWord=function(){return n.renderFailedWord(n.props.word,r.a.createElement(lt.a,null),"Word not found")},n.renderNoCardsWord=function(){return n.renderFailedWord(n.props.word,r.a.createElement(lt.a,null),"Word exists, but cards not found (we do not make cards from Business Dictionary)")},n}return Object(Ie.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props.fetchStatusOrCardData;return e===be?this.renderLoadingWord():e===C.Offline?this.renderOfflineWord():e===C.NotFound?this.renderNotFoundWord():Array.isArray(e)?0===e.length?this.renderNoCardsWord():this.renderFetchedWord(e):void function(e){throw new Error("Didn't expect to get here")}()}}]),t}(a.PureComponent),dt=function(e){function t(){var e,n;Object(We.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(Se.a)(this,(e=Object(xe.a)(t)).call.apply(e,[this].concat(o)))).renderWord=function(e){return r.a.createElement(ut,{key:e,fetchStatusOrCardData:n.props.wordsFetchResult[e],word:e,onDeleteButtonClick:n.props.onDeleteButtonClick})},n}return Object(Ie.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.words.map(this.renderWord))}}]),t}(a.PureComponent),mt=n(245),ft=function(e){function t(){return Object(We.a)(this,t),Object(Se.a)(this,Object(xe.a)(t).apply(this,arguments))}return Object(Ie.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.value,a=e.onKeyDown,o=e.onSubmit;return r.a.createElement("form",{onSubmit:o},r.a.createElement(mt.a,{id:"user-words",label:"Type the word, you want to learn",placeholder:"example",helperText:"You can enter several words. Type one word per line using 'Shift + Enter' to add new lines",variant:"outlined",fullWidth:!0,multiline:!0,rowsMax:20,value:n,onChange:t,onKeyDown:a,"data-qa":"user-words"}))}}]),t}(a.PureComponent),pt=function(e){function t(){return Object(We.a)(this,t),Object(Se.a)(this,Object(xe.a)(t).apply(this,arguments))}return Object(Ie.a)(t,e),Object(Le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.value;return r.a.createElement(mt.a,{id:"deck-name",label:"Deck name",helperText:"You can add \u201c::\u201d to create a nested deck. For example: English::Words",variant:"outlined",value:n,onChange:t,fullWidth:!0})}}]),t}(a.PureComponent);n(184);function ht(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ht(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ht(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var yt=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),l=Object(m.a)(c,2),f=l[0],b=l[1],y=Object(a.useState)({}),E=Object(m.a)(y,2),O=E[0],v=E[1],w=Object(a.useState)("English words"),g=Object(m.a)(w,2),j=g[0],_=g[1],k=Object(a.useState)(!1),N=Object(m.a)(k,2),W=N[0],S=N[1];Object(a.useEffect)((function(){try{localStorage.words&&b(JSON.parse(localStorage.words)),localStorage.wordsFetchResult&&v(JSON.parse(localStorage.wordsFetchResult)),localStorage.deckName&&_(JSON.parse(localStorage.deckName))}catch(e){console.error(e)}}),[]),Object(a.useEffect)((function(){localStorage.words=JSON.stringify(f)}),[f]),Object(a.useEffect)((function(){localStorage.wordsFetchResult=JSON.stringify(O)}),[O]),Object(a.useEffect)((function(){localStorage.deckName=JSON.stringify(j)}),[j]);var x=Object(a.useCallback)((function(){f.filter((function(e){return O[e]===C.Offline})).forEach(A)}),[f,O]);Object(a.useEffect)((function(){navigator.onLine&&x()}),[x]),Object(a.useEffect)((function(){return window.addEventListener("online",x),function(){return window.removeEventListener("online",x)}}),[x]);var P=function(e){e.preventDefault();var t=R(n);t.forEach(A),o(""),b((function(e){return p()([].concat(Object(d.a)(t),Object(d.a)(e)))}))},A=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v((function(e){return bt({},e,Object(s.a)({},t,be))})),e.next=3,we(t);case 3:n=e.sent,v((function(e){return bt({},e,Object(s.a)({},t,n.status||L(n.payload)))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(a.useCallback)((function(e){return function(t){v((function(t){var n=bt({},t);return delete n[e],n})),b((function(t){return t.filter((function(t){return t!==e}))}))}}),[]),q=Object(a.useCallback)((function(e){_(e.target.value)}),[]),B=Object(a.useMemo)((function(){return Ne(O)}),[O]),T=Object(a.useCallback)((function(){S(!0);var e=D(f,O).map(I);Ce(j,e).then((function(){S(!1)})).catch(console.error)}),[j,f,O]),H=Object(a.useCallback)((function(){var e=D(f,O);ke(j,e)}),[j,f,O]),M=Object(a.useCallback)((function(){b([]),v({})}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{container:!0,spacing:2},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(Ae,null)),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(ft,{value:n,onChange:function(e){o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),P(e))},onSubmit:P})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(dt,{words:f,wordsFetchResult:O,onDeleteButtonClick:F})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(pt,{value:j,onChange:q})),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(ze,{onDownloadAnkiButtonClick:T,onDownloadCsvButtonClick:H,onClearWordsButtonClick:M,isLoading:W,cardsCount:B,wordsCount:f.length}))))},Et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ot(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var vt=n(107),wt=n(244),gt=n(106),jt=n.n(gt),Ct=(n(185),Object(vt.a)({palette:{primary:jt.a}}));c.a.render(r.a.createElement((function(){return r.a.createElement(wt.a,{theme:Ct},r.a.createElement(yt,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/longman-to-anki",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/longman-to-anki","/service-worker.js");Et?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ot(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):Ot(t,e)}))}}()}},[[118,1,2]]]);
//# sourceMappingURL=main.5d238011.chunk.js.map