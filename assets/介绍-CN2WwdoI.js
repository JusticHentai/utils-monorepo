import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import pullAt from '../../../packages/js-utils/src/pullAt'

const pullAtDemo = () => {
  const array = ['a', 'b', 'c', 'd']
  const pulled = pullAt(array, [1, 3])
  action('pullAt 演示')({ '原数组': array, '被移除的元素': pulled })
}

export default pullAtDemo
`,d=`import { action } from 'storybook/actions'
import pullAt from '../../../packages/js-utils/src/pullAt'

const edgeCaseDemo = () => {
  const a = ['a', 'b', 'c', 'd']
  const removed = pullAt(a, [1, 3])

  action('pullAt - 边界情况')({
    '按索引移除': { 数组: a, 移除的: removed },
  })
}

export default edgeCaseDemo
`;function r(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"pullat",children:"pullAt"}),`
`,n.jsx(l.p,{children:"移除数组中指定索引的元素，并返回被移除的元素"}),`
`,n.jsx(l.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(l.p,{children:[n.jsx(l.code,{children:"pullAt"})," 移除数组中指定索引的元素，并返回被移除的元素。"]}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"数据处理和转换"}),`
`,n.jsx(l.li,{children:"功能组合和增强"}),`
`,n.jsx(l.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(l.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(l.p,{children:["点击按钮查看 ",n.jsx(l.code,{children:"pullAt"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(l.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(l.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(l.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要修改的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"indexes"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要移除的索引"})]})]})]}),`
`,n.jsx(l.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:["类型：",n.jsx(l.code,{children:"T[]"})]}),`
`,n.jsx(l.li,{children:"描述：返回被移除的元素数组"}),`
`]}),`
`,n.jsx(l.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"文件职责"}),": ",n.jsx(l.code,{children:"pullAt/index.ts"})," 导出 pullAt 函数"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"核心流程"}),": 移除数组中指定索引的元素，并返回被移除的元素"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(e={}){const{wrapper:l}={...i(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(r,{...e})}):r(e)}export{a as default};
