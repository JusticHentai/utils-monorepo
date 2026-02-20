import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import functionsIn from '../../../packages/js-utils/src/functionsIn'

const functionsInDemo = () => {
  function Foo() { this.a = () => 'a'; this.b = () => 'b' }
  Foo.prototype.c = () => 'c'
  action('functionsIn 演示')({ '包含继承的方法名': functionsIn(new Foo()) })
}

export default functionsInDemo
`,r=`import { action } from 'storybook/actions'
import functionsIn from '../../../packages/js-utils/src/functionsIn'

const edgeCaseDemo = () => {
  action('functionsIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = () => {} }; Foo.prototype.b = () => {}; return functionsIn(new Foo()) })()
  })
}

export default edgeCaseDemo
`;function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"functionsin",children:"functionsIn"}),`
`,n.jsx(s.p,{children:"返回对象所有函数属性名数组（含继承属性）"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"functionsIn"})," 返回对象所有函数属性名数组（含继承属性）。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"functionsIn"})," 的基本使用效果。"]}),`
`,n.jsx(o,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(o,{language:"typescript",children:r}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的对象"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string[]"})]}),`
`,n.jsx(s.li,{children:"描述：返回函数属性名数组"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"functionsIn/index.ts"})," 导出 functionsIn 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 返回对象所有函数属性名数组（含继承属性）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(i={}){const{wrapper:s}={...c(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{a as default};
