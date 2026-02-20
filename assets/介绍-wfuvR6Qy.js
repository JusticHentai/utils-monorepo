import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import delay from '../../../packages/js-utils/src/delay'

const delayDemo = () => {
  delay((text) => {
    action('delay 演示')({ '延迟 1 秒后执行': text })
  }, 1000, '延迟执行的参数')
  action('delay 已触发')('等待 1 秒...')
}

export default delayDemo
`,c=`import { action } from 'storybook/actions'
import delay from '../../../packages/js-utils/src/delay'

const edgeCaseDemo = () => {
  delay((text) => { action('delay - 边界情况')({ 参数: text, 说明: '延迟200ms执行' }) }, 200, '延迟完成')
}

export default edgeCaseDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"delay",children:"delay"}),`
`,n.jsx(e.p,{children:"延迟 wait 毫秒后调用 func"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"delay"})," 延迟 wait 毫秒后调用 func。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据处理和转换"}),`
`,n.jsx(e.li,{children:"功能组合和增强"}),`
`,n.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"delay"})," 的基本使用效果。"]}),`
`,n.jsx(d,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(d,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要延迟的函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"wait"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"延迟的毫秒数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"args"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"调用时传递的参数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"unknown"})]}),`
`,n.jsx(e.li,{children:"描述：返回计时器 id"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"delay/index.ts"})," 导出 delay 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 延迟 wait 毫秒后调用 func"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
