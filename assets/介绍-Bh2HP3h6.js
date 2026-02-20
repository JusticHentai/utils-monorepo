import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import trimEnd from '../../../packages/js-utils/src/trimEnd'

const trimEndDemo = () => {
  action('trimEnd 演示')({
    '去除右空白': trimEnd('  abc  '),
    '去除指定字符': trimEnd('-_-abc-_-', '_-'),
  })
}

export default trimEndDemo
`,c=`import { action } from 'storybook/actions'
import trimEnd from '../../../packages/js-utils/src/trimEnd'

const edgeCaseDemo = () => {
  action('trimEnd - 边界情况')({
    '" abc "': trimEnd(' abc '), '自定义字符': trimEnd('-_-abc-_-', '_-'), '空字符串': trimEnd(''), '无需trim': trimEnd('abc')
  })
}

export default edgeCaseDemo
`;function e(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"trimend",children:"trimEnd"}),`
`,n.jsx(r.p,{children:"从字符串结尾移除空白字符或指定字符"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"trimEnd"})," 从字符串结尾移除空白字符或指定字符。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"数据处理和转换"}),`
`,n.jsx(r.li,{children:"功能组合和增强"}),`
`,n.jsx(r.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"trimEnd"})," 的基本使用效果。"]}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"str"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要处理的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"chars"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要移除的字符"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"string"})]}),`
`,n.jsx(r.li,{children:"描述：返回处理后的字符串"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"trimEnd/index.ts"})," 导出 trimEnd 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 从字符串结尾移除空白字符或指定字符"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(i={}){const{wrapper:r}={...d(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(e,{...i})}):e(i)}export{a as default};
