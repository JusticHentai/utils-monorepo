import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import find from '../../../packages/js-utils/src/find'

const findDemo = () => {
  const objects = [
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ]

  // 返回第一个满足条件的元素
  action('find - 返回第一个 truthy 元素')(
    find(objects, (obj) => Boolean(obj.a)),
  )

  // 找不到返回 undefined
  action('find - 找不到返回 undefined')(
    find(objects, (obj) => obj.a === 3),
  )

  // 空数组返回 undefined
  action('find - 空数组')(
    find([], () => true),
  )
}

export default findDemo
`,c=`import { action } from 'storybook/actions'
import findLast from '../../../packages/js-utils/src/findLast'

const findLastDemo = () => {
  const nums = [1, 2, 3, 4, 5]
  action('findLast - 从右查找第一个偶数')(findLast(nums, (n) => n % 2 === 0))
}

export default findLastDemo
`;function s(i){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d.h1,{id:"find",children:"find"}),`
`,n.jsxs(d.p,{children:["返回第一个满足谓词函数的元素，同时提供 ",n.jsx(d.code,{children:"findLast"})," 从右查找。"]}),`
`,n.jsx(d.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"find"})," 遍历集合，返回第一个使谓词函数返回 true 的元素。",n.jsx(d.code,{children:"findLast"})," 从集合末尾开始查找。找不到则返回 undefined。"]}),`
`,n.jsx(d.h2,{id:"find---查找第一个匹配",children:"find - 查找第一个匹配"}),`
`,n.jsx(e,{language:"typescript",children:r}),`
`,n.jsx(d.h2,{id:"findlast---从右查找",children:"findLast - 从右查找"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(d.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要搜索的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T) => boolean"})}),n.jsx("td",{children:"谓词函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"fromIndex"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"起始搜索位置（可选，默认0）"})]})]})]}),`
`,n.jsx(d.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsxs(d.li,{children:["类型：",n.jsx(d.code,{children:"T | undefined"})]}),`
`]}),`
`,n.jsx(d.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(d.ol,{children:[`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"文件职责"}),": ",n.jsx(d.code,{children:"find/index.ts"})," 导出 find（default）和 findLast（named）"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"核心流程"}),": 遍历集合（正向或逆向），返回第一个满足谓词的元素"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"关键技术点"}),": 短路返回、fromIndex 支持"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"数据流向"}),": 集合 → 遍历 → 谓词匹配 → 返回匹配元素或 undefined"]}),`
`]})]})}function f(i={}){const{wrapper:d}={...t(),...i.components};return d?n.jsx(d,{...i,children:n.jsx(s,{...i})}):s(i)}export{f as default};
