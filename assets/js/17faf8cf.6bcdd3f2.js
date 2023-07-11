"use strict";(self.webpackChunktailcall_run=self.webpackChunktailcall_run||[]).push([[364],{5733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var l=a(7462),n=a(7294),i=a(3905),r=(a(614),a(2578));const s={title:"Installation & Updates",sidebar_position:2},o=void 0,p={unversionedId:"guides/installation",id:"guides/installation",title:"Installation & Updates",description:"To install Tailcall, ensure that your system is equipped with Java 20 or a newer version. You can refer to the setup instructions provided by [sdkman] to correctly install and configure Java on your system.",source:"@site/docs/guides/installation.mdx",sourceDirName:"guides",slug:"/guides/installation",permalink:"/docs/guides/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation & Updates",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tackling N + 1",permalink:"/docs/guides/n+1"}},c={},u=[{value:"Homebrew",id:"homebrew",level:2},{value:"Curl",id:"curl",level:2}],d={toc:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To install Tailcall, ensure that your system is equipped with ",(0,i.kt)("strong",{parentName:"p"},"Java 20")," or a newer version. You can refer to the setup instructions provided by ",(0,i.kt)("a",{parentName:"p",href:"https://sdkman.io/jdks#tem"},"sdkman")," to correctly install and configure Java on your system."),(0,i.kt)(n.Fragment,null,"You can install the latest version - ",(0,i.kt)("b",null," ",r.yT),", by using one of the following methods:"),(0,i.kt)("h2",{id:"homebrew"},"Homebrew"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't already have Homebrew installed, you can find the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Tailcall repository to Homebrew by running the following command in your terminal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap tailcallhq/tailcall\nbrew install tailcall\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that Tailcall is installed correctly by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tc\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To start the Tailcall server, execute the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tc-server\n")),(0,i.kt)("p",{parentName:"li"},"This will initiate the server at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/graphql"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once installation is done, ",(0,i.kt)("strong",{parentName:"p"},"upgrades")," can be performed via:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew upgrade tailcall\n")))),(0,i.kt)("h2",{id:"curl"},"Curl"),(0,i.kt)("p",null,"Follow the steps below to manually install the cli on your system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://raw.githubusercontent.com/tailcallhq/tailcall/main/install.sh | bash -s -- {versionData.tag_name}\n")),(0,i.kt)("p",null,"This command fetches and executes the Tailcall installation script. The installed files are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.tailcall")," directory."),(0,i.kt)("p",null,"Upon completion of the installation, extend your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.tailcall/bin")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.tailcall/bin\n")))}h.isMDXComponent=!0},2578:e=>{e.exports={yT:"v0.5.0"}}}]);