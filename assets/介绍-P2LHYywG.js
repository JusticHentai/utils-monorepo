import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import padStart from '../../../packages/js-utils/src/padStart'

const padStartDemo = () => {
  action('padStart 演示')({
    '默认空格填充': padStart('abc', 6),
    '自定义字符填充': padStart('abc', 6, '_-'),
    '不截断': padStart('abc', 2),
  })
}

export default padStartDemo
`,c=`import { action } from 'storybook/actions'
import padStart from '../../../packages/js-utils/src/padStart'

const edgeCaseDemo = () => {
  action('padStart - 边界情况')({
    'abc长度6': padStart('abc', 6), '已超长度': padStart('abcdef', 3), '自定义填充': padStart('abc', 6, '_-'), '空字符串': padStart('', 3)
  })
}

export default edgeCaseDemo
`;function d(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"padstart",children:"padStart"}),`
`,n.jsx(t.p,{children:"如果字符串长度小于 length，则在左侧填充字符"}),`
`,n.jsx(t.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"padStart"})," 如果字符串长度小于 length，则在左侧填充字符。"]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"数据处理和转换"}),`
`,n.jsx(t.li,{children:"功能组合和增强"}),`
`,n.jsx(t.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(t.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(t.p,{children:["点击按钮查看 ",n.jsx(t.code,{children:"padStart"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:i}),`
`,n.jsx(t.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(t.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(t.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要填充的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"length"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"目标长度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"chars"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"填充字符"})]})]})]}),`
`,n.jsx(t.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["类型：",n.jsx(t.code,{children:"string"})]}),`
`,n.jsx(t.li,{children:"描述：返回填充后的字符串"}),`
`]}),`
`,n.jsx(t.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"文件职责"}),": ",n.jsx(t.code,{children:"padStart/index.ts"})," 导出 padStart 函数"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"核心流程"}),": 如果字符串长度小于 length，则在左侧填充字符"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function p(r={}){const{wrapper:t}={...e(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(d,{...r})}):d(r)}export{p as default};
