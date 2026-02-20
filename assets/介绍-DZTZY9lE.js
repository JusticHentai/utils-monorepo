import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import flow from '../../../packages/js-utils/src/flow'

const flowDemo = () => {
  const add10 = (n: number) => n + 10
  const multiply2 = (n: number) => n * 2
  const pipe = flow([add10, multiply2])

  action('flow - (5 + 10) * 2')(pipe(5))
}

export default flowDemo
`,t=`import { action } from 'storybook/actions'
import flowRight from '../../../packages/js-utils/src/flowRight'

const flowRightDemo = () => {
  const add10 = (n: number) => n + 10
  const multiply2 = (n: number) => n * 2
  const compose = flowRight([add10, multiply2])

  action('flowRight - 5 * 2 + 10')(compose(5))
}

export default flowRightDemo
`;function i(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"flow",children:"flow"}),`
`,n.jsxs(o.p,{children:["依次调用函数数组，前者返回值作为后者参数。同时提供 ",n.jsx(o.code,{children:"flowRight"}),"（从右到左）和 ",n.jsx(o.code,{children:"compose"})," 别名。"]}),`
`,n.jsx(o.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"flow"})," 创建一个函数管道（pipe），将多个函数从左到右组合。调用时，第一个函数接收所有参数，后续函数接收前一个函数的返回值。",n.jsx(o.code,{children:"flowRight"})," 从右到左组合（等同于数学中的函数组合）。"]}),`
`,n.jsx(o.h2,{id:"flow---从左到右组合",children:"flow - 从左到右组合"}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(o.h2,{id:"flowright---从右到左组合",children:"flowRight - 从右到左组合"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"funcs"}),n.jsx("td",{children:n.jsx("code",{children:"Function[]"})}),n.jsx("td",{children:"要组合的函数数组"})]})})]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"(...args) => T"})]}),`
`,n.jsx(o.li,{children:"描述：组合后的函数"}),`
`]}),`
`,n.jsx(o.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"文件职责"}),": ",n.jsx(o.code,{children:"flow/index.ts"})," 导出 flow（default）、flowRight、compose"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"核心流程"}),": 使用 reduce 链式调用函数数组，每次将前一个返回值作为下一个的参数"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"关键技术点"}),": ",n.jsx(o.code,{children:"Array.prototype.reduce"})," 实现管道"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"数据流向"}),": 初始参数 → func1 → result1 → func2 → result2 → ... → 最终结果"]}),`
`]})]})}function m(e={}){const{wrapper:o}={...l(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
