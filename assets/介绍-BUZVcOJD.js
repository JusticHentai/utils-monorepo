import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import curry from '../../../packages/js-utils/src/curry'

const curryDemo = () => {
  const fn = (a: number, b: number, c: number, d: number) => [a, b, c, d]
  const curried = curry(fn)

  action('curry - 各种传参方式')({
    'curried(1)(2)(3)(4)': curried(1)(2)(3)(4),
    'curried(1, 2)(3, 4)': curried(1, 2)(3, 4),
    'curried(1, 2, 3, 4)': curried(1, 2, 3, 4),
    说明: '所有方式最终结果相同',
  })

  // 指定 arity
  const curried3 = curry(fn, 3)
  action('curry - 指定 arity')({
    'curry(fn, 3)(1)(2, 3)': curried3(1)(2, 3),
    'curry(fn, 3)(1, 2)(3)': curried3(1, 2)(3),
    说明: '只需 3 个参数即可调用，第 4 个参数为 undefined',
  })

  // 超出 arity 的额外参数
  action('curry - 超出 arity 的额外参数')({
    'curry(fn, 3)(1)(2, 3, 4)': curried3(1)(2, 3, 4),
    说明: '达到 arity 后额外参数也会传递给原函数',
  })
}

export default curryDemo
`,t=`import { action } from 'storybook/actions'
import curry from '../../../packages/js-utils/src/curry'

const edgeCaseDemo = () => {
  // 0 参数函数柯里化
  const noArgs = curry(() => 'no args', 0)

  // 1 参数函数柯里化（直接执行）
  const identity = curry((x: unknown) => x)

  // 柯里化后返回的函数可复用
  const add = curry((a: number, b: number, c: number) => a + b + c)
  const add10 = add(10)
  const add10and20 = add10(20)

  action('curry - 边界情况')({
    '0参数柯里化': noArgs(),
    '1参数直接执行': identity('hello'),
    '复用中间函数 add10(20)(30)': add10(20)(30),
    '复用中间函数 add10(5)(5)': add10(5)(5),
    '复用 add10and20(1)': add10and20(1),
    '复用 add10and20(100)': add10and20(100),
  })
}

export default edgeCaseDemo
`;function e(c){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"curry",children:"curry"}),`
`,n.jsx(r.p,{children:"创建柯里化函数，可逐步传入参数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"curry"})," 将一个多参数函数转换为可逐步传参的函数链。当累计传入的参数数量达到原函数的参数数量（或指定的 ",n.jsx(r.code,{children:"arity"}),"）时执行原函数。"]}),`
`,n.jsx(r.p,{children:"柯里化是函数式编程的核心技术，常用于创建可复用的部分应用函数。"}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"curry"})," 的基本使用效果。"]}),`
`,n.jsx(d,{language:"typescript",children:s}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(d,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"T extends (...args: any[]) => any"})}),n.jsx("td",{children:"要柯里化的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"arity"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"参数数量，默认为 func.length"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...args) => unknown"})]}),`
`,n.jsx(r.li,{children:"描述：柯里化后的函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"curry/index.ts"})," 导出 curry 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 返回新函数，每次调用收集参数，参数不足时返回新的柯里化函数，参数足够时执行原函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 递归闭包收集参数，",n.jsx(r.code,{children:"Function.length"})," 获取默认 arity"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 逐步传入参数 → 累积到闭包 → 参数数量 ≥ arity 时调用原函数"]}),`
`]})]})}function j(c={}){const{wrapper:r}={...i(),...c.components};return r?n.jsx(r,{...c,children:n.jsx(e,{...c})}):e(c)}export{j as default};
