(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[50],{1238:function(e,n,a){"use strict";a.d(n,"a",(function(){return I}));var t=a(13),o=a(124),r=a(1219),l=a(1228),c=a(1197),i=a(1231),s=a(1232),m=a(0),d=a.n(m),u=a(12),g=a(9),p=a(74),f=a(75),h=a(136),b=a(135),v=a(1150),E=a(622),y=a(1187),C=a(1218),B=a(8),N=a(62),x=a(409),S=a(1239),j=a.n(S),w=Object(v.a)({productionPrefix:"iframe-"}),O=function(e){Object(h.a)(a,e);var n=Object(b.a)(a);function a(){var e;Object(p.a)(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={ready:!1},e.handleRef=function(n){e.contentDocument=n?n.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(N.c)(Object(g.a)(Object(g.a)({},Object(E.a)()),{},{plugins:[].concat(Object(u.a)(Object(E.a)().plugins),[Object(x.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,n=e.children,a=e.classes,t=e.theme;return d.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:a.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(y.b,{jss:this.state.jss,generateClassName:w,sheetsManager:this.state.sheetsManager},d.a.createElement(C.a,{theme:t},d.a.cloneElement(n,{container:this.state.container}))):null)}}]),a}(d.a.Component),M=Object(B.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(O);function R(e){var n=Object(m.useState)(e.currentTabIndex),a=Object(t.a)(n,2),u=a[0],g=a[1],p=e.component,f=e.raw,h=e.iframe,b=e.className;return d.a.createElement(l.a,{className:b},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:u,onChange:function(e,n){g(n)}},p&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"remove_red_eye")}),f&&d.a.createElement(i.a,{classes:{root:"min-w-64"},icon:d.a.createElement(c.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center max-w-full"},d.a.createElement("div",{className:0===u?"flex flex-1 max-w-full":"hidden"},p&&(h?d.a.createElement(M,null,d.a.createElement(p,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center max-w-full"},d.a.createElement(p,null)))),d.a.createElement("div",{className:1===u?"flex flex-1":"hidden"},f&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}R.defaultProps={currentTabIndex:0};var I=R},1323:function(e,n,a){"use strict";var t=a(173),o=a(0),r=a(422),l=o.forwardRef((function(e,n){var a=e.code,l=e.language,c=Object(t.a)(e,["code","language"]);return o.createElement(r.a,Object.assign({component:"pre",className:"language-".concat(l||"jsx"),ref:n},c),a)}));n.a=l},1766:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return m}));var t=a(0),o=a.n(t),r=a(1196),l=a(1447),c=a(1270),i=a.n(c),s=Object(r.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function m(){var e=s();return o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{badgeContent:4,color:"primary"},o.a.createElement(i.a,null)),o.a.createElement(l.a,{badgeContent:4,color:"secondary"},o.a.createElement(i.a,null)),o.a.createElement(l.a,{badgeContent:4,color:"error"},o.a.createElement(i.a,null)))}},1767:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function SimpleBadge() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Badge badgeContent={4} color=\"primary\">\n        <MailIcon />\n      </Badge>\n      <Badge badgeContent={4} color=\"secondary\">\n        <MailIcon />\n      </Badge>\n      <Badge badgeContent={4} color=\"error\">\n        <MailIcon />\n      </Badge>\n    </div>\n  );\n}\n"},1768:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var t=a(0),o=a.n(t),r=a(1447),l=a(8),c=a(645),i=a(1769),s=a.n(i),m=Object(l.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(r.a);function d(){return o.a.createElement(c.a,{"aria-label":"cart"},o.a.createElement(m,{badgeContent:4,color:"secondary"},o.a.createElement(s.a,null)))}},1770:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport Badge from '@material-ui/core/Badge';\nimport { withStyles } from '@material-ui/core/styles';\nimport IconButton from '@material-ui/core/IconButton';\nimport ShoppingCartIcon from '@material-ui/icons/ShoppingCart';\n\nconst StyledBadge = withStyles((theme) => ({\n  badge: {\n    right: -3,\n    top: 13,\n    border: `2px solid ${theme.palette.background.paper}`,\n    padding: '0 4px',\n  },\n}))(Badge);\n\nexport default function CustomizedBadges() {\n  return (\n    <IconButton aria-label=\"cart\">\n      <StyledBadge badgeContent={4} color=\"secondary\">\n        <ShoppingCartIcon />\n      </StyledBadge>\n    </IconButton>\n  );\n}\n"},1771:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return E}));var t=a(13),o=a(0),r=a.n(o),l=a(1196),c=a(1447),i=a(1520),s=a(1202),m=a(1285),d=a.n(m),u=a(1772),g=a.n(u),p=a(1270),f=a.n(p),h=a(1217),b=a(1201),v=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column","& > *":{marginBottom:e.spacing(2)},"& .MuiBadge-root":{marginRight:e.spacing(4)}}}}));function E(){var e=v(),n=r.a.useState(1),a=Object(t.a)(n,2),o=a[0],l=a[1],m=r.a.useState(!1),u=Object(t.a)(m,2),p=u[0],E=u[1];return r.a.createElement("div",{className:e.root},r.a.createElement("div",null,r.a.createElement(c.a,{color:"secondary",badgeContent:o},r.a.createElement(f.a,null)),r.a.createElement(i.a,null,r.a.createElement(s.a,{"aria-label":"reduce",onClick:function(){l(Math.max(o-1,0))}},r.a.createElement(g.a,{fontSize:"small"})),r.a.createElement(s.a,{"aria-label":"increase",onClick:function(){l(o+1)}},r.a.createElement(d.a,{fontSize:"small"})))),r.a.createElement("div",null,r.a.createElement(c.a,{color:"secondary",variant:"dot",invisible:p},r.a.createElement(f.a,null)),r.a.createElement(b.a,{control:r.a.createElement(h.a,{color:"primary",checked:!p,onChange:function(){E(!p)}}),label:"Show Badge"})))}},1773:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport ButtonGroup from '@material-ui/core/ButtonGroup';\nimport Button from '@material-ui/core/Button';\nimport AddIcon from '@material-ui/icons/Add';\nimport RemoveIcon from '@material-ui/icons/Remove';\nimport MailIcon from '@material-ui/icons/Mail';\nimport Switch from '@material-ui/core/Switch';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: 'flex',\n    flexDirection: 'column',\n    '& > *': {\n      marginBottom: theme.spacing(2),\n    },\n    '& .MuiBadge-root': {\n      marginRight: theme.spacing(4),\n    },\n  },\n}));\n\nexport default function BadgeVisibility() {\n  const classes = useStyles();\n  const [count, setCount] = React.useState(1);\n  const [invisible, setInvisible] = React.useState(false);\n\n  const handleBadgeVisibility = () => {\n    setInvisible(!invisible);\n  };\n\n  return (\n    <div className={classes.root}>\n      <div>\n        <Badge color=\"secondary\" badgeContent={count}>\n          <MailIcon />\n        </Badge>\n        <ButtonGroup>\n          <Button\n            aria-label=\"reduce\"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}\n          >\n            <RemoveIcon fontSize=\"small\" />\n          </Button>\n          <Button\n            aria-label=\"increase\"\n            onClick={() => {\n              setCount(count + 1);\n            }}\n          >\n            <AddIcon fontSize=\"small\" />\n          </Button>\n        </ButtonGroup>\n      </div>\n      <div>\n        <Badge color=\"secondary\" variant=\"dot\" invisible={invisible}>\n          <MailIcon />\n        </Badge>\n        <FormControlLabel\n          control={<Switch color=\"primary\" checked={!invisible} onChange={handleBadgeVisibility} />}\n          label=\"Show Badge\"\n        />\n      </div>\n    </div>\n  );\n}\n"},1774:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return m}));var t=a(0),o=a.n(t),r=a(1196),l=a(1447),c=a(1270),i=a.n(c),s=Object(r.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function m(){var e=s();return o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{color:"secondary",badgeContent:0},o.a.createElement(i.a,null)),o.a.createElement(l.a,{color:"secondary",badgeContent:0,showZero:!0},o.a.createElement(i.a,null)))}},1775:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function ShowZeroBadge() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Badge color=\"secondary\" badgeContent={0}>\n        <MailIcon />\n      </Badge>\n      <Badge color=\"secondary\" badgeContent={0} showZero>\n        <MailIcon />\n      </Badge>\n    </div>\n  );\n}\n"},1776:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var t=a(0),o=a.n(t),r=a(1196),l=a(1447),c=a(1270),i=a.n(c),s=Object(r.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}}}})),m={color:"secondary",children:o.a.createElement(i.a,null)};function d(){var e=s();return o.a.createElement("div",{className:e.root},o.a.createElement(l.a,Object.assign({badgeContent:99},m)),o.a.createElement(l.a,Object.assign({badgeContent:100},m)),o.a.createElement(l.a,Object.assign({badgeContent:1e3,max:999},m)))}},1777:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(2),\n    },\n  },\n}));\n\nconst defaultProps = {\n  color: 'secondary',\n  children: <MailIcon />,\n};\n\nexport default function BadgeMax() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Badge badgeContent={99} {...defaultProps} />\n      <Badge badgeContent={100} {...defaultProps} />\n      <Badge badgeContent={1000} max={999} {...defaultProps} />\n    </div>\n  );\n}\n"},1778:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var t=a(0),o=a.n(t),r=a(1196),l=a(1447),c=a(1270),i=a.n(c),s=a(209),m=Object(r.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}}));function d(){var e=m();return o.a.createElement("div",{className:e.root},o.a.createElement(l.a,{color:"secondary",variant:"dot"},o.a.createElement(i.a,null)),o.a.createElement(l.a,{color:"secondary",variant:"dot"},o.a.createElement(s.a,null,"Typography")))}},1779:function(e,n,a){"use strict";a.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Badge from '@material-ui/core/Badge';\nimport MailIcon from '@material-ui/icons/Mail';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    '& > *': {\n      margin: theme.spacing(1),\n    },\n  },\n}));\n\nexport default function DotBadge() {\n  const classes = useStyles();\n\n  return (\n    <div className={classes.root}>\n      <Badge color=\"secondary\" variant=\"dot\">\n        <MailIcon />\n      </Badge>\n      <Badge color=\"secondary\" variant=\"dot\">\n        <Typography>Typography</Typography>\n      </Badge>\n    </div>\n  );\n}\n"},1780:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return s}));var t=a(0),o=a.n(t),r=a(2),l=a(1196),c=a(1447),i=Object(l.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},shape:{backgroundColor:e.palette.primary.main,width:40,height:40},shapeCircle:{borderRadius:"50%"}}}));function s(){var e=i(),n=o.a.createElement("div",{className:e.shape}),a=o.a.createElement("div",{className:Object(r.default)(e.shape,e.shapeCircle)});return o.a.createElement("div",{className:e.root},o.a.createElement(c.a,{color:"secondary",badgeContent:" "},n),o.a.createElement(c.a,{color:"secondary",badgeContent:" ",variant:"dot"},n),o.a.createElement(c.a,{color:"secondary",overlap:"circle",badgeContent:" "},a),o.a.createElement(c.a,{color:"secondary",overlap:"circle",badgeContent:" ",variant:"dot"},a))}},1781:function(e,n,a){"use strict";a.r(n),n.default='import React from \'react\';\nimport clsx from \'clsx\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Badge from \'@material-ui/core/Badge\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    \'& > *\': {\n      margin: theme.spacing(1),\n    },\n  },\n  shape: {\n    backgroundColor: theme.palette.primary.main,\n    width: 40,\n    height: 40,\n  },\n  shapeCircle: {\n    borderRadius: \'50%\',\n  },\n}));\n\nexport default function BadgeOverlap() {\n  const classes = useStyles();\n\n  const rectangle = <div className={classes.shape} />;\n  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;\n\n  return (\n    <div className={classes.root}>\n      <Badge color="secondary" badgeContent=" ">\n        {rectangle}\n      </Badge>\n      <Badge color="secondary" badgeContent=" " variant="dot">\n        {rectangle}\n      </Badge>\n      <Badge color="secondary" overlap="circle" badgeContent=" ">\n        {circle}\n      </Badge>\n      <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">\n        {circle}\n      </Badge>\n    </div>\n  );\n}\n'},1782:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return b}));var t=a(13),o=a(0),r=a.n(o),l=a(1447),c=a(646),i=a(1201),s=a(1160),m=a(1233),d=a(1200),u=a(1196),g=a(1270),p=a.n(g),f=a(1323),h=Object(u.a)((function(e){return{root:{width:"100%"},formControl:{margin:e.spacing(3)},row:{display:"flex",justifyContent:"center"},margin:{margin:e.spacing(2)}}}));function b(){var e=h(),n=r.a.useState("right"),a=Object(t.a)(n,2),o=a[0],u=a[1],g=r.a.useState("top"),b=Object(t.a)(g,2),v=b[0],E=b[1],y="\n<Badge\n  anchorOrigin={{\n    vertical: '".concat(v,"',\n    horizontal: '").concat(o,"',\n  }}\n>\n");return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.row},r.a.createElement(c.a,{component:"fieldset",className:e.formControl},r.a.createElement(s.a,{component:"legend"},"Vertical"),r.a.createElement(d.a,{name:"vertical",value:v,onChange:function(e){E(e.target.value)}},r.a.createElement(i.a,{value:"top",control:r.a.createElement(m.a,null),label:"Top"}),r.a.createElement(i.a,{value:"bottom",control:r.a.createElement(m.a,null),label:"Bottom"}))),r.a.createElement(c.a,{component:"fieldset",className:e.formControl},r.a.createElement(s.a,{component:"legend"},"Horizontal"),r.a.createElement(d.a,{name:"horizontal",value:o,onChange:function(e){u(e.target.value)}},r.a.createElement(i.a,{value:"right",control:r.a.createElement(m.a,null),label:"Right"}),r.a.createElement(i.a,{value:"left",control:r.a.createElement(m.a,null),label:"Left"})))),r.a.createElement("div",{className:e.row},r.a.createElement(l.a,{color:"secondary",variant:"dot",badgeContent:1,anchorOrigin:{horizontal:o,vertical:v},className:e.margin},r.a.createElement(p.a,null)),r.a.createElement(l.a,{color:"secondary",badgeContent:1,anchorOrigin:{horizontal:o,vertical:v},className:e.margin},r.a.createElement(p.a,null)),r.a.createElement(l.a,{color:"secondary",badgeContent:12,anchorOrigin:{horizontal:o,vertical:v},className:e.margin},r.a.createElement(p.a,null)),r.a.createElement(l.a,{color:"secondary",badgeContent:123,anchorOrigin:{horizontal:o,vertical:v},className:e.margin},r.a.createElement(p.a,null)),r.a.createElement(l.a,{color:"secondary",max:999,badgeContent:1337,anchorOrigin:{horizontal:o,vertical:v},className:e.margin},r.a.createElement(p.a,null))),r.a.createElement(f.a,{code:y,language:"jsx"}))}},1783:function(e,n,a){"use strict";a.r(n),n.default='import React from \'react\';\nimport Badge from \'@material-ui/core/Badge\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport Radio from \'@material-ui/core/Radio\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport MailIcon from \'@material-ui/icons/Mail\';\nimport HighlightedCode from \'app/main/documentation/material-ui-components/utils/HighlightedCode\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    width: \'100%\',\n  },\n  formControl: {\n    margin: theme.spacing(3),\n  },\n  row: {\n    display: \'flex\',\n    justifyContent: \'center\',\n  },\n  margin: {\n    margin: theme.spacing(2),\n  },\n}));\n\nexport default function BadgeAlignment() {\n  const classes = useStyles();\n  const [horizontal, setHorizontal] = React.useState(\'right\');\n  const [vertical, setVertical] = React.useState(\'top\');\n\n  const handleHorizontalChange = (event) => {\n    setHorizontal(event.target.value);\n  };\n\n  const handleVerticalChange = (event) => {\n    setVertical(event.target.value);\n  };\n\n  const jsx = `\n<Badge\n  anchorOrigin={{\n    vertical: \'${vertical}\',\n    horizontal: \'${horizontal}\',\n  }}\n>\n`;\n\n  return (\n    <div className={classes.root}>\n      <div className={classes.row}>\n        <FormControl component="fieldset" className={classes.formControl}>\n          <FormLabel component="legend">Vertical</FormLabel>\n          <RadioGroup name="vertical" value={vertical} onChange={handleVerticalChange}>\n            <FormControlLabel value="top" control={<Radio />} label="Top" />\n            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" />\n          </RadioGroup>\n        </FormControl>\n        <FormControl component="fieldset" className={classes.formControl}>\n          <FormLabel component="legend">Horizontal</FormLabel>\n          <RadioGroup name="horizontal" value={horizontal} onChange={handleHorizontalChange}>\n            <FormControlLabel value="right" control={<Radio />} label="Right" />\n            <FormControlLabel value="left" control={<Radio />} label="Left" />\n          </RadioGroup>\n        </FormControl>\n      </div>\n      <div className={classes.row}>\n        <Badge\n          color="secondary"\n          variant="dot"\n          badgeContent={1}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}\n        >\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          badgeContent={1}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}\n        >\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          badgeContent={12}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}\n        >\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          badgeContent={123}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}\n        >\n          <MailIcon />\n        </Badge>\n        <Badge\n          color="secondary"\n          max={999}\n          badgeContent={1337}\n          anchorOrigin={{\n            horizontal,\n            vertical,\n          }}\n          className={classes.margin}\n        >\n          <MailIcon />\n        </Badge>\n      </div>\n      <HighlightedCode code={jsx} language="jsx" />\n    </div>\n  );\n}\n'},2551:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(1238),l=(a(124),a(1202)),c=a(1197),i=a(209),s=a(1196),m=Object(s.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));n.default=function(e){return m(),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex flex-1 flex-grow-0 items-center justify-end"},o.a.createElement(l.a,{className:"normal-case",variant:"outlined",component:"a",href:"https://material-ui.com/components/badges",target:"_blank",role:"button"},o.a.createElement(c.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),o.a.createElement(i.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Badge"),o.a.createElement(i.a,{className:"description"},"Badge generates a small badge to the top-right of its child(ren)."),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic badges"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1766).default,raw:a(1767)})),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized badges"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the ",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1768).default,raw:a(1770)})),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Badge visibility"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"The visibility of badges can be controlled using the ",o.a.createElement("code",null,"invisible")," property."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1771).default,raw:a(1773)})),o.a.createElement(i.a,{className:"mb-16",component:"div"},"The badge auto hides with badgeContent is zero. You can override this with the ",o.a.createElement("code",null,"showZero")," property."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1774).default,raw:a(1775)})),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Maximum value"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"You can use the ",o.a.createElement("code",null,"max")," property to cap the value of the badge content."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1776).default,raw:a(1777)})),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Dot badge"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("code",null,"dot")," property changes a badge into a small dot. This can be used as a notification that something has changed without giving a count."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1778).default,raw:a(1779)})),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Badge overlap"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"You can use the ",o.a.createElement("code",null,"overlap")," property to place the badge relative to the corner of the wrapped element."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1780).default,raw:a(1781)})),o.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Badge alignment"),o.a.createElement(i.a,{className:"mb-16",component:"div"},"You can use the ",o.a.createElement("code",null,"anchorOrigin")," prop to move the badge to any corner of the wrapped element."),o.a.createElement(i.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:a(1782).default,raw:a(1783)})))}}}]);