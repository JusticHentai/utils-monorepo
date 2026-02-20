import{j as o}from"./jsx-runtime-u17CrQMm.js";/* empty css              */const s=()=>({input:"[3,9,20,null,null,15,7]",output:3,explanation:"最大深度为 3（根节点到叶子节点的最长路径）",visual:`
        3        <- 深度 1
       / \\
      9  20      <- 深度 2
        /  \\
       15   7    <- 深度 3
    `}),{action:n}=__STORYBOOK_MODULE_ACTIONS__,t=()=>o.jsx("div",{children:o.jsx("div",{className:"button",onClick:()=>{const r=s();n("normal")(r)},children:"normal"})});t.__docgenInfo={description:"",methods:[],displayName:"maxDepthDemo"};const c={title:"learn-utils/leetcode/maxDepth",component:t,parameters:{layout:"centered"},argTypes:{}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const i=["Demo"];export{e as Demo,i as __namedExportsOrder,c as default};
