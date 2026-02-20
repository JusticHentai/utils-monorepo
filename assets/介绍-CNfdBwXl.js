import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import { depsAreSame } from '../../../packages/element-utils/src/depsAreSame'

const basicDemo = () => {
  // 相同的原始值
  const result1 = depsAreSame([1, 'a', true], [1, 'a', true])
  action('相同原始值比较')(result1) // true

  // 不同的原始值
  const result2 = depsAreSame([1, 'a'], [1, 'b'])
  action('不同原始值比较')(result2) // false

  // 同一个对象引用
  const obj = { x: 1 }
  const result3 = depsAreSame([obj], [obj])
  action('同一对象引用比较')(result3) // true

  // 不同对象引用（即使内容相同）
  const result4 = depsAreSame([{ x: 1 }], [{ x: 1 }])
  action('不同对象引用比较')(result4) // false

  // NaN 比较
  const result5 = depsAreSame([NaN], [NaN])
  action('NaN 比较')(result5) // true (Object.is)
}

export default basicDemo
`;function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"depsaresame",children:"depsAreSame"}),`
`,e.jsx(n.p,{children:"比较两个依赖数组是否相同。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"depsAreSame"})," 用于比较两个 React 依赖数组是否相同，使用 ",e.jsx(n.code,{children:"Object.is"})," 进行逐项比较。这是 React hooks 内部用于判断依赖是否变化的方法。"]}),`
`,e.jsx(n.p,{children:"常用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"自定义 hooks 中判断依赖变化"}),`
`,e.jsx(n.li,{children:"实现自定义的 memoization 逻辑"}),`
`,e.jsx(n.li,{children:"配合 createEffectWithTarget 等工具使用"}),`
`]}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(c,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"oldDeps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"旧依赖数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deps"}),e.jsx("td",{children:e.jsx("code",{children:"DependencyList"})}),e.jsx("td",{children:"新依赖数组"})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"boolean"}),"，如果两个数组相同则返回 ",e.jsx(n.code,{children:"true"}),"。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 包含比较函数的实现"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"首先检查是否是同一个引用"}),`
`,e.jsx(n.li,{children:"然后逐项使用 Object.is 比较"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"使用 Object.is 而非 === 进行比较"}),`
`,e.jsx(n.li,{children:"Object.is 能正确处理 NaN 和 +0/-0"}),`
`]}),`
`]}),`
`]})]})}function a(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{a as default};
