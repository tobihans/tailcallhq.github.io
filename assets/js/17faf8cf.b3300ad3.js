"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[364],{4932:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var l=a(7462),n=a(7294),i=a(3905),o=a(7649),r=a(2578);const s={title:"Installation & Updates",sidebar_position:1},c=void 0,p={unversionedId:"guides/installation",id:"guides/installation",title:"Installation & Updates",description:"You can install the latest version -  {versionData.tag_name}, by using",source:"@site/docs/guides/installation.mdx",sourceDirName:"guides",slug:"/guides/installation",permalink:"/docs/guides/installation",draft:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation & Updates",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/docs/intro/context"},next:{title:"Tackling N + 1",permalink:"/docs/guides/n+1"}},d={},m=[{value:"Homebrew",id:"homebrew",level:2},{value:"Curl",id:"curl",level:2},{value:"Docker",id:"docker",level:2},{value:"Verification",id:"verification",level:2}],u={toc:m},h="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.Fragment,null,"You can install the latest version - ",(0,i.kt)("b",null," ",r.yT),", by using one of the following methods:"),(0,i.kt)("h2",{id:"homebrew"},"Homebrew"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't already have Homebrew installed, you can find the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Tailcall repository to Homebrew by running the following command in your terminal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap tailcallhq/tailcall\nbrew install tailcall\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that Tailcall is installed correctly by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tc\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once installation is done, ",(0,i.kt)("strong",{parentName:"p"},"upgrades")," can be performed via:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew upgrade tailcall\n")))),(0,i.kt)("h2",{id:"curl"},"Curl"),(0,i.kt)("p",null,"Follow the steps below to manually install the cli on your system:"),(0,i.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},`curl -sSL https://raw.githubusercontent.com/tailcallhq/tailcall/main/install.sh | bash -s -- ${r.yT}`),(0,i.kt)("p",null,"This command fetches and executes the Tailcall installation script. The installed files are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.tailcall")," directory."),(0,i.kt)("p",null,"Upon completion of the installation, extend your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.tailcall/bin")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.tailcall/bin\n")),(0,i.kt)("h2",{id:"docker"},"Docker"),(0,i.kt)("p",null,"If you want to install Tailcall with Docker, follow the steps below. Before starting, ensure Docker is installed on your system. If not, you can download it from ",(0,i.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"here"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pull the latest Tailcall Docker image using the following command:"),(0,i.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"docker pull tailcallhq/tailcall/tc-server:",r.yT),(0,i.kt)("p",{parentName:"li"},"This command fetches the latest version of the Tailcall Docker image from the Docker registry.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the Tailcall Docker container with the following command:"),(0,i.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"docker run -p 8080:8080 -p 8081:8081 tailcallhq/tailcall/tc-server:",r.yT),(0,i.kt)("p",{parentName:"li"},"This command starts the Tailcall server in a Docker container. Similar to the homebrew installation, it exposes a the graphQL endpoint on port 8080."))),(0,i.kt)("h2",{id:"verification"},"Verification"),(0,i.kt)("p",null,"You should be now able to run the cli with the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tc\n")),(0,i.kt)("p",null,"Checkout the documentation for ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/intro/cli"},"tc"))," for actual usage."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Once the installation is compeleted, you should verify the if the version printed on running ",(0,i.kt)("inlineCode",{parentName:"p"},"tc")," command match the actual installed versions.")))}k.isMDXComponent=!0},2578:e=>{e.exports={yT:"v0.13.0"}}}]);