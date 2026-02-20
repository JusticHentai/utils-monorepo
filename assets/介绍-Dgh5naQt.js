import{j as l}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import pull from '../../../packages/js-utils/src/pull'
import pullAll from '../../../packages/js-utils/src/pullAll'

const pullDemo = () => {
  const arr1 = ['a', 'b', 'c', 'a', 'b']
  pull(arr1, 'a', 'c')
  action('pull - 移除 a, c')({ 结果: arr1 })

  const arr2 = [1, 2, 3, 1, 2]
  pullAll(arr2, [1, 3])
  action('pullAll - 移除 [1, 3]')({ 结果: arr2 })
}

export default pullDemo
`,d=`import { action } from 'storybook/actions'
import pullAt from '../../../packages/js-utils/src/pullAt'

const pullAtDemo = () => {
  const arr = ['a', 'b', 'c', 'd']
  const removed = pullAt(arr, [1, 3])

  action('pullAt - 移除索引 1, 3')({
    剩余: arr,
    被移除: removed,
  })
}

export default pullAtDemo
`;function e(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return l.jsxs(l.Fragment,{children:[l.jsx(n.h1,{id:"pull",children:"pull"}),`
`,l.jsx(n.p,{children:"移除数组中的指定值（原地修改）。"}),`
`,l.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,l.jsxs(n.p,{children:[l.jsx(n.code,{children:"pull"})," 系列函数从数组中移除指定值。包括 ",l.jsx(n.code,{children:"pullAll"}),"、",l.jsx(n.code,{children:"pullAllBy"}),"、",l.jsx(n.code,{children:"pullAllWith"}),"、",l.jsx(n.code,{children:"pullAt"}),"。"]}),`
`,l.jsxs(n.p,{children:[l.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsx(n.li,{children:"从数组中删除特定元素"}),`
`,l.jsx(n.li,{children:"批量移除元素"}),`
`,l.jsx(n.li,{children:"按条件或索引移除"}),`
`]}),`
`,l.jsx(n.h2,{id:"pull-移除指定值",children:"pull 移除指定值"}),`
`,l.jsxs(n.p,{children:["使用 ",l.jsx(n.code,{children:"pull"})," 和 ",l.jsx(n.code,{children:"pullAll"})," 从数组中移除指定的值。"]}),`
`,l.jsx(s,{language:"typescript",children:i}),`
`,l.jsx(n.h2,{id:"pullat-按索引移除",children:"pullAt 按索引移除"}),`
`,l.jsxs(n.p,{children:["使用 ",l.jsx(n.code,{children:"pullAt"})," 按索引位置移除元素，返回被移除的元素。"]}),`
`,l.jsx(s,{language:"typescript",children:d}),`
`,l.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"参数名"}),l.jsx("th",{children:"类型"}),l.jsx("th",{children:"描述"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"array"}),l.jsx("td",{children:l.jsx("code",{children:"T[]"})}),l.jsx("td",{children:"要修改的数组"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"...values / values / indexes"}),l.jsx("td",{children:l.jsx("code",{children:"T[] | number[]"})}),l.jsx("td",{children:"要移除的值或索引"})]})]})]}),`
`,l.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,l.jsxs(n.ul,{children:[`
`,l.jsxs(n.li,{children:["类型：",l.jsx(n.code,{children:"T[]"})]}),`
`,l.jsx(n.li,{children:"描述：修改后的原数组（pull/pullAll）或被移除的元素数组（pullAt）"}),`
`]}),`
`,l.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,l.jsxs(n.ol,{children:[`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"文件职责"}),": ",l.jsx(n.code,{children:"index.ts"})," 提供 pull、pullAll、pullAllBy、pullAllWith、pullAt 五个函数"]}),`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"核心流程"}),": pull/pullAll 遍历数组移除匹配值，pullAt 按索引移除"]}),`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"关键技术点"}),": 原地修改数组，splice 操作，pullAllBy/With 支持自定义比较"]}),`
`,l.jsxs(n.li,{children:[l.jsx(n.strong,{children:"数据流向"}),": 数组 + 目标值/索引 → 遍历匹配 → 移除元素 → 返回修改后的数组"]}),`
`]})]})}function j(r={}){const{wrapper:n}={...c(),...r.components};return n?l.jsx(n,{...r,children:l.jsx(e,{...r})}):e(r)}export{j as default};
