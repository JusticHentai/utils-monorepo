import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import isElementChildren from '../../../packages/element-utils/src/isElementChildren'

const basicDemo = () => {
  const parent = document.body
  const child = document.createElement('div')
  parent.appendChild(child)

  const result = isElementChildren(parent, child)

  parent.removeChild(child)

  action('是子元素')({ isChildren: result })
}

export default basicDemo
`,o=`import { action } from 'storybook/actions'
import isElementChildren from '../../../packages/element-utils/src/isElementChildren'

const notChildDemo = () => {
  const element1 = document.createElement('div')
  const element2 = document.createElement('span')

  const result = isElementChildren(element1, element2)

  action('不是子元素')({ isChildren: result })
}

export default notChildDemo
`;function l(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"iselementchildren",children:"isElementChildren"}),`
`,n.jsx(e.p,{children:"判断某个元素是否是另一个元素的子元素。"}),`
`,n.jsx(e.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(i,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"非子元素判断",children:"非子元素判断"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"element",children:"element"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Element"})]}),`
`,n.jsx(e.li,{children:"描述：父元素"}),`
`]}),`
`,n.jsx(e.h3,{id:"children",children:"children"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Element"})]}),`
`,n.jsx(e.li,{children:"描述：要判断的子元素"}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"描述：如果 children 是 element 的子元素返回 true，否则返回 false"}),`
`]})]})}function p(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{p as default};
