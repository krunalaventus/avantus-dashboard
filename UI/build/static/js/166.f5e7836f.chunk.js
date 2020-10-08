(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[166],{2537:function(e,a,t){"use strict";t.r(a);var n=t(124),r=t(1202),o=t(209),c=t(0),i=t.n(c),s=t(5),l=t(41);a.default=function(e){var a=Object(s.c)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{variant:"h4",className:"mb-24"},"FuseMessage"),i.a.createElement(o.a,{className:"mb-16",component:"p"},i.a.createElement("code",null,"FuseMessage")," is a simple snackbar trigger for easily showing messages via redux action. It should be located in the theme layouts."),i.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Usage"),i.a.createElement(o.a,{className:"mb-16",component:"p"},"You can show messages anywhere with dispatching the action showMessage, it is using Material-UI's snackbar so you can pass the props in the object:"),i.a.createElement(n.a,{component:"pre",className:"language-jsx"},"\n                                    <Button \n                                        onClick={()=> dispatch(\n                                            showMessage({\n                                                message     : 'Hi, how are you?',//text or html\n                                                autoHideDuration: 6000,//ms\n                                                anchorOrigin: {\n                                                    vertical  : 'top',//top bottom\n                                                    horizontal: 'right'//left center right\n                                                },\n                                                variant: 'success'//success error info warning null\n                                            }))}\n                                    >\n                                        Top - Right\n                                    </Button>\n                            "),i.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Example"),i.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h6"},"Position"),i.a.createElement("div",null,i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"right"}}))}},"Top - Right"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"center"}}))}},"Top-Center"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",anchorOrigin:{vertical:"top",horizontal:"left"}}))}},"Top-Left"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"right"}}))}},"Bottom-Right"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"center"}}))}},"Bottom-Center"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",anchorOrigin:{vertical:"bottom",horizontal:"left"}}))}},"Bottom-Left")),i.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h6"},"Variants"),i.a.createElement("div",null,i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?"}))}},"Default"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",variant:"success"}))}},"Success"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",variant:"warning"}))}},"Warning"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",variant:"error"}))}},"Error"),i.a.createElement(r.a,{onClick:function(){return a(Object(l.c)({message:"Hi, how are you?",variant:"info"}))}},"Info")))}}}]);