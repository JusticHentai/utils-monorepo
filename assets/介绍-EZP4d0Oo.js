import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import sortedIndex from '../../../packages/js-utils/src/sortedIndex'
import sortedLastIndex from '../../../packages/js-utils/src/sortedLastIndex'

const sortedIndexDemo = () => {
  const arr = [10, 20, 30, 30, 40, 50]

  action('sortedIndex - 插入30')({ 数组: arr, 位置: sortedIndex(arr, 30) })
  action('sortedIndex - 插入35')({ 数组: arr, 位置: sortedIndex(arr, 35) })
  action('sortedLastIndex - 插入30(最后)')({ 数组: arr, 位置: sortedLastIndex(arr, 30) })
}

export default sortedIndexDemo
`,o=`import { action } from 'storybook/actions'
import sortedIndexBy from '../../../packages/js-utils/src/sortedIndexBy'

const sortedIndexByDemo = () => {
  const users = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 40 },
  ]

  const idx = sortedIndexBy(users, { name: 'Dave', age: 35 }, (u) => u.age)
  action('sortedIndexBy - 按age插入')({ 数组: users.map(u => u.name), 位置: idx })
}

export default sortedIndexByDemo
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"sortedindex",children:"sortedIndex"}),`
`,n.jsx(e.p,{children:"使用二分查找确定插入位置。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"sortedIndex"})," 系列函数使用二分查找确定值在已排序数组中的插入位置。包含 By、Of、Last 等变体。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"有序数组的高效插入"}),`
`,n.jsx(e.li,{children:"二分查找定位"}),`
`,n.jsx(e.li,{children:"维护排序数组"}),`
`]}),`
`,n.jsx(e.h2,{id:"查找插入位置",children:"查找插入位置"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"sortedIndex"})," 在已排序数组中查找值应插入的最低索引。"]}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"按迭代器查找位置",children:"按迭代器查找位置"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"sortedIndexBy"})," 按迭代器提取的值确定插入位置。"]}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"已排序的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"要查找插入位置的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => K"})}),n.jsx("td",{children:"迭代器函数（By 变体使用）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：值应插入的索引位置"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 sortedIndex 系列六个函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 二分查找 → 比较中间值 → 缩小范围 → 返回插入位置"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 二分查找算法，By 变体先通过迭代器转换再比较"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 已排序数组 + 值 → 二分查找 → 返回索引"]}),`
`]})]})}function m(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{m as default};
