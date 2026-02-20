import{j as e}from"./jsx-runtime-u17CrQMm.js";/* empty css              */import{g as l}from"./index-Be32pr3j.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,h=n=>()=>{const t=document.getElementById(n);if(!t){s("错误")("容器元素不存在");return}const i=t.querySelector("ul"),a=t.querySelector("#target-li")||t.querySelectorAll("li")[1];if(!i||!a){s("错误")("目标元素不存在");return}s("DOM 层级结构")(`
    容器
    └── ul
        ├── li (列表项 1)
        ├── li#target-li (列表项 2) ← 目标元素
        └── li (列表项 3)
  `);const o=l(a);s("li2 的 XPath")(o)},{action:r}=__STORYBOOK_MODULE_ACTIONS__,m=n=>()=>{const t=document.getElementById(n);if(!t){r("错误")("容器元素不存在");return}const i=t.querySelector("span");if(!i){r("错误")("子元素不存在");return}r("DOM 层级结构")(`
    容器#${n} ← 有 ID
    └── span (子元素)
  `);const a=l(t);r("带 ID 元素 XPath")(a);const o=l(i);r("子元素 XPath")(o)},d=()=>e.jsxs("div",{children:[e.jsx("div",{className:"area",children:e.jsx("div",{id:"xpath-basic-container",children:e.jsxs("ul",{children:[e.jsx("li",{children:"列表项 1"}),e.jsx("li",{id:"target-li",children:"列表项 2 (目标元素)"}),e.jsx("li",{children:"列表项 3"})]})})}),e.jsx("div",{className:"button",onClick:h("xpath-basic-container"),children:"获取普通元素 XPath"}),e.jsx("div",{className:"area",children:e.jsx("div",{id:"xpath-id-container",children:e.jsx("span",{children:"子元素"})})}),e.jsx("div",{className:"button",onClick:m("xpath-id-container"),children:"获取带 ID 元素 XPath"})]});d.__docgenInfo={description:"",methods:[],displayName:"GetXPathDemo"};const _={title:"element-utils/getXPath",component:d,parameters:{layout:"centered"},argTypes:{}},c={};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};const j=["Demo"];export{c as Demo,j as __namedExportsOrder,_ as default};
