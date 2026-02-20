import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import isString from '../../../packages/js-utils/src/isString'

const stringDemo = () => {
  action('isString - 字符串类型')({
    '"hello"': isString('hello'),
    "''": isString(''),
    'String("abc")': isString(String('abc')),
  })

  action('isString - 非字符串类型')({
    '123': isString(123),
    'null': isString(null),
    'undefined': isString(undefined),
    '[]': isString([]),
    '{}': isString({}),
    'true': isString(true),
  })
}

export default stringDemo
`;function s(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"isstring",children:"isString"}),`
`,n.jsx(i.p,{children:"判断值是否为字符串。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"Object.prototype.toString.call(obj)"})," 检测值是否为 ",n.jsx(i.code,{children:"[object String]"})," 类型。"]}),`
`,n.jsx(i.h2,{id:"isstring---类型检测",children:"isString - 类型检测"}),`
`,n.jsx(e,{language:"typescript",children:o}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"obj"}),n.jsx("td",{children:n.jsx("code",{children:"any"})}),n.jsx("td",{children:"要检测的值"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"boolean"})]}),`
`,n.jsx(i.li,{children:"描述：如果是字符串返回 true"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"isString/index.ts"})," 导出 isString"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": ",n.jsx(i.code,{children:"Object.prototype.toString.call(obj)"})," 标签检查"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 匹配 ",n.jsx(i.code,{children:"[object String]"})," 标签"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": value → toString → 比较标签 → 返回布尔值"]}),`
`]})]})}function g(r={}){const{wrapper:i}={...t(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(s,{...r})}):s(r)}export{g as default};
