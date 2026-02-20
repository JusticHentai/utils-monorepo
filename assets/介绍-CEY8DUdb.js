import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import trimStart from '../../../packages/js-utils/src/trimStart'

const trimStartDemo = () => {
  action('trimStart 演示')({
    '去除左空白': trimStart('  abc  '),
    '去除指定字符': trimStart('-_-abc-_-', '_-'),
  })
}

export default trimStartDemo
`,d=`import { action } from 'storybook/actions'
import trimStart from '../../../packages/js-utils/src/trimStart'

const edgeCaseDemo = () => {
  action('trimStart - 边界情况')({
    '" abc "': trimStart(' abc '), '自定义字符': trimStart('-_-abc-_-', '_-'), '空字符串': trimStart(''), '无需trim': trimStart('abc')
  })
}

export default edgeCaseDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"trimstart",children:"trimStart"}),`
`,r.jsx(n.p,{children:"从字符串开头移除空白字符或指定字符"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"trimStart"})," 从字符串开头移除空白字符或指定字符。"]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"数据处理和转换"}),`
`,r.jsx(n.li,{children:"功能组合和增强"}),`
`,r.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,r.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,r.jsxs(n.p,{children:["点击按钮查看 ",r.jsx(n.code,{children:"trimStart"})," 的基本使用效果。"]}),`
`,r.jsx(i,{language:"typescript",children:c}),`
`,r.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,r.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,r.jsx(i,{language:"typescript",children:d}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"str"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要处理的字符串"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"chars"}),r.jsx("td",{children:r.jsx("code",{children:"unknown"})}),r.jsx("td",{children:"要移除的字符"})]})]})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"string"})]}),`
`,r.jsx(n.li,{children:"描述：返回处理后的字符串"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"trimStart/index.ts"})," 导出 trimStart 函数"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": 从字符串开头移除空白字符或指定字符"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(t={}){const{wrapper:n}={...e(),...t.components};return n?r.jsx(n,{...t,children:r.jsx(s,{...t})}):s(t)}export{m as default};
