(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[75],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(29),r=a(33),l=a(1196),i=a(2),c=a(0),o=a.n(c),s=a(44),u=a(1218),d=a(27),p=a(5);var m=function(e){var t=Object(s.a)(),a=Object(p.d)(Object(d.c)(t.palette.primary.main));return o.a.createElement("div",{className:e.classes.header},e.header&&o.a.createElement(u.a,{theme:a},e.header))},f=a(13),b=a(1189),g=a(1209);var h=function(e){var t=Object(s.a)(),a=Object(p.d)(Object(d.c)(t.palette.primary.main)),n=e.classes;return o.a.createElement(o.a.Fragment,null,e.header&&o.a.createElement(u.a,{theme:a},o.a.createElement("div",{className:Object(i.default)(n.sidebarHeader,e.variant)},e.header)),e.content&&o.a.createElement(r.a,{className:n.sidebarContent,enable:e.innerScroll},e.content))};var v=o.a.forwardRef((function(e,t){var a=Object(c.useState)(!1),n=Object(f.a)(a,2),r=n[0],l=n[1],s=e.classes;Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){l(!r)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{lgUp:"permanent"===e.variant},o.a.createElement(b.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return u()},classes:{root:Object(i.default)(s.sidebarWrapper,e.variant),paper:Object(i.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},o.a.createElement(h,e))),"permanent"===e.variant&&o.a.createElement(g.a,{mdDown:!0},o.a.createElement(b.a,{variant:"permanent",className:Object(i.default)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(i.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},o.a.createElement(h,e))))})),x=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to left, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),j=o.a.forwardRef((function(e,t){var a=Object(c.useRef)(null),n=Object(c.useRef)(null),l=Object(c.useRef)(null),s=x(e),u=e.rightSidebarHeader||e.rightSidebarContent,d=e.leftSidebarHeader||e.leftSidebarContent;return o.a.useImperativeHandle(t,(function(){return{rootRef:l,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),o.a.createElement("div",{className:Object(i.default)(s.root,e.innerScroll&&s.innerScroll),ref:l},o.a.createElement("div",{className:s.topBg}),o.a.createElement("div",{className:"flex container w-full"},d&&o.a.createElement(v,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:l}),o.a.createElement("div",{className:Object(i.default)(s.contentWrapper,d&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",u&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},o.a.createElement(m,{header:e.header,classes:s}),o.a.createElement("div",{className:Object(i.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&o.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&o.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),u&&o.a.createElement(v,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:l})))}));j.defaultProps={};var y=o.a.memo(j)},1305:function(e,t,a){"use strict";var n=a(1),r=a(4),l=a(0),i=(a(3),a(2)),c=a(8),o=l.forwardRef((function(e,t){var a=e.classes,c=e.className,o=e.dividers,s=void 0!==o&&o,u=Object(r.a)(e,["classes","className","dividers"]);return l.createElement("div",Object(n.a)({className:Object(i.default)(a.root,c,s&&a.dividers),ref:t},u))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(o)},1316:function(e,t,a){"use strict";var n=a(1),r=a(4),l=a(0),i=(a(3),a(2)),c=a(8),o=l.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,o=e.classes,s=e.className,u=Object(r.a)(e,["disableSpacing","classes","className"]);return l.createElement("div",Object(n.a)({className:Object(i.default)(o.root,s,!c&&o.spacing),ref:t},u))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(o)},1379:function(e,t,a){var n=a(1442),r=a(1443),l=a(1403),i=a(1444);e.exports=function(e,t){return n(e)||r(e,t)||l(e,t)||i()}},1403:function(e,t,a){var n=a(1404);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},1404:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},1442:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},1443:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return a}}},1444:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},1511:function(e,t){e.exports=u,e.exports.match=function(e,t){var a=[];return r(u(e,a,t),a)},e.exports.regexpToFunction=r,e.exports.parse=n,e.exports.compile=function(e,t){return l(n(e,t),t)},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=s;var a=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function n(e,t){for(var n,r=[],l=0,o=0,s="",u=t&&t.delimiter||"/",d=t&&t.whitelist||void 0,p=!1;null!==(n=a.exec(e));){var m=n[0],f=n[1],b=n.index;if(s+=e.slice(o,b),o=b+m.length,f)s+=f[1],p=!0;else{var g="",h=n[2],v=n[3],x=n[4],j=n[5];if(!p&&s.length){var y=s.length-1,O=s[y];(!d||d.indexOf(O)>-1)&&(g=O,s=s.slice(0,y))}s&&(r.push(s),s="",p=!1);var E="+"===j||"*"===j,S="?"===j||"*"===j,w=v||x,k=g||u;r.push({name:h||l++,prefix:g,delimiter:k,optional:S,repeat:E,pattern:w?c(w):"[^"+i(k===u?k:k+u)+"]+?"})}}return(s||o<e.length)&&r.push(s+e.substr(o)),r}function r(e,t){return function(a,n){var r=e.exec(a);if(!r)return!1;for(var l=r[0],i=r.index,c={},o=n&&n.decode||decodeURIComponent,s=1;s<r.length;s++)if(void 0!==r[s]){var u=t[s-1];u.repeat?c[u.name]=r[s].split(u.delimiter).map((function(e){return o(e,u)})):c[u.name]=o(r[s],u)}return{path:l,index:i,params:c}}}function l(e,t){for(var a=new Array(e.length),n=0;n<e.length;n++)"object"===typeof e[n]&&(a[n]=new RegExp("^(?:"+e[n].pattern+")$",o(t)));return function(t,n){for(var r="",l=n&&n.encode||encodeURIComponent,i=!n||!1!==n.validate,c=0;c<e.length;c++){var o=e[c];if("string"!==typeof o){var s,u=t?t[o.name]:void 0;if(Array.isArray(u)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but got array');if(0===u.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var d=0;d<u.length;d++){if(s=l(u[d],o),i&&!a[c].test(s))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'"');r+=(0===d?o.prefix:o.delimiter)+s}}else if("string"!==typeof u&&"number"!==typeof u&&"boolean"!==typeof u){if(!o.optional)throw new TypeError('Expected "'+o.name+'" to be '+(o.repeat?"an array":"a string"))}else{if(s=l(String(u),o),i&&!a[c].test(s))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+s+'"');r+=o.prefix+s}}else r+=o}return r}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function c(e){return e.replace(/([=!:$/()])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,t,a){for(var n=(a=a||{}).strict,r=!1!==a.start,l=!1!==a.end,c=a.delimiter||"/",s=[].concat(a.endsWith||[]).map(i).concat("$").join("|"),u=r?"^":"",d=0;d<e.length;d++){var p=e[d];if("string"===typeof p)u+=i(p);else{var m=p.repeat?"(?:"+p.pattern+")(?:"+i(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;t&&t.push(p),p.optional?p.prefix?u+="(?:"+i(p.prefix)+"("+m+"))?":u+="("+m+")?":u+=i(p.prefix)+"("+m+")"}}if(l)n||(u+="(?:"+i(c)+")?"),u+="$"===s?"$":"(?="+s+")";else{var f=e[e.length-1],b="string"===typeof f?f[f.length-1]===c:void 0===f;n||(u+="(?:"+i(c)+"(?="+s+"))?"),b||(u+="(?="+i(c)+"|"+s+")")}return new RegExp(u,o(a))}function u(e,t,a){return e instanceof RegExp?function(e,t){if(!t)return e;var a=e.source.match(/\((?!\?)/g);if(a)for(var n=0;n<a.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,a){for(var n=[],r=0;r<e.length;r++)n.push(u(e[r],t,a).source);return new RegExp("(?:"+n.join("|")+")",o(a))}(e,t,a):function(e,t,a){return s(n(e,a),t,a)}(e,t,a)}},2671:function(e,t,a){"use strict";a.r(t);var n=a(1253),r=a(242),l=a(0),i=a.n(l),c=a(5),o=a(37),s=a(19),u=a.n(s),d=a(42),p=a(13),m=a(1364),f=a.n(m),b=a(125),g=(a(7),a(1235)),h=a(1225),v=a(1197),x=a(645),j=a(209),y=a(137),O=a(1196),E=a(2),S=Object(O.a)((function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}}));var w,k=function(e){var t=S();return i.a.createElement("div",{className:Object(E.default)(t.root,e.className)},i.a.createElement("div",{className:t.color,style:{backgroundColor:e.color}}),i.a.createElement("div",null,e.title))},N=a(29),I=a(20),A=a(46),C=a.n(A),R=Object(I.b)("mailApp/labels/getLabels",Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/mail-app/labels");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),M=Object(I.c)({}),T=M.getSelectors((function(e){return e.mailApp.labels})),_=T.selectAll,P=T.selectEntities,D=(T.selectById,Object(I.d)({name:"mailApp/labels",initialState:M.getInitialState(null),reducers:{},extraReducers:Object(N.a)({},R.fulfilled,M.setAll)}).reducer),B=a(9),H=a(41),F=Object(I.b)("mailApp/mail/getMail",function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,fetch("".concat("http://13.58.82.135/api/api/","imapEmails/").concat(t.mailId),{headers:{Authorization:a}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=Object(I.b)("mailApp/mail/updateMail",function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,l,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=a.dispatch,l=n().mailApp.mail.id,e.next=4,C.a.post("/api/mail-app/update-mail",Object(B.a)({id:l},t));case 4:return i=e.sent,e.next=7,i;case 7:return c=e.sent,r(Object(H.c)({message:"Mail Saved"})),console.log(c),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(I.d)({name:"mailApp/mail",initialState:null,reducers:{},extraReducers:(w={},Object(N.a)(w,F.fulfilled,(function(e,t){return t.payload})),Object(N.a)(w,z.fulfilled,(function(e,t){return Object(B.a)(Object(B.a)({},e),t.payload)})),w)}).reducer;var W=Object(o.k)((function(e){Object(c.c)(),Object(c.d)((function(e){return e.mailApp})),Object(c.d)(P);var t=Object(o.j)(),a=Object(l.useState)(!1),n=Object(p.a)(a,2),r=n[0],s=n[1],m=i.a.useState(""),y=Object(p.a)(m,2),O=y[0],E=y[1],S=i.a.useState({loading:!0}),w=Object(p.a)(S,2),N=w[0],I=w[1];return Object(l.useEffect)((function(){Object(d.a)(u.a.mark((function e(){var a,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),e.next=3,fetch("".concat("http://13.58.82.135/api/api/","imapEmails/").concat(t.mailId),{headers:{Authorization:a}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,l=r.data,E(l),I({loading:!1});case 10:case"end":return e.stop()}}),e)})))()}),[]),console.log(N.loading),N.loading?i.a.createElement(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100}):O.map((function(e){return i.a.createElement("div",{className:"p-16 sm:p-24"},i.a.createElement("div",{className:"flex items-center justify-between overflow-hidden"},i.a.createElement("div",{className:"flex flex-col"},i.a.createElement(b.a,{delay:100},i.a.createElement(j.a,{variant:"subtitle1",className:"flex"},e.data.email_subject)),i.a.createElement(k,{className:"mx-2 mt-4",title:e.data.x_gm_label,color:"#D3D3D3",key:e.data.x_gm_label}))),i.a.createElement(h.a,{className:"my-16"}),i.a.createElement(b.a,{animation:"transition.slideUpIn",delay:200},i.a.createElement("div",null,i.a.createElement("div",{className:"flex items-start justify-between"},i.a.createElement("div",{className:"flex items-center justify-start"},i.a.createElement(g.a,null,e.data.email_from),i.a.createElement("div",{className:"flex flex-col mx-8"},i.a.createElement("span",null,e.data.email_from),i.a.createElement(j.a,{component:"div",color:"textSecondary",variant:"body1",className:"flex items-center justify-start"},i.a.createElement("div",null,"to"),i.a.createElement("div",{className:"mx-4"},e.data.email_to)))),i.a.createElement(x.a,null,i.a.createElement(v.a,null,"more_vert"))),i.a.createElement("div",{className:"my-16"},i.a.createElement(j.a,{color:"primary",className:"cursor-pointer underline mb-8",onClick:function(){s(!r)}},r?i.a.createElement("span",null,"Hide Details"):i.a.createElement("span",null,"Show Details")),r&&i.a.createElement("div",{className:"flex"},i.a.createElement(j.a,{variant:"body2",className:"flex flex-col"},i.a.createElement("span",null,"From:"),i.a.createElement("span",null,"To:"),i.a.createElement("span",null,"Date:")),i.a.createElement(j.a,{variant:"body2",color:"textSecondary",className:"px-4 flex flex-col"},i.a.createElement("span",null,e.data.email_from),i.a.createElement("span",null,e.data.email_to),i.a.createElement("span",null,e.data.email_date)))),i.a.createElement(j.a,{variant:"body2",dangerouslySetInnerHTML:{__html:e.body}}),i.a.createElement(h.a,{className:"my-16"}))))}))}));a(1511);var U=Object(o.k)((function(e){return i.a.createElement("div",{className:"flex flex-1 items-center justify-between overflow-hidden sm:px-16"},i.a.createElement(x.a,{onClick:function(){return e.history.push("/apps/mail/inbox/")}},i.a.createElement(v.a,null,"arrow_back")),i.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"}))})),$=(a(1218),a(1379)),V=a.n($),J=a(47),Y=a.n(J),G=a(658);function q(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var K={};function Q(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&K[t[0]]||("string"===typeof t[0]&&(K[t[0]]=new Date),q.apply(void 0,t))}function X(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function Z(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return Q("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],r=!!t.options&&t.options.fallbackLng,l=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var i=function(e,a){var n=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===n||2===n};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!i(n,e)||r&&!i(l,e))))}function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){Y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,n=Object(l.useContext)(G.a)||{},r=n.i18n,i=n.defaultNS,c=a||r||Object(G.d)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new G.b),!c){Q("You will need to pass in an i18next instance by using initReactI18next");var o=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[o,{},!1];return s.t=o,s.i18n={},s.ready=!1,s}var u=te(te(te({},Object(G.c)()),c.options.react),t),d=u.useSuspense,p=e||i||c.options&&c.options.defaultNS;p="string"===typeof p?[p]:p||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(p);var m=(c.isInitialized||c.initializedStoreOnce)&&p.every((function(e){return Z(e,c,u)}));function f(){return{t:c.getFixedT(null,"fallback"===u.nsMode?p:p[0])}}var b=Object(l.useState)(f()),g=V()(b,2),h=g[0],v=g[1],x=Object(l.useRef)(!0);Object(l.useEffect)((function(){var e=u.bindI18n,t=u.bindI18nStore;function a(){x.current&&v(f())}return x.current=!0,m||d||X(c,p,(function(){x.current&&v(f())})),e&&c&&c.on(e,a),t&&c&&c.store.on(t,a),function(){x.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,a)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,a)}))}}),[p.join()]);var j=[h.t,c,m];if(j.t=h.t,j.i18n=c,j.ready=m,m)return j;if(!m&&!d)return j;throw new Promise((function(e){X(c,p,(function(){e()}))}))}a(27);var ne,re=a(12),le=Object(I.b)("mailApp/mails/getMails",function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,l,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,t=t||n().mailApp.mails.routeParams,console.log("=============================================="),console.log(t),r="".concat("http://13.58.82.135/api/api/","imapEmails"),t.labelHandle&&(r+="/get/all/label/".concat(t.labelHandle)),t.labelHandle,l=localStorage.getItem("token"),e.next=10,C.a.get(r,{headers:{Authorization:l}});case 10:return i=e.sent,e.next=13,i.data.data;case 13:return c=e.sent,e.abrupt("return",{data:c,routeParams:t});case 15:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),ie=(Object(I.b)("mailApp/mails/setFolderOnSelectedMails",function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,l,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,l=r().mailApp.mails.selectedMailIds,e.next=4,C.a.post("/api/mail-app/set-folder",{selectedMailIds:l,folderId:t});case 4:return i=e.sent,e.next=7,i.data;case 7:return c=e.sent,n(le()),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(I.b)("mailApp/mails/toggleLabelOnSelectedMails",function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,r,l,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.dispatch,r=a.getState,l=r().mailApp.mails.selectedMailIds,e.next=4,C.a.post("/api/mail-app/toggle-label",{selectedMailIds:l,labelId:t});case 4:return i=e.sent,e.next=7,i.data;case 7:return c=e.sent,n(le()),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Object(I.c)({})),ce=ie.getSelectors((function(e){return e.mailApp.mails})),oe=ce.selectAll,se=(ce.selectById,Object(I.d)({name:"mailApp/mails",initialState:ie.getInitialState({searchText:"",routeParams:{},selectedMailIds:[]}),reducers:{setMailsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}},selectAllMails:function(e,t){e.selectedMailIds=e.ids},deselectAllMails:function(e,t){e.selectedMailIds=[]},selectMailsByParameter:function(e,t){var a=Object(p.a)(t.payload,2),n=a[0],r=a[1];e.selectedMailIds=e.ids.filter((function(t){return e.entities[t][n]===r}))},toggleInSelectedMails:function(e,t){var a=t.payload;e.selectedMailIds=e.selectedMailIds.includes(a)?e.selectedMailIds.filter((function(e){return e!==a})):[].concat(Object(re.a)(e.selectedMailIds),[a])}},extraReducers:(ne={},Object(N.a)(ne,le.pending,(function(e,t){e.status="loading"})),Object(N.a)(ne,le.fulfilled,(function(e,t){e.status="succeeded";var a=t.payload,n=a.data,r=a.routeParams;ie.setAll(e,n),e.routeParams=r,e.selectedMailIds=[]})),ne)})),ue=se.actions,de=(ue.setMailsSearchText,ue.selectAllMails,ue.deselectAllMails,ue.selectMailsByParameter,ue.toggleInSelectedMails,se.reducer);var pe=a(97),me=a(1158),fe=a(1159),be=a(1205),ge=a(1224),he=(a(1219),a(1202));a(1213),a(1316),a(1305),a(1206),a(1204),Object(O.a)({root:{fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.08)",border:"1px solid rgba(0, 0, 0, 0.16)",paddingLeft:16,marginBottom:8,borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center"},filename:{fontWeight:600},size:{marginLeft:8,fontWeight:300}});var ve=Object(I.b)("mailApp/filters/getFilters",Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/mail-app/filters");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),xe=Object(I.c)({}),je=xe.getSelectors((function(e){return e.mailApp.filters})),ye=je.selectAll,Oe=(je.selectById,Object(I.d)({name:"mailApp/filters",initialState:xe.getInitialState({}),reducers:{},extraReducers:Object(N.a)({},ve.fulfilled,xe.setAll)}).reducer),Ee=Object(I.b)("mailApp/folders/getFolders",Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("/api/mail-app/folders");case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))),Se=Object(I.c)({}),we=Se.getSelectors((function(e){return e.mailApp.folders})),ke=we.selectAll,Ne=(we.selectById,Object(I.d)({name:"mailApp/folders",initialState:Se.getInitialState({}),reducers:{},extraReducers:Object(N.a)({},Ee.fulfilled,Se.setAll)}).reducer),Ie=Object(O.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16,marginRight:16}},listSubheader:{paddingLeft:24}}}));var Ae=function(e){Object(c.d)(ke);var t=Object(c.d)(_),a=(Object(c.d)(ye),Ie()),n=ae("mailApp").t;return i.a.createElement(b.a,{animation:"transition.slideUpIn",delay:400},i.a.createElement("div",{className:"flex-auto border-l-1"},i.a.createElement("div",null,i.a.createElement(me.a,null,i.a.createElement(ge.a,{className:a.listSubheader,disableSticky:!0},n("LABELS")),t&&t.map((function(e){return i.a.createElement(fe.a,{button:!0,component:pe.a,to:"/apps/mail/label/".concat(e.handle),key:e.id,className:a.listItem},i.a.createElement(v.a,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),i.a.createElement(be.a,{primary:e.title,disableTypography:!0}))}))))))};var Ce=function(e){var t=Object(l.useState)("creapond"),a=Object(p.a)(t,2),n=(a[0],a[1],ae("mailApp").t);return i.a.createElement("div",{className:"flex flex-col justify-center h-full p-24"},i.a.createElement("div",{className:"flex items-center flex-1"},i.a.createElement(b.a,{animation:"transition.expandIn",delay:300},i.a.createElement(v.a,{className:"text-32"},"mail")),i.a.createElement(b.a,{animation:"transition.slideLeftIn",delay:300},i.a.createElement("span",{className:"text-24 mx-16"},n("APP_TITLE")))),i.a.createElement(b.a,{animation:"transition.slideUpIn",delay:300},i.a.createElement(he.a,{onClick:function(){var e="".concat("http://13.58.82.135/api/api/","imapEmails/loadEmails/all"),t=localStorage.getItem("token"),a=C.a.get(e,{headers:{Authorization:t}}).then((function(){var e=a.data.message;alert(e)}))}},"Reload")))},Re=a(176),Me=a(28),Te=a(1511),_e=Object(O.a)((function(e){return{mailItem:{borderBottom:"1px solid  ".concat(e.palette.divider),"&.unread":{background:"rgba(0,0,0,0.03)"},"&.selected":{"&::after":{content:'""',position:"absolute",left:0,display:"block",height:"100%",width:3,backgroundColor:e.palette.primary.main}}},avatar:{backgroundColor:e.palette.primary[500]}}})),Pe=Object(o.k)((function(e){Object(c.c)();var t=Object(c.d)((function(e){return e.mailApp.mails.selectedMailIds})),a=(Object(c.d)(P),Object(o.j)()),n=_e(e),r=Te.compile(e.match.path),l=t.length>0&&void 0!==t.find((function(t){return t===e.mail.id}));return i.a.createElement(fe.a,{dense:!0,button:!0,onClick:function(){return e.history.push(r(Object(B.a)(Object(B.a)({},a),{},{mailId:e.mail.id})))},className:Object(E.default)(n.mailItem,l&&"selected","read","py-16 px-0 md:px-8")},i.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden"},i.a.createElement("div",{className:"flex items-center justify-between px-16 pb-8"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement(g.a,{className:n.avatar},e.mail.email_from),i.a.createElement(j.a,{variant:"subtitle1",className:"mx-8"},e.mail.email_from)),i.a.createElement(j.a,{variant:"subtitle1"},e.mail.email_date)),i.a.createElement("div",{className:"flex flex-col px-16 py-0"},i.a.createElement(j.a,{className:"truncate"},e.mail.email_subject)),i.a.createElement("div",{className:"flex justify-end px-12"},i.a.createElement(k,{className:"mx-2 mt-4",title:e.mail.x_gm_label,color:"#D3D3D3",key:e.mail.x_gm_label}))))}));var De=Object(o.k)((function(e){var t=Object(c.c)(),a=Object(c.d)(oe),n=Object(c.d)((function(e){return e.mailApp.mails.searchText})),r=Object(c.d)((function(e){return e.mailApp.mails.status})),s=Object(o.j)(),u=Object(l.useState)(null),d=Object(p.a)(u,2),m=d[0],g=d[1],h=ae("mailApp").t,v=i.a.useState({loading:!0}),x=Object(p.a)(v,2),O=(x[0],x[1]);return Object(y.b)((function(){t(le(s)),O({loading:!1})}),[t,s]),Object(l.useEffect)((function(){a&&g(0===n.length?a:Me.a.filterArrayByString(a,n))}),[a,n]),m?0===m.length?"loading"===r?i.a.createElement(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100}):i.a.createElement(b.a,{delay:100},i.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},i.a.createElement(j.a,{color:"textSecondary",variant:"h5"},h("NO_MESSAGES")))):"loading"===r?i.a.createElement(f.a,{type:"Puff",color:"#00BFFF",height:100,width:100}):i.a.createElement(me.a,{className:"p-0"},i.a.createElement(Re.a,{enter:{animation:"transition.slideUpBigIn"}},m.map((function(e){return i.a.createElement(Pe,{mail:e,key:e.id})})))):null}));var Be=a(108),He=Object(Be.c)({mails:de,mail:L,folders:Ne,labels:D,filters:Oe});t.default=Object(r.a)("mailApp",He)((function(e){var t=Object(c.c)(),a=Object(l.useRef)(null),r=Object(o.j)();return Object(l.useEffect)((function(){t(ve()),t(Ee()),t(R())}),[t]),i.a.createElement(n.a,{classes:{root:"w-full",content:"flex flex-col",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},contentToolbar:r.mailId?i.a.createElement(U,null):"",content:r.mailId?i.a.createElement(W,null):i.a.createElement(De,null),leftSidebarHeader:i.a.createElement(Ce,null),leftSidebarContent:i.a.createElement(Ae,null),ref:a,innerScroll:!0})}))}}]);