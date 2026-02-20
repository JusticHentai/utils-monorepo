import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import parseCommand from '../../../packages/node-utils/src/parse/parseCommand'

const parseCommandDemo = () => {
  // 解析命令字符串
  const result = parseCommand('create <name> [--force]')
  console.log('解析结果:', result)
  // 输出: { required: ['name'], optional: ['--force'] }
}

export default parseCommandDemo
`,a=`import parseFileName from '../../../packages/node-utils/src/parse/parseFileName'

const parseFileNameDemo = () => {
  // 解析文件路径
  const result = parseFileName('/path/to/file.txt')
  console.log('解析结果:', result)
  // 输出: { name: 'file', extend: '.txt' }
}

export default parseFileNameDemo
`;function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"parse",children:"parse"}),`
`,e.jsx(n.p,{children:"parse 模块提供了一系列解析工具函数。"}),`
`,e.jsx(n.h2,{id:"parsecommand---解析命令参数",children:"parseCommand - 解析命令参数"}),`
`,e.jsxs(n.p,{children:["用于解析命令字符串中的必选参数（",e.jsx(n.code,{children:"<param>"}),"）和可选参数（",e.jsx(n.code,{children:"[param]"}),"）。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h3,{id:"参数",children:"参数"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"command"}),": ",e.jsx(n.code,{children:"string"})," - 命令字符串"]}),`
`]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"{ required: string[], optional: string[] }"})," - 解析后的必选和可选参数数组"]}),`
`]}),`
`,e.jsx(n.h2,{id:"parsefilename---解析文件名",children:"parseFileName - 解析文件名"}),`
`,e.jsx(n.p,{children:"用于解析文件路径，获取文件名和扩展名。"}),`
`,e.jsx(s,{language:"typescript",children:a}),`
`,e.jsx(n.h3,{id:"参数-1",children:"参数"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filePath"}),": ",e.jsx(n.code,{children:"string"})," - 文件路径"]}),`
`]}),`
`,e.jsx(n.h3,{id:"返回值-1",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"{ name: string, extend: string }"})," - 文件名和扩展名"]}),`
`]})]})}function x(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{x as default};
