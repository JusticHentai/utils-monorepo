import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import Loading from '../../../packages/node-utils/src/logger/loading'

const normalDemo = async () => {
  const loading = new Loading()

  // 开始 loading
  loading.start('正在处理...')

  // 模拟异步操作
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // 成功状态
  loading.succeed('处理成功')

  // 或者失败状态
  // loading.fail('处理失败')

  // 或者直接停止
  // loading.stop()
}

export default normalDemo
`;function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"loading",children:"Loading"}),`
`,n.jsx(i.p,{children:"Loading 是一个用于在终端显示 loading 动画的类，基于 ora 库封装。"}),`
`,n.jsx(i.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(i.h2,{id:"方法介绍",children:"方法介绍"}),`
`,n.jsx(i.h3,{id:"start",children:"start"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"(text?: string) => void"})]}),`
`,n.jsx(i.li,{children:"描述：开始显示 loading 动画"}),`
`,n.jsxs(i.li,{children:["参数：",n.jsx(i.code,{children:"text"})," - 可选，loading 文案，默认为 ",n.jsx(i.code,{children:"'开始加载'"})]}),`
`]}),`
`,n.jsx(i.h3,{id:"succeed",children:"succeed"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"(text?: string) => void"})]}),`
`,n.jsx(i.li,{children:"描述：显示成功状态并停止 loading"}),`
`,n.jsxs(i.li,{children:["参数：",n.jsx(i.code,{children:"text"})," - 可选，成功文案，默认为 ",n.jsx(i.code,{children:"'加载成功'"})]}),`
`]}),`
`,n.jsx(i.h3,{id:"fail",children:"fail"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"(text?: string) => void"})]}),`
`,n.jsx(i.li,{children:"描述：显示失败状态并停止 loading"}),`
`,n.jsxs(i.li,{children:["参数：",n.jsx(i.code,{children:"text"})," - 可选，失败文案，默认为 ",n.jsx(i.code,{children:"'加载失败'"})]}),`
`]}),`
`,n.jsx(i.h3,{id:"stop",children:"stop"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"() => void"})]}),`
`,n.jsx(i.li,{children:"描述：停止 loading 动画"}),`
`]})]})}function j(e={}){const{wrapper:i}={...l(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(d,{...e})}):d(e)}export{j as default};
