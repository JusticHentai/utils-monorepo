import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import overArgs from '../../../packages/js-utils/src/overArgs'

const overArgsDemo = () => {
  const fn = (...args: unknown[]) => args
  const doubled = (n: number) => n * 2
  const square = (n: number) => n * n

  // lodash 测试: 转换每个参数
  const over = overArgs(fn, [doubled, square])
  action('overArgs - 基础转换')({
    'overArgs(fn, [doubled, square])(5, 10)': over(5, 10),
    期望: [10, 100],
  })

  // lodash 测试: 多于 transforms 的参数不被转换
  action('overArgs - 多余参数不转换')({
    'over(5, 10, 18)': over(5, 10, 18),
    期望: [10, 100, 18],
    说明: '第三个参数 18 没有对应的 transform，直接传递',
  })

  // lodash 测试: 没有 transforms
  const noTransform = overArgs(fn, [])
  action('overArgs - 无 transforms')({
    'overArgs(fn, [])(5, 10)': noTransform(5, 10),
    期望: [5, 10],
  })
}

export default overArgsDemo`;function e(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"overargs",children:"overArgs"}),`
`,n.jsx(r.p,{children:"创建参数转换后调用的函数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"overArgs"})," 创建一个函数，使用转换函数数组分别处理对应位置的参数后再调用原函数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"参数预处理"}),`
`,n.jsx(r.li,{children:"数据类型转换"}),`
`,n.jsx(r.li,{children:"输入标准化"}),`
`]}),`
`,n.jsx(r.h2,{id:"参数转换调用",children:"参数转换调用"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"overArgs"})," 在调用原函数前对参数进行转换。"]}),`
`,n.jsx(d,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"要调用的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"transforms"}),n.jsx("td",{children:n.jsx("code",{children:"Function[]"})}),n.jsx("td",{children:"参数转换函数数组"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...args) => ReturnType<T>"})]}),`
`,n.jsx(r.li,{children:"描述：参数转换后调用原函数的包装函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 实现参数转换调用"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 接收原函数和转换数组 → 创建包装 → 调用时先转换参数再调用原函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 按索引匹配参数和转换函数，超出转换数组的参数原样传递"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 参数 → 对应转换函数处理 → 转换后的参数调用原函数 → 返回结果"]}),`
`]})]})}function a(s={}){const{wrapper:r}={...o(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(e,{...s})}):e(s)}export{a as default};
