import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import isPureElement from '../../../packages/element-utils/src/isPureElement'

const stringDemo = () => {
  const result = isPureElement('Hello World')
  action('字符串是纯元素')({ isPure: result, type: 'string' })
}

export default stringDemo
`,l=`import { action } from 'storybook/actions'
import isPureElement from '../../../packages/element-utils/src/isPureElement'

const numberDemo = () => {
  const result = isPureElement(123)
  action('数字是纯元素')({ isPure: result, type: 'number' })
}

export default numberDemo
`,c=`import { createElement } from 'react'
import { action } from 'storybook/actions'
import isPureElement from '../../../packages/element-utils/src/isPureElement'

const reactElementDemo = () => {
  const element = createElement('div', null, 'Hello')
  const result = isPureElement(element)
  action('React 元素不是纯元素')({ isPure: result, type: 'ReactElement' })
}

export default reactElementDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"ispureelement",children:"isPureElement"}),`
`,e.jsx(n.p,{children:"判断 React 子元素是否是纯元素（string 或 number）。"}),`
`,e.jsx(n.h2,{id:"字符串判断",children:"字符串判断"}),`
`,e.jsx(r,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"数字判断",children:"数字判断"}),`
`,e.jsx(r,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"react-元素判断",children:"React 元素判断"}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"el",children:"el"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"ReactNode"})]}),`
`,e.jsx(n.li,{children:"描述：要判断的 React 子元素"}),`
`]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"el is string | number"})]}),`
`,e.jsx(n.li,{children:"描述：如果元素是 string 或 number 类型返回 true，否则返回 false"}),`
`]})]})}function x(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{x as default};
