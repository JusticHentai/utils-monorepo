import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import orderBy from '../../../packages/js-utils/src/orderBy'

const basicDemo = () => {
  // lodash 测试用例的数据
  const objects = [
    { a: 'x', b: 3 },
    { a: 'y', b: 4 },
    { a: 'x', b: 1 },
    { a: 'y', b: 2 },
  ]

  // lodash 测试: 单属性 desc
  action('orderBy - 单属性降序')({
    结果: orderBy(objects, ['a'], ['desc']),
    说明: '按 a 降序: y,y,x,x',
  })

  // lodash 测试: 默认升序
  action('orderBy - 默认升序')({
    结果: orderBy(objects, ['a', 'b']),
    说明: '未指定 orders 时默认升序',
  })
}

export default basicDemo`,i=`import { action } from 'storybook/actions'
import orderBy from '../../../packages/js-utils/src/orderBy'

const multiDemo = () => {
  const objects = [
    { a: 'x', b: 3 },
    { a: 'y', b: 4 },
    { a: 'x', b: 1 },
    { a: 'y', b: 2 },
  ]

  // lodash 测试: 多属性多方向
  action('orderBy - 多条件排序')({
    'orderBy(objects, ["a", "b"], ["desc", "asc"])': orderBy(objects, ['a', 'b'], ['desc', 'asc']),
    说明: '先按 a 降序，a 相同则按 b 升序',
    期望顺序: 'y/2, y/4, x/1, x/3',
  })

  // lodash 测试: 部分 order 缺省时默认 asc
  action('orderBy - 部分缺省')({
    'orderBy(objects, ["a","b"], ["desc"])': orderBy(objects, ['a', 'b'], ['desc']),
    说明: 'b 的排序方向未指定，默认升序',
  })
}

export default multiDemo`,t=`import { action } from 'storybook/actions'
import sortBy from '../../../packages/js-utils/src/sortBy'

const sortByDemo = () => {
  const users = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 },
  ]

  action('sortBy - 简化排序（升序）')({
    输入: users,
    结果: sortBy(users, ['age']),
    说明: 'sortBy 默认升序排序',
  })

  action('sortBy - 函数排序')({
    输入: users,
    结果: sortBy(users, [(o) => o.name.length]),
    说明: '按 name 长度排序',
  })
}

