import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import uniqWith from '../../../packages/js-utils/src/uniqWith'

const uniqWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 2 }]
  action('uniqWith 演示')({
    '自定义比较去重': uniqWith(objects, (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default uniqWithDemo
`,h=`import { action } from 'storybook/actions'
import uniqWith from '../../../packages/js-utils/src/uniqWith'

const edgeCaseDemo = () => {
  action('uniqWith - 边界情况')({
    '深度比较': uniqWith([{ x: 1 }, { x: 2 }, { x: 1 }], (a, b) => a.x === b.x), '空数组': uniqWith([], (a, b) => a === b)
  })
}

export default edgeCaseDemo
`;function r(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"uniqwith",children:"uniqWith"}),`
`,n.jsx(i.p,{children:"根据比较函数去重"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"uniqWith"})," 根据比较函数去重。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据处理和转换"}),`
`,n.jsx(i.li,{children:"功能组合和增强"}),`
`,n.jsx(i.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["点击按钮查看 ",n.jsx(i.code,{children:"uniqWith"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(i.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:h}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"需要去重的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"comparator"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"比较函数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"unknown"})]}),`
`,n.jsx(i.li,{children:"描述：返回去重后的新数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"uniqWith/index.ts"})," 导出 uniqWith 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 根据比较函数去重"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(s={}){const{wrapper:i}={...t(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(r,{...s})}):r(s)}export{u as default};
