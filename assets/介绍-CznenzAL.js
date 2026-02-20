import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import hasIn from '../../../packages/js-utils/src/hasIn'

const hasInDemo = () => {
  function Foo() { this.a = 1 }
  Foo.prototype.b = 2
  const obj = new Foo()
  action('hasIn 演示')({
    '自有属性 a': hasIn(obj, 'a'),
    '继承属性 b': hasIn(obj, 'b'),
    '不存在的 c': hasIn(obj, 'c'),
  })
}

export default hasInDemo
`,h=`import { action } from 'storybook/actions'
import hasIn from '../../../packages/js-utils/src/hasIn'

const edgeCaseDemo = () => {
  action('hasIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return { a: hasIn(new Foo(), 'a'), b: hasIn(new Foo(), 'b'), c: hasIn(new Foo(), 'c') } })()
  })
}

export default edgeCaseDemo
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"hasin",children:"hasIn"}),`
`,n.jsx(s.p,{children:"检查对象属性路径是否存在（含继承属性）"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"hasIn"})," 检查对象属性路径是否存在（含继承属性）。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"hasIn"})," 的基本使用效果。"]}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(o,{language:"typescript",children:h}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的路径"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：如果路径存在，返回 true"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"hasIn/index.ts"})," 导出 hasIn 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 检查对象属性路径是否存在（含继承属性）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function p(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{p as default};
