import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import rest from '../../../packages/js-utils/src/rest'

const restDemo = () => {
  // 默认从 func.length-1 开始收集 (lodash: rest(fn)(1,2,3,4) => [1,2,[3,4]])
  const fn1 = rest((...args: unknown[]) => args)
  action('rest - 默认收集')(fn1(1, 2, 3, 4))

  // 指定 start=1 (lodash: rest(fn, 1)(1,2,3,4) => [1,[2,3,4]])
  const fn2 = rest((first: unknown, others: unknown[]) => ({ first, others }), 1)
  action('rest - start=1')(fn2('a', 'b', 'c', 'd'))

  // start=0 时所有参数收集为数组
  const fn3 = rest((args: unknown[]) => args, 0)
  action('rest - start=0')(fn3(1, 2, 3))

  // 参数不足时使用空数组 (lodash: rest(fn)(1) => [1, undefined, []])
  const fn4 = rest((...args: unknown[]) => args)
  action('rest - 参数不足')(fn4(1))
}

export default restDemo`,c=`import { action } from 'storybook/actions'
import spread from '../../../packages/js-utils/src/spread'

const spreadDemo = () => {
  // 展开数组参数
  const add = spread((a: number, b: number, c: number) => a + b + c)
  action('spread - 展开数组')(add([1, 2, 3]))

  // 多个参数
  const join = spread((...args: string[]) => args.join(', '))
  action('spread - 字符串拼接')(join(['hello', 'world', '!']))
}

export default spreadDemo`;function t(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"rest",children:"rest"}),`
`,n.jsx(s.p,{children:"创建收集剩余参数的函数。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"rest"})," 创建一个函数，将指定位置之后的参数收集到数组中传入。",n.jsx(s.code,{children:"spread"})," 是反向操作，将数组展开为参数。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"可变参数函数封装"}),`
`,n.jsx(s.li,{children:"参数收集和展开"}),`
`,n.jsx(s.li,{children:"API 适配"}),`
`]}),`
`,n.jsx(s.h2,{id:"rest-收集剩余参数",children:"rest 收集剩余参数"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"rest"})," 将多余参数收集为数组。"]}),`
`,n.jsx(e,{language:"typescript",children:i}),`
`,n.jsx(s.h2,{id:"spread-展开数组参数",children:"spread 展开数组参数"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"spread"})," 将数组参数展开传入函数。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"要包装的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"start"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"收集起始位置，默认 func.length - 1"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"(...args) => ReturnType<T>"})]}),`
`,n.jsx(s.li,{children:"描述：参数收集/展开后的包装函数"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 提供 rest 和 spread 两个函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": rest 在调用时将 start 之后的参数收集为数组；spread 将数组参数展开"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": Array.prototype.slice 收集参数，Function.prototype.apply 展开"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 参数列表 → 收集/展开 → 调用原函数 → 返回结果"]}),`
`]})]})}function p(r={}){const{wrapper:s}={...d(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(t,{...r})}):t(r)}export{p as default};
