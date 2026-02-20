import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import commandExists from '../../../packages/node-utils/src/command-exists'

const normalDemo = async () => {
  // 检测 git 命令是否存在
  const gitExists = await commandExists('git')
  console.log('git 命令是否存在:', gitExists)

  // 检测 node 命令是否存在
  const nodeExists = await commandExists('node')
  console.log('node 命令是否存在:', nodeExists)

  return { gitExists, nodeExists }
}

export default normalDemo
`;function i(o){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"command-exists",children:"command-exists"}),`
`,n.jsx(s.p,{children:"commandExists 是一个用于判断系统命令是否存在的异步函数，支持 Windows 和 Linux/macOS 系统。"}),`
`,n.jsx(s.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(s.h3,{id:"command",children:"command"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"string"})]}),`
`,n.jsx(s.li,{children:"描述：要检测的命令名称"}),`
`]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"Promise<boolean>"})]}),`
`,n.jsx(s.li,{children:"描述：命令是否存在"}),`
`]})]})}function h(o={}){const{wrapper:s}={...e(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(i,{...o})}):i(o)}export{h as default};
