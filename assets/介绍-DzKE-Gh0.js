import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import startsWith from '../../../packages/js-utils/src/startsWith'

const startsWithDemo = () => {
  action('startsWith 演示')(startsWith([1, 2, 3]))
}

export default startsWithDemo
`,c=`import { action } from 'storybook/actions'
import startsWith from '../../../packages/js-utils/src/startsWith'

const edgeCaseDemo = () => {
  action('startsWith - 边界情况')({
    '正常匹配': startsWith('abc', 'a'), '偏移': startsWith('abc', 'b', 1), '不匹配': startsWith('abc', 'b'), '空字符串': startsWith('', '')
  })
}

export default edgeCaseDemo
`;function i(t){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"startswith",children:"startsWith"}),`
`,n.jsx(s.p,{children:"检查字符串 string 是否以给定的目标字符串开头"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"startsWith"})," 检查字符串 string 是否以给定的目标字符串开头。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"startsWith"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:h}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"目标字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"position"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"搜索的起始位置，默认为 0"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：如果以目标字符串开头，返回 true"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"startsWith/index.ts"})," 导出 startsWith 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 检查字符串 string 是否以给定的目标字符串开头"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用 Math 内置方法"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(t={}){const{wrapper:s}={...e(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(i,{...t})}):i(t)}export{m as default};
