(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[69],{1237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var i=void 0,c=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(c=window);var l=t.FrameContext=r.default.createContext({document:i,window:c}),u=l.Provider,s=l.Consumer;t.FrameContextProvider=u,t.FrameContextConsumer=s},1238:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var a=n(13),o=n(124),r=n(1219),i=n(1228),c=n(1197),l=n(1231),u=n(1232),s=n(0),d=n.n(s),m=n(12),f=n(9),p=n(74),h=n(75),b=n(136),y=n(135),g=n(1150),v=n(622),x=n(1187),C=n(1218),E=n(8),j=n(62),O=n(409),w=n(1239),k=n.n(w),_=Object(g.a)({productionPrefix:"iframe-"}),M=function(e){Object(b.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(j.c)(Object(f.a)(Object(f.a)({},Object(v.a)()),{},{plugins:[].concat(Object(m.a)(Object(v.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(k.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(x.b,{jss:this.state.jss,generateClassName:_,sheetsManager:this.state.sheetsManager},d.a.createElement(C.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),D=Object(E.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(M);function N(e){var t=Object(s.useState)(e.currentTabIndex),n=Object(a.a)(t,2),m=n[0],f=n[1],p=e.component,h=e.raw,b=e.iframe,y=e.className;return d.a.createElement(i.a,{className:y},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(u.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){f(t)}},p&&d.a.createElement(l.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),h&&d.a.createElement(l.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===m?"flex flex-1 max-w-full":"hidden"},p&&(b?d.a.createElement(D,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}N.defaultProps={currentTabIndex:0};var F=N},1239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1237);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1240),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},1240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=d(r),c=d(n(21)),l=d(n(3)),u=n(1237),s=d(n(1241));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=i.default.createElement(s.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(u.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:l.default.object,head:l.default.node,initialContent:l.default.string,mountTarget:l.default.string,contentDidMount:l.default.func,contentDidUpdate:l.default.func,children:l.default.oneOfType([l.default.element,l.default.arrayOf(l.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(i(o),i(n(3)));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);u.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=u},1407:function(e,t,n){"use strict";var a=n(1),o=n(0),r=(n(3),n(8)),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(r.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,o.createElement(o.Fragment,null,n)}))},1516:function(e,t,n){"use strict";var a=n(1),o=n(4),r=n(18),i=n(0),c=(n(3),n(2)),l=n(8),u=n(10),s=i.forwardRef((function(e,t){var n=e.classes,r=e.className,l=e.component,s=void 0===l?"div":l,d=e.disableGutters,m=void 0!==d&&d,f=e.fixed,p=void 0!==f&&f,h=e.maxWidth,b=void 0===h?"lg":h,y=Object(o.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(s,Object(a.a)({className:Object(c.default)(n.root,r,p&&n.fixed,m&&n.disableGutters,!1!==b&&n["maxWidth".concat(Object(u.a)(String(b)))]),ref:t},y))}));t.a=Object(l.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:a}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(s)},1892:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),o=n.n(a),r=n(1407),i=n(209),c=n(1516);function l(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(c.a,{maxWidth:"sm"},o.a.createElement(i.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}},1893:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Typography from '@material-ui/core/Typography';\nimport Container from '@material-ui/core/Container';\n\nexport default function SimpleContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container maxWidth=\"sm\">\n        <Typography component=\"div\" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},1894:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),o=n.n(a),r=n(1407),i=n(209),c=n(1516);function l(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(c.a,{fixed:!0},o.a.createElement(i.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}},1895:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Typography from '@material-ui/core/Typography';\nimport Container from '@material-ui/core/Container';\n\nexport default function FixedContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container fixed>\n        <Typography component=\"div\" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n"},2561:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1238),i=n(124),c=n(1202),l=n(1197),u=n(209),s=n(1196),d=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return d(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(c.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/container",target:"_blank",role:"button"},o.a.createElement(l.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(u.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Container"),o.a.createElement(u.a,{className:"description"},"The container centers your content horizontally. It's the most basic layout element."),o.a.createElement(u.a,{className:"mb-16",component:"div"},"While containers can be nested, most layouts do not require a nested container."),o.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fluid"),o.a.createElement(u.a,{className:"mb-16",component:"div"},"A fluid container width is bounded by the ",o.a.createElement("code",null,"maxWidth")," property value."),o.a.createElement(u.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!0,component:n(1892).default,raw:n(1893)})),o.a.createElement(i.a,{component:"pre",className:"language-jsx"},' \n<Container maxWidth="sm">\n'),o.a.createElement(u.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fixed"),o.a.createElement(u.a,{className:"mb-16",component:"div"},"If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the ",o.a.createElement("code",null,"fixed")," property. The max-width matches the min-width of the current breakpoint."),o.a.createElement(u.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!0,component:n(1894).default,raw:n(1895)})),o.a.createElement(i.a,{component:"pre",className:"language-jsx"}," \n<Container fixed>\n"))}}}]);