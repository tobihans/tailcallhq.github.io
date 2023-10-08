"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[1],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"CLI",sidebar_position:4},i=void 0,l={unversionedId:"intro/cli",id:"intro/cli",title:"CLI",description:"The TailCall CLI (Command Line Interface) is an essential part of the TailCall toolkit. It allows developers to manage and optimize GraphQL configurations directly from the command line. Each command within the CLI is designed to handle a specific aspect of GraphQL composition. Below, you'll find a detailed overview of each command, along with its options and usage examples.",source:"@site/docs/intro/cli.md",sourceDirName:"intro",slug:"/intro/cli",permalink:"/docs/intro/cli",draft:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/intro/cli.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"CLI",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/intro/architecture"},next:{title:"Operators",permalink:"/docs/intro/operators"}},c={},s=[{value:"check",id:"check",level:2},{value:"--n-plus-one-queries",id:"--n-plus-one-queries",level:3},{value:"--schema",id:"--schema",level:3},{value:"start",id:"start",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The TailCall CLI (Command Line Interface) is an essential part of the TailCall toolkit. It allows developers to manage and optimize GraphQL configurations directly from the command line. Each command within the CLI is designed to handle a specific aspect of GraphQL composition. Below, you'll find a detailed overview of each command, along with its options and usage examples."),(0,r.kt)("h2",{id:"check"},"check"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," command validates a composition spec. Notably, this command can detect potential N+1 issues. To use the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," command, follow this format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tc check [options] <file>...\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," command offers various options that control different settings, such as the display of the blueprint, endpoints, and schema of the composition spec."),(0,r.kt)("h3",{id:"--n-plus-one-queries"},"--n-plus-one-queries"),(0,r.kt)("p",null,"This flag triggers the detection of N+1 issues."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Default: false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tc check --n-plus-one-queries <file>...\n")),(0,r.kt)("h3",{id:"--schema"},"--schema"),(0,r.kt)("p",null,"This option enables the display of the schema of the composition spec."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: Boolean"),(0,r.kt)("li",{parentName:"ul"},"Default: false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tc check --schema <file>...\n")),(0,r.kt)("h2",{id:"start"},"start"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command launches the TailCall Server, acting as an GraphQL proxy with specific configurations. The server can publish various GraphQL configurations, also known as ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro/architecture#composition-specification-blueprint"},"composition specs"),"."),(0,r.kt)("p",null,"To start the server, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tc start <file>...\n")))}m.isMDXComponent=!0}}]);