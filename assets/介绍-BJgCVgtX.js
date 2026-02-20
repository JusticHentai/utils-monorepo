import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isSymbol from '../../../packages/js-utils/src/isSymbol'

const isSymbolDemo = () => {
  action('isSymbol 演示')({
    'Symbol("a")': isSymbol(Symbol('a')),
    'Symbol.iterator': isSymbol(Symbol.iterator),
    '"abc"': isSymbol('abc'),
    '123': isSymbol(123),
  })
}

export default isSymbolDemo
`,t=`import { action } from 'storybook/actions'
import isSymbol from '../../../packages/js-utils/src/isSymbol'

const edgeCaseDemo = () => {
  const results = {
    'Symbol()': isSymbol(Symbol()),
    'Symbol.iterator': isSymbol(Symbol.iterator),
    '"symbol"字符串': isSymbol('symbol'),
    'null': isSymbol(null),
  }

  action('isSymbol - 边界情况')(results)
}

export default edgeCaseDemo
`;function i(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...l.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.h1,{id:"issymbol",children:"isSymbol"}),`
`,s.jsx(n.p,{children:"检查 value 是否是 Symbol"}),`
`,s.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"isSymbol"})," 检查 value 是否是 Symbol。"]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,s.jsx(n.li,{children:"数据验证和过滤"}),`
`,s.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,s.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,s.jsxs(n.p,{children:["点击按钮查看 ",s.jsx(n.code,{children:"isSymbol"})," 的基本使用效果。"]}),`
`,s.jsx(o,{language:"typescript",children:r}),`
`,s.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,s.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,s.jsx(o,{language:"typescript",children:t}),`
`,s.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"参数名"}),s.jsx("th",{children:"类型"}),s.jsx("th",{children:"描述"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"value"}),s.jsx("td",{children:s.jsx("code",{children:"unknown"})}),s.jsx("td",{children:"要检查的值"})]})})]}),`
`,s.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["类型：",s.jsx(n.code,{children:"value is symbol"})]}),`
`,s.jsx(n.li,{children:"描述：如果是 Symbol，返回 true"}),`
`]}),`
`,s.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"文件职责"}),": ",s.jsx(n.code,{children:"isSymbol/index.ts"})," 导出 isSymbol 函数"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是 Symbol"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"关键技术点"}),": 使用 Object.prototype.toString 进行类型判断"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function b(l={}){const{wrapper:n}={...e(),...l.components};return n?s.jsx(n,{...l,children:s.jsx(i,{...l})}):i(l)}export{b as default};
