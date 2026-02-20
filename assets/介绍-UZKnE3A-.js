import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import drop from '../../../packages/js-utils/src/drop'

const dropDemo = () => {
  const array = [1, 2, 3]

  // 基础：移除前 N 个
  action('drop - 移除前2个')({ 输入: array, n: 2, 结果: drop(array, 2) })

  // 默认移除1个
  action('drop - 默认移除1个')({ 输入: array, 结果: drop(array) })

  // n < 1 返回全部（0, 负数）
  action('drop - n < 1 返回全部')({
    'n=0': drop(array, 0),
    'n=-1': drop(array, -1),
    'n=-Infinity': drop(array, -Infinity),
  })

  // n >= length 返回空数组
  action('drop - n >= length 返回空数组')({
    'n=3': drop(array, 3),
    'n=4': drop(array, 4),
    'n=Infinity': drop(array, Infinity),
  })

  // 浮点数被截断
  action('drop - 浮点数 n')({ 'drop([1,2,3], 1.6)': drop(array, 1.6) })
}

export default dropDemo
`,t=`import { action } from 'storybook/actions'
import dropRight from '../../../packages/js-utils/src/dropRight'

const dropRightDemo = () => {
  const array = [1, 2, 3]

  action('dropRight - 移除末尾2个')({ 输入: array, n: 2, 结果: dropRight(array, 2) })
  action('dropRight - 默认移除末尾1个')({ 结果: dropRight(array) })

  // n < 1 返回全部
  action('dropRight - n < 1 返回全部')({
    'n=0': dropRight(array, 0),
    'n=-1': dropRight(array, -1),
  })

  // n >= length 返回空数组
  action('dropRight - n >= length 返回空数组')({
    'n=3': dropRight(array, 3),
    'n=4': dropRight(array, 4),
  })
}

export default dropRightDemo
`,h=`import { action } from 'storybook/actions'
import dropWhile from '../../../packages/js-utils/src/dropWhile'

const dropWhileDemo = () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ]

  action('dropWhile - 函数断言')({
    输入: users,
    结果: dropWhile(users, (o) => !o.active),
    说明: '从开头移除元素直到断言返回 false',
  })

  action('dropWhile - 对象匹配')({
    输入: users,
    结果: dropWhile(users, { active: false }),
    说明: '移除匹配对象属性的元素',
  })
}

export default dropWhileDemo
`,l=`import { action } from 'storybook/actions'
import dropRightWhile from '../../../packages/js-utils/src/dropRightWhile'

const dropRightWhileDemo = () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false },
  ]

  action('dropRightWhile')({
    输入: users,
    结果: dropRightWhile(users, (o) => !o.active),
    说明: '从末尾移除元素直到断言返回 false',
  })
}

export default dropRightWhileDemo
`;function d(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"drop",children:"drop"}),`
`,n.jsx(r.p,{children:"创建一个切片数组，去除数组前面或后面的 n 个元素。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"drop"})," 系列函数用于从数组中移除指定数量的元素，返回新数组，不修改原数组。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"包含的函数"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"drop"})," - 从数组开头移除 n 个元素"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"dropRight"})," - 从数组末尾移除 n 个元素"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"dropWhile"})," - 从开头移除元素直到断言返回 false"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"dropRightWhile"})," - 从末尾移除元素直到断言返回 false"]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"分页数据处理"}),`
`,n.jsx(r.li,{children:"跳过数组前几项"}),`
`,n.jsx(r.li,{children:"根据条件过滤数组元素"}),`
`]}),`
`,n.jsx(r.h2,{id:"drop---从开头移除",children:"drop - 从开头移除"}),`
`,n.jsx(e,{language:"typescript",children:o}),`
`,n.jsx(r.h2,{id:"dropright---从末尾移除",children:"dropRight - 从末尾移除"}),`
`,n.jsx(e,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"dropwhile---条件移除开头",children:"dropWhile - 条件移除开头"}),`
`,n.jsx(e,{language:"typescript",children:h}),`
`,n.jsx(r.h2,{id:"droprightwhile---条件移除末尾",children:"dropRightWhile - 条件移除末尾"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(r.h3,{id:"drop--dropright",children:"drop / dropRight"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"要移除的元素数量，默认为 1"})]})]})]}),`
`,n.jsx(r.h3,{id:"dropwhile--droprightwhile",children:"dropWhile / dropRightWhile"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"Function | Object | string"})}),n.jsx("td",{children:"断言函数、匹配对象或属性名"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"T[]"})]}),`
`,n.jsx(r.li,{children:"描述：处理后的新数组"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(r.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"drop"}),": 使用 ",n.jsx(r.code,{children:"slice(n)"})," 截取从索引 n 开始的元素"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"dropRight"}),": 使用 ",n.jsx(r.code,{children:"slice(0, -n)"})," 截取除最后 n 个元素外的部分"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"dropWhile"}),": 从开头遍历，找到第一个不满足断言的索引，返回该索引后的元素"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"dropRightWhile"}),": 从末尾遍历，找到第一个不满足断言的索引，返回该索引前的元素"]}),`
`]}),`
`,n.jsx(r.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["使用 ",n.jsx(r.code,{children:"Array.prototype.slice()"})," 进行数组切片"]}),`
`,n.jsx(r.li,{children:"断言函数支持多种形式（函数、对象匹配、属性名）"}),`
`,n.jsx(r.li,{children:"返回新数组，保证不可变性"}),`
`]})]})}function u(i={}){const{wrapper:r}={...s(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(d,{...i})}):d(i)}export{u as default};
