"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6875],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8473:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a,o=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],s={},p="Episode 6: Statistics Redux",c={unversionedId:"getting-started/tutorials/season-2-scaling-out-and-up/episode06",id:"getting-started/tutorials/season-2-scaling-out-and-up/episode06",title:"Episode 6: Statistics Redux",description:"Computing in the Cloud.",source:"@site/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode06.md",sourceDirName:"getting-started/tutorials/season-2-scaling-out-and-up",slug:"/getting-started/tutorials/season-2-scaling-out-and-up/episode06",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode06",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode06.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 5: Hello AWS",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode05"},next:{title:"Episode 7: Worldview",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode07"}},u=[{value:"Computing in the Cloud.",id:"computing-in-the-cloud",children:[],level:2}],d=(a="TutorialsLink",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"episode-6-statistics-redux"},"Episode 6: Statistics Redux"),(0,r.kt)("h2",{id:"computing-in-the-cloud"},"Computing in the Cloud."),(0,r.kt)("p",null,"This example revisits ",(0,r.kt)("a",{parentName:"p",href:"../season-1-the-local-experience/episode02"},"Episode 02-statistics: Is this Data Science?"),". With Metaflow, you don't need to make any code changes to scale-up your flow by running on remote compute. In this example, we re-run the ",(0,r.kt)("inlineCode",{parentName:"p"},"stats.py")," workflow adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--with batch")," command line argument. This instructs Metaflow to run all your steps on AWS batch without changing any code. You can control the behavior with additional arguments, like ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers"),(0,r.kt)("strong",{parentName:"p"},".")," For this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"max-workers")," is used to limit the number of parallel genre-specific statistics computations. You can then access the data artifacts ","(","even the local CSV file",")"," from anywhere because the data is being stored in AWS S3."),(0,r.kt)("p",null,"This tutorial uses ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas")," which may not be available in your environment. Use the 'conda' package manager with the ",(0,r.kt)("inlineCode",{parentName:"p"},"conda-forge")," channel added to run this tutorial in any environment"),(0,r.kt)("p",null,"You can find the tutorial code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/06-statistics-redux"},"GitHub")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Showcasing:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--with batch")," command line option"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--max-workers")," command line option"),(0,r.kt)("li",{parentName:"ul"},"Accessing data locally or remotely")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before playing this episode:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install pandas")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install notebook")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"python -m pip install matplotlib")),(0,r.kt)("li",{parentName:"ol"},"This tutorial requires access to compute and storage resources on AWS, which can be configured by",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Following the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://outerbounds.com/docs/admin/metaflow-on-aws/deployment-guide"},"here")," or"),(0,r.kt)("li",{parentName:"ol"},"Requesting a ",(0,r.kt)("a",{parentName:"li",href:"../../../metaflow-on-aws/metaflow-sandbox"},"sandbox"),"."))),(0,r.kt)("li",{parentName:"ol"},"This tutorial requires the ",(0,r.kt)("inlineCode",{parentName:"li"},"conda")," package manager to be installed with the conda-forge channel added.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Download Miniconda at ",(0,r.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"https://docs.conda.io/en/latest/miniconda.html")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"conda config --add channels conda-forge"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To play this episode:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},'python 02-statistics/stats.py --environment conda run --with batch --max-workers 4 --with conda:python=3.7,libraries="{pandas:0.24.2}"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"jupyter-notebook 06-statistics-redux/stats.ipynb")),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"stats.ipynb"))," in your remote Sagemaker notebook")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note for ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Python 2.7"))," users: when opening the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"stats.ipynb"))," in a Sagemaker notebook you will need to change the python kernel by clicking ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Kernel -",">"," Change Kernel -",">"," conda_python2"))," from the pull down menu. This ensures the Pandas dataframe will deserialize correctly."))),(0,r.kt)(d,{link:"../",mdxType:"TutorialsLink"}))}h.isMDXComponent=!0}}]);