import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import assignIn from '../../../packages/js-utils/src/assignIn'

const assignInDemo = () => {
  function Foo() { this.a = 1 }
  Foo.prototype.b = 2
  action('assignIn 演示')({
    '含继承属性': assignIn({ c: 3 }, new Foo()),
  })
}

export default assignInDemo
`,o=`import { action } from 'storybook/actions'
import assignIn from '../../../packages/js-utils/src/assignIn'

const edgeCaseDemo = () => {
  action('assignIn - 边界情况')({
    '含继承属性': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return assignIn({}, new Foo()) })(), '空对象': assignIn({}, {})
  })
}

export default edgeCaseDemo
`;function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"assignin",children:"assignIn"}),`
`,n.jsx(s.p,{children:"类似于 assign，但包括继承的属性"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"assignIn"})," 与 ",n.jsx(s.code,{children:"assign"})," 功能类似，核心区别在于",n.jsx(s.strong,{children:"遍历属性的方式不同"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"assign"})," 使用 ",n.jsx(s.code,{children:"Object.keys(source)"})," —— 只遍历来源对象",n.jsx(s.strong,{children:"自身的可枚举属性"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"assignIn"})," 使用 ",n.jsx(s.code,{children:"for...in"})," —— 遍历来源对象",n.jsx(s.strong,{children:"自身 + 继承的可枚举属性"})]}),`
`]}),`
`,n.jsx(s.h3,{id:"assign-vs-assignin-对比",children:"assign vs assignIn 对比"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-ts",children:`function Foo() { this.a = 1 }
Foo.prototype.b = 2

const source = new Foo()
// source 自身属性: { a: 1 }
// source 原型链上的属性: { b: 2 }

assign({}, source)    // => { a: 1 }       — 只拷贝自身属性
assignIn({}, source)  // => { a: 1, b: 2 } — 同时拷贝继承属性
`})}),`
`,n.jsx(s.h3,{id:"实现差异",children:"实现差异"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"函数"}),n.jsx("th",{children:"遍历方式"}),n.jsx("th",{children:"遍历范围"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"assign"})}),n.jsx("td",{children:n.jsx("code",{children:"for (const key of Object.keys(source))"})}),n.jsx("td",{children:"仅自身可枚举属性"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"assignIn"})}),n.jsx("td",{children:n.jsx("code",{children:"for (const key in source)"})}),n.jsx("td",{children:"自身 + 继承的可枚举属性"})]})]})]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["需要拷贝通过构造函数原型链继承的属性时，使用 ",n.jsx(s.code,{children:"assignIn"})]}),`
`,n.jsxs(s.li,{children:["只需要拷贝对象自身属性时，使用 ",n.jsx(s.code,{children:"assign"})]}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"assignIn"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:o}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"目标对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"sources"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"来源对象"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"unknown"})]}),`
`,n.jsx(s.li,{children:"描述：返回目标对象"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"assignIn/index.ts"})," 导出 assignIn 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 遍历所有来源对象，通过 ",n.jsx(s.code,{children:"for...in"})," 将每个来源的自身及继承的可枚举属性赋值到目标对象上"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用 ",n.jsx(s.code,{children:"for...in"})," 循环（而非 ",n.jsx(s.code,{children:"Object.keys()"}),"），使得原型链上的可枚举属性也会被拷贝"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"与 assign 的唯一代码差异"}),": ",n.jsx(s.code,{children:"for (const key in source)"})," vs ",n.jsx(s.code,{children:"for (const key of Object.keys(source))"})]}),`
`]})]})}function g(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(c,{...e})}):c(e)}export{g as default};
