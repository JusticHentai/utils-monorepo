import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isArrayLike from '../../../packages/js-utils/src/isArrayLike'

const isArrayLikeDemo = () => {
  action('isArrayLike 演示')({
    '数组 [1, 2, 3]': isArrayLike([1, 2, 3]),
    '字符串 "abc"': isArrayLike('abc'),
    '普通对象 {}': isArrayLike({}),
    'null': isArrayLike(null),
    'number 123': isArrayLike(123),
  })
}

export default isArrayLikeDemo
`,t=`import { action } from 'storybook/actions'
import isArrayLike from '../../../packages/js-utils/src/isArrayLike'

const edgeCaseDemo = () => {
  const results = {
    '[]': isArrayLike([]),
    'string': isArrayLike('abc'),
    '{length:0}': isArrayLike({ length: 0 }),
    '函数': isArrayLike(() => {}),
    'null': isArrayLike(null),
    'number': isArrayLike(123),
  }

  action('isArrayLike - 边界情况')(results)
}

export default edgeCaseDemo
`;function s(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"isarraylike",children:"isArrayLike"}),`
`,n.jsx(r.p,{children:"检查 value 是否是类数组"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"isArrayLike"})," 检查 value 是否是类数组。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(r.li,{children:"数据验证和过滤"}),`
`,n.jsx(r.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"isArrayLike"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"unknown"})]}),`
`,n.jsx(r.li,{children:"描述：如果是类数组，返回 true"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"isArrayLike/index.ts"})," 导出 isArrayLike 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 检查 value 是否是类数组"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(i={}){const{wrapper:r}={...l(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
