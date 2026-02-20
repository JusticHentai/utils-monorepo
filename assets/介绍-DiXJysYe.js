import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import padEnd from '../../../packages/js-utils/src/padEnd'

const padEndDemo = () => {
  action('padEnd 演示')({
    '默认空格填充': padEnd('abc', 6),
    '自定义字符填充': padEnd('abc', 6, '_-'),
    '不截断': padEnd('abc', 2),
  })
}

export default padEndDemo
`,l=`import { action } from 'storybook/actions'
import padEnd from '../../../packages/js-utils/src/padEnd'

const edgeCaseDemo = () => {
  action('padEnd - 边界情况')({
    'abc长度6': padEnd('abc', 6), '已超长度': padEnd('abcdef', 3), '自定义填充': padEnd('abc', 6, '_-'), '空字符串': padEnd('', 3)
  })
}

export default edgeCaseDemo
`;function r(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d.h1,{id:"padend",children:"padEnd"}),`
`,n.jsx(d.p,{children:"如果字符串长度小于 length，则在右侧填充字符"}),`
`,n.jsx(d.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(d.p,{children:[n.jsx(d.code,{children:"padEnd"})," 如果字符串长度小于 length，则在右侧填充字符。"]}),`
`,n.jsxs(d.p,{children:[n.jsx(d.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsx(d.li,{children:"数据处理和转换"}),`
`,n.jsx(d.li,{children:"功能组合和增强"}),`
`,n.jsx(d.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(d.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(d.p,{children:["点击按钮查看 ",n.jsx(d.code,{children:"padEnd"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(d.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(d.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(d.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"string"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要填充的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"length"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"目标长度"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"chars"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"填充字符"})]})]})]}),`
`,n.jsx(d.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(d.ul,{children:[`
`,n.jsxs(d.li,{children:["类型：",n.jsx(d.code,{children:"string"})]}),`
`,n.jsx(d.li,{children:"描述：返回填充后的字符串"}),`
`]}),`
`,n.jsx(d.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(d.ol,{children:[`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"文件职责"}),": ",n.jsx(d.code,{children:"padEnd/index.ts"})," 导出 padEnd 函数"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"核心流程"}),": 如果字符串长度小于 length，则在右侧填充字符"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(d.li,{children:[n.jsx(d.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function p(e={}){const{wrapper:d}={...i(),...e.components};return d?n.jsx(d,{...e,children:n.jsx(r,{...e})}):r(e)}export{p as default};
