(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[4546],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return n?i.createElement(m,o(o({ref:t},h),{},{components:n})):i.createElement(m,o({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1656:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var i=n(2122),r=n(9756),s=(n(7294),n(3905)),o=["components"],a={id:"s2",title:"S2",sidebar_label:"S2",slug:"/comparisons/s2"},l={unversionedId:"comparisons/s2",id:"comparisons/s2",isDocsHomePage:!1,title:"S2",description:"S2, like H3, implements an open source, hierarchical, discrete, and global grid system. The systems share a number of similarities, including the use of 64 bit integers as cell indexes, making it very efficient to use both of them in big data systems.",source:"@site/docs/comparisons/s2.md",sourceDirName:"comparisons",slug:"/comparisons/s2",permalink:"/docs/next/comparisons/s2",editUrl:"https://github.com/uber/h3/edit/master/website/docs/comparisons/s2.md",version:"current",sidebar_label:"S2",frontMatter:{id:"s2",title:"S2",sidebar_label:"S2",slug:"/comparisons/s2"},sidebar:"someSidebar",previous:{title:"Indexing",permalink:"/docs/next/highlights/indexing"},next:{title:"Geohash",permalink:"/docs/next/comparisons/geohash"}},c=[{value:"Neighbors",id:"neighbors",children:[]},{value:"Subdivision",id:"subdivision",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Links",id:"links",children:[]},{value:"S2 vs H3 Comparison",id:"s2-vs-h3-comparison",children:[]}],h={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://s2geometry.io/"},"S2"),", like H3, implements an open source, hierarchical, discrete, and global grid system. The systems share a number of similarities, including the use of 64 bit integers as cell indexes, making it very efficient to use both of them in big data systems."),(0,s.kt)("p",null,"One of the main differences between S2 and H3 is the choice of cell shape. S2 uses square cells while H3 uses hexagonal cells. This leads to several important differences."),(0,s.kt)("h2",{id:"neighbors"},"Neighbors"),(0,s.kt)("p",null,"Squares have two classes of neighbors: those that they share an edge with, and those that they share a point with. This can complicate analysis of moving things in the real world, because they are very unlikely to move in a way aligned with the grid. Instead, the analyst will need to account for different types of neighbors."),(0,s.kt)("p",null,"Hexagons have only one class of neighbor, that they share an edge with. This makes running convolutions and smoothing over the data much simpler, since only the grid distance (as opposed to the geographic distance) from a cell needs to be considered."),(0,s.kt)("h2",{id:"subdivision"},"Subdivision"),(0,s.kt)("p",null,"S2 uses an ",(0,s.kt)("em",{parentName:"p"},"aperture 4")," system where each cell is subdivided into 4 finer, child cells. Squares subdivide exactly into 4 child squares. This means that when indexing a point to an S2 cell, and then truncating to the parent S2 cell, there is no possibility that the point is not contained in the bounds of the parent cell."),(0,s.kt)("p",null,"This differs from H3 where the same operation is approximate. This is the case because hexagons do not exactly subdivide into 7 child hexagons."),(0,s.kt)("h2",{id:"visualization"},"Visualization"),(0,s.kt)("p",null,"S2 cells are squares in the system's projection. When those cells are visualized on a map using a projection like the Web Mercator projection, the cells can subjectively appear distorted (i.e. as a quadrilateral rather than square)."),(0,s.kt)("p",null,"H3 cells have the same non-alignment with the map projection, but in our experience the effect is less noticeable to viewers for hexagons."),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1Hl4KapfAENAOf4gv-pSngKwvS_jwNVHRPZTTDzXXn6Q/edit"},"Geometry on the Sphere: Google's S2 Library"))),(0,s.kt)("h2",{id:"s2-vs-h3-comparison"},"S2 vs H3 Comparison"),(0,s.kt)("iframe",{width:"100%",height:"500px",src:"https://studio.unfolded.ai/public/851dc25a-c8c8-4f20-96b8-ea47b3e3e9a7/embed",frameborder:"0",allowfullscreen:!0}),(0,s.kt)("p",null,"S2 on the left, H3 on the right. Data: ",(0,s.kt)("a",{parentName:"p",href:"https://data.sfgov.org/City-Infrastructure/Street-Tree-List/tkzw-k3nq"},"San Francisco Street Tree List")))}u.isMDXComponent=!0}}]);