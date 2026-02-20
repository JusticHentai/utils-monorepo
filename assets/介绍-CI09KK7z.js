import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import update from '../../../packages/js-utils/src/update'

const updateDemo = () => {
  const obj = { a: { b: { c: 1 } } }
  update(obj, 'a.b.c', (n) => n + 1)
  action('update - 递增')({ 结果: obj })

  const data = { counts: { views: 100 } }
  update(data, 'counts.views', (v) => v * 2)
  action('update - 翻倍')({ 结果: data })
}

export default updateDemo
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"update",children:"update"}),`
`,n.jsx(e.p,{children:"使用更新函数修改对象路径上的值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"update"})," 使用更新函数修改对象指定路径的值（原地修改）。",n.jsx(e.code,{children:"updateWith"})," 支持自定义中间值创建。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"基于当前值更新属性"}),`
`,n.jsx(e.li,{children:"深层嵌套值的增量更新"}),`
`,n.jsx(e.li,{children:"不可变更新模式"}),`
`]}),`
`,n.jsx(e.h2,{id:"路径值更新",children:"路径值更新"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"update"})," 通过更新函数修改指定路径的值。"]}),`
`,n.jsx(i,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要修改的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"属性路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"updater"}),n.jsx("td",{children:n.jsx("code",{children:"(value) => unknown"})}),n.jsx("td",{children:"更新函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"T"})]}),`
`,n.jsx(e.li,{children:"描述：修改后的原对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 提供 update 和 updateWith"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 解析路径 → 获取当前值 → 调用更新函数 → 设置新值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 路径解析，get + set 组合操作"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 对象 + 路径 + 更新函数 → 获取当前值 → 更新 → 设置回去"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{a as default};
