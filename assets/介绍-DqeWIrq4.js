import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import invokeMap from '../../../packages/js-utils/src/invokeMap'

const invokeMapDemo = () => {
  // 调用每个元素的方法
  action('invokeMap - toUpperCase')(
    invokeMap(['a', 'b', 'c'], 'toUpperCase'),
  )

  // 排序
  action('invokeMap - sort')(
    invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'),
  )
}

export default invokeMapDemo
`,t=`import { action } from 'storybook/actions'
import invokeMap from '../../../packages/js-utils/src/invokeMap'

const invokeMapFnDemo = () => {
  // 使用函数而不是方法名
  action('invokeMap - 自定义函数')(
    invokeMap(['a', 'b', 'c'], function(this: string, left: string, right: string) {
      return left + this.toUpperCase() + right
    }, '(', ')'),
  )
}

export default invokeMapFnDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"invokemap",children:"invokeMap"}),`
`,n.jsx(e.p,{children:"调用集合中每个元素的指定方法。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"invokeMap"})," 对集合中的每个元素调用指定方法或传入的函数，返回结果数组。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"批量对字符串数组调用方法（如 toUpperCase）"}),`
`,n.jsx(e.li,{children:"对集合元素统一执行某个操作"}),`
`,n.jsx(e.li,{children:"函数式编程中的映射操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"通过方法名调用",children:"通过方法名调用"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"invokeMap"})," 对集合中每个元素调用指定的方法名。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"传入自定义函数",children:"传入自定义函数"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"invokeMap"})," 传入自定义函数，对集合中每个元素调用该函数。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | Function"})}),n.jsx("td",{children:"方法名或要调用的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...args"}),n.jsx("td",{children:n.jsx("code",{children:"unknown[]"})}),n.jsx("td",{children:"传递给方法的参数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"R[]"})]}),`
`,n.jsx(e.li,{children:"描述：每个元素方法调用结果组成的数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现集合元素的批量方法调用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历集合 → 对每个元素调用指定方法或函数 → 收集结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 区分方法名（字符串）和函数类型，动态方法调用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 集合 + 方法/函数 → 遍历元素 → 逐个调用 → 返回结果数组"]}),`
`]})]})}function a(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{a as default};
