import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import forEachRight from '../../../packages/js-utils/src/forEachRight'

const forEachRightDemo = () => {
  const result = []
  forEachRight([1, 2, 3], (value) => { result.push(value) })
  action('forEachRight 演示')({ '从右到左遍历': result })
}

export default forEachRightDemo
`,o=`import { action } from 'storybook/actions'
import forEachRight from '../../../packages/js-utils/src/forEachRight'

const edgeCaseDemo = () => {
  const r: number[] = []
  forEachRight([1, 2, 3], (v) => r.push(v))

  action('forEachRight - 边界情况')({
    '反向遍历数组': r,
  })
}

export default edgeCaseDemo
`;function i(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"foreachright",children:"forEachRight"}),`
`,n.jsx(r.p,{children:"类似 forEach，但从右到左遍历集合"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"forEachRight"})," 类似 forEach，但从右到左遍历集合。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"遍历集合进行副作用操作"}),`
`,n.jsx(r.li,{children:"批量处理数据元素"}),`
`,n.jsx(r.li,{children:"对象属性的逐一处理"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"forEachRight"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要遍历的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"每次迭代调用的函数"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"unknown"})]}),`
`,n.jsx(r.li,{children:"描述：返回集合"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"forEachRight/index.ts"})," 导出 forEachRight 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 类似 forEach，但从右到左遍历集合"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(e={}){const{wrapper:r}={...c(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{g as default};
