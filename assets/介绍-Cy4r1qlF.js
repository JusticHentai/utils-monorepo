import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import sum from '../../../packages/js-utils/src/sum'
import sumBy from '../../../packages/js-utils/src/sumBy'

const sumDemo = () => {
  action('sum - 基础')(sum([4, 2, 8, 6]))

  const items = [
    { name: 'A', price: 10 },
    { name: 'B', price: 20 },
    { name: 'C', price: 30 },
  ]
  action('sumBy - 价格总和')(sumBy(items, (item) => item.price))
}

export default sumDemo
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"sum",children:"sum"}),`
`,n.jsx(s.p,{children:"计算数组元素的和。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"sum"})," 计算数组中所有值的和。",n.jsx(s.code,{children:"sumBy"})," 支持通过迭代器提取数值后求和。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数值汇总"}),`
`,n.jsx(s.li,{children:"订单金额计算"}),`
`,n.jsx(s.li,{children:"统计数据求和"}),`
`]}),`
`,n.jsx(s.h2,{id:"数组求和",children:"数组求和"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"sum"})," 和 ",n.jsx(s.code,{children:"sumBy"})," 计算数组元素的和。"]}),`
`,n.jsx(c,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"number[] | T[]"})}),n.jsx("td",{children:"要求和的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => number"})}),n.jsx("td",{children:"迭代器函数（sumBy 使用）"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"number"})]}),`
`,n.jsx(s.li,{children:"描述：数组元素的总和"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 提供 sum 和 sumBy"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 遍历数组 → 累加每个元素（sumBy 先通过迭代器转换）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": reduce 累加，sumBy 先映射再求和"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 数组 → 遍历累加 → 返回总和"]}),`
`]})]})}function m(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{m as default};
