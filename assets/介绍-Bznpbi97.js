import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import isArguments from '../../../packages/js-utils/src/isArguments'

const isArgumentsDemo = () => {
  // 在函数内部获取 arguments
  function testFn() { return arguments }
  const args = testFn()

  action('isArguments 演示')({
    'arguments 对象': isArguments(args),
    '普通数组': isArguments([1, 2, 3]),
    '字符串': isArguments('abc'),
    'null': isArguments(null),
  })
}

export default isArgumentsDemo
`,c=`import { action } from 'storybook/actions'
import isArguments from '../../../packages/js-utils/src/isArguments'

const edgeCaseDemo = () => {
  // eslint-disable-next-line prefer-rest-params
  const args = (function() { return arguments })()
  const results = {
    'arguments 对象': isArguments(args),
    '普通数组': isArguments([1, 2]),
    'null': isArguments(null),
    'undefined': isArguments(undefined),
  }

  action('isArguments - 边界情况')(results)
}

export default edgeCaseDemo
`;function t(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"isarguments",children:"isArguments"}),`
`,n.jsx(s.p,{children:"检查 value 是否是类 arguments 对象"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"isArguments"})," 检查 value 是否是类 arguments 对象。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(s.li,{children:"数据验证和过滤"}),`
`,n.jsx(s.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"isArguments"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"value is IArguments"})]}),`
`,n.jsx(s.li,{children:"描述：如果是 arguments 对象，返回 true"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"isArguments/index.ts"})," 导出 isArguments 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 检查 value 是否是类 arguments 对象"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用 Object.prototype.toString 进行类型判断"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t(e)}export{g as default};
