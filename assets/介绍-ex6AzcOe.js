import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import transform from '../../../packages/js-utils/src/transform'

const transformDemo = () => {
  // 数组：平方值
  const squared = transform([1, 2, 3], (result: number[], value: unknown) => {
    result.push((value as number) * (value as number))
  }, [] as number[])
  action('transform - 数组平方')(squared)

  // 对象：键值反转
  const inverted = transform(
    { a: 1, b: 2, c: 1 } as Record<string, unknown>,
    (result: Record<string, string[]>, value: unknown, key: string | number) => {
      const k = String(value)
      ;(result[k] || (result[k] = [])).push(String(key))
    },
    {} as Record<string, string[]>,
  )
  action('transform - 对象键值分组')(inverted)

  // 提前终止：return false
  const earlyStop: number[] = []
  transform([1, 2, 3, 4, 5] as unknown[], (result: number[], value: unknown) => {
    result.push(value as number)
    if ((value as number) === 3) return false
  }, earlyStop)
  action('transform - return false 提前终止')(earlyStop)

  // 累积器为引用同一对象
  const acc: number[] = []
  const returned = transform([1, 2, 3] as unknown[], (result: number[], value: unknown) => {
    result.push(value as number)
  }, acc)
  action('transform - 返回的是同一累积器引用')(returned === acc)

  // null 对象返回初始累积器
  const emptyResult = transform(null as any, (r: any) => { r.x = 1 }, {} as Record<string, unknown>)
  action('transform - null 对象返回初始累积器')(emptyResult)
}

export default transformDemo
`;function e(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"transform",children:"transform"}),`
`,n.jsx(r.p,{children:"对集合进行迭代累积转换。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"transform"})," 类似于 reduce，对对象或数组进行迭代累积。迭代器返回 false 可提前终止。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"对象结构转换"}),`
`,n.jsx(r.li,{children:"数组归并"}),`
`,n.jsx(r.li,{children:"带提前终止的累积操作"}),`
`]}),`
`,n.jsx(r.h2,{id:"集合转换",children:"集合转换"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"transform"})," 对集合进行迭代累积转换。"]}),`
`,n.jsx(l,{language:"typescript",children:o}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown> | unknown[]"})}),n.jsx("td",{children:"要转换的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(accumulator, value, key, object) => void | boolean"})}),n.jsx("td",{children:"迭代器函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"accumulator"}),n.jsx("td",{children:n.jsx("code",{children:"R"})}),n.jsx("td",{children:"可选初始累积值"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"R"})]}),`
`,n.jsx(r.li,{children:"描述：累积转换后的结果"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 实现带提前终止的迭代累积"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 初始化累积器 → 遍历集合 → 调用迭代器修改累积器 → 返回 false 则终止"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 迭代器直接修改累积器（非函数式），false 提前终止"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 集合 + 累积器 → 遍历迭代 → 修改累积器 → 返回结果"]}),`
`]})]})}function x(s={}){const{wrapper:r}={...t(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(e,{...s})}):e(s)}export{x as default};
