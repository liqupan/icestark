(self.webpackChunksite=self.webpackChunksite||[]).push([[123],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1424:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={order:1},c={unversionedId:"guide/use-child/react",id:"guide/use-child/react",isDocsHomePage:!1,title:"React \u5fae\u5e94\u7528\u63a5\u5165",description:"\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa",source:"@site/docs/guide/use-child/react.md",sourceDirName:"guide/use-child",slug:"/guide/use-child/react",permalink:"/docs/guide/use-child/react",editUrl:"https://github.com/ice-lab/icestark/tree/gh-pages/docs/guide/use-child/react.md",version:"current",frontMatter:{order:1},sidebar:"guide",previous:{title:"Vue \u4e3b\u5e94\u7528\u63a5\u5165",permalink:"/docs/guide/use-layout/vue"},next:{title:"Vue \u5fae\u5e94\u7528\u63a5\u5165",permalink:"/docs/guide/use-child/vue"}},u=[{value:"\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa",id:"\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa",children:[]},{value:"\u5df2\u6709 React \u9879\u76ee\u6539\u9020\u4e3a\u5fae\u5e94\u7528",id:"\u5df2\u6709-react-\u9879\u76ee\u6539\u9020\u4e3a\u5fae\u5e94\u7528",children:[{value:"1. \u5e94\u7528\u5165\u53e3\u9002\u914d",id:"1-\u5e94\u7528\u5165\u53e3\u9002\u914d",children:[]},{value:"2. \u5b9a\u4e49\u57fa\u51c6\u8def\u7531",id:"2-\u5b9a\u4e49\u57fa\u51c6\u8def\u7531",children:[]},{value:"3. \u6784\u5efa\u4e3a UMD \u4ea7\u7269",id:"3-\u6784\u5efa\u4e3a-umd-\u4ea7\u7269",children:[]}]}],p={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa"},"\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8be5\u5b98\u65b9\u811a\u624b\u67b6\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://ice.work/"},"icejs")," \u6846\u67b6\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init ice icestark-child @icedesign/stark-child-scaffold\n")),(0,o.kt)("h2",{id:"\u5df2\u6709-react-\u9879\u76ee\u6539\u9020\u4e3a\u5fae\u5e94\u7528"},"\u5df2\u6709 React \u9879\u76ee\u6539\u9020\u4e3a\u5fae\u5e94\u7528"),(0,o.kt)("h3",{id:"1-\u5e94\u7528\u5165\u53e3\u9002\u914d"},"1. \u5e94\u7528\u5165\u53e3\u9002\u914d"),(0,o.kt)("p",null,"\u5c06 React \u5e94\u7528\u6539\u9020\u4e3a\u5fae\u5e94\u7528\uff0c\u53ea\u9700\u8981\u5bfc\u51fa\u5bf9\u5e94\u7684\u751f\u547d\u5468\u671f\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import ReactDOM from 'react-dom';\nimport { isInIcestark, setLibraryName } from '@ice/stark-app';\nimport App from './App';\n\nexport function mount(props) {\n  ReactDOM.render(<App {...customProps} />, props.container);\n}\n\nexport function unmount(props) {\n  ReactDOM.unmountComponentAtNode(props.container);\n}\n\n// \u6ce8\u610f\uff1a`setLibraryName` \u7684\u5165\u53c2\u9700\u8981\u4e0e webpack \u5de5\u7a0b\u914d\u7f6e\u7684 output.library \u4fdd\u6301\u4e00\u81f4\nsetLibraryName('microApp');\n\nif (!isInIcestark()) {\n  ReactDOM.render(<App />, document.getElementById('ice-container'));\n}\n")),(0,o.kt)("h3",{id:"2-\u5b9a\u4e49\u57fa\u51c6\u8def\u7531"},"2. \u5b9a\u4e49\u57fa\u51c6\u8def\u7531"),(0,o.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u6ce8\u518c\u5fae\u5e94\u7528\u65f6\u4f1a\u4e3a\u6bcf\u4e2a\u5fae\u5e94\u7528\u5206\u914d\u4e00\u4e2a\u57fa\u51c6\u8def\u7531\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"/seller"),"\uff0c\u5f53\u524d\u5fae\u5e94\u7528\u7684\u6240\u6709\u8def\u7531\u9700\u8981\u5b9a\u4e49\u5728\u57fa\u51c6\u8def\u7531\u4e4b\u4e0b\uff0c\u793e\u533a\u5e38\u89c1\u7684\u8def\u7531\u5e93\u90fd\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u975e\u5e38\u7b80\u5355\u7684\u5b9e\u73b0\u8be5\u529f\u80fd\u3002\u5fae\u5e94\u7528\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"getBasename()")," API \u83b7\u53d6\u81ea\u8eab\u7684\u57fa\u51c6\u8def\u7531\u3002"),(0,o.kt)("p",null,"React \u9879\u76ee\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';\n+import { getBasename } from '@ice/stark-app';\n\nexport default () => {\n  return (\n+   <Router basename={getBasename()}>\n      <Switch>\n        // ...\n      </Switch>\n    </Router>\n  );\n};\n")),(0,o.kt)("h3",{id:"3-\u6784\u5efa\u4e3a-umd-\u4ea7\u7269"},"3. \u6784\u5efa\u4e3a UMD \u4ea7\u7269"),(0,o.kt)("p",null,"\u5165\u53e3\u6587\u4ef6\u901a\u8fc7\u5bfc\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"mount"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"unmount")," \u7b49\u6807\u51c6\u751f\u547d\u5468\u671f\u540e\uff0c\u9700\u8981\u914d\u7f6e\u5de5\u7a0b\u4e0a\u7684\u6539\u9020\uff0c\u624d\u80fd\u6700\u7ec8\u5bfc\u51fa UMD \u6807\u51c6\u7684\u5fae\u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u4ee5 webpack \u5de5\u7a0b\u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    // \u8bbe\u7f6e\u6a21\u5757\u5bfc\u51fa\u89c4\u8303\u4e3a umd\n    libraryTarget: 'umd',\n    // \u53ef\u9009\uff0c\u8bbe\u7f6e\u6a21\u5757\u5728 window \u4e0a\u66b4\u9732\u7684\u540d\u79f0\n    library: 'microApp',\n  }\n}\n")))}l.isMDXComponent=!0}}]);