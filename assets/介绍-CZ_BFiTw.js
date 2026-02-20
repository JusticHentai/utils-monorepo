import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import sortedUniq from '../../../packages/js-utils/src/sortedUniq'
import sortedUniqBy from '../../../packages/js-utils/src/sortedUniqBy'

const sortedUniqDemo = () => {
  // 基础：各种排序数组去重结果均为 [1, 2, 3]
  action('sortedUniq - 无重复')({
    输入: [1, 2, 3],
    结果: sortedUniq([1, 2, 3]),
  })

  action('sortedUniq - 首尾重复')({
    输入: [1, 1, 2, 2, 3],
    结果: sortedUniq([1, 1, 2, 2, 3]),
  })

  action('sortedUniq - 大量连续重复')({
    输入: [1, 2, 3, 3, 3, 3, 3],
    结果: sortedUniq([1, 2, 3, 3, 3, 3, 3]),
  })

  // sortedUniqBy：通过迭代器去重
  action('sortedUniqBy - Math.floor 取整去重')({
    输入: [1.1, 1.2, 2.3, 2.4],
    结果: sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor),
  })

  // 边界：空数组
  action('sortedUniq - 空数组')({
    输入: [],
    结果: sortedUniq([]),
  })

  // 边界：单元素
  action('sortedUniq - 单元素')({
    输入: [5],
    结果: sortedUniq([5]),
  })
}

export default sortedUniqDemo
`;function e(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"sorteduniq",children:"sortedUniq"}),`
`,n.jsx(s.p,{children:"对已排序数组去重。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"sortedUniq"})," 利用已排序特性，只比较相邻元素来高效去重。",n.jsx(s.code,{children:"sortedUniqBy"})," 支持迭代器。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"排序后的数组去重（比 uniq 更高效）"}),`
`,n.jsx(s.li,{children:"大数据集的去重优化"}),`
`,n.jsx(s.li,{children:"维护有序唯一列表"}),`
`]}),`
`,n.jsx(s.h2,{id:"已排序数组去重",children:"已排序数组去重"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"sortedUniq"})," 对已排序数组去重。"]}),`
`,n.jsx(d,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"已排序的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => K"})}),n.jsx("td",{children:"迭代器函数（sortedUniqBy 使用）"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"T[]"})]}),`
`,n.jsx(s.li,{children:"描述：去重后的新数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 提供 sortedUniq 和 sortedUniqBy"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 遍历已排序数组 → 仅比较相邻元素 → 不同则保留"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 利用有序性只需 O(n) 时间，sortedUniqBy 通过迭代器转换后比较"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 已排序数组 → 相邻比较 → 保留不同元素 → 返回新数组"]}),`
`]})]})}function a(r={}){const{wrapper:s}={...i(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(e,{...r})}):e(r)}export{a as default};
