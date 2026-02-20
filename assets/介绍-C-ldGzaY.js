import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import remove from '../../../packages/js-utils/src/remove'

const removeDemo = () => {
  // 基本用法: 移除偶数 (lodash: remove([1,2,3,4], isEven) => array=[1,3], removed=[2,4])
  const arr1 = [1, 2, 3, 4]
  const removed1 = remove(arr1, (n) => n % 2 === 0)
  action('remove - 移除偶数')({ 原数组变为: arr1, 被移除: removed1 })

  // 验证原地修改: remove 直接修改原数组
  const arr2 = [10, 20, 30, 40, 50]
  const beforeRef = arr2
  const removed2 = remove(arr2, (n) => n > 25)
  action('remove - 原地修改验证')({
    sameReference: arr2 === beforeRef,
    剩余: arr2,
    被移除: removed2,
  })

  // 谓词参数: (value, index, array)
  // lodash test: remove by even INDEX => array becomes [2] (keeps index 1's value)
  const arr3 = [1, 2, 3]
  const removed3 = remove(arr3, (_n, index) => index % 2 === 0)
  action('remove - 按索引移除(偶数索引)')({ 剩余: arr3, 被移除: removed3 })

  // 对象数组
  const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: false },
  ]
  const inactive = remove(users, (u) => !u.active)
  action('remove - 移除非活跃用户')({ 剩余: users, 被移除: inactive })

  // 空数组
  action('remove - 空数组')(remove([], () => true))
}

export default removeDemo`;function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"remove",children:"remove"}),`
`,e.jsx(n.p,{children:"移除满足条件的数组元素（原地修改）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"remove"})," 移除数组中所有满足谓词函数的元素，直接修改原数组，返回被移除的元素。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"按条件批量删除元素"}),`
`,e.jsx(n.li,{children:"数据过滤（需要保留被删除项）"}),`
`,e.jsx(n.li,{children:"列表项管理"}),`
`]}),`
`,e.jsx(n.h2,{id:"条件移除",children:"条件移除"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"remove"})," 移除数组中满足条件的元素。"]}),`
`,e.jsx(i,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"array"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要修改的数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"predicate"}),e.jsx("td",{children:e.jsx("code",{children:"(value, index, array) => boolean"})}),e.jsx("td",{children:"断言函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T[]"})]}),`
`,e.jsx(n.li,{children:"描述：被移除的元素数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 实现条件元素移除"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 遍历数组 → 执行谓词 → 匹配则从原数组移除并收集"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 原地修改数组，反向遍历避免索引偏移"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 数组 + 谓词 → 遍历判断 → 移除匹配项 → 返回被移除数组"]}),`
`]})]})}function m(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{m as default};
