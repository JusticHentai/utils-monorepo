import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import gitTag from '../../../packages/node-utils/src/git/gitTag'

const gitTagDemo = async () => {
  // 创建并推送 git tag
  const result = await gitTag('v1.0.0')
  console.log('是否有失败:', result)
}

export default gitTagDemo
`,d=`import gitUpdate from '../../../packages/node-utils/src/git/gitUpdate'

const gitUpdateDemo = async () => {
  // git add、commit、push 三连
  const result = await gitUpdate('feat: 新增功能')
  console.log('执行结果:', result)
  // 输出: [true, true, true] 表示三个命令都执行成功
}

export default gitUpdateDemo
`;function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"git",children:"git"}),`
`,n.jsx(e.p,{children:"git 模块提供了常用的 git 操作封装。"}),`
`,n.jsx(e.h2,{id:"gittag---创建并推送-tag",children:"gitTag - 创建并推送 tag"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h3,{id:"参数",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"tag"}),": ",n.jsx(e.code,{children:"string"})," - tag 名称"]}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Promise<boolean>"})," - 是否有失败的命令"]}),`
`]}),`
`,n.jsx(e.h2,{id:"gitupdate---git-更新三连",children:"gitUpdate - git 更新三连"}),`
`,n.jsxs(e.p,{children:["执行 ",n.jsx(e.code,{children:"git add ."}),"、",n.jsx(e.code,{children:'git commit -m "message"'})," 和 ",n.jsx(e.code,{children:"git push"})," 三个命令。"]}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(e.h3,{id:"参数-1",children:"参数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"message"}),": ",n.jsx(e.code,{children:"string"})," (可选) - commit 信息，默认为 ",n.jsx(e.code,{children:"'fix: 普通更新'"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值-1",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Promise<boolean[]>"})," - 三个命令的执行结果数组"]}),`
`]})]})}function m(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{m as default};
