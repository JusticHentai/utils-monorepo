import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import unset from '../../../packages/js-utils/src/unset'

const unsetDemo = () => {
  // 基础：字符串路径
  const obj1 = { a: 1, c: 2 }
  const result1 = unset(obj1, 'a')
  action('unset - 字符串路径')({
    返回: result1,
    对象: obj1,
  })

  // 数组路径
  const obj2 = { a: 1, c: 2 }
  unset(obj2, ['a'])
  action('unset - 数组路径')({ 对象: obj2 })

  // 深层嵌套
  const obj3 = { a: { b: null } }
  unset(obj3, 'a.b')
  action('unset - 深层嵌套')({ 对象: obj3 })

  // 数组元素
  const obj4 = { items: [1, 2, 3] }
  unset(obj4, 'items[1]')
  action('unset - 数组元素')({ 对象: obj4 })

  // 不存在的路径返回 true
  const obj5 = { a: { b: { c: null } } }
  action('unset - 不存在路径仍返回 true')({
    'z': unset(obj5, 'z'),
    'a.z': unset(obj5, 'a.z'),
    'a.b.z': unset(obj5, 'a.b.z'),
    对象未被修改: JSON.stringify(obj5),
  })

  // null 对象安全
  action('unset - null 对象返回 true')({
    结果: unset(null as any, 'a.b'),
  })
}

export default unsetDemo
`;function t(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"unset",children:"unset"}),`
`,n.jsx(s.p,{children:"移除对象指定路径的属性。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"unset"})," 移除对象指定路径上的属性，支持嵌套路径。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"删除嵌套属性"}),`
`,n.jsx(s.li,{children:"数据清理"}),`
`,n.jsx(s.li,{children:"动态属性移除"}),`
`]}),`
`,n.jsx(s.h2,{id:"移除指定路径属性",children:"移除指定路径属性"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"unset"})," 移除对象上指定路径的属性。"]}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要修改的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"要移除的属性路径"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：是否成功移除"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 实现路径属性移除"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 解析路径 → 逐级访问到父对象 → delete 目标属性"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 路径解析，delete 操作符"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 对象 + 路径 → 定位父对象 → 删除属性 → 返回布尔值"]}),`
`]})]})}function u(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{u as default};
