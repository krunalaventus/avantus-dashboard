(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[78],{1237:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var i=void 0,l=void 0;"undefined"!==typeof document&&(i=document),"undefined"!==typeof window&&(l=window);var s=t.FrameContext=r.default.createContext({document:i,window:l}),c=s.Provider,u=s.Consumer;t.FrameContextProvider=c,t.FrameContextConsumer=u},1238:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(13),o=n(124),r=n(1219),i=n(1228),l=n(1197),s=n(1231),c=n(1232),u=n(0),m=n.n(u),d=n(12),p=n(9),h=n(74),f=n(75),y=n(136),g=n(135),b=n(1150),v=n(622),E=n(1187),w=n(1218),T=n(8),x=n(62),j=n(409),N=n(1239),k=n.n(N),C=Object(b.a)({productionPrefix:"iframe-"}),O=function(e){Object(y.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(x.c)(Object(p.a)(Object(p.a)({},Object(v.a)()),{},{plugins:[].concat(Object(d.a)(Object(v.a)().plugins),[Object(j.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),m.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return m.a.createElement(k.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?m.a.createElement(E.b,{jss:this.state.jss,generateClassName:C,sheetsManager:this.state.sheetsManager},m.a.createElement(w.a,{theme:a},m.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(m.a.Component),D=Object(T.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(O);function _(e){var t=Object(u.useState)(e.currentTabIndex),n=Object(a.a)(t,2),d=n[0],p=n[1],h=e.component,f=e.raw,y=e.iframe,g=e.className;return m.a.createElement(i.a,{className:g},m.a.createElement(r.a,{position:"static",color:"default",elevation:0},m.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){p(t)}},h&&m.a.createElement(s.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"remove_red_eye")}),f&&m.a.createElement(s.a,{classes:{root:"min-w-64"},icon:m.a.createElement(l.a,null,"code")}))),m.a.createElement("div",{className:"flex justify-center max-w-full"},m.a.createElement("div",{className:0===d?"flex flex-1 max-w-full":"hidden"},h&&(y?m.a.createElement(D,null,m.a.createElement(h,null)):m.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},m.a.createElement(h,null)))),m.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},f&&m.a.createElement("div",{className:"flex flex-1"},m.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}_.defaultProps={currentTabIndex:0};var M=_},1239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1237);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1240),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},1240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=m(r),l=m(n(21)),s=m(n(3)),c=n(1237),u=m(n(1241));function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=i.default.createElement(u.default,{contentDidMount:t,contentDidUpdate:n},i.default.createElement(c.FrameContextProvider,{value:{document:e,window:a}},i.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[l.default.createPortal(this.props.head,this.getDoc().head),l.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,i.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);d.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(i(o),i(n(3)));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);c.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=c},2461:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),o=n.n(a),r=n(209),i=n(1196),l=Object(i.a)({root:{width:"100%",maxWidth:500}});function s(){var e=l();return o.a.createElement("div",{className:e.root},o.a.createElement(r.a,{variant:"h1",component:"h2",gutterBottom:!0},"h1. Heading"),o.a.createElement(r.a,{variant:"h2",gutterBottom:!0},"h2. Heading"),o.a.createElement(r.a,{variant:"h3",gutterBottom:!0},"h3. Heading"),o.a.createElement(r.a,{variant:"h4",gutterBottom:!0},"h4. Heading"),o.a.createElement(r.a,{variant:"h5",gutterBottom:!0},"h5. Heading"),o.a.createElement(r.a,{variant:"h6",gutterBottom:!0},"h6. Heading"),o.a.createElement(r.a,{variant:"subtitle1",gutterBottom:!0},"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"),o.a.createElement(r.a,{variant:"subtitle2",gutterBottom:!0},"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"),o.a.createElement(r.a,{variant:"body1",gutterBottom:!0},"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."),o.a.createElement(r.a,{variant:"body2",gutterBottom:!0},"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."),o.a.createElement(r.a,{variant:"button",display:"block",gutterBottom:!0},"button text"),o.a.createElement(r.a,{variant:"caption",display:"block",gutterBottom:!0},"caption text"),o.a.createElement(r.a,{variant:"overline",display:"block",gutterBottom:!0},"overline text"))}},2462:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Typography from \'@material-ui/core/Typography\';\nimport { makeStyles } from \'@material-ui/core/styles\';\n\nconst useStyles = makeStyles({\n  root: {\n    width: \'100%\',\n    maxWidth: 500,\n  },\n});\n\nexport default function Types() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Typography variant="h1" component="h2" gutterBottom>\n        h1. Heading\n      </Typography>\n      <Typography variant="h2" gutterBottom>\n        h2. Heading\n      </Typography>\n      <Typography variant="h3" gutterBottom>\n        h3. Heading\n      </Typography>\n      <Typography variant="h4" gutterBottom>\n        h4. Heading\n      </Typography>\n      <Typography variant="h5" gutterBottom>\n        h5. Heading\n      </Typography>\n      <Typography variant="h6" gutterBottom>\n        h6. Heading\n      </Typography>\n      <Typography variant="subtitle1" gutterBottom>\n        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n      </Typography>\n      <Typography variant="subtitle2" gutterBottom>\n        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n      </Typography>\n      <Typography variant="body1" gutterBottom>\n        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam\n        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.\n      </Typography>\n      <Typography variant="body2" gutterBottom>\n        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur\n        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam\n        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.\n      </Typography>\n      <Typography variant="button" display="block" gutterBottom>\n        button text\n      </Typography>\n      <Typography variant="caption" display="block" gutterBottom>\n        caption text\n      </Typography>\n      <Typography variant="overline" display="block" gutterBottom>\n        overline text\n      </Typography>\n    </div>\n  );\n}\n'},2463:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(9),o=n(0),r=n.n(o),i=n(1196),l=Object(i.a)((function(e){return{root:Object(a.a)(Object(a.a)({},e.typography.button),{},{backgroundColor:e.palette.background.paper,padding:e.spacing(1)})}}));function s(){var e=l();return r.a.createElement("div",{className:e.root},"This div's text looks like that of a button.")}},2464:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    ...theme.typography.button,\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(1),\n  },\n}));\n\nexport default function TypographyTheme() {\n  const classes = useStyles();\n\n  return <div className={classes.root}>{\"This div's text looks like that of a button.\"}</div>;\n}\n"},2605:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1238),i=n(124),l=n(1202),s=n(1197),c=n(209),u=n(1196),m=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){return m(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/typography",target:"_blank",role:"button"},o.a.createElement(s.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Typography"),o.a.createElement(c.a,{className:"description"},"Use typography to present your design and content as clearly and efficiently as possible."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Too many type sizes and styles at once can spoil any layout. A ",o.a.createElement("a",{href:"https://material.io/design/typography/#type-scale"},"typographic scale")," has a limited set of type sizes that work well together along with the layout grid."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"General"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("em",null,"Roboto")," font will ",o.a.createElement("strong",null,"not")," be automatically loaded by Material-UI. The developer is responsible for loading all fonts used in their application. Roboto Font has a few easy ways to get started. For more advanced configuration, check out",o.a.createElement("a",{href:"/customization/typography/"},"the theme customization section"),"."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Roboto Font CDN"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Shown below is a sample link markup used to load the Roboto font from a CDN:"),o.a.createElement(i.a,{component:"pre",className:"language-html"},' \n<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />\n'),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Install with npm"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"You can ",o.a.createElement("a",{href:"https://www.npmjs.com/package/fontsource-roboto"},"install it")," by typing the below command in your terminal:"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"npm install fontsource-roboto")),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Then, you can import it in your entry-point."),o.a.createElement(i.a,{component:"pre",className:"language-js"}," \nimport 'fontsource-roboto';\n"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"For more info check out ",o.a.createElement("a",{href:"https://github.com/DecliningLotus/fontsource/blob/master/packages/roboto/README.md"},"Fontsource"),"."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f Be careful when using this approach. Make sure your bundler doesn't eager load all the font variations (100/300/400/500/700/900, italic/regular, SVG/woff). Fontsource can be configured to load specific subsets, weights and styles. Inlining all the font files can significantly increase the size of your bundle. Material-UI default typography configuration only relies on 300, 400, 500, and 700 font weights."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Component"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2461).default,raw:n(2462)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Theme"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"In some situations you might not be able to use the ",o.a.createElement("code",null,"Typography")," component. Hopefully, you might be able to take advantage of the ",o.a.createElement("a",{href:"/customization/default-theme/?expand-path=$.typography"},o.a.createElement("code",null,"typography"))," keys of the theme."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2463).default,raw:n(2464)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Changing the semantic element"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"The Typography component uses the ",o.a.createElement("code",null,"variantMapping")," property to associate a UI variant with a semantic element. It\u2019s important to realize that the style of a typography is independent from the semantic underlying element."),o.a.createElement("ul",null,o.a.createElement("li",null,"You can change the underlying element for a one time occasion with the ",o.a.createElement("code",null,"component")," property:")),o.a.createElement(i.a,{component:"pre",className:"language-jsx"},' \n{/* There is already an h1 in the page, let\'s not duplicate it. */}\n<Typography variant="h1" component="h2">\n  h1. Heading\n</Typography>\n'),o.a.createElement("ul",null,o.a.createElement("li",null,"You can change the mapping ",o.a.createElement("a",{href:"/customization/globals/#default-props"},"globally using the theme"),":")),o.a.createElement(i.a,{component:"pre",className:"language-js"}," \nconst theme = createMuiTheme({\n  props: {\n    MuiTypography: {\n      variantMapping: {\n        h1: 'h2',\n        h2: 'h2',\n        h3: 'h2',\n        h4: 'h2',\n        h5: 'h2',\n        h6: 'h2',\n        subtitle1: 'h2',\n        subtitle2: 'h2',\n        body1: 'span',\n        body2: 'span',\n      },\n    },\n  },\n});\n"),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"A few key factors to follow for an accessible typography:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Color"),". Provide enough contrast between text and its background, check out the minimum recommended ",o.a.createElement("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"},"WCAG 2.0 color contrast ratio")," (4.5:1)."),o.a.createElement("li",null,o.a.createElement("strong",null,"Font size"),". Use ",o.a.createElement("a",{href:"/customization/typography/#font-size"},"relative units (rem)")," to accommodate the user's settings."),o.a.createElement("li",null,o.a.createElement("strong",null,"Heading hierarchy"),". ",o.a.createElement("a",{href:"https://www.w3.org/WAI/tutorials/page-structure/headings/"},"Don't skip")," heading levels. In order to solve this problem, you need to ",o.a.createElement("a",{href:"#changing-the-semantic-element"},"separate the semantics from the style"),".")))}}}]);