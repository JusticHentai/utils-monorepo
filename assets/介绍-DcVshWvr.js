import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import constant from '../../../packages/js-utils/src/constant'

const basicDemo = () => {
  // 始终返回相同值
  const getObj = constant({ a: 1 })

  action('constant - 始终返回相同值')({
    第一次调用: getObj(),
    第二次调用: getObj(),
    引用相同: getObj() === getObj(),
    说明: '无论调用多少次，始终返回同一个引用',
  })

  // 任何参数都不会改变返回值
  const getHello = constant('hello')
  action('constant - 忽略所有传入参数')({
    '无参数': getHello(),
    '传入参数': (getHello as Function)(1, 2, 3),
    说明: '传入任何参数都被忽略，始终返回创建时的值',
  })

  // 支持假值
  action('constant - 支持假值')({
    'constant(0)()': constant(0)(),
    'constant(false)()': constant(false)(),
    'constant(null)()': constant(null)(),
    'constant("")()': constant('')(),
  })
}

export default basicDemo
`;function e(s){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"constant",children:"constant"}),`
`,n.jsx(t.p,{children:"创建一个返回常量值的函数。"}),`
`,n.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"constant"})," 创建一个无论如何调用都返回相同值的函数。在函数式编程中常作为默认回调或占位函数使用，例如 ",n.jsx(t.code,{children:"Array.from({ length: 3 }, constant(0))"})," 创建全零数组。"]}),`
`,n.jsx(t.h2,{id:"创建常量函数",children:"创建常量函数"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"要返回的常量值"})]})})]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"() => T"})]}),`
`,n.jsx(t.li,{children:"描述：始终返回给定值的函数"}),`
`]}),`
`,n.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"文件职责"}),": ",n.jsx(t.code,{children:"constant/index.ts"})," 导出 ",n.jsx(t.code,{children:"constant"})," 函数"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"核心流程"}),": 通过闭包捕获传入的值，返回一个始终返回该值的函数"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"关键技术点"}),": 闭包"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"数据流向"}),": value → 闭包捕获 → 返回的函数始终返回 value"]}),`
`]})]})}function x(s={}){const{wrapper:t}={...c(),...s.components};return t?n.jsx(t,{...s,children:n.jsx(e,{...s})}):e(s)}export{x as default};
