import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import React, { ReactNode } from 'react'
import isPureElement from '../isPureElement'

/**
 * 合并子元素中的纯元素
 * 并给最终 string 类型加上 span
 */
const mergeChildren = (children?: ReactNode) => {
  const childrenList: ReactNode[] = []

  let isPrevChildPure = false

  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = isPureElement(child)

    if (isCurrentChildPure && isPrevChildPure) {
      const lastIndex = childrenList.length - 1
      const lastChild = childrenList[lastIndex]

      childrenList[lastIndex] = \`\${lastChild}\${child}\`
    } else {
      childrenList.push(child)
    }

    isPrevChildPure = isCurrentChildPure
  })

  return React.Children.map(childrenList, (child) =>
    typeof child === 'string' ? <span>{child}</span> : child
  )
}

export default mergeChildren
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"mergechildren",children:"mergeChildren"}),`
`,n.jsx(e.p,{children:"mergeChildren 是一个用于合并 React 子元素中相邻纯元素（string/number）的函数。"}),`
`,n.jsx(e.h2,{id:"源码",children:"源码"}),`
`,n.jsx(d,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"children",children:"children"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"ReactNode"})]}),`
`,n.jsx(e.li,{children:"描述：React 子元素"}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"ReactNode[]"})]}),`
`,n.jsx(e.li,{children:"描述：合并后的子元素数组，相邻的纯文本会被合并，最终的字符串会被包裹在 span 中"}),`
`]}),`
`,n.jsx(e.h2,{id:"特点",children:"特点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"合并相邻的纯文本节点"}),`
`,n.jsx(e.li,{children:"最终的字符串类型会被包裹在 span 标签中"}),`
`,n.jsx(e.li,{children:"使用 React.Children 遍历子元素"}),`
`,n.jsx(e.li,{children:"适用于优化 React 渲染性能"}),`
`]})]})}function u(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{u as default};
