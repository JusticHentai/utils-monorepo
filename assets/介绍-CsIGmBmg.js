import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import formatStack from '../../../packages/element-utils/src/formatStack'

const basicDemo = () => {
  // 模拟一个错误堆栈
  const error = new Error('测试错误')
  const stack = error.stack

  action('原始堆栈')(stack)

  const formattedStack = formatStack(stack)

  action('格式化后的堆栈')(formattedStack)
}

export default basicDemo
`,d=`import { action } from 'storybook/actions'
import formatStack from '../../../packages/element-utils/src/formatStack'

const maxLinesDemo = () => {
  // 创建一个多层调用的堆栈
  const error = new Error('测试错误')
  const stack = error.stack

  action('原始堆栈')(stack)

  // 限制为 3 行
  const formattedStack = formatStack(stack, { maxLines: 3 })

  action('限制为 3 行后')(formattedStack)
}

export default maxLinesDemo
`,o=`import { action } from 'storybook/actions'
import formatStack from '../../../packages/element-utils/src/formatStack'

const emptyStackDemo = () => {
  // 测试空堆栈
  const result1 = formatStack(undefined)
  const result2 = formatStack('')

  action('undefined 堆栈结果')(result1)
  action('空字符串堆栈结果')(result2)
}

export default emptyStackDemo
`;function t(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"formatstack",children:"formatStack"}),`
`,n.jsx(e.p,{children:"格式化错误堆栈信息，支持限制行数和去除多余空格。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"formatStack"})," 是一个用于处理 JavaScript 错误堆栈字符串的工具函数。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心功能："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"限制堆栈输出行数，避免日志过长"}),`
`,n.jsx(e.li,{children:"去除每行首尾空格，统一格式"}),`
`,n.jsx(e.li,{children:"安全处理空值或 undefined 输入"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"应用场景："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"前端错误监控上报时，需要精简堆栈信息"}),`
`,n.jsx(e.li,{children:"日志系统中需要统一堆栈格式"}),`
`,n.jsx(e.li,{children:"错误分析工具中展示关键调用链"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础格式化",children:"基础格式化"}),`
`,n.jsx(e.p,{children:"将原始堆栈进行格式化，去除每行多余的空格，输出整洁的堆栈信息。"}),`
`,n.jsx(r,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"限制最大行数",children:"限制最大行数"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"maxLines"})," 选项限制输出的堆栈行数，通常只需要前几行就能定位问题。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"处理空堆栈",children:"处理空堆栈"}),`
`,n.jsxs(e.p,{children:["安全处理 ",n.jsx(e.code,{children:"undefined"})," 或空字符串输入，返回空字符串避免程序出错。"]}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"stack"}),n.jsx("td",{children:n.jsx("code",{children:"string | undefined"})}),n.jsx("td",{children:"原始堆栈字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"FormatStackOptions"})}),n.jsx("td",{children:"配置选项"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.maxLines"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"最大行数，默认 10"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"格式化后的堆栈字符串"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"文件职责："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),": 主函数，实现堆栈格式化逻辑"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),": 类型定义，配置选项接口"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心流程："})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"检查输入是否为空，空值直接返回空字符串"}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"split('\\n')"})," 将堆栈按行分割为数组"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"slice(0, maxLines)"})," 截取指定行数"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"map(line => line.trim())"})," 去除每行首尾空格"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"join('\\n')"})," 重新组合为字符串"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"关键技术点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用链式调用使代码简洁易读"}),`
`,n.jsx(e.li,{children:"默认参数处理避免 undefined 错误"}),`
`]})]})}function p(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{p as default};
