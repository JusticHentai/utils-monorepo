import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import once from '../../../packages/js-utils/src/once'

// 模块级别创建 once 函数以保持状态
let callCount = 0
const initialize = once(() => {
  return ++callCount
})

const onceDemo = () => {
  // lodash 测试: 只调用一次，返回相同结果
  const result1 = initialize()
  const result2 = initialize()
  const result3 = initialize()

  action('once - 只执行一次')({
    第一次: result1,
    第二次: result2,
    第三次: result3,
    实际调用次数: callCount,
    所有结果相同: result1 === result2 && result2 === result3,
    说明: '无论调用多少次，函数只执行一次，始终返回首次结果',
  })

  // lodash 测试: 忽略递归调用
  let recursiveCount = 0
  const recursiveOnce = once(() => {
    recursiveOnce() // 递归调用被忽略
    return ++recursiveCount
  })

  action('once - 忽略递归')({
    结果: recursiveOnce(),
    调用次数: recursiveCount,
    说明: '递归调用不会导致重复执行',
  })
}

export default onceDemo`;function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"once",children:"once"}),`
`,n.jsx(e.p,{children:"创建只能调用一次的函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"once"})," 创建一个只能调用一次的函数。后续调用返回首次调用的结果。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"初始化操作（只执行一次）"}),`
`,n.jsx(e.li,{children:"单例模式"}),`
`,n.jsx(e.li,{children:"一次性事件处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"单次调用函数",children:"单次调用函数"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"once"})," 确保函数只执行一次，后续调用返回首次结果。"]}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"(...args) => unknown"})}),n.jsx("td",{children:"要限制的函数"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...args) => ReturnType<T>"})]}),`
`,n.jsx(e.li,{children:"描述：只能调用一次的包装函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现单次调用限制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 包装原函数 → 首次调用时执行并缓存结果 → 后续调用直接返回缓存"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 闭包保存调用状态和结果，标志位控制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 原函数 → 包装 → 首次调用执行缓存 → 后续直接返回"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{u as default};
