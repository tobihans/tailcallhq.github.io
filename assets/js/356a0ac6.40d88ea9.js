"use strict";(self.webpackChunktailcall_in=self.webpackChunktailcall_in||[]).push([[1117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),h=a,m=f["".concat(c,".").concat(h)]||f[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7384:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"About"},i="What is Tailcall?",l={type:"mdx",permalink:"/about",source:"@site/src/pages/about.md",title:"About",description:"From [Wikipedia]",frontMatter:{title:"About"}},c=[],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-tailcall"},"What is Tailcall?"),(0,a.kt)("p",null,"From ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Tail_call"},"Wikipedia"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In computer science, a tail call is a subroutine call performed as the final action of a procedure.")),(0,a.kt)("p",null,"The basic idea is that it's a function call that is made at a place where no stack allocations are required. This happens when the caller of the function is simply returning the result of the called function. This optimization doesn't really have any performance impact however it gives us flexibility to design and implement mutually recursive functions."),(0,a.kt)("h1",{id:"who-are-we"},"Who are we?"),(0,a.kt)("p",null,"We are a bunch of individuals, who are inspired to solve hard\ntechnology problems in the most elegant way possible. We believe the\nonly way this is possible is through unbiased feedback, perseverance\nand having the best people to work together.\nThat's why we are hard believers of open source software and\nare committed to making it sustainable."),(0,a.kt)("p",null,"Check us out at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tailcallhq"},"Github"),"! Or chat with us on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/7fseDEXUNU"},"Discord"),"."))}s.isMDXComponent=!0}}]);