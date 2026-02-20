import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import findLast from '../../../packages/js-utils/src/findLast'

const findLastDemo = () => {
  action('findLast 演示')({
    '从右查找偶数': findLast([1, 2, 3, 4], (n) => n % 2 === 0),
  })
}

export default findLastDemo
`,c=`import { action } from 'storybook/actions'
import findLast from '../../../packages/js-utils/src/findLast'

const edgeCaseDemo = () => {
  action('findLast - 边界情况')({
    '找到': findLast([1,2,3,4], n => n % 2 === 0), '未找到': findLast([1,3,5], n => n % 2 === 0), '空数组': findLast([], n => true)
  })
}

export default edgeCaseDemo
`;function d(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"findlast",children:"findLast"}),`
`,n.jsx(s.p,{children:"类似 find，但从右到左遍历集合"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"findLast"})," 类似 find，但从右到左遍历集合。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据转换和过滤"}),`
`,n.jsx(s.li,{children:"集合查询和检索"}),`
`,n.jsx(s.li,{children:"条件聚合计算"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"findLast"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要搜索的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"每次迭代调用的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"fromIndex"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"搜索的起始索引，默认为 collection.length - 1"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"unknown"})]}),`
`,n.jsx(s.li,{children:"描述：返回匹配的元素，否则返回 undefined"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"findLast/index.ts"})," 导出 findLast 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 类似 find，但从右到左遍历集合"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用 Math 内置方法"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function f(i={}){const{wrapper:s}={...r(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(d,{...i})}):d(i)}export{f as default};
