"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8791],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7582:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r,o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],s={},u="Episode 7: Worldview",p={unversionedId:"getting-started/tutorials/season-2-scaling-out-and-up/episode07",id:"getting-started/tutorials/season-2-scaling-out-and-up/episode07",title:"Episode 7: Worldview",description:"Way up here.",source:"@site/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode07.md",sourceDirName:"getting-started/tutorials/season-2-scaling-out-and-up",slug:"/getting-started/tutorials/season-2-scaling-out-and-up/episode07",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode07",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode07.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 6: Statistics Redux",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode06"},next:{title:"Episode 8: Autopilot",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot"}},c=[{value:"Way up here.",id:"way-up-here",children:[],level:2}],d=(r="TutorialsLink",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"episode-7-worldview"},"Episode 7: Worldview"),(0,i.kt)("h2",{id:"way-up-here"},"Way up here."),(0,i.kt)("p",null,"This episode shows how you can use a notebook to setup a simple dashboard to monitor all of your Metaflow flows."),(0,i.kt)("p",null,"You can find the tutorial code on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/07-worldview"},"GitHub")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Showcasing:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The metaflow ",(0,i.kt)("a",{parentName:"li",href:"../../../metaflow/client"},"Client API"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Before playing this episode:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"python -m pip install notebook")),(0,i.kt)("li",{parentName:"ol"},"This tutorial requires access to compute and storage resources on AWS, which can be configured by",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Following the instructions ",(0,i.kt)("a",{parentName:"li",href:"https://outerbounds.com/docs/admin/metaflow-on-aws/deployment-guide"},"here")," or"),(0,i.kt)("li",{parentName:"ol"},"Requesting a ",(0,i.kt)("a",{parentName:"li",href:"../../../metaflow-on-aws/metaflow-sandbox"},"sandbox"),".")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To play this episode:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"jupyter-notebook 07-worldview/worldview.ipynb")),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"worldview.ipynb"))," in your remote Sagemaker notebook")),(0,i.kt)(d,{link:"../",mdxType:"TutorialsLink"}))}f.isMDXComponent=!0}}]);