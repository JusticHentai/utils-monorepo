import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isMatch from '../../../packages/js-utils/src/isMatch'

const isMatchDemo = () => {
  const obj = { a: 1, b: 2, c: 3 }

  action('isMatch - 匹配子集')({
    对象: obj,
    模式: { a: 1, b: 2 },
    结果: isMatch(obj, { a: 1, b: 2 }),
  })

  action('isMatch - 不匹配')({
    对象: obj,
    模式: { a: 1, b: 99 },
    结果: isMatch(obj, { a: 1, b: 99 }),
  })
}

export default isMatchDemo
`,h=`import { action } from 'storybook/actions'
import matches from '../../../packages/js-utils/src/matches'

const matchesDemo = () => {
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 25, active: true },
  ]

  const isActive25 = matches({ age: 25, active: true })
  const result = users.filter(isActive25)

  action('matches - 过滤匹配用户')({
    输入: users,
    模式: { age: 25, active: true },
    结果: result,
  })
}

export default matchesDemo
`;function i(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"ismatch",children:"isMatch"}),`
`,n.jsx(s.p,{children:"执行部分深度比较，检查对象是否包含匹配的属性值。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"isMatch"})," 检查对象是否包含 source 中所有属性的匹配值。还提供 ",n.jsx(s.code,{children:"isMatchWith"}),"（自定义比较器）和 ",n.jsx(s.code,{children:"matches"}),"（创建匹配谓词）。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"过滤符合条件的对象"}),`
`,n.jsx(s.li,{children:"模式匹配"}),`
`,n.jsx(s.li,{children:"对象属性子集验证"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础属性匹配",children:"基础属性匹配"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"isMatch"})," 检查对象是否包含指定的属性值。"]}),`
`,n.jsx(c,{language:"typescript",children:r}),`
`,n.jsx(s.h2,{id:"matches-创建匹配谓词",children:"matches 创建匹配谓词"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"matches"})," 创建一个匹配谓词函数，可用于 filter 等场景。"]}),`
`,n.jsx(c,{language:"typescript",children:h}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要检查的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"source"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要匹配的属性模式"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：对象是否包含匹配的属性值"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 提供 isMatch、isMatchWith、matches 三个函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 遍历 source 的属性 → 递归深度比较每个属性值"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 部分深度比较，matches 通过闭包创建谓词函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 对象 + 模式 → 遍历模式属性 → 深度比较每个值 → 返回布尔值"]}),`
`]})]})}function m(e={}){const{wrapper:s}={...t(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
