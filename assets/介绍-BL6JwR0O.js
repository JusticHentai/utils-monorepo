import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import keys from '../../../packages/js-utils/src/keys'

const keysDemo = () => {
  const obj = { a: 1, b: 2, c: 3 }
  action('keys - 普通对象')({ 输入: obj, 结果: keys(obj) })

  function Foo() { this.x = 1; this.y = 2 }
  Foo.prototype.z = 3
  action('keys - 不含继承属性')({ 结果: keys(new Foo()) })
}

export default keysDemo
`,l=`import { action } from 'storybook/actions'
import values from '../../../packages/js-utils/src/values'
import valuesIn from '../../../packages/js-utils/src/valuesIn'

const valuesDemo = () => {
  const obj = { a: 1, b: 'hello', c: true }
  action('values - 普通对象')({ 输入: obj, 结果: values(obj) })

  function Foo() { this.x = 1 }
  Foo.prototype.y = 2
  action('valuesIn - 包含继承值')({ 结果: valuesIn(new Foo()) })
}

export default valuesDemo
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"keys",children:"keys"}),`
`,n.jsx(s.p,{children:"获取对象自有可枚举属性的键名。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"keys"})," 返回对象自有可枚举属性的键名数组。还提供 ",n.jsx(s.code,{children:"keysIn"}),"（包含继承属性）、",n.jsx(s.code,{children:"values"}),"、",n.jsx(s.code,{children:"valuesIn"}),"。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"遍历对象属性"}),`
`,n.jsx(s.li,{children:"获取对象大小"}),`
`,n.jsx(s.li,{children:"对象属性列表展示"}),`
`]}),`
`,n.jsx(s.h2,{id:"获取对象键名",children:"获取对象键名"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"keys"})," 获取对象自有可枚举属性的键名数组。"]}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"获取对象值",children:"获取对象值"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"values"})," 获取对象自有可枚举属性的值数组。"]}),`
`,n.jsx(o,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要获取键名的对象"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string[]"})]}),`
`,n.jsx(s.li,{children:"描述：对象自有可枚举属性的键名数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 提供 keys、keysIn、values、valuesIn 四个函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 使用 Object.keys/for...in 获取属性键名或值"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 区分自有属性和继承属性，hasOwnProperty 过滤"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 输入对象 → 属性遍历 → 过滤/收集 → 返回数组"]}),`
`]})]})}function u(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{u as default};
