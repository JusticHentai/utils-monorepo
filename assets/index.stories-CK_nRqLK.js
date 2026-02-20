import{j as r}from"./jsx-runtime-u17CrQMm.js";/* empty css              */const s=()=>({input:"[3,9,20,null,null,15,7]",output:[[3],[9,20],[15,7]],explanation:"按层级从上到下、从左到右遍历",visual:`
        3
       / \\
      9  20
        /  \\
       15   7
    `}),{action:n}=__STORYBOOK_MODULE_ACTIONS__,o=()=>r.jsx("div",{children:r.jsx("div",{className:"button",onClick:()=>{const t=s();n("normal")(t)},children:"normal"})});o.__docgenInfo={description:"",methods:[],displayName:"levelOrderDemo"};const c={title:"learn-utils/leetcode/levelOrder",component:o,parameters:{layout:"centered"},argTypes:{}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const m=["Demo"];export{e as Demo,m as __namedExportsOrder,c as default};
