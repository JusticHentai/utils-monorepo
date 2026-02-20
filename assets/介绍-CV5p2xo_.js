import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import maxBy from '../../../packages/js-utils/src/maxBy'

const maxByDemo = () => {
  const objects = [{ n: 1 }, { n: 2 }]
  action('maxBy 演示')({
    '按 n 取最大': maxBy(objects, (o) => o.n),
  })
}

export default maxByDemo
`,d=`import { action } from 'storybook/actions'
import maxBy from '../../../packages/js-utils/src/maxBy'

const edgeCaseDemo = () => {
  const items = [{ n: 1 }, { n: 2 }]
  action('maxBy - 边界情况')({
    '对象数组': maxBy(items, (o) => o.n),
    '空数组': maxBy([], (o) => o),
    '单元素': maxBy([{ n: 5 }], (o) => o.n),
  })
}

export default edgeCaseDemo
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"maxby",children:"maxBy"}),`
`,n.jsx(s.p,{children:"类似于 max，但可以指定迭代器"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"maxBy"})," 类似于 max，但可以指定迭代器。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"maxBy"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要迭代的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"迭代器函数"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"unknown"})]}),`
`,n.jsx(s.li,{children:"描述：返回最大值元素"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"maxBy/index.ts"})," 导出 maxBy 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 类似于 max，但可以指定迭代器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
