import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import cd from '../../../packages/node-utils/src/fs/cd'

const cdDemo = async () => {
  // 切换到指定目录
  await cd('/path/to/directory')

  // 切换回原始目录
  await cd('-')
}

export default cdDemo
`,d=`import copy from '../../../packages/node-utils/src/fs/copy'

const copyDemo = async () => {
  // 复制文件或目录（自动过滤 node_modules 和 dist）
  const result = await copy('/path/to/source', '/path/to/target')
  console.log('复制结果:', result)
}

export default copyDemo
`,t=`import exists from '../../../packages/node-utils/src/fs/exists'

const existsDemo = async () => {
  // 检测目录是否存在
  const isExists = await exists('/path/to/directory')
  console.log('目录是否存在:', isExists)
}

export default existsDemo
`,l=`import md from '../../../packages/node-utils/src/fs/md'

const mdDemo = async () => {
  // 创建目录（如果已存在则不操作）
  const result = await md('/path/to/new/directory')
  console.log('创建目录结果:', result)
}

export default mdDemo
`,h=`import rm from '../../../packages/node-utils/src/fs/rm'

const rmDemo = async () => {
  // 删除目录
  const result = await rm('/path/to/directory')
  console.log('删除目录结果:', result)
}

export default rmDemo
`,a=`import read from '../../../packages/node-utils/src/fs/read'

const readDemo = async () => {
  // 读取文件内容
  const content = await read('/path/to/file.txt')
  console.log('文件内容:', content)
}

export default readDemo
`,x=`import write from '../../../packages/node-utils/src/fs/write'

const writeDemo = async () => {
  // 写入文件内容（覆盖原有内容）
  const result = await write('/path/to/file.txt', 'Hello World')
  console.log('写入结果:', result)
}

export default writeDemo
`;function r(i){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"fs",children:"fs"}),`
`,n.jsx(e.p,{children:"fs 模块提供了一系列文件系统操作工具，基于 fs-extra 封装，带有 loading 提示和日志输出。"}),`
`,n.jsx(e.h2,{id:"cd---切换目录",children:"cd - 切换目录"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h3,{id:"参数",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dirname"}),": ",n.jsx(e.code,{children:"string"})," - 目标目录路径，传入 ",n.jsx(e.code,{children:"-"})," 可切换回原始目录"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<boolean>"})," - 是否切换成功"]}),`
`]}),`
`,n.jsx(e.h2,{id:"copy---复制文件目录",children:"copy - 复制文件/目录"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h3,{id:"参数-1",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"sourcePath"}),": ",n.jsx(e.code,{children:"string"})," - 源路径"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"targetPath"}),": ",n.jsx(e.code,{children:"string"})," - 目标路径"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<boolean>"})," - 是否复制成功"]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意：自动过滤 node_modules 和 dist 目录"}),`
`]}),`
`,n.jsx(e.h2,{id:"exists---检测是否存在",children:"exists - 检测是否存在"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h3,{id:"参数-2",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dirname"}),": ",n.jsx(e.code,{children:"string"})," - 目录路径"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<boolean>"})," - 是否存在"]}),`
`]}),`
`,n.jsx(e.h2,{id:"md---创建目录",children:"md - 创建目录"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h3,{id:"参数-3",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dirname"}),": ",n.jsx(e.code,{children:"string"})," - 目录路径"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<boolean>"})," - 是否创建成功"]}),`
`]}),`
`,n.jsx(e.h2,{id:"rm---删除目录",children:"rm - 删除目录"}),`
`,n.jsx(s,{language:"typescript",children:h}),`
`,n.jsx(e.h3,{id:"参数-4",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dirname"}),": ",n.jsx(e.code,{children:"string"})," - 目录路径"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<boolean>"})," - 是否删除成功"]}),`
`]}),`
`,n.jsx(e.h2,{id:"read---读取文件",children:"read - 读取文件"}),`
`,n.jsx(s,{language:"typescript",children:a}),`
`,n.jsx(e.h3,{id:"参数-5",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dirname"}),": ",n.jsx(e.code,{children:"string"})," - 文件路径"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<string>"})," - 文件内容"]}),`
`]}),`
`,n.jsx(e.h2,{id:"write---写入文件",children:"write - 写入文件"}),`
`,n.jsx(s,{language:"typescript",children:x}),`
`,n.jsx(e.h3,{id:"参数-6",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dirname"}),": ",n.jsx(e.code,{children:"string"})," - 文件路径"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data"}),": ",n.jsx(e.code,{children:"string"})," - 要写入的内容"]}),`
`,n.jsxs(e.li,{children:["返回值: ",n.jsx(e.code,{children:"Promise<boolean>"})," - 是否写入成功"]}),`
`]})]})}function y(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{y as default};