export default sortByDemo
`;function d(r){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"orderby",children:"orderBy"}),`
`,e.jsxs(n.p,{children:["根据指定的迭代函数或属性对集合进行排序。依次按 ",e.jsx(n.code,{children:"iteratees"})," 中的条件排序：先按第一个条件排，若相等则继续按下一个条件排，以此类推；一旦某个条件能分出先后，就直接返回结果，不再检查后续条件。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"orderBy"})," 和 ",e.jsx(n.code,{children:"sortBy"})," 函数用于对数组进行排序。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"包含的函数"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"orderBy"})," - 支持指定升序/降序"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"sortBy"})," - 简化版，默认升序"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"与原生 sort 的区别"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"不修改原数组"}),`
`,e.jsx(n.li,{children:"支持多条件排序"}),`
`,e.jsx(n.li,{children:"支持按属性名或函数排序"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"表格数据排序"}),`
`,e.jsx(n.li,{children:"列表排序展示"}),`
`,e.jsx(n.li,{children:"多条件复合排序"}),`
`]}),`
`,e.jsx(n.h2,{id:"orderby---基础排序",children:"orderBy - 基础排序"}),`
`,e.jsx(s,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"orderby---多条件排序",children:"orderBy - 多条件排序"}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"sortby---简化排序",children:"sortBy - 简化排序"}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"数据流解析",children:"数据流解析"}),`
`,e.jsxs(n.p,{children:["以 ",e.jsx(n.code,{children:'orderBy(objects, ["a","b"], ["desc"])'})," 为例，详细追踪排序过程："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`const objects = [
  { a: 'x', b: 3 },  // [0]
  { a: 'y', b: 4 },  // [1]
  { a: 'x', b: 1 },  // [2]
  { a: 'y', b: 2 },  // [3]
]
orderBy(objects, ['a', 'b'], ['desc'])
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"第一步：参数解析"})}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数"}),e.jsx("th",{children:"值"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"collection"})}),e.jsx("td",{children:"4 个对象"}),e.jsx("td",{children:"原数组不会被修改"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"iteratees"})}),e.jsx("td",{children:e.jsx("code",{children:'["a", "b"]'})}),e.jsxs("td",{children:["先按属性 ",e.jsx("code",{children:"a"})," 排序，再按属性 ",e.jsx("code",{children:"b"})," 排序"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"orders"})}),e.jsx("td",{children:e.jsx("code",{children:'["desc"]'})}),e.jsx("td",{children:"只指定了第一个排序方向为降序"})]})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["注意 ",e.jsx(n.code,{children:"orders"})," 长度为 1，而 ",e.jsx(n.code,{children:"iteratees"})," 长度为 2，第二个排序方向将使用默认值 ",e.jsx(n.code,{children:"SortOrder.ASC"}),"（升序）。"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"第二步：遍历 iteratees 确定排序方向"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`i=0 → iteratee="a", order=orders[0]="desc"   ✅ 显式指定
i=1 → iteratee="b", order=orders[1]=undefined → 回退为 SortOrder.ASC  ✅ 默认值
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"第三步：sort 比较过程"})}),`
`,e.jsxs(n.p,{children:["以比较 ",e.jsx(n.code,{children:"[0]{a:'x',b:3}"})," 和 ",e.jsx(n.code,{children:"[1]{a:'y',b:4}"})," 为例："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`轮次 i=0: iteratee="a", order="desc"
  valueA = 'x', valueB = 'y'
  'x' < 'y' → comparison = -1
  comparison !== 0，且 order === "desc" → 返回 -(-1) = 1
  → 'y' 排在 'x' 前面 ✅（降序）
`})}),`
`,e.jsxs(n.p,{children:["以比较 ",e.jsx(n.code,{children:"[1]{a:'y',b:4}"})," 和 ",e.jsx(n.code,{children:"[3]{a:'y',b:2}"})," 为例："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`轮次 i=0: iteratee="a", order="desc"
  valueA = 'y', valueB = 'y'
  'y' === 'y' → comparison = 0
  comparison === 0，继续下一轮

轮次 i=1: iteratee="b", order="asc"（默认值）
  valueA = 4, valueB = 2
  4 > 2 → comparison = 1
  comparison !== 0，且 order === "asc" → 返回 1
  → 2 排在 4 前面 ✅（升序）
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"最终结果"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 先按 a 降序（y > x），a 相同时按 b 升序（2 < 4，1 < 3）
[
  { a: 'y', b: 2 },  // 原 [3]
  { a: 'y', b: 4 },  // 原 [1]
  { a: 'x', b: 1 },  // 原 [2]
  { a: 'x', b: 3 },  // 原 [0]
]
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心机制总结"}),"：",e.jsx(n.code,{children:"orders"})," 数组与 ",e.jsx(n.code,{children:"iteratees"})," 数组按索引一一对应，缺省的排序方向默认为升序。降序通过对 ",e.jsx(n.code,{children:"comparison"})," 取反（",e.jsx(n.code,{children:"-comparison"}),"）实现。当前一个排序条件的结果为 0（相等）时，才会进入下一个排序条件。"]}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"orderby-1",children:"orderBy"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要排序的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"iteratees"}),e.jsx("td",{children:e.jsx("code",{children:"(string | Function)[]"})}),e.jsx("td",{children:"排序依据的属性名或函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"orders"}),e.jsx("td",{children:e.jsx("code",{children:"('asc' | 'desc')[]"})}),e.jsx("td",{children:"排序方向"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T[]"})]}),`
`,e.jsx(n.li,{children:"描述：排序后的新数组"}),`
`]})]})}function b(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{b as default};
