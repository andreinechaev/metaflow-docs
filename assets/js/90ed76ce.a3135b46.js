"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6913],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},654:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r,a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],s={},p="Episode 1: Playlist",u={unversionedId:"getting-started/tutorials/season-1-the-local-experience/episode01",id:"getting-started/tutorials/season-1-the-local-experience/episode01",title:"Episode 1: Playlist",description:"Let's build you a movie playlist.",source:"@site/docs/getting-started/tutorials/season-1-the-local-experience/episode01.md",sourceDirName:"getting-started/tutorials/season-1-the-local-experience",slug:"/getting-started/tutorials/season-1-the-local-experience/episode01",permalink:"/getting-started/tutorials/season-1-the-local-experience/episode01",editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/getting-started/tutorials/season-1-the-local-experience/episode01.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 0: Hello World",permalink:"/getting-started/tutorials/season-1-the-local-experience/episode00"},next:{title:"Episode 2: Statistics",permalink:"/getting-started/tutorials/season-1-the-local-experience/episode02"}},c=[{value:"Let&#39;s build you a movie playlist.",id:"lets-build-you-a-movie-playlist",children:[],level:2}],d=(r="TutorialsLink",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),m={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"episode-1-playlist"},"Episode 1: Playlist"),(0,o.kt)("h2",{id:"lets-build-you-a-movie-playlist"},"Let's build you a movie playlist."),(0,o.kt)("p",null,"This flow loads a movie metadata CSV file and builds a playlist for your favorite movie genre. Everything in Metaflow is versioned, so you can run it multiple times and view all the historical playlists with the Metaflow client in a Notebook."),(0,o.kt)("p",null,"You can find the tutorial code on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/01-playlist"},"GitHub")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Showcasing:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Including external files with ",(0,o.kt)("a",{parentName:"li",href:"../../../metaflow/data#data-in-local-files"},"IncludeFile"),"."),(0,o.kt)("li",{parentName:"ul"},"Basic Metaflow ",(0,o.kt)("a",{parentName:"li",href:"../../../metaflow/basics#how-to-define-parameters-for-flows"},"Parameters"),"."),(0,o.kt)("li",{parentName:"ul"},"Running workflow ",(0,o.kt)("a",{parentName:"li",href:"../../../metaflow/basics#branch"},"branches")," in parallel and joining results."),(0,o.kt)("li",{parentName:"ul"},"Using the Metaflow ",(0,o.kt)("a",{parentName:"li",href:"../../../metaflow/client"},"Client API")," in a Notebook.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before playing this episode:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"python -m pip install notebook"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To play this episode:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"python 01-playlist/playlist.py show")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"python 01-playlist/playlist.py run")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"python 01-playlist/playlist.py run --genre comedy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"jupyter-notebook 01-playlist/playlist.ipynb"))),(0,o.kt)(d,{link:"../",mdxType:"TutorialsLink"}))}f.isMDXComponent=!0}}]);