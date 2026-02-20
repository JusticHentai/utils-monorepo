import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import dropRightWhile from '../../../packages/js-utils/src/dropRightWhile'

const dropRightWhileDemo = () => {
  const result = dropRightWhile
  action('dropRightWhile 演示')(result)
}

export default dropRightWhileDemo
`,l=`import { action } from 'storybook/actions'
import dropRightWhile from '../../../packages/js-utils/src/dropRightWhile'

const edgeCaseDemo = () => {
  action('dropRightWhile - 边界情况')({
    '条件丢弃': dropRightWhile([1,2,3,4], n => n > 2), '空数组': dropRightWhile([], n => n > 2), '全部满足': dropRightWhile([1,2], n => n > 0)
  })
}

export default edgeCaseDemo
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...h(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"droprightwhile",children:"dropRightWhile"}),`
`,n.jsx(i.p,{children:"创建一个切片数组，去除数组中从末尾开始到谓词函数返回假值结束的元素"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"dropRightWhile"})," 创建一个切片数组，去除数组中从末尾开始到谓词函数返回假值结束的元素。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据处理和转换"}),`
`,n.jsx(i.li,{children:"功能组合和增强"}),`
`,n.jsx(i.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["点击按钮查看 ",n.jsx(i.code,{children:"dropRightWhile"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(i.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(i.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"每次迭代调用的函数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"unknown"})]}),`
`,n.jsx(i.li,{children:"描述：返回数组的剩余切片"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"dropRightWhile/index.ts"})," 导出 dropRightWhile 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 创建一个切片数组，去除数组中从末尾开始到谓词函数返回假值结束的元素"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(e={}){const{wrapper:i}={...h(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{g as default};
