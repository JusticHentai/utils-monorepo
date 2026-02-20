import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import difference from '../../../packages/js-utils/src/difference'

const differenceDemo = () => {
  action('difference')({
    输入: { array: [2, 1, 3], values: [2, 3] },
    结果: difference([2, 1, 3], [2, 3]),
  })
}

export default differenceDemo
`,l=`import { action } from 'storybook/actions'
import difference from '../../../packages/js-utils/src/difference'

const edgeCaseDemo = () => {
  action('difference - 边界情况')({
    '多个排除数组': difference([1, 2, 3, 4, 5], [1, 2], [4]),
    '无交集': difference([1, 2, 3], [4, 5, 6]),
    '全部排除': difference([1, 2], [1, 2, 3]),
    '空排除数组': difference([1, 2, 3]),
    '空源数组': difference([], [1, 2]),
    '重复元素': difference([1, 1, 2, 2, 3], [2]),
  })
}

export default edgeCaseDemo
`;function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"difference",children:"difference"}),`
`,e.jsx(n.p,{children:"创建差集数组，返回第一个数组中不包含在后续数组中的元素。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"difference"})," 从第一个数组中排除所有在后续数组中出现的值，返回新数组。"]}),`
`,e.jsx(n.h3,{id:"实现步骤",children:"实现步骤"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const difference = (array, ...values) => {
  const excludeSet = new Set(values.flat()) // 1. flat + Set
  return array.filter(item => !excludeSet.has(item)) // 2. filter
}
`})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"values.flat()"})})," — 将多个排除数组展平为一维（如 ",e.jsx(n.code,{children:"[1,2], [3,4]"})," → ",e.jsx(n.code,{children:"[1,2,3,4]"}),"）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"new Set(...)"})})," — 转为 Set，查找时间从 ",e.jsx(n.code,{children:"Array.includes"})," 的 O(n) 降为 O(1)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"array.filter(item => !excludeSet.has(item))"})})," — 过滤掉 Set 中存在的元素"]}),`
`]}),`
`,e.jsx(n.p,{children:"整体时间复杂度：O(n + m)，n 为源数组长度，m 为所有排除值总数。"}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"difference"})," 的基本使用效果。"]}),`
`,e.jsx(c,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(c,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"array"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要检查的数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"...values"}),e.jsx("td",{children:e.jsx("code",{children:"T[][]"})}),e.jsx("td",{children:"要排除的值数组（支持多个）"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T[]"})]}),`
`,e.jsx(n.li,{children:"描述：排除后的新数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"difference/index.ts"})," 导出 difference 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": ",e.jsx(n.code,{children:"values.flat()"})," 展平所有排除数组 → ",e.jsx(n.code,{children:"new Set()"})," 构建哈希集合 → ",e.jsx(n.code,{children:"array.filter()"})," 过滤"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 ",e.jsx(n.code,{children:"Set"})," 将查找复杂度从 O(n) 降为 O(1)，",e.jsx(n.code,{children:"flat()"})," 合并多个排除数组"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"时间复杂度"}),": O(n + m)，n 为源数组长度，m 为排除值总数"]}),`
`]})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{a as default};
