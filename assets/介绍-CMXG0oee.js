import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import nthArg from '../../../packages/js-utils/src/nthArg'

const nthArgDemo = () => {
  const args = ['a', 'b', 'c', 'd']

  // lodash 测试: 返回第 n 个参数
  action('nthArg - 正索引')({
    'nthArg(0)(...)': nthArg(0)(...args),
    'nthArg(1)(...)': nthArg(1)(...args),
    'nthArg(2)(...)': nthArg(2)(...args),
    'nthArg(3)(...)': nthArg(3)(...args),
  })

  // lodash 测试: 负索引
  action('nthArg - 负索引')({
    'nthArg(-1)(...)': nthArg(-1)(...args),
    'nthArg(-2)(...)': nthArg(-2)(...args),
    说明: '-1 => d, -2 => c',
  })

  // lodash 测试: 默认取第一个
  action('nthArg - 默认')({
    'nthArg()(...)': nthArg()(...args),
    期望: 'a',
  })

  // lodash 测试: 超出范围返回 undefined
  action('nthArg - 超出范围')({
    'nthArg(Infinity)(...)': nthArg(Infinity)(...args),
    'nthArg(4)(...)': nthArg(4)(...args),
    'nthArg(1)()': nthArg(1)(),
    期望: undefined,
  })
}

export default nthArgDemo`;function h(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"ntharg",children:"nthArg"}),`
`,n.jsx(r.p,{children:"创建返回第 n 个参数的函数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"nthArg"})," 创建一个函数，该函数返回其第 n 个参数。n 为负数时从末尾计算。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"函数式编程中的参数选择"}),`
`,n.jsx(r.li,{children:"配合其他高阶函数使用"}),`
`,n.jsx(r.li,{children:"参数投影"}),`
`]}),`
`,n.jsx(r.h2,{id:"选择第-n-个参数",children:"选择第 n 个参数"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"nthArg"})," 创建函数，返回指定位置的参数。"]}),`
`,n.jsx(i,{language:"typescript",children:e}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"参数索引，默认 0，负数从末尾计算"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...args) => unknown"})]}),`
`,n.jsx(r.li,{children:"描述：返回第 n 个参数的函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 创建参数选择函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 接收索引 → 返回闭包 → 闭包返回指定位置的参数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 闭包捕获索引，负索引处理"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 索引 → 创建闭包 → 调用时从参数列表选取 → 返回值"]}),`
`]})]})}function j(s={}){const{wrapper:r}={...t(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(h,{...s})}):h(s)}export{j as default};
