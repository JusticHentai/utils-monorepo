import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import logger from '../../../packages/node-utils/src/logger/logger'

const infoDemo = () => {
  logger.info('这是一条 info 日志')
}

export default infoDemo
`,s=`import logger from '../../../packages/node-utils/src/logger/logger'

const debugDemo = () => {
  logger.debug('这是一条 debug 日志')
}

export default debugDemo
`,c=`import logger from '../../../packages/node-utils/src/logger/logger'

const warnDemo = () => {
  logger.warn('这是一条 warn 日志')
}

export default warnDemo
`,g=`import logger from '../../../packages/node-utils/src/logger/logger'

const errorDemo = () => {
  logger.error('这是一条 error 日志')
}

export default errorDemo
`;function i(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"logger",children:"logger"}),`
`,n.jsx(e.p,{children:"logger 是一个用于在终端输出带颜色标签日志的工具，使用 chalk 库实现。"}),`
`,n.jsx(e.h2,{id:"info-日志示例",children:"info 日志示例"}),`
`,n.jsx(o,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"debug-日志示例",children:"debug 日志示例"}),`
`,n.jsx(o,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"warn-日志示例",children:"warn 日志示例"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"error-日志示例",children:"error 日志示例"}),`
`,n.jsx(o,{language:"typescript",children:g}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.p,{children:"logger 对象包含以下方法："}),`
`,n.jsx(e.h3,{id:"info",children:"info"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...input: any[]) => void"})]}),`
`,n.jsxs(e.li,{children:["描述：输出 info 级别的日志，颜色为 ",n.jsx(e.code,{children:"#7ed6df"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"debug",children:"debug"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...input: any[]) => void"})]}),`
`,n.jsxs(e.li,{children:["描述：输出 debug 级别的日志，颜色为 ",n.jsx(e.code,{children:"#e056fd"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"warn",children:"warn"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...input: any[]) => void"})]}),`
`,n.jsxs(e.li,{children:["描述：输出 warn 级别的日志，颜色为 ",n.jsx(e.code,{children:"#f0932b"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"error",children:"error"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...input: any[]) => void"})]}),`
`,n.jsxs(e.li,{children:["描述：输出 error 级别的日志，颜色为 ",n.jsx(e.code,{children:"#eb4d4b"})]}),`
`]})]})}function p(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{p as default};
