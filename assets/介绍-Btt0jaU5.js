import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import findIndex from '../../../packages/js-utils/src/findIndex'

const findIndexDemo = () => {
  const objects = [
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ]

  // 返回匹配元素的索引
  action('findIndex - 返回匹配索引')(
    findIndex(objects, (obj) => Boolean(obj.a)),
  )

  // 找不到返回 -1
  action('findIndex - 找不到返回 -1')(
    findIndex(objects, (obj) => obj.a === 3),
  )

  // 空数组返回 -1
  action('findIndex - 空数组')(
    findIndex([], () => true),
  )
}

export default findIndexDemo
`,c=`import { action } from 'storybook/actions'
import findLastIndex from '../../../packages/js-utils/src/findLastIndex'

const findLastIndexDemo = () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false },
  ]

  action('findLastIndex - 从末尾查找')({
    结果: findLastIndex(users, (o) => !o.active),
    说明: '返回最后一个匹配元素的索引',
  })

  action('findLastIndex - 指定起始位置')({
    结果: findLastIndex(users, (o) => !o.active, 1),
    说明: '从索引 1 开始向前查找',
  })
}

export default findLastIndexDemo
`;function s(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"findindex",children:"findIndex"}),`
`,n.jsx(e.p,{children:"返回数组中第一个满足断言函数的元素的索引。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"findIndex"})," 系列函数用于查找数组中满足条件的元素索引。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"包含的函数"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"findIndex"})," - 从前向后查找，返回第一个匹配元素的索引"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"findLastIndex"})," - 从后向前查找，返回最后一个匹配元素的索引"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"查找特定元素在数组中的位置"}),`
`,n.jsx(e.li,{children:"判断元素是否存在于数组中"}),`
`,n.jsx(e.li,{children:"配合 splice 删除特定元素"}),`
`]}),`
`,n.jsx(e.h2,{id:"findindex-1",children:"findIndex"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"findlastindex",children:"findLastIndex"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要查找的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"Function | Object | string"})}),n.jsx("td",{children:"断言函数、匹配对象或属性名"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"fromIndex"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"开始查找的索引位置"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：匹配元素的索引，未找到返回 -1"}),`
`]})]})}function f(d={}){const{wrapper:e}={...r(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(s,{...d})}):s(d)}export{f as default};
