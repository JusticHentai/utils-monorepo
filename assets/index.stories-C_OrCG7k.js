import{j as r}from"./jsx-runtime-u17CrQMm.js";/* empty css              */const s=()=>({input:"[4,2,7,1,3,6,9]",output:"[4,7,2,9,6,3,1]",explanation:"交换每个节点的左右子树",visualBefore:`
        4
       / \\
      2   7
     / \\ / \\
    1  3 6  9
    `,visualAfter:`
        4
       / \\
      7   2
     / \\ / \\
    9  6 3  1
    `}),{action:n}=__STORYBOOK_MODULE_ACTIONS__,o=()=>r.jsx("div",{children:r.jsx("div",{className:"button",onClick:()=>{const t=s();n("normal")(t)},children:"normal"})});o.__docgenInfo={description:"",methods:[],displayName:"invertTreeDemo"};const c={title:"learn-utils/leetcode/invertTree",component:o,parameters:{layout:"centered"},argTypes:{}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const m=["Demo"];export{e as Demo,m as __namedExportsOrder,c as default};
