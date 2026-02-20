import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import xor from '../../../packages/js-utils/src/xor'

const xorDemo = () => {
  action('xor - 基础')(xor([1, 2], [2, 3]))
  action('xor - 多个数组')(xor([1, 2], [2, 3], [3, 4]))
}

export default xorDemo
`,x=`import { action } from 'storybook/actions'
import xorBy from '../../../packages/js-utils/src/xorBy'
import xorWith from '../../../packages/js-utils/src/xorWith'

const xorByDemo = () => {
  action('xorBy - 取整')(
    xorBy([[1.1, 2.2], [2.3, 3.1]], Math.floor)
  )

  action('xorWith - 自定义比较')(
    xorWith(
      [[{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }]],
      (a, b) => a.x === b.x
    )
  )
}

export default xorByDemo
`;function c(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"xor",children:"xor"}),`
`,n.jsx(e.p,{children:"创建对称差集数组。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"xor"})," 创建对称差集（仅在一个数组中出现的元素）。",n.jsx(e.code,{children:"xorBy"})," 支持迭代器，",n.jsx(e.code,{children:"xorWith"})," 支持比较器。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"查找两个集合的差异"}),`
`,n.jsx(e.li,{children:"数据比对"}),`
`,n.jsx(e.li,{children:"切换选中状态"}),`
`]}),`
`,n.jsx(e.h2,{id:"对称差集",children:"对称差集"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"xor"})," 创建仅在一个数组中出现的元素组成的数组。"]}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"xorby-和-xorwith",children:"xorBy 和 xorWith"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"xorBy"}),"（按迭代器）和 ",n.jsx(e.code,{children:"xorWith"}),"（按比较器）计算对称差集。"]}),`
`,n.jsx(s,{language:"typescript",children:x}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"...arrays"}),n.jsx("td",{children:n.jsx("code",{children:"T[][]"})}),n.jsx("td",{children:"要比较的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => K"})}),n.jsx("td",{children:"迭代器（xorBy 使用）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"comparator"}),n.jsx("td",{children:n.jsx("code",{children:"(a, b) => boolean"})}),n.jsx("td",{children:"比较器（xorWith 使用）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T[]"})]}),`
`,n.jsx(e.li,{children:"描述：对称差集数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"什么是对称差集",children:"什么是对称差集？"}),`
`,n.jsxs(e.p,{children:["对称差集（Symmetric Difference）是集合论概念，记作 ",n.jsx(e.strong,{children:"A △ B"}),"，表示",n.jsx(e.strong,{children:"只属于其中一个集合、不同时属于多个集合"}),"的元素："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`A △ B = (A - B) ∪ (B - A)
`})}),`
`,n.jsxs(e.p,{children:["用韦恩图理解：两个圆的",n.jsx(e.strong,{children:"非重叠部分"}),"。"]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"A"}),n.jsx("th",{children:"B"}),n.jsx("th",{children:"交集（排除）"}),n.jsx("th",{children:"对称差集（保留）"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"[2, 1]"})}),n.jsx("td",{children:n.jsx("code",{children:"[2, 3]"})}),n.jsx("td",{children:n.jsx("code",{children:"[2]"})}),n.jsx("td",{children:n.jsx("code",{children:"[1, 3]"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"[1, 2, 3]"})}),n.jsx("td",{children:n.jsx("code",{children:"[2, 3, 4]"})}),n.jsx("td",{children:n.jsx("code",{children:"[2, 3]"})}),n.jsx("td",{children:n.jsx("code",{children:"[1, 4]"})})]})]})]}),`
`,n.jsxs(e.p,{children:["支持多个数组：",n.jsx(e.code,{children:"xor(A, B, C)"})," 中，只在",n.jsx(e.strong,{children:"恰好一个"}),"数组中出现的元素才会被保留。"]}),`
`,n.jsx(e.h3,{id:"实现步骤",children:"实现步骤"}),`
`,n.jsx(e.h4,{id:"第一步统计每个值出现在几个数组中",children:"第一步：统计每个值出现在几个数组中"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`const countMap = new Map<T, number>()  // key=值, value=出现在几个数组中

for (const array of arrays) {
  const seen = new Set<T>()            // 同一数组内去重
  for (const value of array) {
    if (!seen.has(value)) {
      seen.add(value)
      countMap.set(value, (countMap.get(value) || 0) + 1)
    }
  }
}
`})}),`
`,n.jsxs(e.p,{children:['注意这里统计的是"出现在',n.jsx(e.strong,{children:"几个数组"}),'中"，而不是"出现了几次"。',n.jsx(e.code,{children:"seen"})," 确保同一数组内的重复元素（如 ",n.jsx(e.code,{children:"[2, 2, 1]"})," 中的两个 ",n.jsx(e.code,{children:"2"}),"）只计数一次。"]}),`
`,n.jsxs(e.p,{children:["以 ",n.jsx(e.code,{children:"xor([2, 1], [2, 3])"})," 为例："]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"遍历阶段"}),n.jsx("th",{children:"值"}),n.jsx("th",{children:"countMap 变化"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsxs("td",{children:["数组1 ",n.jsx("code",{children:"[2, 1]"})]}),n.jsx("td",{children:n.jsx("code",{children:"2"})}),n.jsx("td",{children:n.jsx("code",{children:"{{2: 1}}"})})]}),n.jsxs("tr",{children:[n.jsx("td",{}),n.jsx("td",{children:n.jsx("code",{children:"1"})}),n.jsx("td",{children:n.jsx("code",{children:"{{2: 1, 1: 1}}"})})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:["数组2 ",n.jsx("code",{children:"[2, 3]"})]}),n.jsx("td",{children:n.jsx("code",{children:"2"})}),n.jsxs("td",{children:[n.jsx("code",{children:"{{2: 2, 1: 1}}"}),"（2 在第二个数组也出现，计数变为 2）"]})]}),n.jsxs("tr",{children:[n.jsx("td",{}),n.jsx("td",{children:n.jsx("code",{children:"3"})}),n.jsx("td",{children:n.jsx("code",{children:"{{2: 2, 1: 1, 3: 1}}"})})]})]})]}),`
`,n.jsx(e.h4,{id:"第二步筛选-count--1-的元素",children:"第二步：筛选 count === 1 的元素"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`for (const [value, count] of countMap) {
  if (count === 1) result.push(value)
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"count === 1"})," 表示该值只在一个数组中出现过——正是对称差集的定义。"]}),`
`,n.jsx(e.p,{children:"从上面的 countMap 中："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"2"})," → count=2（出现在两个数组中）→ 排除"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"1"})," → count=1 → 保留"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"3"})," → count=1 → 保留"]}),`
`]}),`
`,n.jsxs(e.p,{children:["最终结果：",n.jsx(e.code,{children:"[1, 3]"})]})]})}function p(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(c,{...r})}):c(r)}export{p as default};
