import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import pick from '../../../packages/js-utils/src/pick'

const basicDemo = () => {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  // 基本选取
  action('pick - 选取 a,c')(pick(object, ['a', 'c']))

  // 选取单个属性
  action('pick - 选取单个 a')(pick(object, ['a']))

  // 不存在的 key 被忽略
  action('pick - 含不存在的key')(pick(object, ['a', 'x' as any]))
}

export default basicDemo
`;function e(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c.h1,{id:"pick",children:"pick"}),`
`,n.jsx(c.p,{children:"创建一个仅包含指定属性的对象。"}),`
`,n.jsx(c.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"pick"})," 函数用于从对象中选取指定的属性创建新对象。"]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"与 omit 的对比"}),"："]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"pick"})," - 选择要保留的属性"]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"omit"})," - 选择要排除的属性"]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsx(c.li,{children:"提取需要的字段"}),`
`,n.jsx(c.li,{children:"创建数据子集"}),`
`,n.jsx(c.li,{children:"API 响应过滤"}),`
`]}),`
`,n.jsx(c.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(c.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"object"})}),n.jsx("td",{children:"源对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"paths"}),n.jsx("td",{children:n.jsx("code",{children:"string[]"})}),n.jsx("td",{children:"要选取的属性路径"})]})]})]}),`
`,n.jsx(c.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:["类型：",n.jsx(c.code,{children:"object"})]}),`
`,n.jsx(c.li,{children:"描述：新对象"}),`
`]})]})}function p(i={}){const{wrapper:c}={...s(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(e,{...i})}):e(i)}export{p as default};
