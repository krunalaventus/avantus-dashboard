(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[68],{1237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var o,a=n(0),r=(o=a)&&o.__esModule?o:{default:o};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var c=t.FrameContext=r.default.createContext({document:i,window:l}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},1238:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o=n(13),a=n(124),r=n(1219),i=n(1228),l=n(1197),c=n(1231),s=n(1232),u=n(0),d=n.n(u),m=n(12),p=n(9),f=n(74),h=n(75),y=n(136),b=n(135),v=n(1150),w=n(622),k=n(1187),C=n(1218),g=n(8),E=n(62),O=n(409),x=n(1239),j=n.n(x),N=Object(v.a)({productionPrefix:"iframe-"}),_=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(f.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(E.c)(Object(p.a)(Object(p.a)({},Object(w.a)()),{},{plugins:[].concat(Object(m.a)(Object(w.a)().plugins),[Object(O.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,o=e.theme;return d.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(k.b,{jss:this.state.jss,generateClassName:N,sheetsManager:this.state.sheetsManager},d.a.createElement(C.a,{theme:o},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),D=Object(g.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(_);function M(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(o.a)(t,2),m=n[0],p=n[1],f=e.component,h=e.raw,y=e.iframe,b=e.className;return d.a.createElement(i.a,{className:b},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:m,onChange:function(e,t){p(t)}},f&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(l.a,null,"remove_red_eye")}),h&&d.a.createElement(c.a,{classes:{root:"min-w-64"},icon:d.a.createElement(l.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===m?"flex flex-1 max-w-full":"hidden"},f&&(y?d.a.createElement(D,null,d.a.createElement(f,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(f,null)))),d.a.createElement("div",{className:1===m?"flex flex-1":"hidden"},h&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(a.a,{component:"pre",className:"language-javascript w-full"},h.default)))))}M.defaultProps={currentTabIndex:0};var P=M},1239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var o=n(1237);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return o.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return o.FrameContextConsumer}});var a,r=n(1240),i=(a=r)&&a.__esModule?a:{default:a};t.default=i.default},1240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=d(r),l=d(n(21)),c=d(n(3)),s=n(1237),u=d(n(1241));function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,o=e.defaultView||e.parentView,a=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(s.FrameContextProvider,{value:{document:e,window:o}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(a,r)]}},{key:"render",value:function(){var e=this,t=o({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",o({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);m.propTypes={style:c.default.object,head:c.default.node,initialContent:c.default.string,mountTarget:c.default.string,contentDidMount:c.default.func,contentDidUpdate:c.default.func,children:c.default.oneOfType([c.default.element,c.default.arrayOf(c.default.element)])},m.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=m},1241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=(i(a),i(n(3)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return l(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return a.Children.only(this.props.children)}}]),t}(a.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},1886:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n(13),a=n(0),r=n.n(a),i=n(1196),l=n(1152),c=Object(i.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function s(){var e=c(),t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],i=n[1];return r.a.createElement(l.a,{onClickAway:function(){i(!1)}},r.a.createElement("div",{className:e.root},r.a.createElement("button",{type:"button",onClick:function(){i((function(e){return!e}))}},"Open menu dropdown"),a?r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside."):null))}},1887:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  dropdown: {\n    position: 'absolute',\n    top: 28,\n    right: 0,\n    left: 0,\n    zIndex: 1,\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function ClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener onClickAway={handleClickAway}>\n      <div className={classes.root}>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <div className={classes.dropdown}>\n            Click me, I will stay visible until you click outside.\n          </div>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},1888:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(13),a=n(0),r=n.n(a),i=n(1196),l=n(1152),c=n(1151),s=Object(i.a)((function(e){return{dropdown:{position:"fixed",width:200,top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function u(){var e=s(),t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],i=n[1];return r.a.createElement(l.a,{onClickAway:function(){i(!1)}},r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){i((function(e){return!e}))}},"Open menu dropdown"),a?r.a.createElement(c.a,null,r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside.")):null))}},1889:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Portal from '@material-ui/core/Portal';\n\nconst useStyles = makeStyles((theme) => ({\n  dropdown: {\n    position: 'fixed',\n    width: 200,\n    top: '50%',\n    left: '50%',\n    transform: 'translate(-50%, -50%)',\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function PortalClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener onClickAway={handleClickAway}>\n      <div>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <Portal>\n            <div className={classes.dropdown}>\n              Click me, I will stay visible until you click outside.\n            </div>\n          </Portal>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},1890:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var o=n(13),a=n(0),r=n.n(a),i=n(1196),l=n(1152),c=Object(i.a)((function(e){return{root:{position:"relative"},dropdown:{position:"absolute",top:28,right:0,left:0,zIndex:1,border:"1px solid",padding:e.spacing(1),backgroundColor:e.palette.background.paper}}}));function s(){var e=c(),t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],i=n[1];return r.a.createElement(l.a,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:function(){i(!1)}},r.a.createElement("div",{className:e.root},r.a.createElement("button",{type:"button",onClick:function(){i((function(e){return!e}))}},"Open menu dropdown"),a?r.a.createElement("div",{className:e.dropdown},"Click me, I will stay visible until you click outside."):null))}},1891:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    position: 'relative',\n  },\n  dropdown: {\n    position: 'absolute',\n    top: 28,\n    right: 0,\n    left: 0,\n    zIndex: 1,\n    border: '1px solid',\n    padding: theme.spacing(1),\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nexport default function LeadingClickAway() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleClick = () => {\n    setOpen((prev) => !prev);\n  };\n\n  const handleClickAway = () => {\n    setOpen(false);\n  };\n\n  return (\n    <ClickAwayListener\n      mouseEvent=\"onMouseDown\"\n      touchEvent=\"onTouchStart\"\n      onClickAway={handleClickAway}\n    >\n      <div className={classes.root}>\n        <button type=\"button\" onClick={handleClick}>\n          Open menu dropdown\n        </button>\n        {open ? (\n          <div className={classes.dropdown}>\n            Click me, I will stay visible until you click outside.\n          </div>\n        ) : null}\n      </div>\n    </ClickAwayListener>\n  );\n}\n"},2560:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(1238),i=(n(124),n(1202)),l=n(1197),c=n(209),s=n(1196),u=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return u(),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},a.a.createElement(i.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/click-away-listener",target:"_blank",role:"button"},a.a.createElement(l.a,null,"link"),a.a.createElement("span",{className:"mx-4"},"Reference"))),a.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Click away listener"),a.a.createElement(c.a,{className:"description"},"Detect if a click event happened outside of an element. It listens for clicks that occur somewhere in the document."),a.a.createElement("ul",null,a.a.createElement("li",null,"\ud83d\udce6 ",a.a.createElement("a",{href:"/size-snapshot"},"1.5 kB gzipped"),"."),a.a.createElement("li",null,"\u269b\ufe0f Support portals")),a.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example"),a.a.createElement(c.a,{className:"mb-16",component:"div"},"For instance, if you need to hide a menu dropdown when people click anywhere else on your page:"),a.a.createElement(c.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1886).default,raw:n(1887)})),a.a.createElement(c.a,{className:"mb-16",component:"div"},"Notice that the component only accepts one child element. You can find a more advanced demo on the ",a.a.createElement("a",{href:"/components/menus/#menulist-composition"},"Menu documentation section"),"."),a.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Portal"),a.a.createElement(c.a,{className:"mb-16",component:"div"},"The following demo uses ",a.a.createElement("a",{href:"/components/portal/"},a.a.createElement("code",null,"Portal")),' to render the dropdown into a new "subtree" outside of current DOM hierarchy.'),a.a.createElement(c.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1888).default,raw:n(1889)})),a.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Leading edge"),a.a.createElement(c.a,{className:"mb-16",component:"div"},"By default, the component responds to the trailing events (click + touch end). However, you can configure it to respond to the leading events (mouse down + touch start)."),a.a.createElement(c.a,{className:"mb-16",component:"div"},a.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(1890).default,raw:n(1891)})),a.a.createElement("blockquote",null,a.a.createElement(c.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f In this mode, only interactions on the scrollbar of the document is ignored.")))}}}]);