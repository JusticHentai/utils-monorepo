import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import mean from '../../../packages/js-utils/src/mean'

const meanDemo = () => {
  // lodash 测试: 基础平均值
  action('mean - 基础')({
    'mean([4, 2, 8, 6])': mean([4, 2, 8, 6]),
    期望: 5,
  })

  // lodash 测试: 空数组返回 NaN
  action('mean - 空数组')({
    'mean([])': mean([]),
    'isNaN': isNaN(mean([])),
    说明: '空数组返回 NaN',
  })

  // 单元素
  action('mean - 单元素')({
    'mean([42])': mean([42]),
    期望: 42,
  })
}

export default meanDemo`,d=`import { action } from 'storybook/actions'
import meanBy from '../../../packages/js-utils/src/meanBy'

const meanByDemo = () => {
  const scores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
  ]

  action('meanBy - 平均分')({
    输入: scores,
    结果: meanBy(scores, (s) => s.score),
  })
}

export default meanByDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"mean",children:"mean"}),`
`,n.jsx(e.p,{children:"计算数组的平均值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"mean"})," 计算数组元素的算术平均值。",n.jsx(e.code,{children:"meanBy"})," 支持通过迭代器提取数值后再计算平均。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据统计分析"}),`
`,n.jsx(e.li,{children:"成绩/评分平均值"}),`
`,n.jsx(e.li,{children:"对象数组的属性均值计算"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础平均值",children:"基础平均值"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"mean"})," 计算数值数组的平均值。"]}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"meanby-按属性计算",children:"meanBy 按属性计算"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"meanBy"})," 通过迭代器提取数值后计算对象数组的平均值。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"number[] | T[]"})}),n.jsx("td",{children:"要计算的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => number"})}),n.jsx("td",{children:"迭代器函数（meanBy 使用）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：数组元素的平均值"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 mean 和 meanBy 两个函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 求和 → 除以元素个数 → 返回平均值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": meanBy 先通过迭代器映射为数值再计算"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 数组 → 求和 → 除以长度 → 返回平均值"]}),`
`]})]})}function j(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{j as default};
