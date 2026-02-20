import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import type BaseFunction from '../../../packages/js-utils/src/BaseFunction'

const normalDemo = () => {
  const add: BaseFunction<[number, number], number> = (a, b) => {
    return a + b
  }
  const res = add(1, 2)
  action('BaseFunction 返回结果')(res)
}

export default normalDemo
`,c=`/**
 * 基础函数类型
 */
type BaseFunction<Params extends any[] = any[], Return = any> = (
  ...params: Params
) => Return

export default BaseFunction
`;function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"basefunction",children:"BaseFunction"}),`
`,n.jsx(e.p,{children:"BaseFunction 是一个用于表示基础函数的类型。"}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"泛型参数",children:"泛型参数"}),`
`,n.jsx(e.h3,{id:"params",children:"Params"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsxs(e.li,{children:["默认值：",n.jsx(e.code,{children:"any[]"})]}),`
`,n.jsx(e.li,{children:"描述：函数参数类型数组"}),`
`]}),`
`,n.jsx(e.h3,{id:"return",children:"Return"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"any"})]}),`
`,n.jsxs(e.li,{children:["默认值：",n.jsx(e.code,{children:"any"})]}),`
`,n.jsx(e.li,{children:"描述：函数返回值类型"}),`
`]})]})}function x(r={}){const{wrapper:e}={...t(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{x as default};
