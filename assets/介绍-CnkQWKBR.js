import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import max from '../../../packages/js-utils/src/max'
import min from '../../../packages/js-utils/src/min'

const maxDemo = () => {
  // lodash 测试: 返回最大值
  action('max - 基础')({
    'max([1, 2, 3])': max([1, 2, 3]),
    期望: 3,
  })

  // lodash 测试: 空集合返回 undefined
  action('max - 空数组')({
    'max([])': max([]),
    期望: undefined,
  })

  // lodash 测试: 字符串比较
  action('max - 字符串比较')({
    'max(["a", "b"])': max(['a', 'b']),
    期望: 'b',
  })

  // min 对比
  action('min - 基础')({
    'min([1, 2, 3])': min([1, 2, 3]),
    'min([])': min([]),
    'min(["a", "b"])': min(['a', 'b']),
  })

  // 负数
  action('max/min - 负数')({
    'max([-3, -1, -2])': max([-3, -1, -2]),
    'min([-3, -1, -2])': min([-3, -1, -2]),
  })
}

export default maxDemo`,x=`import { action } from 'storybook/actions'
import maxBy from '../../../packages/js-utils/src/maxBy'
import minBy from '../../../packages/js-utils/src/minBy'

const maxByDemo = () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
  ]

  action('maxBy - 年龄最大')({
    结果: maxBy(users, (u) => u.age),
  })

  action('minBy - 年龄最小')({
    结果: minBy(users, (u) => u.age),
  })
}

export default maxByDemo
`;function r(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"max",children:"max"}),`
`,n.jsx(i.p,{children:"计算数组中的最大值和最小值。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"max"})," 模块提供 ",n.jsx(i.code,{children:"max"}),"、",n.jsx(i.code,{children:"maxBy"}),"、",n.jsx(i.code,{children:"min"}),"、",n.jsx(i.code,{children:"minBy"})," 函数，用于查找数组中的极值。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据分析中的极值查找"}),`
`,n.jsx(i.li,{children:"对象数组中按属性找最大/最小元素"}),`
`,n.jsx(i.li,{children:"数据范围计算"}),`
`]}),`
`,n.jsx(i.h2,{id:"最大值与最小值",children:"最大值与最小值"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"max"})," 和 ",n.jsx(i.code,{children:"min"})," 查找数组中的极值。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(i.h2,{id:"按迭代器查找极值",children:"按迭代器查找极值"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"maxBy"})," 和 ",n.jsx(i.code,{children:"minBy"})," 按迭代器函数查找对象数组中的极值元素。"]}),`
`,n.jsx(s,{language:"typescript",children:x}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要查找的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => number"})}),n.jsx("td",{children:"迭代器函数（maxBy/minBy 使用）"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T | undefined"})]}),`
`,n.jsx(i.li,{children:"描述：数组中的最大/最小元素"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 提供 max、maxBy、min、minBy 四个函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 遍历数组元素 → 比较/迭代器提取值比较 → 返回极值元素"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": maxBy/minBy 通过迭代器将对象转为可比较的数值"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 数组 → 遍历比较 → 返回极值元素"]}),`
`]})]})}function j(e={}){const{wrapper:i}={...c(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(r,{...e})}):r(e)}export{j as default};
