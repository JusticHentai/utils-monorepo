import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import mergeStyle from '../../../packages/element-utils/src/mergeStyle'

const basicDemo = () => {
  const style1 = { width: '100px', height: '100px' }
  const style2 = { width: '200px', position: 'absolute' as const }

  const result = mergeStyle(style1, style2)

  action('样式1')(style1)
  action('样式2')(style2)
  action('合并结果（后者覆盖前者）')(result)
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import mergeStyle from '../../../packages/element-utils/src/mergeStyle'

const arrayDemo = () => {
  const style1 = { width: '100px' }
  const styleArray = [{ height: '100px' }, { color: 'red' }]

  const result = mergeStyle(style1, styleArray, null, undefined)

  action('样式1')(style1)
  action('样式数组')(styleArray)
  action('null 和 undefined')('会被忽略')
  action('合并结果')(result)
}

export default arrayDemo
`;function r(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"mergestyle",children:"mergeStyle"}),`
`,n.jsx(e.p,{children:"合并多个 React CSSProperties 样式对象。"}),`
`,n.jsx(e.h2,{id:"合并样式对象",children:"合并样式对象"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"合并数组样式",children:"合并数组样式"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"args",children:"args"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Args[]"})]}),`
`,n.jsxs(e.li,{children:["描述：可接受多种类型的参数",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CSSProperties"}),"：样式对象"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"CSSProperties[]"}),"：样式对象数组"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"null | undefined | false"}),"：会被过滤掉"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"CSSProperties"})]}),`
`,n.jsx(e.li,{children:"描述：合并后的样式对象，后面的样式会覆盖前面的同名属性"}),`
`]})]})}function p(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{p as default};
