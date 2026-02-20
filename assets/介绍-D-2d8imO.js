import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import partition from '../../../packages/js-utils/src/partition'

const partitionDemo = () => {
  // 基本分组 (lodash: partition([1,0,1], identity) => [[1,1],[0]])
  const numbers = [1, 2, 3, 4, 5, 6]
  const [evens, odds] = partition(numbers, (n) => n % 2 === 0)
  action('partition - 奇偶分组')({ evens, odds })

  // 空数组 (lodash: partition([], identity) => [[], []])
  action('partition - 空数组')(partition([], (x) => !!x))

  // 全部满足条件
  action('partition - 全部为true')(partition([1, 2, 3], () => true))

  // 全部不满足条件
  action('partition - 全部为false')(partition([1, 2, 3], () => false))

  // 对象数组分组
  const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
  ]
  const [active, inactive] = partition(users, (u) => u.active)
  action('partition - 活跃/非活跃用户')({ active, inactive })
}

export default partitionDemo`;function e(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"partition",children:"partition"}),`
`,n.jsx(i.p,{children:"根据条件将集合分成两组。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"partition"})," 根据断言函数将集合分成两组：满足条件的和不满足条件的。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据分类"}),`
`,n.jsx(i.li,{children:"分离通过/未通过验证的数据"}),`
`,n.jsx(i.li,{children:"将列表按条件拆分"}),`
`]}),`
`,n.jsx(i.h2,{id:"条件分组",children:"条件分组"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"partition"})," 将数组按条件分成两组。"]}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要分组的集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"(value: T, index: number, array: T[]) => boolean"})}),n.jsx("td",{children:"断言函数"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"[T[], T[]]"})]}),`
`,n.jsx(i.li,{children:"描述：[满足条件的元素, 不满足条件的元素]"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 实现集合条件分组"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 遍历集合 → 对每个元素执行断言 → 分别放入两个数组"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 单次遍历完成分组，返回二元组"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 集合 + 断言 → 遍历判断 → 分入两组 → 返回 [truthy, falsy]"]}),`
`]})]})}function j(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(e,{...t})}):e(t)}export{j as default};
