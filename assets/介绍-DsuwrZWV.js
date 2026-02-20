import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const infoDemo = () => {
  logger.info('这是一条 info 日志')
  action('info 日志')({ type: 'info' })
}

export default infoDemo
`,d=`import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const debugDemo = () => {
  logger.debug('这是一条 debug 日志')
  action('debug 日志')({ type: 'debug' })
}

export default debugDemo
`,c=`import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const warnDemo = () => {
  logger.warn('这是一条 warn 日志')
  action('warn 日志')({ type: 'warn' })
}

export default warnDemo
`,t=`import { action } from 'storybook/actions'
import logger from '../../../packages/element-utils/src/logger'

const errorDemo = () => {
  logger.error('这是一条 error 日志')
  action('error 日志')({ type: 'error' })
}

export default errorDemo
`;function o(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"logger",children:"logger"}),`
`,n.jsx(e.p,{children:"带颜色标签的日志输出工具。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:["logger 是一个美化日志输出的工具，核心作用是：",n.jsx(e.strong,{children:"在控制台输出带有彩色标签的日志，便于区分不同级别的信息"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["console.log 的 CSS 样式：",n.jsx(e.code,{children:"%c"})," 占位符"]}),`
`,n.jsx(e.li,{children:"日志级别：info、debug、warn、error"}),`
`,n.jsx(e.li,{children:"颜色区分：不同级别使用不同颜色"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"开发调试：快速定位不同类型的日志"}),`
`,n.jsx(e.li,{children:"模块标识：区分不同模块的输出"}),`
`,n.jsx(e.li,{children:"错误追踪：醒目标记错误信息"}),`
`,n.jsx(e.li,{children:"性能调试：标记性能相关的日志"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"颜色醒目，一眼区分日志级别"}),`
`,n.jsx(e.li,{children:"API 简单，与 console.log 用法一致"}),`
`,n.jsx(e.li,{children:"支持任意数量的参数"}),`
`]}),`
`,n.jsx(e.h2,{id:"info-日志示例",children:"info 日志示例"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"debug-日志示例",children:"debug 日志示例"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"warn-日志示例",children:"warn 日志示例"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"error-日志示例",children:"error 日志示例"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"方法名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"颜色"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"info"}),n.jsx("td",{children:n.jsx("code",{children:"(...input: any[]) => void"})}),n.jsx("td",{children:"#7ed6df"}),n.jsx("td",{children:"输出信息级别日志"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"debug"}),n.jsx("td",{children:n.jsx("code",{children:"(...input: any[]) => void"})}),n.jsx("td",{children:"#e056fd"}),n.jsx("td",{children:"输出调试级别日志"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"warn"}),n.jsx("td",{children:n.jsx("code",{children:"(...input: any[]) => void"})}),n.jsx("td",{children:"#f0932b"}),n.jsx("td",{children:"输出警告级别日志"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"error"}),n.jsx("td",{children:n.jsx("code",{children:"(...input: any[]) => void"})}),n.jsx("td",{children:"#eb4d4b"}),n.jsx("td",{children:"输出错误级别日志"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 唯一源文件，包含 logger 对象和各级别方法"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"定义不同级别的颜色映射"}),`
`,n.jsxs(e.li,{children:["各方法调用 ",n.jsx(e.code,{children:"console.log('%c[LEVEL]', 'color: xxx', ...args)"})]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"%c"})," 占位符应用 CSS 样式"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"console.log('%c text', 'css style')"})," 为文字添加样式"]}),`
`,n.jsx(e.li,{children:"样式包含：color、background、padding、border-radius 等"}),`
`,n.jsx(e.li,{children:"第一个参数是带标签的字符串，后续参数为实际日志内容"}),`
`]})]})}function m(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{m as default};
