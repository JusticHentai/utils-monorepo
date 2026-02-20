import{j as t}from"./jsx-runtime-u17CrQMm.js";/* empty css              */const a=()=>({algorithm:"快慢指针（Floyd 判圈算法）",description:`
    快慢指针法：
    - slow 每次走 1 步
    - fast 每次走 2 步
    - 如果有环，fast 最终会追上 slow
    - 如果无环，fast 会先到达 null
  `,example1:{input:"[3,2,0,-4], pos=1",output:!0,explanation:"链表中有一个环，尾部连接到索引 1"},example2:{input:"[1,2], pos=0",output:!0,explanation:"链表中有一个环，尾部连接到索引 0"},example3:{input:"[1], pos=-1",output:!1,explanation:"链表中没有环"}}),{action:r}=__STORYBOOK_MODULE_ACTIONS__,s=()=>t.jsx("div",{children:t.jsx("div",{className:"button",onClick:()=>{const o=a();r("normal")(o)},children:"normal"})});s.__docgenInfo={description:"",methods:[],displayName:"hasCycleDemo"};const p={title:"learn-utils/leetcode/hasCycle",component:s,parameters:{layout:"centered"},argTypes:{}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const c=["Demo"];export{e as Demo,c as __namedExportsOrder,p as default};
