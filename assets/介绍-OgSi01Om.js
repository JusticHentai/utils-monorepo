import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isMatchWith from '../../../packages/js-utils/src/isMatchWith'

const isMatchWithDemo = () => {
  const object = { greeting: 'hello' }
  const source = { greeting: 'HELLO' }

  const result = isMatchWith(object, source, (objVal, srcVal) => {
    if (typeof objVal === 'string' && typeof srcVal === 'string') {
      return objVal.toLowerCase() === srcVal.toLowerCase()
    }
    return undefined
  })

  action('isMatchWith 演示')({
    对象: object,
    匹配源: source,
    '忽略大小写匹配': result,
  })
}

export default isMatchWithDemo
`,h=`import { action } from 'storybook/actions'
import isMatchWith from '../../../packages/js-utils/src/isMatchWith'

const edgeCaseDemo = () => {
  const customizer = (objVal, srcVal) => typeof objVal === 'string' ? objVal.includes(srcVal) : undefined
  const results = {
    '自定义匹配': isMatchWith({ a: 'hello world' }, { a: 'hello' }, customizer),
    '不匹配': isMatchWith({ a: 'hello' }, { a: 'xyz' }, customizer),
    '空 source': isMatchWith({ a: 1 }, {}, customizer),
  }

  action('isMatchWith - 边界情况')(results)
}

export default edgeCaseDemo
`;function t(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"ismatchwith",children:"isMatchWith"}),`
`,n.jsx(s.p,{children:"类似于 isMatch，但支持自定义比较器"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"isMatchWith"})," 类似于 isMatch，但支持自定义比较器。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(s.li,{children:"数据验证和过滤"}),`
`,n.jsx(s.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"isMatchWith"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:r}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:h}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"source"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要匹配的属性值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"customizer"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"自定义比较函数"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"unknown"})]}),`
`,n.jsx(s.li,{children:"描述：如果 object 匹配，返回 true"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"isMatchWith/index.ts"})," 导出 isMatchWith 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 类似于 isMatch，但支持自定义比较器"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(e={}){const{wrapper:s}={...c(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{u as default};
