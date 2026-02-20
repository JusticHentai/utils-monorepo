import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import listToTree from '../../../../packages/learn-utils/src/handwritten/listToTree'

const normalDemo = () => {
  const list = [
    { id: '1', pid: '', name: '根节点1' },
    { id: '2', pid: '1', name: '子节点1-1' },
    { id: '3', pid: '1', name: '子节点1-2' },
    { id: '4', pid: '2', name: '子节点1-1-1' },
    { id: '5', pid: '', name: '根节点2' },
    { id: '6', pid: '5', name: '子节点2-1' },
  ]

  const tree = listToTree(list)

  return {
    flatList: list,
    treeStructure: tree,
  }
}

export default normalDemo
`,t=`type Item = {
  id: string
  pid: string
} & Record<string, any>

export default function listToTree(list: Item[]) {
  const treeList: Item[] = [],
    hash: Record<string, any> = {}

  list.forEach((item) => {
    if (!item.children) {
      item.children = []
    }

    hash[item.id] = item
  })

  list.forEach((item) => {
    const parent = hash[item.pid]

    if (parent) {
      parent.children.push(item)
    } else {
      treeList.push(item)
    }
  })

  return treeList
}
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"listtotree-扁平数组转树形结构",children:"listToTree 扁平数组转树形结构"}),`
`,n.jsx(i.p,{children:"将扁平的数组数据转换为树形结构，是前端开发中常见的数据处理需求。"}),`
`,n.jsx(i.h2,{id:"核心原理",children:"核心原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"哈希映射"}),"：第一次遍历建立 id 到节点的映射"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"建立关系"}),"：第二次遍历根据 pid 找到父节点，建立父子关系"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"收集根节点"}),"：没有父节点的节点作为根节点"]}),`
`]}),`
`,n.jsx(i.h2,{id:"应用场景",children:"应用场景"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"菜单树渲染"}),`
`,n.jsx(i.li,{children:"组织架构展示"}),`
`,n.jsx(i.li,{children:"文件目录结构"}),`
`,n.jsx(i.li,{children:"评论嵌套展示"}),`
`]}),`
`,n.jsx(i.h2,{id:"源码实现",children:"源码实现"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(i.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(i.h3,{id:"list",children:"list"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"Array<{ id: string, pid: string, [key: string]: any }>"})]}),`
`,n.jsxs(i.li,{children:["描述：扁平数组，每个元素包含 ",n.jsx(i.code,{children:"id"})," 和 ",n.jsx(i.code,{children:"pid"}),"（父节点 id）"]}),`
`]}),`
`,n.jsx(i.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"Array"})]}),`
`,n.jsxs(i.li,{children:["描述：树形结构数组，每个节点包含 ",n.jsx(i.code,{children:"children"})," 属性"]}),`
`]}),`
`,n.jsx(i.h2,{id:"时间复杂度",children:"时间复杂度"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"时间复杂度"}),"：O(n)，两次遍历"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"空间复杂度"}),"：O(n)，哈希表存储"]}),`
`]}),`
`,n.jsx(i.h2,{id:"注意事项",children:"注意事项"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:["确保 ",n.jsx(i.code,{children:"id"})," 唯一"]}),`
`,n.jsxs(i.li,{children:["根节点的 ",n.jsx(i.code,{children:"pid"})," 为空或不存在于列表中"]}),`
`,n.jsx(i.li,{children:"原数组会被修改（添加 children 属性）"}),`
`]})]})}function m(e={}){const{wrapper:i}={...d(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
