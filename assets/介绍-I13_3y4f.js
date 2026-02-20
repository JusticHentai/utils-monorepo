import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import keyBy from '../../../packages/js-utils/src/keyBy'

const keyByDemo = () => {
  // 基础：按属性分组
  const users = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 },
  ]

  action('keyBy - 按属性分组')({
    输入: users,
    'keyBy(users, "dir")': keyBy(users, 'dir'),
    说明: '按 dir 属性创建索引',
  })

  // 自定义函数 iteratee
  const byCharCode = keyBy(users, (obj) => String.fromCharCode(obj.code))
  action('keyBy - 自定义函数')({
    说明: '使用 String.fromCharCode 作为键',
    结果: byCharCode,
  })

  // 重复键 — 后面的值覆盖前面的
  const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
  ]
  action('keyBy - 重复键(后者覆盖)')({
    输入: items,
    结果: keyBy(items, 'type'),
    说明: '两个 fruit，最后的 banana 覆盖 apple',
  })
}

export default keyByDemo`,d=`import { action } from 'storybook/actions'
import keyBy from '../../../packages/js-utils/src/keyBy'

const keyByFnDemo = () => {
  // 自定义函数作为迭代器
  const users = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 },
  ]

  const byCharCode = keyBy(users, (obj) => String.fromCharCode(obj.code))
  action('keyBy - 自定义函数分组')({
    输入: users,
    说明: '使用 String.fromCharCode(obj.code) 作为键',
    结果: byCharCode,
  })

  // 使用复合键
  const products = [
    { category: 'food', id: 1, name: 'apple' },
    { category: 'drink', id: 2, name: 'cola' },
    { category: 'food', id: 3, name: 'bread' },
  ]

  const byCompositeKey = keyBy(
    products,
    (item) => \`\${item.category}-\${item.id}\`
  )
  action('keyBy - 复合键')({
    输入: products,
    说明: '使用 category-id 作为复合键',
    结果: byCompositeKey,
  })
}

export default keyByFnDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"keyby",children:"keyBy"}),`
`,n.jsx(e.p,{children:"根据迭代器返回值将集合组织成对象。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"keyBy"})," 根据迭代器函数的返回值或属性名作为键，将集合元素组织成一个对象。相同键的后值会覆盖前值。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将数组转为以 ID 为键的对象（快速查找）"}),`
`,n.jsx(e.li,{children:"数据索引构建"}),`
`,n.jsx(e.li,{children:"API 响应数据结构化"}),`
`]}),`
`,n.jsx(e.h2,{id:"按属性名分组",children:"按属性名分组"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"keyBy"})," 按指定属性名将数组元素组织成对象。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"自定义函数分组",children:"自定义函数分组"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"keyBy"})," 传入自定义函数，按函数返回值组织对象。"]}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"iteratee"}),n.jsx("td",{children:n.jsx("code",{children:"((value: T) => unknown) | keyof T"})}),n.jsx("td",{children:"迭代器函数或属性名"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Record<string, T>"})]}),`
`,n.jsx(e.li,{children:"描述：以迭代器返回值为键的对象"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现集合到对象的键值映射"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 遍历集合 → 对每个元素调用迭代器获取键 → 以键值对构建对象"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 支持函数和属性名两种迭代器形式，同键覆盖策略"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 集合 + 迭代器 → 遍历生成键 → 构建映射对象 → 返回结果"]}),`
`]})]})}function a(r={}){const{wrapper:e}={...o(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{a as default};
