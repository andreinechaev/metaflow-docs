"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9454],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={},s="Episode 0: Hello World",p={unversionedId:"v/r/getting-started/tutorials/season-1-the-local-experience/episode00",id:"v/r/getting-started/tutorials/season-1-the-local-experience/episode00",title:"Episode 0: Hello World",description:"Metaflow says Hi!",source:"@site/docs/v/r/getting-started/tutorials/season-1-the-local-experience/episode00.md",sourceDirName:"v/r/getting-started/tutorials/season-1-the-local-experience",slug:"/v/r/getting-started/tutorials/season-1-the-local-experience/episode00",permalink:"/v/r/getting-started/tutorials/season-1-the-local-experience/episode00",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/getting-started/tutorials/season-1-the-local-experience/episode00.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Season 1: The Local Experience",permalink:"/v/r/getting-started/tutorials/season-1-the-local-experience/"},next:{title:"Episode 1: Playlist",permalink:"/v/r/getting-started/tutorials/season-1-the-local-experience/episode01"}},c=[{value:"Metaflow says Hi!",id:"metaflow-says-hi",children:[{value:"Showcasing:",id:"showcasing",children:[],level:3},{value:"To play this episode:",id:"to-play-this-episode",children:[],level:3}],level:2}],u={toc:c};function f(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"episode-0-hello-world"},"Episode 0: Hello World"),(0,l.kt)("h2",{id:"metaflow-says-hi"},"Metaflow says Hi!"),(0,l.kt)("p",null,"This flow is a simple linear workflow that verifies your installation by printing out ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Metaflow says: Hi!")),"' to the terminal."),(0,l.kt)("h3",{id:"showcasing"},"Showcasing:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/v/r/metaflow/basics"},"Basics of Metaflow"),"."),(0,l.kt)("li",{parentName:"ul"},"Metaflow ",(0,l.kt)("a",{parentName:"li",href:"../../../metaflow/basics#linear"},"Step"),".")),(0,l.kt)("h3",{id:"to-play-this-episode"},"To play this episode:"),(0,l.kt)("p",null,"If you haven't yet pulled the tutorials to your current working directory, you can follow the instructions ",(0,l.kt)("a",{parentName:"p",href:"../#pull-tutorials"},"here"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"cd tutorials/00-helloworld")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Rscript helloworld.R show")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Rscript helloworld.R run"))),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(940).Z,width:"986",height:"272"})),(0,l.kt)("p",null,"The flow script below prints 'Hi' in Metaflow. Run this flow to validate that Metaflow is installed correctly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="helloworld.R"',title:'"helloworld.R"'},'library(metaflow)\n\n# This is the \'start\' step. All flows must have a step named\n# \'start\' that is the first step in the flow.\nstart <- function(self){\n    print("HelloFlow is starting.")\n}\n\n# A step for metaflow to introduce itself.\nhello <- function(self){\n    print("Metaflow says: Hi!")\n}\n\n# This is the \'end\' step. All flows must have an \'end\' step,\n# which is the last step in the flow.\nend <- function(self){\n     print("HelloFlow is all done.")\n}\n\nmetaflow("HelloFlow") %>%\n    step(step = "start",\n         r_function = start,\n         next_step = "hello") %>%\n    step(step = "hello",\n         r_function = hello,\n         next_step = "end") %>%\n    step(step = "end",\n         r_function = end) %>%\n    run()\n')))}f.isMDXComponent=!0},940:function(e,t,n){t.Z=n.p+"assets/images/tutorial-episode-0-47900650a6659c1bef78702ba5f3be99.png"}}]);