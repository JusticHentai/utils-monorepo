import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import isFunction from '../../../packages/js-utils/src/isFunction'

const functionDemo = () => {
  action('isFunction - 函数类型')({
    '箭头函数': isFunction(() => {}),
    'function 声明': isFunction(function() {}),
    'class': isFunction(class {}),
    'Array.isArray': isFunction(Array.isArray),
    'RegExp': isFunction(RegExp),
  })

  action('isFunction - 非函数类型')({
    '对象': isFunction({ a: 1 }),
    '数组': isFunction([1, 2]),
    '正则': isFunction(/x/),
    '字符串': isFunction('func'),
    'null': isFunction(null),
    'undefined': isFunction(undefined),
  })
}

export default functionDemo
`;function c(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"isfunction",children:"isFunction"}),`
`,n.jsx(i.p,{children:"判断值是否为函数。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"typeof"})," 检测值是否为函数类型。支持箭头函数、function 声明、class、内置函数等。"]}),`
`,n.jsx(i.h2,{id:"isfunction---类型检测",children:"isFunction - 类型检测"}),`
`,n.jsx(t,{language:"typescript",children:e}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"obj"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"要检测的值"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"boolean"})]}),`
`,n.jsx(i.li,{children:"描述：如果是函数返回 true"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"isFunction/index.ts"})," 导出 isFunction"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": ",n.jsx(i.code,{children:"typeof obj === 'function'"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": typeof 检测直接而高效"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": value → typeof → 返回布尔值"]}),`
`]})]})}function j(s={}){const{wrapper:i}={...o(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(c,{...s})}):c(s)}export{j as default};
