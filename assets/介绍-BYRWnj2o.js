import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import isEqualWith from '../../../packages/js-utils/src/isEqualWith'

const isEqualWithDemo = () => {
  // 忽略大小写比较字符串
  const caseInsensitive = (a: unknown, b: unknown) => {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.toLowerCase() === b.toLowerCase()
    }
    return undefined
  }

  const result1 = isEqualWith({ name: 'Hello' }, { name: 'hello' }, caseInsensitive)

  action('isEqualWith - 忽略大小写')({
    值1: { name: 'Hello' },
    值2: { name: 'hello' },
    结果: result1,
  })

  // 近似浮点数比较
  const approxEqual = (a: unknown, b: unknown) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return Math.abs(a - b) < 0.01
    }
    return undefined
  }

  const result2 = isEqualWith({ val: 0.1 + 0.2 }, { val: 0.3 }, approxEqual)

  action('isEqualWith - 浮点近似')({
    值1: { val: 0.1 + 0.2 },
    值2: { val: 0.3 },
    结果: result2,
  })
}

export default isEqualWithDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isequalwith",children:"isEqualWith"}),`
`,n.jsx(e.p,{children:"使用自定义比较器深度比较两个值是否相等。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isEqualWith"})," 类似于 ",n.jsx(e.code,{children:"isEqual"}),"，但允许传入自定义比较函数来定制比较逻辑。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"忽略某些属性的对象比较"}),`
`,n.jsx(e.li,{children:"自定义类型的相等性判断"}),`
`,n.jsx(e.li,{children:"精度比较（如浮点数近似相等）"}),`
`]}),`
`,n.jsx(e.h2,{id:"自定义比较器",children:"自定义比较器"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"isEqualWith"})," 传入自定义比较函数，实现特殊的相等性判断逻辑。"]}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要比较的第一个值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"other"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要比较的第二个值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"customizer"}),n.jsx("td",{children:n.jsx("code",{children:"(objValue, othValue, key?, object?, other?) => boolean | undefined"})}),n.jsx("td",{children:"自定义比较函数，返回 undefined 时使用默认比较"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"描述：两个值是否相等"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现带自定义比较器的深度相等比较"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 先调用自定义比较器 → 返回 undefined 时递归使用默认比较"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 递归比较数组和对象，自定义比较器的回退机制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 两个值 + 比较器 → 自定义比较 → 默认深度比较 → 返回布尔值"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
