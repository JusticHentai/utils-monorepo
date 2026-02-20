import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import without from '../../../packages/js-utils/src/without'

const withoutDemo = () => {
  // 基础排除
  action('without - 排除 1, 2')({
    输入: [2, 1, 2, 3],
    结果: without([2, 1, 2, 3], 1, 2),
  })

  // 严格相等 - 对象引用
  const obj1 = { a: 1 }
  const obj2 = { b: 2 }
  const arr = [obj1, obj2]
  action('without - 严格相等（新对象不匹配）')({
    输入: arr,
    '排除 { a: 1 }（新对象）': without(arr, { a: 1 } as any),
    '排除 obj1（同引用）': without(arr, obj1),
  })

  // 移除所有出现
  action('without - 移除所有出现')({
    输入: [1, 2, 3, 1, 2, 3],
    结果: without([1, 2, 3, 1, 2, 3], 1, 2),
  })

  // 不修改原数组
  const original = [1, 2, 3, 4]
  const result = without(original, 2, 4)
  action('without - 不修改原数组')({
    原数组: original,
    结果: result,
    是否新引用: result !== original,
  })

  // 空数组
  action('without - 空数组')(without([], 1, 2))
}

export default withoutDemo
`;function s(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"without",children:"without"}),`
`,n.jsx(i.p,{children:"创建排除指定值的新数组。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"without"})," 创建一个新数组，排除所有给定值（不修改原数组）。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"从数组中移除特定值"}),`
`,n.jsx(i.li,{children:"数据过滤"}),`
`,n.jsx(i.li,{children:"不可变数组操作"}),`
`]}),`
`,n.jsx(i.h2,{id:"排除指定值",children:"排除指定值"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"without"})," 创建排除指定值的新数组。"]}),`
`,n.jsx(o,{language:"typescript",children:e}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"...values"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要排除的值"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[]"})]}),`
`,n.jsx(i.li,{children:"描述：排除指定值后的新数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 实现数组值排除"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 遍历数组 → 排除与给定值相等的元素"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": filter + includes，不修改原数组"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 数组 + 排除值列表 → 过滤 → 返回新数组"]}),`
`]})]})}function u(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(s,{...t})}):s(t)}export{u as default};
