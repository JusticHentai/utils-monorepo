import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import sortedIndexOf from '../../../packages/js-utils/src/sortedIndexOf'

const sortedIndexOfDemo = () => {
  action('sortedIndexOf 演示')({
    '4 在 [4, 5, 5, 5, 6] 中的索引': sortedIndexOf([4, 5, 5, 5, 6], 4),
    '5 在 [4, 5, 5, 5, 6] 中的索引': sortedIndexOf([4, 5, 5, 5, 6], 5),
    '3（不存在）': sortedIndexOf([4, 5, 5, 5, 6], 3),
  })
}

export default sortedIndexOfDemo
`,t=`import { action } from 'storybook/actions'
import sortedIndexOf from '../../../packages/js-utils/src/sortedIndexOf'

const edgeCaseDemo = () => {
  action('sortedIndexOf - 边界情况')({
    '找到': sortedIndexOf([4,5,5,5,6], 5), '未找到': sortedIndexOf([1,2,3], 4), '空数组': sortedIndexOf([], 1)
  })
}

export default edgeCaseDemo
`;function r(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"sortedindexof",children:"sortedIndexOf"}),`
`,n.jsx(e.p,{children:"类似于 indexOf，但使用二分查找（数组必须已排序）"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"sortedIndexOf"})," 类似于 indexOf，但使用二分查找（数组必须已排序）。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据处理和转换"}),`
`,n.jsx(e.li,{children:"功能组合和增强"}),`
`,n.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"sortedIndexOf"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"已排序的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要搜索的值"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：返回值的索引，否则返回 -1"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"sortedIndexOf/index.ts"})," 导出 sortedIndexOf 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 类似于 indexOf，但使用二分查找（数组必须已排序）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(d={}){const{wrapper:e}={...i(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(r,{...d})}):r(d)}export{a as default};
