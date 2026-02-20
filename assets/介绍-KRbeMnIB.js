import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import at from '../../../packages/js-utils/src/at'

const basicDemo = () => {
  const obj = { a: 1, b: 2, c: 3, d: 4 }

  action('at - 按路径取多个值')({
    输入对象: obj,
    路径: ['a', 'c'],
    结果: at(obj, ['a', 'c']),
  })

  // 不存在的路径返回 undefined
  action('at - 不存在的路径返回 undefined')({
    输入对象: obj,
    路径: ['a', 'x', 'c'],
    结果: at(obj, ['a', 'x', 'c']),
    说明: '路径 x 不存在，对应位置为 undefined',
  })

  // 空路径返回空数组
  action('at - 空路径返回空数组')({
    路径: [],
    结果: at(obj, []),
  })
}

export default basicDemo
`,r=`import { action } from 'storybook/actions'
import at from '../../../packages/js-utils/src/at'

const nestedDemo = () => {
  const object = { a: [{ b: { c: 3 } }, 4] }

  action('at - 深层嵌套路径')({
    输入对象: '{ a: [{ b: { c: 3 } }, 4] }',
    路径: ['a[0].b.c', 'a[1]'],
    结果: at(object, ['a[0].b.c', 'a[1]']),
    说明: 'a[0].b.c => 3, a[1] => 4',
  })

  // 复杂嵌套
  const data = {
    users: [
      { name: 'Alice', address: { city: 'Beijing' } },
      { name: 'Bob', address: { city: 'Shanghai' } },
    ],
  }

  action('at - 复杂对象取值')({
    路径: ['users[0].name', 'users[1].address.city'],
    结果: at(data, ['users[0].name', 'users[1].address.city']),
  })
}

export default nestedDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"at",children:"at"}),`
`,n.jsx(e.p,{children:"根据给定的路径数组从对象中提取对应的值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"at"})," 函数接收一个对象和路径数组，返回一个包含对应路径值的数组。支持嵌套路径（如 ",n.jsx(e.code,{children:"a.b.c"}),"）和数组索引（如 ",n.jsx(e.code,{children:"a[0]"}),"）。不存在的路径返回 ",n.jsx(e.code,{children:"undefined"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"同时获取对象的多个深层属性值"}),`
`,n.jsx(e.li,{children:"解构深层嵌套的数据结构"}),`
`,n.jsx(e.li,{children:"批量读取配置项"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础路径取值",children:"基础路径取值"}),`
`,n.jsx(e.p,{children:"按路径取多个值，不存在的路径返回 undefined，空路径返回空数组。"}),`
`,n.jsx(c,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"深层嵌套路径",children:"深层嵌套路径"}),`
`,n.jsxs(e.p,{children:["支持 ",n.jsx(e.code,{children:"a[0].b.c"})," 形式的深层路径访问。"]}),`
`,n.jsx(c,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要查询的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"paths"}),n.jsx("td",{children:n.jsx("code",{children:"string[]"})}),n.jsx("td",{children:"要获取的属性路径数组"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"unknown[]"})]}),`
`,n.jsx(e.li,{children:"描述：对应路径值的数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"at/index.ts"})," 导出 at 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历路径数组，对每个路径解析为路径片段数组，逐层访问对象"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 正则表达式解析路径字符串（支持点号和方括号语法）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 路径字符串 → 正则解析为片段数组 → 逐层访问对象属性 → 收集结果"]}),`
`]})]})}function m(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
