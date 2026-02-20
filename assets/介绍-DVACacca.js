import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import shell from '../../../packages/node-utils/src/shell'

const normalDemo = async () => {
  // 执行单个命令
  const singleResult = await shell('echo hello')
  console.log('单个命令执行结果:', singleResult)

  // 执行多个命令
  const multiResult = await shell(['echo hello', 'echo world'])
  console.log('多个命令执行结果:', multiResult)

  return { singleResult, multiResult }
}

export default normalDemo
`;function o(l){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...l.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"shell",children:"shell"}),`
`,n.jsx(e.p,{children:"shell 是一个用于执行一个或多个 shell 命令的异步函数。"}),`
`,n.jsx(e.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"command",children:"command"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"string | string[]"})]}),`
`,n.jsx(e.li,{children:"描述：要执行的命令，可以是单个命令字符串或命令数组"}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"Promise<boolean | boolean[]>"})]}),`
`,n.jsx(e.li,{children:"描述：单个命令返回 boolean，多个命令返回 boolean 数组，表示各命令是否执行成功"}),`
`]})]})}function u(l={}){const{wrapper:e}={...s(),...l.components};return e?n.jsx(e,{...l,children:n.jsx(o,{...l})}):o(l)}export{u as default};
